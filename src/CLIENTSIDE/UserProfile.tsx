import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
import Profile from '../images/download.jpeg'
import { message, Table } from "antd";
import { AirbnbData, BookingData, UserData } from "../App";


interface ProfilePageProps {
  userData: UserData[];
  setUserData: React.Dispatch<React.SetStateAction<UserData[]>>;
  bookingData: BookingData[];
  airbnbData: AirbnbData[];
}


function UserProfile(props: ProfilePageProps) {
  //====================================================================================================
  const [page, setPage] = useState(1);
  const [activeButton, setActiveButton] = useState(1);
  const [load, setLoad] = useState<boolean>(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Simulate data loading delay
    setLoad(true); // Set loading state to true when the page changes

    setTimeout(() => {
      setLoad(false); // Set loading state to false after data has been loaded
    }, 500);
  }, [page]); // Add page as a dependency

  const handleClick1 = () => {
    setLoad(true)
    setPage(1);
    setActiveButton(1);
  };

  const handleClick = () => {
    setLoad(true)
    setPage(2);
    setActiveButton(2);
  };

  // ====================================================================================================

  const { userData, setUserData, bookingData, airbnbData } = props;

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);


  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleImageUrlChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setImage(event.target.files[0]);
    }
  };

  const usersData = JSON.parse(sessionStorage.getItem("user") || "{}");
  const loggedUser = userData.find((user: UserData) => user.id === usersData.id);
  const loggedUserId = loggedUser?.id;
  const loggedUserImage = loggedUser?.image;
  const loggedUserName = loggedUser?.name;
  const loggedUserEmail = loggedUser?.email;


  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData();

    if (name !== "") {
      formData.append("name", name);
    } else {
      formData.append("name", loggedUser?.name || "");
    }

    if (email !== "") {
      formData.append("email", email);
    } else {
      formData.append("email", loggedUser?.email || "");
    }

    if (password) {
      formData.append("password", password);
    } else {
      // Check if loggedAdmin exists and has a password
      if (loggedUser && loggedUser.password) {
        formData.append("password", loggedUser.password);
      }
    }

    if (image) {
      formData.append("image", image);
    }

    fetch(`http://127.0.0.1:4000/users/${loggedUserId}`, {
      method: "PUT",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        message.success("Profile updated successfully");
        // Update the ownerData state with the new data
        setUserData((prevOwnerData) => {
          const updatedUserData = prevOwnerData.map((user: UserData) => {
            if (user.id === loggedUserId) {
              // Update the matched admin with the new data
              return data;
            }
            return user;
          });
          return updatedUserData;
        });
      })
      .catch((error) => {
        console.log(error);
        message.error("Profile update failed");
      })
      .finally(() => {
        setLoading(false); // Set loading state to false regardless of success or error
      });
  };

  useEffect(() => {
    // Set initial values for input fields
    if (loggedUser) {
      setName(loggedUser.name);
      setEmail(loggedUser.email);
      setPassword(loggedUser.password);

      if (typeof loggedUser.image === "string") {
        // If the image is a URL, set it directly
        setImage(null);
      } else {
        // If the image is a File object, set it as is
        setImage(loggedUser.image);
      }
    }
  }, [loggedUser]);

  //  get bookings of the logged in user
  const userBookings = bookingData.filter((booking: BookingData) => booking.user_id === loggedUserId);
  console.log(userBookings)

  useEffect(() => {
    // Simulate data loading delay
    setLoading(true); // Set loading state to true when the page changes
    setTimeout(() => {
      setLoading(false); // Set loading state to false after data has been loaded
    }, 500);
  }, []); // Add page as a dependency





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
                      <form
                        onSubmit={handleSubmit}
                        className="flex flex-col my-8" >
                        <div className="flex flex-row justify-center border-2 border-[#95873C] m-12">
                          <div className="flex items-center p-10 flex-col">
                            <label
                              htmlFor="image"
                              className="text-lg font-bold cursor-pointer"
                            >
                           
                              {loggedUserImage ? (
                                <img
                                  className="rounded-full w-40 h-40 text-center"
                                  src={
                                    typeof loggedUserImage === "string"
                                      ? loggedUserImage
                                      : URL.createObjectURL(loggedUserImage)
                                  }
                                  alt="Profile"
                                />
                              ) : (
                                <img
                                  className="rounded-full w-40 h-40 text-center"
                                  src={Profile}
                                  alt="Profile"
                                />
                              )}

                            </label>
                            <input
                              onChange={handleImageUrlChange}
                              type="file"
                              name="image"
                              id="image"
                              className="hidden"
                            />
                          </div>

                          <div className="flex flex-col justify-center">
                            <div className="flex flex-col mt-4 flex-grow">
                              <input
                                value={name}
                                onChange={handleNameChange}
                                type="text"
                                className="border border-gray-300 m-2 rounded-sm p-2"
                                placeholder="Name"
                              />
                            </div>
                            <div className="flex flex-col flex-grow">
                              <input
                                value={email}
                                onChange={handleEmailChange}
                                type="text"
                                className="border border-gray-300 m-2 rounded-sm p-2"
                                placeholder="Email"
                              />
                            </div>
                            <div className="flex flex-col flex-grow">
                              <input
                                value={password}
                                onChange={handlePasswordChange}
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
                   <p className="text-xl p-2 text-white w-full bg-[#95873C]">
                      My Bookings
                    </p>
                  <Table

                    columns={[
                      {
                        title: "Hotel Name",
                        dataIndex: ["airbnb", "name"]

                      },
                      {
                        title: "Location",
                        dataIndex: ["airbnb", "location"]
                      },
                      {
                        title: "Amount Paid",
                        dataIndex: "paid_amount",
                      },
                      {
                        title: "From",
                        dataIndex: "from_date",
                      },
                      {
                        title: "To",
                        dataIndex: "to_date",
                      },

                    ]}
                    dataSource={userBookings}
                    loading={load}
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
