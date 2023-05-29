import React from "react";
import Profile from "../images/images.jpeg"

const ProfilePage = () => {
    return (
        <>
            <div className="justify-evenly w-full p-2 ">
                <p className="text-xl my-4  "> Profile </p>
                <div className=" bg-white rounded-lg shadow-sm">
                    <p className=" text-xl p-2 text-white w-full bg-[#95873C]">My Profile</p>
                    <div className="flex flex-col mx-8">
                        <div className="flex flex-col  my-8">
                            <div className="flex flex-row justify-center border-2 border-[#95873C]  m-12">
                                <div className="p-10 ">
                                    <img className="rounded-full w-40 h-34 text-center" src={Profile} alt="Profile" />
                                </div>
                                <div className="flex flex-col justify-center ">
                                    <div className="flex flex-col mt-4 flex-grow">
                                        <input
                                            type="text"
                                            className="border border-gray-300 m-2 rounded-sm p-2"
                                            placeholder="Name"
                                        />
                                    </div>
                                    <div className="flex flex-col flex-grow">
                                        <input
                                            type="text"
                                            className="border border-gray-300 m-2 rounded-sm p-2"
                                            placeholder="Email"
                                        />
                                    </div>
                                    <div className="flex flex-col flex-grow">
                                        <input
                                            type="text"
                                            className="border border-gray-300 m-2 rounded-sm p-2"
                                            placeholder="Password"
                                        />
                                    </div>
                                    <div className="flex flex-col flex-grow">
                                        <input
                                            type="text"
                                            className="border border-gray-300 m-2 rounded-sm p-2"
                                            placeholder="Confirm Password"
                                        />
                                    </div>
                                    <button className="bg-[#95873C] text-white rounded-sm p-2 my-4">Update Profile</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ProfilePage;