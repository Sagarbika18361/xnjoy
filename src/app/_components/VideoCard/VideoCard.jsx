"use client";
import formatNumber from "@/utils/formatNumber";
import timeAgo from "@/utils/timeAgo";
import { IoMdThumbsUp } from "react-icons/io";
import { MdRemoveRedEye } from "react-icons/md";
import { AiFillLock } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import VideoPlayerModal from "../VideoPlayer";
import { useState } from "react";
import Swal from "sweetalert2";
import PricingModal from "../Plans/components/PricingModal";
import { FiTrash2 } from "react-icons/fi";
import { admins } from "@/constant";

export default function VideoCard({ video, handleDelete, deleting }) {
  const [showVideo, setShowVideo] = useState(false);
  const [showThisVideo, setShowThisVideo] = useState(null);
  const secretKey = sessionStorage.getItem("secretKey");
  const [showPlans, setShowPlans] = useState(false);
  return (
    <>
      <div
        onClick={() => {
          if (secretKey) {
            setShowThisVideo(video);
            setShowVideo(true);
          } else {
            setShowPlans(true);
          }
        }}
        className="bg-gray-800 relative rounded-xl overflow-hidden shadow-lg"
      >
        <div
          className="relative h-[150px] sm:h-[200px] cursor-pointer group"
          key={video._id}
        >
          {video.image ? (
            <>
              <div
                className="absolute inset-0 bg-cover bg-center blur-md opacity-70"
                style={{
                  backgroundImage: `url(${video.image})`,
                }}
              />
              <div
                className={`relative z-10 h-full flex items-center justify-center p-0 ${
                  secretKey ? "" : "blur-md"
                }`}
              >
                <Image
                  height={200}
                  width={300}
                  className="max-h-full max-w-full object-contain"
                  src={video?.image || "/logo.png"}
                  loading="lazy"
                  alt={"Terabox Thumbnail"}
                  onError={(e) => {
                    e.target.src = "/logo.png";
                  }}
                />
              </div>
              {/* Lock Icon */}
              {!secretKey && (
                <div className="absolute z-10 inset-0 flex items-center justify-center ">
                  <div className="flex flex-col justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34"
                      height="34"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      // stroke-width="2"
                      // stroke-linecap="round"
                      // stroke-linejoin="round"
                      className="lucide lucide-lock-keyhole stroke-2"
                    >
                      <circle cx="12" cy="16" r="1" />
                      <rect x="3" y="10" width="18" height="12" rx="2" />
                      <path d="M7 10V7a5 5 0 0 1 10 0v3" />
                    </svg>
                    {/* <button className="border-2 border-gray-100 text-gray-100 mt-4 text-sm rounded-full py-1 px-4">
                      Subscribe to watch Post
                    </button> */}
                  </div>{" "}
                  {/* <AiFillLock className="text-white text-4xl opacity-80" /> */}
                </div>
              )}
            </>
          ) : (
            <div className="w-full h-full bg-gray-700 flex items-center justify-center text-gray-400">
              No Image Available
            </div>
          )}
        </div>
        <div className="p-3 bg-gray-700">
          <div className="flex justify-between items-center text-gray-300 text-xs">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                <MdRemoveRedEye className="text-yellow-500 text-lg" />
                <span>{formatNumber(video?.views || 0)}</span>
              </div>
              <div className="flex items-center space-x-1">
                <IoMdThumbsUp className="text-yellow-500 text-lg" />
                <span>{formatNumber(video?.likes || 0)}</span>
              </div>
            </div>
            {/* <div className="text-gray-400">{timeAgo(video?.createdAt)}</div> */}
          </div>
        </div>
        <div className="absolute z-10 bg-black h-full w-full"></div>
        {admins.includes(secretKey) && (
          <div className="absolute top-2 right-2 z-20">
            {/* Delete Icon */}
            {deleting ? (
              <div
                className="inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"
              >
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                  Loading...
                </span>
              </div>
            ) : (
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent click event propagation to video player
                  handleDelete(video);
                }}
                disabled={deleting}
                className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700"
                title="Delete"
              >
                <FiTrash2 size={16} />
              </button>
            )}
          </div>
        )}
      </div>
      {showVideo && (
        <VideoPlayerModal
          link={showThisVideo?.url}
          onClose={() => setShowVideo(false)}
          from={"video"}
          video={showThisVideo}
        />
      )}
      {showPlans && <PricingModal handleCancel={() => setShowPlans(false)} />}
    </>
  );
}
