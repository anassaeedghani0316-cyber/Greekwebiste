import React from 'react'
import digital from '../assets/digital.png'

const Digital = () => {
    return (
        <>
            <div className="digital_banner  bg-[#F8F9FC] flex justify-center items-center h-[800px] w-full gap-20">
                <div data-aos="zoom-in-up" className="digital_boxes bg-[#F8F9FC] h-[400px] w-[40%]">
                    <img src={digital} alt="Digital" className="w-full h-full" />

                </div>
                <div data-aos="fade-left" className="digital_boxes bg-[#F8F9FC] h-[400px] w-[40%]">
                    <h1 className="text-[40px] font-bold text-black">Digital Marketing</h1><br />
                    <p className="text-[20px] text-[#A8B2C1]">We offer a range of services to help you reach your target audience, boost engagement, and increase conversions, all guided by in-depth analysis. Our team of experienced digital marketing specialists can help you with:</p><br />
                    <div className="menu_box bg-[#F8F9FC] h-[300px] w-full">
                        <ul data-aos="fade-left" data-aos-delay="200" className="checklist list-none text-[20px] text-[#A8B2C1]">
                            <li data-aos="fade-left" data-aos-delay="200" className="flex items-center gap-2">
                                <i className="fas fa-check-circle text-green-500"></i>
                                Social Media Management
                            </li>
                            <li data-aos="fade-left" data-aos-delay="300" className="flex items-center gap-2">
                                <i className="fas fa-check-circle text-green-500"></i>
                               Search Engine Optimization (SEO)
                            </li>
                            <li data-aos="fade-left" data-aos-delay="400" className="flex items-center gap-2">
                                <i className="fas fa-check-circle text-green-500"></i>
                                Content Marketing
                            </li>
                            <li data-aos="fade-left" data-aos-delay="500" className="flex items-center gap-2">
                                <i className="fas fa-check-circle text-green-500"></i>
                                Facebook Ads Management
                            </li>
                            <li data-aos="fade-left" data-aos-delay="600" className="flex items-center gap-2">
                                <i className="fas fa-check-circle text-green-500"></i>
                               Google Ads Management
                            </li>
                            <li data-aos="fade-left" data-aos-delay="700" className="flex items-center gap-2">
                                <i className="fas fa-check-circle text-green-500"></i>
                               Tiktok Ads Management
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}

export default Digital