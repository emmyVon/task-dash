import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";

const Navbar = ({ menuActive }) => {
  return (
    <nav
      style={{
        backgroundColor: "blue",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <h2>Logo</h2>
        <h3>
          Welcome <span>Joshua</span>
        </h3>
      </div>
      <div className="menu">
        <IoMenu onClick={menuActive} />
      </div>
    </nav>
  );
};

export default Navbar;
