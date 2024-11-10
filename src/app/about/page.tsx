"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';


const about = {
  title: "About Me",
  description: "Hello, I am Aliza Moin, a committed web developer with expertise in HTML, CSS, Next.js, and TypeScript. With a keen eye for detail and a smooth design, my specialty is creating user-friendly, responsive websites. Each project offers an opportunity to satisfy customer requirements and stretch creative boundaries, producing work that is both professional and influential.",

  info: [
    { fieldName: "Name :-", fieldValue: "Aliza Moin" },
    { fieldName: "Email :-", fieldValue: "alizamoin222@gmail.com" },
    { fieldName: "Phone :-", fieldValue: "+92 317 38888" },
    { fieldName: "Nationality :-", fieldValue: "Pakistan" }, 
    { fieldName: "Language :-", fieldValue: "English, Urdu" },
  ],
};

const education = {
  icons: "/icons",
  title: "My education",
 items: [
  {
    institution: "BOARD OF SECONDARY EDUCATION HYDERABAD SINDH",
    degree: "Marticulation",
    duration: "2018 - 2020 "
  },
  {
    institution : "BOARD OF INTERMEDIATE EDUCATION HYDERABAD SINDH",
    degree: "Intermediate",
    duration: "2020 - 2022"
  },
  {
    institution: "University Of Sindh, Jamshoro, Pakistan",
    degree: "BACHELOR&apos;S IN DEVELOPMENT COMMUNICATION. (Undergraduate)",
    duration: "2023 - 2027  ( Expected Graduation )"
  },
  {
    institution: "Governor Sindh Initiative For Artificial Intelligence Cloud",
    degree: "Certified AI, Metaverse, And Web 3.0 Developer And Solopreneur",
    duration: "2024 - 2025"
  },
 ],
};


const skills = {
  title: "My Skills",
  skillset: [
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <FaCss3 />, name: "CSS" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <FaFigma />, name: "Figma" },
  ],
};


const experience = {
  icons: "/icons",
  title: "My experiences",
 items: [
  { projects: "● Developed responsive web applications using HTML, CSS, and JavaScript, enhancing user engagement across devices. Leveraged Next.js for improved performance and SEO, ensuring seamless navigation and accessibility." },
  { projects: "● Created dynamic components using Next.js, following modular design principles for improved scalability and maintainability. Utilized Tailwind CSS to create visually cohesive styles that enhance user experience." },
 ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from  "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from '@radix-ui/react-scroll-area';
import { motion } from 'framer-motion';

 
const About = () => { 
  return (
    <motion.div 
    initial = {{ opacity: 0 }}
    animate = {{
      opacity: 1, 
      transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
    }}
    className='min-h-[40vh] flex items-center justify-center py-10 xl:py-0 mt-10'
    >
      <div className='container mx-auto'>
        <Tabs
        defaultValue='about'
        className='flex flex-col xl:flex-row gap-20'
        >

    <TabsList className='flex flex-col w-[850px] mx-w-[50px] mx-auto xl:mx-0 gap-3'>

           {/* About Me */}
           <TabsTrigger value= "about" className="px-2 py-2 rounded-[20px] bg-gray-600 hover:bg-[#bd59d3] text-white transition-colors text-lg font-semibold">
            About Me  </TabsTrigger> 

          {/* Skill */}
            <TabsTrigger value= "skills" className="px-4 py-2 rounded-[20px] bg-gray-600   hover:bg-[#cc77d7] text-white text-lg font-semibold">
             Skill </TabsTrigger>  

          {/* Education */}
            <TabsTrigger value= "education" className="px-4 py-2 rounded-[20px] bg-gray-600   hover:bg-[#b24bc0] text-white text-lg font-semibold"> 
             Education </TabsTrigger>  

          {/* Experience */}
             <TabsTrigger value= "experience" className="px-4 py-2 rounded-[20px] bg-gray-600   hover:bg-[#cc77d7] text-white text-lg font-semibold"> 
             Experience </TabsTrigger> 

          </TabsList>

 {/* Tab Content */}
     <div className='min-h-[70vh] w-full'>  

 {/* About */} 
          <TabsContent value= "about" className='w-full text-center xl:text-center'>
             <div className='flex flex-col gap-4'>
              <h3 className='text-6xl font-bold bg-gradient-to-r from-[#74317e] via-[#cc77d7] to-[#f6e0ef] text-transparent bg-clip-text'> {about.title} </h3>
              <p className="max-w-[700px] text-white mx-auto xl:mx-0 mb-5"> {about.description} </p>
              <ul className="grid grid-cols-1 gap-y-3 mx-auto xl:mx-0">
                {about.info.map((item, index) => (
                    <li
                    key={index}
                    className='flex items-center justify-center xl:justify-start gap-3'>
                      <span className='text-[#cc77d7]'> {item.fieldName} </span>
                      <span className='text-xl'> {item.fieldValue} </span>
                    </li>
                  ))}
                </ul>
             </div>
          </TabsContent>


 {/* Skills */}
           <TabsContent value= "skills" className='w-ful h-full'> 
              <div className="flex flex-col gap-4">
                <div className="text-center xl:text-center">
                  <h3 className='text-6xl font-bold bg-gradient-to-r from-[#74317e] via-[#cc77d7] to-[#f6e0ef] text-transparent bg-clip-text mb-6'> {skills.title} </h3>
                </div>

              <ul className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:gap-4'>
                  {skills.skillset.map((skill, index) => (
                    <li key={index}> 
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex flex-col justify-center items-center group text-center group'>
                          <div className='text-6xl group-hover:text-purple-500 transition-all duration-300'> {skill.icon}  </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="mt-2 text-lg text-black"> {skill.name} </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>  
                  </li>
                  ))}
                </ul>
              </div>
            </TabsContent>  


{/* Experience */}
        <TabsContent value= "experience" className='w-full'>
          <div className='flex flex-col gap-7 text-center xl:text-center'>
            <h3 className='text-6xl font-bold bg-gradient-to-r from-[#74317e] via-[#cc77d7] to-[#f6e0ef] text-transparent bg-clip-text '> {experience.title} </h3>

              <ScrollArea className='h-[500px]'>
                <ul className='grid grid-cols-1 1g:grid-cols-2 gap-4'>
                  {experience.items.map((item, index) => (
                      <li key={index}
                      className="bg-[#232329] h-[184px] py-2 px-11 rounded-xl flex flex-col  justify-center items-centerlg:items-start gap-2 text-[17px]">
                          <p> {item.projects} </p>
                      </li>
                    ))}
                </ul>
              </ScrollArea>
             </div>
        </TabsContent> 


  {/* Education */}
        <TabsContent value= "education" className='w-full'>
          <div className='flex flex-col gap-7 text-center xl:text-center'>
            <h3 className='text-6xl font-bold bg-gradient-to-r from-[#74317e] via-[#cc77d7] to-[#f6e0ef] text-transparent bg-clip-text'> {education.title} </h3>

              <ScrollArea className='h-[800px]'>
                <ul className='grid grid-cols-1 1g:grid-cols-2 gap-4'>
                  {education.items.map((item, index) => (
                      <li key={index}
                      className="bg-[#232329] h-auto p-10 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-2">
                      <span className="text-[#cc77d7]"> {item.duration} </span>
                      <h3 className="text-xl max-w-full min-h-[15px] text-center lg:text-left"> {item.degree} </h3>
                        <p> {item.institution} </p>
                    </li>
                    ))}
                </ul>
              </ScrollArea> 
             </div>
        </TabsContent> 
          </div>
        </Tabs>
      </div> 
    </motion.div>
  );
};

export default About;