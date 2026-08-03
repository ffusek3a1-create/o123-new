type GuideLinesProps = {
  className?: string;
  leftTopCaption?: string;
  leftBottomCaption?: string;
  rightCaption?: string;
};

const captionClassName =
  "type-text type-caption text-[var(--color-sand)] opacity-[var(--font-caption-opacity)]";

export default function GuideLines({
  className = "",
  leftTopCaption,
  leftBottomCaption,
  rightCaption,
}: GuideLinesProps) {
  return (
    <>
      {/* Left desktop rail */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-y-0
          left-0
          z-20
          hidden
          w-[var(--page-gutter)]
          min-[1440px]:block
        "
      >
        {/* Left guideline */}
        <div
          className={`
            absolute
            inset-y-0
            right-0
            border-r
            ${className}
          `}
        />

        {leftTopCaption && (
          <p
            className={`
              absolute
              left-1/2
              top-[72px]
              -translate-x-1/2
              rotate-180
              whitespace-nowrap
              [writing-mode:vertical-rl]
              ${captionClassName}
            `}
          >
            {leftTopCaption}
          </p>
        )}

        {leftBottomCaption && (
          <p
            className={`
              absolute
              bottom-[72px]
              left-1/2
              -translate-x-1/2
              rotate-180
              whitespace-nowrap
              [writing-mode:vertical-rl]
              ${captionClassName}
            `}
          >
            {leftBottomCaption}
          </p>
        )}
      </div>

      {/* Right desktop rail */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-y-0
          right-0
          z-20
          hidden
          w-[var(--page-gutter)]
          min-[1440px]:block
        "
      >
        {/* Right guideline */}
        <div
          className={`
            absolute
            inset-y-0
            left-0
            border-l
            ${className}
          `}
        />

        {rightCaption && (
          <p
            className={`
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
              whitespace-nowrap
              [writing-mode:vertical-rl]
              ${captionClassName}
            `}
          >
            {rightCaption}
          </p>
        )}
      </div>
    </>
  );
}