import type { ReactNode } from "react";

import type { Locale } from "@/i18n/config";

import {
  ArticleHeading,
  ArticleLead,
  ArticleParagraph,
} from "../components/article";

export const dlaczegoPamietamyEmocje = {
  pl: (
    <>
      <ArticleLead>
        Większość eventów nie jest nudna. Jest po prostu zapomniana. Gdy próbujesz
        przypomnieć sobie wydarzenie sprzed roku czy dwóch, rzadko wracasz do jego
        programu, kolejności prezentacji czy szczegółów organizacyjnych. Te
        elementy szybko się rozmywają. Zostaje coś zupełnie innego:{" "}
        <strong>moment</strong>.
      </ArticleLead>

      <ArticleHeading id="co-zostaje-w-pamieci">
        Co naprawdę zostaje w pamięci?
      </ArticleHeading>

      <ArticleParagraph>
        Może była to rozmowa przy kawie, która niespodziewanie zmieniła Twój
        sposób myślenia? Może sytuacja, która rozbawiła Cię bardziej niż żart
        przypomniany w nieodpowiednim momencie? A może krótkie zdarzenie, które
        wywołało emocję tak silną, że trudno ją dziś dokładnie odtworzyć, ale łatwo
        ją sobie przypomnieć. I właśnie w tym tkwi kluczowy paradoks wydarzeń: nie
        zapamiętujemy ich przebiegu, tylko emocjonalne fragmenty.
      </ArticleParagraph>

      <ArticleHeading id="pamiec-nie-zapisuje-rownomiernie">
        Pamięć zapisuje wydarzenia jako kilka kluczowych momentów
      </ArticleHeading>

      <ArticleParagraph>
        Wbrew intuicji większość eventów projektuje się tak, jakby miały być
        później odtwarzane w pamięci w całości. Agenda, logistyka, precyzyjny
        harmonogram, lista prelegentów — to wszystko jest ważne z perspektywy
        organizacyjnej, ale ma niewielki wpływ na to, co tak naprawdę uczestnicy
        zapamiętają. Ludzki mózg nie działa jak czarna skrzynka. Nie zapisuje
        doświadczeń równomiernie. Zamiast tego filtruje je i redukuje do kilku
        kluczowych momentów.
      </ArticleParagraph>

      <ArticleHeading id="peak-end-rule">
        Peak-End Rule
      </ArticleHeading>

      <ArticleParagraph>
        Psychologia opisuje to między innymi poprzez tzw.{" "}
        <strong>Peak-End Rule</strong> — zjawisko, w którym oceniamy całe
        doświadczenie głównie przez jego najbardziej intensywny moment oraz
        zakończenie. Oznacza to, że większość tego, co wydarza się „pomiędzy”, ma
        znacznie mniejsze znaczenie dla późniejszego wspomnienia niż sądzimy.
      </ArticleParagraph>

      <ArticleParagraph>
        Z tej perspektywy wiele wydarzeń jest projektowanych w sposób, który
        ignoruje mechanizmy pamięci. Skupiamy się na tym, by wszystko przebiegło
        zgodnie z planem, zamiast na tym, jakie momenty zostaną w uczestnikach po
        zakończeniu całego doświadczenia.
      </ArticleParagraph>

      <ArticleHeading id="emocje-jako-mechanizm-pamieci">
        Emocje mechanizmem pamięci.
      </ArticleHeading>

      <ArticleParagraph>
        Tymczasem to właśnie emocje decydują o tym, czy coś zostaje zapamiętane.
        Nie jako dekoracja wydarzenia, ale jako jego podstawowy mechanizm. To
        emocje odpowiadają za to, co mózg uzna za warte zapisania.
      </ArticleParagraph>

      <ArticleParagraph>
        Dlatego dwa pozornie podobne wydarzenia mogą dać zupełnie różny efekt.
        Jedno zostanie szybko zapomniane, mimo perfekcyjnej organizacji. Drugie
        będzie przywoływane jeszcze długo po jego zakończeniu, mimo że nie
        wszystko przebiegło idealnie.
      </ArticleParagraph>

      <ArticleHeading id="nie-trzeba-spektakularnych-momentow">
        Nie trzeba spektakularnych momentów...
      </ArticleHeading>

      <ArticleParagraph>
        Różnica nie leży w poziomie produkcji. Leży w tym, czy wydarzenie
        zawierało momenty emocjonalne, które przełamują rutynę doświadczenia.
        Najczęściej nie są to elementy spektakularne. Nie wymagają ogromnych
        budżetów ani rozbudowanej scenografii.
      </ArticleParagraph>

      <ArticleParagraph>
        Często są to drobne, dobrze zaprojektowane sytuacje: moment zaskoczenia,
        poczucie bycia zauważonym, spontaniczna interakcja między ludźmi albo
        zakończenie, które zostawia coś więcej niż tylko „dziękujemy za udział w
        prelekcji”.
      </ArticleParagraph>

      <ArticleHeading id="projektuj-to-co-ma-zostac">
        Projektuj to, co ma zostać w pamięci uczestników.
      </ArticleHeading>

      <ArticleParagraph>
        Z perspektywy pamięci to właśnie te fragmenty stają się „całym
        wydarzeniem”. Dlatego prawdziwe pytanie nie brzmi, jak dobrze zorganizować
        event, ale co sprawi, że zostanie on zapamiętany.
      </ArticleParagraph>

      <ArticleParagraph>
        Bo wydarzenia nie żyją w chwili, w której się odbywają. Żyją w tym, jak
        są później wspominane. A to, co zostaje w pamięci, nigdy nie jest sumą
        wszystkich elementów. Jest ich emocjonalnym skrótem.
      </ArticleParagraph>
    </>
  ),

  en: (
    <>
      <ArticleLead>
        Most events are not boring. They are simply forgotten. When you try to
        recall an event from a year or two ago, you rarely return to its agenda,
        the order of presentations or organisational details. Those elements
        fade quickly. Something completely different remains: a{" "}
        <strong>moment</strong>.
      </ArticleLead>

      <ArticleHeading id="co-zostaje-w-pamieci">
        What actually stays in our memory?
      </ArticleHeading>

      <ArticleParagraph>
        Maybe it was a conversation over coffee that unexpectedly changed the
        way you thought. Maybe a situation that made you laugh more than a joke
        repeated at the wrong moment. Or perhaps a brief incident that created
        an emotion so strong that the details are difficult to reconstruct today,
        while the feeling itself is easy to recall. That is the central paradox
        of events: we do not remember their course. We remember emotional fragments.
      </ArticleParagraph>

      <ArticleHeading id="pamiec-nie-zapisuje-rownomiernie">
        Memory reduces events to a few key moments
      </ArticleHeading>

      <ArticleParagraph>
        Contrary to intuition, most events are designed as if they were later
        replayed in memory in their entirety. The agenda, logistics, precise
        schedule and speaker list all matter operationally, but they have little
        influence on what participants will actually remember. The human brain
        is not a black box. It does not record experiences evenly. Instead, it
        filters them and reduces them to a handful of key moments.
      </ArticleParagraph>

      <ArticleHeading id="peak-end-rule">
        Peak-End Rule
      </ArticleHeading>

      <ArticleParagraph>
        Psychology describes this, among other things, through the{" "}
        <strong>Peak-End Rule</strong> — the tendency to judge an entire
        experience mainly by its most intense moment and by how it ends. That
        means much of what happens “in between” matters far less to the later
        memory than we tend to assume.
      </ArticleParagraph>

      <ArticleParagraph>
        Seen from this perspective, many events are designed in ways that ignore
        how memory actually works. We focus on making sure everything runs
        according to plan rather than on deciding which moments should stay with
        participants once the experience is over.
      </ArticleParagraph>

      <ArticleHeading id="emocje-jako-mechanizm-pamieci">
        Emotion is a mechanism of memory.
      </ArticleHeading>

      <ArticleParagraph>
        Emotion is what determines whether something is remembered. Not as
        decoration around an event, but as one of its fundamental mechanisms.
        Emotion helps decide what the brain considers worth storing.
      </ArticleParagraph>

      <ArticleParagraph>
        That is why two apparently similar events can have completely different
        outcomes. One can be forgotten quickly despite flawless organisation.
        Another can be recalled long after it ends even though not everything
        went perfectly.
      </ArticleParagraph>

      <ArticleHeading id="nie-trzeba-spektakularnych-momentow">
        Moments do not need to be spectacular...
      </ArticleHeading>

      <ArticleParagraph>
        The difference is not production scale. It is whether the event contains
        emotional moments that interrupt the routine of the experience. Most of
        the time, they are not spectacular. They do not require enormous budgets
        or elaborate scenery.
      </ArticleParagraph>

      <ArticleParagraph>
        Often they are small, carefully designed situations: a moment of
        surprise, the feeling of being noticed, a spontaneous interaction
        between people or an ending that leaves behind more than a polite
        “thank you for attending”.
      </ArticleParagraph>

      <ArticleHeading id="projektuj-to-co-ma-zostac">
        Design what should remain in participants&apos; memory.
      </ArticleHeading>

      <ArticleParagraph>
        From the perspective of memory, these fragments eventually become “the
        whole event”. So the real question is not how perfectly to organise an
        event, but what will make it worth remembering.
      </ArticleParagraph>

      <ArticleParagraph>
        Events do not live only in the moment in which they happen. They live in
        the way they are remembered afterwards. And what remains in memory is
        never the sum of every element. It is an emotional shorthand for the whole.
      </ArticleParagraph>
    </>
  ),

  de: (
    <>
      <ArticleLead>
        Die meisten Events sind nicht langweilig. Sie werden einfach vergessen.
        Wenn wir versuchen, uns an eine Veranstaltung von vor ein oder zwei Jahren
        zu erinnern, denken wir selten an die Agenda, die Reihenfolge der
        Präsentationen oder organisatorische Details zurück. Diese Elemente
        verschwimmen schnell. Etwas ganz anderes bleibt: ein{" "}
        <strong>Moment</strong>.
      </ArticleLead>

      <ArticleHeading id="co-zostaje-w-pamieci">
        Was bleibt wirklich im Gedächtnis?
      </ArticleHeading>

      <ArticleParagraph>
        Vielleicht war es ein Gespräch beim Kaffee, das unerwartet die eigene
        Sichtweise verändert hat. Vielleicht eine Situation, die mehr zum Lachen
        brachte als ein Witz zur falschen Zeit. Oder ein kurzer Augenblick, der
        eine so starke Emotion ausgelöst hat, dass sich die Details heute kaum
        rekonstruieren lassen, das Gefühl aber sofort wieder da ist. Genau darin
        liegt das zentrale Paradox von Events: Wir erinnern uns nicht an ihren
        Ablauf, sondern an emotionale Fragmente.
      </ArticleParagraph>

      <ArticleHeading id="pamiec-nie-zapisuje-rownomiernie">
        Das Gedächtnis reduziert Ereignisse auf wenige Schlüsselmomente
      </ArticleHeading>

      <ArticleParagraph>
        Entgegen unserer Intuition werden viele Events so geplant, als würden sie
        später vollständig im Gedächtnis abgespielt. Agenda, Logistik, genauer
        Zeitplan und Speaker-Liste sind organisatorisch wichtig, haben aber nur
        begrenzten Einfluss darauf, woran sich Teilnehmer wirklich erinnern. Das
        menschliche Gehirn ist keine Blackbox. Es speichert Erfahrungen nicht
        gleichmäßig, sondern filtert und verdichtet sie auf wenige zentrale Momente.
      </ArticleParagraph>

      <ArticleHeading id="peak-end-rule">
        Peak-End Rule
      </ArticleHeading>

      <ArticleParagraph>
        Die Psychologie beschreibt diesen Effekt unter anderem mit der{" "}
        <strong>Peak-End Rule</strong>. Wir bewerten eine gesamte Erfahrung vor
        allem anhand ihres intensivsten Moments und ihres Endes. Vieles von dem,
        was „dazwischen“ geschieht, hat für die spätere Erinnerung deutlich
        weniger Gewicht, als wir annehmen.
      </ArticleParagraph>

      <ArticleParagraph>
        Aus dieser Perspektive werden viele Events so konzipiert, dass sie die
        Funktionsweise unseres Gedächtnisses ignorieren. Wir konzentrieren uns
        darauf, dass alles nach Plan läuft, statt bewusst zu entscheiden, welche
        Momente nach dem Event bei den Teilnehmern bleiben sollen.
      </ArticleParagraph>

      <ArticleHeading id="emocje-jako-mechanizm-pamieci">
        Emotionen sind ein Mechanismus der Erinnerung.
      </ArticleHeading>

      <ArticleParagraph>
        Emotionen entscheiden wesentlich darüber, ob etwas im Gedächtnis bleibt.
        Nicht als Dekoration eines Events, sondern als grundlegender Mechanismus.
        Sie beeinflussen, was das Gehirn überhaupt als speicherwürdig einstuft.
      </ArticleParagraph>

      <ArticleParagraph>
        Deshalb können zwei scheinbar ähnliche Veranstaltungen völlig
        unterschiedliche Wirkungen haben. Eine wird trotz perfekter Organisation
        schnell vergessen. Die andere wird noch lange nach ihrem Ende erwähnt,
        obwohl nicht alles ideal gelaufen ist.
      </ArticleParagraph>

      <ArticleHeading id="nie-trzeba-spektakularnych-momentow">
        Momente müssen nicht spektakulär sein...
      </ArticleHeading>

      <ArticleParagraph>
        Der Unterschied liegt nicht in der Größe der Produktion. Entscheidend ist,
        ob ein Event emotionale Momente enthält, die die Routine des Erlebnisses
        durchbrechen. Meist sind diese Momente nicht spektakulär. Sie brauchen
        weder riesige Budgets noch aufwendige Szenografie.
      </ArticleParagraph>

      <ArticleParagraph>
        Oft sind es kleine, bewusst gestaltete Situationen: ein Moment der
        Überraschung, das Gefühl, wahrgenommen zu werden, eine spontane
        Interaktion zwischen Menschen oder ein Abschluss, der mehr hinterlässt
        als ein höfliches „Danke für Ihre Teilnahme“.
      </ArticleParagraph>

      <ArticleHeading id="projektuj-to-co-ma-zostac">
        Gestalte das, was im Gedächtnis bleiben soll.
      </ArticleHeading>

      <ArticleParagraph>
        Aus Sicht der Erinnerung werden genau diese Fragmente später zum „gesamten
        Event“. Die entscheidende Frage lautet deshalb nicht, wie perfekt eine
        Veranstaltung organisiert wurde, sondern was dafür sorgt, dass sie
        erinnert wird.
      </ArticleParagraph>

      <ArticleParagraph>
        Events leben nicht nur in dem Moment, in dem sie stattfinden. Sie leben
        darin weiter, wie später über sie gesprochen und an sie zurückgedacht
        wird. Was im Gedächtnis bleibt, ist nie die Summe aller Elemente, sondern
        ihre emotionale Kurzfassung.
      </ArticleParagraph>
    </>
  ),

  cs: (
    <>
      <ArticleLead>
        Většina eventů není nudná. Jen se na ně zapomene. Když si zkoušíte
        vybavit událost před rokem nebo dvěma, málokdy se vracíte k programu,
        pořadí prezentací nebo organizačním detailům. Tyto prvky rychle mizí.
        Zůstává něco úplně jiného:{" "}
        <strong>moment</strong>.
      </ArticleLead>

      <ArticleHeading id="co-zostaje-w-pamieci">
        Co nám skutečně zůstává v paměti?
      </ArticleHeading>

      <ArticleParagraph>
        Možná to byl rozhovor u kávy, který nečekaně změnil váš pohled na věc.
        Možná situace, která vás rozesmála víc než vtip zopakovaný ve špatnou
        chvíli. Nebo krátký okamžik, který vyvolal tak silnou emoci, že si dnes
        přesně nevybavíte detaily, ale pocit ano. V tom spočívá základní paradox
        eventů: nepamatujeme si jejich průběh, ale emocionální fragmenty.
      </ArticleParagraph>

      <ArticleHeading id="pamiec-nie-zapisuje-rownomiernie">
        Paměť redukuje událost na několik klíčových momentů
      </ArticleHeading>

      <ArticleParagraph>
        Proti intuici se mnoho eventů navrhuje tak, jako by si je lidé později
        přehrávali v paměti celé. Agenda, logistika, přesný harmonogram i seznam
        řečníků jsou důležité z organizačního hlediska, ale mají jen omezený vliv
        na to, co si účastníci skutečně zapamatují. Lidský mozek není černá
        skříňka. Nezaznamenává zkušenost rovnoměrně. Filtruje ji a zredukuje na
        několik klíčových momentů.
      </ArticleParagraph>

      <ArticleHeading id="peak-end-rule">
        Peak-End Rule
      </ArticleHeading>

      <ArticleParagraph>
        Psychologie tento jev popisuje mimo jiné pomocí{" "}
        <strong>Peak-End Rule</strong> — tendence hodnotit celý zážitek především
        podle jeho nejintenzivnějšího momentu a podle toho, jak skončil. Většina
        toho, co se odehraje „mezi tím“, má pro pozdější vzpomínku menší význam,
        než si často myslíme.
      </ArticleParagraph>

      <ArticleParagraph>
        Z tohoto pohledu je mnoho eventů navrhováno způsobem, který mechanismy
        paměti ignoruje. Soustředíme se na to, aby vše proběhlo podle plánu,
        místo abychom rozhodli, které momenty mají v účastnících zůstat po
        skončení celé zkušenosti.
      </ArticleParagraph>

      <ArticleHeading id="emocje-jako-mechanizm-pamieci">
        Emoce jsou mechanismem paměti.
      </ArticleHeading>

      <ArticleParagraph>
        Právě emoce rozhodují o tom, zda něco zůstane zapamatováno. Ne jako
        dekorace eventu, ale jako jeho základní mechanismus. Emoce ovlivňují, co
        mozek považuje za hodné uložení.
      </ArticleParagraph>

      <ArticleParagraph>
        Proto mohou dvě zdánlivě podobné události působit úplně jinak. Jedna se
        rychle zapomene navzdory perfektní organizaci. Druhá se připomíná ještě
        dlouho po skončení, i když ne všechno proběhlo dokonale.
      </ArticleParagraph>

      <ArticleHeading id="nie-trzeba-spektakularnych-momentow">
        Momenty nemusí být spektakulární...
      </ArticleHeading>

      <ArticleParagraph>
        Rozdíl není ve velikosti produkce. Je v tom, zda event obsahuje
        emocionální momenty, které naruší rutinu zážitku. Většinou nejde o nic
        velkolepého. Nevyžadují obrovské rozpočty ani složitou scénografii.
      </ArticleParagraph>

      <ArticleParagraph>
        Často jde o drobné, dobře navržené situace: moment překvapení, pocit, že
        si vás někdo všiml, spontánní interakce mezi lidmi nebo závěr, který
        zanechá něco víc než jen zdvořilé „děkujeme za účast“.
      </ArticleParagraph>

      <ArticleHeading id="projektuj-to-co-ma-zostac">
        Navrhujte to, co má zůstat v paměti účastníků.
      </ArticleHeading>

      <ArticleParagraph>
        Z pohledu paměti se právě tyto fragmenty nakonec stávají „celou
        událostí“. Skutečná otázka proto nezní, jak dokonale event zorganizovat,
        ale co způsobí, že si ho lidé budou pamatovat.
      </ArticleParagraph>

      <ArticleParagraph>
        Eventy nežijí pouze ve chvíli, kdy se konají. Žijí v tom, jak se na ně
        později vzpomíná. A to, co zůstává v paměti, nikdy není součtem všech
        prvků. Je to jejich emocionální zkratka.
      </ArticleParagraph>
    </>
  ),
} satisfies Record<Locale, ReactNode>;