export type JournalArticleSeries =
  | "HUMAN_SYSTEMS"
  | "EVENT_AUTOPSY"
  | "DECISION_LAB"
  | "FIELD_NOTES"
  | "BEHIND_THE_SCENES";

export type JournalArticle = {
  slug: string;
  code: string;
  series: JournalArticleSeries;
  title: string;
  description: string;
  published: string;
  image: string;
  imageAlt: string;
  readingTime: string;
};