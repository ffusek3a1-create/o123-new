"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

import { defaultLocale, isLocale, locales, type Locale } from "@/i18n/config";

const localeLabels: Record<Locale, string> = {
  pl: "PL",
  en: "EN",
  de: "DE",
  cs: "CS",
};

function getCurrentLocale(pathname: string): Locale {
  const firstSegment = pathname.split("/").filter(Boolean)[0];

  return firstSegment && isLocale(firstSegment) ? firstSegment : defaultLocale;
}

function getLocalizedPath(pathname: string, targetLocale: Locale) {
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) {
    return `/${targetLocale}`;
  }

  if (isLocale(segments[0])) {
    segments[0] = targetLocale;
  } else {
    segments.unshift(targetLocale);
  }

  return `/${segments.join("/")}`;
}

type LanguageSwitcherProps = {
  className?: string;
};

export default function LanguageSwitcher({
  className = "",
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentLocale = getCurrentLocale(pathname);
  const queryString = searchParams.toString();

  return (
    <nav
      aria-label="Language selection"
      className={`flex items-center whitespace-nowrap ${className}`}
    >
      {locales.map((locale, index) => {
        const isActive = locale === currentLocale;

        const localizedPath = getLocalizedPath(pathname, locale);

        const href = queryString
          ? `${localizedPath}?${queryString}`
          : localizedPath;

        return (
          <span key={locale} className="flex items-center">
            {index > 0 && (
              <span aria-hidden="true" className="type-caption mx-2 opacity-35">
                /
              </span>
            )}

            <Link
              href={href}
              hrefLang={locale}
              lang={locale}
              aria-current={isActive ? "page" : undefined}
              onClick={(event) => {
                const hash = window.location.hash;

                if (!hash) {
                  return;
                }

                event.preventDefault();
                window.location.assign(`${href}${hash}`);
              }}
              className={[
                "type-text type-caption uppercase tracking-[0.12em]",
                "transition-opacity duration-200 ease-out",
                isActive
                  ? "pointer-events-none opacity-100"
                  : "opacity-45 hover:opacity-100",
              ].join(" ")}
            >
              {localeLabels[locale]}
            </Link>
          </span>
        );
      })}
    </nav>
  );
}
