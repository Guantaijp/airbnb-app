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
import MultipleImageUploadComponent from './pages/MultipleImageUploadComponent';


export interface OwnerData {
  id: number;
  name: string;
  email: string;
  password: string;
  image: string | File | null;
  loggedAdmin : OwnerData | undefined;
}


export interface AirbnbData {
  admin_id: number | undefined;
  id: number;
  name: string;
  description: string;
  price: number;
  image: string | File | null;
  owner_id: number;
}


function App() {

  // fetch airbnb data from the server
  const [airbnbData, setAirbnbData] = useState<AirbnbData[]>([]);
  useEffect(() => {
    fetch("http://127.0.0.1:4000/airbnbs")
      .then((res) => res.json())
      .then((data) => {
        setAirbnbData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);




// =======================================================================================================================================================================================================
  const [ownerData, setOwnerData] = useState<OwnerData[]>([]);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);

  useEffect(() => {
    // Fetch owner data from the server
    fetch("http://127.0.0.1:4000/admins")
      .then((res) => res.json())
      .then((data) => {
        setOwnerData(data);
        // Find the logged-in admin's data
        const loggedAdmin = data.find(
          (admin: OwnerData) => admin.id === admiData.id
        );
        if (loggedAdmin) {
          setName(loggedAdmin.name);
          setEmail(loggedAdmin.email);
          setPassword(loggedAdmin.password);
          setImage(loggedAdmin.image);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);



  const admiData = JSON.parse(sessionStorage.getItem("admin") || "{}");
  const loggedAdmin = ownerData.find((admin: OwnerData) => admin.id === admiData.id);
  const loggedAdminId = loggedAdmin?.id;
  const loggedAdminImage = loggedAdmin?.image;


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
              <Sidebar ownerData={ownerData} />
            </div>
            <div className="scrollable-content ">
              <NavHeader
                ownerData={ownerData}
                name={name}
                email={email}
                password={password}
                image={image}
                loggedAdmin = {loggedAdmin}
                
              />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/inventory" element={<Inventory />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/airbnb" element={<Airbnb ownerData={ownerData} airbnbData={airbnbData}/>} />
                <Route path="/transactions" element={<Transactions />} />
                <Route path="/hotelbookings" element={<HotelBooking />} />
                <Route path="/adminProfile" element={<ProfilePage />} />
                <Route path="*" element={<h1>Not Found</h1>} />
              </Routes>
            </div>
          </div>
        )}
      </AuthProvider>
    </>
  );
}

export default App;