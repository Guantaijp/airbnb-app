import React, { ChangeEvent, FormEvent, useState } from 'react';
import Profile from "../images/images.jpeg";
import { message } from 'antd';
import { AdminsProps } from '../App';

interface ProfilePageProps {
  adminProps: AdminsProps[];
  setAdmin: (admin: AdminsProps[]) => void;
}



const ProfilePage: React.FC<ProfilePageProps> = ({ adminProps }) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  React.useEffect(() => {
    const adminData = JSON.parse(sessionStorage.getItem('admin') || '{}');
    const loggedAdmin = adminProps.find((admin: AdminsProps) => admin.id === adminData.id);
    if (loggedAdmin) {
      setName(loggedAdmin.name);
      setEmail(loggedAdmin.email);
      setPassword(loggedAdmin.password);
      
    }
  }, [adminProps]); // Add adminProps as a dependency to the useEffect hook

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = JSON.stringify({ name, email, password });
    const adminData = JSON.parse(sessionStorage.getItem('admin') || '{}');
    const loggedAdmin = adminProps.find((admin: AdminsProps) => admin.id === adminData.id);
    const adminId = loggedAdmin?.id;
  
    fetch(`http://127.0.0.1:4000/admins/${adminId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: data,
      });
        message.success('Profile Updated Successfully');   
        window.location.reload(); 
    };

      
  

    return (
        <>
            <div className="justify-evenly w-full p-8 ">
                <p className="text-xl my-8  "> Profile </p>
                <div className=" bg-white rounded-lg shadow-sm">
                    <p className=" text-xl p-2 text-white w-full bg-[#95873C]">My Profile</p>
                    <div className="flex flex-col mx-8">
                        <div className="flex flex-col  my-8">
                            <div className="flex flex-row justify-center border-2 border-[#95873C]  m-12">
                                <div className="p-10 ">
                                    <img className="rounded-full w-40 h-34 text-center" src={Profile} alt="Profile" />
                                </div>
                                <form onSubmit={handleSubmit} className="flex flex-col justify-center">
                                    <div className="flex flex-col mt-4 flex-grow">
                                        <input
                                            value={name}
                                            onChange={handleNameChange}
                                            type="text"
                                            className="border border-gray-300 m-2 rounded-sm p-2"
                                            placeholder="Name"
                                            required
                                        />
                                    </div>
                                    <div className="flex flex-col flex-grow">
                                        <input
                                            value={email}
                                            onChange={handleEmailChange}
                                            type="text"
                                            className="border border-gray-300 m-2 rounded-sm p-2"
                                            placeholder="Email"
                                            required
                                        />
                                    </div>
                                    <div className="flex flex-col flex-grow">
                                        <input
                                            value={password}
                                            onChange={handlePasswordChange}
                                            type="text"
                                            className="border border-gray-300 m-2 rounded-sm p-2"
                                            placeholder="Password"

                                        />
                                    </div>
                                    <button type="submit" className="bg-[#95873C] text-white rounded-sm p-2 my-4">
                                        Update Profile
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ProfilePage;

function setAdmin(arg0: (prevAdmins: any) => any) {
    throw new Error('Function not implemented.');
}
