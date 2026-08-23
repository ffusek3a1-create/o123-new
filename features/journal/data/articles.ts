import type { Locale } from "@/i18n/config";

import type { JournalArticle } from "../types";

const pl: JournalArticle[] = [
  {
    slug: "dlaczego-pamietamy-emocje",
    code: "LOG_001",
    series: "HUMAN_SYSTEMS",
    title: "Dlaczego pamiętamy emocje, a nie wydarzenia?",
    description:
      "Większość wydarzeń znika z pamięci szybciej, niż zakładamy. Dlaczego kilka dobrze zaprojektowanych momentów ma większe znaczenie niż perfekcyjnie zrealizowany harmonogram?",
    published: "2026-08-16",
    image: "/images/article_1.jpg",
    imageAlt:
      "Uczestnicy wydarzenia przeżywający wspólne, emocjonujące doświadczenie",
    readingTime: "4 MIN",
  },
  {
    slug: "fyre-festival-nie-upadl-przez-brak-pieniedzy",
    code: "REPORT_002",
    series: "EVENT_AUTOPSY",
    title: "Fyre Festival nie upadł przez brak pieniędzy.",
    description:
      "Najgłośniejsza katastrofa eventowa XXI wieku nie zaczęła się na Bahamach. Zaczęła się znacznie wcześniej — w momencie, gdy marketing całkowicie oderwał się od rzeczywistości.",
    published: "2026-08-22",
    image: "/images/article_2.jpg",
    imageAlt:
      "Niedokończona infrastruktura festiwalowa symbolizująca porażkę Fyre Festival",
    readingTime: "8 MIN",
  },
  {
    slug: "tomorrowland-po-pozarze-main-stage",
    code: "REPORT_003",
    series: "EVENT_AUTOPSY",
    title:
      "Tomorrowland po pożarze Main Stage. Jak uratować wydarzenie, które właśnie przestało istnieć?",
    description:
      "Na kilkadziesiąt godzin przed otwarciem festiwalu główna scena stanęła w ogniu. Analiza decyzji, które pozwoliły ochronić jedną z najsilniejszych marek w branży eventowej.",
    published: "2026-08-29",
    image: "/images/article_3.jpg",
    imageAlt:
      "Scena festiwalowa podczas przygotowań do wydarzenia po pożarze głównej sceny",
    readingTime: "7 MIN",
  },
];

const en: JournalArticle[] = [
  {
    slug: "dlaczego-pamietamy-emocje",
    code: "LOG_001",
    series: "HUMAN_SYSTEMS",
    title: "Why do we remember emotions rather than events?",
    description:
      "Most events disappear from memory faster than we expect. Why do a few well-designed moments matter more than a perfectly executed schedule?",
    published: "2026-08-16",
    image: "/images/article_1.jpg",
    imageAlt:
      "Event participants sharing an emotional experience together",
    readingTime: "4 MIN",
  },
  {
    slug: "fyre-festival-nie-upadl-przez-brak-pieniedzy",
    code: "REPORT_002",
    series: "EVENT_AUTOPSY",
    title: "Fyre Festival did not fail because it ran out of money.",
    description:
      "The most infamous event disaster of the 21st century did not begin in the Bahamas. It began much earlier — when marketing became completely detached from reality.",
    published: "2026-08-22",
    image: "/images/article_2.jpg",
    imageAlt:
      "Unfinished festival infrastructure representing the failure of Fyre Festival",
    readingTime: "8 MIN",
  },
  {
    slug: "tomorrowland-po-pozarze-main-stage",
    code: "REPORT_003",
    series: "EVENT_AUTOPSY",
    title:
      "Tomorrowland after the Main Stage fire. How do you save an event that has just ceased to exist?",
    description:
      "Only dozens of hours before the festival opened, its main stage caught fire. An analysis of the decisions that helped protect one of the strongest brands in the event industry.",
    published: "2026-08-29",
    image: "/images/article_3.jpg",
    imageAlt:
      "Festival stage during event preparations after the main stage fire",
    readingTime: "7 MIN",
  },
];

