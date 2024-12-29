import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

function HomePage() {
  return (
    <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-white min-h-screen">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-6 animate-bounce">
        Welcome to Liver Tumor Segmentation
      </h1>
      <p className="mt-2 text-gray-600 mb-10">
        Follow the instructions below to use the app effectively:
      </p>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
        {/* Card 1 */}
        <Link
          to="/workspace/upload"
          className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition duration-300 transform hover:scale-105"
        >
          <h3 className="text-xl font-semibold text-gray-700 mb-4">1. Upload Image</h3>
          <p className="text-gray-600">
            Navigate to the "Upload Image" section and upload CT scan images for analysis.
          </p>
        </Link>

        {/* Card 2 */}
        <Link
          to="/workspace/show"
          className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition duration-300 transform hover:scale-105"
        >
          <h3 className="text-xl font-semibold text-gray-700 mb-4">2. View Results</h3>
          <p className="text-gray-600">
            Go to the "Show Result" section to view the original CT scan and the segmented tumor.
          </p>
        </Link>

        {/* Card 3 */}
        <Link
          to="/workspace/pie"
          className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition duration-300 transform hover:scale-105"
        >
          <h3 className="text-xl font-semibold text-gray-700 mb-4">3. Data Visualization</h3>
          <p className="text-gray-600">
            Visit the "Visualization" section to analyze tumor and liver proportions through pie charts.
          </p>
        </Link>

        {/* Card 4 */}
        <Link
          to="/about"
          className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition duration-300 transform hover:scale-105"
        >
          <h3 className="text-xl font-semibold text-gray-700 mb-4">4. Learn More</h3>
          <p className="text-gray-600">
            Explore the "About" section to understand the purpose and methodology of this application.
          </p>
        </Link>

        
       
      </div>
    </div>
  );
}

export default HomePage;
