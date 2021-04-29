import React from "react";
let year = new Date().getFullYear()

function Footer() {
  return (
    <div className="bottom-container">
      <p> All rights reserved © {year}</p>
    </div>
  );
}

export default Footer