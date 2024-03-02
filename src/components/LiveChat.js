import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  useEffect({}, []);

  return (
    <div className="border-2 border-black ml-2 p-2 w-[450px] h-[500px] rounded-lg bg-slate-100">
      <ChatMessage
        name="Abrar Dhukka"
        message="Hey, I am writing in live chat"
      ></ChatMessage>
    </div>
  );
};

export default LiveChat;
