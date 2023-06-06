import {
    AppstoreOutlined,
    ShopOutlined,
    ShoppingCartOutlined,
    BookOutlined,
    TeamOutlined

} from "@ant-design/icons";
// import '../App.css';
import Profile from "../images/images.jpeg";
import { Dropdown, Menu } from "antd";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../AuthContext';
import { useContext } from "react";
import { OwnerData } from "../ADMINSIDES/pages/Admin";

interface SidebarProps {
    ownerData: OwnerData[];
}



function Sidebar(props: SidebarProps) {

    const navigate = useNavigate();
    const { logout } = useContext(AuthContext);

    const { ownerData } = props;

    const admiData = JSON.parse(sessionStorage.getItem("admin") || "{}");
    const loggedAdmin = ownerData.find((admin: OwnerData) => admin.id === admiData.id);
    const loggedAdminId = loggedAdmin?.id;
    const loggedAdminImage = loggedAdmin?.image;
    const loggedAdminEmail = loggedAdmin?.email;



    const handleMenuClick = (e: any) => {
        if (e.key === "logout") {
            localStorage.removeItem("token");
            logout();
            navigate("/admin/login");
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



    return (
        <div className="bg-slate-900">
            <div style={{ height: '100vh', display: 'flex' }}>
                <div style={{}}>
                    <Dropdown overlay={menu} placement="bottomRight">

                        <div className="p-10">
                        <img src={loggedAdminImage ? loggedAdminImage.toString() : Profile} alt="profile" className="rounded-full h-40 w-40" />
                        </div>
                    </Dropdown>

                    <div className="flex flex-col m-2">
                        <Link to="/admin/dashboard" className="flex flex-row mb-8">
                            < AppstoreOutlined
                                className="text-3xl text-white hover:text-gray-400 mr-2" />
                            <h1 className="text-start text-2xl font-bold text-white hover:text-gray-400">
                                Dashboard
                            </h1>
                        </Link>
                        <Link to="/admin/airbnb" className="flex flex-row mb-8">
                            < ShopOutlined
                                className="text-3xl text-white hover:text-gray-400 mr-2" />
                            <h1 className="text-start text-2xl font-bold text-white hover:text-gray-400">
                                Airbnbs
                            </h1>
                        </Link>
                        <Link to="/admin/transactions" className="flex flex-row mb-8">
                            < ShoppingCartOutlined
                                className="text-3xl text-white hover:text-gray-400 mr-2" />
                            <h1 className="text-start text-2xl font-bold text-white hover:text-gray-400">
                                Transactions
                            </h1>
                        </Link>
                        <Link to="/admin/hotelbookings" className="flex flex-row mb-8">
                            < BookOutlined
                                className="text-3xl text-white hover:text-gray-400 mr-2" />
                            <h1 className="text-start text-2xl font-bold text-white hover:text-gray-400">
                                Hotel Bookings
                            </h1>
                        </Link>
                        <Link to="/admin/customers" className="flex flex-row mb-8">
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