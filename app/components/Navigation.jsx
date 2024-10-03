"use client";

import { IoIosArrowDown } from "react-icons/io";
import { useState } from 'react';

const Navigation = () => {
    // State for tracking active menu item
    const [isActive, setIsActive] = useState("HOME");

    // State for tracking if the dropdown is open or closed
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleClick = (active) => {
        setIsActive(active);
    };

    // Function to toggle the dropdown open/close state
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const MouseOver = () => {
        setIsDropdownOpen(true)
    };
    const MouseOut = () => {
        setIsDropdownOpen(false)
    };

    return (
        <nav className="p-10">
            <ul className="flex justify-between items-center text-white font-bold text-sm relative">
                <ii className="tracking-wider text-2xl">LOGO</ii>
                
                <ul className="flex gap-5 border border-gray-900 p-2 rounded-full items-center">
                    <li onClick={() => handleClick('HOME')} className={`
                        ${isActive === 'HOME'? 'text-[#66FCF1] bg-[#5f6969]' : ''}
                        cursor-pointer hover:bg-[#5f6969] py-2 px-5 rounded-full
                    `}>
                        HOME
                    </li>
                    
                    <li onClick={() => handleClick('SERVICES')} className={`
                        ${isActive === 'SERVICES'? 'text-[#66FCF1] bg-[#5f6969]' : ''}
                        cursor-pointer hover:bg-[#5f6969] py-2 px-5 rounded-full
                        flex items-center
                    `}>
                        SERVICES
                    </li>
                    
                    <li onClick={() => handleClick('WORKS')} className={`
                        ${isActive === 'WORKS'? 'text-[#66FCF1] bg-[#5f6969]' : ''}
                        cursor-pointer hover:bg-[#5f6969] py-2 px-5 rounded-full
                    `}>
                        WORKS
                    </li>

                    {/* Toggle dropdown on click */}
                    <li 
                    onMouseOver={MouseOver}
                    className={`
                        ${isActive === 'PAGES'? 'text-[#66FCF1] bg-[#5f6969]' : ''}
                        cursor-pointer hover:bg-[#5f6969] py-2 px-5 rounded-full
                        flex items-center
                    `} id="menu-button" aria-expanded={isDropdownOpen ? "true" : "false"} aria-haspopup="true">
                        PAGES
                        <IoIosArrowDown className="ml-2 text-xl" />
                    </li>
                    
                    <li onClick={() => handleClick('BLOG')} className={`
                        ${isActive === 'BLOG'? 'text-[#66FCF1] bg-[#5f6969]' : ''}
                        cursor-pointer hover:bg-[#5f6969] py-2 px-5 rounded-full
                        flex items-center
                    `}>
                        BLOG
                    </li>
                    {isDropdownOpen && (
                    <div onMouseOver={() => isDropdownOpen(true)} className="absolute right-96 z-10 mt-2 w-56 rounded-md top-12 bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
                        <div className="py-1" role="none">
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem">Account settings</a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem">Support</a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem">License</a>
                        </div>
                    </div>
                    )}
                </ul>
                <li>
                    <button className="border border-[#66FCF1] py-3 px-7 rounded-full hover:bg-[#66FCF1] hover:text-black">
                        CONTACT US
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
