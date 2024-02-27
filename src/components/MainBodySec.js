// import React, { useEffect, useState } from "react";
// import { YOUTUBE_API } from "../utils/const";
// import VideoCard from "./VideoCard";
// import { Link } from "react-router-dom";

// const MainBodySec = () => {
//   const [videos, setVideos] = useState([]);

//   const categoryData = [
//     "All",
//     "Algorithm",
//     "News",
//     "Website",
//     "Javascript",
//     "Gaming",
//     "Politics",
//     "Music",
//     "Sports",
//     "Live",
//     "Tech",
//     "Programming",
//     "Kids",
//     "Education",
//     "Python",
//   ];

//   useEffect(() => {
//     getVideos();
//   }, []);

//   const getVideos = async () => {
//     const data = await fetch(YOUTUBE_API);
//     const json = await data.json();
//     // console.log(json)
//     setVideos(json.items);
//   };
//   return (
//     <div className="flex-col">
//       <div className="flex mx-5 my-3">
//         {categoryData.map((cat, index) => (
//           <button
//             key={index}
//             className="mx-2 bg-gray-200 text-black rounded-lg px-2 py-1"
//           >
//             {cat}
//           </button>
//         ))}
//       </div>
//       <div className=" flex flex-wrap justify-center items-center">
//         {videos.map((video) => (
//           <Link to={"/watch?v=" + video.id}>
//             {" "}
//             <VideoCard key={video.id} info={video}></VideoCard>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MainBodySec;



import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/const";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const MainBodySec = () => {
  const [videos, setVideos] = useState([]);

  const categoryData = [
    "All",
    "Algorithm",
    "News",
    "Website",
    "Javascript",
    "Gaming",
    "Politics",
    "Music",
    "Sports",
    "Live",
    "Tech",
    "Programming",
    "Kids",
    "Education",
    "Python",
    "Election",
    "Funny",
    "Artificial Intelligence"
  ];

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
    <div className="flex-col w-full">
      <div className="flex flex-wrap mx-2 my-3">
        {categoryData.map((cat, index) => (
          <button
            key={index}
            className="m-1 bg-gray-200 text-black rounded-lg px-2 py-1"
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap justify-center items-center mx-2">
        {videos.map((video) => (
          <Link key={video.id} to={"/watch?v=" + video.id} className="px-2 ">
            <VideoCard info={video}></VideoCard>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainBodySec;
