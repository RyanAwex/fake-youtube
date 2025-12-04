import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export const API = import.meta.env.VITE_API_URL;

function VideoCard() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      const response = await axios.get(`${API}/api/videos`);
      setVideos(Array.isArray(response.data) ? response.data : []);
    };
    getVideos();
  }, []);

  return (
    videos &&
    videos.map((video) => {
      return (
        <a
          href={video.link}
          key={video.title}
          target="_blank"
          className="video-card"
        >
          <img
            src={video.thumbnail}
            alt="Video Thumbnail"
            className="thumbnail"
          />
          <div className="video-details">
            <img src={video.channelPic} alt="Channel" className="channel-pic" />
            <div className="video-info">
              <h3 className="video-title">{video.title}</h3>
              <div className="channel-name">{video.channelName}</div>
              <div className="video-stats">
                {video.views} views • {video.uploaded}
              </div>
            </div>
          </div>
        </a>
      );
    })
  );
}

export default VideoCard;
