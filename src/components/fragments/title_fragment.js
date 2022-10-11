import React from "react";

export default function TitleFragment(props) {
  return <div>
            <p className='text-xl font-semibold mb-4'>{props.title}</p>
  </div>;
}
