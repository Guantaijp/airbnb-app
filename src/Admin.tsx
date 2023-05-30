import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import PageContent from './components/PageContent';
import './App.css';
import UserRoutes from './UserRoutes';
import AuthProvider from "../src/AuthContext";
import { Route, Routes, useNavigate, Outlet } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Airbnb from './pages/Airbnb';



function Admin() {


  return (
    <div className="app">
      <div className="fixed-sidebar">
        <Sidebar />
      </div>
      <div className="scrollable-content">
        <PageContent />
    
      </div>
    </div>

    
  );
}

export default Admin;