import type { Locale } from "./config";

import cs from "./dictionaries/cs";
import de from "./dictionaries/de";
import en from "./dictionaries/en";
import pl from "./dictionaries/pl";

const dictionaries = {
  pl,
  en,
  de,
  cs,
} as const;

export async function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
