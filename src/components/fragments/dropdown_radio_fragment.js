import React from "react";
import DropDownRadioItemFragment from "./dropdown_radio_item_fragment";

export default function DropDownRadioFragment() {
  return (
    <div
      id="dropdownRadio"
      className="hidden z-10 w-48 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
      data-popper-reference-hidden=""
      data-popper-escaped=""
      data-popper-placement="top"
      style={{ position: "absolute", inset: "auto auto 0px 0px", margin: "0px", transform: "translate3d(522.5px, 3847.5px, 0px)" }}
    >
      <ul
        className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownRadioButton"
      >
        <DropDownRadioItemFragment label="Download all records" />
        <DropDownRadioItemFragment label="Download a week of records" />
        <DropDownRadioItemFragment label="Download a month of records" />
        <DropDownRadioItemFragment label="Custom date range" />
      </ul>
    </div>
  );
}
