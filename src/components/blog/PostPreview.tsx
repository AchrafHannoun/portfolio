import { postMetaData } from "@/types/postMetadata";
import Link from "next/link";

export default function PostPreview(props: postMetaData) {
  const uri = "/blog/" + props.slug;
  return (
    <div
      className="border border-slate-300 p-4 rounded-md shadow-sm
      bg-[#CEDEBD]"
    >
      <p className="text-sm text-slate-900">{props.date}</p>

      <Link href={uri}>
        <h2 className=" hover:text-[#9EB384] text-lg hover:underline mb-4">
          {props.title}
        </h2>
      </Link>
      <p className="text-slate-700">{props.subtitle}</p>
    </div>
  );
}
