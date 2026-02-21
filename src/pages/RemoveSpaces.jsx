// src/pages/RemoveSpaces.jsx ~annotator~
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

      <div className="mt-12 prose max-w-none border-t pt-8 text-gray-700">
        <h2 className="text-2xl font-bold mb-4">
          Why Use a Whitespace Remover?
        </h2>
        <p className="mb-4">
          Manually fixing spacing issues in large documents is a tedious,
          error-prone task. Whether you are a developer cleaning up code, a
          student formatting an essay, or a marketer preparing copy for social
          media, extra spaces can make your content look unprofessional. Our{" "}
          <strong>Whitespace Remover</strong> tool automates this process,
          ensuring your text is clean and standardized in seconds.
        </p>

        <h3 className="text-xl font-semibold mb-2">Common Use Cases</h3>
        <ul className="list-disc pl-5 mb-6 space-y-2">
          <li>
            <strong>PDF to Text Conversion:</strong> Copying text from PDFs
            often introduces irregular line breaks and triple spaces. This tool
            fixes that instantly.
          </li>
          <li>
            <strong>Data Cleaning:</strong> Prepare messy CSV or Excel data for
            database imports by removing hidden tabs and trailing spaces.
          </li>
          <li>
            <strong>Code Formatting:</strong> Quickly strip out unnecessary
            indentations or "ghost" spaces from snippets before sharing them.
          </li>
          <li>
            <strong>Social Media & SEO:</strong> Ensure your meta descriptions
            and tweets don't waste character counts on invisible whitespace.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">How It Works</h3>
        <p className="mb-4">
          The tool uses a <code>regex</code> (regular expression) pattern to
          identify any sequence of two or more whitespace characters—including
          tabs and newlines—and replaces them with a single space. It also
          "trims" the text, meaning any empty space at the very beginning or the
          very end of your input is deleted.
        </p>

        <h3 className="text-xl font-semibold mb-2">Privacy Guaranteed</h3>
        <p>
          Your data never leaves your browser. All text processing happens
          locally on your device using JavaScript, meaning we don't store, view,
          or transmit your content to any external servers.
        </p>
      </div>
    </section>
  );
}
