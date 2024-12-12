import React, { useRef, useState } from "react";
import styles from "./VideoPlayer.module.css";

const VideoPlayer = ({ src,poster }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    const video = videoRef.current;
    if (video.paused || video.ended) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleProgress = () => {
    const video = videoRef.current;
    setProgress((video.currentTime / video.duration) * 100);
  };

  const handleScrub = (e) => {
    const video = videoRef.current;
    const scrubTime =
      (e.nativeEvent.offsetX / e.target.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
  };

  const handleSliderChange = (name, value) => {
    videoRef.current[name] = value;
  };

  return (
    <div>
      <video
        className={styles.video}
        preload="auto"
        playsinline
        muted
        autoplay
        // poster={poster}
        controls
        src={src}
      ></video>
      {/* <video
        className={styles.video}
        preload="auto"
        onClick={togglePlay}
        playsinline
        onTimeUpdate={handleProgress}
        muted
        ref={videoRef}
        autoplay
        controls
        src={src}
      ></video> */}
      {/* <div className={styles.controls}>
        <div
          className={styles.progress}
          onClick={handleScrub}
          style={{ "--progress": `${progress}%` }}
        >
          <div className={styles.progressFilled}></div>
        </div>
        <button className={styles.controlsButton} onClick={togglePlay}>
          {isPlaying ? "❚ ❚" : "►"}
        </button>
        <input
          type="range"
          name="volume"
          className={styles.slider}
          min="0"
          max="1"
          step="0.05"
          defaultValue="1"
          onChange={(e) => handleSliderChange("volume", e.target.value)}
        />
        <input
          type="range"
          name="playbackRate"
          className={styles.slider}
          min="0.5"
          max="2"
          step="0.1"
          defaultValue="1"
          onChange={(e) => handleSliderChange("playbackRate", e.target.value)}
        />
      </div> */}
    </div>
  );
};

export default VideoPlayer;
