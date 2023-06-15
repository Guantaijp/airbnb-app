import React, { useState } from 'react'
import { ArrowLeftOutlined } from '@ant-design/icons';
import type { RadioChangeEvent } from 'antd';
import { Rate, Radio } from 'antd';
import { Select, Space } from 'antd';
import { MdPhoneIphone, MdCreditCard } from 'react-icons/md';
import homeImag from '../images/home.jpg';
import { Link } from 'react-router-dom';
import { AirbnbData, BookingData, UserData, } from '../App';



interface BookingPageProps {
  airbnbData: AirbnbData[];
  bookingData: BookingData[];
  userData: UserData[];
  setBookingData: React.Dispatch<React.SetStateAction<BookingData[]>>;
}

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

function BookingPage(props: BookingPageProps) {
  const { bookingData, setBookingData, airbnbData, userData } = props;
  const [value, setValue] = useState();
  const [valueRate, setValueRate] = useState(4);
  const lastBooking = bookingData[bookingData.length - 1];

  // get airbnbData   from the last booking
  const airbnbDataFromLastBooking = airbnbData.find((airbnb) => airbnb.id === lastBooking?.airbnb_id);
  // get the first image from the airbnbDataFromLastBooking
  const image = airbnbDataFromLastBooking?.airbnb_images[0].image;
  // console.log(image);


  const [calculatedValue, setCalculatedValue] = useState<number>(0);

  const onChange = (e: RadioChangeEvent) => {
    let calculatedAmount = 0;

    if (e.target.value === 1) {
      calculatedAmount = lastBooking.estimated_amount;
    } else if (e.target.value === 2) {
      calculatedAmount = lastBooking.estimated_amount / 2;
    }

    setCalculatedValue(calculatedAmount);
    setValue(e.target.value);
  };

  let fromDate = null;
  let toDate = null;
  let nightDifference = Number.NaN;
  let airbnbPrice = null;
  let airbnbName = null;
  // let airbnbImage = null;

  if (lastBooking && lastBooking.from_date && lastBooking.to_date && lastBooking.difference_in_nights && lastBooking.airbnb.price && lastBooking.airbnb.name) {
    fromDate = new Date(lastBooking.from_date).toLocaleDateString(undefined, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });

    toDate = new Date(lastBooking.to_date).toLocaleDateString(undefined, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });

    nightDifference = lastBooking.difference_in_nights;
    airbnbPrice = lastBooking.airbnb.price;
    airbnbName = lastBooking.airbnb.name;
    // airbnbImage = lastBooking.airbnb.airbnb_images[0].image;
  } else {
    // Handle the case when lastBooking is undefined or doesn't have the expected properties
    // For example, you could set default values or display an error message.
  }

  const estimatedAmount = airbnbPrice * nightDifference;

  // ge logged in user
  const loggedInUser = userData.find((user) => user.id === lastBooking?.user_id);
  const loginUserPhoneNumber = loggedInUser?.phoneNumber || '';
  //remove the first character
  const mobile = loginUserPhoneNumber.slice(1);
  // console.log(phone);

  const [isLoading, setIsLoading] = useState(false);

  // post Payment
  const postPayment = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    setIsLoading(true);
    const response = await fetch('https://44a6-41-80-117-154.ngrok-free.app/stkpush', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        phoneNumber: mobile,
        amount: calculatedValue
      })
    });
    const data = await response.json();
    console.log(data);
    setIsLoading(false);
  };



  return (
    <div>
      <div className="flex flex-row justify-center items-center mx-auto my-4 max-w-2xl sm:px-6 lg:max-w-7xl   ">
        <div className="flex flex-col mr-4">
          <div className="flex flex-row mr-1">
            {/* <Link to="/details">
              <ArrowLeftOutlined className="text-2xl" />
            </Link> */}
            <p className="text-2xl font-bold mt-1">Confirm Your Pay</p>
          </div>
          <p className="text-lg font-bold mt-1">Choose Your Plan</p>
          <div className="flex flex-col border-2 border-gray-300 rounded-lg p-4 mt-2 m-2">
            <div className="flex flex-row justify-between">
              <p className="text-lg font-bold">Pay In Full</p>
              <Radio.Group onChange={onChange} value={value}>
                <Radio className="mt-1" value={1} />
              </Radio.Group>
            </div>
            <p className="text-sm">Payment should be made in full</p>
            <hr className="my-2" />
            <div className="flex flex-row justify-between">
              <p className="text-lg font-bold">Pay In Installment</p>
              <Radio.Group onChange={onChange} value={value}>
                <Radio className="mt-1" value={2} />
              </Radio.Group>
            </div>
            <p className="text-sm">Payment should be made in half the amount</p>
          </div>
          <p className="text-lg font-bold mt-1">Pay With</p>
          <Select
            defaultValue="Select Payment Method"
            onChange={handleChange}
            className="py-3 px-2  w-full"
            options={[
              {
                value: 'jack', label: (
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <MdPhoneIphone style={{ marginRight: '5px' }} />
                    <span>MPESA</span>
                  </div>
                )
              },
              {
                value: 'lucy', label: (
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <MdCreditCard style={{ marginRight: '5px' }} />
                    <span>Credit Card</span>
                  </div>
                )
              },
            ]}
          />
          <p className="text-lg font-bold mt-1">Ground Rules</p>
          <div className="flex flex-col my-4">
            <p className="text-lg">We ask every guest to remember a few simple things about what makes a great guest.</p>
            <li className="text-lg">Follow the house rules.</li>
            <li className="text-lg">Treat your Host`s home like your own.</li>
          </div>
        </div>

        <div className="flex flex-col my-4 border-2 border-gray-300 rounded-lg justify-center">

          <div className="flex flex-row mx-10 mt-10">
            <img className="w-64 h-64 rounded-lg mr-4" src={image} alt="" />
            <div className="flex flex-col">
              <p className="text-lg font-bold">{airbnbName}</p>
              <Rate style={{ fontSize: '18px', float: 'right' }} tooltips={desc} onChange={setValueRate} value={valueRate} />
            </div>
          </div>

          <div className="flex flex-row border-2 justify-between border-gray-300 rounded-lg p-2 mt-2 mx-12">
            <div className="flex flex-col">
              <p className="text-lg text-black my-0">Check In</p>
              {/* <input type="date" className="border-2 border-gray-300 rounded-sm" /> */}
              <p className="text-lg text-black my-0">{fromDate}</p>
            </div>
            <div className="border-gray-300 border-2 h-16 mx-4" />

            <div className="flex flex-col">
              <p className="text-lg text-black my-0">Check Out</p>
              {/* <input type="date" className="border-2 border-gray-300 rounded-sm" /> */}
              <p className="text-lg text-black my-0">{toDate}</p>
            </div>
          </div>


          <div className="flex flex-row justify-between mt-2 mx-12">
            <p className="text-lg text-black my-0">{airbnbPrice} X {nightDifference} nights</p>
            <p className="text-lg text-black my-0">{estimatedAmount}</p>
          </div>
          <form onSubmit={postPayment}>
            <div className="flex flex-row justify-between mt-1 mx-12">
              <p className="text-lg text-black my-0">Payment</p>
              <p className="text-lg text-black my-0 ml-auto">{calculatedValue}</p>
            </div>

            <div className="flex flex-row justify-center">
              <button
                type="submit"
                className="bg-[#95873C] text-white font-bold py-2 px-4 rounded my-2"
                disabled={isLoading}
              >
                {isLoading ? 'Loading...' : 'Pay Now'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default BookingPage
