import Link from "next/link"

// components
import Nav from "./Nav"
import MobileNav from "./MobileNav"

const Header = () => {
  return <header className="py-8 xl:py-12 text-white">
    <div className="container mx-auto flex justify-between items-center">
      {/* Logo */}
        <Link href="/">
        <h1 className="text-4xl font-semibold"> 
            Avinash<span className="text-accent">.</span>
        </h1>
        </Link>
        {/* desktop nav & Hire me button*/}
        <div className="hidden xl:flex fixed right-0 top-48 w-24 items-center">
        <Nav />
        </div>
    </div>
    {/*  mobile nav*/}
    <div className="xl:hidden fixed bottom-0 bg-[#27272c]   w-screen h-[80px] z-50">
          <MobileNav />
    </div>
  </header>
}

export default Header