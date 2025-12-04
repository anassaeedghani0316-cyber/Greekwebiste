import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { FaPaintBrush, FaBullhorn, FaLaptopCode, FaBars, FaTimes } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";

const Banner = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <header className="w-full bg-white shadow">
                <div className="flex justify-between items-center h-[70px] px-5 md:px-10">

                    {/* Logo */}
                    <div className="navbar_logo">
                        <img src={logo} alt="Logo" className="w-[130px] md:w-[150px]" />
                    </div>

                    {/* Hamburger (Mobile Only) */}
                    <button
                        className="text-2xl lg:hidden"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>

                    {/* Desktop Menu */}
                    <nav className="hidden lg:flex">
                        <ul className="flex items-center gap-8 font-semibold text-gray-800">

                            <li className="hover:text-green-600 cursor-pointer">ABOUT</li>

                            {/* Services Dropdown */}
                            <li className="relative group cursor-pointer">
                                <div className="flex items-center gap-1 hover:text-green-500">
                                    SERVICES <FaChevronDown className="text-[12px]" />
                                </div>

                                {/* Dropdown */}
                              <div className="absolute left-0 top-full mt-2 bg-white rounded-md p-5 w-[400px] hidden group-hover:flex gap-10 z-50 border border-gray-200 shadow-lg">


                                    {/* Column 1 */}
                                    <ul className="flex flex-col gap-4">
                                        <li className="flex items-center gap-3 text-gray-700 hover:text-green-600 cursor-pointer">
                                            <FaPaintBrush className="text-xl" />
                                            <span className="text-[15px] font-medium">DESIGN</span>
                                        </li>

                                        <li className="flex items-center gap-3 text-gray-700 hover:text-green-600 cursor-pointer">
                                            <MdOutlineSupportAgent className="text-xl" />
                                            <span className="text-[15px] font-medium">TECH CONSULTANCY</span>
                                        </li>
                                    </ul>

                                    {/* Column 2 */}
                                    <ul className="flex flex-col gap-4">
                                        <li className="flex items-center gap-3 text-gray-700 hover:text-green-600 cursor-pointer">
                                            <FaBullhorn className="text-xl" />
                                            <span className="text-[15px] font-medium">MARKETING</span>
                                        </li>

                                        <li className="flex items-center gap-3 text-gray-700 hover:text-green-600 cursor-pointer">
                                            <FaLaptopCode className="text-xl" />
                                            <span className="text-[15px] font-medium">DEVELOPMENT</span>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li className="hover:text-green-600 cursor-pointer">PORTFOLIO</li>
                            <li className="hover:text-green-600 cursor-pointer">CONTACT</li>
                        </ul>
                    </nav>
                </div>

                {/* ===========================
                     Mobile / Tablet Menu
                ============================ */}
                <div
                    className={`lg:hidden bg-white border-t transition-all duration-300 overflow-hidden ${menuOpen ? 'h-auto py-5 px-5' : 'h-0'
                        }`}
                >
                    <ul className="flex flex-col gap-5 font-semibold text-gray-800">

                        <li className="hover:text-green-600 cursor-pointer">ABOUT</li>

                        {/* Services Accordion on Mobile */}
                        <details className="group">
                            <summary className="flex items-center justify-between cursor-pointer text-gray-700 hover:text-green-600">
                                SERVICES
                                <FaChevronDown className="text-[14px]" />
                            </summary>

                            <div className="mt-3 pl-3 border-l">
                                <ul className="flex flex-col gap-3">
                                    <li className="flex items-center gap-3">
                                        <FaPaintBrush className="text-lg" />
                                        DESIGN
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <MdOutlineSupportAgent className="text-lg" />
                                        TECH CONSULTANCY
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <FaBullhorn className="text-lg" />
                                        MARKETING
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <FaLaptopCode className="text-lg" />
                                        DEVELOPMENT
                                    </li>
                                </ul>
                            </div>
                        </details>

                        <li className="hover:text-green-600 cursor-pointer">PORTFOLIO</li>
                        <li className="hover:text-green-600 cursor-pointer">CONTACT</li>
                    </ul>
                </div>
            </header>
        </>
    );
};

export default Banner;
