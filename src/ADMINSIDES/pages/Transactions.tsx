import { useEffect, useState } from "react";
import { Table } from "antd";


interface OrderProps {
    id: number;
    title: string;
    price: number;
    discountPrice: number;
    quantity: number;
    total: number;
}

interface ApiResponse {
    products: OrderProps[];
}

const Transactions = () => {

    const [loading, setLoading] = useState<boolean>(true);
    const [dataSource, setDataSource] = useState<OrderProps[]>([]);

    useEffect(() => {
        setLoading(true);
        fetch("https://dummyjson.com/carts/1")
            .then((response) => response.json())
            .then((json: ApiResponse) => {
                // console.log(json);
                setDataSource(json.products);
                setLoading(false);
            });
    }, []);

    return (
        <>
            <div className="justify-evenly w-full p-8 ">
                <p className="text-xl my-8  ">Transactions</p>
                <div className=" bg-white rounded-lg shadow-sm">
                    <p className=" text-xl p-2 text-white w-full bg-[#95873C]">Transaction List </p>
                    <div className="flex flex-col mx-8 justify-center ">
                        <div className="flex flex-col justify-center border-2 border-[#95873C]  my-8">
                            <Table
                                loading={loading}
                                columns={[
                                    {
                                        title: "Customer",
                                        dataIndex: "title",
                                    },
                                    {
                                        title: "Phone Number",
                                        dataIndex: "price",
                                        render: (value) => <span>{value} Ksh</span>,
                                    },
                                    {
                                        title: "Payment Method",
                                        dataIndex: "discountPrice",
                                        render: (value) => <span>{value} Ksh</span>,
                                    },
                                    {
                                        title: "Transaction Id",
                                        dataIndex: "quantity",
                                    },
                                    {
                                        title: "Transaction Amount",
                                        dataIndex: "total",
                                        render: (value) => <span>{value} Ksh</span>,
                                    },
                                    {
                                        title: "Transaction Date",
                                        dataIndex: "total",
                                        render: (value) => <span>{value} Ksh</span>,
                                    },
                                    
                                ]}
                                dataSource={dataSource}
                                rowKey="id"
                                pagination={{
                                    pageSize: 8
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default Transactions;
