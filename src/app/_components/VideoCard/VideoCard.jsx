import formatNumber from "@/utils/formatNumber";
import timeAgo from "@/utils/timeAgo";
import { IoMdThumbsUp } from "react-icons/io";
import React from "react";
import { MdRemoveRedEye } from "react-icons/md";
export default function VideoCard({ video }) {
  return (
    <div key={video?._id}>
      <div
        onClick={() => handleVideoClick(video)}
        className="relative h-[200px] border rounded cursor-pointer p-1"
        key={video._id}
      >
        {/* Background image div with blur */}
        <div
          className="absolute p-2 rounded-xl inset-0 bg-cover bg-center before:absolute before:inset-0 before:bg-black/20 before:content-[''] before:z-[1]"
          style={{
            backgroundImage: `url(${video.image})`, // Ensure the image URL is applied
            filter: "blur(8px)", // Apply blur to the background
            WebkitFilter: "blur(8px)", // For Safari support
          }}
        ></div>
        {/* Foreground image */}
        <img
          className="h-full w-full object-contain rounded-lg relative z-10" // Image is above the blurred background
          src={video.image}
          alt={video.name}
        />
      </div>
      <div className="my-1">
        <p className="text-sm line-clamp-1">{video?.name} </p>
        <div className="flex justify-between text-xs text-gray-200 mt-2 my-1">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <MdRemoveRedEye className="text-xl text-[#ffc900]" />{" "}
              {formatNumber(video?.views)}
            </div>
            <div className="flex items-center gap-1">
              {formatNumber(video?.likes)}{" "}
              <IoMdThumbsUp className="text-lg mb-1 text-[#ffc900]" />
            </div>
          </div>
          <div className="flex justify-end text-xs">
            {timeAgo(video?.createdAt)}
          </div>
        </div>
      </div>
    </div>
  );
}
