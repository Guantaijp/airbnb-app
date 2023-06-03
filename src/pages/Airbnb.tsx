import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { Table, Space, Avatar, Modal, message, Popconfirm } from "antd";
import { AdminsProps } from "../App";


interface HotelData {
    id: number;
    name: string;
    location: string;
    price: number;
    beds: number;
    images: string | File | null;
    category: string;
    description: string;
    amenity: string;

}

interface BnbAdminData {
    adminProps: AdminsProps[];
}


const Airbnb: React.FC<BnbAdminData> = ({ adminProps }) => {


    const adminData = JSON.parse(sessionStorage.getItem('admin') || '{}');
    const loggedAdmin = adminProps.find((admin: AdminsProps) => admin.id === adminData.id);
    const loggedAdminId = loggedAdmin?.id;

    // =======================================================================================================================================================================================================
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [price, setPrice] = useState(0);
    const [beds, setBeds] = useState(0);
    const [images, setImages] = useState<Array<File> | null>(null);
    console.log("images", images);
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [amenity, setAmenity] = useState("");

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleLocationChange = (event: ChangeEvent<HTMLInputElement>) => {
        setLocation(event.target.value);
    };

    const handlePriceChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPrice(Number(event.target.value));
    };

    const handleBedsChange = (event: ChangeEvent<HTMLInputElement>) => {
        setBeds(Number(event.target.value));
    };

    const handleCategoryChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCategory(event.target.value);
    };

    const handleDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value);
    };

    const handleAmenityChange = (event: ChangeEvent<HTMLInputElement>) => {
        setAmenity(event.target.value);
    };

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        // if (e.target.files) {
        //     setImages(e.target.files);
        // }
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("airbnb[name]", name);
        formData.append("airbnb[location]", location);
        formData.append("airbnb[price]", String(price));
        formData.append("airbnb[beds]", String(beds));
        formData.append("airbnb[category]", category);
        formData.append("airbnb[description]", description);
        formData.append("airbnb[amenity]", amenity);
        formData.append("airbnb[admin_id]", String(loggedAdminId));

        if (images) {
            const imageFiles = Array.from(images);
            imageFiles.forEach((image) => {
                formData.append("image", image);
            });
        }

        console.log("formData", formData);

        fetch("http://127.0.0.1:4000/airbnbs", {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("data", data);
                if (data.error) {
                    message.error(data.error);
                } else {
                    message.success("Hotel added successfully");
                }
            }
            )


    }


    // =======================================================================================================================================================================================================
    const [page, setPage] = useState(1);
    const [activeButton, setActiveButton] = useState(1);
    const [loading, setLoading] = useState<boolean>(true);
    const [open, setOpen] = useState(false);

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

    const confirm = () => {
        console.log("confirm")
        message.success('Click on Yes');
    };

    const cancel = () => {
        console.log("cancel");
        message.error('Click on No');
    };
    // =======================================================================================================================================================================================================






    return (
        <>
            <div className="justify-evenly w-full p-8 ">
                <p className="text-xl my-8 ">Airbnb</p>
                <div className=" bg-white rounded-lg shadow-sm">
                    <p className=" text-xl p-2 text-white w-full bg-[#95873C]">AirBnbs Listing </p>
                    <div className="flex flex-row mt-4 ml-8">
                        <button
                            className={` p-2  ${activeButton === 1 ? 'bg-[#95873C] text-white' : 'bg-white text-black'
                                }`}
                            onClick={handleClick1}
                        >
                            Hotel List
                        </button>
                        <button
                            className={` p-2  ${activeButton === 2 ? 'bg-[#95873C] text-white' : 'bg-white text-black'
                                }`}
                            onClick={handleClick}
                        >
                            Add Hotel
                        </button>
                    </div>

                    <div className="flex flex-col mx-8 justify-center ">
                        <div className="flex flex-col justify-center border-2 border-[#95873C]  mb-8">
                            {page === 1 && (
                                <Table

                                    columns={[
                                        {
                                            title: "Hotel Name",
                                            dataIndex: "image",
                                            render: (link: string) => {
                                                return <Avatar src={link} />;
                                            },
                                        },
                                        {
                                            title: "Location",
                                            dataIndex: "firstName",
                                        },
                                        {
                                            title: "Price",
                                            dataIndex: "lastName",
                                        },
                                        {
                                            title: "Beds",
                                            dataIndex: "email",
                                        },

                                        {
                                            // add edit and delete button here
                                            title: "Action",
                                            dataIndex: "action",
                                            render: (text, record) => (
                                                <Space size="middle">
                                                    <Popconfirm
                                                        title="Delete the task"
                                                        description="Are you sure to delete this task?"
                                                        onConfirm={confirm}
                                                        onCancel={cancel}
                                                        okText={<span className="text-red-500">Yes</span>}
                                                        cancelText="No"
                                                    >
                                                        <button className="bg-red-500 text-white p-0.5 text-sm rounded-sm shadow-xs">Delete</button>
                                                    </Popconfirm>
                                                    <button
                                                        onClick={() => setOpen(true)}
                                                        className="bg-[#95873C] text-white p-0.5 text-sm rounded-sm shadow-xs">Edit</button>
                                                </Space>
                                            ),
                                        },
                                    ]}


                                    pagination={{
                                        pageSize: 10,
                                    }}
                                ></Table>
                            )}

                            {page === 2 && (
                                <div>
                                    <form
                                        onSubmit={handleSubmit}
                                        className="justify-center">
                                        <div className="flex flex-row m-4">
                                            <div className="flex flex-col flex-grow mr-4">
                                                <label className="text-sm">Hotel Name</label>
                                                <input
                                                    value={name}
                                                    onChange={handleNameChange}
                                                    type="text"
                                                    className="border border-gray-300 rounded-sm p-2"
                                                    placeholder="Hotel Name"
                                                />
                                            </div>

                                            <div className="flex flex-col flex-grow mr-4">
                                                <label className="text-sm">Location</label>
                                                <input
                                                    value={location}
                                                    onChange={handleLocationChange}
                                                    type="text"
                                                    className="border border-gray-300 rounded-sm p-2"
                                                    placeholder="Location"
                                                />
                                            </div>

                                            <div className="flex flex-col flex-grow">
                                                <label className="text-sm">Price</label>
                                                <input
                                                    value={price}
                                                    onChange={handlePriceChange}
                                                    type="number"
                                                    className="border border-gray-300 rounded-sm p-2"
                                                    placeholder="Price"
                                                />
                                            </div>
                                        </div>

                                        <div className="flex flex-row m-4">
                                            <div className="flex flex-col flex-grow mr-4">
                                                <label className="text-sm">Beds</label>
                                                <input
                                                    value={beds}
                                                    onChange={handleBedsChange}
                                                    type="number"
                                                    className="border border-gray-300 rounded-sm p-2"
                                                    placeholder="Beds"
                                                />
                                            </div>

                                            <div className="flex flex-col flex-grow">
                                                <label className="text-sm">About</label>
                                                <input
                                                    value={description}
                                                    onChange={handleDescriptionChange}
                                                    type="text"
                                                    className="border border-gray-300 rounded-sm p-2"
                                                    placeholder="About"
                                                />
                                            </div>
                                        </div>


                                        <label className="text-sm ml-4">Upload Images</label>

                                        <div className="flex flex-row m-4">
                                            <div className="flex flex-col flex-grow mr-4">
                                                <input
                                                    onChange={handleImageChange}
                                                    type="file"
                                                    className="border border-gray-300 rounded-sm p-2"
                                                    placeholder="Upload Images"
                                                    multiple
                                                />



                                            </div>



                                            {/* <div className="flex flex-col flex-grow mr-4">
                                                <input
                                                    type="file"
                                                    className="border border-gray-300 rounded-sm p-2"
                                                    placeholder="Upload Image"
                                                />
                                            </div>

                                            <div className="flex flex-col flex-grow">
                                                <input
                                                    type="file"
                                                    className="border border-gray-300 rounded-sm p-2"
                                                    placeholder="Upload Image"
                                                />
                                            </div> */}
                                        </div>


                                        {/* <div className="flex flex-row m-4">
                                            <div className="flex flex-col flex-grow mr-4">
                                                <input
                                                    type="file"
                                                    className="border border-gray-300 rounded-sm p-2"
                                                    placeholder="Upload Image"
                                                />
                                            </div>

                                            <div className="flex flex-col flex-grow mr-4">
                                                <input
                                                    type="file"
                                                    className="border border-gray-300 rounded-sm p-2"
                                                    placeholder="Upload Image"
                                                />
                                            </div>

                                            <div className="flex flex-col flex-grow">
                                                <input
                                                    type="file"
                                                    className="border border-gray-300 rounded-sm p-2"
                                                    placeholder="Upload Image"
                                                />
                                            </div>
                                        </div> */}


                                        <label className="text-sm ml-4">Add Amenities</label>

                                        <div className="flex flex-row m-4">
                                            <div className="flex flex-col flex-grow mr-4">
                                                <input
                                                    value={amenity}
                                                    onChange={handleAmenityChange}
                                                    type="text"
                                                    className="border border-gray-300 rounded-sm p-2"
                                                    placeholder="Amenity"
                                                />
                                            </div>
                                            <div className="flex flex-col flex-grow mr-4">
                                                <input
                                                    value={category}
                                                    onChange={handleCategoryChange}
                                                    type="text"
                                                    className="border border-gray-300 rounded-sm p-2"
                                                    placeholder="Amenity"
                                                />
                                            </div>
                                            {/* <div className="flex flex-col flex-grow mr-4">
                                                <input
                                                    type="text"
                                                    className="border border-gray-300 rounded-sm p-2"
                                                    placeholder="Amenity"
                                                />
                                            </div> */}
                                        </div>
                                        {/* <div className="flex flex-row m-4">
                                            <div className="flex flex-col flex-grow mr-4">
                                                <input
                                                    type="text"
                                                    className="border border-gray-300 rounded-sm p-2"
                                                    placeholder="Amenity"
                                                />
                                            </div>
                                            <div className="flex flex-col flex-grow mr-4">
                                                <input
                                                    type="text"
                                                    className="border border-gray-300 rounded-sm p-2"
                                                    placeholder="Amenity"
                                                />
                                            </div>
                                            <div className="flex flex-col flex-grow mr-4">
                                                <input
                                                    type="text"
                                                    className="border border-gray-300 rounded-sm p-2"
                                                    placeholder="Amenity"
                                                />
                                            </div>
                                        </div> */}

                                        {/* Button */}
                                        <button className="bg-[#95873C] text-center  text-white p-2  w-1/4 m-4" type='submit'>Add Hotel</button>
                                    </form>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                title="Edit Hotel"
                centered
                open={open}
                onOk={() => setOpen(false)}
                okButtonProps={{ className: "bg-[#95873C] text-white onHover:bg-[#95873C]" }}
                onCancel={() => setOpen(false)}
                width={950}
                okText={<span className="">Update</span>}
                cancelText="Cancel"
            >
                <div>
                    <form className="justify-center">
                        <div className="flex flex-row m-4">
                            <div className="flex flex-col flex-grow mr-4">
                                <label className="text-sm">Hotel Name</label>
                                <input
                                    type="text"
                                    className="border border-gray-300 rounded-sm p-2"
                                    placeholder="Hotel Name"
                                />
                            </div>

                            <div className="flex flex-col flex-grow mr-4">
                                <label className="text-sm">Location</label>
                                <input
                                    type="text"
                                    className="border border-gray-300 rounded-sm p-2"
                                    placeholder="Location"
                                />
                            </div>

                            <div className="flex flex-col flex-grow">
                                <label className="text-sm">Price</label>
                                <input
                                    type="number"
                                    className="border border-gray-300 rounded-sm p-2"
                                    placeholder="Price"
                                />
                            </div>
                        </div>

                        <div className="flex flex-row m-4">
                            <div className="flex flex-col flex-grow mr-4">
                                <label className="text-sm">Beds</label>
                                <input
                                    type="text"
                                    className="border border-gray-300 rounded-sm p-2"
                                    placeholder="Beds"
                                />
                            </div>

                            <div className="flex flex-col flex-grow">
                                <label className="text-sm">About</label>
                                <input
                                    type="text"
                                    className="border border-gray-300 rounded-sm p-2"
                                    placeholder="About"
                                />
                            </div>
                        </div>


                        <label className="text-sm ml-4">Upload Images</label>

                        <div className="flex flex-row m-4">
                            <div className="flex flex-col flex-grow mr-4">
                                <input
                                    type="file"
                                    className="border border-gray-300 rounded-sm p-2"
                                    placeholder="Upload Image"
                                />
                            </div>

                            <div className="flex flex-col flex-grow mr-4">
                                <input
                                    type="file"
                                    className="border border-gray-300 rounded-sm p-2"
                                    placeholder="Upload Image"
                                />
                            </div>

                            <div className="flex flex-col flex-grow">
                                <input
                                    type="file"
                                    className="border border-gray-300 rounded-sm p-2"
                                    placeholder="Upload Image"
                                />
                            </div>
                        </div>


                        <div className="flex flex-row m-4">
                            <div className="flex flex-col flex-grow mr-4">
                                <input
                                    type="file"
                                    className="border border-gray-300 rounded-sm p-2"
                                    placeholder="Upload Image"
                                />
                            </div>

                            <div className="flex flex-col flex-grow mr-4">
                                <input
                                    type="file"
                                    className="border border-gray-300 rounded-sm p-2"
                                    placeholder="Upload Image"
                                />
                            </div>

                            <div className="flex flex-col flex-grow">
                                <input
                                    type="file"
                                    className="border border-gray-300 rounded-sm p-2"
                                    placeholder="Upload Image"
                                />
                            </div>
                        </div>


                        <label className="text-sm ml-4">Add Amenities</label>

                        <div className="flex flex-row m-4">
                            <div className="flex flex-col flex-grow mr-4">
                                <input
                                    type="text"
                                    className="border border-gray-300 rounded-sm p-2"
                                    placeholder="Amenity"
                                />
                            </div>
                            <div className="flex flex-col flex-grow mr-4">
                                <input
                                    type="text"
                                    className="border border-gray-300 rounded-sm p-2"
                                    placeholder="Amenity"
                                />
                            </div>
                            <div className="flex flex-col flex-grow mr-4">
                                <input
                                    type="text"
                                    className="border border-gray-300 rounded-sm p-2"
                                    placeholder="Amenity"
                                />
                            </div>
                        </div>
                        <div className="flex flex-row m-4">
                            <div className="flex flex-col flex-grow mr-4">
                                <input
                                    type="text"
                                    className="border border-gray-300 rounded-sm p-2"
                                    placeholder="Amenity"
                                />
                            </div>
                            <div className="flex flex-col flex-grow mr-4">
                                <input
                                    type="text"
                                    className="border border-gray-300 rounded-sm p-2"
                                    placeholder="Amenity"
                                />
                            </div>
                            <div className="flex flex-col flex-grow mr-4">
                                <input
                                    type="text"
                                    className="border border-gray-300 rounded-sm p-2"
                                    placeholder="Amenity"
                                />
                            </div>
                        </div>
                        {/* <button className="bg-[#95873C] text-center  text-white p-2  w-1/4 m-4" type='submit'>Update Hotel</button> */}
                    </form>
                </div>
            </Modal>

        </>
    );
}

export default Airbnb;


