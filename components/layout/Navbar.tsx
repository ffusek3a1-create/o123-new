"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useModal } from "@/components/modals/ModalProvider";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { defaultLocale, isLocale, type Locale } from "@/i18n/config";

type NavbarProps = {
  menuDescriptions: {
    services: string;
    about: string;
    journal: string;
    contact: string;
  };
};

const focusableElementsSelector = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
].join(",");

function getCurrentLocale(pathname: string): Locale {
  const firstPathSegment = pathname.split("/").filter(Boolean)[0];

  return firstPathSegment && isLocale(firstPathSegment)
    ? firstPathSegment
    : defaultLocale;
}

export default function Navbar({ menuDescriptions }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNotFoundPage, setIsNotFoundPage] = useState(false);

  const { openModal } = useModal();

  const pathname = usePathname();
  const currentLocale = getCurrentLocale(pathname);

  const journalPath = `/${currentLocale}/journal`;
  const isJournalRoute =
    pathname === journalPath || pathname.startsWith(`${journalPath}/`);

  const aboutPath = `/${currentLocale}/about`;
  const isAboutRoute = pathname === aboutPath;

  useEffect(() => {
    function syncNotFoundState() {
      setIsNotFoundPage(
        document.documentElement.dataset.notFoundPage === "true",
      );
    }

    syncNotFoundState();
    window.addEventListener("o123:not-found-change", syncNotFoundState);

    return () => {
      window.removeEventListener("o123:not-found-change", syncNotFoundState);
    };
  }, [pathname]);

  const openMenuButtonRef = useRef<HTMLButtonElement>(null);
  const menuDialogRef = useRef<HTMLDivElement>(null);
  const shouldRestoreFocusRef = useRef(true);

  const menuItems = [
    {
      label: "SERVICES",
      description: menuDescriptions.services,
      href: `/${currentLocale}#services`,
    },
    {
      label: "ABOUT",
      description: menuDescriptions.about,
      href: `/${currentLocale}/about`,
    },
    {
      label: "JOURNAL",
      description: menuDescriptions.journal,
      href: `/${currentLocale}/journal`,
    },
    {
      label: "CONTACT",
      description: menuDescriptions.contact,
      href: `/${currentLocale}/contact`,
    },
  ];

  const closeMenu = useCallback((restoreFocus = true) => {
    shouldRestoreFocusRef.current = restoreFocus;

    const activeElement = document.activeElement;

    if (
      activeElement instanceof HTMLElement &&
      menuDialogRef.current?.contains(activeElement)
    ) {
      if (restoreFocus) {
        openMenuButtonRef.current?.focus();
      } else {
        activeElement.blur();
      }
    }

    setIsMenuOpen(false);
  }, []);

  function openMenu() {
    shouldRestoreFocusRef.current = true;
    setIsMenuOpen(true);
  }

  useEffect(() => {
    if (isMenuOpen) {
      return;
    }

    if (!shouldRestoreFocusRef.current) {
      shouldRestoreFocusRef.current = true;
      return;
    }

    openMenuButtonRef.current?.focus();
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const previousBodyOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      const focusableElements =
        menuDialogRef.current?.querySelectorAll<HTMLElement>(
          focusableElementsSelector,
        );

      focusableElements?.[0]?.focus();
    }, 180);

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu(true);
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusableElements = Array.from(
        menuDialogRef.current?.querySelectorAll<HTMLElement>(
          focusableElementsSelector,
        ) ?? [],
      ).filter((element) => {
        return (
          !element.hasAttribute("disabled") &&
          element.getAttribute("aria-hidden") !== "true"
        );
      });

      if (focusableElements.length === 0) {
        event.preventDefault();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      const activeElement = document.activeElement;

      if (event.shiftKey && activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
        return;
      }

      if (!event.shiftKey && activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      window.removeEventListener("keydown", handleKeyDown);

      document.body.style.overflow = previousBodyOverflow;
    };
  }, [closeMenu, isMenuOpen]);

  return (
    <>
      <header
        className={[
          "z-40 border-b border-[var(--color-sand)]/35 py-12 text-[var(--color-sand)]",
          isAboutRoute
            ? "absolute inset-x-0 top-0 bg-transparent"
            : "relative",
          isAboutRoute
            ? "bg-transparent"
            : isNotFoundPage
              ? "bg-[var(--color-burgundy)]"
              : isJournalRoute
                ? "bg-[#1C2A25]"
                : "bg-[var(--color-burgundy)]",
        ].join(" ")}
      >
        <div className="px-[var(--page-gutter)]">
          <div className="flex items-center justify-between">
            <Link
              href={`/${currentLocale}`}
              aria-label="o123 — home"
              className="inline-flex items-center"
            >
              <img
                src="/images/o123-logo.svg"
                alt="o123"
                className="h-auto w-[58px] min-[834px]:w-[64px]"
              />
            </Link>

            <nav aria-label="Primary navigation">
              <ul className="flex flex-nowrap items-center whitespace-nowrap md:gap-8 min-[1440px]:gap-16">
                <li className="hidden md:block">
                  <button
                    type="button"
                    onClick={() =>
                      openModal("schedule", {
                        ctaLocation: "navbar",
                      })
                    }
                    className="group inline-flex items-center gap-3 type-button text-[var(--color-sand)]"
                  >
                    <span
                      aria-hidden="true"
                      className="relative top-px inline-flex shrink-0 items-center justify-center leading-none transition-transform duration-300 ease-out group-hover:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none"
                    >
                      →
                    </span>

                    <span className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 after:ease-out group-hover:after:scale-x-100 motion-reduce:after:transition-none">
                      Schedule a call
                    </span>
                  </button>
                </li>

                <li>
                  <button
                    type="button"
                    onClick={() =>
                      openModal("quote", {
                        ctaLocation: "navbar",
                      })
                    }
                    className="group inline-flex items-center gap-3 type-button text-[var(--color-sand)]"
                  >
                    <span
                      aria-hidden="true"
                      className="relative top-px inline-flex shrink-0 items-center justify-center leading-none transition-transform duration-300 ease-out group-hover:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none"
                    >
                      →
                    </span>

                    <span className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 after:ease-out group-hover:after:scale-x-100 motion-reduce:after:transition-none">
                      Request a quote
                    </span>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Tablet / desktop language switcher */}
        <div className="absolute bottom-2 left-1/2 hidden -translate-x-1/2 min-[834px]:block">
          <LanguageSwitcher />
        </div>

        <button
          ref={openMenuButtonRef}
          type="button"
          aria-label="Open menu"
          aria-expanded={isMenuOpen}
          aria-controls="main-menu"
          onClick={openMenu}
          className={[
            "absolute left-1/2 top-0 z-30 h-7 w-20 -translate-x-1/2",
            "bg-[var(--color-sand)] text-[var(--color-burgundy)]",
            "transition-[opacity,transform] duration-300 ease-out",
            "[clip-path:polygon(0_0,100%_0,84%_100%,16%_100%)]",
            "min-[1440px]:h-8 min-[1440px]:w-24",
            isMenuOpen
              ? "pointer-events-none -translate-y-2 opacity-0"
              : "translate-y-0 opacity-100",
          ].join(" ")}
        >
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-[4px]"
          >
            <span className="h-[2px] w-5 bg-current" />
            <span className="h-[2px] w-5 bg-current" />
            <span className="h-[2px] w-5 bg-current" />
          </span>
        </button>
      </header>

      <div
        className={[
          "fixed inset-0 z-50",
          "transition-[background-color,backdrop-filter,opacity]",
          "ease-[cubic-bezier(0.22,1,0.36,1)]",
          isMenuOpen
            ? [
                "pointer-events-auto",
                "bg-black/15 opacity-100 backdrop-blur-[3px]",
                "duration-[700ms]",
              ].join(" ")
            : [
                "pointer-events-none",
                "bg-black/0 opacity-0 backdrop-blur-0",
                "duration-[580ms]",
              ].join(" "),
        ].join(" ")}
        aria-hidden={!isMenuOpen}
        inert={!isMenuOpen}
      >
        <button
          type="button"
          aria-label="Close menu"
          tabIndex={-1}
          onClick={() => closeMenu(true)}
          className="absolute inset-0 cursor-default"
        />

        <div
          ref={menuDialogRef}
          id="main-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Main menu"
          className={[
            "absolute left-1/2 top-0 z-10",
            "w-[min(calc(100vw-32px),440px)] -translate-x-1/2 origin-top",
            "will-change-[clip-path,transform,opacity]",
            "transition-[clip-path,transform,opacity]",
            "ease-[cubic-bezier(0.22,1,0.36,1)]",
            isMenuOpen
              ? [
                  "translate-y-0 scale-100 opacity-100",
                  "duration-[720ms]",
                  "[clip-path:inset(0_0_0_0)]",
                ].join(" ")
              : [
                  "-translate-y-2 scale-[0.99] opacity-0",
                  "duration-[520ms]",
                  "[clip-path:inset(0_0_100%_0)]",
                ].join(" "),
          ].join(" ")}
        >
          <div className="bg-[var(--color-sand)] px-7 pb-8 pt-10 text-[var(--color-burgundy)] md:px-9 md:pb-9 md:pt-12">
            <div
              className={[
                "relative flex items-center justify-between pb-5",
                "transition-[opacity,transform]",
                "ease-[cubic-bezier(0.22,1,0.36,1)]",
                isMenuOpen
                  ? "translate-y-0 opacity-100 delay-[100ms] duration-[420ms]"
                  : "-translate-y-1 opacity-0 delay-0 duration-[200ms]",
              ].join(" ")}
            >
              <span className="type-caption uppercase">
                Navigation
              </span>

              <span className="type-caption opacity-60">
                o123
              </span>

              <span
                aria-hidden="true"
                className={[
                  "absolute bottom-0 left-0 h-px w-full origin-left",
                  "bg-[var(--color-burgundy)]/20",
                  "transition-[transform,opacity]",
                  "ease-[cubic-bezier(0.22,1,0.36,1)]",
                  isMenuOpen
                    ? "scale-x-100 opacity-100 delay-[120ms] duration-[520ms]"
                    : "scale-x-0 opacity-0 delay-0 duration-[220ms]",
                ].join(" ")}
              />
            </div>

            <nav aria-label="Menu navigation">
              <ul>
                {menuItems.map((item, index) => (
                  <li
                    key={item.href}
                    className="group/item relative"
                  >
                    <Link
                      href={item.href}
                      tabIndex={isMenuOpen ? 0 : -1}
                      onClick={() => closeMenu(false)}
                      style={{
                        transitionDelay: isMenuOpen
                          ? `${160 + index * 60}ms`
                          : `${(menuItems.length - index - 1) * 20}ms`,
                      }}
                      className={[
                        "group relative grid grid-cols-[24px_1fr_20px] items-start gap-x-4 py-5",
                        "transition-[opacity,transform]",
                        "ease-[cubic-bezier(0.22,1,0.36,1)]",
                        isMenuOpen
                          ? "translate-y-0 opacity-100 duration-[460ms]"
                          : "-translate-y-2 opacity-0 duration-[260ms]",
                      ].join(" ")}
                    >
                      <span className="type-caption pt-[3px] opacity-40">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="flex flex-col gap-[6px]">
                        <span className="type-button">
                          {item.label}
                        </span>

                        <span className="type-small opacity-50">
                          {item.description}
                        </span>
                      </span>

                      <span
                        aria-hidden="true"
                        className={[
                          "type-small flex justify-end pt-[2px] opacity-70",
                          "transition-[transform,opacity] duration-300",
                          "ease-[cubic-bezier(0.22,1,0.36,1)]",
                          "group-hover:translate-x-[2px]",
                          "group-hover:-translate-y-[2px]",
                          "group-hover:opacity-100",
                        ].join(" ")}
                      >
                        ↗
                      </span>

                      <span
                        aria-hidden="true"
                        className={[
                          "absolute bottom-0 left-0 h-px w-full origin-left",
                          "bg-[var(--color-burgundy)]/20",
                          "transition-[transform,opacity,background-color]",
                          "duration-[500ms]",
                          "ease-[cubic-bezier(0.22,1,0.36,1)]",
                          isMenuOpen
                            ? "scale-x-100 opacity-100"
                            : "scale-x-0 opacity-0",
                          "group-hover/item:bg-[var(--color-burgundy)]/35",
                        ].join(" ")}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div
              aria-label="Menu footer"
              className={[
                "mt-7",
                "transition-[opacity,transform]",
                "ease-[cubic-bezier(0.22,1,0.36,1)]",
                isMenuOpen
                  ? "translate-y-0 opacity-100 delay-[390ms] duration-[420ms]"
                  : "-translate-y-1 opacity-0 delay-0 duration-[220ms]",
              ].join(" ")}
            >
              <div className="flex items-center justify-between">
                <span className="type-caption uppercase opacity-45">
                  Wrocław · Poland
                </span>

                <div
                  aria-label="Social media"
                  className="flex items-center gap-4"
                >
                  <a
                    href="#"
                    tabIndex={isMenuOpen ? 0 : -1}
                    aria-label="Instagram"
                    className="type-caption opacity-70 transition-opacity duration-200 hover:opacity-40"
                  >
                    IG
                  </a>

                  <a
                    href="#"
                    tabIndex={isMenuOpen ? 0 : -1}
                    aria-label="LinkedIn"
                    className="type-caption opacity-70 transition-opacity duration-200 hover:opacity-40"
                  >
                    IN
                  </a>

                  <a
                    href="#"
                    tabIndex={isMenuOpen ? 0 : -1}
                    aria-label="X"
                    className="type-caption opacity-70 transition-opacity duration-200 hover:opacity-40"
                  >
                    X
                  </a>
                </div>
              </div>

              {/* Mobile language switcher */}
              <div className="mt-5 min-[834px]:hidden">
                <LanguageSwitcher />
              </div>
            </div>
          </div>

          <button
            type="button"
            aria-label="Close menu"
            tabIndex={isMenuOpen ? 0 : -1}
            onClick={() => closeMenu(true)}
            className={[
              "mx-auto flex h-11 w-24 items-center justify-center",
              "origin-top will-change-transform",
              "bg-[var(--color-sand)] text-[var(--color-burgundy)]",
              "transition-[opacity,transform]",
              "ease-[cubic-bezier(0.22,1,0.36,1)]",
              "hover:opacity-80",
              "[clip-path:polygon(0_0,100%_0,78%_100%,22%_100%)]",
              isMenuOpen
                ? "translate-y-0 scale-100 opacity-100 delay-[280ms] duration-[420ms]"
                : "-translate-y-1 scale-[0.98] opacity-0 delay-0 duration-[220ms]",
            ].join(" ")}
          >
            <Icon
              icon="material-symbols:close-rounded"
              width="24"
              height="24"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </>
  );
}