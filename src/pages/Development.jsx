import React from 'react'
import development from '../assets/development.png'

const Development = () => {
    return (
        <>
            <div className="development_banner bg-[#FFFFFF] flex justify-center items-center h-[800px] w-full gap-20">
                <div data-aos="fade-left" className="development_boxes bg-[#FFFFFF] h-[400px] w-[40%]">
                    <h1 className="text-[40px] font-bold text-black">Development</h1><br />
                    <p className="text-[20px] text-[#A8B2C1]">Our geeks are highly skilled in developing cutting edge software solutions ranging from simple business or personal portfolio websites to blogs, e-commerce solutions, CMS, plugin development, API development/integrations and SAAS product development.</p><br />
                    <div className="menu_box bg-[#FFFFFF] h-[300px] w-full">
                        <ul data-aos="fade-left" data-aos-delay="200" className="checklist list-none text-[20px] text-[#A8B2C1]">
                            <li data-aos="fade-left" data-aos-delay="200" className="flex items-center gap-2">
                                <i className="fas fa-check-circle text-green-500"></i>
                                SAAS Product Development
                            </li>
                            <li data-aos="fade-left" data-aos-delay="300" className="flex items-center gap-2">
                                <i className="fas fa-check-circle text-green-500"></i>
                                Web App Development
                            </li>
                            <li data-aos="fade-left" data-aos-delay="400" className="flex items-center gap-2">
                                <i className="fas fa-check-circle text-green-500"></i>
                                Mobile App Development
                            </li>
                            <li data-aos="fade-left" data-aos-delay="500" className="flex items-center gap-2">
                                <i className="fas fa-check-circle text-green-500"></i>
                                E-Commerce Development
                            </li>
                            <li data-aos="fade-left" data-aos-delay="600" className="flex items-center gap-2">
                                <i className="fas fa-check-circle text-green-500"></i>
                                Custom Software Development
                            </li>
                            <li data-aos="fade-left" data-aos-delay="700" className="flex items-center gap-2">
                                <i className="fas fa-check-circle text-green-500"></i>
                                MVP Development
                            </li>
                            <li data-aos="fade-left" data-aos-delay="800" className="flex items-center gap-2">
                                <i className="fas fa-check-circle text-green-500"></i>
                                Games, AR & VR Development
                            </li>
                        </ul>
                    </div>
                </div>
                <div data-aos="zoom-in" className="development_boxes bg-[#FFFFFF] h-[400px] w-[40%]">
                    <img src={development} alt="Development" className="w-full h-full" />
                </div>
            </div>
            <hr />
        </>
    )
}

export default Development