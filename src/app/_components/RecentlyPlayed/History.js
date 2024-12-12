"use client";
import React, { useEffect, useState } from "react";
import VideoCard from "./_components/VideoCard";

export default function RecentlyPlayed() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const storedVideos = JSON.parse(localStorage.getItem("history")) || [];
    setVideos(storedVideos);
  }, []);

  const handleDelete = (video) => {
    // Remove video from local storage
    const updatedVideos = videos.filter((v) => v.url !== video.url);
    localStorage.setItem("history", JSON.stringify(updatedVideos));
    // Update state
    setVideos(updatedVideos);
  };

  return (
    <>
      {videos.length > 0 && (
        <section className="p-6">
          <h3 className="text-2xl items-center gap-2 font-semibold my-4 flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
       
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            
              className="lucide lucide-history mt-1"
            >
              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
              <path d="M3 3v5h5" />
              <path d="M12 7v5l4 2" />
            </svg>{" "}
            History
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[...videos]?.reverse()?.map((video,index) => (
              <VideoCard video={video} key={index} onDelete={handleDelete} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
