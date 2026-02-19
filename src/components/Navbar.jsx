import { NavLink, Link } from "react-router-dom";

const Navbar = ({ links }) => {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-black text-blue-600 tracking-tighter"
          >
            TXT<span className="text-slate-800">UTILS</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive
                      ? "text-blue-600 border-b-2 border-blue-600 pb-5"
                      : "text-gray-500 hover:text-gray-900"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Simple Mobile Menu Placeholder */}
          <div className="md:hidden text-gray-500 text-xs">Menu</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
