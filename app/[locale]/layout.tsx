import { notFound } from "next/navigation";

import Navbar from "@/components/layout/Navbar";
import { ModalProvider } from "@/components/modals/ModalProvider";
import ModalRoot from "@/components/modals/ModalRoot";
import { getDictionary } from "@/i18n/getDictionary";
import { isLocale } from "@/i18n/config";

type LocaleLayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}>;

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  console.log("CURRENT LOCALE:", locale);

  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = await getDictionary(locale);

  return (
    <ModalProvider>
      <Navbar menuDescriptions={dictionary.navigation.menuDescriptions} />

      {children}

      <ModalRoot />
    </ModalProvider>
  );
}