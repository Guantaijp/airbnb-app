import { BellFilled, MailOutlined } from "@ant-design/icons";
import { Badge, Drawer, List, Space, Dropdown, Menu } from "antd";
import { useState, useEffect } from "react";
import Profile from "../images/download.jpeg";
import { Link } from "react-router-dom";
import { OwnerData } from "../ADMINSIDES/pages/Admin";

interface NavHeaderProps {
  ownerData: OwnerData[];
}



function NavHeader(props: NavHeaderProps) {

  const { ownerData } = props;


  const admiData = JSON.parse(sessionStorage.getItem("admin") || "{}");
  const loggedAdmin = ownerData.find((admin: OwnerData) => admin.id === admiData.id);
  const loggedAdminId = loggedAdmin?.id;
  // console.log(loggedAdminId);
  const loggedAdminImage = loggedAdmin?.image;
  const loggedAdminEmail = loggedAdmin?.email;


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
        <Link to="/admin/profile">Profile</Link>
      </Menu.Item>
      <Menu.Item key="logout">
        <Link to="/admin/login">Logout</Link>
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
            <img src={loggedAdminImage ? loggedAdminImage.toString() : Profile} alt="profile" className="rounded-full h-8 w-8" />
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
