"use client"

import { Link } from "react-router-dom"
import Footer from "@/components/Footer/Footer"
import { HeroSection, TrustedBy, UserReveiwsLaptop, UserReveiwsPhone } from "@/components/ComponentsForPages/ForHomePage" //
import Stats from "@/components/ComponentsForPages/ForHomePage/Stats"
import Services from "@/components/ComponentsForPages/ForHomePage/Services"
import AboutArevei from "@/components/ComponentsForPages/ForHomePage/AboutArevei"
import TeamSection from "@/components/ComponentsForPages/ForHomePage/TeamSection"
import HowWeWork from "@/components/ComponentsForPages/ForHomePage/HowWeWork"
import Portfolio from "@/components/ComponentsForPages/ForHomePage/Portfolio"
import PortfolioMobile from "@/components/ComponentsForPages/ForHomePage/PortfolioMobile"
import ProductShowcase from "@/components/ComponentsForPages/ForHomePage/ProductShowcase"
import RevealOnScroll from "@/components/shared/RevealOnScroll"
import JsonLd from "@/components/shared/JsonLd"
import { buildLocalBusinessSchema, buildOrganizationSchema, buildWebsiteSchema } from "@/lib/geo-data"

import ReactGA from "react-ga4"

const Home = () => {
  ReactGA.send({ hitType: "pageview", page: "/", title: "Home Page" })
  const captureClickEventForAnalytics = (meetbtn: string) => {
    ReactGA.event({
      category: meetbtn,
      action: "Meet Button",
    })
  }


  return (
    <div className="flex flex-1">
      <JsonLd id="ld-home-organization" data={buildOrganizationSchema()} />
      <JsonLd id="ld-home-local-business" data={buildLocalBusinessSchema()} />
      <JsonLd id="ld-home-website" data={buildWebsiteSchema()} />
      <div className="home-container w-full overflow-x-hidden">
      <div className="home-posts relative space-y-14 pb-6 sm:space-y-16 lg:space-y-20">
        <div className=" w-full relative ">
          <HeroSection />
          </div>
          {/* <div className="w-full flex-wrap flex flex-1 flex-col pt-6 items-center text-center md:gap-3 p-5">
            <h1 className="text-5xl font-extrabold md:text-8xl bg-gradient-to-r from-[#00ffd9] via-[#00ffd9] to-[#00aeff] bg-clip-text text-transparent leading-[1.2] pb-4">
              AI-Powered Marketing
            </h1>
            <p className="font-semibold text-lg md:text-3xl w-[80%] text-center">
              Grow your business with Smarter, AI-Powered Marketing Solutions.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 md:gap-6 mt-8">
            <Link
              onClick={() => {
                captureClickEventForAnalytics("Upgrade Your Business")
              }}
              to="/meet"
              className="relative p-[2px] rounded-lg transition-all duration-300 bg-[linear-gradient(135deg,#00aeff,#00ffd9)] hover:bg-[linear-gradient(135deg,#00d4ff,#00ffea)] cursor-pointer"
            >
              <span className="block rounded-lg bg-[#0f2c27fe] hover:bg-transparent text-white hover:text-black sm:px-8 sm:py-4 md:text-lg md:px-10 text-center font-semibold tracking-wide transition-all duration-300 px-6 py-3">
                Upgrade Your Business
              </span>
            </Link>
          </div> */}


          <RevealOnScroll className="w-full">
            <Stats />
          </RevealOnScroll>

          <ProductShowcase />

          {/* <div className="flex flex-wrap justify-center items-center gap-2">
          

            <Link onClick={()=>[
              captureClickEventForAnalytics("First")
            ]} to="/meet" className="bg-white text-black hover:bg-off-white rounded-md"><MeetButton details="CONTACT US" /></Link>
        

          </div> */}

          {/* <h1 className=" text-3xl xs:text-5xl flex gap-1 w-full justify-center flex-wrap text-center mt-8 sm:mt-16">
            Our Best Work. Your Next Breakthrough.
          </h1>
          <p className="mt-4 text-xl leading-relaxed text-white">How We Upgrade Every Project</p> */}
          
          <RevealOnScroll className="w-full">
            <div className="hidden md:block">
              <Portfolio />
            </div>

            <div className="md:hidden">
              <PortfolioMobile />
            </div>
          </RevealOnScroll>

         

          

          <RevealOnScroll className="w-full">
            <Services />
          </RevealOnScroll>

          <RevealOnScroll className="w-full">
            <AboutArevei />
          </RevealOnScroll>

          <RevealOnScroll className="w-full">
            <TeamSection />
          </RevealOnScroll>

          {/* <OurServicesLaptop />
          <OurServicesPhone />

          <Link onClick={()=>{
            captureClickEventForAnalytics("Middle")
          }} to="/meet" className="bg-white text-black hover:bg-off-white rounded-md"><MeetButton details="CONTACT US" /></Link> */}

          {/* <hr className="w-[80vw] self-center" /> */}

          

          <RevealOnScroll className="w-full">
            <TrustedBy />
          </RevealOnScroll>
          {/* <hr className=" w-[80vw] self-center" /> */}

          
          <RevealOnScroll className="w-full space-y-6 sm:space-y-8">
            <UserReveiwsLaptop />
            <UserReveiwsPhone />
          </RevealOnScroll>

          <RevealOnScroll className="w-full">
            <HowWeWork />
          </RevealOnScroll>

          {/* <hr className=" w-[80vw] self-center" /> */}

          {/* <h1 className="text-3xl sm:text-5xl flex gap-1 w-full justify-center flex-wrap text-center  mt-8 sm:mt-20">We provide the best value for your Money
          </h1>
          <NewPrices /> */}

          {/* <hr className=" w-[80vw] self-center" /> */}
          {/* <Features /> */}
          <RevealOnScroll className="flex w-full justify-center">
            <Link
              onClick={() => {
                captureClickEventForAnalytics("Last")
              }}
              to="/meet"
               className="relative inline-block cursor-pointer rounded-lg bg-[linear-gradient(135deg,#00aeff,#00ffd9)] p-[0.9px] transition-all duration-300 hover:bg-[linear-gradient(135deg,#00d4ff,#00ffea)]"
            >
              <span className="block rounded-lg bg-[#0f2c27fe] px-8 py-3 text-center font-semibold tracking-wide text-white transition-all duration-300 hover:bg-transparent hover:text-black">
                  Contact Us
                </span>
            </Link>
          </RevealOnScroll>

          <RevealOnScroll className="w-full">
            <Footer />
          </RevealOnScroll>
        </div>
      </div>
    </div>
  )
}

export default Home
