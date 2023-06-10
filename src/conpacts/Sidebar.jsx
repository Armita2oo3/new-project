import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiFillHome, AiFillContacts } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { NavLink } from "react-router-dom";

export default function Sidebar({ children }) {
  const [isOpen, setisOpen] = useState(false);
  function toggle() {
    setisOpen(!isOpen);
  }
  const MenuItem = [
    {
      path: "/homepage",
      name: "HomePage",
      icon: <AiFillHome />,
    },
    {
      path: "/project",
      name: "Projects",
      icon: <CgWebsite />,
    },

    {
      path: "/contact",
      name: "Contact me",
      icon: <AiFillContacts />,
    },
  ];
  return (
    <div className="box">
      <div style={{ width: isOpen ? "300px" : "50px" }} className="sidebar">
        <div className="top">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            <a className="menu" href="/">
              Menu
            </a>
          </h1>
          <div style={{ marginLeft: isOpen ? "80px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {MenuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassname="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link-text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
}
