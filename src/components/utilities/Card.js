import React from "react";

export default function Card(props) {
  return (
    <div
      className={`${
        props.position ? "relative -mt-24" : "shadow-lg "
      } rounded-md w-3/5 m-auto bg-gray-900 px-6 py-3 my-4`}
    >
      {props.children}
    </div>
  );
}
