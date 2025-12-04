import React from 'react'
import test from '../assets/test.png'
const Test = () => {
    return (
        <>
            <div className="banner bg-[#FFFFFF] h-[900px] w-full flex justify-center items-center gap-20">
                <div data-aos="fade-up" className="test_box bg-[#FFFFFF] h-[500px] w-[40%] ">
                    <h1 className="text-[40px] font-bold text-black">Tech Consultancy</h1><br />
                    <p className="text-[17px] text-[#A8B2C1]">We help organizations make use of technology to support their business goals. We collaborate with you to undertake idea validation, understand your requirements, and define scope. Our goal is to help you discover how our tech solutions can help you reduce business costs, create new revenue streams, streamline operations, and improve customer service.</p><br />
                    <div className="menu_box bg-[#FFFFFF] h-[300px] w-full">
                        <ul data-aos="fade-left" data-aos-delay="200" className="checklist list-none text-[20px] text-[#A8B2C1]">
                            <li data-aos="fade-left" data-aos-delay="200" className="flex items-center gap-2">
                                <i className="fas fa-check-circle text-green-500"></i>
                                Idea Validation
                            </li>
                            <li data-aos="fade-left" data-aos-delay="300" className="flex items-center gap-2">
                                <i className="fas fa-check-circle text-green-500"></i>
                                Defining Scope
                            </li>
                            <li data-aos="fade-left" data-aos-delay="400" className="flex items-center gap-2">
                                <i className="fas fa-check-circle text-green-500"></i>
                                Building concrete requirements
                            </li>
                            <li data-aos="fade-left" data-aos-delay="500" className="flex items-center gap-2">
                                <i className="fas fa-check-circle text-green-500"></i>
                                Technical evaluation
                            </li>
                            <li data-aos="fade-left" data-aos-delay="600" className="flex items-center gap-2">
                                <i className="fas fa-check-circle text-green-500"></i>
                                Resource Allocation
                            </li>
                            <li data-aos="fade-left" data-aos-delay="700" className="flex items-center gap-2">
                                <i className="fas fa-check-circle text-green-500"></i>
                                Project Management
                            </li>
                            <li data-aos="fade-left" data-aos-delay="800" className="flex items-center gap-2">
                                <i className="fas fa-check-circle text-green-500"></i>
                                Rapid Prototyping
                            </li>
                        </ul>
                    </div>
                </div>
                <div data-aos="zoom-in" className="test_box bg-[#FFFFFF] h-[400px] w-[40%]">
                    <img src={test} alt="Test" className="w-full h-full" />
                </div>
            </div>
        </>
    )
}

export default Test