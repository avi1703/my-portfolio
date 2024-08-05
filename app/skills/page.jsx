"use client";

const Services = () => {
  return (
    <div className='flex flex-col m-auto xl:w-[1200px]'>
      <div className='flex justify-center mt-8'>
        <h1 className='text-5xl font-bold'>My <span className='text-accent'>Skills</span></h1>
      </div>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-auto'>
        <div className=' flex gap-10 mt-8 mx-auto border rounded-xl w-52 h-16 cursor-pointer items-center pl-6 hover:bg-gradient-to-tr hover:from-amber-500 hover:to-fuchsia-700 hover:text-black
        hover:scale-105 duration-500 hover:rounded-none transition-all'>
          <img src="/assets/html_icon.png" className='h-16'></img>
          <p className='text-xl'>HTML</p>
        </div>
        <div className='flex gap-10 mt-8 mx-auto border rounded-xl w-52 h-16 cursor-pointer items-center pl-6 hover:bg-gradient-to-tr hover:from-amber-500 hover:text-black hover:scale-105 duration-500 hover:rounded-none hover:to-fuchsia-700 transition-all'>
          <img src="/assets/css_icon.png" className='h-16'></img>
          <p className='text-xl'>CSS</p>
        </div>
        <div className='flex gap-3 mt-8 mx-auto border rounded-xl w-52 h-16 cursor-pointer items-center pl-6 hover:bg-gradient-to-tr hover:from-amber-500 hover:text-black hover:scale-105 duration-500 hover:rounded-none hover:to-fuchsia-700 transition-all'>
          <img src="/assets/jscript.png" className='h-12'></img>
          <p className='text-xl'>JavaScript</p>
        </div>
        <div className='flex mt-8 mx-auto border rounded-xl w-52 h-16 cursor-pointer items-center pl-3 hover:bg-gradient-to-tr hover:from-amber-500 hover:text-black hover:scale-105 duration-500 hover:rounded-none hover:to-fuchsia-700 transition-all'>
          <img src="/assets/bstrap_icon.png" className='h-20'></img>
          <p className='text-xl'>BootStrap</p>
        </div>
        <div className='flex mt-8 mx-auto gap-6 border rounded-xl w-52 h-16 cursor-pointer items-center pl-6 hover:bg-gradient-to-tr hover:from-amber-500 hover:text-black hover:scale-105 duration-500 hover:rounded-none hover:to-fuchsia-700 transition-all'>
          <img src="/assets/tailwind_icon.png" className='h-8'></img>
          <p className='text-xl'>TailWind</p>
        </div>
        <div className='flex mt-8 mx-auto gap-6 border rounded-xl w-52 h-16 cursor-pointer items-center pl-6 hover:bg-gradient-to-tr hover:from-amber-500 hover:text-black hover:scale-105 duration-500 hover:rounded-none hover:to-fuchsia-700 transition-all'>
          <img src="/assets/react.png" className='h-12'></img>
          <p className='text-xl'>ReactJs</p>
        </div>
        <div className='flex mt-8 mx-auto gap-6 border rounded-xl w-52 h-16 cursor-pointer items-center pl-6 hover:bg-gradient-to-tr hover:from-amber-500 hover:text-black hover:scale-105 duration-500 hover:rounded-none hover:to-fuchsia-700 transition-all'>
          <img src="/assets/node.png" className='h-12'></img>
          <p className='text-xl'>NodeJs</p>
        </div>
        <div className='flex mt-8 mx-auto gap-4 border rounded-xl w-52 h-16 cursor-pointer items-center pl-6 hover:bg-gradient-to-tr hover:from-amber-500 hover:text-black hover:scale-105 duration-500 hover:rounded-none hover:to-fuchsia-700 transition-all'>
          <img src="/assets/express.png" className='h-12'></img>
          <p className='text-xl'>ExpressJs</p>
        </div>
        <div className='flex mt-8 mx-auto gap-6 border rounded-xl w-52 h-16 cursor-pointer items-center pl-6 hover:bg-gradient-to-tr hover:from-amber-500 hover:text-black hover:scale-105 duration-500 hover:rounded-none hover:to-fuchsia-700 transition-all'>
          <img src="/assets/mdb.png" className='h-12'></img>
          <p className='text-xl'>MongoDB</p>
        </div>
        <div className='flex mt-8 mx-auto gap-6 border rounded-xl w-52 h-16 cursor-pointer items-center pl-6 hover:bg-gradient-to-tr hover:from-amber-500 hover:text-black hover:scale-105 duration-500 hover:rounded-none hover:to-fuchsia-700 transition-all'>
          <img src="/assets/next_icon.png" className='bg-white p-2 rounded-full h-12'></img>
          <p className='text-xl'>NextJs</p>
        </div>
        <div className='flex mt-8 mx-auto gap-10 border rounded-xl w-52 h-16 cursor-pointer items-center pl-6 hover:bg-gradient-to-tr hover:from-amber-500 hover:text-black hover:scale-105 duration-500 hover:rounded-none hover:to-fuchsia-700 transition-all'>
          <img src="/assets/cpp.png" className='h-12'></img>
          <p className='text-2xl'>C++</p>
        </div>
        <div className='flex mt-8 mx-auto gap-0 border rounded-xl w-52 h-16 cursor-pointer items-center pl-4 hover:bg-gradient-to-tr hover:from-amber-500 hover:text-black hover:scale-105 duration-500 hover:rounded-none hover:to-fuchsia-700 transition-all'>
          <img src="/assets/typescript.png" className='h-16'></img>
          <p className='text-xl'>TypeScript</p>
        </div>
      </div>
    </div>
  )
}

export default Services
