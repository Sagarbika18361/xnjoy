"use client";
import { FaPlay } from "react-icons/fa6";
import { useEffect, useState } from "react";
import useSWR from "swr";
import VideoPlayer from "./_components/VideoPlayer";
import axios from "axios";
import RelatedVideos from "./_components/RelatedVideos";
import WarningModal from "./_components/Warning/WarningModal";

const fetchWithToken = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    const errorRes = await res.json();
    const error = new Error();
    error.message = errorRes?.error;
    throw error;
  }
  return await res.json();
};

function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
}

function checkUrlPatterns(url) {
  const patterns = [
    /ww\.mirrobox\.com/,
    /www\.nephobox\.com/,
    /freeterabox\.com/,
    /www\.freeterabox\.com/,
    /1024tera\.com/,
    /4funbox\.co/,
    /www\.4funbox\.com/,
    /mirrobox\.com/,
    /nephobox\.com/,
    /terabox\.app/,
    /terabox\.com/,
    /www\.terabox\.ap/,
    /terabox\.fun/,
    /www\.terabox\.com/,
    /www\.1024tera\.co/,
    /www\.momerybox\.com/,
    /teraboxapp\.com/,
    /terasharelink\.com/,
    /tibibox\.com/,
    /www\.tibibox\.com/,
    /www\.teraboxapp\.com/,
  ];

  if (!isValidUrl(url)) {
    return false;
  }

  for (const pattern of patterns) {
    if (pattern.test(url)) {
      return true;
    }
  }

  return false;
}

export default function Home() {
  const [link, setLink] = useState("");
  const [token, setToken] = useState("");
  const [showVideo, setShowVideo] = useState(false);
  const [loadingVideo, setLoadingVideo] = useState(false);
  const [linkLite, setLinkLite] = useState("");

  const { data, error, isLoading } = useSWR(
    token ? [`/api?data=${encodeURIComponent(token)}`] : null,
    ([url]) => fetchWithToken(url),
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  function Submit(e) {
    e.preventDefault();
    setShowVideo(true);
    setLoadingVideo(true);
    setToken(link);
    setLinkLite("");
  }

  useEffect(() => {
    if (loadingVideo) {
      setTimeout(() => {
        setLoadingVideo(false);
      }, 3000);
    }
  }, [loadingVideo]);

  const api = process.env.NEXT_PUBLIC_API_URL;
  const handleSaveVideo = async (payload) => {
    try {
      await axios.post(`${api}videos`, payload);
    } catch (error) {
      // Handle error if necessary
    }
  };

  useEffect(() => {
    if (data?.file_name) {
      handleSaveVideo({
        name: data.file_name,
        image: data.thumb,
        url: token,
      });
    }
  }, [data, token]);

  const handlePlayThis = (video) => {
    setShowVideo(true);
    setLink(video?.url || "");
  };

  return (
    <main>
      <div className="mt-28 sm:mt-20">
        <div className="">
          <form
            onSubmit={(e) => Submit(e)}
            className="flex w-[90%] sm:w-[50%] m-auto items-center flex-col sm:flex-row gap-4 sm:gap-0"
          >
            <div className="w-[100%] px-4 py-2 border-[1px] border-gray-400 rounded-full sm:rounded-l-full">
              <input
                type="text"
                placeholder="Enter Video URL"
                className="outline-none w-full bg-transparent"
                onChange={(e) => {
                  setLink(e.target.value);
                  setLinkLite(e.target.value);
                }}
                value={linkLite}
              />
            </div>

            {linkLite && (
              <button
                className="px-4 py-2 border-[1px] text-[#ffc900] border-gray-400 rounded-full sm:rounded-r-full flex gap-2 items-center"
                type="submit"
              >
                <FaPlay size={"18px"} className="text-[#ffc900]" />{" "}
                {loadingVideo ? "Playing" : "Play"}
              </button>
            )}
          </form>
        </div>
        <section className="">
          {showVideo && <VideoPlayer link={link} />}
        </section>
        <section>
          <RelatedVideos handlePlayThis={handlePlayThis} />
        </section>
      </div>
      {/* <WarningModal/> */}
    </main>
  );
}
