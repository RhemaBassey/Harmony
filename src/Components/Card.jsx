import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <div className={props.style}>
        {props.title} {props.text}
      </div>
    </div>
  );
}
