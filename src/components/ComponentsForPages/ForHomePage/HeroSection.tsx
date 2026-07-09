"use client"

import { Link } from "react-router-dom"

const HeroSection = () => {

  const captureClickEventForAnalytics = (text: string) => {
    // Analytics event
    console.log("CTA clicked:", text)
  }

  return (
    <div className="relative w-full  ">
      <div className="absolute inset-0 -z-10 bg-black/40 " />
      <div className=" flex flex-col md:flex-row justify-center items-center  gap-y-8 pt-14 sm:pt-28 pb-14">
      <div className="w-full md:w-1/2  h-full flex flex-col justify-center text-center items-center md:text-left md:items-start mt-6 md:mt-0 pl-8 md:pl-16 lg:pl-32 pr-8 md:pr-12  ">
        
        {/* Headline */}
        <h1 className=" xl:text-7xl font-extrabold leading-tight   mb-6 text-5xl md:text-5xl lg:text-6xl bg-gradient-to-r from-[#00ffd9] via-[#00ffd9] to-[#00aeff] bg-clip-text text-transparent  pb-4">
          <p>Get Seen.</p>
          <p>Get Sales.</p>
          <p>Get Ahead.</p>
         
        </h1>

        {/* Subhead - Regular font weight */}
        <p className="text-lg md:text-2xl lg:text-2xl font-regular text-gray-100 leading-relaxed mb-10 md:mb-14 max-w-3xl">
          Your Strategic Marketing Partner — We Build Brands People Remember
        </p>

        <Link
          onClick={() => captureClickEventForAnalytics("Lets Build Your Growth Engine")}
          to="/meet"
          className="relative p-[.9px] rounded-lg transition-all duration-300 bg-[linear-gradient(135deg,#00aeff,#00ffd9)] hover:bg-[linear-gradient(135deg,#00d4ff,#00ffea)]"
        >
          <span className="block rounded-lg bg-[#0f2c27fe] hover:bg-transparent text-white hover:text-black px-8 py-4 text-lg font-semibold tracking-wide transition-all duration-300">
            Let's Build Your Growth Engine
          </span>
        </Link>
      </div>

      <div className="w-full md:w-1/2 ">
          <img src="/assets/images/Brain.png" alt="Hero background" className="w-[90%] md:w-[85%] object-cover mx-auto" fetchPriority="high" width="640" height="382" />
        </div>
      </div>


      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div> */}
      
    </div>
  )
}

export default HeroSection
