import React from "react";

const LandingPage = () => {
    return (
        <>
            <div className="justify-evenly w-full p-2 ">
                <p className="text-xl my-4  "> Landing Page </p>
                <div className=" bg-white rounded-lg shadow-sm">
                    <p className=" text-xl p-2 text-white w-full bg-[#95873C]">Landing Page</p>
                    <div className="flex flex-col mx-8">
                        <div className="flex flex-col  my-8">
                            <div className="flex flex-row justify-center border-2 border-[#95873C]  m-12">
                                <div className="p-10 ">
                                    <img className="rounded-full w-40 h-34 text-center" src="" alt="Profile" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default LandingPage;

