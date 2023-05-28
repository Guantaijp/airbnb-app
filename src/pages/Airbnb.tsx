import React, { useState } from 'react';



const Airbnb = () => {

    const [page, setPage] = useState(1);

    const handleClick = () => {
        setPage(page === 1 ? 2 : 1);
    };



    return (
        <div className="justify-evenly w-full p-2 ">
            <p className="text-xl m-4 ">Airbnb</p>

            <div className=" bg-white rounded-lg shadow-sm">
                <p className=" text-xl p-2 text-white w-full bg-[#95873C]">Airbnb Listing </p>
                <div className="flex justify-center mt-4">
                    <div className="bg-white rounded-lg shadow-sm">
                        <div className="flex justify-center mt-4">
                            {page === 1 && (
                                <div>
                                    <h1>Page 2</h1>
                                    <h1 className="text-xl m-4 ">Air   bnb</h1>
                                    <h1 className="text-xl m-4 ">Air   bnb</h1>
                                    <h1 className="text-xl m-4 ">Airbnb</h1>
                                    <h1 className="text-xl m-4 ">Ai   rbnb</h1>
                                    <h1 className="text-xl m-4 ">Airb   nb</h1>
                                    <h1 className="text-xl m-4 ">Air    bnb</h1>
                                    <h1 className="text-xl m-4 ">Airbnb</h1>
                                    <h1 className="text-xl m-4 ">Ai  r bnb</h1>
                                    <h1 className="text-xl m-4 ">Ai  rb   nb</h1>
                                    <h1 className="text-xl m-4 ">Air     bnb</h1>
                                    <h1 className="text-xl m-4 ">Air    bnb</h1>
                                    <h1 className="text-xl m-4 ">Airb   nb</h1>
                                </div>
                            )}
                            {page === 2 && (
                                <div>
                                    <h1>Page 2</h1>
                                    {/* Content for Page 2 */}
                                    <h1 className="text-xl m-4 ">Airbnb</h1>
                                    <h1 className="text-xl m-4 ">Airbnb</h1>
                                    <h1 className="text-xl m-4 ">Airbnb</h1>
                                    <h1 className="text-xl m-4 ">Airbnb</h1>
                                    <h1 className="text-xl m-4 ">Airbnb</h1>
                                    <h1 className="text-xl m-4 ">Airbnb</h1>
                                    <h1 className="text-xl m-4 ">Airbnb</h1>
                                    <h1 className="text-xl m-4 ">Airbnb</h1>
                                    <h1 className="text-xl m-4 ">Airbnb</h1>
                                    <h1 className="text-xl m-4 ">Airbnb</h1>
                                    <h1 className="text-xl m-4 ">Airbnb</h1>
                                    <h1 className="text-xl m-4 ">Airbnb</h1>
                                </div>
                            )}
                        </div>
                        <button onClick={handleClick}>Change Page</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Airbnb;