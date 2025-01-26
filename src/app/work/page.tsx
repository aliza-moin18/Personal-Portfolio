"use client";

import React from 'react';
import { motion } from 'framer-motion';

const data = [
   {
      id: 0,
      title: "EasyBuy Marketplace Builder Hackathon",
      desc: "A hackathon project built using Nextjs, Sanity, and Tailwind css to create a marketplace platform.",
      tags: [
         { name: "Live Demo", href: "https://easy-buy-marketplace-builder-hackathon-3rw4.vercel.app/" },
         { name: "GitHub", href: "https://github.com/aliza-moin18/EasyBuy-Marketplace-Builder-Hackathon" }
      ],
   },
   {
      id: 1,
      title: "Blog Website",
      desc: "A TechWorld blog website built with Nextjs and Tailwind CSS. The blog allows users to post articles and explore different topics.",
      tags: [
         { name: "Live Demo", href: "https://next-js-milestione-3-dynamic-blog-a37l.vercel.app/" },
         { name: "GitHub", href: "https://github.com/aliza-moin18/NextJs_Milestione_3_Dynamic_Blog" }
      ],
   },
   {
      id: 2,
      title: "UI/UX Hackathon",
      desc: "A UI/UX hackathon project where I designed a user-friendly interface for a furniture platform.",
      tags: [
             { name: "Live Demo", href: "https://hackathon-figma-template-mu.vercel.app" },
             { name: "GitHub", href: "https://github.com/aliza-moin18/Hackathon_Figma-Template " }
      ],
   },
   {
      id: 3,
      title: "Travel Website",
      desc: "A travel-themed website designed using Nextjs and Tailwind Css. The site provides information on various travel destinations, trip planning, and helps users to keep track of their travel itinerary with a countdown timer for each trip.",
      tags: [
             { name: "Live Demo", href: "https://milestone-2-travel-website.vercel.app/" },
             { name: "GitHub", href: "https://github.com/aliza-moin18/Milestone_2_travel_website" }
      ],
   },
   {
      id: 4,
      title: "Company Portfolio",
      desc: "A static portfolio website built with pure HTML and CSS. The portfolio showcases a personal or companys work, featuring a clean and professional design to highlight projects, services, and contact information.",
      tags: [
         { name: "Live Demo", href: "https://github.com/aliza-moin18/HTML-CSS-Assignment/tree/main/FINAL%20CSS%20ASSIGNMENT" },
         { name: "GitHub", href: "https://html-css-assignment-44kc.vercel.app/" }
      ],
   },
   {
      id: 6,
      title: "YouTube Clone",
      desc: "A YouTube clone built using HTML, CSS. This clone includes a user-friendly interface, simulating the core functionalities of the popular video streaming platform.",
      tags: [
         { name: "Live Demo", href: "https://youtube-clone-1zed.vercel.app/" },
         { name: "GitHub", href: "https://github.com/aliza-moin18/Youtube-Clone." }
      ],
   },
];

const Projects = () => {
   return (
     <div id="projects" className='container px-4 sm:px-6 lg:px-12 pt-12'>
       <h2 className="text-5xl font-bold bg-gradient-to-r from-[#993ca8] via-[#ad40bb] to-[#f6f6f6] text-transparent bg-clip-text mb-10 text-center"> 
         My Recent Works
       </h2>

       <div className='grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
          {data.map((el) => (
            <motion.div
              key={el.id}
              initial={{ opacity: 0, y: 20 }}  
              animate={{ opacity: 1, y: 0 }}   
              transition={{ delay: 0.1 * el.id, duration: 0.6, ease: "easeOut" }} 
            >
              <div className="bg-[#232329] p-6 rounded-xl shadow-lg hover:scale-105 transition-all h-full flex flex-col">
                <h3 className="text-2xl font-semibold text-[#d55fe5]">{el.title}</h3>
                <p className="mt-2 text-gray-300 flex-grow">{el.desc}</p>
                <div className="mt-6 flex gap-4 flex-wrap justify-start">
                  {el.tags.map((tag, index) => (
                    <a key={index} href={tag.href} target="_blank" rel="noopener noreferrer">
                      <button className="px-4 py-2 text-white bg-[#9d42b9] rounded-lg hover:bg-[#a45eb0] transition-all">
                        {tag.name}
                      </button>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
       </div>
     </div>
   );
};

export default Projects;
