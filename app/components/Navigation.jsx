"use client";

import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

const Navigation = () => {
    const [isActive, setIsActive] = useState("HOME");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleClick = (active, path) => {
        setIsActive(active);
        // You can add the logic to navigate to `path` if needed.
    };

    const handleDropdownHover = (isHovering) => {
        setIsDropdownOpen(isHovering);
    };

    return (
        <nav className="p-10">
            <ul className="flex justify-between items-center text-white font-bold text-sm relative">
                <li className="tracking-wider text-2xl">LOGO</li>

                <ul className="flex gap-5 border border-gray-900 p-2 rounded-full items-center">
                    <li
                        onClick={() => handleClick("HOME", "/")}
                        className={`${
                            isActive === "HOME" ? "text-[#66FCF1] bg-[#5f6969]" : ""
                        } cursor-pointer hover:bg-[#5f6969] py-2 px-5 rounded-full`}
                    >
                        HOME
                    </li>

                    <li
                        onClick={() => handleClick("SERVICES", "/services")}
                        className={`${
                            isActive === "SERVICES" ? "text-[#66FCF1] bg-[#5f6969]" : ""
                        } cursor-pointer hover:bg-[#5f6969] py-2 px-5 rounded-full flex items-center`}
                    >
                        SERVICES
                    </li>

                    <li
                        onClick={() => handleClick("WORKS", "/works")}
                        className={`${
                            isActive === "WORKS" ? "text-[#66FCF1] bg-[#5f6969]" : ""
                        } cursor-pointer hover:bg-[#5f6969] py-2 px-5 rounded-full`}
                    >
                        WORKS
                    </li>

                    {/* Dropdown logic */}
                    <li
                        className={`${
                            isActive === "PAGES" ? "text-[#66FCF1] bg-[#5f6969]" : ""
                        } cursor-pointer hover:bg-[#5f6969] py-2 px-5 rounded-full flex items-center relative`}
                        onMouseEnter={() => handleDropdownHover(true)}
                        onMouseLeave={() => {
                            setTimeout(() => {
                                return handleDropdownHover(false)
                            }, 2000)
                        }}
                    >
                        PAGES
                        <IoIosArrowDown className="ml-2 text-xl" />

                        {/* Dropdown menu */}
                        {isDropdownOpen && (
                            <div
                                className="absolute z-10 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none top-10"
                                role="menu"
                            >
                                <div className="py-1" role="none">
                                    <a
                                        href="#"
                                        onClick={() => handleClick("Account settings", "/account-settings")}
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        role="menuitem"
                                    >
                                        Account settings
                                    </a>
                                    <a
                                        href="#"
                                        onClick={() => handleClick("Support", "/support")}
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        role="menuitem"
                                    >
                                        Support
                                    </a>
                                    <a
                                        href="#"
                                        onClick={() => handleClick("License", "/license")}
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        role="menuitem"
                                    >
                                        License
                                    </a>
                                </div>
                            </div>
                        )}
                    </li>

                    <li
                        onClick={() => handleClick("BLOG", "/blog")}
                        className={`${
                            isActive === "BLOG" ? "text-[#66FCF1] bg-[#5f6969]" : ""
                        } cursor-pointer hover:bg-[#5f6969] py-2 px-5 rounded-full flex items-center`}
                    >
                        BLOG
                    </li>
                </ul>

                <li>
                    <button
                        className="border border-[#66FCF1] py-3 px-7 rounded-full hover:bg-[#66FCF1] hover:text-black"
                        onClick={() => handleClick("CONTACT US", "/contact")}
                    >
                        CONTACT US
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
