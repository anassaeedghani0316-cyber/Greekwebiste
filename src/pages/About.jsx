import React from "react";
import aboutimage from "../assets/aboutimage.png";

const About = () => {
    return (
        <>
            <div className="about_banner bg-white flex flex-col md:flex-row justify-center items-center gap-10 md:gap-16 py-10 md:py-14 ">

                {/* Image Section */}
                <div data-aos="zoom-in" className="about_image_box bg-white h-[260px] sm:h-[300px] md:h-[350px] sm:w-[80%] md:w-[45%]">
                    <img src={aboutimage} alt="AboutImage" className="w-full h-full" />
                </div>

                {/* Text Section */}
                <div data-aos="fade-down" data-aos-delay="300" className="about_text_box bg-white w-[90%] sm:w-[80%] md:w-[50%] "
                >
                    <div className="inner_main">

                        {/* Heading */}
                        <h1 className="text-[28px] sm:text-[32px] md:text-[36px] font-bold text-center">
                            Who we are?
                        </h1>

                        <br />

                        {/* Paragraph */}
                        <p className="text-[16px] sm:text-[18px] md:text-[20px] text-[#A8B2C1] leading-relaxed">
                            We are a team of geeks that provides exceptional technology solutions to
                            businesses, startups, and enterprises.<br />
                            <br />
                            Our vision is to spread the power of technology across the globe and help
                            businesses grow by delivering innovative software solutions.<br />
                            <br />
                            Following are the top priorities for us at{" "}
                            <span className="text-green-500 font-semibold">Geekinate</span> with an aim
                            to build long term successful business relationships with our clients.
                        </p>

                        <br />

                        {/* Checklist */}
                        <ul className="checklist list-none 
                            text-[16px] sm:text-[18px] md:text-[20px] text-[#A8B2C1]">
                            <li className="flex items-center gap-2">
                                <i className="fas fa-check-circle text-green-500"></i>
                                Quality
                            </li>
                            <li className="flex items-center gap-2">
                                <i className="fas fa-check-circle text-green-500"></i>
                                Customer Satisfaction
                            </li>
                            <li className="flex items-center gap-2">
                                <i className="fas fa-check-circle text-green-500"></i>
                                Efficient Communication
                            </li>
                            <li className="flex items-center gap-2">
                                <i className="fas fa-check-circle text-green-500"></i>
                                Professional Services & Support
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <hr />
        </>
    );
};

export default About;
