import type { Metadata } from "next";

import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import type { Locale } from "@/i18n/config";

type PrivacyPageProps = {
  params: Promise<{
    locale: Locale;
  }>;
};

type PrivacySection = {
  title: string;
  paragraphs?: readonly string[];
  items?: readonly string[];
};

type PrivacyContent = {
  metadata: {
    title: string;
    description: string;
  };
  label: string;
  heading: string;
  updated: string;
  intro: string;
  sections: readonly PrivacySection[];
};

const privacyContent: Record<Locale, PrivacyContent> = {
  pl: {
    metadata: {
      title: "Polityka prywatności | o123",
      description:
        "Informacje o tym, jak o123 przetwarza dane osobowe przekazywane przez stronę internetową, formularze oraz zewnętrzne narzędzia.",
    },
    label: "Legal / Privacy",
    heading: "Polityka prywatności",
    updated: "Ostatnia aktualizacja: 22 sierpnia 2026",
    intro:
      "Ta polityka opisuje zasady przetwarzania danych osobowych osób korzystających z serwisu o123.pl oraz kontaktujących się z o123 za pośrednictwem formularzy, poczty elektronicznej i udostępnionych kanałów komunikacji.",
    sections: [
      {
        title: "1. Administrator danych",
        paragraphs: [
          "Administratorem danych osobowych jest Filip Fusek, działający pod marką o123, ul. Bierutowska 8, 50-557 Wrocław.",
          "Kontakt w sprawach dotyczących prywatności i ochrony danych osobowych jest możliwy pod adresem: hello@o123.pl.",
        ],
      },
      {
        title: "2. Jakie dane możemy przetwarzać",
        paragraphs: [
          "Zakres przetwarzanych danych zależy od sposobu korzystania z serwisu i wybranej formy kontaktu.",
        ],
        items: [
          "adres e-mail,",
          "numer telefonu, jeżeli zostanie dobrowolnie podany,",
          "rodzaj planowanego projektu lub wydarzenia,",
          "orientacyjny budżet,",
          "termin lub przedział dat,",
          "orientacyjna liczba uczestników,",
          "treść wiadomości i inne informacje dobrowolnie przekazane w zapytaniu,",
          "dane związane z umówieniem spotkania za pośrednictwem Calendly,",
          "dane techniczne związane z korzystaniem z serwisu, takie jak informacje o urządzeniu, przeglądarce, żądaniach sieciowych i sposobie korzystania ze strony, w zakresie generowanym przez wykorzystywane technologie.",
        ],
      },
      {
        title: "3. Cele i podstawy przetwarzania",
        items: [
          "udzielenie odpowiedzi na zapytanie i prowadzenie komunikacji — na podstawie prawnie uzasadnionego interesu administratora polegającego na obsłudze korespondencji;",
          "przygotowanie oferty oraz podjęcie działań na żądanie osoby przed ewentualnym zawarciem umowy — gdy zapytanie dotyczy konkretnej usługi;",
          "organizacja i obsługa umówionego spotkania;",
          "prowadzenie analityki serwisu po dokonaniu odpowiedniego wyboru dotyczącego analityki;",
          "zapamiętanie ustawień prywatności i cookies użytkownika;",
          "zapewnienie bezpieczeństwa, prawidłowego działania i diagnostyki serwisu;",
          "ustalenie, dochodzenie lub obrona roszczeń — jeżeli jest to niezbędne;",
          "realizacja obowiązków wynikających z przepisów prawa — jeżeli taki obowiązek powstanie.",
        ],
      },
      {
        title: "4. Formularz Request a Quote i Resend",
        paragraphs: [
          "Dane przekazane przez formularz Request a Quote są przesyłane do o123 w celu obsługi zapytania i przygotowania odpowiedzi lub oferty.",
          "Do technicznej obsługi wysyłki wiadomości z formularza wykorzystywana jest usługa Resend. Dane niezbędne do dostarczenia wiadomości mogą być przetwarzane przez dostawcę tej usługi w zakresie wymaganym do realizacji wysyłki.",
          "Przesłanie formularza nie oznacza wyrażenia zgody na otrzymywanie komunikacji marketingowej. Dane z formularza nie są automatycznie wykorzystywane do newslettera ani innych niezależnych działań marketingowych.",
        ],
      },
      {
        title: "5. Google Analytics 4 i analityka",
        paragraphs: [
          "Serwis korzysta z Google Analytics 4 w celu uzyskiwania informacji o sposobie korzystania ze strony, mierzenia ruchu oraz poprawy funkcjonalności i treści serwisu.",
          "Serwis wykorzystuje Google Consent Mode. Domyślnie przechowywanie danych na potrzeby analityki jest ustawione jako niedozwolone. Po wyrażeniu zgody na analitykę ustawienie analytics_storage zostaje zmienione na granted. Ustawienia związane z reklamami, w tym ad_storage, ad_user_data i ad_personalization, pozostają w serwisie o123 ustawione jako denied.",
          "W przypadku braku zgody technologie Google mogą działać w ograniczonym trybie i przesyłać sygnały lub tzw. cookieless pings bez zapisywania analitycznych plików cookie na urządzeniu użytkownika.",
          "Użytkownik może w dowolnym momencie zmienić swój wybór za pomocą przycisku „Cookies” dostępnego w serwisie.",
        ],
      },
      {
        title: "6. Cookies i pamięć lokalna",
        paragraphs: [
          "Serwis wykorzystuje technologie niezbędne do prawidłowego działania strony oraz zapamiętywania preferencji dotyczących analityki.",
          "Wybór użytkownika dotyczący analityki jest zapisywany lokalnie w przeglądarce pod kluczem o123-cookie-consent-v1. Zapis obejmuje wersję ustawień, informację o wyborze dotyczącym analityki oraz datę aktualizacji tego wyboru.",
          "Technologie analityczne wymagające zgody są kontrolowane poprzez ustawienia dostępne w panelu Cookies.",
        ],
      },
      {
        title: "7. Calendly i umawianie spotkań",
        paragraphs: [
          "Funkcja Schedule a Call korzysta z usługi Calendly. Skrypt i osadzony moduł Calendly są ładowane dopiero po otwarciu funkcji umawiania spotkania.",
          "Po uruchomieniu modułu przeglądarka użytkownika nawiązuje połączenie z infrastrukturą Calendly. Dane wpisane bezpośrednio w interfejsie Calendly są przetwarzane przy wykorzystaniu tej usługi w celu umożliwienia rezerwacji spotkania.",
          "Calendly może przetwarzać dane poza Europejskim Obszarem Gospodarczym, w szczególności w Stanach Zjednoczonych, z wykorzystaniem mechanizmów prawnych przewidzianych dla międzynarodowych transferów danych.",
        ],
      },
      {
        title: "8. WhatsApp, Microsoft Teams i poczta elektroniczna",
        paragraphs: [
          "Serwis umożliwia rozpoczęcie kontaktu za pośrednictwem WhatsApp, Microsoft Teams oraz poczty elektronicznej.",
          "Kliknięcie odnośnika do WhatsApp lub Microsoft Teams powoduje przejście do zewnętrznego serwisu. Od tego momentu dalsze przetwarzanie danych odbywa się również zgodnie z zasadami prywatności odpowiedniego dostawcy.",
          "Odnośnik e-mail korzysta z mechanizmu mailto i może uruchomić program pocztowy skonfigurowany na urządzeniu użytkownika.",
          "o123 może rejestrować w analityce samo kliknięcie danego kanału kontaktu, o ile użytkownik zezwolił na analitykę. Do zdarzenia analitycznego nie jest celowo przekazywana treść wiadomości.",
        ],
      },
      {
        title: "9. Odbiorcy danych",
        paragraphs: [
          "W związku z prowadzeniem serwisu dane mogą być przetwarzane przez podmioty wspierające o123 w zakresie niezbędnym do świadczenia ich usług.",
        ],
        items: [
          "dostawców hostingu i infrastruktury technicznej serwisu,",
          "Resend — w zakresie obsługi wiadomości generowanych przez formularz,",
          "Google — w związku z korzystaniem z Google Analytics 4,",
          "Calendly — w związku z funkcją umawiania spotkań,",
          "Meta / WhatsApp — w przypadku wyboru kontaktu przez WhatsApp,",
          "Microsoft — w przypadku wyboru kontaktu przez Microsoft Teams,",
          "dostawców poczty elektronicznej i innych narzędzi technicznych niezbędnych do obsługi korespondencji.",
        ],
      },
      {
        title: "10. Przekazywanie danych poza EOG",
        paragraphs: [
          "Niektórzy dostawcy technologiczni wykorzystywani przez o123 działają globalnie, dlatego określone dane mogą być przetwarzane poza Europejskim Obszarem Gospodarczym, w szczególności w Stanach Zjednoczonych.",
          "Jeżeli do takiego transferu dochodzi, odbywa się on z wykorzystaniem mechanizmów przewidzianych przez obowiązujące przepisy, takich jak decyzja stwierdzająca odpowiedni stopień ochrony, EU–US Data Privacy Framework, standardowe klauzule umowne lub inne właściwe zabezpieczenia — zależnie od dostawcy i charakteru transferu.",
        ],
      },
      {
        title: "11. Jak długo przechowujemy dane",
        paragraphs: [
          "Dane związane z zapytaniem są przechowywane przez okres potrzebny do obsługi korespondencji, przygotowania oferty i ewentualnego podjęcia współpracy.",
          "Jeżeli współpraca nie zostanie podjęta, dane mogą być przechowywane dalej przez okres uzasadniony ochroną przed potencjalnymi roszczeniami lub innym obowiązkiem prawnym.",
          "Dane dotyczące zawartej współpracy mogą być przechowywane przez okres wynikający z obowiązujących przepisów, w szczególności związanych z rozliczeniami oraz przedawnieniem roszczeń.",
          "Preferencje dotyczące analityki pozostają zapisane w przeglądarce do czasu ich zmiany, usunięcia danych przeglądarki albo zmiany mechanizmu zgody.",
        ],
      },
      {
        title: "12. Twoje prawa",
        items: [
          "prawo dostępu do swoich danych i otrzymania ich kopii,",
          "prawo sprostowania danych,",
          "prawo usunięcia danych — gdy spełnione są przesłanki prawne,",
          "prawo ograniczenia przetwarzania,",
          "prawo do przenoszenia danych — gdy ma zastosowanie,",
          "prawo sprzeciwu wobec przetwarzania opartego na prawnie uzasadnionym interesie,",
          "prawo wycofania zgody w każdym czasie, jeżeli określone przetwarzanie opiera się na zgodzie, bez wpływu na zgodność z prawem wcześniejszego przetwarzania,",
          "prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych.",
        ],
      },
      {
        title: "13. Dobrowolność podania danych",
        paragraphs: [
          "Podanie danych podczas kontaktu z o123 jest dobrowolne. Dane wymagane do obsługi konkretnego formularza lub rezerwacji są jednak konieczne do realizacji danego żądania.",
        ],
      },
      {
        title: "14. Zautomatyzowane decyzje",
        paragraphs: [
          "Dane przekazywane za pośrednictwem serwisu o123 nie są wykorzystywane do podejmowania wobec użytkownika decyzji wywołujących skutki prawne wyłącznie w sposób zautomatyzowany.",
        ],
      },
      {
        title: "15. Zmiany polityki",
        paragraphs: [
          "Polityka może być aktualizowana wraz ze zmianami funkcjonalności serwisu, wykorzystywanych dostawców technologicznych lub obowiązujących wymogów prawnych. Aktualna wersja jest publikowana na tej stronie wraz z datą ostatniej aktualizacji.",
        ],
      },
    ],
  },

  en: {
    metadata: {
      title: "Privacy Policy | o123",
      description:
        "Information about how o123 processes personal data submitted through the website, forms and external services.",
    },
    label: "Legal / Privacy",
    heading: "Privacy Policy",
    updated: "Last updated: 22 August 2026",
    intro:
      "This policy explains how personal data is processed when you use o123.pl or contact o123 through forms, email and the communication channels made available on the website.",
    sections: [
      {
        title: "1. Data controller",
        paragraphs: [
          "The controller of personal data is Filip Fusek, operating under the o123 brand, ul. Bierutowska 8, 50-557 Wrocław, Poland.",
          "For privacy and personal data matters, contact: hello@o123.pl.",
        ],
      },
      {
        title: "2. Data we may process",
        paragraphs: [
          "The scope of data processed depends on how you use the website and the method of contact you choose.",
        ],
        items: [
          "email address,",
          "phone number, if provided voluntarily,",
          "type of planned project or event,",
          "estimated budget,",
          "date or date range,",
          "estimated number of guests,",
          "message content and other information voluntarily provided in an enquiry,",
          "information associated with scheduling a meeting through Calendly,",
          "technical information associated with use of the website, such as device, browser, network request and usage information to the extent generated by the technologies used by the website.",
        ],
      },
      {
        title: "3. Purposes and legal bases",
        items: [
          "responding to enquiries and handling correspondence on the basis of the controller's legitimate interest in managing communications;",
          "preparing a proposal and taking steps at your request before a possible contract where the enquiry concerns a specific service;",
          "organising and handling scheduled meetings;",
          "website analytics following the relevant choice concerning analytics;",
          "remembering privacy and cookie preferences;",
          "maintaining website security, functionality and diagnostics;",
          "establishing, exercising or defending legal claims where necessary;",
          "complying with legal obligations where such obligations arise.",
        ],
      },
      {
        title: "4. Request a Quote form and Resend",
        paragraphs: [
          "Data submitted through the Request a Quote form is sent to o123 in order to handle the enquiry and prepare a response or proposal.",
          "Resend is used to provide the technical email delivery functionality for the form. Data required to deliver the message may be processed by this provider to the extent necessary to provide the service.",
          "Submitting the form does not constitute consent to receive marketing communications. Form data is not automatically used for a newsletter or separate marketing activities.",
        ],
      },
      {
        title: "5. Google Analytics 4 and analytics",
        paragraphs: [
          "The website uses Google Analytics 4 to understand how the website is used, measure traffic and improve website functionality and content.",
          "The website uses Google Consent Mode. Analytics storage is denied by default. If the visitor accepts analytics, analytics_storage is changed to granted. Advertising-related settings, including ad_storage, ad_user_data and ad_personalization, remain set to denied on o123.",
          "Where analytics consent is not granted, Google technologies may operate in a restricted mode and transmit consent signals or so-called cookieless pings without storing analytics cookies on the user's device.",
          "You can change your analytics choice at any time using the “Cookies” control available on the website.",
        ],
      },
      {
        title: "6. Cookies and local storage",
        paragraphs: [
          "The website uses technologies necessary for its correct operation and for remembering analytics preferences.",
          "The visitor's analytics preference is stored locally in the browser under the key o123-cookie-consent-v1. The stored information includes the consent version, the analytics choice and the date on which the choice was updated.",
          "Analytics technologies requiring a choice are controlled through the Cookies settings available on the website.",
        ],
      },
      {
        title: "7. Calendly and scheduling",
        paragraphs: [
          "The Schedule a Call feature uses Calendly. The Calendly script and embedded widget are loaded only after the scheduling feature is opened.",
          "When the widget is opened, the visitor's browser connects to Calendly infrastructure. Information entered directly into the Calendly interface is processed through that service to enable meeting scheduling.",
          "Calendly may process data outside the European Economic Area, including in the United States, using legal mechanisms applicable to international data transfers.",
        ],
      },
      {
        title: "8. WhatsApp, Microsoft Teams and email",
        paragraphs: [
          "The website allows visitors to initiate contact through WhatsApp, Microsoft Teams and email.",
          "Selecting WhatsApp or Microsoft Teams opens an external service. Further processing of information is then also governed by the relevant provider's privacy practices.",
          "The email link uses the mailto mechanism and may open the email application configured on the visitor's device.",
          "o123 may record the selection of a contact channel as an analytics event where analytics has been enabled. Message content is not intentionally included in such analytics events.",
        ],
      },
      {
        title: "9. Recipients",
        paragraphs: [
          "In connection with operating the website, data may be processed by service providers supporting o123 to the extent necessary to provide their services.",
        ],
        items: [
          "website hosting and technical infrastructure providers,",
          "Resend — for messages generated through the form,",
          "Google — in connection with Google Analytics 4,",
          "Calendly — in connection with meeting scheduling,",
          "Meta / WhatsApp — where WhatsApp is selected as the contact channel,",
          "Microsoft — where Microsoft Teams is selected as the contact channel,",
          "email and other technical service providers required to handle correspondence.",
        ],
      },
      {
        title: "10. Transfers outside the EEA",
        paragraphs: [
          "Some technology providers used by o123 operate globally. As a result, certain information may be processed outside the European Economic Area, including in the United States.",
          "Where such a transfer takes place, mechanisms provided for by applicable data protection law are used, such as an adequacy decision, the EU–US Data Privacy Framework, Standard Contractual Clauses or other appropriate safeguards, depending on the provider and the nature of the transfer.",
        ],
      },
      {
        title: "11. Retention",
        paragraphs: [
          "Enquiry data is retained for the period required to handle correspondence, prepare a proposal and consider potential cooperation.",
          "Where no cooperation follows, data may be retained for a further period justified by the protection against potential claims or another legal obligation.",
          "Information connected with an established business relationship may be retained for periods required under applicable law, including accounting and limitation periods.",
          "Analytics preferences remain stored in the browser until they are changed, browser data is deleted or the consent mechanism changes.",
        ],
      },
      {
        title: "12. Your rights",
        items: [
          "access to your data and a copy of it,",
          "rectification,",
          "erasure where the legal conditions are met,",
          "restriction of processing,",
          "data portability where applicable,",
          "objection to processing based on legitimate interests,",
          "withdrawal of consent at any time where particular processing is based on consent, without affecting the lawfulness of processing carried out before withdrawal,",
          "the right to lodge a complaint with the President of the Polish Personal Data Protection Office.",
        ],
      },
      {
        title: "13. Voluntary provision of data",
        paragraphs: [
          "Providing personal data when contacting o123 is voluntary. Information required for a particular form or booking is nevertheless necessary to fulfil the relevant request.",
        ],
      },
      {
        title: "14. Automated decision-making",
        paragraphs: [
          "Information submitted through the o123 website is not used to make decisions producing legal effects concerning the visitor based solely on automated processing.",
        ],
      },
      {
        title: "15. Changes to this policy",
        paragraphs: [
          "This policy may be updated when website functionality, technology providers or applicable legal requirements change. The current version is published on this page together with the date of the latest update.",
        ],
      },
    ],
  },

  de: {
    metadata: {
      title: "Datenschutzerklärung | o123",
      description:
        "Informationen darüber, wie o123 personenbezogene Daten über die Website, Formulare und externe Dienste verarbeitet.",
    },
    label: "Legal / Privacy",
    heading: "Datenschutzerklärung",
    updated: "Letzte Aktualisierung: 22. August 2026",
    intro:
      "Diese Erklärung beschreibt die Verarbeitung personenbezogener Daten bei der Nutzung von o123.pl sowie bei der Kontaktaufnahme mit o123 über Formulare, E-Mail und die auf der Website bereitgestellten Kommunikationskanäle.",
    sections: [
      {
        title: "1. Verantwortlicher",
        paragraphs: [
          "Verantwortlicher für personenbezogene Daten ist Filip Fusek, tätig unter der Marke o123, ul. Bierutowska 8, 50-557 Wrocław, Polen.",
          "Kontakt zu Datenschutzfragen: hello@o123.pl.",
        ],
      },
      {
        title: "2. Welche Daten verarbeitet werden können",
        paragraphs: [
          "Der Umfang der Verarbeitung hängt davon ab, wie die Website genutzt und welcher Kontaktweg gewählt wird.",
        ],
        items: [
          "E-Mail-Adresse,",
          "Telefonnummer, sofern sie freiwillig angegeben wird,",
          "Art des geplanten Projekts oder Events,",
          "geschätztes Budget,",
          "Datum oder Zeitraum,",
          "geschätzte Teilnehmerzahl,",
          "Nachrichteninhalt und andere freiwillig übermittelte Angaben,",
          "Daten im Zusammenhang mit einer Terminvereinbarung über Calendly,",
          "technische Informationen zur Nutzung der Website, darunter Geräte-, Browser-, Netzwerk- und Nutzungsdaten, soweit diese durch die eingesetzten Technologien erzeugt werden.",
        ],
      },
      {
        title: "3. Zwecke und Rechtsgrundlagen",
        items: [
          "Beantwortung von Anfragen und Bearbeitung der Korrespondenz auf Grundlage des berechtigten Interesses des Verantwortlichen an der Kommunikation;",
          "Erstellung eines Angebots und Durchführung von Maßnahmen auf Anfrage vor einem möglichen Vertrag;",
          "Organisation und Durchführung vereinbarter Gespräche;",
          "Analyse der Websitenutzung nach entsprechender Auswahl bezüglich der Analyse;",
          "Speicherung von Datenschutz- und Cookie-Einstellungen;",
          "Sicherheit, Funktionsfähigkeit und Diagnose der Website;",
          "Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen, soweit erforderlich;",
          "Erfüllung gesetzlicher Pflichten, soweit solche bestehen.",
        ],
      },
      {
        title: "4. Request-a-Quote-Formular und Resend",
        paragraphs: [
          "Über das Request-a-Quote-Formular übermittelte Daten werden an o123 gesendet, um die Anfrage zu bearbeiten und eine Antwort oder ein Angebot vorzubereiten.",
          "Für die technische Zustellung der durch das Formular erzeugten Nachrichten wird Resend eingesetzt. Die zur Zustellung erforderlichen Daten können durch diesen Anbieter im notwendigen Umfang verarbeitet werden.",
          "Das Absenden des Formulars stellt keine Einwilligung in Marketingkommunikation dar. Formulardaten werden nicht automatisch für Newsletter oder andere unabhängige Marketingmaßnahmen verwendet.",
        ],
      },
      {
        title: "5. Google Analytics 4 und Analyse",
        paragraphs: [
          "Die Website verwendet Google Analytics 4, um die Nutzung der Website zu verstehen, den Traffic zu messen und Funktionen sowie Inhalte zu verbessern.",
          "Die Website verwendet Google Consent Mode. Die Speicherung für Analysezwecke ist standardmäßig deaktiviert. Nach Zustimmung wird analytics_storage auf granted gesetzt. Werbebezogene Einstellungen einschließlich ad_storage, ad_user_data und ad_personalization bleiben bei o123 auf denied.",
          "Ohne Zustimmung können Google-Technologien in einem eingeschränkten Modus arbeiten und Zustimmungssignale oder sogenannte cookieless pings übertragen, ohne Analyse-Cookies auf dem Gerät des Nutzers zu speichern.",
          "Die Auswahl kann jederzeit über die auf der Website verfügbare Schaltfläche „Cookies“ geändert werden.",
        ],
      },
      {
        title: "6. Cookies und lokaler Speicher",
        paragraphs: [
          "Die Website verwendet Technologien, die für ihre ordnungsgemäße Funktion und die Speicherung von Analysepräferenzen erforderlich sind.",
          "Die Auswahl bezüglich Analyse wird lokal im Browser unter dem Schlüssel o123-cookie-consent-v1 gespeichert. Gespeichert werden die Version der Einstellung, die Analyseauswahl und das Datum der letzten Änderung.",
          "Analysetechnologien werden über die auf der Website verfügbaren Cookie-Einstellungen gesteuert.",
        ],
      },
      {
        title: "7. Calendly und Terminvereinbarung",
        paragraphs: [
          "Die Funktion Schedule a Call verwendet Calendly. Das Calendly-Skript und das eingebettete Modul werden erst geladen, wenn die Terminvereinbarung geöffnet wird.",
          "Beim Öffnen verbindet sich der Browser mit der Infrastruktur von Calendly. Direkt in Calendly eingegebene Daten werden über diesen Dienst verarbeitet, um eine Terminvereinbarung zu ermöglichen.",
          "Calendly kann Daten außerhalb des Europäischen Wirtschaftsraums, insbesondere in den Vereinigten Staaten, unter Verwendung der für internationale Datenübermittlungen vorgesehenen rechtlichen Mechanismen verarbeiten.",
        ],
      },
      {
        title: "8. WhatsApp, Microsoft Teams und E-Mail",
        paragraphs: [
          "Die Website ermöglicht eine Kontaktaufnahme über WhatsApp, Microsoft Teams und E-Mail.",
          "Ein Klick auf WhatsApp oder Microsoft Teams führt zu einem externen Dienst. Die weitere Verarbeitung richtet sich dann auch nach den Datenschutzregeln des jeweiligen Anbieters.",
          "Der E-Mail-Link verwendet den mailto-Mechanismus und kann das auf dem Gerät konfigurierte E-Mail-Programm öffnen.",
          "o123 kann die Auswahl eines Kontaktkanals als Analyseereignis erfassen, sofern Analyse aktiviert wurde. Der Nachrichteninhalt wird nicht gezielt an die Analyse übermittelt.",
        ],
      },
      {
        title: "9. Empfänger",
        paragraphs: [
          "Im Zusammenhang mit dem Betrieb der Website können Dienstleister Daten verarbeiten, soweit dies für die Erbringung ihrer Leistungen für o123 erforderlich ist.",
        ],
        items: [
          "Hosting- und technische Infrastrukturprovider,",
          "Resend — für über das Formular erzeugte Nachrichten,",
          "Google — im Zusammenhang mit Google Analytics 4,",
          "Calendly — für die Terminvereinbarung,",
          "Meta / WhatsApp — bei Auswahl von WhatsApp,",
          "Microsoft — bei Auswahl von Microsoft Teams,",
          "E-Mail- und andere technische Dienstleister, die für die Korrespondenz erforderlich sind.",
        ],
      },
      {
        title: "10. Übermittlungen außerhalb des EWR",
        paragraphs: [
          "Einige von o123 eingesetzte Technologieanbieter sind weltweit tätig. Daher können bestimmte Daten außerhalb des Europäischen Wirtschaftsraums, insbesondere in den Vereinigten Staaten, verarbeitet werden.",
          "Bei solchen Übermittlungen werden die nach geltendem Datenschutzrecht vorgesehenen Mechanismen eingesetzt, beispielsweise ein Angemessenheitsbeschluss, das EU–US Data Privacy Framework, Standardvertragsklauseln oder andere geeignete Garantien — abhängig vom Anbieter und der Art der Übermittlung.",
        ],
      },
      {
        title: "11. Speicherdauer",
        paragraphs: [
          "Anfragedaten werden so lange gespeichert, wie dies zur Bearbeitung der Korrespondenz, zur Angebotserstellung und zur Prüfung einer möglichen Zusammenarbeit erforderlich ist.",
          "Kommt keine Zusammenarbeit zustande, können Daten für einen weiteren Zeitraum gespeichert werden, soweit dies zur Abwehr möglicher Ansprüche oder aufgrund anderer rechtlicher Verpflichtungen gerechtfertigt ist.",
          "Daten einer zustande gekommenen Zusammenarbeit können entsprechend den gesetzlichen Abrechnungs- und Verjährungsfristen gespeichert werden.",
          "Analysepräferenzen bleiben im Browser gespeichert, bis sie geändert, Browserdaten gelöscht oder der Einwilligungsmechanismus geändert wird.",
        ],
      },
      {
        title: "12. Ihre Rechte",
        items: [
          "Auskunft und Erhalt einer Kopie der Daten,",
          "Berichtigung,",
          "Löschung, sofern die gesetzlichen Voraussetzungen erfüllt sind,",
          "Einschränkung der Verarbeitung,",
          "Datenübertragbarkeit, soweit anwendbar,",
          "Widerspruch gegen Verarbeitung auf Grundlage berechtigter Interessen,",
          "Widerruf einer Einwilligung jederzeit, soweit eine Verarbeitung auf Einwilligung beruht, ohne die Rechtmäßigkeit der vorherigen Verarbeitung zu berühren,",
          "Beschwerde bei der zuständigen Datenschutzaufsichtsbehörde.",
        ],
      },
      {
        title: "13. Freiwilligkeit der Angaben",
        paragraphs: [
          "Die Angabe personenbezogener Daten bei der Kontaktaufnahme mit o123 ist freiwillig. Für ein bestimmtes Formular oder eine Buchung erforderliche Informationen sind jedoch notwendig, um die jeweilige Anfrage bearbeiten zu können.",
        ],
      },
      {
        title: "14. Automatisierte Entscheidungen",
        paragraphs: [
          "Über die Website von o123 übermittelte Informationen werden nicht für Entscheidungen mit rechtlicher Wirkung verwendet, die ausschließlich automatisiert getroffen werden.",
        ],
      },
      {
        title: "15. Änderungen",
        paragraphs: [
          "Diese Erklärung kann angepasst werden, wenn sich die Funktionen der Website, die eingesetzten Technologieanbieter oder rechtliche Anforderungen ändern. Die aktuelle Version wird zusammen mit dem Datum der letzten Aktualisierung auf dieser Seite veröffentlicht.",
        ],
      },
    ],
  },

  cs: {
    metadata: {
      title: "Zásady ochrany osobních údajů | o123",
      description:
        "Informace o tom, jak o123 zpracovává osobní údaje prostřednictvím webu, formulářů a externích služeb.",
    },
    label: "Legal / Privacy",
    heading: "Zásady ochrany osobních údajů",
    updated: "Poslední aktualizace: 22. srpna 2026",
    intro:
      "Tyto zásady popisují zpracování osobních údajů při používání webu o123.pl a při kontaktování o123 prostřednictvím formulářů, e-mailu a komunikačních kanálů dostupných na webu.",
    sections: [
      {
        title: "1. Správce údajů",
        paragraphs: [
          "Správcem osobních údajů je Filip Fusek, působící pod značkou o123, ul. Bierutowska 8, 50-557 Wrocław, Polsko.",
          "Kontakt pro otázky ochrany soukromí a osobních údajů: hello@o123.pl.",
        ],
      },
      {
        title: "2. Jaké údaje můžeme zpracovávat",
        paragraphs: [
          "Rozsah zpracovávaných údajů závisí na způsobu používání webu a zvoleném způsobu kontaktu.",
        ],
        items: [
          "e-mailová adresa,",
          "telefonní číslo, pokud je dobrovolně uvedeno,",
          "typ plánovaného projektu nebo akce,",
          "orientační rozpočet,",
          "datum nebo časové období,",
          "orientační počet hostů,",
          "obsah zprávy a další informace dobrovolně poskytnuté v dotazu,",
          "údaje související s rezervací schůzky prostřednictvím Calendly,",
          "technické informace související s používáním webu, například údaje o zařízení, prohlížeči, síťových požadavcích a způsobu používání webu v rozsahu generovaném použitými technologiemi.",
        ],
      },
      {
        title: "3. Účely a právní základy",
        items: [
          "odpověď na dotazy a vedení komunikace na základě oprávněného zájmu správce na vyřizování korespondence;",
          "příprava nabídky a kroky provedené na žádost uživatele před případným uzavřením smlouvy;",
          "organizace a správa rezervovaných schůzek;",
          "analýza používání webu po provedení příslušné volby týkající se analytiky;",
          "zapamatování nastavení ochrany soukromí a cookies;",
          "zajištění bezpečnosti, funkčnosti a diagnostiky webu;",
          "určení, výkon nebo obhajoba právních nároků, je-li to nezbytné;",
          "splnění právních povinností, pokud takové povinnosti vzniknou.",
        ],
      },
      {
        title: "4. Formulář Request a Quote a Resend",
        paragraphs: [
          "Údaje předané prostřednictvím formuláře Request a Quote jsou odesílány o123 za účelem vyřízení dotazu a přípravy odpovědi nebo nabídky.",
          "Pro technické doručování zpráv vytvořených formulářem je využívána služba Resend. Údaje nezbytné pro doručení zprávy mohou být tímto poskytovatelem zpracovávány v rozsahu potřebném k poskytnutí služby.",
          "Odeslání formuláře nepředstavuje souhlas s marketingovou komunikací. Údaje z formuláře nejsou automaticky používány pro newsletter ani jiné samostatné marketingové aktivity.",
        ],
      },
      {
        title: "5. Google Analytics 4 a analytika",
        paragraphs: [
          "Web používá Google Analytics 4 za účelem porozumění způsobu používání webu, měření návštěvnosti a zlepšování funkcí a obsahu.",
          "Web používá Google Consent Mode. Ukládání dat pro analytiku je ve výchozím nastavení zakázáno. Po povolení analytiky je analytics_storage změněno na granted. Nastavení související s reklamou, včetně ad_storage, ad_user_data a ad_personalization, zůstávají na webu o123 nastavena na denied.",
          "Pokud uživatel analytiku nepovolí, mohou technologie Google fungovat v omezeném režimu a přenášet signály o stavu souhlasu nebo tzv. cookieless pings bez ukládání analytických cookies do zařízení.",
          "Volbu lze kdykoli změnit prostřednictvím ovládacího prvku „Cookies“ dostupného na webu.",
        ],
      },
      {
        title: "6. Cookies a místní úložiště",
        paragraphs: [
          "Web používá technologie nezbytné pro správné fungování a zapamatování preferencí týkajících se analytiky.",
          "Volba uživatele týkající se analytiky je lokálně uložena v prohlížeči pod klíčem o123-cookie-consent-v1. Uložené údaje obsahují verzi nastavení, volbu analytiky a datum poslední aktualizace.",
          "Analytické technologie jsou řízeny prostřednictvím nastavení Cookies dostupného na webu.",
        ],
      },
      {
        title: "7. Calendly a rezervace schůzek",
        paragraphs: [
          "Funkce Schedule a Call využívá službu Calendly. Skript a vložený modul Calendly se načítají až po otevření funkce rezervace.",
          "Po otevření modulu naváže prohlížeč spojení s infrastrukturou Calendly. Údaje zadané přímo do rozhraní Calendly jsou prostřednictvím této služby zpracovávány za účelem rezervace schůzky.",
          "Calendly může zpracovávat údaje mimo Evropský hospodářský prostor, zejména ve Spojených státech, s využitím právních mechanismů určených pro mezinárodní předávání údajů.",
        ],
      },
      {
        title: "8. WhatsApp, Microsoft Teams a e-mail",
        paragraphs: [
          "Web umožňuje zahájit kontakt prostřednictvím WhatsApp, Microsoft Teams a e-mailu.",
          "Výběrem WhatsApp nebo Microsoft Teams uživatel přechází do externí služby. Další zpracování údajů se následně řídí také pravidly ochrany soukromí příslušného poskytovatele.",
          "E-mailový odkaz používá mechanismus mailto a může otevřít e-mailovou aplikaci nastavenou v zařízení uživatele.",
          "o123 může zaznamenat výběr kontaktního kanálu jako analytickou událost, pokud byla analytika povolena. Obsah zprávy není do těchto analytických událostí záměrně předáván.",
        ],
      },
      {
        title: "9. Příjemci údajů",
        paragraphs: [
          "V souvislosti s provozem webu mohou údaje zpracovávat poskytovatelé služeb podporující o123, a to v rozsahu nezbytném pro poskytování jejich služeb.",
        ],
        items: [
          "poskytovatelé hostingu a technické infrastruktury webu,",
          "Resend — pro zprávy vytvářené formulářem,",
          "Google — v souvislosti s Google Analytics 4,",
          "Calendly — v souvislosti s rezervací schůzek,",
          "Meta / WhatsApp — při výběru kontaktu prostřednictvím WhatsApp,",
          "Microsoft — při výběru kontaktu prostřednictvím Microsoft Teams,",
          "poskytovatelé e-mailu a dalších technických nástrojů potřebných pro zpracování komunikace.",
        ],
      },
      {
        title: "10. Předávání mimo EHP",
        paragraphs: [
          "Někteří technologičtí poskytovatelé využívaní o123 působí globálně. Některé údaje proto mohou být zpracovávány mimo Evropský hospodářský prostor, zejména ve Spojených státech.",
          "Pokud k takovému předání dochází, používají se mechanismy stanovené platnými právními předpisy, například rozhodnutí o odpovídající ochraně, EU–US Data Privacy Framework, standardní smluvní doložky nebo jiná vhodná opatření podle konkrétního poskytovatele a povahy předání.",
        ],
      },
      {
        title: "11. Doba uchovávání",
        paragraphs: [
          "Údaje související s dotazem jsou uchovávány po dobu potřebnou k vyřízení komunikace, přípravě nabídky a posouzení možné spolupráce.",
          "Pokud spolupráce nevznikne, mohou být údaje uchovávány po další dobu odůvodněnou ochranou před případnými nároky nebo jinou právní povinností.",
          "Údaje týkající se vzniklé spolupráce mohou být uchovávány po dobu stanovenou právními předpisy, zejména účetními pravidly a promlčecími lhůtami.",
          "Preference analytiky zůstávají uloženy v prohlížeči do jejich změny, odstranění dat prohlížeče nebo změny mechanismu souhlasu.",
        ],
      },
      {
        title: "12. Vaše práva",
        items: [
          "přístup k údajům a získání jejich kopie,",
          "oprava údajů,",
          "výmaz, pokud jsou splněny zákonné podmínky,",
          "omezení zpracování,",
          "přenositelnost údajů, je-li použitelná,",
          "námitka proti zpracování založenému na oprávněném zájmu,",
          "odvolání souhlasu kdykoli, pokud je určité zpracování založeno na souhlasu, aniž je dotčena zákonnost předchozího zpracování,",
          "právo podat stížnost u příslušného dozorového úřadu.",
        ],
      },
      {
        title: "13. Dobrovolnost poskytnutí údajů",
        paragraphs: [
          "Poskytnutí osobních údajů při kontaktování o123 je dobrovolné. Údaje vyžadované konkrétním formulářem nebo rezervací jsou však nutné pro vyřízení příslušného požadavku.",
        ],
      },
      {
        title: "14. Automatizované rozhodování",
        paragraphs: [
          "Údaje předané prostřednictvím webu o123 nejsou používány k rozhodování s právními účinky založenému výhradně na automatizovaném zpracování.",
        ],
      },
      {
        title: "15. Změny zásad",
        paragraphs: [
          "Tyto zásady mohou být aktualizovány při změnách funkcí webu, technologických poskytovatelů nebo platných právních požadavků. Aktuální verze je zveřejněna na této stránce spolu s datem poslední aktualizace.",
        ],
      },
    ],
  },
};

export async function generateMetadata({
  params,
}: PrivacyPageProps): Promise<Metadata> {
  const { locale } = await params;
  const content = privacyContent[locale];

  const title = content.metadata.title;
  const description = content.metadata.description;

  return {
    title,
    description,

    alternates: {
      canonical: `/${locale}/privacy`,
      languages: {
        pl: "/pl/privacy",
        en: "/en/privacy",
        de: "/de/privacy",
        cs: "/cs/privacy",
        "x-default": "/pl/privacy",
      },
    },

    openGraph: {
      type: "website",
      siteName: "o123",
      title,
      description,
      url: `/${locale}/privacy`,
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function PrivacyPage({
  params,
}: PrivacyPageProps) {
  const { locale } = await params;
  const content = privacyContent[locale];

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