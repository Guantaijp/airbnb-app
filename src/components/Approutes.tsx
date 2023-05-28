import { Route, Routes } from "react-router-dom";
import Customers from "../pages/Customers";
import Dashboard from "../pages/Dashboard";
import Inventory from "../pages/Inventory";
import Orders from "../pages/Orders";
import Airbnb from "../pages/Airbnb";
import HotelList from "../pages/HotelList";
import AddHotel from "../pages/AddHotel";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/airbnb" element={<Airbnb />} />
            <Route path="/hotellistings" element={<HotelList />} />
            <Route path="/addhotel" element={<AddHotel />} />
        </Routes>
    );
};

export default AppRoutes;
