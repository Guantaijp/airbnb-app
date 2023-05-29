import { Link } from 'react-router-dom';
import React, { useEffect, useRef } from 'react';
import lottie, { AnimationItem } from 'lottie-web';
import animation from '../images/animation.json';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Input, Space } from 'antd';



const Signup = () => {

    const animationContainer = useRef<HTMLDivElement>(null);
    const [passwordVisible, setPasswordVisible] = React.useState(false);

    useEffect(() => {
        let anim: AnimationItem | null = null;

        if (animationContainer.current) {
            anim = lottie.loadAnimation({
                container: animationContainer.current,
                animationData: animation,
                renderer: 'svg',
                loop: true,
            });
        }

        return () => {
            if (anim) {
                anim.destroy();
            }
        };
    }, []);



    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen ">
                <div className=" bg-white rounded-lg shadow-sm">
                    <div className="flex flex-row items-center justify-center w-full mt-4">
                        <div ref={animationContainer} id="animation"></div>

                        <div className="flex flex-col items-center justify-center w-full">
                            <div className="text-center">
                                <p className="mt-2 text-3xl font-extrabold text-gray-900">Sign up for an account</p>
                            </div>
                            <div className="mt-8 max-w-[300px]">
                                <div className="w-full space-y-6">
                                <Input
                                        placeholder="Name"
                                        style={{ border : "1px solid #95873C" }}
                                    />
                                    <Input
                                        placeholder="Email"
                                        style={{ border : "1px solid #95873C" }}
                                    />
                                  <Input.Password
                                        placeholder="Password"
                                        style={{ border : "1px solid #95873C" }}
                                        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                    />
                                       <Input.Password
                                        placeholder="Confirm Password"
                                        style={{ border : "1px solid #95873C" }}
                                        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                    />
                                    <div className="w-full">
                                        <button type="submit" className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-[#95873C] border border-transparent rounded-sm hover:bg-[#95873C] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#95873C]">Sign in</button>
                                    </div>
                                    {/* if no account sign up page */}
                                    <div className="flex items-center justify-center w-full pb-4">
                                        <p className="text-sm text-black">
                                            Already have an account?
                                        </p>

                                        <Link to="/login"
                                            className="ml-1 text-sm text-[#95873C] hover:text-[#95873C]">
                                            Login
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup