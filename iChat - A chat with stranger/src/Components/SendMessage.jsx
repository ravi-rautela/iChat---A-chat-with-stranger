import React from "react";
import { FiSend } from "react-icons/fi";

const SendMessage = () => {
  return (
    <>
      <div className="flex items-center gap-3 p-4 h-[12vh] bg-slate-600">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full "
        />
        <button title="send">
          <FiSend className="text-xl hover:text-2xl hover:duration-300 " />
        </button>
      </div>
    </>
  );
};

export default SendMessage;
