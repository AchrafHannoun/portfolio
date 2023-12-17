import fs from "fs";
import matter from "gray-matter";
import path from "path";

export default function getPostContent (slug: string)  {
    const folder = path.join(process.cwd(), 'src/posts/');
    const file = folder + slug + ".md";
    const content = matter(fs.readFileSync(file, "utf8"));
    return content;
  };