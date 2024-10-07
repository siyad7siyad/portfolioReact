import React from "react";
import about from "../assets/about.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500">Me</span>
      </h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.div 
          whileInView={{opacity:1,x:0}}
          initial={{opacity:0,x:-100}}
          transition={{duration:0.5}}
          className="flex items-center justify-center">
            <img className="rounded-2xl" src={about} alt="about" />
          </motion.div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <motion.p
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:100}}
            transition={{duration:0.5}}
             className="my-2 max-w-xl py-6">
              I bring a strong foundation in JavaScript, complemented by a deep
              understanding of core concepts, data structures, and algorithms.
              My expertise spans across the MERN stack, including MongoDB,
              Node.js, Express.js, and ReactJS, as well as proficiency in
              PostgreSQL and version control using GitHub. Over the course of my
              career, I have successfully completed numerous projects that
              showcase my ability to transform innovative ideas into functional,
              user-friendly applications. With a proven track record of
              delivering robust software solutions, I thrive in environments
              that challenge my skills and creativity. My passion for software
              development drives me to continuously enhance my expertise and
              stay abreast of industry trends and best practices. I believe in
              writing clean, maintainable code and utilizing the latest
              technologies to build scalable applications.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
