"use client";

import React, { useEffect, useState } from "react";
import { ThumbsUp, ThumbsDown, Share2, ArrowBigUp } from "lucide-react";
import axios from "axios";
import { APIBASE } from "@/constant";
import Loader from "../Loader/Loader";

const VideoPlayerModal = ({ link, from, onClose, video }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);
  const [upvoteCount, setUpvoteCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isUpvoted, setIsUpvoted] = useState(false);
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const getVideoInfo = async () => {
    if (from === "video") {
      try {
        const res = await axios.get(
          `${APIBASE}videos/${encodeURIComponent(link)}`
        );
        setData(res?.data);
      } catch (error) {
        console.error(error);
      }
    }
  };


  const handleView = async () => {
    if (from === "video") {
      try {
        await axios.post(`${APIBASE}videos/${encodeURIComponent(link)}/view`);
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    getVideoInfo();
    // if (from !== "home") {
    handleView();
    // }
  }, []);

  const handleLikeThis = async (todo) => {
    if (from === "video") {
      try {
        if (todo === "like") {
          await axios.post(`${APIBASE}videos/${encodeURIComponent(link)}/like`);
        } else if (todo === "vote") {
          await axios.post(`${APIBASE}videos/${encodeURIComponent(link)}/vote`);
        } else if (todo === "dislike") {
          await axios.post(
            `${APIBASE}videos/${encodeURIComponent(link)}/dislike`
          );
        }
        getVideoInfo();
      } catch (error) {}
    }
  };

  const handleLike = () => {
    // if (isDisliked) {
    //   setDislikeCount(dislikeCount - 1);
    //   setIsDisliked(false);
    // }
    // if (isLiked) {
    //   setLikeCount(likeCount - 1);
    //   setIsLiked(false);
    // } else {
    handleLikeThis("like");
    // setLikeCount(likeCount + 1);
    // setIsLiked(true);
    // }
  };

  const handleDislike = () => {
    handleLikeThis("dislike");
  };

  const handleUpvote = () => {
    if (isUpvoted) {
      setUpvoteCount(upvoteCount - 1);
      setIsUpvoted(false);
    } else {
      handleLikeThis("vote");
      setUpvoteCount(upvoteCount + 1);
      setIsUpvoted(true);
    }
  };

  const handleShare = (platform) => {
    const shareText = `Check out this awesome video! ${link}`;

    switch (platform) {
      case "link":
        navigator.clipboard.writeText(link);
        alert("Video link copied to clipboard!");
        break;
      case "facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            link
          )}`,
          "_blank"
        );
        break;
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(
            shareText
          )}`,
          "_blank"
        );
        break;
      case "instagram":
        alert(
          "Instagram sharing is not directly supported. Link copied to clipboard."
        );
        navigator.clipboard.writeText(link);
        break;
    }
    setShowShareOptions(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5800);
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
      role="dialog"
      aria-modal="true"
    >
      {/* Video Player */}
      <div className="relative  w-full h-full sm:w-[90%] sm:max-w-4xl sm:h-[80%] bg-gray-900 rounded-lg shadow-lg flex flex-col justify-between">
        {loading && (
          <div className="absolute z-10 h-full w-full flex flex-col justify-center items-center">
            <Loader />
            <span className="text-lg mt-4 font-semibold text-[hsl(193,90%,50%)]">
              Your video is here
            </span>
          </div>
        )}
       
        <div className=" rounded-t-lg   bg-gray-900 p-4">
          <div className="flex justify-between">
            <h2 className="text-lg font-semibold">Video Player</h2>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white text-lg bg-red-600 px-4 py- rounded-lg hover:text-gray-300"
              aria-label="Close"
              type="button"
            >
              Close
            </button>
          </div>
          <div className="flex justify-start mt-2">
            <span className="text-yellow-500">Note</span>: Please wait while
            video is playing
          </div>
        </div>
     
        <iframe
          className="w-[98%] m-auto h-[calc(100%-5rem)] sm:h-full rounded-t-lg"
          src={`https://www.terabox.tech/play.html?url=${link}`}
          title="Video Player"
          allowFullScreen
        ></iframe>

        <div className="absolute hidden sm:block right-0 top-14 h-full sm:h-[80%] lg:h-[85%] w-8 bg-gray-900"></div>
       
        {/* Interaction Buttons */}
        <div className="flex justify-center space-x-4 bg-gray-900 p-4 rounded-b-lg">
          <button
            onClick={handleLike}
            className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-700 text-white hover:bg-gray-600"
          >
            <ThumbsUp size={20} />
            <span>{data?.likes || 0}</span>
          </button>
          <button
            onClick={handleDislike}
            className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-700 text-white hover:bg-gray-600"
          >
            <ThumbsDown size={20} />
          </button>
          <button
            onClick={handleUpvote}
            className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-700 text-white hover:bg-gray-600"
          >
            <ArrowBigUp size={20} />
          </button>
          {/* <button className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-700 text-white hover:bg-gray-600">
            <Share2 size={20} />
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default VideoPlayerModal;
