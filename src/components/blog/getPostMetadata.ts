import fs from 'fs';
import { postMetaData } from "@/types/postMetadata";
import matter from 'gray-matter';
import path from 'path';

export default function getPostMetaData (): postMetaData[] {
    const folder = path.join(process.cwd(), 'src/posts');
    const files = fs.readdirSync(folder);
    const markdowsPosts = files.filter((file) => file.endsWith(".md"));
    const posts = markdowsPosts.map((fileName) => {
      const fileContents = fs.readFileSync("src/posts/" + fileName, "utf8");
      const matterResult = matter(fileContents);
      return {
        title: matterResult.data.title,
        date: matterResult.data.date,
        subtitle: matterResult.data.subtitle,
        slug: fileName.replace(".md", ""),
      };
    });

    return posts;
  };