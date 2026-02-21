// src/pages/WordCounter.jsx ~annotator~
import { useState } from "react";
import SEO from "../components/SEO";

export default function WordCounter() {
  const [text, setText] = useState("");

  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const charCount = text.length;

  return (
    <section>
      <SEO
        title="Word Counter"
        description="Calculate word count and character count in real-time with our free online tool."
      />
      <h1 className="text-3xl font-bold mb-4">Online Word Counter</h1>
      <p className="mb-6 text-gray-600">
        Use our free word counter tool to accurately measure the length of your
        text. It provides real-time counts for words and characters, making it
        perfect for bloggers, students, and SEO professionals.
      </p>

      <textarea
        className="w-full h-64 p-4 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
        placeholder="Type or paste your text here..."
        onChange={(e) => setText(e.target.value)}
        value={text}
      />

      <div className="mt-4 flex gap-6 text-lg font-semibold">
        <div className="bg-white p-4 rounded shadow border flex-1 text-center">
          Words: <span className="text-blue-600">{wordCount}</span>
        </div>
        <div className="bg-white p-4 rounded shadow border flex-1 text-center">
          Characters: <span className="text-blue-600">{charCount}</span>
        </div>
      </div>
    </section>
  );
}
