import { Route, Routes } from "react-router-dom";
import Customers from "../pages/Customers";
import Dashboard from "../pages/Dashboard";
import Inventory from "../pages/Inventory";
import Orders from "../pages/Orders";
import Airbnb from "../pages/Airbnb";
import Transactions from "../pages/Transactions";
import HotelBooking from "../pages/HotelBooking";
import ProfilePage from "../pages/ProfilePage";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import AuthProvider from "../AuthContext";

const AppRoutes = () => {
    return (
        <AuthProvider >
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/inventory" element={<Inventory />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/airbnb" element={<Airbnb />} />
                <Route path="/transactions" element={<Transactions />} />
                <Route path="/hotelbookings" element={<HotelBooking />} />
                <Route path="/adminProfile" element={<ProfilePage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </AuthProvider>
    );
};

export default AppRoutes;
