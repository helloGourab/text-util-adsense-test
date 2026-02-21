// src/pages/CaseConverter.jsx ~annotator~
import { useState } from "react";
import SEO from "../components/SEO";

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

      <div className="mt-12 prose max-w-none border-t pt-8 text-gray-700">
        <h2 className="text-2xl font-bold mb-4">
          Professional Text Case Conversion
        </h2>
        <p className="mb-4">
          Consistency in text formatting is a hallmark of professional writing.
          Whether you've accidentally left the <strong>Caps Lock</strong> key on
          or you're dealing with poorly formatted data from external sources,
          our <strong>Case Converter</strong> allows you to normalize your text
          instantly without retyping a single word.
        </p>

        <h3 className="text-xl font-semibold mb-2">
          Available Conversion Modes
        </h3>
        <ul className="list-disc pl-5 mb-6 space-y-2">
          <li>
            <strong>UPPERCASE:</strong> Converts every letter into a capital.
            Ideal for impactful headings, warnings, or legal disclaimers.
          </li>
          <li>
            <strong>lowercase:</strong> Transforms all characters into small
            letters. Useful for standardizing email addresses, URLs, or cleaning
            up shouting-style text.
          </li>
          <li>
            <strong>Sentence Case:</strong> Automatically capitalizes the first
            letter of every sentence and converts the rest to lowercase. This is
            perfect for fixing paragraphs copied from notes or transcripts.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">
          Who Benefits From Case Conversion?
        </h3>
        <p className="mb-4">
          This tool is an essential asset for several workflows:
        </p>
        <ul className="list-disc pl-5 mb-6 space-y-2">
          <li>
            <strong>Developers:</strong> Quickly format strings for code
            constants or documentation.
          </li>
          <li>
            <strong>Content Editors:</strong> Standardize headlines and body
            text across different articles.
          </li>
          <li>
            <strong>Data Analysts:</strong> Clean up inconsistent entries in
            spreadsheets before generating reports.
          </li>
          <li>
            <strong>Students:</strong> Fix bibliography entries or citations
            that have inconsistent capitalization.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Save Time and Effort</h3>
        <p className="mb-4">
          Manual editing is slow and prone to human error. By using an automated
          converter, you ensure 100% accuracy across your entire document. Our
          tool processes the text in your browser using optimized algorithms,
          ensuring even large blocks of text are converted in milliseconds.
        </p>

        <h3 className="text-xl font-semibold mb-2">Privacy & Security</h3>
        <p>
          We prioritize your data security. Unlike server-side converters, our
          tool performs all transformations{" "}
          <strong>locally in your browser</strong>. Your sensitive information
          is never uploaded to our servers, keeping your data private and
          secure.
        </p>
      </div>
    </section>
  );
}
