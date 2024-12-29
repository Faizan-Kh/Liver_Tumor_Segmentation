import React from "react";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-1/4 bg-gray-100 shadow-lg h-screen p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Navigation</h2>
      <nav className="space-y-4">
        {[
          { path: "/", label: "Home" },
          { path: "/workspace/upload", label: "Upload Image" },
          { path: "/workspace/show", label: "Show Images" },
          { path: "/workspace/pie", label: "Pie Chart" },
          { path: "/about", label: "About" },
        ].map(({ path, label }) => (
          <Link
            key={path}
            to={path}
            className={`block px-4 py-2 rounded transition-all duration-300 ${
              location.pathname === path
                ? "bg-blue-600 text-white font-semibold scale-105"
                : "text-blue-500 hover:bg-blue-500 hover:text-white"
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
