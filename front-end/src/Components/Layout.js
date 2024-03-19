import React, { useState } from "react";
import Home from "../Pages/Home"
import "../styles/home.css"
import { FaLessThan, FaGreaterThan } from "react-icons/fa6";
import Menus from "./Menus"
import "../styles/Layout.css";


const Layout = () => {
  const [toggle, setToggle] = useState(true)

  //change toggle
  const handleToggle = () => {
    setToggle(!toggle);
  };


  return (
    <>
      <div className="sidebar-section">
        <div className={toggle ? "sidebar-toggle sidebar" : "sidebar"}>
          <div className="sidebar-toggle-icons">
            <p onClick={handleToggle}>
              {toggle ? (<FaLessThan size={30} />) : (<FaGreaterThan size={30} />)}
            </p>
          </div>
          <Menus toggle={toggle} />
        </div>
        <div className="container">
          <Home />
        </div>
      </div>
    </>
  );
};

export default Layout;
