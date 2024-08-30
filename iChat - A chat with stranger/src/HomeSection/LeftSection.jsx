import React from "react";
import Search from "../Components/Search";
import Users from "../Components/Users";
import Logout from "../Components/Logout";

const LeftSection = () => {
  return (
    <div className="w-[30%] p-2 bg-black text-white overflow-y-auto">
      <div className="flex justify-between items-center">
        <h1 className="mb-3 mt-0 font-bold text-3xl font-serif text-center">
          {" "}
          iChats{" "}
        </h1>
        <Logout />
      </div>

      <Search />
      <hr className="border border-gray-500" />

      <Users />
    </div>
  );
};

export default LeftSection;
