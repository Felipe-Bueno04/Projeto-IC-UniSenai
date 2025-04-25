import PostCard from "@/components/PostCard";
import Image from "next/image";

export default function Home() {
  const posts = [
    // Pode adicionar mais posts aqui depois
    {
      title: "Entendendo o Autismo: Um Guia Completo",
      excerpt: "Conheça os principais sinais, diagnósticos e formas de apoio para pessoas com autismo.",
      slug: "entendendo-o-autismo",
    },
    {
      title: "Dicas de Inclusão Escolar",
      excerpt: "Práticas e estratégias para tornar a escola um ambiente mais inclusivo.",
      slug: "inclusao-escolar",
    },
  ];

  return (
    <main className="max-w-7xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center text-black dark:text-white">Blog sobre Autismo</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <PostCard key={post.slug} {...post} />
        ))}
      </div>
    </main>
  );
}
