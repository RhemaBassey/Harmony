import React from "react";

function Header() {
  return (
    <div className="header-top">

        <h2>
          <i class="fab fa-rocketchat"></i> Harmony{" "}
        </h2>
        <div className="header-container">
        <a href="./why-harmony.html" className="header-tabs">
          Why Harmony?
        </a>
        <a href="#" className="header-tabs">
          Safety
        </a>
        <a href="#" className="header-tabs">
          Support
        </a>
      </div>
    </div>
  );
}

export default Header;
