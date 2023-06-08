import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert, Space } from 'antd';
import { message } from 'antd';

export interface User {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}


interface UserAuthContextData {
    user: User | undefined;
    login: (email: string, password: string, userType: string) => void;
    register: (name: string, email: string, password: string, password_confirmation: string) => void;
    logout: () => void;
}

export const UserAuthContext = createContext<UserAuthContextData>({} as UserAuthContextData);

export default function UserAuthProvider({ children }: { children: React.ReactNode; }) {

    const navigate = useNavigate();
    // const [user, setUser] = useState<User | undefined>();
    const [change, setOnChange] = useState<boolean>(false);
    const [user, setUser] = useState<User | undefined>();

    // login
    const login = (email: string, password: string): void => {
        fetch('http://127.0.0.1:4000/user/login', {
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
                } else if (response.user) {
                    message.success('Welcome User');
                    setUser(response.user);
                    localStorage.setItem('token', response.jwt);
                    localStorage.setItem('user', JSON.stringify(response.user));
                    sessionStorage.setItem('user', JSON.stringify(response.user));
                    sessionStorage.setItem('jwtToken', response.jwt);
                    navigate('/')
                }
            });
    }

    //Register

    const register = (name: string, email: string, password: string, password_confirmation: string): void => {
        fetch("http://127.0.0.1:4000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, password, password_confirmation }),
        })
            .then((res) => res.json())
            .then((response) => {
                setOnChange(!change);
                if (response.error) {
                    console.log(response.error);
                    message.error(response.error); // Display the error message
                } else {
                    message.success('Account Created Successfully');
                    navigate('/userlogin');
                }
            });
    };

    // logout
    const logout = (): void => {
        setOnChange(!change);
        setUser(undefined);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        sessionStorage.removeItem('user');
        sessionStorage.removeItem('jwtToken');
        navigate('/login');
    }

    const userAuthContextData: UserAuthContextData = {
        user,
        login,
        register,
        logout,
    }

    return (
        <UserAuthContext.Provider value={userAuthContextData}>
            {children}
        </UserAuthContext.Provider>
    );

}