import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "src/posts");

export async function getPost(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title,
    date: data.date,
    contentHtml,
  };
}

// 🆕 Nova função para listar todos os posts:
// src/lib/posts.ts
export function getAllPosts() {
    const fileNames = fs.readdirSync(postsDirectory);
  
    const posts = fileNames.map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);
  
      return {
        slug,
        title: data.title,
        date: data.date,
        coverImage: data.coverImage,
        excerpt: data.excerpt,
      };
    });
  
    return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
  }  
