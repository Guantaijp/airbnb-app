import React, { useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { FaHamburger, FaTimes } from "react-icons/fa";
import Profile from "../images/images.jpeg";
import Logo from "../images/logo.png";
import { Dropdown, Menu } from "antd";

function Navbar() {

  const [isLoading, setIsLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);



  const handleMenuClick = (e: any) => {
    if (e.key === "logout") {
      // localStorage.removeItem("token");
      // logout();
      // navigate("/admin/login");
    }
    if (e.key === "profile") {
      // history.push("/adminProfile");
    }
  };

  const menu = (

    <Menu onClick={handleMenuClick}>
      <Menu.Item key="profile">
        <Link to="/admin/profile">Profile</Link>
      </Menu.Item>
      <Menu.Item key="logout">
        <Link to="/admin/login">Logout</Link>
      </Menu.Item>
    </Menu>
  );











  let Links = [
    { name: "HOME", link: "/" },
    { name: "AIRBNBS", link: "/airbnbs" },
    { name: "ABOUT US", link: "/about" },
    { name: "CONTACT US", link: "/contactus" },
  ];

  return (
    <div id="" className="flex flex-col sticky top-0 z-50">
      <nav className=" navbar flex justify-around py-4 bg-[#95873C] backdrop-blur-md shadow-md w-full">

        <div className="flex items-center justify-center w-16">
          <Link to="/" className="cursor-pointer">
            <img
              src={Logo}
              className=" mr-10"
              alt="Store Logo"
            />
          </Link>
        </div>
        <div
          onClick={() => setMenuOpen(!menuOpen)} // toggle menu state on click
          className="text-xl absolute right-8 top-7 cursor-pointer md:hidden"
        >
          {menuOpen ? <FaTimes /> : <FaHamburger />}{" "}
          {/* display icon based on menu state */}
        </div>
        <div
          className={`md:flex md:items-center py-4 px-7 md:px-10 lg:flex ${menuOpen ? "block" : "hidden"
            }`}
        >
          {" "}
          <div className="nav-links md:flex md:items-center text-white font-bold text-lg md:pb-0 pb-6">
            {Links.map((link) => (
              <li key={link.name} className="nav-item md:ml-4 md:my-0 my-4" style={{ listStyle: 'none' }}>
                <a href={link.link} className="nav-link  hover:border-2 border-gray-100 hover:p-2 hover:rounded-md">
                  {link.name}
                </a>
              </li>
            ))}
          </div>
        </div>
        {/* 
        <div className="flex items-center justify-center md:ml-4 md:my-0 my-4 shadow-lg hover:shadow-md rounded-md">
          <Dropdown overlay={menu} placement="bottomRight">
            <p className="text-white font-bold p-2">Book Your Home Stay</p>
            <Link to="/profile" className="flex items-center justify-center">
              <img src={Profile} alt="Profile" className="rounded-full w-10 h-10 p-1" />
            </Link>
          </Dropdown>
        </div> */}
        <div className="flex items-center justify-center md:ml-4 md:my-0 my-4 shadow-lg hover:shadow-md rounded-md">

          <div className="flex items-center justify-center">
            <p className="text-white font-bold p-2">Book Your Home Stay</p>
            <Dropdown overlay={menu} placement="bottomRight">
              <Link to="/profile" className="flex items-center justify-center">
                <img src={Profile} alt="Profile" className="rounded-full w-10 h-10 p-1" />
              </Link>
            </Dropdown>

          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
