import React from 'react';
import Image from 'next/image';
import design from '../assets/bg-design.png';

const Header = () => {
  return (
    <header className="relative bg-black h-full text-white overflow-hidden p-5 xl:px-10 xl:py-20">
        <div className="container mx-auto px-4 py-8 flex flex-col mt-10 xl:mt-0 xl:justify-center h-full">
            {/* Background images */}
            <Image
              className="absolute -left-60 top-0 opacity-10 md:-left-40 lg:-left-60 xl:-left-60"
              src={design}
              alt="Background Design"
              width={1000}
              height={1000}
            />
            <Image
              className="absolute -right-60 top-10 opacity-10 md:-right-40 lg:-right-60 xl:-right-60"
              src={design}
              alt="Background Design"
              width={1000}
              height={1000}
            />
            <div className="relative z-10 text-center">
              <button className="border border-gray-700 text-[#66FCF1] font-bold p-2 rounded-full text-xs mb-4 md:p-3 md:text-sm">
                BEST WEB DESIGN AGENCY
              </button>
              <h1 className="tracking-wider text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4">
                Your Partner in Web Design & Digital Growth
              </h1>
              <h1 className="tracking-wider text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                Find, Engage, Convert
              </h1>
              <div className="flex justify-center items-center">
                <p className="tracking-wider text-sm md:text-md mb-4 md:w-[600px] lg:w-[800px] text-gray-400 leading-5">
                  At Blinq, we empower brands through innovative digital solutions. Our expert team crafts tailored strategies to elevate your online presence and boost engagement. From web design and SEO to social media management and digital marketing, we're dedicated to delivering measurable growth and results for your business.
                </p>
              </div>
              <button className="bg-[#66FCF1] text-black font-bold p-3 rounded-lg transition duration-300 text-sm md:p-4 md:text-md">
                GET FREE CONSULTATION
              </button>
            </div>
        </div>
    </header>
  );
}

export default Header;
