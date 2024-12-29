import React, { useState } from "react";
import { motion } from "framer-motion"; // For smooth animations

function AboutPage() {
  const [expanded, setExpanded] = useState(null);

  const toggleSection = (section) => {
    setExpanded(expanded === section ? null : section);
  };

  return (
    <div className="max-w-screen-lg mx-auto mt-5 p-6 bg-gradient-to-br from-blue-50 to-white rounded shadow-lg overflow-hidden">
      {/* Header */}
      <h2 className="text-3xl font-extrabold text-gray-800 mb-4 text-center animate-pulse">
        About Us
      </h2>

      {/* Purpose Section */}
      <section className="mb-6">
        <div
          className="cursor-pointer p-3 rounded-lg bg-blue-100 hover:bg-blue-200 transition-all duration-300"
          onClick={() => toggleSection("purpose")}
        >
          <h3 className="text-xl font-semibold text-gray-700 flex items-center">
            Purpose{" "}
            <span
              className={`ml-auto transform transition-transform ${
                expanded === "purpose" ? "rotate-180" : "rotate-0"
              }`}
            >
              ▼
            </span>
          </h3>
        </div>
        {expanded === "purpose" && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden p-4 text-gray-600 bg-blue-50 rounded"
          >
            This project aims to assist healthcare professionals by providing a
            tool for accurate and efficient liver tumor segmentation from CT
            scans. By leveraging advanced AI techniques, we strive to enhance
            medical diagnostics and treatment planning.
          </motion.div>
        )}
      </section>

      {/* Methodology Section */}
      <section className="mb-6">
        <div
          className="cursor-pointer p-3 rounded-lg bg-blue-100 hover:bg-blue-200 transition-all duration-300"
          onClick={() => toggleSection("methodology")}
        >
          <h3 className="text-xl font-semibold text-gray-700 flex items-center">
            Methodology{" "}
            <span
              className={`ml-auto transform transition-transform ${
                expanded === "methodology" ? "rotate-180" : "rotate-0"
              }`}
            >
              ▼
            </span>
          </h3>
        </div>
        {expanded === "methodology" && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden p-4 text-gray-600 bg-blue-50 rounded"
          >
            Our methodology involves using state-of-the-art deep learning
            models, specifically transformer-based architectures like nnFormer
            and UNETR. These models process 3D CT images to identify and segment
            liver tumors with high precision. The process includes:
            <ul className="list-disc list-inside mt-2">
              <li>Preprocessing CT scans for optimal model performance.</li>
              <li>Training the model on the LITS17 dataset for segmentation tasks.</li>
              <li>Visualizing the results for better interpretation by clinicians.</li>
            </ul>
          </motion.div>
        )}
      </section>

      {/* Features Section */}
      <section className="mb-6">
        <div
          className="cursor-pointer p-3 rounded-lg bg-blue-100 hover:bg-blue-200 transition-all duration-300"
          onClick={() => toggleSection("features")}
        >
          <h3 className="text-xl font-semibold text-gray-700 flex items-center">
            Features{" "}
            <span
              className={`ml-auto transform transition-transform ${
                expanded === "features" ? "rotate-180" : "rotate-0"
              }`}
            >
              ▼
            </span>
          </h3>
        </div>
        {expanded === "features" && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden p-4 text-gray-600 bg-blue-50 rounded"
          >
            <ul className="list-disc list-inside">
              <li>Upload and analyze CT scans with ease.</li>
              <li>View segmentation results to distinguish tumors from healthy liver tissue.</li>
              <li>Visualize data through interactive charts for better understanding.</li>
              <li>Learn about the technology and models used in the "About" section.</li>
            </ul>
          </motion.div>
        )}
      </section>
    </div>
  );
}

export default AboutPage;
