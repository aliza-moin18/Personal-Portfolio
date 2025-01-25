"use client";

import { FaDesktop, FaHtml5, FaUserCircle, FaExternalLinkAlt, FaCode, FaFileCode, FaShareAlt, FaShoppingCart } from "react-icons/fa"; 
import { motion } from "framer-motion"; 

const services = [
  {
    num: '01',
    title: 'Responsive Web Design',
    description:
      "Crafting mobile-first, adaptive websites that seamlessly adjust to any screen size and device, ensuring an optimal user experience across all platforms.",
    icon: <FaDesktop size={40} />,
    href: '',
  },
  {
    num: '02',
    title: 'UI/UX Design & Prototyping',
    description:
      "Designing user-friendly and engaging interfaces with a strong emphasis on user experience, accessibility, and aligning with brand identity.",
    icon: <FaUserCircle size={40} />,
    href: '',
  },
  {
    num: '03',
    title: 'Multi-Page Website Development',
    description:
      "Building complex, multi-page websites with smooth navigation and a focus on delivering an intuitive and efficient user journey.",
    icon: <FaFileCode size={40} />,
    href: '',
  },
  {
    num: '04',
    title: 'Next.js & Tailwind CSS Development',
    description:
      "Leveraging Next.js for performance-driven, server-side rendered applications, paired with Tailwind CSS for scalable, responsive, and visually cohesive designs.",
    icon: <FaExternalLinkAlt size={40} />,
    href: '',
  },
  {
    num: '05',
    title: 'API Integration',
    description:
      "Connecting front-end applications to backend services and third-party APIs for real-time data exchange and dynamic content delivery.",
    icon: <FaShareAlt size={40} />,
    href: '',
  },
  {
    num: '06',
    title: 'HTML/CSS Development',
    description:
      "Writing clean, semantic HTML and modern CSS, utilizing preprocessors like Sass or LESS for maintainable and efficient styling.",
    icon: <FaHtml5 size={40} />,
    href: '',
  },
  {
    num: '07',
    title: 'JavaScript/TypeScript Development',
    description:
      "Implementing advanced functionality and interactivity using JavaScript and TypeScript to build robust, maintainable applications.",
    icon: <FaCode size={40} />,
    href: '',
  },
  {
    num: '08',
    title: 'E-commerce Website Development',
    description:
      "Building fully integrated, secure, and scalable e-commerce platforms that deliver seamless shopping experiences.",
    icon: <FaShoppingCart size={40} />,
    href: '',
  },
];

const Services = () => {
  return (
    <section className="min-h-[68vh] flex flex-col justify-center py-4 xl:py-8 relative mt-10 mb-20">
      <div className="container mx-auto text-center mb-11 px-6 lg:px-20 max-w-full md:max-w-4xl lg:max-w-7xl">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#993ca8] via-[#ad40bb] to-[#f6f6f6] text-transparent bg-clip-text mb-[-7px] mt-[-19px]">
          My Services
        </h2>
      </div>

      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.0, duration: 0.8, ease: 'easeIn' },
          }}
          className="flex flex-wrap gap-8 justify-center overflow-hidden transition-transform duration-500"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col justify-between p-4 bg-[#232329] rounded-md shadow-lg transition-transform duration-300 transform hover:scale-105 w-full sm:w-[45%] md:w-[30%] lg:w-[30%] h-[380px] sm:h-[320px]"
            >
              {/* Service Icon */}
              <div className="mb-4 flex justify-center">
                {service.icon}
              </div>
              <div className="text-4xl sm:text-3xl md:text-4xl font-extrabold text-outline text-transparent group-hover:text-white">
                {service.num}
              </div>
              <h2 className="mt-5 text-xl sm:text-lg md:text-2xl font-semibold text-[#d55fe5] leading-tight group-hover:text-[#f48fdf] transition-colors duration-500">
                {service.title}
              </h2>
              <p className="mt-4 text-xs sm:text-sm md:text-base text-white/100">{service.description}</p>
              <div className="border-b border-white/20 w-full mt-7"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;