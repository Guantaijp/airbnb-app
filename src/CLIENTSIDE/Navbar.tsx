import React, { useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { FaHamburger, FaTimes } from "react-icons/fa";
import Profile from "../images/images.jpeg";
import Logo from "../images/logo.png";
import { Dropdown, Menu } from "antd";
import { UserData } from "../App";
import  { UserAuthContext } from "../UserAuthContext";


interface NavbarProps {
  userData: UserData[]
}


function Navbar(props: NavbarProps) {

  const { userData } = props
  const { logout} = useContext(UserAuthContext);
  const isLoggedIn = sessionStorage.getItem("jwtToken") ? true : false;

  const triggerLogout = () => {
    logout();
  }

  const usersData = JSON.parse(sessionStorage.getItem("user") || "{}");
  const loggedUser = userData.find((user: UserData) => user.id === usersData.id);
  const loggedUserId = loggedUser?.id;
  const loggedUserImage = loggedUser?.image;
  const loggedUserName = loggedUser?.name;
  const loggedUserEmail = loggedUser?.email;


  const [isLoading, setIsLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);



  const handleMenuClick = (e: any) => {
    if (e.key === "logout") {
      sessionStorage.removeItem("user");
      localStorage.removeItem("token")
    }
    if (e.key === "profile") {
      // history.push("/adminProfile");
    }
  };

  const menu = (


    
    <Menu onClick={handleMenuClick}>
      {isLoggedIn ? ( 
        <>
          <Menu.Item key="profile">
            <Link to="/userprofile">Profile</Link>
            </Menu.Item>
            <Menu.Item key="logout">
              <Link to="/" onClick={triggerLogout}>Logout</Link>
            </Menu.Item>
        </>
      ) : (
        <>
          <Menu.Item key="login">
            <Link to="/userlogin">Login</Link>
          </Menu.Item>
          <Menu.Item key="register">
            <Link to="/usersignup">Register</Link>
          </Menu.Item>
        </>
      )}

    </Menu>
  );


  return (
    <div id="" className="flex flex-col sticky top-0 z-50">
      <nav className=" navbar flex justify-around py-2 bg-[#95873C] backdrop-blur-md shadow-lg w-full">
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
        <div className={`md:flex md:items-center py-4 mr-4 px-7 md:px-10 lg:flex ${menuOpen ? "block" : "hidden "}`} >
          <div className="nav-links md:flex md:items-center text-white font-bold text-lg md:pb-0 pb-6">
            <div className="nav-item md:ml-4 md:my-0 my-4" style={{ listStyle: 'none' }}>
              <Link to="/" className="nav-link hover:border-2 border-gray-100 hover:p-2 hover:rounded-md mx-2">
                Home
              </Link>

              <Link to="/airbnb" className="nav-link hover:border-2 border-gray-100 hover:p-2 hover:rounded-md mx-2">
                Airbnbs
              </Link>
              <span className="px-1"></span>
              <Link to="/about" className="nav-link hover:border-2 border-gray-100 hover:p-2 hover:rounded-md mx-2">
                About Us
              </Link>

              <Link to="/contact" className="nav-link hover:border-2 border-gray-100 hover:p-2 hover:rounded-md mx-2">
                Contact Us
              </Link>
            </div>

          </div>
        </div>
        <div className="flex items-center justify-center md:ml-4 md:my-0 shadow-lg hover:shadow-md rounded-md hover:border-2 border-gray-100 hover:p-2 hover:rounded-md">
          <div className="flex items-center justify-center">
            <p className="text-white font-bold mx-1">Book Your Home Stay</p>
            <Dropdown overlay={menu} placement="bottomRight">
              <div className="flex items-center justify-center">
                <img
                  src={loggedUserImage ? loggedUserImage.toString() : Profile}
                  alt="Profile"
                  className="rounded-full w-10 h-10 mx-1"
                />
              </div>
            </Dropdown>

          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
