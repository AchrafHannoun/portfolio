import getPostContent from "@/components/blog/getPostContent";
import Markdown from "markdown-to-jsx";

export default function PostPage(props: any) {
  const slug: string = props.params.slug;
  const post = getPostContent(slug);
  return (
    <div className="w-2/3 m-auto">
      <div className="w-full m-auto py-12 text-center">
        <h1 className="text-2xl text-[#435334] ">{post.data.title}</h1>
        <p className="text-slate-400 mt-2">{post.data.date}</p>
      </div>

      <article className="prose w-full m-auto">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
}
