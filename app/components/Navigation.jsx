"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navigation = () => {
    const [isActive, setIsActive] = useState("HOME");
    const [menuOpen, setMenuOpen] = useState(false);

    const handleClick = (active, path) => {
        console.log(active);
        setIsActive(active);
        // You can add the logic to navigate to `path` if needed.
        setMenuOpen(false); // Close menu when an item is clicked
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="px-2 md:px-10 py-5 flex justify-between items-center text-white font-bold text-sm relative">
            {/* Logo */}
            <li className="tracking-wider text-2xl list-none">LOGO</li>

            {/* Hamburger Icon */}
            <div className="lg:hidden">
                <button onClick={toggleMenu} className="focus:outline-none">
                    {menuOpen ? (
                        <FaTimes size={24} />
                    ) : (
                        <FaBars size={24} />
                    )}
                </button>
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex gap-10 border border-gray-700 p-2 rounded-full items-center">
                {["HOME", "SERVICES", "WORKS", "ABOUT", "BLOG"].map((item) => (
                    <li
                        key={item}
                        onClick={() => handleClick(item, `/${item.toLowerCase()}`)}
                        className={`${
                            isActive === item ? "text-[#66FCF1] bg-[#5f6969]" : ""
                        } cursor-pointer hover:bg-[#5f6969] py-2 px-5 rounded-full flex items-center`}
                    >
                        {item}
                    </li>
                ))}
            </ul>

            {/* Contact Button */}
            <li className="hidden xl:block">
                <button
                    className="border border-[#66FCF1] py-3 px-7 rounded-full hover:bg-[#66FCF1] hover:text-black"
                    onClick={() => handleClick("CONTACT US", "/contact")}
                >
                    CONTACT US
                </button>
            </li>

            {/* Mobile/Tablet Navigation (Slide-in Menu) */}
            {menuOpen && (
                <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "-100%" }}
                    transition={{ duration: 0.5 }}
                    className="fixed top-0 left-0 w-[70%] h-full bg-black p-5 z-50 xl:hidden"
                >
                    <ul className="flex flex-col gap-5">
                        <li className="tracking-wider text-2xl list-none">LOGO</li>
                        {["HOME", "SERVICES", "WORKS", "ABOUT", "BLOG"].map((item) => (
                            <li
                                key={item}
                                onClick={() => handleClick(item, `/${item.toLowerCase()}`)}
                                className={`${
                                    isActive === item ? "text-[#66FCF1]" : ""
                                } cursor-pointer text-lg hover:text-[#66FCF1] leading-10`}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                    <div className="mt-10">
                        <button
                            className="border border-[#66FCF1] py-3 px-7 rounded-full w-full hover:bg-[#66FCF1] hover:text-black"
                            onClick={() => handleClick("CONTACT US", "/contact")}
                        >
                            CONTACT US
                        </button>
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default Navigation;
