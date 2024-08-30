import React from "react";
import { BiLogOut } from "react-icons/bi";

const Logout = () => {
  return (
    <div>
      <button
        className="hover:bg-gray-600 hover:text-white hover:rounded-lg hover:duration-300 p-2 hover:ease-in-out"
        title="Logout"
      >
        <BiLogOut className="font-bold text-2xl" />
      </button>
    </div>
  );
};

export default Logout;
