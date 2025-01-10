import React from "react";
import { Link } from "react-router-dom";
import { FaUpload, FaEye, FaChartPie, FaInfoCircle, FaUsers } from "react-icons/fa"; // Import icons

function HomePage() {
  return (
    <div className="text-center p-8 min-h-screen bg-cover bg-center bg-gray-50 ">
      <h1
        className="text-4xl font-extrabold mb-6 animate-pulse text-gray-800 hover:text-blue-600 transition-all duration-300 ease-in-out"
      >
        Welcome to CodecroodMed - Liver Tumor Segmentation Workspace
      </h1>

      <p className="mt-2 text-gray-800 mb-10 text-lg">
        Follow the instructions below to use the app effectively:
      </p>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 px-4">
        {/* Card 1 */}
        <Link
          to="/workspace/upload"
          className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition duration-300 transform hover:scale-105 hover:bg-blue-50"
        >
          <FaUpload className="text-blue-500 text-4xl mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-gray-700 mb-4">1. Upload Image</h3>
          <p className="text-gray-600">
            Navigate to the "Upload Image" section and upload CT scan images for analysis.
          </p>
        </Link>

        {/* Card 2 */}
        <Link
          to="/workspace/show"
          className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition duration-300 transform hover:scale-105 hover:bg-blue-50"
        >
          <FaEye className="text-green-500 text-4xl mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-gray-700 mb-4">2. View Segmentation</h3>
          <p className="text-gray-600">
            Go to the "Show Result" section to view the original CT scan and the segmented tumor.
          </p>
        </Link>

        {/* Card 3 */}
        <Link
          to="/workspace/pie"
          className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition duration-300 transform hover:scale-105 hover:bg-blue-50"
        >
          <FaChartPie className="text-purple-500 text-4xl mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-gray-700 mb-4">3. Data Visualization</h3>
          <p className="text-gray-600">
            Visit the "Visualization" section to analyze tumor and liver proportions through pie charts.
          </p>
        </Link>

        {/* Card 4 */}
        <Link
          to="/about"
          className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition duration-300 transform hover:scale-105 hover:bg-blue-50"
        >
          <FaUsers className="text-teal-500 text-4xl mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-gray-700 mb-4">4. Meet the Team</h3>
          <p className="text-gray-600">
            Our passionate team combines expertise in medical imaging, deep learning, and healthcare to drive innovation in liver cancer diagnosis and treatment.
          </p>
        </Link>

      </div>
    </div>
  );
}

export default HomePage;
