import React from 'react';
import homeImage from '../images/home1.jpg';
import List from './List';
import { AirbnbData } from '../App';

interface HomepageProps {
    airbnbData: AirbnbData[];
}


function Homepage(props : HomepageProps) {

    const { airbnbData } = props;

    
    return (
        <div>
            <div className="bg-cover bg-center h-screen"style={{ backgroundImage: `url(${homeImage})` }} >
                <div className="flex flex-col items-center justify-center min-h-screen">
                        <div className="text-center">
                            <p className=" text-6xl font-extrabold text-gray-900">
                                Welcome to Guan Bnb <br />
                                Find Your Next Home Here!
                            </p>
                        </div>
                    </div>
            </div>
            <List airbnbData={airbnbData}/>
        </div>
    );
}

export default Homepage;
