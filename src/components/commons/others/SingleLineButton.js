import React from "react";

export default function SingleLineButton(props) {
  const defaultStyle = {
    backgroundColor : "whitesmoke"
  }
  return (
    <div className="">
      <div className="relative text-gray-600 focus-within:text-gray-400">
        <button
        onClick={() => props.onClick()}
        disabled={props.disabled ?? false}
        style={props.disabled ? defaultStyle : props.style}
          type={props.type}
          className="w-100 py-2 text-sm text-center rounded-full focus:outline-none focus:bg-white focus:text-gray-900 border-1 border-black-300"
        >{props.label}</button>
      </div>
    </div>
  );
}
