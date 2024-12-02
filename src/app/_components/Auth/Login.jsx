import { admins } from "@/constant";
import React, { useState } from "react";
import Swal from "sweetalert2";

export default function LoginModal({ handleClose }) {
  const [secretKey, setSecretKey] = useState(""); // State to store input value

  const handleLogin = () => {
    // Save the secret key to sessionStorage
    if (admins.includes(secretKey)) {
      sessionStorage.setItem("secretKey", secretKey);
      Swal.fire({
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
        title: "Login Successfully.",
      });
      window.location.reload();
    } else {
      sessionStorage.removeItem("secretKey", secretKey);
      Swal.fire({
        icon: "error",
        timer: 2000,
        showConfirmButton: false,
        title: "Login Failed.",
      });
    }
    // You can add any additional logic here (e.g., close modal, navigate)
    handleClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-md mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 text-xl right-4 text-gray-500 hover:text-gray-800 transition-colors"
        >
          ✕
        </button>

        {/* Header */}
        <div className="bg-red-50 px-6 py-4 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="black"
            className="lucide lucide-key-round cursor-pointer font-bold stroke-2"
          >
            <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z" />
            <circle cx="16.5" cy="7.5" r=".5" fill="currentColor" />
          </svg>
          <h3 className="text-xl font-bold text-red-900 ml-2" id="modal-title">
            Enter Secret Key
          </h3>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          <div>
            <div className="relative flex items-center mt-2">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  className="lucide lucide-key-round cursor-pointer font-bold stroke-2 ml-2"
                >
                  <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z" />
                  <circle cx="16.5" cy="7.5" r=".5" fill="currentColor" />
                </svg>
              </span>

              <input
                type="password"
                placeholder="Secret Key"
                value={secretKey}
                onChange={(e) => setSecretKey(e.target.value)} // Update state on input change
                className="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-11 pr-5 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-100 p-6 flex flex-col gap-4">
          <button
            onClick={handleLogin} // Trigger login logic
            className="flex-1 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
          >
            Login
          </button>
          <button
            onClick={handleClose}
            className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg hover:bg-gray-300 transition-colors font-semibold"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
