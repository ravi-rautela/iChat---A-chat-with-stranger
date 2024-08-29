import React from "react";
import Search from "../Components/Search";
import Users from "../Components/Users";

const LeftSection = () => {
  return (
    <div className="w-[30%] p-2 bg-black text-white overflow-y-scroll ">
      <h1 className="my-1 mt-0 font-bold text-3xl font-serif text-center">
        {" "}
        iChats{" "}
      </h1>

      <Search />
      <hr className="border border-gray-500" />

      <Users />
    </div>
  );
};

export default LeftSection;
