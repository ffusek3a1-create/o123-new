import type { JournalArticle } from "../types";

export const journalArticles: JournalArticle[] = [
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
      "Scena festiwalowa odbudowywana po pożarze podczas przygotowań do wydarzenia",
    readingTime: "7 MIN",
  },
];