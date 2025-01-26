"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
   <div className="w-[425px] h-[410px] relative overflow-hidden mr-12">
      <motion.div
         initial={{ opacity: 0 }}
         animate={{
            opacity: 1,
            transition: { delay: 1, duration: 0.4, ease: "easeIn"}
        }}
        >
      <motion.div 
         initial={{ opacity: 0 }}
         animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.8, ease: "easeInOut"}
        }}
         className="w-[79%] h-[190%] xl:w-[480px] xl:h-[480px] mix-blend-lighten">

    <Image
      src="/profile.jpeg"
      priority
      quality={100}
      fill
      alt=""
      className="object-cover rounded-[20px]"
      />
    </motion.div>

    <motion.div
        className="absolute inset-0 rounded-[200px] border-8 border-[#a131af] opacity-30"
        style={{
        boxShadow: "0px 0px 20px 10px rgba(191, 65, 229, 0.5)",
      }}
      animate={{
      opacity: [0.3, 0.5, 0.7, 0.5, 0.3],
      transition: {
      repeat: Infinity,
      duration: 2.5,
      ease: "easeInOut",
       },
     }}
     ></motion.div>
    
  </motion.div>
</div>
 
   );
};

export default Photo;
