import Image from "next/image";

const contactLinkClassName =
  "group type-button inline-flex items-center gap-4 whitespace-nowrap uppercase text-[var(--color-sand)]";

const contactArrowClassName =
  "inline-flex shrink-0 items-center justify-center leading-none transition-transform duration-300 ease-out group-hover:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none";

const contactLabelClassName =
  "relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 after:ease-out group-hover:after:scale-x-100 motion-reduce:after:transition-none";

const socialLinkClassName =
  "group type-text type-lead inline-flex items-center gap-3 uppercase text-[var(--color-sand)]";

const socialArrowClassName =
  "inline-flex shrink-0 items-center justify-center leading-none transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none";

const socialLabelClassName =
  "relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 after:ease-out group-hover:after:scale-x-100 motion-reduce:after:transition-none";

type ContactContent = {
  availability: string;
  establishment: string;

  heading: {
    firstLine: string;
    secondLine: string;
  };

  description: string;

  actions: {
    startProject: string;
    letsChat: string;
  };

  accessibility: {
    sectionLabel: string;
    socialMedia: string;
  };

  details: {
    contactLabel: string;
    addressFirstLine: string;
    addressSecondLine: string;
    phone: string;
    emailPromptFirstLine: string;
    emailPromptSecondLine: string;
    email: string;
    mediaLabel: string;
  };

  footer: {
    copyright: string;
    brand: string;
    terms: string;
    privacyPolicy: string;
    author: string;
  };
};

type ContactProps = {
  content: ContactContent;
};

function AvailabilityStatus() {
  return (
    <div className="flex items-center gap-4">
      <Image
        src="/images/open.png"
        alt=""
        width={60}
        height={60}
        className="size-[60px] shrink-0 object-cover"
      />

      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="relative flex size-4 shrink-0 items-center justify-center"
          >
            <span className="contact-status-dot__pulse absolute size-4 rounded-full bg-[#72b88d]/45" />
            <span className="relative size-2.5 rounded-full bg-[#72b88d]" />
          </span>

          <p className="type-text type-lead uppercase">Open for projects</p>

          <span aria-hidden="true" className="type-text type-lead">
            ↗
          </span>
        </div>

        <p className="type-text type-small uppercase">
          Est. Wrocław // Q3 2026
        </p>
      </div>
    </div>
  );
}

function ContactActions() {
  return (
    <div className="flex flex-wrap items-center gap-x-8 gap-y-6">
      <a href="#start-project" className={contactLinkClassName}>
        <span aria-hidden="true" className={contactArrowClassName}>
          →
        </span>

        <span className={contactLabelClassName}>Start a project</span>
      </a>

      <a href="#lets-chat" className={contactLinkClassName}>
        <span aria-hidden="true" className={contactArrowClassName}>
          →
        </span>

        <span className={contactLabelClassName}>Let&apos;s chat</span>
      </a>
    </div>
  );
}

function SocialLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href} className={socialLinkClassName}>
      <span aria-hidden="true" className={socialArrowClassName}>
        ↗
      </span>

      <span className={socialLabelClassName}>{children}</span>
    </a>
  );
}

