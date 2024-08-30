import React from "react";
import Message from "./Message";

const Messages = () => {
  return (
    <>
      <div className="p-3" style={{ minHeight: "calc(88vh - 12vh)" }}>
        <Message />
        <Message />
   
      </div>
    </>
  );
};

export default Messages;
