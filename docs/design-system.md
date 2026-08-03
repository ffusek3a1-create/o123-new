# o123 Design System

> Status: work in progress  
> Source of truth: Figma → this document → CSS tokens → typography classes  
> Last documented files: `tokens.css`, `typography.css`

---

## 1. Foundations

The o123 interface is built from a small set of reusable foundations:

- two font families,
- three core colors,
- responsive page gutters,
- semantic typography tokens,
- reusable typography classes.

### Implementation flow

```text
Figma specification
        ↓
docs/design-system.md
        ↓
tokens.css
        ↓
typography.css
        ↓
React components
```

### General rules

1. Values defined in Figma must be documented before they are implemented.
2. Existing design tokens should be reused instead of duplicating raw values.
3. Typography in components should use semantic classes from `typography.css`.
4. Raw font sizes, weights, line heights and letter spacing should not be added when an appropriate typography class already exists.
5. Values not confirmed in Figma or the current CSS files must not be invented.
6. Section-specific geometry belongs in the **Sections** chapter, not in global tokens.
7. Undocumented “magic numbers” should be avoided. A local value may be used only when it represents a confirmed, section-specific Figma measurement.

---

## 2. Breakpoints

The project distinguishes between Figma reference widths and CSS implementation breakpoints.

### Figma reference widths

| View    | Reference width |
| ------- | --------------: |
| Mobile  |         `402px` |
| Tablet  |         `834px` |
| Desktop |        `1728px` |

### CSS implementation breakpoints

| Breakpoint     | CSS rule                     | Purpose                                |
| -------------- | ---------------------------- | -------------------------------------- |
| Base           | below `834px`                | Mobile-first styles                    |
| Tablet         | `@media (min-width: 834px)`  | Tablet typography and gutter           |
| Desktop layout | `@media (min-width: 1440px)` | Desktop gutter and desktop button size |

`1440px` is the current desktop implementation breakpoint. `1728px` is the desktop Figma reference width. They are not interchangeable.

---

## 3. Grid & Layout

### Page gutter

The horizontal page gutter is controlled by `--page-gutter`.

| View                          |   Value |
| ----------------------------- | ------: |
| Mobile                        |  `16px` |
| Tablet, from `834px`          |  `32px` |
| Desktop layout, from `1440px` | `124px` |

Usage:

```tsx
className = "px-[var(--page-gutter)]";
```

### Values not yet documented

The current source files do not define confirmed global values for:

- desktop content width,
- maximum container width,
- guide line position,
- content offset,
- global section width.

These values should be added only after confirmation in Figma or the relevant layout component.

---

## 4. Spacing

A global spacing scale has not yet been defined in `tokens.css`.

At the current stage:

- `--page-gutter` is the only documented global spacing token,
- section-specific spacing is documented per section,
- repeated spacing values may become global tokens only after a recurring pattern is confirmed.

No global spacing scale should be inferred from individual Tailwind values.

---

## 5. Typography

This chapter preserves the typography specification from Figma. It must not be replaced by implementation-only token names.

### 5.1 Font families

| Role       | Font family        | CSS source                                     |
| ---------- | ------------------ | ---------------------------------------------- |
| Sans-serif | Jost               | `--font-sans: var(--font-jost)`                |
| Serif      | Cormorant Garamond | `--font-serif: var(--font-cormorant-garamond)` |

### 5.2 H1 / Display

| View    | Font               |       Weight |   Size | Line height | Letter spacing |
| ------- | ------------------ | -----------: | -----: | ----------: | -------------: |
| Desktop | Cormorant Garamond | Medium `500` | `90px` |      `100%` |           `0%` |
| Tablet  | Cormorant Garamond | Medium `500` | `64px` |      `100%` |           `0%` |
| Mobile  | Cormorant Garamond | Medium `500` | `48px` |      `100%` |           `0%` |

CSS mapping:

| Layer                | Value                           |
| -------------------- | ------------------------------- |
| Class                | `.type-display`                 |
| Family token         | `--font-display-family`         |
| Size token           | `--font-display-size`           |
| Weight token         | `--font-display-weight`         |
| Line-height token    | `--font-display-line-height`    |
| Letter-spacing token | `--font-display-letter-spacing` |

Responsive implementation:

```css
--font-display-size: clamp(3rem, 8vw, 4rem);
```

From `834px`:

```css
--font-display-size: clamp(4rem, calc(2.4841rem + 2.9083vw), 5.625rem);
```

