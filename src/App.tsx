import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import AuthProvider from "../src/AuthContext";
import { BrowserRouter as Router, Route, Routes, useRoutes, Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Navbar from './CLIENTSIDE/Navbar';
import Admin from './ADMINSIDES/pages/Admin';
import Footer from './components/Footer';
import Homepage from './CLIENTSIDE/Homepage';




function App() {

  const location = useLocation();
  const [path, setPath] = useState(location.pathname)


  return (

    <>
      {!location.pathname.startsWith('/admin') && <Navbar />}
      <Routes>

        <Route path="/" element={<Homepage />} />
        <Route path="/admin/*" element={<Admin />} />
      
      </Routes>
      {!location.pathname.startsWith('/admin') && <Footer />}
    </>



  );
}

export default App;