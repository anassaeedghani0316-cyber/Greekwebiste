import React from 'react'
import sortlist from '../assets/sortlist.png'
import awspartner from '../assets/awspartner.png'
import clutch from '../assets/clutch.png'
import shopifypartner from '../assets/shopifypartner.png'
import googlepartner from '../assets/googlepartner.png'
import cloudways from '../assets/cloudways.png'
const Component = () => {
    return (
        <>
            <div className="component_banner relative bg-[#1E2746] text-gray-300 flex flex-col items-center justify-center h-[600px] w-full">
                {/* Curved top and bottom edges */}
                <div className="absolute top-0 left-0 w-full h-[120px] bg-[#F5F5F5] rounded-b-[50%]"></div>
                <div className="absolute bottom-0 left-0 w-full h-[120px] bg-[#F5F5F5] rounded-t-[50%]"></div>

                {/* Content */}
                <div className="container flex flex-col items-center justify-center gap-12 mt-10">
                    <h1 className="text-[36px] font-semibold text-center">
                        Collaborators and Partners
                    </h1>
                    {/* Images */}
                    <div className="component_images flex flex-wrap justify-center items-center gap-16">
                        <img src={sortlist} alt="Sortlist" className="w-[120px] h-auto " />
                        <img src={awspartner} alt="AWS Partner" className="w-[120px] h-auto " />
                        <img src={clutch} alt="Clutch" className="w-[120px] h-auto " />
                        <img src={shopifypartner} alt="Shopify Partner" className="w-[140px] h-auto " />
                        <img src={googlepartner} alt="Google Partner" className="w-[140px] h-auto " />
                        <img src={cloudways} alt="Cloudways" className="w-[140px] h-auto " />
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}

export default Component