# Motion System

Version: 1.0

---

# Philosophy

Motion exists to support content, not to attract attention.

The o123 motion language is:

- calm
- elegant
- narrative
- subtle
- intentional

Motion should guide attention, reinforce hierarchy and support the rhythm of the page.

Animations must never delay access to content or become more important than the content itself.

Existing animations remain unchanged unless a separate modification is explicitly approved.

---

# Design Principles

## Calm

Motion is subtle and controlled.

Elements should feel gently revealed rather than dynamically introduced.

## Elegant

Movement is minimal.

Large translations, bouncing, overshooting and aggressive scaling are not part of the o123 motion language.

## Narrative

Content may appear progressively to support hierarchy and reading order.

Animations should not create long sequences that force the user to wait.

## Consistent

New motion must use the shared motion tokens and components.

Individual sections should not introduce unrelated animation timings, distances or easing values.

## Accessible

Motion must respect user preferences and preserve access to all content.

## Content First

The page must remain understandable and usable without animation.

Motion enhances the experience but never compensates for weak layout, typography or hierarchy.

---

# Performance Rules

The default animated properties are:

- opacity
- transform

Avoid animating:

- width
- height
- top
- right
- bottom
- left
- margin
- padding

Motion must not cause layout shifts.

JavaScript animation loops are not used for standard reveal animations.

Simple effects must not require an external animation library.

`will-change` should only be active while an element is waiting to animate.

---

# Accessibility

Every motion component must:

- support `prefers-reduced-motion`
- preserve keyboard navigation
- preserve DOM order
- preserve semantic HTML
- preserve SEO content
- avoid layout shifts
- avoid taking or moving focus
- keep content available if JavaScript does not run

When `prefers-reduced-motion: reduce` is active:

- reveal transitions are disabled
- transforms are removed
- content is immediately visible
- existing reduced-motion rules remain active

---

# Motion Tokens

Motion tokens are defined in:

```text
styles/animations.css