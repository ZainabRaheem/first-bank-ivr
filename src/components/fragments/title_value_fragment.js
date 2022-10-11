import React from "react";

export default function TitleValueFragment(props) {
  return (
    <div className="mb-4">
      <p className="text-xs font-semibold mb-1">{props.title}</p>
      <span className="text-xs">{props.value}</span>
    </div>
  );
}
