import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert, Space } from 'antd';
import { message } from 'antd';


export interface Admin {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface AuthContextData {
  admin: Admin | undefined;
  login: (email: string, password: string, userType: string) => void;
  // register: (name: string,email: string,password: string,confirmPassword: string ) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export default function AuthProvider({children}: {children: React.ReactNode;}) {
  
  const navigate = useNavigate();
  // const [user, setUser] = useState<User | undefined>();
  const [change, setOnChange] = useState<boolean>(false);
  const [admin, setAdmin] = useState<Admin | undefined>();

  // login
  const login = (email: string, password: string): void => {
    fetch('http://127.0.0.1:4000/admin/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((response) => {
        setOnChange(!change);
        if (response.error) {
          message.error('Wrong email or password');
        } 
         else if (response.admin) {
          message.success('Welcome Admin');
          setAdmin(response.admin);
          localStorage.setItem('token', response.jwt);
          localStorage.setItem('admin', JSON.stringify(response.admin));
          sessionStorage.setItem('admin', JSON.stringify(response.admin));
          sessionStorage.setItem('jwtToken', response.jwt);
          navigate('/admin/dashboard');
        }
      });
  };

  // // Register
  // const register = (
  //   name: string,
  //   email: string,
  //   password: string,
  //   confirmPassword: string
  // ): void => {
  //   fetch("http://127.0.0.1:4000//users", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       name,
  //       email,
  //       password,
  //       confirmPassword,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((response) => {
  //       if (response.error) {
  //       } else {
  //         // Delay the navigation by 1.5 seconds
  //         setTimeout(() => {
  //           navigate("admin/login");
  //         }, 1500);
  //       }
  //     });
  // };

  const logout = (): void => {
    sessionStorage.removeItem("jwtToken");
    sessionStorage.removeItem("user");
    localStorage.removeItem("token");
    sessionStorage.clear();
    navigate("admin/login");
  };

  const contextData: AuthContextData = {
    admin,
    login,
    // register,
    logout,
  };

  return (
    <AuthContext.Provider value={contextData}>
    {children}
    </AuthContext.Provider>
    );
    
}