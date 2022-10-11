import React from "react";

export default function SuccessInfoFragment(props) {
  return (
    <div className="flex mt-3 justify-around items-center w-50 py-3 h-25 border" style={props.style}>
      <div className="flex items-center">
        <svg
          width="20"
          height="18"
          viewBox="0 0 34 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 13.8348L11.6431 25.5001L34 3.16532L30.7903 0L11.6431 19.125L3.16525 10.6472L0 13.8348Z"
            fill="#3FC59D"
          />
        </svg>
        <div className="ml-2 text-sm">{props.message}</div>
      </div>
      <div className="font-semibold text-sm" style={{ color: '#002855', cursor: 'pointer' }} onClick={() => alert("dismiss")}>Dismiss</div>
    </div>
  );
}
