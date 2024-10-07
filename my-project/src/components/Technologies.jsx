import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import {
  SiMongodb,
  SiExpress,
  SiRedux,
  SiTailwindcss,
  SiJavascript,
  SiBootstrap,
} from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { animate, motion } from "framer-motion";

const iconVarients = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVarients(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
          <p className="text-center mt-2">React</p>
        </motion.div>
        <motion.div
          variants={iconVarients(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMongodb className="text-7xl text-green-500" />
          <p className="text-center mt-2">MongoDB</p>
        </motion.div>
        <motion.div
          variants={iconVarients(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <DiNodejs className="text-7xl text-green-600" />
          <p className="text-center mt-2">Node.js</p>
        </motion.div>
        <motion.div
          variants={iconVarients(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiExpress className="text-7xl text-gray-700" />
          <p className="text-center mt-2">Express.js</p>
        </motion.div>
        <motion.div
          variants={iconVarients(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiRedux className="text-7xl text-purple-600" />
          <p className="text-center mt-2">Redux</p>
        </motion.div>
        <motion.div
          variants={iconVarients(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiTailwindcss className="text-7xl text-light-blue-400" />
          <p className="text-center mt-2">Tailwind CSS</p>
        </motion.div>
        <motion.div
          variants={iconVarients(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiJavascript className="text-7xl text-yellow-400" />
          <p className="text-center mt-2">JavaScript</p>
        </motion.div>
        <motion.div
          variants={iconVarients(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiBootstrap className="text-7xl text-info" />
          <p className="text-center mt-2">Bootstrap</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;