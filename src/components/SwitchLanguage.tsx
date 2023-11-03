"use client";
import { langProp } from "@/types/langType";
import { usePathname, useRouter } from "next-intl/client";
export default function SwitchLanguageButton(props: langProp) {
  const pathname = usePathname();
  const router = useRouter();
  const changeLanguage = () => {
    if (props.lang === "fr") {
      router.replace(pathname, { locale: "en" });
    } else {
      router.replace(pathname, { locale: "fr" });
    }
  };

  return <button onClick={changeLanguage}>switch To french</button>;
}
