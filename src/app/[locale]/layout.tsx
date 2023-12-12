import NavBar from "@/components/NavBar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { useTranslations } from "next-intl";
import Footer from "@/components/FooterSection";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Achraf Hannoun | Web Developer",
  description: "Generated by create next app",
};
export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: any;
}) {
  const t = useTranslations("Index");
  const switchLang = t("switchButton");
  return (
    <html lang={locale}>
      <body className={inter.className + " bg-[#FAF1E4] max-w-screen mx-auto"}>
        <NavBar lang={locale} message={switchLang} />
        {children}
      </body>
      <Footer />
    </html>
  );
}
