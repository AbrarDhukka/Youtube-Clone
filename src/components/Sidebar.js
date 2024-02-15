import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.head.isMenuOpen);
  if (isMenuOpen === false) return null;
  return (
    <div className="w-[15%] border-2 border-black h-screen shadow-lg m-2 p-2">
      <h2>Home</h2>
      <h2>Shorts</h2>
      <h2>Subscriptions</h2>
      <h2>You </h2>
      <ul>
        <li>Your Channel</li>
        <li>History</li>
        <li>Your videos</li>
        <li>Watch later</li>
        <li>Liked videos</li>
      </ul>
    </div>
  );
};

export default Sidebar;
