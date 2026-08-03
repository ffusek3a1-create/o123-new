"use client";

import { useState } from "react";

import { preventPolishOrphans } from "@/lib/preventPolishOrphans";

import {
  serviceCategoryMedia,
  type ServiceCategory,
  type ServiceCategoryId,
} from "../data";

import AccordionItem from "./AccordionItem";

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

type ServicesCategoriesProps = {
  content: ServicesCategoriesContent;
};

export default function ServicesCategories({
  content,
}: ServicesCategoriesProps) {
  const [openCategory, setOpenCategory] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenCategory((currentIndex) => (currentIndex === index ? null : index));
  };

  return (
    <section
      aria-labelledby="services-categories-heading"
      className="relative z-10 mt-[120px] block min-[1440px]:mt-[144px]"
    >
      <div className="flex flex-col items-start gap-y-8 min-[1440px]:grid min-[1440px]:grid-cols-2 min-[1440px]:items-center min-[1440px]:gap-x-20 min-[1440px]:gap-y-0">
        <h2
          id="services-categories-heading"
          className="type-heading type-heading-xl"
        >
          {content.heading.firstLine}
          <br />
          {content.heading.secondLine}
        </h2>

        <p className="type-text type-body max-w-[520px] min-[1440px]:max-w-none">
          {preventPolishOrphans(content.description)}
        </p>
      </div>

      <div className="mt-[96px] block border-b border-[var(--color-sand)]/35 min-[1440px]:mt-[144px]">
        {content.items.map((item, index) => {
          const media = serviceCategoryMedia[item.id];

          const category: ServiceCategory = {
            id: item.id,
            number: media.number,
            title: item.title,
            description: item.description,
            images: media.images,
          };

          return (
            <AccordionItem
              key={category.id}
              category={category}
              isOpen={openCategory === index}
              onClick={() => handleToggle(index)}
            />
          );
        })}
      </div>
    </section>
  );
}
