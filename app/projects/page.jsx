"use client";

import { delay, motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";

import { BsArrowUpRight, BsGithub } from 'react-icons/bs';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@radix-ui/react-tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [

  {
    num: '01',
    category: 'To-Do List',
    title: 'Project 1',
    description: "This To-Do List app lets users manage tasks efficiently. Users can add, edit, delete, mark tasks as completed or pending, and filter tasks by status or search query.",
    stack: [{ name: 'HTML' }, { name: 'CSS' }, { name: 'JavaScript' }],
    image: '/assets/To-Do List.png',
    live: 'https://to-do-list-alpha-snowy.vercel.app/',
    github: 'https://github.com/avi1703/To-Do-List.git',
  },

  {
    num: '02',
    category: 'Tasty Burger',
    title: 'Project 2',
    description: "Welcome to the Tasty-Burger UI! Built with React, this visually appealing and user-friendly interface features a static add-to-cart option, shop section, blog section, and more. It's fully responsive, ensuring a seamless experience on all devices.",
    stack: [{ name: 'ReactJs' }, { name: 'JavaScript' }],
    image: '/assets/Tasty Burger.png',
    live: 'https://tasty-burger-ui.vercel.app/',
    github: 'https://github.com/avi1703/Tasty-Burger-UI.git',
  },

  {
    num: '03',
    category: 'Attire Avenue',
    title: 'Project 3',
    description: "Attire Avenue is a React-based e-commerce app offering a seamless shopping experience with user authentication, product browsing, a shopping cart, and a custom payment gateway. It features attire for men, women, and kids. This project deepened my knowledge of full-stack technologies, including React for frontend, Node.js and Express.js for backend, and deployment with Vercel and Render.",
    stack: [{ name: 'ReactJs' }, { name: 'NodeJs' }, { name: 'ExpressJs' }, { name: 'MongoDB' }],
    image: '/assets/Attire-Avenue.png',
    live: 'https://attire-avenue-frontend.vercel.app/',
    github: 'https://github.com/avi1703/attire-avenue.git',
  },

  {
    num: '04',
    category: 'Weather App',
    title: 'Project 4',
    description: "The Weather App, built with Next.js, offers real-time weather information for local and global locations using weather APIs. This project has enhanced my skills in integrating APIs and using TypeScript in Next.js.",
    stack: [{ name: 'NextJs' }, { name: 'TailWind' }, { name: 'TypeScript' }],
    image: '/assets/Weather-App.png',
    live: 'https://weather-app-nextjs-delta.vercel.app/',
    github: 'https://github.com/avi1703/weather-app-nextjs.git',
  },


  {
    num: '05',
    category: 'My Portfolio',
    title: 'Project 5',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit animi nihil quas nemo impedit, vero sed repudiandae corrupti quasi dolores. Non, labore dolorem!",
    stack: [{ name: 'NextJs' }, { name: 'TailWind' }, { name: 'JavaScript' }],
    image: '/assets/portfolio.png',
    live: 'https://attire-avenue-frontend.vercel.app/',
    github: 'https://github.com/avi1703/attire-avenue.git',
  },


]

const Project = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px]">
              <div className="text-8xl leading-none font-extrabold ">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4 overflow-x-auto">
                {project.stack.map((item, index) => {
                  return <li key={index} className="text-xl text-accent ">
                    {item.name}
                    {index != project.stack.length - 1 && ","}
                  </li>
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4 sm:mb-12 xl:mb-0">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="bg-white px-2 text-primary">Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="bg-white px-2 text-primary">Github Repo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (<SwiperSlide key={index} className="w-full">
                  <div className="md:h-[460px] sm:h-[170px] relative group flex justify-center items-center bg-primary">
                    <div className="absolute top-0 bottom-0 w-full h-full  z-18 "></div>
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        fill
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                        className="object-contain"
                        alt=""
                      />
                    </div>
                  </div>
                </SwiperSlide>
                )
              })}
              <WorkSliderBtns containerStyles="flex gap-2 sm:relative xl:absolute right-0 sm:bottom-[100px] md:bottom-[220px] xl:bottom-0 z-20 lg:ml-8 lg:w-[866px] justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] md:w-[44px] h-[44px] flex justify-center items-center transition-all sm:w-[22px] " />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Project
