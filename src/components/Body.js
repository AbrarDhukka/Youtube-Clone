import React from "react";
import Sidebar from "./Sidebar";
//import MainBodySec from "./MainBodySec";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <Outlet></Outlet>
    </div>
  );
};

export default Body;
