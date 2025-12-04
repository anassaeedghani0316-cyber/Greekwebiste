import React from 'react'
import contactimage from '../assets/contactimage.png'

const Mangement = () => {
    return (
        <>
            <div data-aos="fade-up" className="management_banner bg-[#FFFFFF] flex flex-col justify-center items-center h-[800px] w-full gap-10">
                <h1 className="text-[36px] font-semibold text-black text-center">Get In Touch!</h1>
                <p className="text-[18px]  text-[#A8B2C1]">We love to talk to the people, listen to their requirements and team up to refine and <span className="text-green-600 font-semibold">Geekinate</span> their tech needs. </p>

                <div className="mangement_box flex justify-center items-center gap-20 w-full">
                    <div data-aos="zoom-in" className="banner_inner bg-[#FFFFFF] h-[400px] w-[40%] ">
                        <img src={contactimage} alt="Contactimage" className="w-full h-full" />
                    </div>

                    {/* Form */}
                    <div className="banner_inner bg-[#FFFFFF] h-[500px] w-[50%] flex justify-center items-center">
                        <div data-aos="zoom-in" className="inner_form_box bg-[#FFFFFF] w-full flex justify-center border border-gray-200">
                            <form className="bg-[#FFFFFF] p-6 h-[400px] w-[90%] flex flex-col justify-center  ">
                                {/* Name Field*/}
                                <div className="flex flex-col mb-4">
                                    <label className="block mb-2 font-semibold">Your Name <span className="text-red-500">*</span>:</label>
                                    <input type="text" className="w-full p-2 border border-gray-300 focus:border-green-500 rounded outline-none" required />
                                </div>
                                {/* Email Field*/}
                                <div className="flex flex-col mb-4">
                                    <label className="block mb-2 font-semibold">Your Email <span className="text-red-500">*</span>:</label>
                                    <input type="email" className="w-full p-2 border border-gray-300 focus:border-green-500 rounded outline-none" required />
                                </div>
                                {/* Message Field*/}
                                <div className="flex flex-col mb-4">
                                    <label className="block mb-2 font-semibold">Message <span className="text-red-500">*</span>: </label>
                                    <textarea rows="3" className="w-full p-2 border border-gray-300 focus:border-green-500 rounded outline-none resize-none" required ></textarea>
                                </div>
                                {/* Submit Button */}
                                <button type="submit" className="w-full bg-[#48B958] text-white py-2 rounded hover:bg-green-700 font-semibold">Send Message </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>



        </>
    )
}

export default Mangement