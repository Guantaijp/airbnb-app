import { BellFilled, MailOutlined } from "@ant-design/icons";
import { Badge, Drawer, List, Space, Dropdown, Menu } from "antd";
import { useState,useEffect } from "react";
import Profile from "../images/download.jpeg";
import { Link } from "react-router-dom";
import {  OwnerData } from "../App";

interface NavHeaderProps {
  ownerData: OwnerData[];
  name: string;
  email: string;
  password: string;
  image: string | File | null;
  loggedAdmin : OwnerData | undefined;
}



function NavHeader(props: NavHeaderProps) {

  const { ownerData, name, email, password, image, loggedAdmin} = props;
  const admiData = JSON.parse(sessionStorage.getItem("admin") || "{}");
  const loggedAdminId = loggedAdmin?.id;
  const [loggedAdminImage, setLoggedAdminImage] = useState(loggedAdmin?.image);
  const [loggedAdminEmail, setLoggedAdminEmail] = useState(loggedAdmin?.email);

  useEffect(() => {
    setLoggedAdminImage(loggedAdmin?.image);
    setLoggedAdminEmail(loggedAdmin?.email);
  }, [loggedAdmin]);




  const [commentsOpen, setCommentsOpen] = useState<boolean>(false);
  const [notificationsOpen, setNotificationsOpen] = useState<boolean>(false);


  // once i click profile i want to be directed to the profile page
  const handleMenuClick = (e: any) => {
    if (e.key === "logout") {
      localStorage.removeItem("token");
    }
    if (e.key === "profile") {
    }
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="profile">
        <Link to="/adminProfile">Profile</Link>
      </Menu.Item>
      <Menu.Item key="logout">
        <Link to="/login">Logout</Link>
      </Menu.Item>
    </Menu>
  );





  return (
    <div className="flex flex-row bg-white fixed   justify-evenly w-full p-2 ">
      <p className="text-xl mt-2 font-bold">Guan Bnb Admin Corner</p>
      <div className="ml-12 ">
        <Space>
          <Badge className="ml-2"
          >
            <MailOutlined
              style={{ fontSize: 24 }}
              onClick={() => {
                setCommentsOpen(true);
              }}
            />
          </Badge>
          <Badge className="ml-2"

          >
            <BellFilled
              style={{ fontSize: 24 }}
              onClick={() => {
                setNotificationsOpen(true);
              }}
            />
          </Badge>
          <Dropdown overlay={menu} placement="bottomRight">

            {image ? (
              <img className="ml-2 rounded-full h-8 w-8" src={image as string} alt="Profile" />
            ) : (
              <img className="ml-2" width={40} src={Profile} alt="Profile" />
            )}

          </Dropdown>
          < p className="ml-2 mt-2  text-xl" >{loggedAdminEmail}</p>
        </Space>
      </div>


      <Drawer
        title="Comments"
        open={commentsOpen}
        onClose={() => {
          setCommentsOpen(false);
        }}
        maskClosable
      >
        <List
        //Data will be fetched from the API
        ></List>
      </Drawer>
      <Drawer
        title="Notifications"
        open={notificationsOpen}
        onClose={() => {
          setNotificationsOpen(false);
        }}
        maskClosable
      >
        <List
        //Data will be fetched from the API
        ></List>
      </Drawer>
    </div>
  );
}
export default NavHeader;
