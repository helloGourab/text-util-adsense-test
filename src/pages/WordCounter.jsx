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

      <div className="mt-12 prose max-w-none border-t pt-8 text-gray-700">
        <h2 className="text-2xl font-bold mb-4">
          Why Use an Online Word Counter?
        </h2>
        <p className="mb-4">
          Whether you are an aspiring author, a digital marketer, or a student,
          meeting specific word count requirements is critical. Our{" "}
          <strong>Online Word Counter</strong>
          provides instant, real-time feedback so you can stay within your
          limits without the need for heavy software like Microsoft Word or
          Google Docs.
        </p>

        <h3 className="text-xl font-semibold mb-2">
          Essential for SEO and Marketing
        </h3>
        <p className="mb-4">
          Search engines often prioritize content that hits a specific "sweet
          spot" in length. While quality is king, long-form articles (typically
          1,500+ words) tend to rank better for competitive keywords. Use this
          tool to ensure your blog posts are long enough for SEO but concise
          enough to keep readers engaged.
        </p>

        <h3 className="text-xl font-semibold mb-2">
          Social Media & Character Limits
        </h3>
        <ul className="list-disc pl-5 mb-6 space-y-2">
          <li>
            <strong>X (Twitter):</strong> Stay within the 280-character limit
            for standard posts.
          </li>
          <li>
            <strong>Meta (Facebook):</strong> Keep descriptions impactful; ideal
            lengths vary by post type.
          </li>
          <li>
            <strong>LinkedIn:</strong> Profile summaries and posts have specific
            character caps that affect visibility.
          </li>
          <li>
            <strong>Instagram:</strong> Captions are cut off after 125
            characters, making the first few words vital.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">
          Academic and Professional Writing
        </h3>
        <p className="mb-4">
          College essays, research papers, and grant proposals almost always
          have a strict maximum word count. Our counter helps you monitor your
          progress as you write, ensuring you don't exceed the limit and face
          point deductions.
        </p>

        <h3 className="text-xl font-semibold mb-2">Technical Accuracy</h3>
        <p>
          This tool uses advanced string splitting to accurately count words
          regardless of multiple spaces, tabs, or line breaks. Unlike simpler
          counters, it recognizes complex whitespace patterns to give you the
          most precise count possible.
        </p>
      </div>
    </section>
  );
}
