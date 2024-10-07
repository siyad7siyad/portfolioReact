import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <div className=" mt-1 flex flex-col items-center justify-center">
      <div className="border-b border-neutral-700 pb-8 w-3/4 mt-0 md:w-1/2">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="my-20 text-center text-4xl"
        >
          Education
        </motion.h2>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="space-y-6 text-lg leading-relaxed text-white text-center"
        >
          <p>
            <span className="font-semibold">2018 - 10th (96%)</span> - Mount
            Seena English School, Pathiripala
          </p>
          <p>
            <span className="font-semibold">2018-2020 - +2 (75%)</span> - Ghss
            Koduvayur - Computer Science
          </p>
          <p>
            <span className="font-semibold">2020-2023 - Degree (74%)</span> -
            Barathiyar University - BSc Computer Science
          </p>
          <p>
            <span className="font-semibold">
              2023-2024 - Self-taught Developer
            </span>{" "}
            - Brototype - MERN Stack Development
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;
