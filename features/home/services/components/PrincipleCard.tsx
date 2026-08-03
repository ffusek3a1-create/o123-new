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

type PrincipleCardProps = {
  principle: ExperiencePrinciple;
};

export default function PrincipleCard({ principle }: PrincipleCardProps) {
  return (
    <article className="flex flex-col gap-4">
      <p className="type-text type-body uppercase">
        <span>{principle.number}</span>
        <span aria-hidden="true"> / </span>
        <span>{principle.category}</span>
      </p>

      <h3 className="type-heading type-heading-lg">{principle.title}</h3>

      <p className="type-text type-body">
        {principle.description.map((segment, index) =>
          segment.emphasized ? (
            <strong key={index} className="font-bold">
              {segment.text}
            </strong>
          ) : (
            <span key={index}>{segment.text}</span>
          )
        )}
      </p>
    </article>
  );
}