export default function Contact({ content }: ContactProps) {
  return (
    <section
      id="contact"
      aria-label={content.accessibility.sectionLabel}
      data-back-to-top-theme="sand"
      className="relative"
    >
      <div className="relative z-10">
        {/* Mobile main layout */}
        <div className="px-4 py-8 min-[834px]:hidden">
          <AvailabilityStatus />

          <h2 className="mt-8 type-heading type-heading-xl">
            {content.heading.firstLine}
            <br />
            {content.heading.secondLine}
          </h2>

          <p className="mt-8 type-text type-body w-full max-w-[520px]">
            {content.description}
          </p>

          <div className="mt-8">
            <ContactActions />
          </div>
        </div>

        {/* Tablet main layout */}
        <div className="hidden px-8 pb-12 pt-12 min-[834px]:block min-[1440px]:hidden">
          <AvailabilityStatus />

          <h2 className="mt-16 type-heading type-heading-xl">
            {content.heading.firstLine}
            <br />
            {content.heading.secondLine}
          </h2>

          <div className="mt-16 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-8">
            <p className="type-text type-body w-full max-w-[420px]">
              {content.description}
            </p>

            <div className="justify-self-end">
              <ContactActions />
            </div>
          </div>
        </div>

        {/* Desktop main layout */}
        <div className="hidden px-[var(--page-gutter)] py-[72px] min-[1440px]:grid min-[1440px]:grid-cols-3">
          <div className="pl-12">
            <AvailabilityStatus />
          </div>

          <div className="col-span-2 pl-20">
            <h2 className="type-heading type-heading-xl">
              {content.heading.firstLine}
              <br />
              {content.heading.secondLine}
            </h2>

            <div className="mt-[144px] grid grid-cols-[minmax(0,1fr)_auto] items-center gap-8 pr-12">
              <p className="type-text type-body w-full max-w-[360px]">
                {content.description}
              </p>

              <div className="justify-self-end">
                <ContactActions />
              </div>
            </div>
          </div>
        </div>

        {/* Contact details */}
        <div className="min-[1440px]:mx-[var(--page-gutter)]">
          <div className="border-t border-[var(--color-sand)]/30">
            <div className="grid min-[834px]:grid-cols-3">
              {/* Contact */}
              <div className="px-4 py-4 min-[834px]:border-r min-[834px]:border-[var(--color-sand)]/30 min-[834px]:px-8 min-[834px]:py-6">
                <p className="type-text type-small uppercase">
                  {content.details.contactLabel}
                </p>

                <address className="mt-4 type-text type-lead not-italic">
                  <p>
                    {content.details.addressFirstLine}
                    <br />
                    {content.details.addressSecondLine}
                  </p>

                  <a href="tel:+48533615713" className="mt-3 inline-block">
                    {content.details.phone}
                  </a>
                </address>
              </div>

              {/* Email */}
              <div className="border-t border-[var(--color-sand)]/30 px-4 py-4 min-[834px]:border-r min-[834px]:border-t-0 min-[834px]:px-8 min-[834px]:py-6">
                <p className="type-text type-small uppercase">
                  {content.details.emailPromptFirstLine}
                  <br />
                  {content.details.emailPromptSecondLine}
                </p>

                <a
                  href="mailto:o123@event.pl"
                  className="mt-8 inline-block type-text type-lead-lg font-bold"
                >
                  {content.details.email}
                </a>
              </div>

              {/* Media */}
              <div className="border-t border-[var(--color-sand)]/30 px-4 py-4 min-[834px]:border-t-0 min-[834px]:px-8 min-[834px]:py-6">
                <p className="type-text type-small uppercase">
                  {content.details.mediaLabel}
                </p>

                <nav
                  aria-label={content.accessibility.socialMedia}
                  className="mt-4 flex flex-col items-start"
                >
                  <SocialLink href="#linkedin">LinkedIn</SocialLink>

                  <SocialLink href="#instagram">Instagram</SocialLink>

                  <SocialLink href="#facebook">FB</SocialLink>

                  <SocialLink href="#x">X</SocialLink>

                  <SocialLink href="#tiktok">TikTok</SocialLink>
                </nav>
              </div>
            </div>

            {/* Footer */}
            <footer className="border-t border-[var(--color-sand)]/30 pb-[72px]">
              <div className="flex flex-col gap-6 px-4 py-4 min-[834px]:grid min-[834px]:grid-cols-3 min-[834px]:items-start min-[834px]:gap-0 min-[834px]:px-8">
                <p className="type-text type-caption">
                  {content.footer.copyright}
                  <br />
                  {content.footer.brand}
                </p>

                <div className="flex items-center gap-1 type-text type-caption min-[834px]:justify-self-center">
                  <a href="/regulamin">{content.footer.terms}</a>

                  <span aria-hidden="true">,</span>

                  <a href="/polityka-prywatnosci">
                    {content.footer.privacyPolicy}
                  </a>
                </div>

                <p className="type-text type-caption min-[834px]:justify-self-end">
                  {content.footer.author}
                </p>
              </div>
            </footer>
          </div>
        </div>
      </div>

      <style>{`
        .contact-status-dot__pulse {
          animation: contact-status-pulse 2.6s ease-in-out infinite;
          transform-origin: center;
        }

        @keyframes contact-status-pulse {
          0%,
          100% {
            opacity: 0.35;
            transform: scale(0.9);
          }

          50% {
            opacity: 0.85;
            transform: scale(1.9);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .contact-status-dot__pulse {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
