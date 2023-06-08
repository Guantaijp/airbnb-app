import homeImage from '../images/home.jpg';
import homeImag from '../images/home1.jpg';
import { Link } from 'react-router-dom';



function Detail() {


    return (

        <div>
            <div className="flex flex-col min-h-screen">
                <h1 className="text-2xl font-extrabold text-black mt-2 text-center">Karen Resoult</h1>
                <div className="mx-auto mt-4 max-w-2xl sm:px-6 lg:max-w-7xl lg:grid lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                    <div className="aspect-h-4 aspect-w-3 overflow-hidden rounded-lg lg:block">
                        <img
                            src={homeImage}
                            alt="."
                            className="h-full w-full object-cover object-center hover:scale-105"
                        />
                    </div>
                    <div className="lg:grid lg:grid-cols-1 lg:gap-y-8">
                        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                            <img
                                src={homeImag}
                                alt="."
                                className="h-full w-full object-cover object-center hover:scale-105"
                            />
                        </div>
                        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                            <img
                                src="https://www.strategyzer.com/hubfs/Business_Model_Examples-airBnB.jpg"
                                alt="."
                                className="h-full w-full object-cover object-center hover:scale-105"
                            />
                        </div>
                    </div>
                    <div className="lg:grid lg:grid-cols-1 lg:gap-y-8">
                        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                            <img
                                src="https://media.cntraveler.com/photos/5d112d50c4d7bd806dbc00a4/16:9/w_2560%2Cc_limit/airbnb%2520luxe.jpg"
                                alt="."
                                className="h-full w-full object-cover object-center hover:scale-105"
                            />
                        </div>
                        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg hover:scale-105">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4tb-_dCir6BmEqWSgDgeambRDp4DJYMG0ATDlKymveVjv7C3ad31Jy01zQhoJD8Y4w6o&usqp=CAU"
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