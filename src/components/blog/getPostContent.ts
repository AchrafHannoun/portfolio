import fs from "fs";
import matter from "gray-matter";

export default function getPostContent (slug: string)  {
    const folder = "src/posts/";
    const file = folder + slug + ".md";
    const content = matter(fs.readFileSync(file, "utf8"));
    return content;
  };