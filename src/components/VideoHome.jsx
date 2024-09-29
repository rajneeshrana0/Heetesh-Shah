import React, { useEffect, useState } from "react";
import { FaTruck, FaGlobe } from "react-icons/fa"; // Importing react icons
import axios from "axios";

const VideoHome = () => {
  const [videoUrl, setVideoUrl] = useState("");

  // Fetch video from the API
  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await axios.get(
          "https://heetesh-shah.onrender.com/api/video"
        );
        console.log(response.data); // Log the response to check its structure
        if (response.data && response.data.length > 0) {
          setVideoUrl(response.data[0].videoUrl); // Assuming the first video is used
        }
      } catch (error) {
        console.error("Error fetching video:", error);
      }
    };
    fetchVideo();
  }, []);

  return (
    <div className="relative">
      {/* Video Section */}
      <div className="w-screen h-screen overflow-hidden bg-black">
        {videoUrl ? (
          <video
            className="object-cover w-full h-full opacity-70 transition-all duration-1000 ease-in-out"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            src={videoUrl} // Use the fetched video URL
          />
        ) : (
          <div className="text-white text-center">Loading Video...</div> // Loading state
        )}
      </div>
    </div>
  );
};

export default VideoHome;
