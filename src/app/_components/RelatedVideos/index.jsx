import useSWR from "swr";
import axios from "axios";
import { useState } from "react";
import Pagination from "../Pagination/Pagination";
import VideoCard from "../VideoCard/VideoCard";
import CardSkeletons from "@/app/shared/Skeletons/CardSkeletons";

const fetcher = (url) => axios.get(url).then((res) => res.data);

const RelatedVideos = ({ title }) => {
  const [page, setPage] = useState(1);
  const api = process.env.NEXT_PUBLIC_API_URL;
  const [deleting, setDeleting] = useState('');
  // Use SWR for data fetching
  const { data, error, isLoading, mutate } = useSWR(
    `${api}videos?page=${page}`,
    fetcher,
    {
      revalidateOnFocus: false, // Avoid refetching when window regains focus
    }
  );

  // Extract data
  const videos = data?.data || [];
  const allPages = data?.totalPages || 1;

  const handleDelete = async (video) => {
    setDeleting(video?._id); // Show a loading spinner while deleting
    try {
      await axios.delete(`${api}videos/${video?._id}`);
      // Refetch videos after successful deletion
      mutate(); // Manually revalidate and refetch data
      setDeleting("");
    } catch (error) {
      setDeleting("");
      console.error("Failed to delete video:", error);
    }
  };

  return (
    <section className="p-6">
      <h3 className="text-3xl font-bold my-4">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {isLoading && <CardSkeletons />}
        {!isLoading &&
          videos?.map((video) => (
            <VideoCard
              video={video}
              key={video?._id}
              handleDelete={handleDelete}
              deleting={deleting === video?._id} // Show a loading spinner while deleting this video
            />
          ))}
      </div>
      <Pagination page={page} allPages={allPages} setPage={setPage} />
      {error && <p className="text-red-500 mt-4">Failed to load videos</p>}
    </section>
  );
};

export default RelatedVideos;
