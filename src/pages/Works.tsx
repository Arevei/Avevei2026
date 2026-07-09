"use client"
import FirstWork from "@/components/ComponentsForPages/ForWorksPage/FirstWork"
import FourthWork from "@/components/ComponentsForPages/ForWorksPage/FourthWork"
import SecondWork from "@/components/ComponentsForPages/ForWorksPage/SecondWork"
import ThirdWork from "@/components/ComponentsForPages/ForWorksPage/ThirdWork"
// import MeetButton from "@/components/shared/MeetButton/MeetButton"
import { Link } from "react-router-dom"

import ReactGA from "react-ga4"
import Footer from "@/components/Footer/Footer"

export function WorkPage() {
  ReactGA.send({ hitType: "pageview", page: "/works", title: "Portfolio Page" })
  const captureWorkMeet = () => {
    ReactGA.event({
      category: "Portfolio Page",
      action: "Meet Button",
    })
  }
  const capturePortfolio = (pname: string) => {
    ReactGA.event({
      category: pname,
      action: "Portfolio Button",
    })
  }
  return (
    <div className="flex flex-1">
      <div className="flex flex-col flex-1 items-center gap-5 overflow-scroll custom-scrollbar pb-20">
        <div className="home-posts relative">
          <FirstWork capturePortfolio={capturePortfolio} />
          <SecondWork capturePortfolio={capturePortfolio} />
          <ThirdWork capturePortfolio={capturePortfolio} />
          <FourthWork capturePortfolio={capturePortfolio} />
        </div>
        <div className="">
          <div className="flex flex-col md:gap-5 rounded-md p-4 md:flex-row md:p-8 lg:space-x-8 justify-center items-center">
            <div className="space-y-2">
              <p className="text-2xl font-semibold leading-loose">Want to Know More? </p>
            </div>
            <Link
              onClick={captureWorkMeet}
              to="/meet"
              className="relative p-[2px] rounded-lg transition-all duration-300 bg-[linear-gradient(135deg,#00aeff,#00ffd9)] hover:bg-[linear-gradient(135deg,#00d4ff,#00ffea)] inline-block cursor-pointer"
            >
              <span className="block rounded-lg bg-[#0f2c27fe] hover:bg-transparent text-white hover:text-black px-8 py-3 text-center font-semibold tracking-wide transition-all duration-300">
                CONTACT US
              </span>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
