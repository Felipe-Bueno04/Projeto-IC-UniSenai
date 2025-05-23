import { getPost } from "@/lib/posts";
import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
}

export default async function PostPage({ params }: Props) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-black dark:text-white">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-6">{post.date}</p>
      <div
        className="text-gray-700 dark:text-gray-300 prose prose-lg dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </main>
  );
}
