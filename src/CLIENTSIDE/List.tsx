import React, { useEffect, useState } from 'react';
import homeImage from '../images/home.jpg';
import homeImag from '../images/home1.jpg';
import { Rate, Carousel } from 'antd';
import { Link } from 'react-router-dom';
import { AirbnbData } from '../App';


interface ListDataProps {
    airbnbData: AirbnbData[];

}

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];


function List(props: ListDataProps) {

    const { airbnbData } = props;


    useEffect(() => {
        const categoryOrder: { [key: string]: number } = {
            hotelrooms: 0,
            entirePlace: 1,
            privateRooms: 2,
        };
        const sorted = [...airbnbData].sort((a, b) => {
            return categoryOrder[a.category] - categoryOrder[b.category];
        });
       
    }, [airbnbData]);

    // get the once in the shared room category only
    const hotelRooms = airbnbData.filter((item) => {
        return item.category === "hotelRooms";
    });

    // get the once in the entire place category only
    const entirePlace = airbnbData.filter((item) => {
        return item.category === "entirePlace";
    });

    // get the once in the private room category only
    const privateRooms = airbnbData.filter((item) => {
        return item.category === "privateRooms";
    });

    const [value, setValue] = useState(4);

    return (
        <div>
            <div>
                <div className="flex flex-row justify-center mx-4 mt-6">
                    <p className="text-xl font-bold text-center">Entire Place</p>
                    <hr className="flex-grow border-1 border-black mt-3 mx-4" />
                </div>

                <div className="flex flex-row  mx-4 mt-2 ">
                    <div className="flex flex-col rounded-sm hover:shadow-lg hover:bg-gray-100 my-2">
                        <Carousel autoplay className="w-96 h-58 rounded-sm">
                            <div key="1">
                                <img className="w-full h-full rounded-sm" src={homeImag} alt="" />
                            </div>
                            <div key="2">
                                <img className="w-full h-full rounded-sm" src={homeImage} alt="" />
                            </div>
                        </Carousel>
                        <div className="m-2">
                            <Rate style={{ fontSize: '18px', float: 'right' }} tooltips={desc} onChange={setValue} value={value} />
                            <p className="text-lg">4,000 Ksh Per Night</p>
                            <p className="text-lg">Nairobi Karen</p>
                            <p className="text-lg">2 Bed Room</p>
                        </div>
                        <Link to="/details"
                            className="bg-[#95873C] text-white text-center rounded-lg hover:shadow-lg mx-auto px-4 my-4 py-2 text-sm">
                            Read More
                        </Link>
                    </div>
                </div>
            </div>


            <div>
                <div className="flex flex-row justify-center mx-4 mt-6">
                    <p className="text-xl font-bold text-center">Private Rooms</p>
                    <hr className="flex-grow border-1 border-black mt-3 mx-4" />
                </div>

                <div className="flex flex-row  mx-4 mt-2 ">
                    <div className="flex flex-col rounded-sm hover:shadow-lg hover:bg-gray-100 my-2">
                        <Carousel autoplay className="w-96 h-58 rounded-sm">
                            <div key="1">
                                <img className="w-full h-full rounded-sm" src={homeImag} alt="" />
                            </div>
                            <div key="2">
                                <img className="w-full h-full rounded-sm" src={homeImage} alt="" />
                            </div>
                        </Carousel>
                        <div className="m-2">
                            <Rate style={{ fontSize: '18px', float: 'right' }} tooltips={desc} onChange={setValue} value={value} />
                            <p className="text-lg">4,000 Ksh Per Night</p>
                            <p className="text-lg">Nairobi Karen</p>
                            <p className="text-lg">2 Bed Room</p>
                        </div>

                        <Link to="/details" className="bg-[#95873C] text-white text-center rounded-lg hover:shadow-lg mx-auto px-4 my-4 py-2 text-sm">
                            Read More
                        </Link>
                    </div>
                </div>
            </div>


            <div className='my-6'>
                <div className="flex flex-row justify-center mx-4">
                    <p className="text-xl font-bold text-center">Hotel Rooms</p>
                    <hr className="flex-grow border-1 border-black mt-3 mx-4" />
                </div>

                <div className="flex flex-row  mx-4 mt-2 ">
                    <div className="flex flex-col rounded-sm hover:shadow-lg hover:bg-gray-100 my-2">
                        <Carousel autoplay className="w-96 h-58 rounded-sm">
                            <div key="1">
                                <img className="w-full h-full rounded-sm" src={homeImag} alt="" />
                            </div>
                            <div key="2">
                                <img className="w-full h-full rounded-sm" src={homeImage} alt="" />
                            </div>
                        </Carousel>
                        <div className="m-2">
                            <Rate style={{ fontSize: '18px', float: 'right' }} tooltips={desc} onChange={setValue} value={value} />
                            <p className="text-lg">4,000 Ksh Per Night</p>
                            <p className="text-lg">Nairobi Karen</p>
                            <p className="text-lg">2 Bed Room</p>
                        </div>
                        <Link to="/details" className="bg-[#95873C] text-white text-center rounded-lg hover:shadow-lg mx-auto px-4 my-4 py-2 text-sm">
                            Read More
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default List
