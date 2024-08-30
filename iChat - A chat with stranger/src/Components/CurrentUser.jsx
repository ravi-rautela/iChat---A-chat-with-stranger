import React from "react";

const CurrentUser = () => {
  return (
    <>
      <div className="flex items-center gap-3 bg-slate-900 p-4 pl-5  h-[12vh] duration-300 ">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <div className="leading-5 ">
          <p className="text-[16px] font-semibold ">Ravi Rautela</p>
          <span className="text-[13px] text-gray-400 itelic">online</span>
        </div>
      </div>
    </>
  );
};

export default CurrentUser;
