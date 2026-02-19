import { useState } from "react";
import SEO from "../components/SEO";

export default function RemoveSpaces() {
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);

  const cleanText = () => {
    // Standardizes whitespace: replaces all tabs/multiple spaces with a single space
    const cleaned = text.replace(/\s+/g, " ").trim();
    setText(cleaned);
  };

  const copyToClipboard = async () => {
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset button text after 2s
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <section>
      <SEO
        title="Remove Extra Spaces"
        description="Clean up your text by removing multiple spaces, tabs, and unnecessary whitespaces instantly."
      />

      <h1 className="text-3xl font-bold mb-4">Whitespace Remover</h1>
      <p className="mb-6 text-gray-600">
        This utility helps you clean up messy text by consolidating multiple
        spaces, tabs, and line breaks into single spaces. Perfect for formatting
        data or cleaning up text copied from PDFs and emails.
      </p>

      <textarea
        className="w-full h-64 p-4 border rounded-lg shadow-sm mb-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
        placeholder="Paste text with messy spacing here..."
        onChange={(e) => setText(e.target.value)}
        value={text}
      />

      <div className="flex flex-wrap gap-3">
        <button
          onClick={cleanText}
          className="bg-blue-600 text-white px-6 py-2 rounded font-medium hover:bg-blue-700 transition"
        >
          Remove Extra Spaces
        </button>

        <button
          onClick={copyToClipboard}
          disabled={!text}
          className={`px-6 py-2 rounded font-medium border transition-all ${
            copied
              ? "bg-green-50 border-green-500 text-green-700"
              : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50"
          }`}
        >
          {copied ? "Copied!" : "Copy Text"}
        </button>

        <button
          onClick={() => setText("")}
          className="px-6 py-2 rounded font-medium text-gray-400 hover:text-red-500 transition"
        >
          Clear
        </button>
      </div>
    </section>
  );
}
