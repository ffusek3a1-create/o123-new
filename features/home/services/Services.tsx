import Container from "@/components/ui/Container";
import GuideLines from "@/components/ui/GuideLines";

import type { ServiceCategoryId } from "./data";

import ExperiencePhilosophy from "./components/ExperiencePhilosophy";
import ServicesCategories from "./components/ServicesCategories";

type PrincipleTextSegment = {
  text: string;
  emphasized?: boolean;
};

type ExperiencePrinciple = {
  number: string;
  category: string;
  title: string;
  description: readonly PrincipleTextSegment[];
};

type ServicesPhilosophyContent = {
  heading: {
    firstLine: string;
    secondLine: string;
  };
  principles: readonly ExperiencePrinciple[];
};

type ServiceCategoryContent = {
  id: ServiceCategoryId;
  title: string;
  description: string;
};

type ServicesCategoriesContent = {
  heading: {
    firstLine: string;
    secondLine: string;
  };
  description: string;
  items: readonly ServiceCategoryContent[];
};

type ServicesProps = {
  philosophy: ServicesPhilosophyContent;
  categories: ServicesCategoriesContent;
};

const captionTypography = `
  font-[var(--font-caption-family)]
  text-[length:var(--font-caption-size)]
  font-[var(--font-caption-weight)]
  leading-[var(--font-caption-line-height)]
  tracking-[var(--font-caption-letter-spacing)]
  text-[var(--color-sand)]
  opacity-[var(--font-caption-opacity)]
`;

export default function Services({ philosophy, categories }: ServicesProps) {
  return (
    <section
      id="services"
      data-back-to-top-theme="sand"
      className="
        relative
        bg-[var(--color-burgundy)]
        text-[var(--color-sand)]
        min-[1440px]:pt-[72px]
      "
    >
      <GuideLines className="border-[var(--color-sand)]/35" />

      {/* Desktop left caption rail */}
      <div
        className={`
          pointer-events-none
          absolute
          inset-y-0
          left-0
          z-20
          hidden
          w-[var(--page-gutter)]
          min-[1440px]:block
          ${captionTypography}
        `}
      >
        <p
          className="
            absolute
            left-1/2
            top-[72px]
            -translate-x-1/2
            rotate-180
            whitespace-nowrap
            [writing-mode:vertical-rl]
          "
        >
          03/05
        </p>

        <p
          className="
            absolute
            bottom-[72px]
            left-1/2
            -translate-x-1/2
            rotate-180
            whitespace-nowrap
            [writing-mode:vertical-rl]
          "
        >
          o123 || Services
        </p>
      </div>

      {/* Desktop right caption rail */}
      <div
        className={`
          pointer-events-none
          absolute
          inset-y-0
          right-0
          z-20
          hidden
          w-[var(--page-gutter)]
          min-[1440px]:block
          ${captionTypography}
        `}
      >
        <p
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            whitespace-nowrap
            [writing-mode:vertical-rl]
          "
        >
          52°36&apos;N 17°02&apos;E || Beyond horizons
        </p>
      </div>

      <Container
        className="
          min-[1440px]:px-[calc(var(--page-gutter)+48px)]
        "
      >
        <ExperiencePhilosophy content={philosophy} />

        <ServicesCategories content={categories} />
      </Container>
    </section>
  );
}
