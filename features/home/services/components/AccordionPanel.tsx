import Image from "next/image";

import ButtonLink from "@/components/ui/ButtonLink";
import { preventPolishOrphans } from "@/lib/preventPolishOrphans";

import type { ServiceCategory } from "../data";

import { ImageReveal } from "./motion/ImageReveal";

type AccordionPanelProps = {
  category: ServiceCategory;
};

export default function AccordionPanel({ category }: AccordionPanelProps) {
  const imageSlots = [category.images[0], category.images[1]];

  return (
    <div className="bg-[var(--color-sand)]">
      <div className="flex flex-col gap-12 p-6 min-[834px]:grid min-[834px]:grid-cols-2 min-[834px]:items-stretch min-[834px]:gap-12 min-[834px]:p-12">
        <div className="flex flex-col gap-10 min-[834px]:justify-between min-[834px]:gap-0">
          <p className="w-full type-text type-body text-[var(--color-burgundy)] min-[834px]:max-w-[404px] min-[1440px]:max-w-[420px]">
            {preventPolishOrphans(category.description)}
          </p>

          <ButtonLink
            href="#contact"
            className="self-start text-[var(--color-burgundy)] min-[834px]:mt-16"
          >
            Discover more
          </ButtonLink>
        </div>

        <div className="w-full min-[834px]:grid min-[834px]:h-full min-[834px]:grid-cols-[repeat(2,minmax(0,128px))] min-[834px]:justify-end min-[834px]:gap-12 min-[1440px]:grid-cols-2">
          {imageSlots.map((image, index) => (
            <ImageReveal
              key={`${category.number}-image-${index}`}
              delay={index * 80}
              className={`
                relative
                aspect-[4/3]
                w-full
                bg-[var(--color-burgundy)]/10
                ${index === 1 ? "hidden min-[834px]:block" : "block"}
                min-[834px]:h-full
                min-[834px]:min-h-[360px]
                min-[834px]:aspect-auto
                min-[1440px]:h-auto
                min-[1440px]:min-h-0
                min-[1440px]:aspect-[3/4]
              `}
            >
              <div className="image-frame h-full w-full after:pointer-events-none after:absolute after:inset-0 after:content-[''] after:shadow-[inset_0_0_32px_rgba(58,15,23,0.7)]">
                {image && (
                  <Image
                    src={image}
                    alt=""
                    fill
                    sizes="(max-width: 833px) calc(100vw - 80px), (max-width: 1439px) 128px, 25vw"
                    className="object-cover"
                  />
                )}
              </div>
            </ImageReveal>
          ))}
        </div>
      </div>
    </div>
  );
}