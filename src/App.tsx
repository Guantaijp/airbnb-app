import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import AuthProvider from "../src/AuthContext";
import { Route, Routes, useRoutes } from 'react-router-dom';
import Login from './ADMINSIDES/pages/Login';
import Signup from './ADMINSIDES/pages/Signup';
import Airbnb from './ADMINSIDES/pages/Airbnb';
import Customers from "./ADMINSIDES/pages/Customers";
import Dashboard from "./ADMINSIDES/pages/Dashboard";
import Inventory from "./ADMINSIDES/pages/Inventory";
import Orders from "./ADMINSIDES/pages/Orders";
import Transactions from "./ADMINSIDES/pages/Transactions";
import HotelBooking from "./ADMINSIDES/pages/HotelBooking";
import ProfilePage from "./ADMINSIDES/pages/ProfilePage";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import NavHeader from './components/NavHeader';
import MultipleImageUploadComponent from './ADMINSIDES/pages/MultipleImageUploadComponent';


export interface OwnerData {
  id: number;
  name: string;
  email: string;
  password: string;
  image: string | File | null;
  loggedAdmin : OwnerData | undefined;
  setOwnerData : React.Dispatch<React.SetStateAction<OwnerData[]>>;
}


export interface AirbnbData {
  admin_id: number | undefined;
  id: number;
  name: string;
  description: string;
  price: number;
  image: string | File | null;
  owner_id: number;
  setAibnbData: React.Dispatch<React.SetStateAction<AirbnbData[]>>;
}

export interface BookingData {
  id: number;
  to_date: string;
  from_date: string;
  paid_amount: number;
  airbnb_id: number;
  user_id: number;
  setBookingData: React.Dispatch<React.SetStateAction<BookingData[]>>;
}

export interface UserData {
  id: number;
  name: string;
  email: string;
  password: string;
  image: string | File | null;
  setUserData: React.Dispatch<React.SetStateAction<UserData[]>>;
}



function App() {
  //fetch users
  const [userData, setUserData] = useState<UserData[]>([]);
  useEffect(() => {
    fetch("http://127.0.0.1:4000/users")
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  // fetch booking data from the server
  const [bookingData, setBookingData] = useState<BookingData[]>([]);
  useEffect(() => {
    fetch("http://127.0.0.1:4000/bookings")
      .then((res) => res.json())
      .then((data) => {
        setBookingData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
              <NavHeader ownerData={ownerData} />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/inventory" element={<Inventory />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/customers" element={<Customers  userData={userData} />} />
                <Route path="/airbnb" element={<Airbnb ownerData={ownerData} airbnbData={airbnbData} setAirbnbData={setAirbnbData}/>} />
                <Route path="/transactions" element={<Transactions />} />
                <Route path="/hotelbookings" element={<HotelBooking bookingData={bookingData} ownerData={ownerData} airbnbData={airbnbData}  userData={userData}/>} />
                <Route path="/adminProfile" element={<ProfilePage ownerData={ownerData}  setOwnerData={setOwnerData} />} />
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