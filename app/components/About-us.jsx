import Image from 'next/image';
import image1 from '../assets/image-1.jpg';
import image2 from '../assets/image-2.jpg';
import image3 from '../assets/image-3.jpg';
import image4 from '../assets/image-4.jpg';

const AboutUs = () => {
  return (
    <section className="bg-gray-950 px-10 py-20 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center">
          <p className="border border-gray-800 text-[#66FCF1] rounded-full px-6 py-2 inline-block text-sm font-semibold tracking-widest uppercase">
            About Us
          </p>
          <h1 className="text-4xl md:text-5xl text-white mt-5 font-bold leading-tight md:max-w-lg mx-auto">
            We Are More Than A Web Agency
          </h1>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row items-start gap-12 mt-16 lg:mt-20">
          {/* Image Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="relative">
                <Image
                  src={image1}
                  alt="About Us 1"
                  width={550}
                  className="mb-8 rounded-lg shadow-lg bg-gray-500 opacity-30 w-full"
                />
                <div className="p-4 absolute bottom-0 opacity-100 pointer-events-none bg-opacity-30">
                  <h1 className="border-b-2 pb-3 font-bold text-white text-2xl">Our Mission</h1>
                  <p className="pt-3 text-white text-sm tracking-wider leading-5">
                    At Blinq, we drive digital growth through impactful web design and strategic marketing solutions. 
                    We craft experiences that captivate, engage, and convert, helping your brand reach new heights.
                  </p>
                </div>
              </div>
              <div className="relative">
                <Image
                  src={image2}
                  alt="About Us 2"
                  width={550}
                  className="rounded-lg shadow-lg bg-gray-500 opacity-30 w-full"
                />
                <div className="p-4 absolute bottom-0 opacity-100 pointer-events-none bg-opacity-30">
                  <h1 className="border-b-2 pb-3 font-bold text-white text-2xl">Equipment</h1>
                  <p className="pt-3 text-white text-sm tracking-wider leading-5">
                    We leverage the latest technologies and industry-leading tools to deliver innovative, 
                    high-performing digital solutions that keep your brand ahead of the competition.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="relative">
                <Image
                  src={image3}
                  alt="About Us 3"
                  width={450}
                  className="mb-8 rounded-lg shadow-lg bg-gray-500 opacity-30 w-full"
                />
                <div className="p-4 absolute bottom-0 opacity-100 pointer-events-none bg-opacity-30">
                  <h1 className="border-b-2 pb-3 font-bold text-white text-2xl">Core Values</h1>
                  <p className="pt-3 text-white text-sm tracking-wider leading-5">
                    Integrity, creativity, and innovation define us. We’re committed to building lasting partnerships, 
                    ensuring transparency, and delivering measurable success.
                  </p>
                </div>
              </div>
              <div className="relative">
                <Image
                  src={image4}
                  alt="About Us 4"
                  width={450}
                  className="rounded-lg shadow-lg bg-gray-500 opacity-30 w-full"
                />
                <div className="p-4 absolute bottom-0 opacity-100 pointer-events-none bg-opacity-30">
                  <h1 className="border-b-2 pb-3 font-bold text-white text-2xl">Our Vision</h1>
                  <p className="pt-3 text-white text-sm tracking-wider leading-5">
                    We aim to be your trusted partner in digital transformation, 
                    empowering brands to achieve sustainable online growth and stand out in the crowded digital landscape.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="lg:max-w-lg text-gray-300 space-y-6">
            <h2 className="text-3xl font-semibold text-white">Our Philosophy</h2>
            <p className="leading-relaxed">
              At Blinq, we believe in a results-driven approach. Every solution we offer is tailored to meet the unique
              needs of your business. From comprehensive web design to strategic SEO and digital marketing, we blend creativity with 
              data-driven insights to create solutions that not only look great but deliver real, measurable results.
            </p>
            <p className="leading-relaxed">
              We’re here to turn your vision into reality, with a focus on quality, performance, and sustainable growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
