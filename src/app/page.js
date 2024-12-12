"use client";
import { FaPlay } from "react-icons/fa6";
import { useEffect, useState } from "react";
import useSWR from "swr";
import VideoPlayer from "./_components/VideoPlayer";
import axios from "axios";
import RelatedVideos from "./_components/RelatedVideos";
import WarningModal from "./_components/Warning/WarningModal";
import { useRouter } from "next/navigation";
import AnimeText from "./_components/AnimeText/AnimeText";
import SplashScreen from "./_components/SplashScreen/SplashScreen";
import Navbar from "./_components/Layout/Navbar";
import RecentlyPlayed from "./_components/RecentlyPlayed/History";
import FollowUs from "./_components/FollowUs/FollowUs";

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
  const [loading, setLoading] = useState(true);
  const [secretKey, setSecretKey] = useState(null);
  let currentUrl = "";
  let url = null;
  if (typeof window !== "undefined") {
    currentUrl = window.location.href;
    url = new URL(currentUrl) || null;
  }
  const { data, error, isLoading } = useSWR(
    token ? [`/api?data=${encodeURIComponent(token)}`] : null,
    ([url]) => fetchWithToken(url),
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  function saveLinkToLocalStorage(obj) {
    // Retrieve the existing links from local storage
    const storedVideos = JSON.parse(localStorage.getItem("history")) || [];
    // Check if the new link already exists
    const filter = storedVideos?.filter((ele) => ele?.url === obj?.url);
    if (filter?.length === 0) {
      // Add the new link to the array
      storedVideos.push(obj);
      // Save the updated array back to local storage
      localStorage.setItem("history", JSON.stringify(storedVideos));
    }
  }

  function Submit(e) {
    e.preventDefault();
    url?.searchParams.set("video", "playing");
    window.history.pushState({}, "", url?.toString());
    setShowVideo(true);
    setLoadingVideo(true);
    setToken(link);
    setLinkLite("");
    // Save the link to local storage
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
      const res = await axios.post(`${api}videos`, payload);
      saveLinkToLocalStorage(res?.data);
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

  // Access sessionStorage only in the browser
  useEffect(() => {
    if (typeof window !== "undefined") {
      setSecretKey(sessionStorage.getItem("secretKey"));
    }
  }, []);

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Show splash screen for 3 seconds
    return () => clearTimeout(timer); // Cleanup timeout
  }, []);

  console.log({ data, isLoading });

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <main>
      <Navbar />
      <div className="mt-28 sm:mt-20">
        <div className="h-[60vh] pt-6 ">
          {/* <AnimeText text={"Paste Terabox Link Here & Watch Without Ads"} /> */}
          <form
            onSubmit={(e) => Submit(e)}
            className="flex w-[95%] mb-4  search-box shadow-xl rounded-lg py-10 px-4 sm:p-10 sm:w-[70%] m-auto items-center flex-col  gap-4 "
          >
            <div className="w-full sm:w-[90%] px-4 py-4 border-[2px] border-[#ffc900]  rounded-lg m-auto">
              <input
                type="text"
                placeholder="Enter Terabox Video URL"
                required
                className="outline-none w-full sm:w-[80%] m-auto text-white bg-transparent"
                onChange={(e) => {
                  setLink(e.target.value);
                  setLinkLite(e.target.value);
                }}
                value={linkLite}
              />
            </div>

            <button
              className="px-4 py-2 border-[1px] text-[#ffc900] border-gray-400 rounded-full sm:rounded-r-full flex gap-2 items-center"
              type="submit"
            >
              <FaPlay size={"18px"} className="text-[#ffc900]" />{" "}
              {loadingVideo ? "Playing" : "Play"}
            </button>
          </form>
          <FollowUs />
        </div>
  
        <section className="grid grid-cols-4">
          <div className="col-span-4 sm:col-span-3">
            {showVideo && (
              <VideoPlayer
                link={link}
                from="home"
                video={data}
                isLoading={isLoading}
                onClose={() => setShowVideo(false)}
              />
            )}
          </div>
        </section>
        <section></section>
        <section>
          {/* {secretKey ? ( */}
          <RelatedVideos title="Top Played Videos" />
          {/* ) : (
            <RecentlyPlayed />
          )} */}
        </section>
      </div>
      {/* <WarningModal /> */}
    </main>
  );
}
