import React from "react";

export default function InputWithoutIcon(props) {
  return (
    <div className="">
      <div className="relative text-gray-600 focus-within:text-gray-400">
        <input
          type="search"
          name="q"
          className="w-100 py-2 text-sm text-black rounded-full pl-4 pr-2 focus:outline-none focus:bg-white focus:text-gray-900 border-1 border-black-300"
          placeholder={props.label}
          autoComplete="off"
        />
      </div>
    </div>
  );
}
