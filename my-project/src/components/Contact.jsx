import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl font-bold"
      >
        Get In Touch
      </motion.h1>
      <div className="flex flex-col items-center justify-center text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4 w-full max-w-md leading-relaxed"
        >
          <strong>Address:</strong> Bharkath Manzil, Pittupeedika, Koduvayur,
          Palakkad, Kerala <br />
          <strong>Postcode:</strong> 678501 <br />
          <strong>Mobile:</strong> 7736711807 <br />
          <strong>Email:</strong> muhammedsiyad@17127@gmail.com
        </motion.p>
      </div>
    </div>
  );
};

export default Contact;
