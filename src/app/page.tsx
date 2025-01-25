"use client";

import { Button } from '@/components/ui/button';
import { FiDownload } from "react-icons/fi";
import Social from '@/components/ui/Social';
import Photo from '@/components/ui/Photo';
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
     <section className='h-full pt-0 pb-0 xl:pt-1 xl:pb-1 ml-14 mb-40'>
      <div className='container mx-auto h-full px-2 xl:px-7'> 
        <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-12 xl:pb-5'>

          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            className='text-center xl:text-left order-2 xl:order-none'
          >
            <h1 className='h1 mb-5'> 
             Hello I&apos;m  <br /> 
            <span className='bg-gradient-to-r from-[#bd1ce1] via-[#9d36ab] to-[#e3c9e6] text-transparent bg-clip-text'> Aliza Moin </span> </h1>
            <p className='max-w-[540px] mb-6 text-white/90'>
            I&apos;m a web developer with expertise in both front-end and back-end technologies. I build responsive, high-performance websites that are visually compelling and functionally solid. Let&apos;s collaborate to bring your project to life.
            </p>
         
         <div className='flex flex-col xl:flex-row items-center gap-10'>
         <motion.a 
                 href="/My CV file.pdf"
                 whileHover={{ scale: 1.1 }} 
                 whileTap={{ scale: 0.95 }}>
        
            <Button
                variant="outline"
                size="lg"
               className='uppercase flex items-center gap-1 bg-[#932daa] border-[#9615db] text-purple-700 hover:border-[#932daa] hover:bg-[#bd59d3] hover:text-white transition-colors px-5 mt-4' >
               <span className='text-white p-3'> Download CV </span> 
               <FiDownload className='text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#9615db] via-[#a066ff] to-white'/>
             </Button>
          </motion.a>

          <div className='mb-1 xl:mb-2'>
          <Social containerStyles="flex gap-4" iconStyles="w-10 h-10 border border-[#9615db] rounded-[6px] flex justify-center items-center text-[#9615db text-base hover:bg-[#333333] hover:text-white hover:transition-all duration-580 mt-6"/>  
         </div>
       </div>
     </motion.div>

 {/* Animated Photo Section */}
           <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 1, duration: 1, ease: "easeOut" }}
            className='order-1 xl:order-none mb-5 xl:mb-0'>
             <Photo />
           </motion.div>

        </div>
      </div>
    </section>
    </>
  );
};

export default Home;