Implementation note: `--font-display-family` exists in `tokens.css`, but `.type-display` currently uses `var(--font-serif)`. The visual result is the same, but the semantic token is bypassed.

### 5.3 H2 / Heading XL

| View    | Font |     Weight |   Size | Line height | Letter spacing |
| ------- | ---- | ---------: | -----: | ----------: | -------------: |
| Desktop | Jost | Bold `700` | `64px` |      `120%` |          `-2%` |
| Tablet  | Jost | Bold `700` | `48px` |      `120%` |          `-2%` |
| Mobile  | Jost | Bold `700` | `39px` |      `120%` |          `-2%` |

CSS mapping:

| Layer                | Value                              |
| -------------------- | ---------------------------------- |
| Class                | `.type-heading-xl`                 |
| Family token         | `--font-heading-xl-family`         |
| Size token           | `--font-heading-xl-size`           |
| Weight token         | `--font-heading-xl-weight`         |
| Line-height token    | `--font-heading-xl-line-height`    |
| Letter-spacing token | `--font-heading-xl-letter-spacing` |

Responsive implementation:

```css
--font-heading-xl-size: clamp(39px, calc(30.625px + 2.083333vw), 48px);
```

From `834px`:

```css
--font-heading-xl-size: clamp(48px, calc(33.073826px + 1.789709vw), 64px);
```

### 5.4 H3 / Heading Large

| View    | Font |     Weight |   Size | Line height | Letter spacing |
| ------- | ---- | ---------: | -----: | ----------: | -------------: |
| Desktop | Jost | Bold `700` | `46px` |      `120%` |          `-4%` |
| Tablet  | Jost | Bold `700` | `36px` |      `120%` |          `-4%` |
| Mobile  | Jost | Bold `700` | `32px` |      `120%` |          `-4%` |

Intended mapping: `.type-heading-lg` → `--font-heading-lg-*`.

The class exists in `typography.css`, but the corresponding tokens are not present in the supplied `tokens.css`.

### 5.5 H3 Offer / Heading Serif

| View    | Font               |         Weight |   Size | Line height | Letter spacing |
| ------- | ------------------ | -------------: | -----: | ----------: | -------------: |
| Desktop | Cormorant Garamond | SemiBold `600` | `46px` |      `120%` |           `0%` |
| Tablet  | Cormorant Garamond | SemiBold `600` | `36px` |      `120%` |           `0%` |
| Mobile  | Cormorant Garamond | SemiBold `600` | `32px` |      `120%` |           `0%` |

Intended mapping: `.type-heading-serif` → `--font-heading-serif-*`.

The class exists in `typography.css`, but the corresponding tokens are not present in the supplied `tokens.css`.

### 5.6 Button

| View    | Font |        Weight |   Size | Line height | Letter spacing |
| ------- | ---- | ------------: | -----: | ----------: | -------------: |
| Desktop | Jost | Regular `400` | `24px` |      `28px` |          `-1%` |
| Tablet  | Jost | Regular `400` | `20px` |      `28px` |          `-1%` |
| Mobile  | Jost | Regular `400` | `20px` |      `28px` |          `-1%` |

Mapping: `.type-button` → `--font-button-*`.

Base and tablet:

```css
--font-button-size: 1.25rem;
```

From `1440px`:

```css
--font-button-size: 1.5rem;
```

Line height remains `1.75rem`.

### 5.7 Body Base

| Font |        Weight |   Size | Line height | Letter spacing |
| ---- | ------------: | -----: | ----------: | -------------: |
| Jost | Regular `400` | `16px` |      `175%` |          `-2%` |

Mapping: `.type-body` → `--font-body-*`.

### 5.8 Body Caption

| Font |        Weight |   Size | Line height | Letter spacing |
| ---- | ------------: | -----: | ----------: | -------------: |
| Jost | Regular `400` | `13px` |      `120%` |           `0%` |

Mapping: `.type-caption` → `--font-caption-*`.

`--font-caption-opacity: 0.82` exists in `tokens.css`, but `.type-caption` does not currently apply it. Opacity is controlled locally by components.

### 5.9 Body Small

| View    | Font |        Weight |          Size |   Line height | Letter spacing |
| ------- | ---- | ------------: | ------------: | ------------: | -------------: |
| Desktop | Jost | Regular `400` |        `14px` |        `120%` |          `-1%` |
| Tablet  | Jost | Regular `400` |        `14px` |        `120%` |          `-1%` |
| Mobile  | Jost | Regular `400` | Not specified | Not specified |  Not specified |

Intended mapping: `.type-small` → `--font-small-*`.

