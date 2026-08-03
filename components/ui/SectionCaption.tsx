type SectionCaptionProps = {
  title: string;
  number: string;
  className?: string;
};

const captionTypography = `
  font-[var(--font-caption-family)]
  text-[length:var(--font-caption-size)]
  font-[var(--font-caption-weight)]
  leading-[var(--font-caption-line-height)]
  tracking-[var(--font-caption-letter-spacing)]
  opacity-[var(--font-caption-opacity)]
`;

export default function SectionCaption({
  title,
  number,
  className = "",
}: SectionCaptionProps) {
  return (
    <div
      className={`
        relative
        z-20
        flex
        items-center
        justify-between
        pt-[24px]
        min-[834px]:pt-[32px]
        min-[1440px]:hidden
        ${captionTypography}
        ${className}
      `}
    >
      <p>o123 || {title}</p>
      <p>{number}</p>
    </div>
  );
}