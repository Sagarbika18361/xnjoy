import formatNumber from "@/utils/formatNumber";
import timeAgo from "@/utils/timeAgo";
import { IoMdThumbsUp } from "react-icons/io";
import { MdRemoveRedEye } from "react-icons/md";

const VideoCard = ({ video, onClick }) => {
  const handleVideoClick = () => {
    onClick?.(video);
  };

  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <div 
        onClick={handleVideoClick}
        className="relative h-[250px] cursor-pointer group"
      >
        {video.image ? (
          <>
            <div 
              className="absolute inset-0 bg-cover bg-center blur-md opacity-70"
              style={{
                backgroundImage: `url(${video.image})`,
              }}
            />
            <div className="relative z-10 h-full flex items-center justify-center p-0">
              <img 
                className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-100"
                src={video.image} 
                alt={video.name || 'Video Thumbnail'}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.previousElementSibling.style.display = 'none';
                }}
              />
            </div>
          </>
        ) : (
          <div className="w-full h-full bg-gray-700 flex items-center justify-center text-gray-400">
            No Image Available
          </div>
        )}
      </div>
      <div className="p-3 bg-gray-700">
        <h3 className="text-white font-semibold text-sm mb-2 line-clamp-1">
          {video?.name || 'Untitled Video'}
        </h3>
        <div className="flex justify-between items-center text-gray-300 text-xs">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1">
              <MdRemoveRedEye className="text-yellow-500 text-lg" />
              <span>{formatNumber(video?.views || 0)}</span>
            </div>
            <div className="flex items-center space-x-1">
              <IoMdThumbsUp className="text-yellow-500 text-lg" />
              <span>{formatNumber(video?.likes || 0)}</span>
            </div>
          </div>
          <div className="text-gray-400">{timeAgo(video?.createdAt)}</div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;