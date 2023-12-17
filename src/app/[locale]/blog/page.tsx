import getPostMetaData from "@/components/blog/getPostMetadata";
import PostPreview from "@/components/blog/PostPreview";

export default function Blog() {
  const postMetadata = getPostMetaData();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <div className="w-2/3 m-auto py-12 grid grid-cols-1 md:grid-cols-2 gap-4">
      {postPreviews}
    </div>
  );
}
