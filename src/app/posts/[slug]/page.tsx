import SpeechReader from "@/components/SpeechReader";
import { getAllPosts, getPost } from "@/lib/posts";
import { notFound } from "next/navigation";

// Tipos
type Props = {
  params: {
    slug: string;
  };
};

// Página de post
export default async function PostPage({ params }: Props) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto p-6">
      <SpeechReader text={`${post.title}. ${post.contentHtml}`} />
      <h1 className="text-3xl font-bold mb-4 text-black dark:text-white">
        {post.title}
      </h1>
      <p className="text-sm text-gray-500 mb-6">{post.date}</p>
      <div
        className="text-gray-700 dark:text-gray-300 prose prose-lg dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </main>
  );
}

// ⚠️ Esta função é obrigatória com parâmetros dinâmicos!
export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
