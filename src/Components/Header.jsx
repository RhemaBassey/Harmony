import React from "react";
import {Link} from "react-router-dom";

function Header() {
  return (
    <div className="header-top">
      <h2>
        <Link to="/"  className="anchor">
          <i class="fab fa-rocketchat"></i> Harmony{" "}
        </Link>
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
