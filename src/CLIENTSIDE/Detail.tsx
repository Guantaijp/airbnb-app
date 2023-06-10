import { AirbnbData } from '../App';
import homeImage from '../images/home.jpg';
import homeImag from '../images/home1.jpg';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';



interface DetailDataProps {
    airbnbData: AirbnbData[];
}


function Detail(props: DetailDataProps) {
    const { id } = useParams();

    const { airbnbData } = props;


    const airbnb = airbnbData.find((item) => item.id.toString() === id);
    const firstImageUrl = airbnb?.airbnb_images?.[0]?.image;
    const secondImageUrl = airbnb?.airbnb_images?.[1]?.image;
    const thirdImageUrl = airbnb?.airbnb_images?.[2]?.image;
    const fourthImageUrl = airbnb?.airbnb_images?.[3]?.image;
    const fifthImageUrl = airbnb?.airbnb_images?.[4]?.image;



    return (

        <div>
            <div className="flex flex-col min-h-screen">
                <h1 className="text-2xl font-extrabold text-black mt-2 text-center">{airbnb?.name}</h1>
                <div className="mx-auto mt-4 max-w-2xl sm:px-6 lg:max-w-7xl lg:grid lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                    <div className="aspect-h-4 aspect-w-3 overflow-hidden rounded-lg lg:block">
                        <img
                            src={airbnb?.airbnb_images[0]?.image}
                            alt="."
                            className="h-full w-full object-cover object-center hover:scale-105"
                        />
                    </div>
                    <div className="lg:grid lg:grid-cols-1 lg:gap-y-8">
                        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                            <img
                                src={airbnb?.airbnb_images[1]?.image}
                                alt="."
                                className="h-full w-full object-cover object-center hover:scale-105"
                            />
                        </div>
                        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                            <img
                                src={airbnb?.airbnb_images[2]?.image}
                                alt="."
                                className="h-full w-full object-cover object-center hover:scale-105"
                            />
                        </div>
                    </div>
                    <div className="lg:grid lg:grid-cols-1 lg:gap-y-8">
                        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                            <img
                                src={airbnb?.airbnb_images[3]?.image}
                                alt="."
                                className="h-full w-full object-cover object-center hover:scale-105"
                            />
                        </div>
                        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg hover:scale-105">
                            <img
                                src={airbnb?.airbnb_images[4]?.image}
                                alt="."
                                className="h-full w-full object-cover object-center hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-center items-center mx-auto mt-4 max-w-2xl sm:px-6 lg:max-w-7xl   ">
                    {/* <div className="justify-center items-center flex flex-col mx-auto mt-4 max-w-2xl sm:px-6 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8"> */}
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-col space-y-4">
                            <h1 className="text-2xl font-extrabold text-black">What Karen Resoult offers</h1>
                            <div className="grid grid-cols-5 gap-4">
  <div className="border-2 border-gray-300 rounded-lg">
    <p className="text-lg text-black m-2 text-center">Karen Resoult</p>
  </div>
  <div className="border-2 border-gray-300 rounded-lg">
    <p className="text-lg text-black m-2 text-center">Karen Resoult</p>
  </div>
  <div className="border-2 border-gray-300 rounded-lg">
    <p className="text-lg text-black m-2 text-center">Karen Resoult</p>
  </div>
  <div className="border-2 border-gray-300 rounded-lg">
    <p className="text-lg text-black m-2 text-center">Karen Resoult</p>
  </div>
  <div className="border-2 border-gray-300 rounded-lg">
    <p className="text-lg text-black m-2 text-center">Karen Resoult</p>
  </div>
  <div className="border-2 border-gray-300 rounded-lg">
    <p className="text-lg text-black m-2 text-center">Karen Resoult</p>
  </div>
  <div className="border-2 border-gray-300 rounded-lg">
    <p className="text-lg text-black m-2 text-center">Karen Resoult</p>
  </div>
  <div className="border-2 border-gray-300 rounded-lg">
    <p className="text-lg text-black m-2 text-center">Karen Resoult</p>
  </div>
  <div className="border-2 border-gray-300 rounded-lg">
    <p className="text-lg text-black m-2 text-center">Karen Resoult</p>
  </div>
  <div className="border-2 border-gray-300 rounded-lg">
    <p className="text-lg text-black m-2 text-center">Karen Resoult</p>
  </div>
</div>

                            <div className="flex flex-row space-x-4">
                                <div className="border-2 border-gray-300 rounded-lg" style={{ width: 'fit-content' }}>
                                    <p className="text-lg text-black m-2 text-center">Karen Resoult</p>
                                </div>
                                <div className="border-2 border-gray-300 rounded-lg" style={{ width: 'fit-content' }}>
                                    <p className="text-lg text-black m-2 text-center">Karen Resoult</p>
                                </div>
                                <div className="border-2 border-gray-300 rounded-lg" style={{ width: 'fit-content' }}>
                                    <p className="text-lg text-black m-2 text-center">Karen Resoult</p>
                                </div>
                                <div className="border-2 border-gray-300 rounded-lg" style={{ width: 'fit-content' }}>
                                    <p className="text-lg text-black m-2 text-center">Karen Resoult</p>
                                </div>
                                <div className="border-2 border-gray-300 rounded-lg" style={{ width: 'fit-content' }}>
                                    <p className="text-lg text-black m-2 text-center">Karen Resoult</p>
                                </div>
                            </div>

                            <div className="flex flex-col mt-4">
                                <h1 className="text-2xl font-extrabold text-black">About Karen Resoult</h1>
                                <div className="my-3 mb-8">
                                    <p className="text-lg text-black text-left my-0">
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is
                                        that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                                        making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as
                                        their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various
                                        versions have evolved over the years,
                                        sometimes by accident, sometimes on purpose (injected humour and the like).
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col mt-8">
                            <div className="border-2 border-gray-300 rounded-lg p-4 ml-auto">
                                <p className="text-lg text-black my-0">1000 Ksh Per Night</p>
                                <div className="flex flex-row border-2 border-gray-300 rounded-lg p-2 mt-2">
                                    <div className="flex flex-col">
                                        <p className="text-lg text-black my-0">Check In</p>
                                        <input type="date" className="border-2 border-gray-300 rounded-sm" />
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-lg text-black my-0">Check Out</p>
                                        <input type="date" className="border-2 border-gray-300 rounded-sm" />
                                    </div>
                                </div>

                                <div className="flex flex-row justify-between mt-2">
                                    <p className="text-lg text-black my-0">4,000 X 4 nights</p>
                                    <p className="text-lg text-black my-0">16,000</p>
                                </div>

                                <div className="flex flex-row justify-between mt-1">
                                    <p className="text-lg text-black my-0">Total</p>
                                    <p className="text-lg text-black my-0 ml-auto">16,000</p>
                                </div>

                                <div className="flex flex-row justify-center">
                                    <Link to="/booking" className="bg-[#95873C] text-white font-bold py-2 px-4 rounded my-2">
                                        Reserve Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>

    )
}

export default Detail