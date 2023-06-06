import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import AuthProvider from "../src/AuthContext";
import { BrowserRouter as Router, Route, Routes, useRoutes, Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Navbar from './CLIENTSIDE/Navbar';
import Admin from './ADMINSIDES/pages/Admin';
import Footer from './components/Footer';


// export interface OwnerData {
//   id: number;
//   name: string;
//   email: string;
//   password: string;
//   image: string | File | null;
//   loggedAdmin: OwnerData | undefined;
//   setOwnerData: React.Dispatch<React.SetStateAction<OwnerData[]>>;
// }


// export interface AirbnbData {
//   admin_id: number | undefined;
//   id: number;
//   name: string;
//   description: string;
//   price: number;
//   image: string | File | null;
//   owner_id: number;
//   setAibnbData: React.Dispatch<React.SetStateAction<AirbnbData[]>>;
// }

// export interface BookingData {
//   id: number;
//   to_date: string;
//   from_date: string;
//   paid_amount: number;
//   airbnb_id: number;
//   user_id: number;
//   setBookingData: React.Dispatch<React.SetStateAction<BookingData[]>>;
// }

// export interface UserData {
//   id: number;
//   name: string;
//   email: string;
//   password: string;
//   image: string | File | null;
//   setUserData: React.Dispatch<React.SetStateAction<UserData[]>>;
// }



function App() {
  //fetch users
  // const [userData, setUserData] = useState<UserData[]>([]);
  // useEffect(() => {
  //   fetch("http://127.0.0.1:4000/users")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setUserData(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);


  // // fetch booking data from the server
  // const [bookingData, setBookingData] = useState<BookingData[]>([]);
  // useEffect(() => {
  //   fetch("http://127.0.0.1:4000/bookings")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setBookingData(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  // // fetch airbnb data from the server
  // const [airbnbData, setAirbnbData] = useState<AirbnbData[]>([]);
  // useEffect(() => {
  //   fetch("http://127.0.0.1:4000/airbnbs")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setAirbnbData(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);




  // // =======================================================================================================================================================================================================
  // const [ownerData, setOwnerData] = useState<OwnerData[]>([]);
  // const [name, setName] = useState<string>("");
  // const [email, setEmail] = useState<string>("");
  // const [password, setPassword] = useState<string>("");
  // const [image, setImage] = useState<File | null>(null);

  // useEffect(() => {
  //   // Fetch owner data from the server
  //   fetch("http://127.0.0.1:4000/admins")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setOwnerData(data);
  //       // Find the logged-in admin's data
  //       const loggedAdmin = data.find(
  //         (admin: OwnerData) => admin.id === admiData.id
  //       );
  //       if (loggedAdmin) {
  //         setName(loggedAdmin.name);
  //         setEmail(loggedAdmin.email);
  //         setPassword(loggedAdmin.password);
  //         setImage(loggedAdmin.image);
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);



  // const admiData = JSON.parse(sessionStorage.getItem("admin") || "{}");
  // const loggedAdmin = ownerData.find((admin: OwnerData) => admin.id === admiData.id);
  // const loggedAdminId = loggedAdmin?.id;
  // const loggedAdminImage = loggedAdmin?.image;
  const location = useLocation();
  const [path, setPath] = useState(location.pathname)


  return (

    <>
      {!location.pathname.startsWith('/admin') && <Navbar />}
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/admin/*" element={<Admin />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      {!location.pathname.startsWith('/admin') && <Footer />}
    </>



  );
}

export default App;