import React, { useState } from 'react';
import { Table, Input, } from "antd";




const Airbnb = () => {

    const [page, setPage] = useState(1);
    const [activeButton, setActiveButton] = useState(1);

    const handleClick1 = () => {
        setPage(1);
        // change color of button when clicked
        setActiveButton(1);
    };

    const handleClick = () => {
        setPage(2);
        // change color of button when clicked
        setActiveButton(2);
    };



    return (
        <div className="justify-evenly w-full p-2 ">
            <p className="text-xl m-4 ">Airbnb</p>
            <div className=" bg-white rounded-lg shadow-sm">
                <p className=" text-xl p-2 text-white w-full bg-[#95873C]">AirBnbs Listing </p>
                <div className="flex flex-row mt-4 ml-8">
                    <button
                        className={` p-2  ${activeButton === 1 ? 'bg-[#95873C] text-white' : 'bg-white text-black'
                            }`}
                        onClick={handleClick1}
                    >
                        Hotel List
                    </button>
                    <button
                        className={` p-2  ${activeButton === 2 ? 'bg-[#95873C] text-white' : 'bg-white text-black'
                            }`}
                        onClick={handleClick}
                    >
                        Add Hotel
                    </button>
                </div>

                <div className="flex flex-col mx-8 justify-center">
                    <div className="flex flex-col justify-center">
                        {page === 1 && (
                            <Table
                                columns={[
                                    {
                                        title: "Hotel Name",
                                        dataIndex: "name",
                                    },
                                    {
                                        title: "Location",
                                        dataIndex: "location",
                                    },
                                    {
                                        title: "Price",
                                        dataIndex: "price",
                                    },
                                    {
                                        title: "Beds",
                                        dataIndex: "beds",
                                    },
                                    {
                                        title: "Status",
                                        dataIndex: "status",
                                    },
                                    {
                                        title: "Action",
                                        dataIndex: "action",
                                    },


                                ]}
                            >   </Table>
                        )}

                        {page === 2 && (
                            <div>
                                <div className="flex flex-row m-4">
                                    <div className="flex flex-col flex-grow">
                                        <label className="text-sm">Hotel Name</label>
                                        <Input className="" placeholder="Hotel Name" />
                                    </div>
                                    <div className="flex flex-col ml-4 flex-grow">
                                        <label className="text-sm">Location</label>
                                        <Input className="" placeholder="Location" />
                                    </div>
                                    <div className="flex flex-col ml-4 flex-grow">
                                        <label className="text-sm">Price</label>
                                        <Input className="" placeholder="Price" />
                                    </div>
                                </div>
                                <div className="flex flex-row m-4">
                                    <div className="flex flex-col flex-grow">
                                        <label className="text-sm">Beds</label>
                                        <Input className="" placeholder="Beds" />
                                    </div>
                                    <div className="flex flex-col ml-4 flex-grow">
                                        <label className="text-sm"> About </label>
                                        <Input className="" placeholder="About" />
                                    </div>
                                </div>


                                <div className="flex flex-flex-col ml-4 ">

                                    <div className="flex flex-col flex-grow">
                                        <label className="text-sm">Upload Image</label>
                                        <Input className="file" placeholder="Upload Image" />
                                    </div>
                                </div>





                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Airbnb;