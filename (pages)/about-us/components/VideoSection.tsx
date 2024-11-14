import React from "react";

const VideoSection = () => {
  return (
    <section className="lg:mt-24">
      <video
        src="https://videos.pexels.com/video-files/854082/854082-hd_1920_1080_25fps.mp4"
        playsInline
        loop
        controls
      ></video>
    </section>
  );
};

export default VideoSection;
