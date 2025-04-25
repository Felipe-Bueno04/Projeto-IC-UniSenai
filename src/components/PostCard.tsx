// src/app/components/PostCard.tsx
import Link from "next/link";

interface PostCardProps {
  title: string;
  excerpt: string;
  slug: string;
}

export default function PostCard({ title, excerpt, slug }: PostCardProps) {
  return (
    <Link href={`/posts/${slug}`} className="block focus:outline-none focus:ring-2 focus:ring-blue-500">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-all">
        <h2 className="text-2xl font-bold mb-2 text-black dark:text-white">{title}</h2>
        <p className="text-gray-700 dark:text-gray-300">{excerpt}</p>
      </div>
    </Link>
  );
}
