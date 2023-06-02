import { BellFilled, MailOutlined } from "@ant-design/icons";
import { Badge, Drawer, List, Space, Dropdown, Menu } from "antd";
import { useState } from "react";
import Profile from "../images/download.jpeg";
import { Link } from "react-router-dom";
import { AdminsProps } from "../App";

interface NavHeaderProps {
  adminProps: AdminsProps[];
  setAdmin: (admin: AdminsProps[]) => void;
}


const NavHeader: React.FC<NavHeaderProps> = ({ adminProps, setAdmin }) => {

  const adminData = JSON.parse(sessionStorage.getItem('admin') || '{}');
  const loggedAdmin = adminProps.find((admin: AdminsProps) => admin.id === adminData.id);
  const loggedAdminEmail = loggedAdmin?.email;
  const loggedAdminImageUrl = loggedAdmin?.image;

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

            { loggedAdminImageUrl ? <img className="ml-2 rounded-full h-8 w-8"  src={loggedAdminImageUrl} alt="Profile" /> : <img className="ml-2" width={40} src={Profile} alt="Profile" />
            }
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
