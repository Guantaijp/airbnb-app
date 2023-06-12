import { AirbnbData } from '../App';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { DatePicker, Spin, Card, } from 'antd';
// import type { RangePickerProps } from 'antd/es/date-picker';
import dayjs, { Dayjs } from 'dayjs';
import dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs';
import generatePicker from 'antd/lib/date-picker/generatePicker';
import { RangeValue } from 'rc-picker/lib/interface';
// import 'antd/lib/date-picker/style/index.css';


interface DetailDataProps {
    airbnbData: AirbnbData[];
}

const { Meta } = Card;


const { RangePicker } = DatePicker;


// const disabledDate: RangePickerProps['disabledDate'] = (current) => {
//     return current && current < dayjs().endOf('day');
// };


function Detail(props: DetailDataProps) {



    const { id } = useParams();
    const { airbnbData } = props;
    const airbnb = airbnbData.find((item) => item.id.toString() === id);
    // get price of the airbnb
    const price = airbnb?.price;
    const user = JSON.parse(sessionStorage.getItem("user") || "{}");
    const isLoggedIn = sessionStorage.getItem("jwtToken") ? true : false;

    const [loading, setLoading] = useState(true);


    useEffect(() => {
        // Simulating an API call or data fetching
        setTimeout(() => {
            setLoading(false);

        }, 1000); // Replace this with your actual data fetching logic
    }, []);


    // const [selectedRange, setSelectedRange] = useState<RangeValue<Dayjs>>(null);

    const disabledDate = (current: Dayjs) => {
        // Disable dates that are in the past
        return current.isBefore(dayjs(), 'day');
    };
    const [selectedRange, setSelectedRange] = useState<RangeValue<Dayjs>>(null);
    const [differenceInNights, setDifferenceInNights] = useState<number>(0);
    const [totalPrice, setTotalPrice] = useState<number>(0);
  
    const handleRangeChange = (dates: RangeValue<Dayjs>, dateStrings: [string, string]) => {
      setSelectedRange(dates);
  
      if (dates && dates.length === 2) {
        const startDate = dates[0] as Dayjs;
        const endDate = dates[1] as Dayjs;
        const difference = endDate.diff(startDate, 'day');
        setDifferenceInNights(difference);
  
        // You can perform further calculations or actions based on the difference in nights
        // For example, calculate the total price based on the price per night and the difference in nights
        const pricePerNight = price || 0;
        const total = pricePerNight * difference;
        setTotalPrice(total);
      }
    };

    return (

        <div>
            <div className="flex flex-col min-h-screen">
                <h1 className="text-2xl font-extrabold text-black mt-2 text-center">{airbnb?.name}</h1>
                <div className="mx-auto mt-4 max-w-2xl sm:px-6 lg:max-w-7xl lg:grid lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                    <div className="aspect-h-4 aspect-w-3 overflow-hidden rounded-lg lg:block">
                        {loading ? (
                            <div
                                className="h-full w-full bg-gray-200 animate-pulse"
                                style={{ aspectRatio: '3/4' }}
                            ></div>
                        ) : (
                            <img
                                src={airbnb?.airbnb_images[0]?.image}
                                alt="."
                                className="h-full w-full object-cover object-center hover:scale-105"
                            />
                        )}
                    </div>

                    <div className="lg:grid lg:grid-cols-1 lg:gap-y-8">
                        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                            {loading ? (
                                <div
                                    className="h-full w-full bg-gray-200 animate-pulse"
                                    style={{ aspectRatio: '3/2' }}
                                ></div>
                            ) : (
                                <img
                                    src={airbnb?.airbnb_images[1]?.image}
                                    alt="."
                                    className="h-full w-full object-cover object-center hover:scale-105"
                                />
                            )}
                        </div>
                        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                            {loading ? (
                                <div
                                    className="h-full w-full bg-gray-200 animate-pulse"
                                    style={{ aspectRatio: '3/2' }}
                                ></div>
                            ) : (
                                <img
                                    src={airbnb?.airbnb_images[2]?.image}
                                    alt="."
                                    className="h-full w-full object-cover object-center hover:scale-105"
                                />
                            )}
                        </div>
                    </div>
                    <div className="lg:grid lg:grid-cols-1 lg:gap-y-8">
                        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                            {loading ? (
                                <div
                                    className="h-full w-full bg-gray-200 animate-pulse"
                                    style={{ aspectRatio: '3/2' }}
                                ></div>
                            ) : (
                                <img
                                    src={airbnb?.airbnb_images[3]?.image}
                                    alt="."
                                    className="h-full w-full object-cover object-center hover:scale-105"
                                />
                            )}
                        </div>
                        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg hover:scale-105">
                            {loading ? (
                                <div
                                    className="h-full w-full bg-gray-200 animate-pulse"
                                    style={{ aspectRatio: '3/2' }}
                                ></div>
                            ) : (
                                <img
                                    src={airbnb?.airbnb_images[4]?.image}
                                    alt="."
                                    className="h-full w-full object-cover object-center hover:scale-105"
                                />
                            )}
                        </div>
                    </div>

                </div>
                <div className="flex flex-row justify-center items-center mx-auto mt-4 max-w-2xl sm:px-6 lg:max-w-7xl">
                    <div className="flex flex-row justify-between w-full">
                        {/* First Part */}
                        <div className="flex flex-col space-y-4 w-1/2">
                            <h1 className="text-2xl font-extrabold text-black">What Karen Resoult offers</h1>
                            <div className="flex flex-row space-x-4">
                                {airbnb?.amenities.slice(0, 5).map((item) => (
                                    <div
                                        key={item.id}
                                        className="flex flex-row rounded-lg  space-x-4" // Added padding to create space between the text and the border

                                    >
                                        {loading ? (
                                            <Card style={{ width: 'fit-content', height: 40, display: 'flex', justifyContent: 'center', alignItems: 'center' }} loading={loading}>
                                                <Spin size="small" />
                                            </Card>
                                        ) : (
                                            <Card style={{ width: 'fit-content', height: 40, display: 'flex', justifyContent: 'center', alignItems: 'center' }} loading={loading}>
                                                <p className="text-lg text-black">{item.item1}</p>
                                            </Card>
                                        )}

                                        {loading ? (
                                            <Card style={{ width: 'fit-content', height: 40, display: 'flex', justifyContent: 'center', alignItems: 'center' }} loading={loading}>
                                                <Spin size="small" />
                                            </Card>
                                        ) : (
                                            <Card style={{ width: 'fit-content', height: 40, display: 'flex', justifyContent: 'center', alignItems: 'center' }} loading={loading}>
                                                <p className="text-lg text-black">{item.item2}</p>
                                            </Card>
                                        )}
                                        {loading ? (
                                            <Card style={{ width: 'fit-content', height: 40, display: 'flex', justifyContent: 'center', alignItems: 'center' }} loading={loading}>
                                                <Spin size="small" />
                                            </Card>
                                        ) : (
                                            <Card style={{ width: 'fit-content', height: 40, display: 'flex', justifyContent: 'center', alignItems: 'center' }} loading={loading}>
                                                <p className="text-lg text-black">{item.item3}</p>
                                            </Card>
                                        )}
                                        {loading ? (
                                            <Card style={{ width: 'fit-content', height: 40, display: 'flex', justifyContent: 'center', alignItems: 'center' }} loading={loading}>
                                                <Spin size="small" />
                                            </Card>
                                        ) : (
                                            <Card style={{ width: 'fit-content', height: 40, display: 'flex', justifyContent: 'center', alignItems: 'center' }} loading={loading}>
                                                <p className="text-lg text-black">{item.item4}</p>
                                            </Card>
                                        )}
                                        {loading ? (
                                            <Card style={{ width: 'fit-content', height: 40, display: 'flex', justifyContent: 'center', alignItems: 'center' }} loading={loading}>
                                                <Spin size="small" />
                                            </Card>
                                        ) : (
                                            <Card style={{ width: 'fit-content', height: 40, display: 'flex', justifyContent: 'center', alignItems: 'center' }} loading={loading}>
                                                <p className="text-lg text-black">{item.item5}</p>
                                            </Card>
                                        )}
                                        {loading ? (
                                            <Card style={{ width: 'fit-content', height: 40, display: 'flex', justifyContent: 'center', alignItems: 'center' }} loading={loading}>
                                                <Spin size="small" />
                                            </Card>
                                        ) : (
                                            <Card style={{ width: 'fit-content', height: 40, display: 'flex', justifyContent: 'center', alignItems: 'center' }} loading={loading}>
                                                <p className="text-lg text-black">{item.item6}</p>
                                            </Card>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col mt-4">
                                <h1 className="text-2xl font-extrabold text-black">About Karen Resoult</h1>
                                <div className="my-3 mb-8">
                                    <p className="text-lg text-black text-left my-0">
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is
                                        that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                                        making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as
                                        their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various
                                        versions have evolved over the years,
                                        sometimes by accident, sometimes on purpose (injected humour and the like).
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row justify-center items-center mx-auto mt-4 max-w-2xl sm:px-6 lg:max-w-7xl">
                            <div className="flex flex-row justify-between w-full">
                                {/* Second Part */}
                                <div className="flex flex-col mt-8 w-1/2">
                                    <Card style={{ width: 300, marginTop: 16 }} loading={loading}>
                                        {!loading && (
                                            <div className="">
                                                <p className="text-lg text-black my-0">{price} Ksh Per Night</p>
                                                <div className="p-2 mt-2">
                                                    <RangePicker
                                                        onChange={handleRangeChange}
                                                        disabledDate={disabledDate} />
                                                </div>
                                                <div className="flex flex-row justify-between mt-2">
                                                    <p className="text-lg text-black my-0">{price} X {
                    
                                                    } Nights</p>
                                                    <p className="text-lg text-black my-0">{totalPrice}</p>
                                                </div>
                                                <div className="flex flex-row justify-between mt-1">
                                                    <p className="text-lg text-black my-0">Total</p>
                                                    <p className="text-lg text-black my-0 ml-auto">{totalPrice}</p>
                                                </div>
                                                <div className="flex flex-row justify-center">
                                                    {isLoggedIn ? (
                                                        <Link to="/booking" className="bg-[#95873C] text-white font-bold py-2 px-4 rounded my-2">
                                                            Reserve Now
                                                        </Link>
                                                    ) : (
                                                        <Link to="/userlogin" className="bg-[#95873C] text-white font-bold py-2 px-4 rounded my-2">
                                                            Login to Reserve
                                                        </Link>
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Detail