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
  return (
    <button
      className="bg-[#CEDEBD] px-6 py-2 rounded-lg hover:bg-[#9EB384]"
      onClick={changeLanguage}
    >
      {props.message}
    </button>
  );
}
