import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Navbar from './CLIENTSIDE/Navbar';
import Admin from './ADMINSIDES/pages/Admin';
import Footer from './components/Footer';
import Homepage from './CLIENTSIDE/Homepage';
import List from './CLIENTSIDE/List';
import AirBnbs from './CLIENTSIDE/AirBnbs';
import About from './CLIENTSIDE/About';
import Contact from './CLIENTSIDE/Contact';
import UserProfile from './CLIENTSIDE/UserProfile';
import Detail from './CLIENTSIDE/Detail';
import BookingPage from './CLIENTSIDE/BookingPage';
import UserAuthProvider from './UserAuthContext';
import UserLogin from './CLIENTSIDE/UserLogin';
import UserSignup from './CLIENTSIDE/UserSignup';



export interface UserData {
  id: number;
  name: string;
  email: string;
  password: string;
  image: string | File | null;
  setUserData: React.Dispatch<React.SetStateAction<UserData[]>>;
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


export interface AirbnbData {
  beds: number;
  airbnb_images: { image: string }[]; // Update the type of airbnb_images
  images: File | null;
  location: string;
  bed: number;
  user_id: number | undefined;
  admin_id: number | undefined;
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  owner_id: number;
  category: string;
  setAibnbData: React.Dispatch<React.SetStateAction<AirbnbData[]>>;
  setSortedAirbnbData: React.Dispatch<React.SetStateAction<AirbnbData[]>>;
  sortedAirbnbData: AirbnbData[];
  handleSort: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}


function App() {
  // ==========================================================//USERs DATA//=========================================================================================================
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

  // ============================================================//BOOKING DATA//=======================================================================================================
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
  // ==============================================================//AIRBNB DATA//=====================================================================================================
  // fetch airbnb data from the server
  const [airbnbData, setAirbnbData] = useState<AirbnbData[]>([]);
  // const [sortedAirbnbData, setSortedAirbnbData] = useState<AirbnbData[]>([]);

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

  const location = useLocation();
  const [path, setPath] = useState(location.pathname)
  return (

    <>
      {location.pathname.startsWith('/admin') ? (
        <Routes>
          <Route path="/admin/*" element={<Admin />} />
        </Routes>
      ) : (
        <UserAuthProvider>
          {!['/userlogin', '/usersignup'].includes(location.pathname) && <Navbar userData={userData} />}
          <Routes>
            <Route path="/" element={<Homepage airbnbData={airbnbData} />} />
            <Route path="/lists" element={<List airbnbData={airbnbData} />} />
            <Route path="/airbnb" element={<AirBnbs />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/userprofile" element={<UserProfile userData={userData} setUserData={setUserData} bookingData={bookingData} airbnbData={airbnbData} />} />
            <Route path="/details/:id" element={<Detail airbnbData={airbnbData} />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/userlogin" element={<UserLogin />} />
            <Route path="/usersignup" element={<UserSignup />} />
          </Routes>
          {!['/userlogin', '/usersignup'].includes(location.pathname) && <Footer />}
        </UserAuthProvider>
      )}
    </>
  );
}

export default App;

