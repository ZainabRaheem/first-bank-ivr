import React from "react";

export default function SearchInput() {
  return (
    <div className="">
      <div className="relative text-gray-600 focus-within:text-gray-400">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <button
            type="submit"
            className="p-1 focus:outline-none focus:shadow-outline"
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-4 h-4"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
        </span>
        <input
          type="search"
          name="q"
          className="py-1 text-sm text-black rounded-full pl-10 pr-2 focus:outline-none focus:bg-white focus:text-gray-900 border-1 border-black-300"
          placeholder="Search for an account"
          autoComplete="off"
        />
      </div>
    </div>
  );
}
