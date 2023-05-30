import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import AuthProvider from "../src/AuthContext";
import { Route, Routes, useRoutes } from 'react-router-dom';
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


export interface AdminsProps {
  id: string;
  find(arg0: (admin: AdminsProps) => boolean): AdminsProps | undefined;
  email: string;
  name: string;
  password: string;
  setAdmin: (admin: AdminsProps[]) => void;
}




function App() {

  const [admin, setAdmin] = React.useState<AdminsProps[]>([]);
    
  const adminData = JSON.parse(sessionStorage.getItem('admin') || '{}');
  
  // Fetch the admins and set the initial form state
  React.useEffect(() => {
    fetch("http://127.0.0.1:4000/admins")
      .then((res) => res.json())
      .then((data) => {
        setAdmin(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  

  // =======================================================================================================================================================================================================  
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
  // =======================================================================================================================================================================================================


  return (
    <>
      <AuthProvider>
        {isLoginOrSignup ? (
          routes
        ) : (
          <div className="app">
            <div className="fixed-sidebar">
              <Sidebar adminProps={admin} />
            </div>
            <div className="scrollable-content ">
              <NavHeader adminProps={admin} setAdmin={setAdmin} />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/inventory" element={<Inventory />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/airbnb" element={<Airbnb />} />
                <Route path="/transactions" element={<Transactions />} />
                <Route path="/hotelbookings" element={<HotelBooking />} />
                <Route path="/adminProfile" element={<ProfilePage adminProps={admin}  setAdmin={setAdmin}
                
                 />} />
              </Routes>
            </div>
          </div>
        )}
      </AuthProvider>
    </>
  );
}

export default App;