import React from "react";

const Search = () => {
  return (
    <div className="pb-4">
      <form action="">
        <label className="input input-bordered flex items-center gap-2 ">
          <input type="text" className="grow " placeholder="Search" />
          <button className="hover:bg-gray-700 hover:text-white hover:rounded-full p-1 hover:duration-300 hover:ease-in-out">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-5 w-5 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </label>
      </form>
    </div>
  );
};

export default Search;
