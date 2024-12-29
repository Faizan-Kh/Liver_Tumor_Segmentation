import React, { useState } from "react";

function UploadImage() {
  const [isHovered, setIsHovered] = useState(false);

  // Handle drag over and drag leave
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsHovered(true);
  };

  const handleDragLeave = () => {
    setIsHovered(false);
  };

  // Handle file select (optional)
  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    console.log(file); // Handle file upload
  };

  return (
    <div className="w-full h-[75vh] p-6 bg-gray-50">
      <h2 className="text-3xl font-semibold text-center mb-8 animate__animated animate__fadeIn">
        Upload Image
      </h2>
      <div className="flex justify-center items-center h-full">
        <div
          className={`w-full h-full flex flex-col justify-center items-center border-4 ${
            isHovered ? "border-blue-500" : "border-dashed border-gray-300"
          } rounded-lg p-8 transition-all duration-300 ease-in-out transform ${
            isHovered ? "scale-105 shadow-lg" : "scale-100"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
        >
          <p className="text-gray-600 text-center mb-4 text-lg animate__animated animate__fadeInUp">
            Drag & drop files here or click to upload.
          </p>
          <input
            type="file"
            id="file-upload"
            className="hidden"
            onChange={handleFileSelect}
          />
          <label
            htmlFor="file-upload"
            className="cursor-pointer mt-4 px-6 py-3 text-white bg-blue-500 rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
          >
            Browse Files
          </label>
        </div>
      </div>
    </div>
  );
}

export default UploadImage;
