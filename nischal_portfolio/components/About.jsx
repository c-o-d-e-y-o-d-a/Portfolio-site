
"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const About = () => {
  return (
    <motion.div
      initial="hidden"
      id="about"
      animate="visible"

      className="flex flex-row items-center justify-center px-20 md:px-48 mt-32 w-full z-[20] mb-20"
    >
      <div className="h-full w-full flex flex-col gap-4 justify-center m-auto text-start" >


        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl me-8 font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            <div className=" text-3xl mb-4 md:text-lg">I am</div> {"   "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Nischal Gautam{" "}
            </span>
            
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a Full Stack Software Engineer with experience in Website,
           development , Mobile development and Ui/Ux design. Check out my projects and skills.
        </motion.p>
       
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className=" h-full ms-4 flex justify-center w-full items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default About;
