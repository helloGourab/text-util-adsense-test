// src/pages/CaseConverter.jsx ~annotator~
import { useState } from "react";
import SEO from '../components/SEO';

export default function CaseConverter() {
  const [text, setText] = useState("");

  const handleUpper = () => setText(text.toUpperCase());
  const handleLower = () => setText(text.toLowerCase());
  const handleSentence = () => {
    const converted = text
      .toLowerCase()
      .replace(/(^\s*\w|[\.\!\?]\s*\w)/g, (c) => c.toUpperCase());
    setText(converted);
  };

  return (
    <section>
      <SEO
        title="Case Converter"
        description="Convert text to uppercase, lowercase, or sentence case instantly."
      />
      <h1 className="text-3xl font-bold mb-4">Case Converter Tool</h1>
      <p className="mb-6 text-gray-600">
        Easily transform your text between UPPERCASE, lowercase, or Sentence
        case. This utility saves time when fixing text copied from different
        sources with inconsistent formatting.
      </p>

      <textarea
        className="w-full h-64 p-4 border rounded-lg shadow-sm mb-4"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />

      <div className="flex flex-wrap gap-2">
        <button
          onClick={handleUpper}
          className="bg-slate-700 text-white px-4 py-2 rounded hover:bg-slate-800"
        >
          UPPERCASE
        </button>
        <button
          onClick={handleLower}
          className="bg-slate-700 text-white px-4 py-2 rounded hover:bg-slate-800"
        >
          lowercase
        </button>
        <button
          onClick={handleSentence}
          className="bg-slate-700 text-white px-4 py-2 rounded hover:bg-slate-800"
        >
          Sentence case
        </button>
        <button
          onClick={() => setText("")}
          className="bg-red-50 text-red-600 px-4 py-2 rounded border border-red-200"
        >
          Clear
        </button>
      </div>
    </section>
  );
}
