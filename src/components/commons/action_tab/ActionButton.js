import React from "react";

export default function ActionButton(props) {
  console.log(props);
  return (
    <button type="button" id={props.id} data-dropdown-toggle={props.modalId} className="flex space-x-2 items-center py-1 px-8 border rounded-full" style={props.style}>
      {props.iconImagePath ? <img src={props.iconImagePath} alt="icon" /> : '' }
      <span>{props.label}</span>
    </button>
  );
}
