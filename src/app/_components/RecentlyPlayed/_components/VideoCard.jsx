"use client";
import { FiTrash2 } from "react-icons/fi";
import Image from "next/image";
import { useEffect, useState } from "react";
import VideoPlayerModal from "@/app/_components/VideoPlayer";

export default function VideoCard({ video, onDelete }) {
  const [showVideo, setShowVideo] = useState(false);
  const [showThisVideo, setShowThisVideo] = useState(null);
  let currentUrl = "";
  let url = null;
  if (typeof window !== "undefined") {
    currentUrl = window.location.href;
    url = new URL(currentUrl) || null;
  }
  // Handle back button to close the video player
  useEffect(() => {
    const handlePopState = () => {
      setShowVideo(false); // Close the video player when the back button is pressed
    };
    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);
  const handlePlayVideo = () => {
    url?.searchParams.set("video", "playing");
    window.history.pushState({}, "", url?.toString());
    setShowThisVideo(video);
    setShowVideo(true);
  };
  return (
    <>
      <div className="bg-gray-800 relative rounded-xl overflow-hidden shadow-lg">
        <div
          className="relative h-[150px] sm:h-[200px] cursor-pointer group"
          onClick={() => {
            handlePlayVideo();
          }}
        >
          {video.image ? (
            <>
              <div
                className="absolute z-9 inset-0 bg-cover bg-center blur-md opacity-70"
                style={{
                  backgroundImage: `url(${video.image})`,
                }}
              />
              <div
                className={`relative z-10 h-full flex items-center justify-center p-0`}
              >
                <Image
                  height={200}
                  width={300}
                  className="max-h-full max-w-full object-contain"
                  src={"/logo.png"}
                  onLoad={(e)=>e.target.src=video?.image}
                  loading="lazy"
                  alt={"Terabox Thumbnail"}
                  onError={(e) => {
                    e.target.src = "/logo.png";
                  }}
                />
              </div>
            </>
          ) : (
            <div className="w-full h-full bg-gray-700 flex items-center justify-center text-gray-400">
              No Image Available
            </div>
          )}
        </div>
        <div className="absolute top-2 right-2 z-20">
          {/* Delete Icon */}
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent click event propagation to video player
              onDelete(video);
            }}
            className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700"
            title="Delete"
          >
            <FiTrash2 size={20} />
          </button>
        </div>
      </div>
      {showVideo && (
        <VideoPlayerModal
          link={showThisVideo?.url}
          onClose={() => setShowVideo(false)}
          from={"video"}
          video={showThisVideo}
        />
      )}
    </>
  );
}
