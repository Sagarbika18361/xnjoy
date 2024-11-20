"use client";

import React, { useState } from "react";
import { 
  ThumbsUp, 
  ThumbsDown, 
  Share2, 
  Heart,
  Link as LinkIcon,
  Facebook,
  Twitter,
  Instagram, 
  ArrowBigUp
} from "lucide-react";

const VideoPlayer = ({ link }) => {
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);
  const [upvoteCount, setUpvoteCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [isUpvoted, setIsUpvoted] = useState(false);
  const [showShareOptions, setShowShareOptions] = useState(false);

  const handleLike = () => {
    if (isDisliked) {
      setDislikeCount(dislikeCount - 1);
      setIsDisliked(false);
    }
    
    if (isLiked) {
      setLikeCount(likeCount - 1);
      setIsLiked(false);
    } else {
      setLikeCount(likeCount + 1);
      setIsLiked(true);
    }
  };

  const handleDislike = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
      setIsLiked(false);
    }
    
    if (isDisliked) {
      setDislikeCount(dislikeCount - 1);
      setIsDisliked(false);
    } else {
      setDislikeCount(dislikeCount + 1);
      setIsDisliked(true);
    }
  };

  const handleUpvote = () => {
    if (isUpvoted) {
      setUpvoteCount(upvoteCount - 1);
      setIsUpvoted(false);
    } else {
      setUpvoteCount(upvoteCount + 1);
      setIsUpvoted(true);
    }
  };

  const handleShare = (platform) => {
    const shareText = `Check out this awesome video! ${link}`;
    
    switch(platform) {
      case 'link':
        navigator.clipboard.writeText(link);
        alert("Video link copied to clipboard!");
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`, '_blank');
        break;
      case 'instagram':
        alert("Instagram sharing is not directly supported. Link copied to clipboard.");
        navigator.clipboard.writeText(link);
        break;
    }
    setShowShareOptions(false);
  };

  return (
    <div className="mt-5 text-center py-5 invisible-scrollbar px-5 sm:px-10">
      {link && (
        <>
          <iframe
            className="w-[100%] h-[60vh] sm:h-[80vh] m-auto rounded-lg shadow-md"
            src={`https://www.terabox.tech/play.html?url=${link}`}
          ></iframe>
          
          <div className="flex justify-center space-x-4 mt-4">
            <button 
              onClick={handleLike} 
              className={`flex items-center space-x-2 px-5 py-2 rounded-full transition ${
                isLiked 
                  ? "bg-blue-500 text-white" 
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              <ThumbsUp size={20} />
              <span>{likeCount}</span>
            </button>
            
            <button 
              onClick={handleDislike} 
              className={`flex items-center space-x-2 px-5 py-2 rounded-full transition ${
                isDisliked 
                  ? "bg-red-500 text-white" 
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              <ThumbsDown size={20} />
              <span>{dislikeCount}</span>
            </button>
            
            <button 
              onClick={handleUpvote} 
              className={`flex items-center space-x-2 px-5 py-2 rounded-full transition ${
                isUpvoted 
                  ? "bg-green-500 text-white" 
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
               <ArrowBigUp size={20} />
              <span>{upvoteCount}</span>
            </button>
            
            <button 
              onClick={() => setShowShareOptions(!showShareOptions)} 
              className={`flex items-center space-x-2 px-5 py-2 rounded-full transition ${
                showShareOptions 
                  ? "bg-purple-500 text-white" 
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              <Share2 size={20} />
              <span>Share</span>
            </button>
          </div>

          {showShareOptions && (
            <div className="flex justify-center space-x-4 mt-2">
              <button 
                onClick={() => handleShare('link')} 
                className="bg-gray-200 p-2 rounded-full hover:bg-gray-300"
              >
                <LinkIcon size={20} />
              </button>
              <button 
                onClick={() => handleShare('facebook')} 
                className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700"
              >
                <Facebook size={20} />
              </button>
              <button 
                onClick={() => handleShare('twitter')} 
                className="bg-blue-400 text-white p-2 rounded-full hover:bg-blue-500"
              >
                <Twitter size={20} />
              </button>
              <button 
                onClick={() => handleShare('instagram')} 
                className="bg-pink-500 text-white p-2 rounded-full hover:bg-pink-600"
              >
                <Instagram size={20} />
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default VideoPlayer;