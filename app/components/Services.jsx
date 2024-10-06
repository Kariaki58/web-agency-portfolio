import Image from "next/image";
import svgComputerBinary from '../assets/svg-computer-binary.png';
import svgIcon from '../assets/svg-icon.png';
import svgLast from '../assets/svg-last.png';
import layer from '../assets/layer.png';
import svgVector from '../assets/svg-vector.png';
import { FaLongArrowAltRight } from "react-icons/fa";


const Services = () => {
    return (
      <section className="bg-[#0e122760] px-4 md:px-10 py-20 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="border border-gray-800 text-white rounded-full px-6 py-2 inline-block text-sm font-semibold tracking-widest uppercase">
              Services
            </p>
            <h2 className="text-4xl md:text-5xl text-white mt-5 font-bold leading-tight md:max-w-lg mx-auto">
              Explore Our Best Services
            </h2>
          </div>
  
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            {/* Web Design */}
            <div className="rounded-lg border border-[#66FCF1] p-8 bg-black hover:bg-[#2d3748] transition-all duration-300 shadow-lg">
                <Image
                    src={svgIcon}
                    alt="web design"
                    className="mx-auto mb-10"
                />
              <h3 className="text-2xl font-bold text-white mb-4">Web Design</h3>
              <p className="text-gray-400">
                Craft stunning, user-friendly websites that captivate your audience and drive engagement. Our designs not only look great but also deliver seamless user experiences that turn visitors into loyal customers.
              </p>
              <button className="flex text-[#66FCF1] items-center gap-2 mt-4 mx-auto">
                VIEW DETAILS <FaLongArrowAltRight />
              </button>
            </div>
  
            {/* Branding Design */}
            <div className="rounded-lg border border-gray-700 p-8 bg-black hover:bg-[#2d3748] transition-all duration-300 shadow-lg">
              <Image 
                src={layer}
                alt="branding design"
                className="mx-auto mb-10"
              />
              <h3 className="text-2xl font-bold text-white mb-4">Branding Design</h3>
              <p className="text-gray-400">
                Build a powerful and cohesive brand identity that sets you apart. From logo creation to visual storytelling, we ensure your brand speaks with a clear, consistent voice that resonates with your target audience.
              </p>
              <button className="flex text-[#66FCF1] items-center gap-2 mt-4 mx-auto">
                VIEW DETAILS <FaLongArrowAltRight />
              </button>
            </div>
  
            {/* Web Development */}
            <div className="rounded-lg border border-gray-700 p-8 bg-black hover:bg-[#2d3748] transition-all duration-300 shadow-lg">
              <Image
                src={svgComputerBinary}
                alt="web development"
                className="mx-auto mb-10"
              />
              <h3 className="text-2xl font-bold text-white mb-4">Web Development</h3>
              <p className="text-gray-400">
                Develop fast, responsive, and scalable websites tailored to your business needs. Our team ensures that your website performs flawlessly across all devices, providing a smooth and secure online experience.
              </p>
              <button className="flex text-[#66FCF1] items-center gap-2 mt-4 mx-auto">
                VIEW DETAILS <FaLongArrowAltRight />
              </button>
            </div>
  
            {/* Content Strategy */}
            <div className="rounded-lg border border-gray-700 p-8 bg-black hover:bg-[#2d3748] transition-all duration-300 shadow-lg">
              <Image
                src={svgVector}
                alt="content strategy"
                className="mx-auto mb-10"
              />
              <h3 className="text-2xl font-bold text-white mb-4">Content Strategy</h3>
              <p className="text-gray-400">
                Create content that connects, informs, and inspires. Our content strategies are designed to engage your audience, boost your online presence, and drive meaningful conversions through compelling storytelling.
              </p>
              <button className="flex text-[#66FCF1] items-center gap-2 mt-4 mx-auto">
                VIEW DETAILS <FaLongArrowAltRight />
              </button>
            </div>
  
            {/* Digital Marketing */}
            <div className="rounded-lg border border-gray-700 p-8 bg-black hover:bg-[#2d3748] transition-all duration-300 shadow-lg">
              <Image
                src={svgIcon}
                alt="digital marketing"
                className="mx-auto mb-10"
              />
              <h3 className="text-2xl font-bold text-white mb-4">Digital Marketing</h3>
              <p className="text-gray-400">
                Reach the right audience at the right time with tailored digital marketing solutions. From SEO to PPC campaigns, we help you increase visibility, attract new customers, and grow your business in the digital world.
              </p>
              <button className="flex text-[#66FCF1] items-center gap-2 mt-4 mx-auto">
                VIEW DETAILS <FaLongArrowAltRight />
              </button>
            </div>
  
            {/* Social Media Management */}
            <div className="rounded-lg border border-gray-700 p-8 bg-black hover:bg-[#2d3748] transition-all duration-300 shadow-lg">
              <Image
                src={svgLast}
                alt="social media management"
                className="mx-auto mb-10"
              />
              <h3 className="text-2xl font-bold text-white mb-4">Social Media Management</h3>
              <p className="text-gray-400">
                Leverage the power of social media to drive targeted traffic and boost brand awareness. Our data-driven social advertising campaigns deliver measurable results, increasing engagement and conversions.
              </p>
              <button className="flex text-[#66FCF1] items-center gap-2 mt-4 mx-auto">
                VIEW DETAILS <FaLongArrowAltRight />
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;
  