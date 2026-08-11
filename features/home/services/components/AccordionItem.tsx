import type { ServiceCategory } from "../data";

import AccordionPanel from "./AccordionPanel";

type AccordionItemProps = {
  category: ServiceCategory;
  isOpen?: boolean;
  onClick?: () => void;
};

export default function AccordionItem({
  category,
  isOpen = false,
  onClick,
}: AccordionItemProps) {
  const itemId = `service-category-${category.number}`;
  const buttonId = `${itemId}-button`;
  const panelId = `${itemId}-panel`;

  const headerStyles = isOpen
    ? "border-b border-[var(--color-burgundy)]/35 bg-[var(--color-sand)] text-[var(--color-burgundy)]"
    : "bg-[var(--color-burgundy)] text-[var(--color-sand)]";

  const panelVisibilityStyles = isOpen
    ? "visible"
    : "invisible delay-700 motion-reduce:delay-0";

  const panelHeightStyles = isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]";

  return (
    <article className="-mx-[var(--page-gutter)] border-t border-[var(--color-sand)]/35 min-[1440px]:-mx-12">
      <h3>
        <button
          id={buttonId}
          type="button"
          onClick={onClick}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className={`
            flex
            w-full
            items-center
            px-[var(--page-gutter)]
            py-10
            text-left
            transition-colors
            duration-300
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-inset
            focus-visible:ring-current
            motion-reduce:transition-none
            min-[1440px]:px-12
            min-[1440px]:py-12
            ${headerStyles}
          `}
        >
          <span className="type-text type-caption">{category.number}</span>

          <span className="ml-10 type-heading type-heading-serif min-[1440px]:ml-12">
            {category.title}
          </span>

          <span
            aria-hidden="true"
            className="ml-auto type-text type-button leading-none"
          >
            {isOpen ? "−" : "+"}
          </span>
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        aria-hidden={!isOpen}
        className={`grid transition-[grid-template-rows] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:duration-0 ${panelHeightStyles}`}
      >
        <div
          className={`min-h-0 overflow-hidden transition-[visibility] ${panelVisibilityStyles}`}
        >
          <AccordionPanel category={category} />
        </div>
      </div>
    </article>
  );
}