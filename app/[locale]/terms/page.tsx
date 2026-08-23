import type { Metadata } from "next";

import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import type { Locale } from "@/i18n/config";

type TermsPageProps = {
  params: Promise<{
    locale: Locale;
  }>;
};

type TermsSection = {
  title: string;
  paragraphs?: readonly string[];
  items?: readonly string[];
};

type TermsContent = {
  metadata: {
    title: string;
    description: string;
  };
  label: string;
  heading: string;
  updated: string;
  intro: string;
  sections: readonly TermsSection[];
};

const termsContent: Record<Locale, TermsContent> = {
  pl: {
    metadata: {
      title: "Regulamin serwisu | o123",
      description:
        "Zasady korzystania z serwisu o123.pl oraz usług świadczonych drogą elektroniczną.",
    },
    label: "Legal / Terms",
    heading: "Regulamin serwisu",
    updated: "Ostatnia aktualizacja: 22 sierpnia 2026",
    intro:
      "Regulamin określa zasady korzystania z serwisu o123.pl oraz usług świadczonych za jego pośrednictwem drogą elektroniczną.",
    sections: [
      {
        title: "1. Usługodawca i kontakt",
        paragraphs: [
          "Serwis o123.pl jest prowadzony przez Filipa Fuska, działającego pod marką o123, ul. Bierutowska 8, 50-557 Wrocław.",
          "Kontakt elektroniczny z usługodawcą jest możliwy pod adresem hello@o123.pl.",
        ],
      },
      {
        title: "2. Zakres usług elektronicznych",
        items: [
          "udostępnianie treści i funkcjonalności serwisu internetowego,",
          "umożliwienie przesłania zapytania lub prośby o ofertę przez formularz,",
          "umożliwienie nawiązania kontaktu za pośrednictwem wskazanych kanałów komunikacji.",
        ],
      },
      {
        title: "3. Wymagania techniczne",
        paragraphs: [
          "Do korzystania z serwisu potrzebne są urządzenie z dostępem do Internetu, aktualna przeglądarka internetowa oraz — w przypadku kontaktu — aktywny adres e-mail. Użytkownik powinien korzystać z aktualnego oprogramowania i podstawowych zabezpieczeń urządzenia.",
        ],
      },
      {
        title: "4. Zasady korzystania",
        paragraphs: [
          "Użytkownik zobowiązuje się korzystać z serwisu zgodnie z prawem, dobrymi obyczajami i przeznaczeniem serwisu.",
        ],
        items: [
          "zabronione jest przekazywanie treści bezprawnych, naruszających prawa osób trzecich lub zawierających złośliwe oprogramowanie,",
          "zabronione są działania mające zakłócić działanie serwisu, obejść zabezpieczenia albo uzyskać nieuprawniony dostęp do systemów,",
          "dane przekazywane w formularzu powinny być prawdziwe w zakresie potrzebnym do obsługi zapytania.",
        ],
      },
      {
        title: "5. Formularz zapytania i zawarcie usługi elektronicznej",
        paragraphs: [
          "Korzystanie z formularza jest dobrowolne i bezpłatne. Usługa elektroniczna polegająca na przesłaniu zapytania rozpoczyna się w chwili wysłania formularza i kończy po przekazaniu zapytania do o123. Użytkownik może zrezygnować przed wysłaniem formularza, zamykając go lub opuszczając stronę.",
          "Przesłanie formularza nie oznacza zawarcia umowy dotyczącej organizacji wydarzenia ani przyjęcia wiążącej oferty. Warunki ewentualnej współpracy są uzgadniane odrębnie.",
        ],
      },
      {
        title: "6. Dostępność serwisu",
        paragraphs: [
          "o123 dokłada starań, aby serwis był dostępny w sposób ciągły i bezpieczny. Dopuszczalne są jednak przerwy wynikające z prac technicznych, aktualizacji, awarii lub zdarzeń pozostających poza rozsądną kontrolą usługodawcy.",
        ],
      },
      {
        title: "7. Prawa do treści",
        paragraphs: [
          "Materiały opublikowane w serwisie, w tym teksty, elementy identyfikacji wizualnej, grafiki, fotografie i układ strony, mogą być chronione prawem autorskim lub innymi prawami własności intelektualnej. Korzystanie z serwisu nie oznacza przeniesienia tych praw na użytkownika.",
        ],
      },
      {
        title: "8. Reklamacje dotyczące usług elektronicznych",
        paragraphs: [
          "Reklamację dotyczącą działania serwisu lub usługi elektronicznej można przesłać na adres hello@o123.pl. Zgłoszenie powinno zawierać opis problemu oraz dane umożliwiające udzielenie odpowiedzi.",
          "Reklamacje są rozpatrywane bez zbędnej zwłoki. Jeżeli charakter sprawy na to pozwala, odpowiedź zostanie udzielona w terminie do 14 dni.",
        ],
      },
      {
        title: "9. Dane osobowe",
        paragraphs: [
          "Zasady przetwarzania danych osobowych opisuje Polityka prywatności dostępna w serwisie.",
        ],
      },
      {
        title: "10. Postanowienia końcowe",
        paragraphs: [
          "Do korzystania z serwisu stosuje się prawo polskie, z zastrzeżeniem bezwzględnie obowiązujących przepisów chroniących konsumentów, które mogą mieć zastosowanie w konkretnym przypadku.",
          "Regulamin może zostać zmieniony w przypadku zmian funkcjonalności serwisu, sposobu świadczenia usług lub wymogów prawnych. Aktualna wersja jest publikowana na tej stronie.",
        ],
      },
    ],
  },

  en: {
    metadata: {
      title: "Website Terms | o123",
      description:
        "Terms governing the use of o123.pl and electronic services provided through the website.",
    },
    label: "Legal / Terms",
    heading: "Website Terms",
    updated: "Last updated: 22 August 2026",
    intro:
      "These terms govern the use of o123.pl and electronic services made available through the website.",
    sections: [
      {
        title: "1. Service provider and contact",
        paragraphs: [
          "The o123.pl website is operated by Filip Fusek, operating under the o123 brand, ul. Bierutowska 8, 50-557 Wrocław, Poland.",
          "The service provider can be contacted electronically at hello@o123.pl.",
        ],
      },
      {
        title: "2. Electronic services",
        items: [
          "access to website content and functionality,",
          "submission of an enquiry or quote request through the form,",
          "contact through the communication channels displayed on the website.",
        ],
      },
      {
        title: "3. Technical requirements",
        paragraphs: [
          "You need a device with Internet access, an up-to-date web browser and — when contacting o123 — an active email address. Users should keep their software reasonably up to date and use basic device security.",
        ],
      },
      {
        title: "4. Acceptable use",
        paragraphs: [
          "The website must be used lawfully, in accordance with good practice and its intended purpose.",
        ],
        items: [
          "you must not submit unlawful content, content infringing third-party rights or malicious software,",
          "you must not disrupt the website, bypass security measures or attempt unauthorised access to systems,",
          "information provided through the form should be accurate to the extent required to handle the enquiry.",
        ],
      },
      {
        title: "5. Enquiry form and electronic service",
        paragraphs: [
          "Using the enquiry form is voluntary and free of charge. The electronic service consisting of sending an enquiry begins when the form is submitted and ends once the enquiry has been transmitted to o123. Before submission, you can stop using the service by closing the form or leaving the page.",
          "Submitting the form does not create a contract for event services and does not constitute acceptance of a binding offer. Any future cooperation is agreed separately.",
        ],
      },
      {
        title: "6. Website availability",
        paragraphs: [
          "o123 takes reasonable steps to keep the website available and secure. Temporary interruptions may occur due to maintenance, updates, failures or circumstances outside the service provider's reasonable control.",
        ],
      },
      {
        title: "7. Intellectual property",
        paragraphs: [
          "Website materials, including text, visual identity, graphics, photographs and layout, may be protected by copyright or other intellectual property rights. Using the website does not transfer those rights to the user.",
        ],
      },
      {
        title: "8. Complaints about electronic services",
        paragraphs: [
          "Complaints concerning the website or an electronic service may be sent to hello@o123.pl. The message should describe the issue and include contact details required for a response.",
          "Complaints are handled without undue delay. Where the nature of the matter allows, a response will be provided within 14 days.",
        ],
      },
      {
        title: "9. Personal data",
        paragraphs: [
          "Personal data processing is described in the Privacy Policy available on the website.",
        ],
      },
      {
        title: "10. Final provisions",
        paragraphs: [
          "Polish law applies to the use of the website, without prejudice to mandatory consumer protection rules that may apply in an individual case.",
          "These terms may be updated when website functionality, the way services are provided or legal requirements change. The current version is published on this page.",
        ],
      },
    ],
  },

  de: {
    metadata: {
      title: "Nutzungsbedingungen | o123",
      description:
        "Bedingungen für die Nutzung von o123.pl und die über die Website angebotenen elektronischen Dienste.",
    },
    label: "Legal / Terms",
    heading: "Nutzungsbedingungen",
    updated: "Letzte Aktualisierung: 22. August 2026",
    intro:
      "Diese Bedingungen regeln die Nutzung von o123.pl und der über die Website angebotenen elektronischen Dienste.",
    sections: [
      {
        title: "1. Diensteanbieter und Kontakt",
        paragraphs: [
          "Die Website o123.pl wird von Filip Fusek betrieben, der unter der Marke o123 tätig ist, ul. Bierutowska 8, 50-557 Wrocław, Polen.",
          "Elektronischer Kontakt mit dem Diensteanbieter ist unter hello@o123.pl möglich.",
        ],
      },
      {
        title: "2. Elektronische Dienste",
        items: [
          "Bereitstellung von Inhalten und Funktionen der Website,",
          "Übermittlung einer Anfrage oder Angebotsanfrage über das Formular,",
          "Kontaktaufnahme über die auf der Website angegebenen Kommunikationskanäle.",
        ],
      },
      {
        title: "3. Technische Voraussetzungen",
        paragraphs: [
          "Erforderlich sind ein Gerät mit Internetzugang, ein aktueller Webbrowser und — bei einer Kontaktaufnahme — eine aktive E-Mail-Adresse. Nutzer sollten aktuelle Software und grundlegende Gerätesicherheitsmaßnahmen verwenden.",
        ],
      },
      {
        title: "4. Nutzungsregeln",
        paragraphs: [
          "Die Website darf nur rechtmäßig, entsprechend guter Sitten und ihrem vorgesehenen Zweck genutzt werden.",
        ],
        items: [
          "es dürfen keine rechtswidrigen Inhalte, Inhalte, die Rechte Dritter verletzen, oder Schadsoftware übermittelt werden,",
          "Störungen der Website, Umgehung von Sicherheitsmaßnahmen und unbefugte Zugriffsversuche sind untersagt,",
          "Angaben im Formular sollten soweit erforderlich richtig sein.",
        ],
      },
      {
        title: "5. Anfrageformular und elektronischer Dienst",
        paragraphs: [
          "Die Nutzung des Formulars ist freiwillig und kostenlos. Der elektronische Dienst zur Übermittlung einer Anfrage beginnt mit dem Absenden des Formulars und endet nach der Übermittlung an o123. Vor dem Absenden kann die Nutzung durch Schließen des Formulars oder Verlassen der Seite beendet werden.",
          "Das Absenden des Formulars führt nicht zum Abschluss eines Vertrags über Eventleistungen und stellt keine Annahme eines verbindlichen Angebots dar. Eine mögliche Zusammenarbeit wird gesondert vereinbart.",
        ],
      },
      {
        title: "6. Verfügbarkeit",
        paragraphs: [
          "o123 bemüht sich um einen kontinuierlichen und sicheren Betrieb. Vorübergehende Unterbrechungen aufgrund von Wartung, Updates, Störungen oder Umständen außerhalb der angemessenen Kontrolle des Diensteanbieters können auftreten.",
        ],
      },
      {
        title: "7. Geistiges Eigentum",
        paragraphs: [
          "Inhalte der Website, einschließlich Texte, visuelle Identität, Grafiken, Fotos und Layout, können urheberrechtlich oder anderweitig geschützt sein. Durch die Nutzung werden keine Rechte an den Nutzer übertragen.",
        ],
      },
      {
        title: "8. Beschwerden",
        paragraphs: [
          "Beschwerden zur Website oder zu elektronischen Diensten können an hello@o123.pl gesendet werden. Die Nachricht sollte das Problem beschreiben und Kontaktdaten für eine Antwort enthalten.",
          "Beschwerden werden ohne unangemessene Verzögerung bearbeitet. Soweit die Art der Angelegenheit dies zulässt, erfolgt eine Antwort innerhalb von 14 Tagen.",
        ],
      },
      {
        title: "9. Personenbezogene Daten",
        paragraphs: [
          "Informationen zur Verarbeitung personenbezogener Daten enthält die auf der Website verfügbare Datenschutzerklärung.",
        ],
      },
      {
        title: "10. Schlussbestimmungen",
        paragraphs: [
          "Für die Nutzung der Website gilt polnisches Recht, unbeschadet zwingender Verbraucherschutzvorschriften, die im Einzelfall anwendbar sein können.",
          "Diese Bedingungen können bei Änderungen der Website, der Leistungserbringung oder rechtlicher Anforderungen angepasst werden. Die aktuelle Version wird auf dieser Seite veröffentlicht.",
        ],
      },
    ],
  },

  cs: {
    metadata: {
      title: "Podmínky používání webu | o123",
      description:
        "Podmínky používání o123.pl a elektronických služeb poskytovaných prostřednictvím webu.",
    },
    label: "Legal / Terms",
    heading: "Podmínky používání webu",
    updated: "Poslední aktualizace: 22. srpna 2026",
    intro:
      "Tyto podmínky upravují používání o123.pl a elektronických služeb dostupných prostřednictvím webu.",
    sections: [
      {
        title: "1. Poskytovatel a kontakt",
        paragraphs: [
          "Web o123.pl provozuje Filip Fusek, působící pod značkou o123, ul. Bierutowska 8, 50-557 Wrocław, Polsko.",
          "Elektronický kontakt s poskytovatelem je možný na adrese hello@o123.pl.",
        ],
      },
      {
        title: "2. Elektronické služby",
        items: [
          "zpřístupnění obsahu a funkcí webu,",
          "odeslání dotazu nebo žádosti o nabídku prostřednictvím formuláře,",
          "kontakt prostřednictvím komunikačních kanálů uvedených na webu.",
        ],
      },
      {
        title: "3. Technické požadavky",
        paragraphs: [
          "K používání webu je potřeba zařízení s přístupem k internetu, aktuální webový prohlížeč a — při kontaktu — aktivní e-mailová adresa. Uživatel by měl používat aktuální software a základní zabezpečení zařízení.",
        ],
      },
      {
        title: "4. Pravidla používání",
        paragraphs: [
          "Web musí být používán v souladu s právem, dobrými mravy a jeho účelem.",
        ],
        items: [
          "je zakázáno předávat protiprávní obsah, obsah porušující práva třetích osob nebo škodlivý software,",
          "je zakázáno narušovat provoz webu, obcházet zabezpečení nebo se pokoušet o neoprávněný přístup k systémům,",
          "údaje předané ve formuláři by měly být pravdivé v rozsahu potřebném pro vyřízení dotazu.",
        ],
      },
      {
        title: "5. Formulář a elektronická služba",
        paragraphs: [
          "Použití formuláře je dobrovolné a bezplatné. Elektronická služba spočívající v odeslání dotazu začíná odesláním formuláře a končí jeho předáním o123. Před odesláním může uživatel službu ukončit zavřením formuláře nebo opuštěním stránky.",
          "Odeslání formuláře neznamená uzavření smlouvy o organizaci akce ani přijetí závazné nabídky. Případná spolupráce je sjednávána samostatně.",
        ],
      },
      {
        title: "6. Dostupnost webu",
        paragraphs: [
          "o123 vynakládá přiměřené úsilí na průběžnou a bezpečnou dostupnost webu. Dočasné výpadky mohou nastat kvůli údržbě, aktualizacím, poruchám nebo okolnostem mimo přiměřenou kontrolu poskytovatele.",
        ],
      },
      {
        title: "7. Duševní vlastnictví",
        paragraphs: [
          "Materiály na webu, včetně textů, vizuální identity, grafiky, fotografií a rozvržení, mohou být chráněny autorským právem nebo jinými právy duševního vlastnictví. Používáním webu tato práva na uživatele nepřecházejí.",
        ],
      },
      {
        title: "8. Reklamace",
        paragraphs: [
          "Reklamace týkající se webu nebo elektronické služby lze zaslat na hello@o123.pl. Zpráva by měla popsat problém a obsahovat kontaktní údaje potřebné pro odpověď.",
          "Reklamace jsou vyřizovány bez zbytečného odkladu. Pokud to povaha věci umožňuje, odpověď bude poskytnuta do 14 dnů.",
        ],
      },
      {
        title: "9. Osobní údaje",
        paragraphs: [
          "Pravidla zpracování osobních údajů jsou popsána v Zásadách ochrany osobních údajů dostupných na webu.",
        ],
      },
      {
        title: "10. Závěrečná ustanovení",
        paragraphs: [
          "Používání webu se řídí polským právem, aniž jsou dotčena kogentní pravidla ochrany spotřebitele použitelná v konkrétním případě.",
          "Tyto podmínky mohou být změněny při změně funkcí webu, způsobu poskytování služeb nebo právních požadavků. Aktuální verze je zveřejněna na této stránce.",
        ],
      },
    ],
  },
};

