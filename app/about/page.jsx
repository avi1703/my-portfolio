"use client";

import Image from "next/image";

const Services = () => {
  return (
    <div className='flex flex-col m-auto gap-10 xl:w-[1200px]'>
      <div className='flex justify-center mt-8'>
        <h1 className='text-5xl font-bold'>My <span className='text-accent'>Skills</span></h1>
      </div>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-auto'>
        <div className=' flex gap-10 mt-8 mx-auto border rounded-xl w-52 h-16 cursor-pointer items-center pl-6 hover:bg-gradient-to-tr hover:from-amber-500 hover:to-fuchsia-700 hover:text-black
        hover:scale-105 duration-500 hover:rounded-none transition-all'>
          <Image
            src="/assets/html_icon.png"
            alt=""
            className='h-16'
          />
          <p className='text-xl'>HTML</p>
        </div>
        <div className='flex gap-10 mt-8 mx-auto border rounded-xl w-52 h-16 cursor-pointer items-center pl-6 hover:bg-gradient-to-tr hover:from-amber-500 hover:text-black hover:scale-105 duration-500 hover:rounded-none hover:to-fuchsia-700 transition-all'>
          <Image
            src="/assets/css_icon.png"
            alt=""
            className='h-16'
          />
          <p className='text-xl'>CSS</p>
        </div>
        <div className='flex gap-3 mt-8 mx-auto border rounded-xl w-52 h-16 cursor-pointer items-center pl-6 hover:bg-gradient-to-tr hover:from-amber-500 hover:text-black hover:scale-105 duration-500 hover:rounded-none hover:to-fuchsia-700 transition-all'>
          <Image
            src="/assets/jscript.png"
            alt=""
            className='h-12'
          />
          <p className='text-xl'>JavaScript</p>
        </div>
        <div className='flex mt-8 mx-auto border rounded-xl w-52 h-16 cursor-pointer items-center pl-3 hover:bg-gradient-to-tr hover:from-amber-500 hover:text-black hover:scale-105 duration-500 hover:rounded-none hover:to-fuchsia-700 transition-all'>
          <Image
            src="/assets/bstrap_icon.png"
            alt=""
            className='h-20'
          />
          <p className='text-xl'>BootStrap</p>
        </div>
        <div className='flex mt-8 mx-auto gap-6 border rounded-xl w-52 h-16 cursor-pointer items-center pl-6 hover:bg-gradient-to-tr hover:from-amber-500 hover:text-black hover:scale-105 duration-500 hover:rounded-none hover:to-fuchsia-700 transition-all'>
          <Image
            src="/assets/tailwind_icon.png"
            alt=""
            className='h-8'
          />
          <p className='text-xl'>TailWind</p>
        </div>
        <div className='flex mt-8 mx-auto gap-6 border rounded-xl w-52 h-16 cursor-pointer items-center pl-6 hover:bg-gradient-to-tr hover:from-amber-500 hover:text-black hover:scale-105 duration-500 hover:rounded-none hover:to-fuchsia-700 transition-all'>
          <Image
            src="/assets/react.png"
            alt=""
            className='h-12'
          />
          <p className='text-xl'>ReactJs</p>
        </div>
        <div className='flex mt-8 mx-auto gap-6 border rounded-xl w-52 h-16 cursor-pointer items-center pl-6 hover:bg-gradient-to-tr hover:from-amber-500 hover:text-black hover:scale-105 duration-500 hover:rounded-none hover:to-fuchsia-700 transition-all'>
          <Image
            src="/assets/node.png"
            alt=""
            className='h-12'
          />
          <p className='text-xl'>NodeJs</p>
        </div>
        <div className='flex mt-8 mx-auto gap-4 border rounded-xl w-52 h-16 cursor-pointer items-center pl-6 hover:bg-gradient-to-tr hover:from-amber-500 hover:text-black hover:scale-105 duration-500 hover:rounded-none hover:to-fuchsia-700 transition-all'>
          <Image
            src="/assets/express.png"
            alt=""
            className='h-12'
          />
          <p className='text-xl'>ExpressJs</p>
        </div>
        <div className='flex mt-8 mx-auto gap-6 border rounded-xl w-52 h-16 cursor-pointer items-center pl-6 hover:bg-gradient-to-tr hover:from-amber-500 hover:text-black hover:scale-105 duration-500 hover:rounded-none hover:to-fuchsia-700 transition-all'>
          <Image
            src="/assets/mdb.png"
            alt=""
            className='h-12'
          />
          <p className='text-xl'>MongoDB</p>
        </div>
        <div className='flex mt-8 mx-auto gap-6 border rounded-xl w-52 h-16 cursor-pointer items-center pl-6 hover:bg-gradient-to-tr hover:from-amber-500 hover:text-black hover:scale-105 duration-500 hover:rounded-none hover:to-fuchsia-700 transition-all'>
          <Image
            src="/assets/next_icon.png"
            alt=""
            className='bg-white p-2 rounded-full h-12'
          />
          <p className='text-xl'>NextJs</p>
        </div>
        <div className='flex mt-8 mx-auto gap-10 border rounded-xl w-52 h-16 cursor-pointer items-center pl-6 hover:bg-gradient-to-tr hover:from-amber-500 hover:text-black hover:scale-105 duration-500 hover:rounded-none hover:to-fuchsia-700 transition-all'>
          <Image
            src="/assets/cpp.png"
            alt=""
            className="h-12"
          />
          <p className='text-2xl'>C++</p>
        </div>
        <div className='flex mt-8 mx-auto gap-0 border rounded-xl w-52 h-16 cursor-pointer items-center pl-4 hover:bg-gradient-to-tr hover:from-amber-500 hover:text-black hover:scale-105 duration-500 hover:rounded-none hover:to-fuchsia-700 transition-all'>
          <Image
            src="/assets/typescript.png"
            alt=""
            className="h-16"
          />
          <p className='text-xl'>TypeScript</p>
        </div>
      </div>
      <div className="border border-white/20"></div>
      <div className='flex justify-center mt-8'>
        <h1 className='text-5xl font-bold text-accent'>Education</h1>
      </div>
      <div className="flex flex-col items-center gap-5 mb-16">
        <div className="xl:w-[70%] w-[90%] bg-[#27272c] flex sm:gap-2 md:gap-6 items-center rounded-r-xl border border-accent border-l-0">
          <div className="h-fit w-28 bg-white">
            <Image
              src="/assets/brcm_logo.png"
              alt=""
              className="h-full w-28 py-8"
            />
          </div>
          <div>
            <h3 className="font-bold text-accent xl:text-xl lg:text-lg cmd:text-[16px] md:text-sm sm:text-[10px] xl:mb-9 md:mb-4 sm:mb-4" >BRCM College of Engineering & Technology, Bahal</h3>
            <p className="md:text-sm sm:text-[8px]">Bachelor of Technology- B.Tech, Computer Science</p>
            <p className="text-white/30 md:text-sm sm:text-[8px]">Oct. 2021 - Present[Expected May 2025]</p>
            <p className="md:text-sm sm:text-[8px]">Grade: Current CGPA - 7.5</p>
          </div>
        </div>
        <div className="xl:w-[70%] w-[90%] bg-[#27272c] flex md:gap-6 sm:gap-2 sm:mb-12 xl:mb-0 items-center rounded-r-xl border border-accent border-l-0">
          <div className="h-full w-28 bg-white">
            <Image
              src="/assets/vaish_logo.png"
              alt=""
              className="h-full w-28 py-8"
            />
          </div>
          <div>
            <h3 className="font-bold text-accent xl:text-xl lg:text-lg cmd:text-[16px] md:text-sm sm:text-[10px] xl:mb-9 md:mb-4 sm:mb-4">Vaish Model Senior Secondary School, Bhiwani</h3>
            <p className="md:text-sm sm:text-[8px]">12th, Non-Medical (PCM)</p>
            <p className="text-white/30 md:text-sm sm:text-[8px]">April 2019 - April-2020</p>
            <p className="md:text-sm sm:text-[8px]">Grade: 86.6% [CBSE]</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
