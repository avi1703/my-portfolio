import { Button } from "@/components/ui/button"
import { FiDownload } from "react-icons/fi"

{/* Components */ }
import Social from "@/components/Social"
import Photo from "@/components/Photo"

const Home = () => {
  return (
    <section className="pt-4 pb-12 ">
      <div className="container mx-auto h-full">
        <div className="flex flex-col gap-6 xl:gap-0 xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-lg">Aspiring MERN Stack Developer</span>
            <h1 className="h1 mb-6">Hello,I'm <br /> <span className="text-accent">Avinash</span> <span className="text-accent -ml-4 xl:-ml-6">Sharma</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I am currently in the process of building my expertise in developing interactive applications.  Although I am in the early stages of my professional journey, I am eager to learn and grow, and I have a strong foundation in various frontend and backend technologies.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href="/assets/Avinash-Sharma-Resume.pdf" download="Avinash-Sharma-Resume.pdf" className="no-underline">
                <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                  <span>Download Resume</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500 sm:mb-12 xl:mb-0" />
              </div>
            </div>
          </div>
          <div>
            <Photo className="order-1 xl:order-none" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home