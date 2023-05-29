import { useEffect, useState } from "react";
import { Avatar, Table } from "antd";

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

const Customers = () => {
  const [loading, setLoading] = useState<boolean>(true);
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

  return (
    <div className="justify-evenly w-full p-2 ">
      <p className="text-xl my-4  ">Customers</p>
      <div className=" bg-white rounded-lg shadow-sm">
        <p className=" text-xl p-2 text-white w-full bg-[#95873C]">Customers List </p>
        <div className="flex flex-col mx-8 justify-center ">
          <div className="flex flex-col justify-center border-2 border-[#95873C]  my-8">
            <Table
              loading={loading}
              columns={[
                {
                  title: "Photo",
                  dataIndex: "image",
                  render: (link: string) => {
                    return <Avatar src={link} />;
                  },
                },
                {
                  title: "First Name",
                  dataIndex: "firstName",
                },
                {
                  title: "Last Name",
                  dataIndex: "lastName",
                },
                {
                  title: "Email",
                  dataIndex: "email",
                },
                {
                  title: "Phone",
                  dataIndex: "phone",
                },
                {
                  title: "Address",
                  dataIndex: "address",
                  render: (address: { address: string; city: string }) => {
                    return (
                      <span>
                        {address.address}, {address.city}
                      </span>
                    );
                  },
                },
              ]}
              dataSource={dataSource}
              pagination={{
                pageSize: 8,
              }}
            ></Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
