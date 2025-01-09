import { UserButton } from "@clerk/clerk-react";
import React from "react";
import { Link } from "react-router-dom";
 // Example for UserButton component

function Header() {
  return (
    <header className="p-4 bg-blue-500 text-white shadow-lg flex justify-between items-center sticky top-0 z-10">
      <div className="flex justify-center w-full">
        <h1 className="text-xl font-bold text-center">Liver Tumor Segmentation Workspace</h1>
      </div>
      {/* User Profile Button */}
      <div className="ml-auto">
        <UserButton
          className="transform scale-125"
          style={{ padding: "10px", borderRadius: "8px", fontSize: "16px" }}
        />
      </div>
      {/* Help Link */}
      <div className="ml-4">
        <Link
          to="/help"
          className="text-white font-semibold hover:text-blue-300 transition-all duration-300"
        >
          Help
        </Link>
      </div>
    </header>
  );
}

export default Header;
