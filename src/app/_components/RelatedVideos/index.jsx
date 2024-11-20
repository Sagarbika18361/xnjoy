import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Pagination from "../Pagination/Pagination";

const RelatedVideos= ({ handlePlayThis }) => {
  const [videos, setVideos] = useState([]);
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [allPages, setAllPages] = useState(1);
  const api = process.env.NEXT_PUBLIC_API_URL;

  const getAllVideos = async () => {
    try {
      const res = await axios.get(`${api}videos`);
      setVideos(res?.data?.data);
    } catch (error) {
      console.error("Error fetching videos", error);
    }
  };

  useEffect(() => {
    getAllVideos();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleVideoClick = (video) => {
    scrollToTop(); // Scroll to top
    handlePlayThis(video); // Handle playing the video
  };

  return (
    <section className="p-6">
      <h3 className="text-2xl font-bold">More like this</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4  gap-4">
        {videos?.map((video) => (
          <div key={video?.url}>
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
              <div className="flex justify-between text-xs text-gray-500">
                <div>Views</div> <div>1 week ago</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination page={page} allPages={allPages} setPage={setPage} />
    </section>
  );
};

export default RelatedVideos;