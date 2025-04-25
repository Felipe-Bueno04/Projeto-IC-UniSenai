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
            className="block p-6 border rounded-lg shadow hover:shadow-md transition bg-white dark:bg-gray-800 dark:border-gray-700"
          >
            <h2 className="text-2xl font-semibold mb-2 text-black dark:text-white">{post.title}</h2>
            <p className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString()}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