const de: JournalArticle[] = [
  {
    slug: "dlaczego-pamietamy-emocje",
    code: "LOG_001",
    series: "HUMAN_SYSTEMS",
    title: "Warum erinnern wir uns an Emotionen und nicht an Ereignisse?",
    description:
      "Die meisten Veranstaltungen verschwinden schneller aus unserer Erinnerung, als wir denken. Warum sind einige bewusst gestaltete Momente wichtiger als ein perfekt umgesetzter Zeitplan?",
    published: "2026-08-16",
    image: "/images/article_1.jpg",
    imageAlt:
      "Teilnehmer einer Veranstaltung erleben gemeinsam einen emotionalen Moment",
    readingTime: "4 MIN",
  },
  {
    slug: "fyre-festival-nie-upadl-przez-brak-pieniedzy",
    code: "REPORT_002",
    series: "EVENT_AUTOPSY",
    title: "Das Fyre Festival scheiterte nicht an fehlendem Geld.",
    description:
      "Die wohl bekannteste Event-Katastrophe des 21. Jahrhunderts begann nicht auf den Bahamas. Sie begann viel früher — in dem Moment, als sich das Marketing vollständig von der Realität löste.",
    published: "2026-08-22",
    image: "/images/article_2.jpg",
    imageAlt:
      "Unvollendete Festivalinfrastruktur als Symbol für das Scheitern des Fyre Festivals",
    readingTime: "8 MIN",
  },
  {
    slug: "tomorrowland-po-pozarze-main-stage",
    code: "REPORT_003",
    series: "EVENT_AUTOPSY",
    title:
      "Tomorrowland nach dem Brand der Main Stage. Wie rettet man ein Event, das gerade aufgehört hat zu existieren?",
    description:
      "Nur wenige Dutzend Stunden vor Festivalbeginn stand die Hauptbühne in Flammen. Eine Analyse der Entscheidungen, mit denen eine der stärksten Marken der Eventbranche geschützt wurde.",
    published: "2026-08-29",
    image: "/images/article_3.jpg",
    imageAlt:
      "Festivalbühne während der Veranstaltungsvorbereitungen nach dem Brand der Hauptbühne",
    readingTime: "7 MIN",
  },
];

const cs: JournalArticle[] = [
  {
    slug: "dlaczego-pamietamy-emocje",
    code: "LOG_001",
    series: "HUMAN_SYSTEMS",
    title: "Proč si pamatujeme emoce, a ne události?",
    description:
      "Většina událostí mizí z paměti rychleji, než očekáváme. Proč má několik dobře navržených momentů větší význam než dokonale realizovaný harmonogram?",
    published: "2026-08-16",
    image: "/images/article_1.jpg",
    imageAlt:
      "Účastníci akce společně prožívající silný emocionální zážitek",
    readingTime: "4 MIN",
  },
  {
    slug: "fyre-festival-nie-upadl-przez-brak-pieniedzy",
    code: "REPORT_002",
    series: "EVENT_AUTOPSY",
    title: "Fyre Festival nezkrachoval kvůli nedostatku peněz.",
    description:
      "Nejznámější eventová katastrofa 21. století nezačala na Bahamách. Začala mnohem dříve — ve chvíli, kdy se marketing zcela odtrhl od reality.",
    published: "2026-08-22",
    image: "/images/article_2.jpg",
    imageAlt:
      "Nedokončená festivalová infrastruktura symbolizující neúspěch Fyre Festivalu",
    readingTime: "8 MIN",
  },
  {
    slug: "tomorrowland-po-pozarze-main-stage",
    code: "REPORT_003",
    series: "EVENT_AUTOPSY",
    title:
      "Tomorrowland po požáru Main Stage. Jak zachránit událost, která právě přestala existovat?",
    description:
      "Pouhých několik desítek hodin před otevřením festivalu zachvátil hlavní scénu požár. Analýza rozhodnutí, která pomohla ochránit jednu z nejsilnějších značek eventového odvětví.",
    published: "2026-08-29",
    image: "/images/article_3.jpg",
    imageAlt:
      "Festivalová scéna během příprav akce po požáru hlavní scény",
    readingTime: "7 MIN",
  },
];

export const journalArticlesByLocale: Record<Locale, JournalArticle[]> = {
  pl,
  en,
  de,
  cs,
};

export function getJournalArticles(locale: Locale): JournalArticle[] {
  return journalArticlesByLocale[locale];
}

export function getJournalArticleBySlug(
  locale: Locale,
  slug: string,
): JournalArticle | undefined {
  return getJournalArticles(locale).find((article) => article.slug === slug);
}

export function getJournalArticleByCode(
  locale: Locale,
  code: string,
): JournalArticle | undefined {
  return getJournalArticles(locale).find((article) => article.code === code);
}

export const journalArticles = pl;