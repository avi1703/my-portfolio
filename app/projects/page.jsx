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
    category: 'Unwinnd',
    title: 'Project 1',
    description: "Contributed to a production mental health platform used by therapists and patients, building partner and user dashboards with real-time chat using Socket.io and deploying updates on a live server.",
    stack: [{ name: 'ReactJs' }, { name: 'JavaScript' },  { name: 'Socket.io' }],
    image: '/assets/unwinnd.png',
    live: 'https://unwinnd.com/',
    github: 'https://github.com/vinay-eng/unwinnd_web/',
  },
  {
    num: '02',
    category: 'Attire Avenue',
    title: 'Project 2',
    description: "React-based e-commerce app with authentication, product browsing, cart, and custom payments. Built using React, Node.js, and Express, and deployed on Vercel and Render.",
    stack: [{ name: 'ReactJs' }, { name: 'NodeJs' }, { name: 'ExpressJs' }, { name: 'MongoDB' }],
    image: '/assets/Attire-Avenue.png',
    live: 'https://attire-avenue-frontend.vercel.app/',
    github: 'https://github.com/avi1703/attire-avenue.git',
  },

  {
    num: '03',
    category: 'MultiPlayer Tic-Tac-Toe',
    title: 'Project 3',
    description: "Built an offline/online multiplayer game with real-time sockets, Google Sign-In, and React Hooks. Achieved 100% test coverage using Cypress and tested by 50+ users.",
    stack: [{ name: 'ReactJs' }, { name: 'Socket.io' }, { name: 'Cypress' }],
    image: '/assets/tic-tac-toe.png',
    live: 'https://tic-tac-toe-ten-henna.vercel.app/',
    github: 'https://github.com/avi1703/tic-tac-toe',
  },

  {
    num: '04',
    category: 'Weather App',
    title: 'Project 4',
    description: "Built a weather app using Next.js and TypeScript that fetches real-time data from external APIs for local and global locations.",
    stack: [{ name: 'NextJs' }, { name: 'TailWind' }, { name: 'TypeScript' }],
    image: '/assets/Weather-App.png',
    live: 'https://weather-app-nextjs-delta.vercel.app/',
    github: 'https://github.com/avi1703/weather-app-nextjs.git',
  },


  {
    num: '05',
    category: 'My Portfolio',
    title: 'Project 5',
    description: "Built a full-stack portfolio using Next.js, Tailwind CSS, and MongoDB, with dynamic UI components and backend APIs.",
    stack: [{ name: 'NextJs' }, { name: 'TailWind' }, { name: 'JavaScript' }],
    image: '/assets/portfolio.png',
    live: 'https://my-portfolio-avinash.vercel.app/',
    github: 'https://github.com/avi1703/my-portfolio',
  },

  {
    num: '06',
    category: 'To-Do List',
    title: 'Project 6',
    description: "This To-Do List app lets users manage tasks efficiently. Users can add, edit, delete, mark tasks as completed or pending, and filter tasks by status or search query.",
    stack: [{ name: 'HTML' }, { name: 'CSS' }, { name: 'JavaScript' }],
    image: '/assets/To-Do List.png',
    live: 'https://to-do-list-alpha-snowy.vercel.app/',
    github: 'https://github.com/avi1703/To-Do-List.git',
  },

  {
    num: '07',
    category: 'Tasty Burger',
    title: 'Project 7',
    description: "Built a responsive burger-themed UI in React with shop, blog, and add-to-cart interface components.",
    stack: [{ name: 'ReactJs' }, { name: 'JavaScript' }],
    image: '/assets/Tasty Burger.png',
    live: 'https://tasty-burger-ui.vercel.app/',
    github: 'https://github.com/avi1703/Tasty-Burger-UI.git',
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
