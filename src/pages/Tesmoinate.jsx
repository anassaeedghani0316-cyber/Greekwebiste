import React from 'react'
import { FaUserTie } from "react-icons/fa";
import { IoColorPaletteSharp } from "react-icons/io5";
import { MdOutlineComputer } from "react-icons/md";
import { RiMegaphoneFill } from "react-icons/ri";
import { motion } from "motion/react"

const Tesmoinate = () => {
    return (
        <>
            <div className="tesmoinate_container bg-[#FFFFFF] flex justify-center items-center h-[500px] gap-5]">
                <div className="inners bg-[#FFFFFF] h-[500px] w-full">
                    <h1 data-aos="fade-up" className="text-[40px] font-bold text-center">What we do?</h1><br />
                    <p data-aos="fade-up" className="text-[20px] text-[#A8B2C1] text-center">We are a team of <span className="text-green-500">Geeks</span> with great expertise</p>
                    <div className="boxes bg-[#F8F9FC] flex justify-center flex-row gap-5 h-[500px] mt-[50px]">
                        {/* Box 1 */}
                        <div className="sec_boxes bg-[#F8F9FC] h-[300px] w-[60%] flex flex-col justify-start items-center pt-10 mx-auto rounded-[10px] ">
                            {/* Diamond */}
                            <motion.div
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 1 }}
                                className="diamond bg-[#ECF4F0] w-[100px] h-[100px] rotate-45 rounded-[5px] flex justify-center items-center mb-5">
                                <FaUserTie className="text-green-500 text-[40px] -rotate-45" />
                            </motion.div>

                            {/* Inner content */}
                            <div className="inner_boxes flex flex-col justify-center items-center">
                                <h1 className="text-[20px] font-bold text-center text-[#6DC77A]">
                                    Tech-Consultancy
                                </h1>
                                <p className="text-[17px] text-[#A8B2C1] text-center">We help you research, discover and define the ideal technology solution to your needs.</p>

                            </div>
                        </div>

                        {/* Box 2 */}
                        <div className="sec_boxes bg-[#F8F9FC] h-[300px] w-[60%] flex flex-col justify-start items-center pt-10 mx-auto rounded-[10px] ">
                            {/* Diamond */}
                            <motion.div
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 1 }}
                                className="diamond bg-[#ECF4F0] w-[100px] h-[100px] rotate-45 rounded-[5px] flex justify-center items-center mb-5">
                                <IoColorPaletteSharp className="text-green-500 text-[40px] -rotate-45" />
                            </motion.div>

                            {/* Inner content */}
                            <div className="inner_boxes flex flex-col justify-center items-center">
                                <h1 className="text-[20px] font-bold text-center text-[#6DC77A]">
                                    Design
                                </h1>
                                <p className="text-[17px] text-[#A8B2C1] text-center">We use the industry best practices to design user centric software solutions.</p>

                            </div>
                        </div>
                        {/* Box 3 */}
                        <div className="sec_boxes bg-[#F8F9FC] h-[300px] w-[60%] flex flex-col justify-start items-center pt-10 mx-auto rounded-[10px] ">
                            {/* Diamond */}
                            <motion.div
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 1 }}
                                className="diamond bg-[#ECF4F0] w-[100px] h-[100px] rotate-45 rounded-[5px] flex justify-center items-center mb-5">
                                <MdOutlineComputer className="text-green-500 text-[40px] -rotate-45" />
                            </motion.div>

                            {/* Inner content */}
                            <div className="inner_boxes flex flex-col justify-center items-center">
                                <h1 className="text-[20px] font-bold text-center text-[#6DC77A]">
                                    Development
                                </h1>
                                <p className="text-[17px] text-[#A8B2C1] text-center">We convert your requirements into fully functional Web, Mobile, or SAAS applications.</p>

                            </div>
                        </div>
                        {/* Box 4 */}
                        <div className="sec_boxes bg-[#F8F9FC] h-[300px] w-[60%] flex flex-col justify-start items-center pt-10 mx-auto rounded-[10px] ">
                            {/* Diamond */}
                            <motion.div
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 1 }}
                                className="diamond bg-[#ECF4F0] w-[100px] h-[100px] rotate-45 rounded-[5px] flex justify-center items-center mb-5">
                                <RiMegaphoneFill className="text-green-500 text-[40px] -rotate-45" />
                            </motion.div>

                            {/* Inner content */}
                            <div className="inner_boxes flex flex-col justify-center items-center">
                                <h1 className="text-[20px] font-bold text-center text-[#6DC77A]">
                                    Digital Marketing
                                </h1>
                                <p className="text-[17px] text-[#A8B2C1] text-center">We help you reach the right audience, build brand loyalty, and drive measurable results.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <hr />


        </>
    )
}

export default Tesmoinate