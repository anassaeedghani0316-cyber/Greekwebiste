import React from 'react'
import hero from '../assets/hero.png'
const Header = () => {
    return (
        <>
            <div data-aos="fade-up" className="hero_banner flex justify-center items-center gap-10 flex-col sm:flex-row sm:bg-[#FFFFFF] mt-7">
                <div className="boxes h-[400px] w-[90%] sm:w-[45%]">
                    <div className="inner">
                        <h1 className="text-[40px] font-bold ">We are here to <span className="text-green-500">Geekinate</span> your needs</h1><br />
                        <p className="text-[20px] text-[#A8B2C1]">Geekinate is the process of getting your technology needs fulfilled by our team of Geeks.</p><br />
                        <button data-aos="fade-up" data-aos-delay="200" className="bg-red-700 px-5 py-2 text-[20px] rounded-md hover:bg-[#66A36F] cursor-pointer">Let's connect</button>
                    </div>
                </div>
                <div className="boxes  h-[400px] w-[90%] sm:w-[45%] sm:h-[300px]">
                    <img src={hero} alt="Hero" className="w-full h-full" />
                </div>

            </div>

        </>
    )
}

export default Header