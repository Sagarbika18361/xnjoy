import React, { useState } from 'react';

export default function WarningModal() {
  const [isOpen, setIsOpen] = useState(true);

  const handleCancel = () => {
    // Redirect to Google when Cancel is clicked
    window.location.href = 'https://www.google.com';
  };

  const handleAccept = () => {
    setIsOpen(false);
    // Optional: Add logic to proceed to the target site/content
  };

  if (!isOpen) return null;

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
          onClick={handleCancel}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors"
        >
          ✕
        </button>

        {/* Header */}
        <div className="bg-red-50 p-6 flex items-center">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            className="text-red-600 mr-4 w-8 h-8"
          >
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
            <line x1="12" y1="9" x2="12" y2="13"></line>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
          <h3 
            className="text-xl font-bold text-red-900"
            id="modal-title"
          >
            Adult Content Warning
          </h3>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          <p className="text-sm text-gray-700 leading-relaxed">
            This website contains explicit material intended only for adults 
            aged 18 and above or the legal age in your jurisdiction.
          </p>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3">
            <p className="text-xs text-yellow-800">
              Parents: Use parental controls to restrict access to age-inappropriate content.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-100 p-6 flex space-x-4">
          <button
            onClick={handleAccept}
            className="flex-1 bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
          >
            I Understand & Accept
          </button>
          <button
            onClick={handleCancel}
            className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg hover:bg-gray-300 transition-colors font-semibold"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}