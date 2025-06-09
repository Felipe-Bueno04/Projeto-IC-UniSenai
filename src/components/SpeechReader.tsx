"use client";

import { useState } from "react";

export default function SpeechReader({ text }: { text: string }) {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const speak = () => {
    if (!window.speechSynthesis) return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "pt-BR";

    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);
  };

  const stop = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  return (
    <div className="mb-4 flex gap-2">
      {!isSpeaking ? (
        <button
          onClick={speak}
          aria-label="Ouvir leitura do post"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          🔊 Ouvir
        </button>
      ) : (
        <button
          onClick={stop}
          aria-label="Parar leitura"
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          ⏹️ Parar
        </button>
      )}
    </div>
  );
}
