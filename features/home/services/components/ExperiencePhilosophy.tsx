import Image from "next/image";

import { Reveal } from "@/components/motion/Reveal";
import SectionCaption from "@/components/ui/SectionCaption";

import PhotoCollage from "./PhotoCollage";
import PhotoColumn from "./PhotoColumn";
import PrincipleCard from "./PrincipleCard";

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

type ExperiencePhilosophyContent = {
  heading: {
    firstLine: string;
    secondLine: string;
  };
  principles: readonly ExperiencePrinciple[];
};

type ExperiencePhilosophyProps = {
  content: ExperiencePhilosophyContent;
};

export default function ExperiencePhilosophy({
  content,
}: ExperiencePhilosophyProps) {
  return (
    <div>
      {/* Mobile / Tablet caption */}
      <SectionCaption title="Services" number="03/05" />

      <Reveal distance="small" delay={60}>
        <h2
          className="
            type-heading
            type-heading-xl
            mt-12
            min-[834px]:mt-16
            min-[1440px]:mt-0
          "
        >
          {content.heading.firstLine}
          <br />
          {content.heading.secondLine}
        </h2>
      </Reveal>

      <div
        className="
          mt-8
          min-[834px]:grid
          min-[834px]:grid-cols-[158.22px_minmax(0,1fr)]
          min-[834px]:gap-x-8
          min-[834px]:mt-[72px]
          min-[1440px]:grid-cols-[321px_minmax(0,1fr)]
          min-[1440px]:gap-x-20
        "
      >
        {/* Tablet */}
        <div className="hidden self-center min-[834px]:block min-[1440px]:hidden">
          <PhotoColumn />
        </div>

        {/* Desktop */}
        <div className="hidden min-[1440px]:block min-[1440px]:self-center">
          <PhotoCollage />
        </div>

        {/* Principles */}
        <div
          className="
            grid
            gap-y-8
            min-[834px]:grid-cols-2
            min-[834px]:gap-x-10
            min-[834px]:gap-y-20
            min-[1440px]:grid-cols-3
            min-[1440px]:gap-x-12
            min-[1440px]:gap-y-[72px]
          "
        >
          {content.principles.map((principle, index) => (
            <Reveal
              key={principle.number}
              distance="small"
              delay={160 + index * 70}
              className="h-full"
            >
              <PrincipleCard principle={principle} />
            </Reveal>
          ))}

          {/* Mobile image */}
          <div className="col-span-full min-[834px]:hidden">
            <div className="relative aspect-[370/199] w-full overflow-hidden">
              <Image
                src="/images/services/06-drifting.png"
                alt=""
                fill
                className="object-cover object-center"
                sizes="calc(100vw - 32px)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}