import { getAllPosts } from "@/lib/posts";
import Link from "next/link";

export default async function HomePage() {
  const posts = getAllPosts();

  return (
    <main className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-black dark:text-white">Últimas Postagens</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/posts/${post.slug}`}
            className="block border rounded-lg overflow-hidden shadow hover:shadow-lg transition bg-white dark:bg-gray-800 dark:border-gray-700"
          >
            {post.coverImage && (
              <img
                src={post.coverImage}
                alt={`Imagem de capa do post ${post.title}`}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-2 text-black dark:text-white">{post.title}</h2>
              <p className="text-sm text-gray-500 mb-2">{new Date(post.date).toLocaleDateString()}</p>
              <p className="text-gray-700 dark:text-gray-300">{post.excerpt}</p>
            </div>
          </Link>
        ))}

      </div>
    </main>
  );
}
