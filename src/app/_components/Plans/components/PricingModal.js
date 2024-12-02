import React from "react";
import { Pricing } from "../Plans";

export default function PricingModal({handleCancel}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-5xl mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={handleCancel}
          className="absolute top-6 text-2xl right-7 text-gray-500 hover:text-gray-800 transition-colors"
        >
          ✕
        </button>

        {/* Header */}
        <div className="bg-green-50 p-6 flex items-center">
        
          <h3 className="text-xl font-bold text-green-900" id="modal-title">
           Choose Your Plan
          </h3>
        </div>
        <Pricing />
      </div>
    </div>
  );
}
