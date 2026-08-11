import Image from "next/image";

import { Reveal } from "@/components/motion/Reveal";
import ButtonLink from "@/components/ui/ButtonLink";

const articleTechnicalData = {
  dateTime: "2026-08-16",
  image: "/images/article_1.png",
  href: "/journal/dlaczego-pamietamy-emocje",
};

const captionClassName =
  "type-caption text-[var(--color-sand)] opacity-[var(--font-caption-opacity)]";

const borderClassName = "border-[var(--color-sand)]/40";

type JournalContent = {
  introductionHeading: {
    firstLine: string;
    secondLine: string;
  };

  aboutLabel: string;

  identity: {
    brand: string;
    headquarters: string;
    reach: string;
  };

  article: {
    title: string;
    date: string;
    alt: string;
  };

  readMoreLabel: string;
  closingStatement: string;

  accessibility: {
    articleNavigation: string;
    nextArticle: string;
    previousArticle: string;
  };
};

type JournalProps = {
  content: JournalContent;
};

export default function Journal({ content }: JournalProps) {
  const currentArticle = {
    ...articleTechnicalData,
    ...content.article,
  };

  const currentArticleNumber = String(1).padStart(2, "0");
  const totalArticlesNumber = String(1).padStart(2, "0");

  return (
    <section
      id="journal"
      aria-label="Journal"
      data-back-to-top-theme="sand"
      className="relative bg-[#1C2A25]"
    >
      {/* Mobile / tablet top captions */}
      <div
        className={`relative z-20 flex items-center justify-between px-4 pt-6 min-[834px]:px-8 min-[834px]:pt-8 min-[1440px]:hidden ${captionClassName}`}
      >
        <p>o123 || Journal</p>
        <p>05/05</p>
      </div>

      {/* Mobile layout */}
      <div className="relative z-10 min-[834px]:hidden">
        {/* Mobile heading */}
        <header className={`border-b ${borderClassName}`}>
          <div className="px-4 pb-12 pt-12">
            <Reveal distance="small" delay={60}>
              <h2 className="type-heading type-heading-xl">Journal</h2>
            </Reveal>
          </div>
        </header>

        {/* Mobile introduction */}
        <div className={`border-b ${borderClassName}`}>
          <div className="flex flex-col px-4 pb-4 pt-4">
            <Reveal distance="small" delay={80}>
              <h3 className="type-heading type-heading-lg">
                {content.introductionHeading.firstLine}
                <br />
                {content.introductionHeading.secondLine}
              </h3>
            </Reveal>

            <Reveal distance="small" delay={160}>
              <ButtonLink
                href="#contact"
                className="mt-8 self-start text-[var(--color-sand)]"
              >
                Get in touch
              </ButtonLink>
            </Reveal>
          </div>
        </div>

        {/* Mobile featured article */}
        <article>
          <div className={`border-b ${borderClassName}`}>
            <div className="px-4 pb-4 pt-4">
              <div className="relative aspect-[185/71] w-full overflow-hidden">
                <Image
                  src={currentArticle.image}
                  alt={currentArticle.alt}
                  fill
                  sizes="calc(100vw - 32px)"
                  className="object-cover"
                />
              </div>

              <Reveal distance="small" delay={80}>
                <h3 className="mt-2 type-text type-lead">
                  {currentArticle.title}
                </h3>
              </Reveal>

              <Reveal direction="none" duration="fast" delay={140}>
                <time
                  dateTime={currentArticle.dateTime}
                  className={`mt-2 block uppercase ${captionClassName}`}
                >
                  {currentArticle.date}
                </time>
              </Reveal>

              <Reveal distance="small" delay={200}>
                <ButtonLink
                  href={currentArticle.href}
                  className="mt-8 text-[var(--color-sand)]"
                >
                  {content.readMoreLabel}
                </ButtonLink>
              </Reveal>
            </div>
          </div>

          {/* Mobile article navigation */}
          <div className={`border-b ${borderClassName}`}>
            <div className="flex min-h-[74px] items-center justify-between px-4">
              <p className="type-text type-lead">
                {currentArticleNumber}/{totalArticlesNumber}
              </p>

              <div
                aria-label={content.accessibility.articleNavigation}
                className="flex items-center gap-6"
              >
                <button
                  type="button"
                  aria-label={content.accessibility.nextArticle}
                  className="type-button transition-transform duration-300 ease-out hover:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none"
                >
                  →
                </button>

                <button
                  type="button"
                  aria-label={content.accessibility.previousArticle}
                  className="type-button transition-transform duration-300 ease-out hover:-translate-x-1 motion-reduce:transform-none motion-reduce:transition-none"
                >
                  ←
                </button>
              </div>
            </div>
          </div>
        </article>

        {/* Mobile closing statement */}
        <div className="flex min-h-[184px] items-center justify-center px-4 text-center">
          <Reveal distance="small" delay={80}>
            <p className="type-text type-body">{content.closingStatement}</p>
          </Reveal>
        </div>
      </div>

      {/* Tablet layout */}
      <div className="relative z-10 hidden pt-20 min-[834px]:block min-[1440px]:hidden">
        {/* Tablet heading */}
        <header
          className={`flex min-h-[152px] items-center border-b px-8 ${borderClassName}`}
        >
          <Reveal distance="small" delay={60}>
            <h2 className="type-heading type-heading-xl">Journal</h2>
          </Reveal>
        </header>

        {/* Tablet content grid */}
        <div
          className={`grid grid-cols-[minmax(0,2fr)_minmax(0,1fr)] grid-rows-2 border-b ${borderClassName}`}
        >
          {/* Row 1 / Column 1 */}
          <div
            className={`flex min-h-[250px] flex-col justify-between border-b border-r p-8 ${borderClassName}`}
          >
            <Reveal distance="small" delay={80}>
              <h3 className="type-heading type-heading-lg">
                {content.introductionHeading.firstLine}
                <br />
                {content.introductionHeading.secondLine}
              </h3>
            </Reveal>

            <ButtonLink
              href="#about"
              className="text-[var(--color-sand)]"
            >
              {content.aboutLabel}
            </ButtonLink>
          </div>

          {/* Row 2 / Column 1 */}
          <div
            className={`flex min-h-[250px] flex-col justify-between border-r p-8 ${borderClassName}`}
          >
            <Reveal distance="small" delay={140}>
              <p className="type-text type-lead-lg uppercase">
                {content.identity.brand}
                <br />
                {content.identity.headquarters}
                <br />
                {content.identity.reach}
              </p>
            </Reveal>

            <ButtonLink
              href="#contact"
              className="text-[var(--color-sand)]"
            >
              Get in touch
            </ButtonLink>
          </div>

          {/* Column 2 / spans both rows */}
          <article className="col-start-2 row-span-2 row-start-1 flex min-w-0 flex-col">
            <div
              className={`flex min-h-0 flex-1 flex-col border-b p-4 ${borderClassName}`}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={currentArticle.image}
                  alt={currentArticle.alt}
                  fill
                  sizes="33vw"
                  className="object-cover"
                />
              </div>

              <Reveal distance="small" delay={100}>
                <h3 className="mt-3 type-text type-lead">
                  {currentArticle.title}
                </h3>
              </Reveal>

              <Reveal direction="none" duration="fast" delay={160}>
                <time
                  dateTime={currentArticle.dateTime}
                  className={`mt-3 uppercase ${captionClassName}`}
                >
                  {currentArticle.date}
                </time>
              </Reveal>

              <Reveal distance="small" delay={220} className="mt-auto pt-8">
                <ButtonLink
                  href={currentArticle.href}
                  className="text-[var(--color-sand)]"
                >
                  {content.readMoreLabel}
                </ButtonLink>
              </Reveal>
            </div>

            <div className="flex min-h-[74px] items-center justify-between px-4">
              <p className="type-text type-lead">
                {currentArticleNumber}/{totalArticlesNumber}
              </p>

              <div
                aria-label={content.accessibility.articleNavigation}
                className="flex items-center gap-6"
              >
                <button
                  type="button"
                  aria-label={content.accessibility.nextArticle}
                  className="type-button transition-transform duration-300 ease-out hover:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none"
                >
                  →
                </button>

                <button
                  type="button"
                  aria-label={content.accessibility.previousArticle}
                  className="type-button transition-transform duration-300 ease-out hover:-translate-x-1 motion-reduce:transform-none motion-reduce:transition-none"
                >
                  ←
                </button>
              </div>
            </div>
          </article>
        </div>

        {/* Tablet closing statement */}
        <div
          className={`flex min-h-[160px] items-center justify-center border-b px-8 text-center ${borderClassName}`}
        >
          <Reveal distance="small" delay={80}>
            <p className="type-text type-body max-w-[700px]">
              {content.closingStatement}
            </p>
          </Reveal>
        </div>
      </div>

      {/* Desktop layout */}
      <div className="relative z-10 hidden min-[1440px]:block min-[1440px]:px-[var(--page-gutter)]">
        <header
          className={`flex min-h-[216px] items-center border-b px-12 ${borderClassName}`}
        >
          <Reveal distance="small" delay={60}>
            <h2 className="type-heading type-heading-xl">Journal</h2>
          </Reveal>
        </header>

        <div
          className={`grid min-h-[468px] grid-cols-3 border-b ${borderClassName}`}
        >
          {/* Journal introduction panel */}
          <div
            className={`flex flex-col justify-between border-r p-4 ${borderClassName}`}
          >
            <Reveal distance="small" delay={100}>
              <h3 className="type-heading type-heading-lg">
                {content.introductionHeading.firstLine}
                <br />
                {content.introductionHeading.secondLine}
              </h3>
            </Reveal>

            <ButtonLink
              href="#about"
              className="text-[var(--color-sand)]"
            >
              {content.aboutLabel}
            </ButtonLink>
          </div>

          {/* Brand identity panel */}
          <div className={`flex flex-col border-r p-4 ${borderClassName}`}>
            <Reveal distance="small" delay={160}>
              <p className="type-text type-lead-lg uppercase">
                {content.identity.brand}
                <br />
                {content.identity.headquarters}
                <br />
                {content.identity.reach}
              </p>
            </Reveal>
          </div>

          {/* Featured article panel */}
          <article className="flex min-w-0 flex-col">
            <div
              className={`grid min-h-0 flex-1 grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] gap-4 border-b p-4 ${borderClassName}`}
            >
              <div className="relative min-h-0 overflow-hidden">
                <Image
                  src={currentArticle.image}
                  alt={currentArticle.alt}
                  fill
                  sizes="(max-width: 1727px) 190px, 230px"
                  className="object-cover"
                />
              </div>

              <Reveal
                distance="small"
                delay={220}
                className="flex min-w-0 flex-col"
              >
                <h3 className="type-text type-lead-lg">
                  {currentArticle.title}
                </h3>

                <time
                  dateTime={currentArticle.dateTime}
                  className={`mt-4 uppercase ${captionClassName}`}
                >
                  {currentArticle.date}
                </time>

                <ButtonLink
                  href={currentArticle.href}
                  className="mt-auto text-[var(--color-sand)]"
                >
                  {content.readMoreLabel}
                </ButtonLink>
              </Reveal>
            </div>

            <div className="flex min-h-[96px] items-center justify-between px-4">
              <p className="type-text type-lead">
                {currentArticleNumber}/{totalArticlesNumber}
              </p>

              <div
                aria-label={content.accessibility.articleNavigation}
                className="flex items-center gap-6"
              >
                <button
                  type="button"
                  aria-label={content.accessibility.nextArticle}
                  className="type-button transition-transform duration-300 ease-out hover:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none"
                >
                  →
                </button>

                <button
                  type="button"
                  aria-label={content.accessibility.previousArticle}
                  className="type-button transition-transform duration-300 ease-out hover:-translate-x-1 motion-reduce:transform-none motion-reduce:transition-none"
                >
                  ←
                </button>
              </div>
            </div>
          </article>
        </div>

        {/* Closing statement */}
        <div className="flex min-h-[200px] items-center justify-center text-center">
          <Reveal distance="small" delay={80}>
            <p className="type-text type-body">{content.closingStatement}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}