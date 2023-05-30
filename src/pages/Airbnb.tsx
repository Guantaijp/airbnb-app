import { useEffect, useState } from "react";
import { Table, Space, Avatar, Modal, message, Popconfirm } from "antd";


interface CustomerProps {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: {
        address: string;
        city: string;
    };
    image: string;
}

interface ApiResponse {
    users: CustomerProps[];
}





const Airbnb = () => {

    const [page, setPage] = useState(1);
    const [activeButton, setActiveButton] = useState(1);
    const [loading, setLoading] = useState<boolean>(true);
    const [open, setOpen] = useState(false);
    const [dataSource, setDataSource] = useState<CustomerProps[]>([]);

    useEffect(() => {
        setLoading(true);
        fetch("https://dummyjson.com/users")
            .then((response) => response.json())
            .then((json: ApiResponse) => {
                // console.log(json);
                setDataSource(json.users);
                setLoading(false);
            });
    }, []);



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


    return (
        <>
            <div className="justify-evenly w-full p-8 ">
                <p className="text-xl my-4 ">Airbnb</p>
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
                                    loading={loading}
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
                                    
                                    dataSource={dataSource}
                                    pagination={{
                                        pageSize: 10,
                                    }}
                                ></Table>
                            )}

                            {page === 2 && (
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


