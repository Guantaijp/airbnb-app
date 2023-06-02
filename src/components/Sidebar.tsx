import {
    AppstoreOutlined,
    ShopOutlined,
    ShoppingCartOutlined,
    BookOutlined,
    TeamOutlined

} from "@ant-design/icons";
import '../App.css';
import Profile from "../images/images.jpeg";
import { Dropdown, Menu } from "antd";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../AuthContext';
import { useContext } from "react";
import { AdminsProps } from "../App";

interface SidebarProps {
    adminProps: AdminsProps[];
  }

  const Sidebar: React.FC<SidebarProps> = ({ adminProps }) => {

    const navigate = useNavigate();
    const {logout} = useContext(AuthContext);

    const adminData = JSON.parse(sessionStorage.getItem('admin') || '{}');
    const loggedAdmin = adminProps.find((admin: AdminsProps) => admin.id === adminData.id);
   
    const loggedAdminImageUrl = loggedAdmin?.image;
  


    const handleMenuClick = (e: any) => {
        if (e.key === "logout") {
            localStorage.removeItem("token");
            logout();
            navigate("/login"); 
        }
        if (e.key === "profile") {
            // history.push("/adminProfile");
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
        <div className="bg-slate-900">
            <div style={{ height: '100vh', display: 'flex' }}>
                <div style={{}}>
                    <Dropdown overlay={menu} placement="bottomRight">

                        <div className="p-10">
                            {/* <img className="rounded-full w-40 h-40" src={Profile} alt="Profile" /> */}
                            {loggedAdminImageUrl ? (
                                <img className="rounded-full w-40 h-40" src={loggedAdminImageUrl} alt="Profile" />
                            ) : (
                                <img className="rounded-full w-40 h-40" src={Profile} alt="Profile" />
                            )}
                        </div>
                    </Dropdown>

                    <div className="flex flex-col m-2">
                        <Link to="/" className="flex flex-row mb-8">
                            < AppstoreOutlined
                                className="text-3xl text-white hover:text-gray-400 mr-2" />
                            <h1 className="text-start text-2xl font-bold text-white hover:text-gray-400">
                                Dashboard
                            </h1>
                        </Link>
                        <Link to="/airbnb" className="flex flex-row mb-8">
                            < ShopOutlined
                                className="text-3xl text-white hover:text-gray-400 mr-2" />
                            <h1 className="text-start text-2xl font-bold text-white hover:text-gray-400">
                                Airbnbs
                            </h1>
                        </Link>
                        <Link to="/transactions" className="flex flex-row mb-8">
                            < ShoppingCartOutlined
                                className="text-3xl text-white hover:text-gray-400 mr-2" />
                            <h1 className="text-start text-2xl font-bold text-white hover:text-gray-400">
                                Transactions
                            </h1>
                        </Link>
                        <Link to="/hotelbookings" className="flex flex-row mb-8">
                            < BookOutlined
                                className="text-3xl text-white hover:text-gray-400 mr-2" />
                            <h1 className="text-start text-2xl font-bold text-white hover:text-gray-400">
                                Hotel Bookings
                            </h1>
                        </Link>
                        <Link to="/customers" className="flex flex-row mb-8">
                            < TeamOutlined
                                className="text-3xl text-white hover:text-gray-400 mr-2" />
                            <h1 className="text-start text-2xl font-bold text-white hover:text-gray-400">
                                Customers
                            </h1>
                        </Link>

                    </div>

                </div>
            </div>
        </div>


    );
}

export default Sidebar;