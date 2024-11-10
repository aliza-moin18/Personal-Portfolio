"use client";
import { motion } from "framer-motion";

const services = [
  {
    num: '01',
    title: 'Frontend Development',
    description:
      "I design responsive and visually appealing websites using Next.js, HTML, CSS, and JavaScript. I specialize in scalable, component-based applications that are fast, SEO-friendly, and optimized for performance across all devices, ensuring seamless navigation tailored to your business needs.",
    href: '',
  },
  {
    num: '02',
    title: 'UI/UX Design',
    description:
      'Creating intuitive, visually appealing interfaces with a strong focus on user experience and seamless interaction. I prioritize user-centered design principles to ensure ease of navigation and engagement, crafting designs that align with brand identity and enhance user satisfaction across all devices.',
    href: '',
  },
  {
    num: '03',
    title: 'SEO Optimization',
    description:
      'I build web applications with a focus on SEO best practices, ensuring they are easily discoverable by search engines. From semantic HTML to optimized meta tags, I work to enhance the online visibility of the applications I create.',
    href: '',
  },
];


const Services = () => {
  return (
    <section className="min-h-[68vh] flex flex-col justify-center py-4 xl:py-8">
      <div className="container mx-auto text-center mb-11">
        <h2 className="text-6xl font-bold bg-gradient-to-r from-[#993ca8] via-[#ad40bb] to-[#f6f6f6] text-transparent bg-clip-text mb-[-12px] mt-[-19px]"> My Services </h2>
      </div>

      <div className="container mx-auto ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.0, duration: 0.8, ease: 'easeIn' },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-between p-5 bg-[#232329] rounded-md shadow-lg transition-transform duration-300 transform hover:scale-105"
              >
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-white">
                    {service.num}
                 </div>
                <h2 className="mt-5 text-5xl font-semibold text-[#d55fe5] leading-tight group-hover:text-[#f48fdf] transition-colors duration-500">
                  {service.title}  
                </h2>
                <p className="mt-4 text-white/100">{service.description} </p>
                <div className="border-b border-white/20 w-full mt-7"> </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;