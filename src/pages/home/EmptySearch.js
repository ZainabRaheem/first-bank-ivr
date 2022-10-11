import React from "react";

export default function EmptySearch() {
  return (
    <div className="centered-content">
      <div className="record-double-icon">
        <img src="/images/recordDoubleIcon.png" alt="icon" />
      </div>
      <span className="centered-content-text my-3">
        Search for a record to
        <br /> display details
      </span>
    </div>
  );
}
