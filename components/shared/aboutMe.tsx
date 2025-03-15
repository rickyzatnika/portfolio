/* eslint-disable react/no-unescaped-entities */
"use client"

import Image from 'next/image';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { Card } from '../ui/card';


const Skillbar = dynamic(() => import('./skillBar'));
const Timeline = dynamic(() => import('./timeLine'));

const About = () => {
  const [show, setShow] = useState(true);
  const showHandler = () => {
    setShow(!show);
  };

  return (
    <>
      <section >
        <motion.div
          initial={{ y: '20%' }}
          animate={{ y: 0 }}
          transition={{
            duration: 1,
            damping: 20,
            delay: 0.2,
          }}
          className="w-full py-4 md:py-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 px-0 md:px-4 items-start">
            <div className="col-span-1 lg:col-span-4 ">
              <div className="image flex flex-col items-center justify-center">
                <h1 className="text-4xl md:text-5xl antialiased  -tracking-wide font-bold text-center">
                  About <span className=" ">Me</span>
                </h1>
              </div>
              <Card className="px-2 my-14 border-accent-foreground/20 py-4">
                <div className="w-full border-accent border-b pb-1  flex items-start gap-4 md:gap-8 rounded-lg p-4">
                  <Image
                    src="/relight2.png"
                    alt="foto profile"
                    width={100}
                    height={100}
                    priority
                    style={{ width: 'auto', height: 'auto' }}
                    className="w-full object-contain rounded-lg"
                  />

                  <div className='w-full flex flex-col gap-2 text-accent-foreground/80 items-start'>
                    <span className="text-md border-accent border-b pb-1 w-full">
                      Ricky Zatnika
                    </span>
                    <span className="text-md border-accent border-b pb-1 w-full">30</span>
                    <span className="text-md border-accent border-b pb-1 w-full">
                      Indonesia
                    </span>
                    <span className="text-md w-full">Bandung</span>
                  </div>
                </div>

                <div className="pt-8">
                  <Skillbar />
                </div>
              </Card>

            </div>
            <div className="col-span-1 lg:col-span-8 pt-10 px-8 relative top-0 md:top-20 lg:sticky mb-6">
              <div className="space-x-4 w-full mx-auto  mb-5 px-0 lg:px-4 flex ">
                <button
                  onClick={showHandler}
                  className={
                    show
                      ? ' flex flex-col bg-indigo-500 px-4 py-2 items-center relative '
                      : ' flex flex-col border border-indigo-500   hover:border-indigo-400  px-4 py-2 items-center relative '
                  }
                >
                  My Journey
                  <span
                    className={
                      show
                        ? 'absolute -bottom-2 w-4 h-4  bg-indigo-500 rotate-45 -z-10'
                        : ''
                    }
                  ></span>
                </button>
                <button
                  onClick={showHandler}
                  className={
                    show
                      ? 'flex flex-col border border-indigo-500  hover:border-indigo-400   px-4 py-2 items-center relative'
                      : 'flex flex-col bg-indigo-500   px-4 py-2 items-center relative  '
                  }
                >
                  Experience
                  <span
                    className={
                      show
                        ? ''
                        : 'absolute -bottom-2 w-4 h-4 bg-indigo-500  rotate-45 -z-10  '
                    }
                  ></span>
                </button>
              </div>
              <div className="flex flex-col justify-center gap-10 scale-100 md:scale-90">
                {show ? (
                  <>
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.8 }}
                      className="flex flex-col justify-center gap-4 scale-100 md:scale-90 text-accent-foreground/80"
                    >
                      <p className="leading-relaxed text-md md:text-lg ">
                        I started my journey becoming a frontend developer on
                        mei 2019. I learned about how the internet works, about
                        HTML and CSS. And I created my first ever landing page
                        which was very exciting. <br />
                        After that I just continued with the course learned more
                        HTML, CSS and a little bit of Javascript, and I created
                        a website for a friend of mine a very bad one though..
                        but I learned a lot.
                      </p>
                      <p className=" leading-relaxed text-md md:text-lg ">
                        After that I learned Bootstrap and basic Javascript and
                        I also learned about flexbox and Grid layout through
                        some documentation. The course continued with
                        intermediate Javascript, I worked a lot on that but it
                        wasn't enough, so I did another and tutorial on youtube
                        which I really enjoyed and had lots of fun with.
                      </p>
                      <p className="leading-relaxed text-md md:text-lg ">
                        In the course I also learned about web design using
                        Figma, and learned about Terminal, NodeJs, Express JS,
                        HeadlessCMS, about how to use Databases like mongoDB,
                        MySQL and how to use animation with Framer Motion.{' '}
                        <br />I actually finished the course with ReactJs and
                        I'm now working on my first ever react Project.
                      </p>
                    </motion.div>
                  </>
                ) : (
                  <>
                    <Timeline />
                  </>
                )}

              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default About;
