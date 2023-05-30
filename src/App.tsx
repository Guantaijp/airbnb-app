import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
// import './App.css';
import AuthProvider from "../src/AuthContext";
import { Route, Routes,  useRoutes } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Airbnb from './pages/Airbnb';
import Customers from "./pages/Customers";
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import Orders from "./pages/Orders";
import Transactions from "./pages/Transactions";
import HotelBooking from "./pages/HotelBooking";
import ProfilePage from "./pages/ProfilePage";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import NavHeader from './components/NavHeader';




function App() {
  const location = useLocation();


  const routes = useRoutes([
    { path: '/login', element: <Login /> },
    { path: '/signup', element: <Signup /> },
  ]);

  const isLoginOrSignup = location.pathname === '/login' || location.pathname === '/signup';



  const isLoggedIn = sessionStorage.getItem('jwtToken') ? true : false;
  const navigate = useNavigate();
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
      <AuthProvider>
        {isLoginOrSignup ? (
          routes
        ) : (
          <div className="app">
            <div className="fixed-sidebar">
              <Sidebar />
            </div>
            <div className="scrollable-content ">
            <NavHeader />
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
        )}
      </AuthProvider>
    </>
  );
}

export default App;