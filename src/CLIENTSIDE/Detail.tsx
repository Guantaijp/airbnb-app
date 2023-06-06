import React from 'react'
import homeImage from '../images/home.jpg';
import homeImag from '../images/home1.jpg';
function Detail() {
    return (
        <div>
            <div className="flex flex-col  min-h-screen ">
                <h1 className="text-2xl font-extrabold text-gray-900 mt-2 text-center ">Karen Resoult</h1>
                <div className="mx-auto mt-4 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
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


                <div className=" flex flex-col mx-20 mt-4">
                    <h1 className="text-2xl font-extrabold text-gray-900">What Karen Resoult offers</h1>
                    <div className="flex flex-row">
                        <div className="border-2 border-gray-600 rounded-lg m-2" style={{ width: 'fit-content' }}>
                            <p className="text-lg  text-gray-900 m-2 text-center ">Karen Resoult</p>
                        </div>
                        <div className="border-2 border-gray-600 rounded-lg m-2" style={{ width: 'fit-content' }}>
                            <p className="text-lg  text-gray-900 m-2 text-center ">Karen Resoult</p>
                        </div>
                        <div className="border-2 border-gray-600 rounded-lg m-2" style={{ width: 'fit-content' }}>
                            <p className="text-lg  text-gray-900 m-2 text-center ">Karen Resoult</p>
                        </div>
                        <div className="border-2 border-gray-600 rounded-lg m-2" style={{ width: 'fit-content' }}>
                            <p className="text-lg  text-gray-900 m-2 text-center ">Karen Resoult</p>
                        </div>
                        <div className="border-2 border-gray-600 rounded-lg m-2" style={{ width: 'fit-content' }}>
                            <p className="text-lg  text-gray-900 m-2 text-center ">Karen Resoult</p>
                        </div>
                    </div>

                    <div className="flex flex-row">
                        <div className="border-2 border-gray-600 rounded-lg m-2" style={{ width: 'fit-content' }}>
                            <p className="text-lg  text-gray-900 m-2 text-center ">Karen Resoult</p>
                        </div>
                        <div className="border-2 border-gray-600 rounded-lg m-2" style={{ width: 'fit-content' }}>
                            <p className="text-lg  text-gray-900 m-2 text-center ">Karen Resoult</p>
                        </div>
                        <div className="border-2 border-gray-600 rounded-lg m-2" style={{ width: 'fit-content' }}>
                            <p className="text-lg  text-gray-900 m-2 text-center ">Karen Resoult</p>
                        </div>
                        <div className="border-2 border-gray-600 rounded-lg m-2" style={{ width: 'fit-content' }}>
                            <p className="text-lg  text-gray-900 m-2 text-center ">Karen Resoult</p>
                        </div>
                        <div className="border-2 border-gray-600 rounded-lg m-2" style={{ width: 'fit-content' }}>
                            <p className="text-lg  text-gray-900 m-2 text-center ">Karen Resoult</p>
                        </div>
                    </div>
                </div>

                {/* About  */}

                <div className="flex flex-col mx-20 mt-4">
                    <h1 className="text-2xl font-extrabold text-gray-900">About Karen Resoult</h1>

                    <div className="my-3">
                        <p className="text-lg text-gray-900  text-left w-1/2 my-0">t is a long established fact that a reader will be
                            distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is
                            that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                            making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as
                            their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various
                            versions have evolved over the years,
                            sometimes by accident, sometimes on purpose (injected humour and the like).
                        </p>
                    </div>

                </div>


            </div>


        </div>
    )
}

export default Detail