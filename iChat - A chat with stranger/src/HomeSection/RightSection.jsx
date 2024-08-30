import React from "react";
import CurrentUser from "../Components/CurrentUser";
import Messages from "../Components/Messages";
import SendMessage from "../Components/SendMessage";

const RightSection = () => {
  return (
    <div className="w-[70%] bg-gray-800 text-white">
      <CurrentUser />
      <div
        className="overflow-y-auto"
        style={{ maxHeight: "calc(88vh - 12vh)" }}
      >
        <Messages />
      </div>
      <SendMessage />
    </div>
  );
};

export default RightSection;
