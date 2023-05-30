import React from 'react';
import Sidebar from './components/Sidebar';
import PageContent from './components/PageContent';
import './App.css';
import  AuthProvider  from './AuthContext';


function App() {
  return (

    <AuthProvider >

    <div className="app">
      <div className="fixed-sidebar">
        <Sidebar />
      </div>
      <div className="scrollable-content">
        <PageContent />
      </div>
    </div>   
    </AuthProvider>
  );
}

export default App;