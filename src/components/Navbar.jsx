import { Link, useLocation } from "react-router-dom";

const links = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Projects", to: "/projects" },
  { name: "Contact", to: "/contact" },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-green-600">Priyanshu Jha</h1>
        <div className="space-x-6 text-sm font-medium">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`hover:text-green-600 transition ${
                location.pathname === link.to ? "text-green-600" : "text-gray-600"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}