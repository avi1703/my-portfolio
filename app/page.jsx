import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

{
  /* Components */
}
import Social from "@/components/Social";
import Photo from "@/components/Photo";

const Home = () => {
  return (
    <section className="pt-4 pb-12 ">
      <div className="container mx-auto h-full">
        <div className="flex flex-col gap-6 xl:gap-0 xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none flex flex-col gap-4 xl:gap-6">
            <span className="text-base sm:text-lg text-white/60">
              Full Stack Developer
            </span>
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold leading-tight mb-4">
              Hello, I&apos;m <br />
              <span className="text-accent">Avinash Sharma</span>
            </h1>
            <p className="max-w-[520px] mb-8 text-white/70 leading-relaxed">
              Full-Stack Developer working with MERN and Next.js. Currently
              contributing to production TypeScript applications at Binary Data
              Pvt. Ltd., focusing on bug fixes, feature development, and
              performance improvements.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                href="/assets/Avinash_Latest_Resume.pdf"
                download="Avinash-Resume.pdf"
                className="no-underline"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download Resume</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500 sm:mb-12 xl:mb-0"
                />
              </div>
            </div>
          </div>
          <div>
            <Photo className="order-1 xl:order-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
