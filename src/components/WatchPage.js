import React, { useEffect } from "react";
import { closeMenu } from "../utils/headSlice";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="px-5 z-10">
    <div className="flex ">
      <iframe
        className="rounded-2xl sm:w-[700px] h-[500px] lg:w-[1000px] w-full"
        //width="1000"
        //height="500"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <div>
        <LiveChat></LiveChat>
      </div>
    </div>
    <CommentsContainer></CommentsContainer>
    </div>
  );
};

export default WatchPage;


