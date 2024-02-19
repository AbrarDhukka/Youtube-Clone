import React, { useEffect } from "react";
import { closeMenu } from "../utils/headSlice";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"))

  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return <div>WatchPage</div>;
};

export default WatchPage;
