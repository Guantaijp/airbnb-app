import React, { useState } from 'react'
import { ArrowLeftOutlined } from '@ant-design/icons';
import type { RadioChangeEvent } from 'antd';
import { Rate, Radio } from 'antd';
import { Select, Space } from 'antd';
import { MdPhoneIphone, MdCreditCard } from 'react-icons/md';
import homeImag from '../images/home.jpg';
import { Link } from 'react-router-dom';


const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

function BookingPage() {

  const [value, setValue] = useState();
  const [valueRate, setValueRate] = useState(4);

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };




  return (
    <div>
      <div className="flex flex-row justify-center items-center mx-auto my-4 max-w-2xl sm:px-6 lg:max-w-7xl   ">
        <div className="flex flex-col mr-4">
          <div className="flex flex-row mr-1">
            <Link to="/details">
              <ArrowLeftOutlined className="text-2xl" />
            </Link>
            <p className="text-2xl font-bold mt-1">Confirm Your Pay</p>
          </div>
          <p className="text-lg font-bold mt-1">Choose Your Plan</p>
          <div className="flex flex-col border-2 border-gray-300 rounded-lg p-4 mt-2 m-2">
            <div className="flex flex-row justify-between">
              <p className="text-lg font-bold">Pay In Full</p>
              <Radio.Group onChange={onChange} value={value}>
                <Radio className="mt-1" value={2} />
              </Radio.Group>
            </div>
            <p className="text-sm">Payment should be made in full</p>
            <hr className="my-2" />
            <div className="flex flex-row justify-between">
              <p className="text-lg font-bold">Pay In Installment</p>
              <Radio.Group onChange={onChange} value={value}>
                <Radio className="mt-1" value={1} />
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
            <img className="w-64 h-64 rounded-lg mr-4" src={homeImag} alt="" />
            <div className="flex flex-col">
              <p className="text-lg font-bold">Karen Resoult</p>
              <Rate style={{ fontSize: '18px', float: 'right' }} tooltips={desc} onChange={setValueRate} value={valueRate} />
            </div>
          </div>

          <div className="flex flex-row border-2 justify-between border-gray-300 rounded-lg p-2 mt-2 mx-12">
            <div className="flex flex-col">
              <p className="text-lg text-black my-0">Check In</p>
              <input type="date" className="border-2 border-gray-300 rounded-sm" />
            </div>
            <div className="border-gray-300 border-2 h-16 mx-4" />

            <div className="flex flex-col">
              <p className="text-lg text-black my-0">Check Out</p>
              <input type="date" className="border-2 border-gray-300 rounded-sm" />
            </div>
          </div>


          <div className="flex flex-row justify-between mt-2 mx-12">
            <p className="text-lg text-black my-0">4,000 X 4 nights</p>
            <p className="text-lg text-black my-0">16,000</p>
          </div>

          <div className="flex flex-row justify-between mt-1 mx-12">
            <p className="text-lg text-black my-0">Total</p>
            <p className="text-lg text-black my-0 ml-auto">16,000</p>
          </div>

          <div className="flex flex-row justify-center">
            <button className="bg-[#95873C] text-white font-bold py-2 px-4 rounded my-2">
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookingPage
