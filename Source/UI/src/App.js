import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SignUp, UserButton } from "@clerk/clerk-react";
import Sidebar from "./components/Sidebar";
import HomePage from "./components/HomePage";
import UploadImage from "./components/UploadImage";
import ShowImages from "./components/ShowImages";
import PieChart from "./components/PieChart";
import AboutPage from "./components/AboutPage";
import ProtectedRoute from "./components/ProtectedRoute"; // Import the ProtectedRoute component
import HelpScreen from "./components/Help";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div className="bg-gray-50 min-h-screen">
        <Header/>



        {/* Layout with Sidebar and Main Content */}
        <div className="flex">
          <Sidebar /> {/* Sidebar remains consistent across all routes */}
          <main className="flex-1 p-6 bg-white shadow-inner">
            <Routes>
              {/* HomePage and AboutPage are publicly accessible without authentication */}
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />

              {/* Protected routes require authentication */}
              <Route
                path="/workspace/upload"
                element={
                  <ProtectedRoute element={<UploadImage />} />
                }
              />
              <Route
                path="/workspace/show"
                element={
                  <ProtectedRoute element={<ShowImages />} />
                }
              />
              <Route
                path="/workspace/pie"
                element={
                  <ProtectedRoute element={<PieChart />} />
                }
              />
              <Route
                path="/sign-up"
                element={
                  <SignUp />
                }
              />
               <Route path="/help" element={<HelpScreen/>} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
