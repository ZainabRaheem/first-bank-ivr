import React from "react";

export default function InputWithIcon(props) {
  return (
    <div className="">
      <div className="relative text-gray-600 focus-within:text-gray-400">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <button
            type="submit"
            className="p-1 focus:outline-none focus:shadow-outline"
          >
            <div className="px-3">{props.children}</div>
          </button>
        </span>
        <input
          type={props.type ?? "search"}
          name="q"
          className="w-100 py-2 text-sm text-black rounded-full pl-16 pr-2 focus:outline-none focus:bg-white focus:text-gray-900 border-1 border-black-300"
          placeholder={props.label}
          autoComplete="off"
          onChange={(e) => props.onChange(e.target.value)}
        />
      </div>
    </div>
  );
}
