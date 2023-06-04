import React, { useEffect, Component, useState, ChangeEvent, FormEvent } from 'react';
import { message } from "antd";
import {  OwnerData, AirbnbData } from "../App";

interface AmenityProps {
    ownerData: OwnerData[];
    airbnbData : AirbnbData[];
}




function Amenity(props: AmenityProps ) {

    const { ownerData } = props;
    const { airbnbData } = props;
    
    const admiData = JSON.parse(sessionStorage.getItem("admin") || "{}");
    const loggedAdmin = ownerData.find((admin: OwnerData) => admin.id === admiData.id);
    const loggedAdminAirbnbs = airbnbData.filter((airbnb: AirbnbData) => airbnb.admin_id ===  loggedAdmin?.id);
    const lastAirbnbId = loggedAdminAirbnbs[loggedAdminAirbnbs.length - 1].id;
    
  

    const [item1, setItem1] = useState("");
    const [item2, setItem2] = useState("");
    const [item3, setItem3] = useState("");
    const [item4, setItem4] = useState("");
    const [item5, setItem5] = useState("");
    const [item6, setItem6] = useState("");

    const handleItem1Change = (e: ChangeEvent<HTMLInputElement>) => {
        setItem1(e.target.value);
    };
    const handleItem2Change = (e: ChangeEvent<HTMLInputElement>) => {
        setItem2(e.target.value);
    };
    const handleItem3Change = (e: ChangeEvent<HTMLInputElement>) => {
        setItem3(e.target.value);
    };
    const handleItem4Change = (e: ChangeEvent<HTMLInputElement>) => {
        setItem4(e.target.value);
    };
    const handleItem5Change = (e: ChangeEvent<HTMLInputElement>) => {
        setItem5(e.target.value);
    };
    const handleItem6Change = (e: ChangeEvent<HTMLInputElement>) => {
        setItem6(e.target.value);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = {
            item1: item1,
            item2: item2,
            item3: item3,
            item4: item4,
            item5: item5,
            item6: item6,
            airbnb_id: lastAirbnbId,
        };

        fetch("http://127.0.0.1:4000/amenities", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                message.success("Amenities added successfully");
            })
            .catch((err) => {
                console.log(err);
                message.error("Failed to add amenities");
            });

    };

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className='flex flex-col'>
                <div className="flex flex-row m-4">
                    <div className="flex flex-col flex-grow mr-4">
                        <input
                            value={item1}
                            onChange={handleItem1Change}
                            type="text"
                            className="border border-gray-300 rounded-sm p-2"
                            placeholder="Amenity"
                            required
                        />
                    </div>
                    <div className="flex flex-col flex-grow mr-4">
                        <input
                            value={item2}
                            onChange={handleItem2Change}
                            type="text"
                            className="border border-gray-300 rounded-sm p-2"
                            placeholder="Amenity"
                        />
                    </div>
                    <div className="flex flex-col flex-grow mr-4">
                        <input
                            value={item3}
                            onChange={handleItem3Change}
                            type="text"
                            className="border border-gray-300 rounded-sm p-2"
                            placeholder="Amenity"
                        />
                    </div>
                </div>

                <div className="flex flex-row m-4">
                    <div className="flex flex-col flex-grow mr-4">
                        <input
                            value={item4}
                            onChange={handleItem4Change}
                            type="text"
                            className="border border-gray-300 rounded-sm p-2"
                            placeholder="Amenity"
                        />
                    </div>
                    <div className="flex flex-col flex-grow mr-4">
                        <input
                            value={item5}
                            onChange={handleItem5Change}
                            type="text"
                            className="border border-gray-300 rounded-sm p-2"
                            placeholder="Amenity"
                        />
                    </div>
                    <div className="flex flex-col flex-grow mr-4">
                        <input
                            value={item6}
                            onChange={handleItem6Change}
                            type="text"
                            className="border border-gray-300 rounded-sm p-2"
                            placeholder="Amenity"
                        />
                    </div>
                </div>
                <button type='submit' className="bg-[#95873C] text-center text-white p-2  w-1/4 m-4" >Add Amenity</button>
            </form>
        </>
    )
}

export default Amenity