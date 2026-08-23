import Link from "next/link";

import type { Locale } from "@/i18n/config";

type FooterProps = {
  locale: Locale;
};

const footerLinkClassName = `
  relative
  inline-flex
  w-fit
  transition-opacity
  duration-300
  after:absolute
  after:bottom-0
  after:left-0
  after:h-px
  after:w-full
  after:origin-left
  after:scale-x-0
  after:bg-current
  after:transition-transform
  after:duration-300
  hover:opacity-70
  hover:after:scale-x-100
  motion-reduce:after:transition-none
`;

const legalLabels: Record<
  Locale,
  {
    privacy: string;
    terms: string;
  }
> = {
  pl: {
    privacy: "Polityka prywatności",
    terms: "Regulamin",
  },
  en: {
    privacy: "Privacy Policy",
    terms: "Terms & Conditions",
  },
  de: {
    privacy: "Datenschutzerklärung",
    terms: "Nutzungsbedingungen",
  },
  cs: {
    privacy: "Zásady ochrany osobních údajů",
    terms: "Podmínky používání",
  },
};

const socialLinkClassName = `
  type-caption
  uppercase
  opacity-70
  transition-[opacity,transform]
  duration-200
  ease-out
  hover:-translate-y-0.5
  hover:opacity-40
  focus-visible:outline
  focus-visible:outline-2
  focus-visible:outline-offset-4
  focus-visible:outline-current
  motion-reduce:transform-none
  motion-reduce:transition-none
`;

export default function Footer({
  locale,
}: FooterProps) {
  const labels = legalLabels[locale];

  return (
    <footer className="border-t border-[var(--color-sand)]/30 text-[var(--color-sand)]">
      <div className="px-[var(--page-gutter)]">
        <div
          className="
            grid
            grid-cols-1
            gap-y-10
            py-10

            min-[834px]:grid-cols-2
            min-[834px]:gap-x-12
            min-[834px]:gap-y-12
            min-[834px]:py-12

            min-[1440px]:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr_0.8fr]
            min-[1440px]:gap-12
          "
        >
          <div
            className="
              min-[834px]:col-span-2
              min-[1440px]:col-span-1
            "
          >
            <p className="type-display">
              o123
            </p>
          </div>

          <div>
            <p className="type-caption uppercase opacity-60">
              E-mail
            </p>

            <a
              href="mailto:hello@o123.pl"
              className={`mt-4 type-text type-body ${footerLinkClassName}`}
            >
              hello@o123.pl
            </a>
          </div>

          <div>
            <p className="type-caption uppercase opacity-60">
              Phone / WhatsApp
            </p>

            <a
              href="https://wa.me/48533615713"
              target="_blank"
              rel="noreferrer"
              className={`mt-4 type-text type-body ${footerLinkClassName}`}
            >
              +48 533 615 713
            </a>
          </div>

          <div>
            <p className="type-caption uppercase opacity-60">
              Location
            </p>

            <p className="mt-4 type-text type-body">
              Wrocław, Poland
            </p>
          </div>

          <div>
            <p className="type-caption uppercase opacity-60">
              Follow
            </p>

            <div
              aria-label="Social media"
              className="mt-4 flex items-center gap-4"
            >
              <a
                href="#linkedin"
                aria-label="LinkedIn"
                className={socialLinkClassName}
              >
                IN
              </a>

              <a
                href="#instagram"
                aria-label="Instagram"
                className={socialLinkClassName}
              >
                IG
              </a>

              <a
                href="#facebook"
                aria-label="Facebook"
                className={socialLinkClassName}
              >
                FB
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--color-sand)]/20">
        <div
          className="
            flex
            flex-col
            gap-5
            px-[var(--page-gutter)]
            py-5

            min-[834px]:grid
            min-[834px]:grid-cols-[1fr_auto_1fr]
            min-[834px]:items-center
            min-[834px]:gap-8
            min-[834px]:py-6
          "
        >
          <p className="type-caption opacity-60">
            © o123 2026
          </p>

          <div
            className="
              flex
              flex-col
              items-start
              gap-y-3
              type-caption
              uppercase

              min-[834px]:flex-row
              min-[834px]:flex-wrap
              min-[834px]:items-center
              min-[834px]:justify-self-center
              min-[834px]:gap-x-6
              min-[834px]:gap-y-2
            "
          >
            <Link
              href={`/${locale}/privacy`}
              className={footerLinkClassName}
            >
              {labels.privacy}
            </Link>

            <Link
              href={`/${locale}/terms`}
              className={footerLinkClassName}
            >
              {labels.terms}
            </Link>
          </div>

          <p
            className="
              type-caption
              opacity-60
              min-[834px]:justify-self-end
              min-[834px]:text-right
            "
          >
            Made by @Pepiqity
          </p>
        </div>
      </div>
    </footer>
  );
}