// src/app/about/page.tsx
export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Sobre o Blog Acessível</h1>

      <p className="mb-4">
        O <strong>Blog Juntos e Misturados</strong> foi criado com o objetivo de compartilhar conteúdos sobre acessibilidade digital e inclusão na web.
      </p>

      <p className="mb-4">
        Acreditamos que todos têm o direito de acessar a informação, independentemente de suas habilidades físicas, visuais, auditivas ou cognitivas.
      </p>

      <p className="mb-4">
        Aqui você encontrará artigos voltados para melhorar a experiência de navegação de todas as pessoas.
      </p>

      <p className="text-sm text-gray-600">
        Desenvolvido por Pedro Frasson e Felipe Bueno do Projeto de Iniciação Científica UniSENAI.
      </p>
    </main>
  );
}
