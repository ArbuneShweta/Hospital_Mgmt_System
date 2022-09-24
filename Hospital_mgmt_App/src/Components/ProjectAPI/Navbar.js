import React, { useState } from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav border-bottom ">
        {/* 1st logo part  */}

        <div className="logo">
          <h2>
          <NavLink to="/" >
            <span>M</span>indbody
            <span>H</span>ospital
            </NavLink>
          </h2>
        </div>

        {/* <div className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link" }>
          <ul>
            <li >
              <NavLink to="/" >Home</NavLink>
            </li>
          </ul>
        </div> */}

      </nav>
    </>
  );
};

export default Navbar;
