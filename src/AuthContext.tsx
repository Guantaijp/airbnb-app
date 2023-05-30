import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert, Space } from 'antd';
import { error } from "console";
import { message } from 'antd';


export interface User {
  // Define the properties of the User object
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface Admin {
  // Define the properties of the Admin object
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface AuthContextData {
  user: User | undefined;
  admin: Admin | undefined;
  login: (email: string, password: string, userType: string) => void;
  register: (
    name: string,
    email: string,
    password: string,
    confirmPassword: string
  ) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | undefined>();
  const [change, setOnChange] = useState<boolean>(false);
  const [admin, setAdmin] = useState<Admin | undefined>();

  // login
  const login = (email: string, password: string, userType: string): void => {
    fetch('http://127.0.0.1:4000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, userType }),
    })
      .then((res) => res.json())
      .then((response) => {
        setOnChange(!change);
        if (response.error) {
          message.error('Wrong email or password');
        } else if (response.user) {
          message.success('Login successful');
          setUser(response.user);
          localStorage.setItem('token', response.jwt);
          localStorage.setItem('user', JSON.stringify(response.user));
          sessionStorage.setItem('user', JSON.stringify(response.user));
          sessionStorage.setItem('jwtToken', response.jwt);
          navigate('/');
        } else if (response.admin) {
          message.success('Welcome Admin');
          setAdmin(response.admin);
          localStorage.setItem('token', response.jwt);
          localStorage.setItem('admin', JSON.stringify(response.admin));
          sessionStorage.setItem('admin', JSON.stringify(response.admin));
          sessionStorage.setItem('jwtToken', response.jwt);
          navigate('/airbnb');
        }
      });
  };

  // Register
  const register = (
    name: string,
    email: string,
    password: string,
    confirmPassword: string
  ): void => {
    fetch("http://127.0.0.1:4000//users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        confirmPassword,
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.error) {
        } else {
          // Delay the navigation by 1.5 seconds
          setTimeout(() => {
            navigate("/login");
          }, 1500);
        }
      });
  };

  const logout = (): void => {
    sessionStorage.removeItem("jwtToken");
    sessionStorage.removeItem("user");
    localStorage.removeItem("token");
    sessionStorage.clear();
    navigate("/login");
  };

  const contextData: AuthContextData = {
    user,
    admin,
    login,
    register,
    logout,
  };

  useEffect(() => {
    // Fetch user data
    // Example code, replace with your actual fetch logic
    fetch("http://127.0.0.1:4000//users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        // console.log(response);
      });
  }, []);
  // console.log(user);

  return (
    <AuthContext.Provider value={contextData}>
    {children}
    </AuthContext.Provider>
    );
    
}