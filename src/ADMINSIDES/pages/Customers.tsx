import { useEffect, useState } from "react";
import { Avatar, Table } from "antd";
import { UserData } from "../../App";

interface CustomerProps {
  userData: UserData[];
}


const Customers = (props: CustomerProps) => {

  const { userData } = props;

  const [loading, setLoading] = useState<boolean>(true);
  const [dataSource, setDataSource] = useState<CustomerProps[]>([]);

  useEffect(() => {
    // Simulate data loading delay
    setLoading(true); // Set loading state to true when the page changes

    setTimeout(() => {
        setLoading(false); // Set loading state to false after data has been loaded
    }, 500);
}, []); // Add page as a dependency


  return (
    <div className="justify-evenly w-full p-8 ">
      <p className="text-xl my-8  ">Customers</p>
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
                  dataIndex: "name",
                },
                {
                  title: "Email",
                  dataIndex: "email",
                },
                {
                  title: "Phone",
                  dataIndex: "phone_number",
                },
                
              ]}
              dataSource={userData}
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
