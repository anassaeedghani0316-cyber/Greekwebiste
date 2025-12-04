import React from 'react';
import amazon from '../assets/amazon.png';
import react1 from '../assets/react1.png';
import mongodb from '../assets/mongodb.png';
import node from '../assets/node.png';
import next from '../assets/next.png';
import unity from '../assets/unity.png';

const TechLogos = () => {
    return (
        <>
            <div className="tech bg-white flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-10 p-4">
                <div className="tech_boxes w-[40%] sm:w-[30%] md:w-[15%] p-2">
                    <img src={amazon} alt="Amazon" className="w-full h-auto object-contain" />
                </div>
                <div className="tech_boxes w-[40%] sm:w-[30%] md:w-[15%] p-2">
                    <img src={react1} alt="React" className="w-full h-auto object-contain" />
                </div>
                <div className="tech_boxes w-[40%] sm:w-[30%] md:w-[15%] p-2">
                    <img src={mongodb} alt="MongoDB" className="w-full h-auto object-contain" />
                </div>
                <div className="tech_boxes w-[40%] sm:w-[30%] md:w-[15%] p-2">
                    <img src={node} alt="NodeJS" className="w-full h-auto object-contain" />
                </div>
                <div className="tech_boxes w-[40%] sm:w-[30%] md:w-[15%] p-2">
                    <img src={next} alt="NextJS" className="w-full h-auto object-contain" />
                </div>
                <div className="tech_boxes w-[40%] sm:w-[30%] md:w-[15%] p-2">
                    <img src={unity} alt="Unity" className="w-full h-auto object-contain" />
                </div>
            </div>
            <br />
            <hr />

        </>
    );
};

export default TechLogos;
