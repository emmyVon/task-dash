import React from "react";
import { CgProfile } from "react-icons/cg";
import { GoTasklist } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const SideBar = ({ menu, close }) => {
  return (
    <div className={menu ? "side-bar menu" : "side-bar"}>
      <ul>
        <NavLink to={"Profile"} onClick={close}>
          <CgProfile />
          <span>Profile</span>
        </NavLink>
        <NavLink to={"/"} onClick={close}>
          <GoTasklist />
          <span>Tasks</span>
        </NavLink>
        <NavLink to={"Settings"} onClick={close}>
          <IoSettingsOutline />
          <span>Settings</span>
        </NavLink>
      </ul>
      <button className="btn">Log Out</button>
    </div>
  );
};

export default SideBar;
