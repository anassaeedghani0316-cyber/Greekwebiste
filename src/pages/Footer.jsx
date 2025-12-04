import React from 'react'
import logo from '../assets/logo.png'
import us from '../assets/us.png'
import pak from '../assets/pak.png'
import { GrLocation } from "react-icons/gr";
import { LuPhone } from "react-icons/lu";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { IoIosArrowRoundUp } from "react-icons/io";

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer_banner relative bg-[#202942] flex items-center h-[500px] w-full overflow-hidden">
                    {/* Curved Top Edge */}
                    <div className="absolute top-0 left-0 w-full h-[90px] bg-white rounded-b-[50%]"></div>

                    {/* Footer Content */}
                    <div className="footer_box w-[40%] h-[400px] ml-10 flex flex-col justify-center items-start p-6 relative ">
                        {/* Logo */}
                        <div className="logo mb-6">
                            <img src={logo} alt="Logo" className="w-[150px] h-auto" />
                        </div>

                        {/* Flag and Info */}
                        <div className="flag flex items-center gap-3">
                            <img src={us} alt="US Flag" className="w-[45px] h-[30px] " />
                            <h4 className="text-[#ADB5BD] text-[18px] font-semibold">USA - Head Office </h4>
                        </div>

                        {/* Address */}
                        <div className="location flex items-start gap-2 mt-3 text-gray-100 text-[15px] ">
                            <GrLocation className="text-[20px] mt-0.5 text-[#ADB5BD]" />
                            <p className="text-[#ADB5BD]">
                                172 Woodport Road, Suite A #442, <br />
                                Sparta, New Jersey, 07871, USA.
                            </p>
                        </div>
                        {/* Phone */}
                        <div className="flex items-center gap-2 mt-3 text-gray-100 text-[15px]">
                            <LuPhone className="text-[20px] text-[#ADB5BD]" />
                            <p className="font-medium text-[#6DC77A]">+1 (512) 900-6431</p>
                        </div>

                    </div>
                    <div className="footer_box w-full h-[400px] flex justify-between items-center p-6 relative">

                        {/* Left Section - Pakistan Info */}
                        <div className="flex flex-col items-start">

                            {/* Flag & Title */}
                            <div className="flex items-center gap-3">
                                <img src={pak} alt="Pakistan Flag" className="w-[45px] h-[30px] " />
                                <h4 className="text-[#ADB5BD] text-[18px] font-semibold">Pakistan</h4>
                            </div>

                            {/* Address */}
                            <div className="flex items-start gap-2 mt-4 text-gray-100 text-[15px]">
                                <GrLocation className="text-[20px] mt-0.5" />
                                <p className="text-[#ADB5BD]">
                                    Twinhub, 4th Floor, The Interlace, I-8 Markaz, <br />
                                    Islamabad
                                </p>
                            </div>

                            {/* Phone */}
                            <div className="flex items-center gap-2 mt-3 text-gray-100 text-[15px]">
                                <LuPhone className="text-[20px] text-[#ADB5BD]" />
                                <p className="font-medium text-[#6DC77A]">+92 333 5388734</p>
                            </div>

                        </div>

                        {/* Right Side Yellow Box */}
                        <div className="small_box h-[300px] w-[40%] flex justify-center items-center">
                            <div className="inner_box h-[200px] w-[80%]">
                                <h5 className="font-semibold text-[#ADB5BD]">Stay in Touch</h5>
                                <div className="flex items-center gap-2 mt-4 text-gray-100 text-[15px]">
                                    <a href="https://www.facebook.com/geekinate/" className="p-2 border border-gray-400 rounded-md hover:bg-green-500 flex justify-center items-center">
                                        <FiFacebook className="text-[20px]" />
                                    </a>
                                    <a href="https://www.instagram.com/geekinate/" className="p-2 border border-gray-400 rounded-md hover:bg-green-500 flex justify-center items-center">
                                        <FaInstagram className="text-[20px]" />
                                    </a>
                                    <a href="https://x.com/geekinate/" className="p-2 border border-gray-400 rounded-md hover:bg-green-500 flex justify-center items-center">
                                        <FiTwitter className="text-[20px]" />
                                    </a>
                                    <a href="https://www.linkedin.com/company/geekinate/" className="p-2 border border-gray-400 rounded-md hover:bg-green-500 flex justify-center items-center">
                                        <SlSocialLinkedin className="text-[20px]" />
                                    </a>
                                </div>


                            </div>
                        </div>

                    </div>

                </div>
                <hr />
                <div className="footer_bottom_box w-full h-[100px] bg-[#202942] flex justify-center items-center relative">

                    {/* Bottom Copyright */}
                    <div className="footer_bottom_text text-center text-[#ADB5BD] text-[15px]">
                        © 2025 Geekinate.
                    </div>

                    {/* Scroll-Up Floating Button */}
                    <button className="bg-[#48B958] hover:bg-green-500 text-white w-12 h-12 flex justify-center items-center absolute right-6 bottom-6 rounded">
                        <IoIosArrowRoundUp size={24} />
                    </button>
                </div>
            </footer>
        </>
    )
}

export default Footer