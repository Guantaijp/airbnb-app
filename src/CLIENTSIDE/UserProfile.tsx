import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
import Profile from '../images/download.jpeg'
import { message,Table } from "antd";




function UserProfile() {


  const [page, setPage] = useState(1);
  const [activeButton, setActiveButton] = useState(1);

  const [loading, setLoading] = useState<boolean>(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Simulate data loading delay
    setLoading(true); // Set loading state to true when the page changes

    setTimeout(() => {
      setLoading(false); // Set loading state to false after data has been loaded
    }, 500);
  }, [page]); // Add page as a dependency

  const handleClick1 = () => {
    setLoading(true)
    setPage(1);
    setActiveButton(1);
  };

  const handleClick = () => {
    setLoading(true)
    setPage(2);
    setActiveButton(2);
  };

  return (
    <>
      <div className="justify-evenly w-full p-16 ">
        <div className=" bg-white rounded-lg shadow-sm">
          <div className="flex flex-row mt-4 ml-8">
            <button
              className={` p-2  ${activeButton === 1 ? 'bg-[#95873C] text-white' : 'bg-white text-black'
                }`}
              onClick={handleClick1}
            >
              Profile
            </button>
            <button
              className={` p-2  ${activeButton === 2 ? 'bg-[#95873C] text-white' : 'bg-white text-black'
                }`}
              onClick={handleClick}
            >
              My Bookings
            </button>
          </div>

          <div className="flex flex-col mx-8 justify-center ">
            <div className="flex flex-col justify-center border-2 border-[#95873C]  mb-8">
              {page === 1 && (
                <div className="justify-evenly w-full p-2">
                  <div className="bg-white rounded-lg shadow-sm">
                    <p className="text-xl p-2 text-white w-full bg-[#95873C]">
                      My Profile
                    </p>
                    <div className="flex flex-col mx-8">
                      <form className="flex flex-col my-8" >
                        <div className="flex flex-row justify-center border-2 border-[#95873C] m-12">
                          <div className="flex items-center p-10 flex-col">
                            <label
                              htmlFor="image"
                              className="text-lg font-bold cursor-pointer"
                            >

                              <img
                                className="rounded-full w-40 h-40 text-center"
                                src={Profile}
                                alt="Profile"
                              />

                            </label>
                            <input
                              type="file"
                              name="image"
                              id="image"
                              className="hidden"
                            />
                          </div>

                          <div className="flex flex-col justify-center">
                            <div className="flex flex-col mt-4 flex-grow">
                              <input
                                type="text"
                                className="border border-gray-300 m-2 rounded-sm p-2"
                                placeholder="Name"
                              />
                            </div>
                            <div className="flex flex-col flex-grow">
                              <input
                                type="text"
                                className="border border-gray-300 m-2 rounded-sm p-2"
                                placeholder="Email"
                              />
                            </div>
                            <div className="flex flex-col flex-grow">
                              <input
                                type="text"
                                className="border border-gray-300 m-2 rounded-sm p-2"
                                placeholder="Password"
                              />
                            </div>

                            <button
                              type="submit"
                              className="bg-[#95873C] text-white rounded-sm p-2 my-4"
                              disabled={loading}
                            >
                              {loading ? "Updating..." : "Update Profile"}
                            </button>

                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

              )}

              {page === 2 && (
                <div>
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
                        title: "Category",
                        dataIndex: "category",
                      },

                    ]}
                    loading={loading}
                    pagination={{
                      pageSize: 10,
                    }}
                  ></Table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default UserProfile