The class exists in `typography.css`, but the corresponding tokens are not present in the supplied `tokens.css`. The mobile specification must not be inferred.

### 5.10 Body Medium / Lead

| View    | Font |        Weight |   Size | Line height | Letter spacing |
| ------- | ---- | ------------: | -----: | ----------: | -------------: |
| Desktop | Jost | Regular `400` | `24px` |      `175%` |          `-2%` |
| Tablet  | Jost | Regular `400` | `20px` |      `175%` |          `-2%` |
| Mobile  | Jost | Regular `400` | `18px` |      `175%` |          `-2%` |

Intended mapping: `.type-lead` → `--font-lead-*`.

The class exists in `typography.css`, but the corresponding tokens are not present in the supplied `tokens.css`.

### 5.11 Body Large / Lead Large

| View    | Font |        Weight |   Size | Line height | Letter spacing |
| ------- | ---- | ------------: | -----: | ----------: | -------------: |
| Desktop | Jost | Regular `400` | `32px` |      `120%` |          `-1%` |
| Tablet  | Jost | Regular `400` | `24px` |      `28px` |          `-1%` |
| Mobile  | Jost | Regular `400` | `20px` |      `28px` |          `-1%` |

Intended mapping: `.type-lead-lg` → `--font-lead-lg-*`.

The class exists in `typography.css`, but the corresponding tokens are not present in the supplied `tokens.css`.

### 5.12 Shared typography behavior

`typography.css` defines:

```css
.type-heading,
.type-text {
  margin: 0;
}
```

These reset classes do not automatically affect the semantic classes unless both classes are assigned to the same element, for example:

```tsx
<h2 className="type-heading type-heading-xl">Heading</h2>
<p className="type-text type-body">Paragraph</p>
```

A separate global reset may make this unnecessary, but that cannot be confirmed from the two supplied files alone.

### 5.13 Typography implementation matrix

| Figma style              | CSS class             | Tokens available | Status                         |
| ------------------------ | --------------------- | ---------------- | ------------------------------ |
| H1 / Display             | `.type-display`       | Yes              | Implemented                    |
| H2 / Heading XL          | `.type-heading-xl`    | Yes              | Implemented                    |
| H3 / Heading Large       | `.type-heading-lg`    | No               | Class prepared, tokens missing |
| H3 Offer / Heading Serif | `.type-heading-serif` | No               | Class prepared, tokens missing |
| Body Large               | `.type-lead-lg`       | No               | Class prepared, tokens missing |
| Body Medium              | `.type-lead`          | No               | Class prepared, tokens missing |
| Body Base                | `.type-body`          | Yes              | Implemented                    |
| Body Small               | `.type-small`         | No               | Class prepared, tokens missing |
| Body Caption             | `.type-caption`       | Yes              | Implemented                    |
| Button                   | `.type-button`        | Yes              | Implemented                    |

---

## 6. Colors

### Core palette

| Name     | CSS token          | Value     |
| -------- | ------------------ | --------- |
| Burgundy | `--color-burgundy` | `#3a0f17` |
| Sand     | `--color-sand`     | `#f9f5e3` |
| Blush    | `--color-blush`    | `#f3dde0` |

### Semantic colors

| Role       | CSS token            | Source                  |
| ---------- | -------------------- | ----------------------- |
| Background | `--color-background` | `var(--color-sand)`     |
| Foreground | `--color-foreground` | `var(--color-burgundy)` |

Components should prefer semantic tokens for generic roles. Named palette tokens may be used when a component intentionally switches the relationship between colors.

---

## 7. CSS Token Reference

Implemented groups:

```css
--font-sans
--font-serif
--color-*
--page-gutter
--font-display-*
--font-heading-xl-*
--font-body-*
--font-caption-*
--font-button-*
```

Referenced but not yet defined:

```css
--font-heading-lg-*
--font-heading-serif-*
--font-lead-lg-*
--font-lead-*
--font-small-*
```

---

## 8. Components

Component documentation will be added only for components that exist and have confirmed behavior.

Recommended structure:

```text
Purpose
Variants
Typography
Colors
Spacing
Responsive behavior
Interaction
Accessibility
Implementation path
```

Known reusable typography classes:

```css
.type-display
.type-heading-xl
.type-heading-lg
.type-heading-serif
.type-lead-lg
.type-lead
.type-body
.type-small
.type-caption
.type-button
```

---

## 9. Motion

No global motion tokens were present in the supplied `tokens.css` or `typography.css`.

Motion values should not be inferred from individual components. Repeated durations or easing curves may be promoted to tokens after the system is reviewed globally.

---

## 10. Images

### Default image behaviour

Unless explicitly stated otherwise:

- Images use `next/image`.
- Images use `object-fit: cover`.
- Default focal point is the center (`object-position: center`).
- Images have no border radius.
- Mobile and tablet images span the full content width defined by `--page-gutter`.
- Desktop image dimensions are defined per section in Figma.

No global image tokens or image rules were present in the supplied source files.

Future documentation may include aspect ratios, object-fit behavior, responsive sizing, positioning, loading strategy and accessibility requirements.

---

## 11. Sections

Section documentation records geometry and behavior that should not become global tokens.

### Hero

Desktop:

- section number is placed in the left rail at the top,
- project caption is placed in the left rail at the bottom,
- coordinates are placed vertically in the right rail.

Tablet and mobile:

- metadata becomes a horizontal caption row,
- project caption is placed on the left,
- section number is placed on the right.

The Hero section is considered complete.

### Introduction

Mobile and tablet:

- content follows a natural vertical flow,
- confirmed vertical rhythm: `32px`.

Desktop Figma reference:

```text
Section: 1728 × 872px
Image: X 712px / Y 312px / 304 × 276px
Paragraph: X 996px / Y 620px / 560 × 180px
Paragraph bottom offset: 72px
```

The image is centered relative to the entire section, not relative to a right-side column.

Confirmed spacing:

```text
H2 → image: 32px
image → paragraph: 32px
paragraph → CTA: 32px
```

The CTA belongs below the paragraph.

The desktop composition is intentionally not a standard two-column grid:

- heading content occupies the left area,
- image is centered against the whole section,
- paragraph and CTA occupy the lower-right area.

---

## 12. Open Implementation Items

1. Add tokens for `.type-heading-lg`.
2. Add tokens for `.type-heading-serif`.
3. Add tokens for `.type-lead-lg`.
4. Add tokens for `.type-lead`.
5. Add tokens for `.type-small`.
6. Confirm the missing mobile specification for Body Small.
7. Decide whether `.type-display` should use `--font-display-family`.
8. Decide whether `--font-caption-opacity` belongs inside `.type-caption` or remains component-specific.
9. Confirm whether heading/text margin reset is global or must be applied through `.type-heading` and `.type-text`.
10. Document global layout values only after confirmation in Figma or source code.

---

## 13. Change Log

### Initial structured version

Created from:

- the existing `docs/design-system.md`,
- the supplied `tokens.css`,
- the supplied `typography.css`,
- confirmed Hero and Introduction decisions.

## Journal – Dynamic Information Panel

Druga kolumna sekcji **Journal** jest celowo zaprojektowana jako moduł dynamiczny. Na etapie startu firmy nie będzie prezentować realizacji ani opinii klientów. Jej rolą jest rozwijać się razem z marką, bez konieczności przebudowy layoutu.

Układ kolumny pozostaje niezmienny – zmienia się wyłącznie zawartość.

### Etap 1 – Brand Statement (start)

```
(0123) BRAND
(WRO) SIEDZIBA
(PL/EU) ZASIĘG

Krótki statement marki.
```

### Etap 2 – Client Note

```
CLIENT NOTE

"To nie był event.
To było doświadczenie."

— Nazwa klienta
```

### Etap 3 – Latest Project

```
LATEST PROJECT

Nazwa projektu
Lokalizacja
Rok
```

### Etap 4 – Brand Metrics

```
IN NUMBERS

46 projects
8 countries
97% returning clients
```

### Założenie projektowe

Ta kolumna ma być „żywym modułem” strony. Wraz z rozwojem o123 będzie prezentować najbardziej wartościowe informacje o marce (opinie klientów, najnowsze realizacje, osiągnięcia lub kluczowe statystyki), zachowując ten sam minimalistyczny układ i estetykę.

## Homepage – Final CTA

### Główny nagłówek

> Każda historia zaczyna się od rozmowy.

### Założenie projektowe

Ostatnia sekcja strony nie ma być klasycznym CTA sprzedażowym. Jej zadaniem jest płynne domknięcie narracji całej strony i zaproszenie do pierwszego kontaktu.

Komunikacja marki o123 opiera się na projektowaniu doświadczeń, emocji i historii, dlatego końcowy komunikat również powinien zachęcać do rozpoczęcia wspólnego procesu, a nie bezpośrednio do zakupu usługi.

Priorytetem jest budowanie relacji zamiast wywierania presji sprzedażowej.

No missing values were invented.
