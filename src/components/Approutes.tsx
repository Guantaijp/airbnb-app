import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate, } from "react-router-dom";
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
import Sidebar from './Sidebar';

const AppRoutes = () => {

    const isLoggedIn = sessionStorage.getItem('jwtToken') ? true : false;
    const navigate = useNavigate();
    // eslint-disable-next-line no-unused-vars
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const pathname = window.location.pathname;

        // check if the user is authenticated, except for the signup page
        if (isLoggedIn && pathname !== '/signup') {
            setLoading(false);
        } else if (!isLoggedIn && pathname !== '/login' && pathname !== '/signup') {
            navigate('/login');
            setLoading(false);
        } else {
            setLoading(false);
        }
    }, [isLoggedIn, navigate]);

    return (
        <>
    <div className="app">
    <div className="fixed-sidebar">
        <Sidebar />
    </div>
    <div className="scrollable-content">
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/airbnb" element={<Airbnb />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/hotelbookings" element={<HotelBooking />} />
            <Route path="/adminProfile" element={<ProfilePage />} />
        </Routes>
    </div>
</div>

        </>
    );
};

export default AppRoutes;

