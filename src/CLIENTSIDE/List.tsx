import React, { useEffect, useState } from 'react';
import { Rate, Carousel, Card, Skeleton } from 'antd';
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



    const [loading, setLoading] = useState(true);


    useEffect(() => {
        // Simulating an API call or data fetching
        setTimeout(() => {
            setLoading(false);

        }, 1000); // Replace this with your actual data fetching logic
    }, []);


    return (
        <div>
            <div>
                <div className="flex flex-row justify-center mx-4 mt-6">
                    <p className="text-xl font-bold text-center">Entire Place</p>
                    <hr className="flex-grow border-1 border-black mt-3 mx-4" />
                </div>
                <div className="flex flex-row  mt-2 ">
                    {entirePlace.length === 0 ? (
                        Array.from({ length: 4 }).map((_, index) => (
                            <div key={index} className="flex flex-col rounded-sm hover:shadow-lg hover:bg-gray-100 my-2 mx-8">
                                <Skeleton.Image style={{ width: '100%', height: '58px' }} />
                                <div className="">
                                    <Rate style={{ fontSize: '18px', float: 'right' }} tooltips={desc} onChange={setValue} value={value} />
                                    <Skeleton active paragraph={{ rows: 1 }} />
                                    <Skeleton active paragraph={{ rows: 1 }} />
                                    <Skeleton active paragraph={{ rows: 1 }} />
                                </div>

                            </div>
                        ))
                    ) : (
                        entirePlace.map((item) => (
                            <div key={item.id} className="flex flex-col rounded-sm hover:shadow-lg hover:bg-gray-100 my-2 mx-8">
                                {loading ? (
                                    <Skeleton.Image style={{ width: '100%', height: '58px' }} />
                                ) : (
                                    <Carousel autoplay className="w-96 h-58">
                                        {item.airbnb_images &&
                                            Array.isArray(item.airbnb_images) &&
                                            item.airbnb_images.map((imageObj) => (
                                                <div key={imageObj.id}>
                                                    <img className="w-full h-auto rounded-sm" src={imageObj.image} alt="" />
                                                </div>
                                            ))}
                                    </Carousel>
                                )}
                                <div className="">
                                    <Rate style={{ fontSize: '18px', float: 'right' }} tooltips={desc} onChange={setValue} value={value} />
                                    {loading ? (
                                        <>
                                            <div className="flex flex-col mx-8">
                                                <Skeleton active paragraph={{ rows: 1 }} style={{ marginBottom: '10px' }} />
                                                <Skeleton active paragraph={{ rows: 1 }} style={{ marginBottom: '10px' }} />
                                                <Skeleton active paragraph={{ rows: 1 }} style={{ marginBottom: '10px' }} />
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <p className="text-lg">{item.price} Ksh Per Night</p>
                                            <p className="text-lg">{item.location}</p>
                                            <p className="text-lg">{item.beds} Beds</p>
                                        </>
                                    )}
                                </div>
                                {loading ? (
                                    <Skeleton.Button
                                        active
                                        className="bg-[#95873C] text-white text-center rounded-lg mx-auto px-4 my-4 py-2 text-sm"
                                    />
                                ) : (
                                    <Link
                                        to={`/details/${item.id}`}
                                        className="bg-[#95873C] text-white text-center rounded-lg hover:shadow-lg mx-auto px-4 my-4 py-2 text-sm"
                                    >
                                        Read More
                                    </Link>
                                )}
                            </div>
                        ))
                    )}

                </div>
            </div>

            <div>
                <div className="flex flex-row justify-center mx-4 mt-6">
                    <p className="text-xl font-bold text-center">Private Rooms</p>
                    <hr className="flex-grow border-1 border-black mt-3 mx-4" />
                </div>
                <div className="flex flex-row  mt-2 ">
                    {privateRooms.length === 0 ? (
                        Array.from({ length: 4 }).map((_, index) => (
                            <div key={index} className="flex flex-col rounded-sm hover:shadow-lg hover:bg-gray-100 my-2 mx-8">
                                <Skeleton.Image style={{ width: '100%', height: '58px' }} />
                                <div className="">
                                    <Rate style={{ fontSize: '18px', float: 'right' }} tooltips={desc} onChange={setValue} value={value} />
                                    <Skeleton active paragraph={{ rows: 1 }} />
                                    <Skeleton active paragraph={{ rows: 1 }} />
                                    <Skeleton active paragraph={{ rows: 1 }} />
                                </div>

                            </div>
                        ))
                    ) : (
                        privateRooms.map((item) => (
                            <div key={item.id} className="flex flex-col rounded-sm hover:shadow-lg hover:bg-gray-100 my-2 mx-8">
                                {loading ? (
                                    <Skeleton.Image style={{ width: '100%', height: '58px' }} />
                                ) : (
                                    <Carousel autoplay className="w-96 h-58">
                                        {item.airbnb_images &&
                                            Array.isArray(item.airbnb_images) &&
                                            item.airbnb_images.map((imageObj) => (
                                                <div key={imageObj.id}>
                                                    <img className="w-full h-auto rounded-sm" src={imageObj.image} alt="" />
                                                </div>
                                            ))}
                                    </Carousel>
                                )}
                                <div className="">
                                    <Rate style={{ fontSize: '18px', float: 'right' }} tooltips={desc} onChange={setValue} value={value} />
                                    {loading ? (
                                        <>
                                            <div className="flex flex-col mx-8">
                                                <Skeleton active paragraph={{ rows: 1 }} style={{ marginBottom: '10px' }} />
                                                <Skeleton active paragraph={{ rows: 1 }} style={{ marginBottom: '10px' }} />
                                                <Skeleton active paragraph={{ rows: 1 }} style={{ marginBottom: '10px' }} />
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <p className="text-lg">{item.price} Ksh Per Night</p>
                                            <p className="text-lg">{item.location}</p>
                                            <p className="text-lg">{item.beds} Beds</p>
                                        </>
                                    )}
                                </div>
                                {loading ? (
                                    <Skeleton.Button
                                        active
                                        className="bg-[#95873C] text-white text-center rounded-lg mx-auto px-4 my-4 py-2 text-sm"
                                    />
                                ) : (
                                    <Link
                                        to={`/details/${item.id}`}
                                        className="bg-[#95873C] text-white text-center rounded-lg hover:shadow-lg mx-auto px-4 my-4 py-2 text-sm"
                                    >
                                        Read More
                                    </Link>
                                )}
                            </div>
                        ))
                    )}

                </div>
            </div>
            <div>
                <div className="flex flex-row justify-center mx-4 mt-6">
                    <p className="text-xl font-bold text-center">Hotel Rooms</p>
                    <hr className="flex-grow border-1 border-black mt-3 mx-4" />
                </div>
                <div className="flex flex-row  mt-2 ">
                    {hotelRooms.length === 0 ? (
                        Array.from({ length: 4 }).map((_, index) => (
                            <div key={index} className="flex flex-col rounded-sm hover:shadow-lg hover:bg-gray-100 my-2 mx-8">
                                <Skeleton.Image style={{ width: '100%', height: '58px' }} />
                                <div className="">
                                    <Rate style={{ fontSize: '18px', float: 'right' }} tooltips={desc} onChange={setValue} value={value} />
                                    <Skeleton active paragraph={{ rows: 1 }} />
                                    <Skeleton active paragraph={{ rows: 1 }} />
                                    <Skeleton active paragraph={{ rows: 1 }} />
                                </div>

                            </div>
                        ))
                    ) : (
                        hotelRooms.map((item) => (
                            <div key={item.id} className="flex flex-col rounded-sm hover:shadow-lg hover:bg-gray-100 my-2 mx-8">
                                {loading ? (
                                    <Skeleton.Image style={{ width: '100%', height: '58px' }} />
                                ) : (
                                    <Carousel autoplay className="w-96 h-58">
                                        {item.airbnb_images &&
                                            Array.isArray(item.airbnb_images) &&
                                            item.airbnb_images.map((imageObj) => (
                                                <div key={imageObj.id}>
                                                    <img className="w-full h-auto rounded-sm" src={imageObj.image} alt="" />
                                                </div>
                                            ))}
                                    </Carousel>
                                )}
                                <div className="items-center">
                                    <Rate style={{ fontSize: '18px', float: 'right' }} tooltips={desc} onChange={setValue} value={value} />
                                    {loading ? (
                                        <>
                                            <div className="flex flex-col mx-8">
                                                <Skeleton active paragraph={{ rows: 1 }} style={{ marginBottom: '10px' }} />
                                                <Skeleton active paragraph={{ rows: 1 }} style={{ marginBottom: '10px' }} />
                                                <Skeleton active paragraph={{ rows: 1 }} style={{ marginBottom: '10px' }} />
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <p className="text-lg">{item.price} Ksh Per Night</p>
                                            <p className="text-lg">{item.location}</p>
                                            <p className="text-lg">{item.beds} Beds</p>
                                        </>
                                    )}
                                </div>
                                {loading ? (
                                    <Skeleton.Button
                                        active
                                        className="bg-[#95873C] text-white text-center rounded-lg mx-auto px-4 my-4 py-2 text-sm"
                                    />
                                ) : (
                                    <Link
                                        to={`/details/${item.id}`}
                                        className="bg-[#95873C] text-white text-center rounded-lg hover:shadow-lg mx-auto px-4 my-4 py-2 text-sm"
                                    >
                                        Read More
                                    </Link>
                                )}
                            </div>
                        ))
                    )}

                </div>
            </div>

        </div>
    )
}

export default List
