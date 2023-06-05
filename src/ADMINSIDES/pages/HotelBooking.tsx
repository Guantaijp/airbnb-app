import { useEffect, useState } from "react";
import { Table, Space, Modal, message, Popconfirm } from "antd";
import { AirbnbData, BookingData, OwnerData, UserData } from "../../App";

interface HotelBookingProps {
    bookingData: BookingData[];
    ownerData: OwnerData[];
    airbnbData: AirbnbData[];
    userData: UserData[];
}



const HotelBooking = (props: HotelBookingProps) => {

    const { bookingData, ownerData, userData, airbnbData } = props;

    // 


    const [loading, setLoading] = useState<boolean>(true);
    const [open, setOpen] = useState(false);

    const admiData = JSON.parse(sessionStorage.getItem("admin") || "{}");
    const loggedAdmin = ownerData.find((admin: OwnerData) => admin.id === admiData.id);
    const loggedAdminId = loggedAdmin?.id;

    const loggedAdminImage = loggedAdmin?.image;
    const loggedAdminEmail = loggedAdmin?.email;

    // Get the Airbnb data that belongs to the logged-in admin
    const loggedAdminAirbnbs = airbnbData.filter((airbnb: AirbnbData) => airbnb.admin_id === loggedAdminId);

    let loggedAdminBookings: readonly any[] | undefined = [];
    if (loggedAdminAirbnbs.length > 0) {
        // Get bookings that are linked to the first Airbnb in loggedAdminAirbnbs array
        loggedAdminBookings = bookingData.filter((booking: BookingData) => booking.airbnb_id === loggedAdminAirbnbs[0].id);
    }

    console.log("loggedAdminBookings", loggedAdminBookings);

    const confirm = () => {
        console.log("confirm")
        message.success('Click on Yes');
    };
    const cancel = () => {
        console.log("cancel");
        message.error('Click on No');
    };

    useEffect(() => {
        // Simulate data loading delay
        setLoading(true); // Set loading state to true when the page changes
        setTimeout(() => {
            setLoading(false); // Set loading state to false after data has been loaded
        }, 500);
    }, []); // Add page as a dependency

    return (
        <>
            <div className="flex-grow">
                <div className="justify-evenly w-full p-8 ">
                    <p className="text-xl my-8 ">Airbnb Booking</p>
                    <div className=" bg-white rounded-lg shadow-sm">
                        <p className=" text-xl p-2 text-white w-full bg-[#95873C]">AirBnbs Booking List </p>

                        <div className="flex flex-col mx-8 justify-center ">
                            <div className="flex flex-col justify-center border-2 border-[#95873C]  mb-8">
                                <Table

                                    columns={[
                                        {
                                            title: "Customer",
                                            dataIndex: ["user", "name"],

                                        },
                                        {
                                            title: "Hotel",
                                            dataIndex: ["airbnb", "name"],
                                        },
                                        {
                                            title: "From",
                                            dataIndex: "from_date"
                                        },
                                        {
                                            title: "To",
                                            dataIndex: "to_date"
                                        },
                                        {
                                            title: "Phone Number",
                                            dataIndex: "phone_number",
                                        },
                                        {
                                            title: "Amount Paid",
                                            dataIndex: "paid_amount",
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
                                    loading = {loading}
                                    dataSource={loggedAdminBookings}
                                    pagination={{
                                        pageSize: 10,
                                    }}
                                ></Table>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}


export default HotelBooking