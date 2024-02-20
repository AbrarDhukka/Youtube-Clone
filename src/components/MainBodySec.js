import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/const";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const MainBodySec = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    // console.log(json)
    setVideos(json.items);
  };
  return (
    <>
      <div className="w-[85%] flex flex-wrap justify-center items-center">
        {videos.map((video) => (
          <Link to={"/watch?v=" + video.id}>
            {" "}
            <VideoCard key={video.id} info={video}></VideoCard>
          </Link>
        ))}
      </div>
    </>
  );
};

export default MainBodySec;
