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
      className="flex flex-col items-center justify-center gap-8 my-8 px-4 sm:px-6 lg:px-10"
    >
      <div className="relative w-full max-w-screen-xl mx-auto">
        <div className="flex flex-col xl:flex-row gap-12">

          {/* Left section */}
          <div className="flex flex-col gap-6 mt-6 w-full xl:w-[50%]">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-[#9615db] to-white text-transparent bg-clip-text">
              Let&apos;s Work Together
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-white">
              I&apos;m currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact me anytime.
            </p>

            <div className="flex flex-col gap-6 text-white text-sm sm:text-lg">
              <div className="flex items-center gap-6">
                <FaEnvelope className="text-md" />
                <span>Email: alizamoin222@gmail.com</span>
              </div>

              <div className="flex items-center gap-6">
                <FaPhoneAlt className="text-md" />
                <span>Phone: +92 317 388888</span>
              </div>
            </div>
          </div>

          {/* Right section (Form) */}
          <form className="flex flex-col gap-4 w-full xl:w-[50%]">
            <label htmlFor="name" className="text-white text-xl font-medium">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              className="border-none w-full sm:w-[600px] lg:w-[700px] h-[54px] pl-[20px] rounded-[5px] bg-[#32323c] text-[#A0a0a0] text-lg"
            />

            <label htmlFor="email" className="text-white text-xl font-medium">
              Your Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              className="border-none w-full sm:w-[600px] lg:w-[700px] h-[54px] pl-[20px] rounded-[5px] bg-[#32323c] text-[#A0a0a0] text-lg"
            />

            <label htmlFor="message" className="text-white text-xl font-medium">
              Write your message here
            </label>
            <textarea
              name="message"
              placeholder="Enter your message"
              className="border-none w-full sm:w-[600px] lg:w-[690px] h-[130px] p-[15px] rounded-[5px] bg-[#32323c] text-[#A0a0a0] text-lg"
            />

            <button
              type="submit"
              className="border-none rounded-[6px] text-[#efefef] bg-[#9d42b9] text-lg py-3 px-6 mt-4 cursor-pointer transition-transform duration-300 hover:scale-110"
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
