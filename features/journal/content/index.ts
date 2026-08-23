import type { Locale } from "@/i18n/config";

import { dlaczegoPamietamyEmocje } from "./dlaczego-pamietamy-emocje";
import { fyreFestival } from "./fyre-festival";
import { tomorrowland } from "./tomorrowland";

export const journalContent = {
  pl: {
    "dlaczego-pamietamy-emocje": dlaczegoPamietamyEmocje.pl,
    "fyre-festival-nie-upadl-przez-brak-pieniedzy": fyreFestival.pl,
    "tomorrowland-po-pozarze-main-stage": tomorrowland.pl,
  },
  en: {
    "dlaczego-pamietamy-emocje": dlaczegoPamietamyEmocje.en,
    "fyre-festival-nie-upadl-przez-brak-pieniedzy": fyreFestival.en,
    "tomorrowland-po-pozarze-main-stage": tomorrowland.en,
  },
  de: {
    "dlaczego-pamietamy-emocje": dlaczegoPamietamyEmocje.de,
    "fyre-festival-nie-upadl-przez-brak-pieniedzy": fyreFestival.de,
    "tomorrowland-po-pozarze-main-stage": tomorrowland.de,
  },
  cs: {
    "dlaczego-pamietamy-emocje": dlaczegoPamietamyEmocje.cs,
    "fyre-festival-nie-upadl-przez-brak-pieniedzy": fyreFestival.cs,
    "tomorrowland-po-pozarze-main-stage": tomorrowland.cs,
  },
} as const;

export function getJournalContent(
  locale: Locale,
  slug: string,
) {
  const localizedContent = journalContent[locale];

  return localizedContent[
    slug as keyof typeof localizedContent
  ];
}