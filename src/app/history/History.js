"use client";
import React, { useEffect, useState } from "react";
import VideoCard from "./_components/VideoCard";


export default function History() {
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
    <section className="p-6">
      <h3 className="text-3xl font-bold my-4">History</h3>
      {videos.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {[...videos]?.reverse()?.map((video, index) => (
            <VideoCard video={video} key={index} onDelete={handleDelete} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No history available.</p>
      )}
    </section>
  );
}