export async function generateMetadata({
  params,
}: TermsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const content = termsContent[locale];

  const title = content.metadata.title;
  const description = content.metadata.description;

  return {
    title,
    description,

    alternates: {
      canonical: `/${locale}/terms`,
      languages: {
        pl: "/pl/terms",
        en: "/en/terms",
        de: "/de/terms",
        cs: "/cs/terms",
        "x-default": "/pl/terms",
      },
    },

    openGraph: {
      type: "website",
      siteName: "o123",
      title,
      description,
      url: `/${locale}/terms`,
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function TermsPage({
  params,
}: TermsPageProps) {
  const { locale } = await params;
  const content = termsContent[locale];

  return (
    <main className="min-h-screen bg-[var(--color-burgundy)] text-[var(--color-sand)]">
      <section>
        <Container className="py-12 min-[834px]:py-16 min-[1440px]:py-[72px]">
          <p className="type-caption uppercase opacity-60">
            {content.label}
          </p>

          <h1 className="mt-8 max-w-[980px] type-display">
            {content.heading}
          </h1>

          <p className="mt-8 max-w-[760px] type-text type-body min-[834px]:mt-10">
            {content.intro}
          </p>

          <p className="mt-6 type-caption uppercase opacity-60">
            {content.updated}
          </p>
        </Container>
      </section>

      <section className="border-t border-[var(--color-sand)]/20">
        <Container>
          {content.sections.map((section, index) => (
            <article
              key={section.title}
              className={[
                "grid",
                "gap-6",
                "py-10",
                "min-[834px]:grid-cols-[72px_minmax(0,1fr)]",
                "min-[834px]:gap-8",
                "min-[834px]:py-12",
                "min-[1440px]:gap-12",
                "min-[1440px]:py-16",
                index > 0
                  ? "border-t border-[var(--color-sand)]/20"
                  : "",
              ].join(" ")}
            >
              <p className="type-caption opacity-40">
                {String(index + 1).padStart(2, "0")}
              </p>

              <div>
                <h2 className="max-w-[620px] type-heading type-heading-lg">
                  {section.title}
                </h2>

                <div className="mt-8 max-w-[760px] min-[834px]:mt-10 min-[1440px]:mt-12">
                  {section.paragraphs?.map(
                    (paragraph, paragraphIndex) => (
                      <p
                        key={`${section.title}-paragraph-${paragraphIndex}`}
                        className={[
                          "type-text",
                          "type-body",
                          paragraphIndex > 0 ? "mt-6" : "",
                        ].join(" ")}
                      >
                        {paragraph}
                      </p>
                    ),
                  )}

                  {section.items && (
                    <ul
                      className={[
                        "space-y-3",
                        "type-text",
                        "type-body",
                        section.paragraphs ? "mt-6" : "",
                      ].join(" ")}
                    >
                      {section.items.map((item) => (
                        <li
                          key={item}
                          className="grid grid-cols-[16px_minmax(0,1fr)] gap-3"
                        >
                          <span aria-hidden="true">—</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </article>
          ))}
        </Container>
      </section>

      <Footer locale={locale} />
    </main>
  );
}