import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import HomePage from "./components/HomePage";
import UploadImage from "./components/UploadImage";
import ShowImages from "./components/ShowImages";
import PieChart from "./components/PieChart";
import AboutPage from "./components/AboutPage";

function App() {
  return (
    <Router>
      <div className="bg-gray-50 min-h-screen">
        {/* Header Section */}
        <header className="p-4 bg-blue-500 text-white text-center shadow-lg">
          <h1 className="text-xl font-bold">Liver Tumor Segmentation Workspace</h1>
        </header>

        {/* Layout with Sidebar and Main Content */}
        <div className="flex">
          <Sidebar /> {/* Sidebar remains consistent across all routes */}
          <main className="flex-1 p-6 bg-white shadow-inner">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/workspace/upload" element={<UploadImage />} />
              <Route path="/workspace/show" element={<ShowImages />} />
              <Route path="/workspace/pie" element={<PieChart />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
