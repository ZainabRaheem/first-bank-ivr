import React from "react";
import SideBar from "../commons/action_tab/SideBar";

export default function LayoutContent(props) {
  return (
    <div className="d-flex">
      <SideBar className="w-1/5"></SideBar>
      <div className="w-4/5">{props.children}</div>
    </div>
  );
}
