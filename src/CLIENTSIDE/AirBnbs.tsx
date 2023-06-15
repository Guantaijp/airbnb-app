import { AirbnbData } from '../App';
import React, { useEffect, useState } from 'react';
import { Rate, Carousel, Card, Skeleton, Pagination } from 'antd';
import { Link } from 'react-router-dom';

interface AirProps {
  airbnbData: AirbnbData[];
}

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

function AirBnbs(props: AirProps) {
  const { airbnbData } = props;
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    // Simulating an API call or data fetching
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Replace this with your actual data fetching logic
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = airbnbData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="flex flex-wrap mt-2 justify-center">
        {currentItems.length === 0 ? (
          Array.from({ length: itemsPerPage }).map((_, index) => (
            <div
              key={index}
              className="flex flex-col rounded-sm hover:shadow-lg hover:bg-gray-100 my-2 mx-8 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
            >
              <Skeleton.Image style={{ width: '100%', height: '58px' }} />
              <div className="">
                <Rate
                  style={{ fontSize: '18px', float: 'right' }}
                  tooltips={desc}
                  onChange={setValue}
                  value={value}
                />
                <Skeleton active paragraph={{ rows: 1 }} />
                <Skeleton active paragraph={{ rows: 1 }} />
                <Skeleton active paragraph={{ rows: 1 }} />
              </div>
            </div>
          ))
        ) : (
          currentItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col rounded-sm hover:shadow-lg hover:bg-gray-100 my-2 mx-8 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
            >
              {loading ? (
                <Skeleton.Image style={{ width: '100%', height: '58px' }} />
              ) : (
                <Carousel autoplay className="w-96 h-58">
                  {item.airbnb_images &&
                    Array.isArray(item.airbnb_images) &&
                    item.airbnb_images.map((imageObj) => (
                      <div key={imageObj.id}>
                        <img className="w-full h-auto rounded-sm" src={imageObj.image} alt="" />
                      </div>
                    ))}
                </Carousel>
              )}
              <div className="">
                <Rate
                  style={{ fontSize: '18px', float: 'right' }}
                  tooltips={desc}
                  onChange={setValue}
                  value={value}
                />
                {loading ? (
                  <>
                    <div className="flex flex-col mx-8">
                      <Skeleton active paragraph={{ rows: 1 }} style={{ marginBottom: '10px' }} />
                      <Skeleton active paragraph={{ rows: 1 }} style={{ marginBottom: '10px' }} />
                      <Skeleton active paragraph={{ rows: 1 }} style={{ marginBottom: '10px' }} />
                    </div>
                  </>
                ) : (
                  <>
                    <p className="text-lg">{item.price} Ksh Per Night</p>
                    <p className="text-lg">{item.location}</p>
                    <p className="text-lg">{item.beds} Beds</p>
                  </>
                )}
              </div>
              {loading ? (
                <Skeleton.Button
                  active
                  className="bg-[#95873C] text-white text-center rounded-lg mx-auto px-4 my-4 py-2 text-sm"
                />
              ) : (
                <Link
                  to={`/details/${item.id}`}
                  className="bg-[#95873C] text-white text-center rounded-lg hover:shadow-lg mx-auto px-4 my-4 py-2 text-sm"
                >
                  Read More
                </Link>
              )}
            </div>
          ))
        )}
      </div>
      <Pagination
        className="mt-4 flex justify-center"
        current={currentPage}
        total={airbnbData.length}
        pageSize={itemsPerPage}
        onChange={handlePageChange}
      />
    </div>
  );
}

export default AirBnbs;
