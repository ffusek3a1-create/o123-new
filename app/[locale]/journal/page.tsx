import type { Metadata } from "next";

import Container from "@/components/ui/Container";
import JournalBento from "@/features/journal/components/JournalBento";
import type { Locale } from "@/i18n/config";

type JournalPageProps = {
  params: Promise<{
    locale: Locale;
  }>;
};

export const metadata: Metadata = {
  title: "Journal | o123",
  description:
    "Idee, psychologia i projektowanie doświadczeń. O tym, jak tworzyć momenty, które zostają z ludźmi także po zakończeniu wydarzenia.",
};

export default async function JournalPage({
  params,
}: JournalPageProps) {
  const { locale } = await params;

  return (
    <main className="min-h-screen bg-[#1C2A25] text-[var(--color-sand)]">
      <section>
        <Container className="py-[72px]">
          <h2 className="type-heading type-heading-xl">
            Journal
          </h2>

          <div className="mt-[72px]">
            <JournalBento locale={locale} />
          </div>
        </Container>
      </section>
    </main>
  );
}