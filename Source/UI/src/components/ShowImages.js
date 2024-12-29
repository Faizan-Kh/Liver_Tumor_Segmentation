import React, { useState } from "react";

// Modal component for displaying images in full screen
const Modal = ({ src, alt, onClose }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white bg-red-500 hover:bg-red-700 p-2 rounded-full"
        >
          X
        </button>
        <img src={src} alt={alt} className="max-w-4xl max-h-[80vh] rounded-lg" />
      </div>
    </div>
  );
};

function ShowImages() {
  const [zoomLevel, setZoomLevel] = useState(1); // State for zoom level
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  // Function to handle zooming
  const handleZoomIn = () => setZoomLevel(zoomLevel + 0.1);
  const handleZoomOut = () => setZoomLevel(zoomLevel - 0.1);

  // Open image modal
  const openModal = (src) => {
    setModalImage(src);
    setIsModalOpen(true);
  };

  // Close image modal
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="h-[100vh] w-full overflow-auto bg-gradient-to-br from-indigo-50 to-white p-6">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8 animate-pulse">
        Result: Tumor Segmentation
      </h2>

      

      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
        {/* Original CT Slice */}
        <div
          className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
          onClick={() => openModal("/ctimage.png")}
        >
          <h3 className="text-xl font-semibold text-gray-700 mb-4 text-center">Original CT Slice</h3>
          <img
            src="/ctimage.png" // Corrected path
            alt="Original CT"
            className="w-full rounded-lg transition-all duration-500 transform hover:scale-105"
            style={{ transform: `scale(${zoomLevel})` }}
          />
        </div>

        {/* Segmented Tumor */}
        <div
          className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
          onClick={() => openModal("/segment.png")}
        >
          <h3 className="text-xl font-semibold text-gray-700 mb-4 text-center">Segmented Tumor</h3>
          <img
            src="/segment.png" // Corrected path
            alt="Segmented Tumor"
            className="w-full rounded-lg transition-all duration-500 transform hover:scale-105"
            style={{ transform: `scale(${zoomLevel})` }}
          />
        </div>
      </div>

      {/* Modal for image zoom */}
      {isModalOpen && <Modal src={modalImage} alt="Segmented Tumor" onClose={closeModal} />}

      <div className="mt-8 text-center">
        <p className="text-lg text-gray-600">Click on the images to view them in full screen.</p>
        <p className="text-lg text-gray-600">Use the Zoom In/Zoom Out buttons for better visualization.</p>
      </div>
    </div>
  );
}

export default ShowImages;
