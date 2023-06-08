import React, { useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes, useRoutes, Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Navbar from './CLIENTSIDE/Navbar';
import Admin from './ADMINSIDES/pages/Admin';
import Footer from './components/Footer';
import Homepage from './CLIENTSIDE/Homepage';
import List from './CLIENTSIDE/List';
import Airbnb from './ADMINSIDES/pages/Airbnb';
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

export interface AirbnbData {
  user_id: number | undefined;
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


function App() {

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



  




  const location = useLocation();
  const [path, setPath] = useState(location.pathname)
  return (

    <>
     <UserAuthProvider>
      {!location.pathname.startsWith('/admin') && !['/userlogin', '/usersignup'].includes(location.pathname) && <Navbar userData={userData}  />}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/lists" element={<List />} />
        <Route path="/airbnb" element={<AirBnbs />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/userprofile" element={<UserProfile userData={userData} setUserData={setUserData}  bookingData={bookingData}  airbnbData={airbnbData}/>} />
        <Route path="/details" element={<Detail />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/userlogin" element={<UserLogin />} />
        <Route path="/usersignup" element={<UserSignup />} />
       
        <Route path="/admin/*" element={<Admin />} />
      </Routes>
      
      {!location.pathname.startsWith('/admin') && !['/userlogin', '/usersignup'].includes(location.pathname) && <Footer />}
   
    </UserAuthProvider>

    </>


  );
}

export default App;

function useQuery(arg0: string, arg1: () => Promise<any>): { isLoading: any; error: any; data: any; } {
  throw new Error('Function not implemented.');
}
