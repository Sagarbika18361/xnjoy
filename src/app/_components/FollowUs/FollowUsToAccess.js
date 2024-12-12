import Image from "next/image";
import React from "react";

export default function FollowUs({ handleCancel }) {
  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="relative w-full max-w-5xl mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-green-50 p-6 flex items-center">
            <h3 className="text-xl font-bold text-green-900" id="modal-title">
              Follow Us To Get Free Login Key
            </h3>
          </div>
          <section>
            <p className="text-gray-700 text-center my-2">
              Please follow us on here to get<br/> <b>Free Secret Key</b>
            </p>
            <div className="w-full px-10 flex justify-center gap-4 my-6">
              <a href="https://www.instagram.com/playterabox" target="_blank">
                <Image
                  src={"/instagram.png"}
                  height={80}
                  width={80}
                  className="cursor-pointer"
                  alt="instagram"
                />
              </a>
              <a href="https://t.me/+0j2ycLQv89NhY2Y1" target="_blank">
                <Image
                  src={"/telegram.svg"}
                  height={80}
                  width={80}
                  className="cursor-pointer"
                  alt="telegram"
                />
              </a>
            </div>
          </section>
          <div className="w-full bg-green-50 p-6 flex justify-end">
            <button
              className="bg-red-500 rounded-lg hover:bg-red-600 px-4 py-2"
              onClick={handleCancel}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
