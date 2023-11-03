import Link from "next-intl/link";
import SwitchLanguageButton from "@/components/SwitchLanguage";
export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>hello from about</h1>
      <Link href={"/"}>
        <button>bring me back home </button>
      </Link>

      <SwitchLanguageButton />
    </main>
  );
}
