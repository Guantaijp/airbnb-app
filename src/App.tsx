import React, { useState, useEffect } from 'react';
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





function App() {

  const location = useLocation();
  const [path, setPath] = useState(location.pathname)


  return (

    <>
     <UserAuthProvider>
      {!location.pathname.startsWith('/admin') && !['/userlogin', '/usersignup'].includes(location.pathname) && <Navbar />}
      <Routes>
       
        <Route path="/" element={<Homepage />} />
        <Route path="/lists" element={<List />} />
        <Route path="/airbnb" element={<AirBnbs />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/userprofile" element={<UserProfile />} />
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