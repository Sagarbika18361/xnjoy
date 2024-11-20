import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Pagination from "../Pagination/Pagination";
import VideoCard from "../VideoCard/VideoCard";
import CardSkeletons from "@/app/shared/Skeletons/CardSkeletons";

const RelatedVideos = ({ handlePlayThis }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [allPages, setAllPages] = useState(1);
  const api = process.env.NEXT_PUBLIC_API_URL;

  const getAllVideos = async () => {
    try {
      const res = await axios.get(`${api}videos?page=${page}`);
      setLoading(false);
      setVideos(res?.data?.data);
      setAllPages(res?.data?.totalPages);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching videos", error);
    }
  };

  useEffect(() => {
    getAllVideos();
  }, [page]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleVideoClick = (video) => {
    scrollToTop();
    handlePlayThis(video);
  };

  return (
    <section className="p-6">
      <h3 className="text-2xl font-bold">More like this</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4  gap-4">
        {loading && <CardSkeletons/>}
        {!loading && videos?.map((video) => (
         <VideoCard video={video} key={video?._id} />
        ))}
      </div>
      <Pagination page={page} allPages={allPages} setPage={setPage} />
    </section>
  );
};

export default RelatedVideos;