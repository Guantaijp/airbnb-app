import React from 'react';
import homeImage from '../images/home1.jpg';

function Homepage() {
    return (
        <div>
            <div
                className="bg-cover bg-center h-screen"
                style={{ backgroundImage: `url(${homeImage})` }}
            >
                <div className="flex flex-col items-center justify-center min-h-screen">
                        <div className="text-center">
                            <p className=" text-6xl font-extrabold text-gray-900">
                                Welcome to Guan Bnb <br />
                                Find Your Next Home Here!
                            </p>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default Homepage;
