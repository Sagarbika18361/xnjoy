import React from "react";


const VideoPlayer = ({ link }) => {
  return (
    <div className="mt-5 text-center py-5 invisible-scrollbar px-5 sm:px-10 ">
      {link && (
        <iframe
          className="w-[100%] h-[60vh] sm:h-[80vh] m-auto"
          src={`https://www.terabox.tech/play.html?url=${link}`}
        ></iframe>
      )}
    </div>
  );
};

export default VideoPlayer;
