import React, { useEffect } from "react";
import { SignIn } from "@clerk/clerk-react"; // Import Clerk's SignIn component
import { useUser } from "@clerk/clerk-react";

const LoginModal = ({ onClose }) => {
  const { isLoaded, user } = useUser();

  // If the user is authenticated, close the modal
  useEffect(() => {
    if (isLoaded && user) {
      onClose();
    }
  }, [isLoaded, user, onClose]);

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white p-10 rounded-lg shadow-xl w-[500px] h-[550px] max-w-full max-h-full overflow-auto relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
        >
          ×
        </button>

        {/* Sign In Form */}
        <SignIn signUpUrl="/sign-up"/>
      </div>
    </div>
  );
};

export default LoginModal;
