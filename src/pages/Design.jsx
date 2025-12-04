import React from 'react'
import designer from '../assets/designer.png'
const Design = () => {
    return (
        <>
            <div className="design_banner bg-[#F8F9FC] flex justify-center items-center h-[800px] w-full gap-20">
                <div data-aos="zoom-in" className="design_boxes_images bg-[#F8F9FC] h-[400px] w-[40%]">
                    <img src={designer} alt="Designer" className="w-full h-full" />
                </div>
                <div data-aos="fade-down-left" className="design_boxes bg-[#F8F9FC] h-[400px] w-[40%]">
                    <h1 className="text-[40px] font-bold text-center text-black">Design</h1><br />
                    <p className="text-[17px] text-[#A8B2C1]">We design delightful experiences that build user trust. Developing tailored solutions for your workflow from scratch, or enhancing an already existing product.</p><br />
                    <div className="menu_box bg-[#F8F9FC] h-[300px] w-full">
                        <ul data-aos="fade-left" className="checklist list-none text-[20px] text-[#A8B2C1]">
                            <li className="flex items-center gap-2">
                                <i className="fas fa-check-circle text-green-500"></i>
                                Research & Analysis
                            </li>
                            <li className="flex items-center gap-2">
                                <i className="fas fa-check-circle text-green-500"></i>
                                Defining Scope
                            </li>
                            <li className="flex items-center gap-2">
                                <i className="fas fa-check-circle text-green-500"></i>
                                Modern User Interfaces
                            </li>
                            <li className="flex items-center gap-2">
                                <i className="fas fa-check-circle text-green-500"></i>
                                Focus On User Experience (UX)
                            </li>
                            <li className="flex items-center gap-2">
                                <i className="fas fa-check-circle text-green-500"></i>
                                Design Consistency
                            </li>
                            <li className="flex items-center gap-2">
                                <i className="fas fa-check-circle text-green-500"></i>
                                Human-Centered Design
                            </li>
                            <li className="flex items-center gap-2">
                                <i className="fas fa-check-circle text-green-500"></i>
                                Prototyping
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}

export default Design