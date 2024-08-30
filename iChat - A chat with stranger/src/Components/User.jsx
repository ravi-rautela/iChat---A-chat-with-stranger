import React from "react";

const User = () => {
  return (
    <div className="flex items-center gap-3 hover:bg-slate-500 cursor-pointer p-4 hover:transition-all hover:duration-300 rounded-md ">
      <div className="avatar">
        <div className="w-12 rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <div className="leading-5 ">
        <p className="text-[16px] font-semibold ">Ravi Rautela</p>
        <span className="text-[13px] text-gray-400 itelic">
          ranvi44rautela@gmail.com
        </span>
      </div>
    </div>
  );
};

export default User;
