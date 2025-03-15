import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Timeline = () => {
  return (
    <>
      <motion.ol
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative border-l pt-6 border-gray-200 dark:border-indigo-900/60"
      >
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3  rounded-full mt-1.5 -left-1.5 bg-indigo-600"></div>
          <span className="mb-1 text-base font-normal leading-none ">
            February 2017
          </span>
          <h3 className="text-xl font-semibold my-2 ">
            Wordpress CMS
          </h3>
          <p className="mb-4 text-lg font-thin ">
            I learned WordPress self-taught, it doesn't take long for it,
            because it doesn't require coding skills. I've been working on some
            real projects but they seem to be no longer active.
          </p>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3  rounded-full mt-1.5 -left-1.5 bg-indigo-600"></div>
          <span className="mb-1 text-base font-normal leading-none ">
            Mei 2019
          </span>
          <h3 className="text-xl font-semibold my-2 ">
            HMTL CSS Javascript
          </h3>
          <p className="mb-4 text-lg font-thin  ">
            I got interested in coding after watching some videos on youtube and
            practicing it, it's really fun to write code in a text editor and
            see the results on a computer screen. This is where I decided to
            become a web developer, and continue to improve my coding skills by
            attending training.
          </p>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3  rounded-full mt-1.5 -left-1.5 bg-indigo-600"></div>
          <span className="mb-1 text-base font-normal leading-none ">
            July 2022
          </span>
          <h3 className="text-xl font-semibold my-2 ">
            Javascript Framework
          </h3>
          <p className="mb-4 text-lg font-thin  ">
            Finally, I got my first project after 4 years of learning web
            programming. I built a company profile web using ReactJs and
            bootstrap 4 with a 1 week deadline. Here's the results

          </p>
        </li>
      </motion.ol>
    </>
  );
};

export default Timeline;
