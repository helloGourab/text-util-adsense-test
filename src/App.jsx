import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// Page Imports
import WordCounter from "./pages/WordCounter";
import RemoveSpaces from "./pages/RemoveSpaces";
import CaseConverter from "./pages/CaseConverter";

function App() {
  const navLinks = [
    { path: "/word-counter", label: "Word Counter" },
    { path: "/remove-spaces", label: "Remove Spaces" },
    { path: "/case-converter", label: "Case Converter" },
  ];

  return (
    <Router>
      <div className="min-h-screen bg-slate-50 flex flex-col">
        {/* Pass links as props to Navbar */}
        <Navbar links={navLinks} />

        <main className="grow max-w-5xl mx-auto w-full px-4 py-10">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <Routes>
              <Route path="/" element={<WordCounter />} />
              <Route path="/word-counter" element={<WordCounter />} />
              <Route path="/remove-spaces" element={<RemoveSpaces />} />
              <Route path="/case-converter" element={<CaseConverter />} />
            </Routes>
          </div>
        </main>

        <footer className="bg-white border-t border-gray-200 py-6 text-center text-xs text-gray-500">
          <div className="flex justify-center space-x-4 mb-2">
            <a href="/about.html" className="hover:underline">
              About
            </a>
            <a href="/contact.html" className="hover:underline">
              Contact
            </a>
            <a href="/privacy-policy.html" className="hover:underline">
              Privacy Policy
            </a>
            <a href="/terms-of-service.html" className="hover:underline">
              Terms
            </a>
            <a href="/cookie-policy.html" className="hover:underline">
              Cookies
            </a>
          </div>
          <p>&copy; 2026 TxtUtils. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
