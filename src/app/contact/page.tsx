"use client";
import React from 'react';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}  
      exit={{ opacity: 0 }}  
      transition={{ duration: 0.9, ease: 'easeInOut' }} 
      className="flex flex-col items-center justify-center gap-0 my-8"
    >
      <div className='relative px-10'>
        <div className='flex gap-30'>
          <div className='flex flex-col gap-[20px] mt-6'>
            <h1 className='text-7xl font-bold bg-gradient-to-r from-[#9615db] to-white text-transparent bg-clip-text ml-[7px]'>
              Let&apos;s Work Together
            </h1>
            <p className='mr-20 ml-[12px]'>
              I&apos;m currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.
            </p>

            <div className='flex flex-col gap-[20px] text-white text-[21px]'>
              <div className='flex items-center mt-6 gap-[15px] ml-[15px]'>
                <FaEnvelope className='text-md' />
                <span>Email: alizamoin222@gmail.com</span>
              </div>

              <div className='flex items-center mt-[-19px] gap-[15px] ml-[15px]'>
                <FaPhoneAlt className='text-md' />
                <span>Phone: +92 317 388888</span>
              </div>
            </div>
          </div>

          <form className='flex flex-col items-start gap-3'>
            <label htmlFor="" className='text-white text-[24px] font-medium'>Your Name</label>
            <input
              type="text"
              placeholder='Enter your name'
              name='text'
              className='border-none w-[700px] h-[54px] pl-[20px] rounded-[5px] bg-[#32323c] text-[#A0a0a0] text-[19px] font-outfit'
            />

            <label htmlFor="" className='text-white text-[24px] font-medium'>Your Email</label>
            <input
              type="email"
              placeholder='Enter your email'
              name='email'
              className='border-none w-[700px] h-[54px] pl-[20px] rounded-[5px] bg-[#32323c] text-[#A0a0a0] text-[19px] font-outfit'
            />

            <label htmlFor="" className='text-white text-[24px] font-medium'>Write your message here</label>
            <textarea
              name="message"
              placeholder='Enter your message'
              className="border-none w-[690px] h-[130px] p-[15px] rounded-[5px] bg-[#32323c] text-[#A0a0a0] text-[19px] font-outfit"
            />

            <button
              type="submit"
              className="border-none rounded-[6px] text-[#efefef] bg-[#9d42b9] text-[22px] py-[10px] px-[30px] mb-[50px] cursor-pointer transition-transform duration-300 hover:scale-110 mt-2"
            >
              Submit now
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;