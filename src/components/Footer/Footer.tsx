import { Link } from "react-router-dom"
import ReactGA from "react-ga4"
import ItemsContainer from "./ItemsContainer"
import SocialIcons from "./SocialIcons"
const Footer = () => {
  const captureTermsorPrivacy = (nm: string) => {
    ReactGA.event({
      category: nm,
      action: "Terms/Policy",
    })
  }
  return (
    <footer className="legacy-site-footer w-full px-4 pb-12 pt-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 rounded-[32px] border border-teal-800 bg-black/35 p-6 backdrop-blur-md sm:p-8 lg:p-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_220px] lg:items-start">
          <ItemsContainer />
          <div className="flex flex-col items-center gap-4 border-t border-teal-800 pt-8 text-center lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <img
              src="/assets/icons/Dpiit logo@2x.png"
              alt="DPIIT recognition badge"
              className="h-28 w-28 rounded-full bg-white object-contain sm:h-32 sm:w-32"
            />
            <img
              className="w-full max-w-[180px] object-contain"
              src="https://www.startupindia.gov.in/content/dam/invest-india/newhomepage/Logo1.png"
              alt="Startup India"
            />
            <p className="max-w-[18rem] text-sm leading-6 text-white/65">
              Building modern brands with strategy, technology, and performance-led execution.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-5 border-t border-teal-800 pt-6 text-center text-sm text-gray-400 md:flex-row md:text-left">
          <div className="flex flex-wrap items-center justify-center gap-2 md:justify-start">
            <Link
              onClick={() => {
                captureTermsorPrivacy("Terms")
              }}
              to="/terms"
              className="hover:text-[#00E6C4]"
            >
              Terms
            </Link>
            <span className="text-white/25">|</span>
            <Link
              onClick={() => {
                captureTermsorPrivacy("Policy")
              }}
              to="/privacypolicy"
              className="hover:text-[#00E6C4]"
            >
              Privacy Policy
            </Link>
          </div>
          <SocialIcons />
        </div>
        <div className="flex flex-col items-center gap-1.5">
          <span className="text-center text-sm sm:text-base">
            © 2026 Shakyawar Mediatech LLP. All rights reserved.
          </span>
          <span className="text-center text-xs text-white/50">
            Arevei Technologies is a brand of Shakyawar Mediatech LLP.
          </span>
        </div>
      </div>
    </footer>
  )
}
export default Footer
