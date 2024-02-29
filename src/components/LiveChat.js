import React from "react";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  return (
    <div className="border-2 border-black ml-2 p-2 w-[450px] h-[500px] rounded-lg bg-slate-100">
      <ChatMessage></ChatMessage>
      <ChatMessage></ChatMessage>
      <ChatMessage></ChatMessage>
      <ChatMessage></ChatMessage>
      <ChatMessage></ChatMessage>
      <ChatMessage></ChatMessage>
    </div>
  );
};

export default LiveChat;
