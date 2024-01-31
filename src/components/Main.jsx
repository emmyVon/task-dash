import React, { useState } from "react";
import AddTask from "./AddTask";
import TaskDisplay from "./TaskDisplay";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const Main = () => {
  const [menu, setMenu] = useState(false);
  const menuActive = () => setMenu((prev) => !prev);
  const CloseMenu = () => setMenu(false);
  return (
    <div className="view">
      <SideBar menu={menu} close={CloseMenu} />
      <main>
        <Navbar menuActive={menuActive} />
        <Outlet />
      </main>
    </div>
  );
};

export default Main;
