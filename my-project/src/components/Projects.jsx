import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white">
      <div className="w-11/12 md:w-3/4 lg:w-2/3 border-b border-neutral-700 pb-8">
        {/* Title Animation */}
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="my-12 text-center text-5xl font-bold"
        >
          Projects
        </motion.h2>

        {/* Projects Container */}
        <div className="space-y-12">
          {/* YouTube Clone */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold">YouTube Clone</h3>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
              <strong>Technologies Used:</strong> HTML, CSS, JavaScript,
              Bootstrap
            </p>
            <p>
              <strong>Project Overview:</strong> A fully functional YouTube
              clone that mimics the interface and basic features of YouTube,
              including a video player, responsive design, and search
              functionality.
            </p>
            <p>
              <strong>Features:</strong> Video listing and playback, responsive
              design for seamless mobile and desktop experiences, basic search
              functionality to filter videos.
            </p>
          </motion.div>

          {/* Zomato Clone */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold">Zomato Clone</h3>
            <p className="mt-2">
              <strong>Technologies Used:</strong> HTML, CSS, JavaScript,
              Bootstrap
            </p>
            <p>
              <strong>Project Overview:</strong> A food delivery service clone
              replicating the Zomato user interface with responsive layouts,
              showcasing restaurant listings and food menus.
            </p>
            <p>
              <strong>Features:</strong> Restaurant listing with search and
              filter options, responsive design for mobile and desktop,
              simulated cart and order features.
            </p>
          </motion.div>

          {/* Tesla Responsive Project */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="text-2xl font-semibold">Tesla Responsive Project</h3>
            <p className="mt-2">
              <strong>Technologies Used:</strong> HTML, CSS, JavaScript,
              Bootstrap
            </p>
            <p>
              <strong>Project Overview:</strong> A responsive Tesla website
              demonstrating product highlights, car configurations, and
              showcasing Tesla's sleek design, fully responsive for mobile and
              desktop views.
            </p>
            <p>
              <strong>Features:</strong> Fully responsive landing page, dynamic
              content with interactive car details, smooth scrolling and
              navigation.
            </p>
          </motion.div>

          {/* OLX Clone */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h3 className="text-2xl font-semibold">OLX Clone</h3>
            <p className="mt-2">
              <strong>Technologies Used:</strong> HTML, CSS, JavaScript,
              Bootstrap
            </p>
            <p>
              <strong>Project Overview:</strong> A classified ads platform
              similar to OLX, allowing users to browse and post ads for various
              categories like vehicles, electronics, and real estate.
            </p>
            <p>
              <strong>Features:</strong> Ad posting functionality, search and
              filter options for browsing ads, responsive design with a clean
              user interface.
            </p>
          </motion.div>

          {/* Netflix Clone */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <h3 className="text-2xl font-semibold">Netflix Clone</h3>
            <p className="mt-2">
              <strong>Technologies Used:</strong> React.js
            </p>
            <p>
              <strong>Project Overview:</strong> A React-based Netflix clone
              emulating the original Netflix user experience with a responsive
              design and dynamic movie listings fetched from an API.
            </p>
            <p>
              <strong>Features:</strong> Movie listing and playback interface,
              responsive design compatible with all screen sizes, search and
              filter functionality, integrated API for fetching movie data.
            </p>
          </motion.div>

          {/* E-commerce Project */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <h3 className="text-2xl font-semibold">E-commerce Project</h3>
            <p className="mt-2">
              <strong>Technologies Used:</strong> Node.js, Express.js, MongoDB,
              JavaScript, AWS
            </p>
            <p>
              <strong>Project Overview:</strong> A fully functional e-commerce
              platform built with a Node.js and MongoDB backend, providing users
              with the ability to browse, search, and purchase products.
            </p>
            <p>
              <strong>Features:</strong> Product listings with search and
              filtering, shopping cart and checkout functionality, user
              authentication and payment gateway integration, backend hosted on
              AWS for scalability.
            </p>
          </motion.div>

          {/* Full-Stack Hotel Management Portal */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            <h3 className="text-2xl font-semibold">
              Full-Stack Hotel Management Portal
            </h3>
            <p className="mt-2">
              <strong>Technologies Used:</strong> Tailwind CSS, React, Redux,
              TypeScript, Clean Architecture, MVC Architecture
            </p>
            <p>
              <strong>Project Overview:</strong> A robust full-stack hotel
              management system designed to handle hotel room bookings, guest
              information, and administrative functions. The project follows
              clean architecture principles and an MVC pattern to ensure
              maintainability and scalability.
            </p>
            <p>
              <strong>Features:</strong> Room booking system with real-time
              availability updates, guest and booking management for admins,
              responsive design using Tailwind CSS, Redux for state management,
              and TypeScript for type safety.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
