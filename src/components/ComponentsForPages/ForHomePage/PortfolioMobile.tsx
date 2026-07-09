import { MoveRight, MoveLeft } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import React from "react"
import ReactGA from "react-ga4"
import { Link } from "react-router-dom"
function PortfolioMobile() {

  const servicesItem = [
    {
      "Name": "Swipe Right",
      "Image": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/504db1187049889.6580ae8e5f841.png",
    },
    {
      "Name": "Keep Swiping",
      "Image": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/c1981d192544137.65dda66308433.png",
    },
    {
      "Name": "Here we Go Juicy",
      "Image": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/efbc1e138732853.6222d1be5b637.png"
    },
    {
      "Name": "Ears need them",
      "Image": "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/a92ec5193727743.65f09f8256f74.png"
    },
  ]


  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  const captureWorkClickEvent = () => {
    ReactGA.event({
      category: "User",
      action: "Portfolio Button",
    })
  }


  return (
    <div>
       <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#00ffd9] via-[#00ffd9] to-[#00aeff] bg-clip-text text-transparent mb-12">
            Proven Work. Measurable Impact.
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            A selection of projects where strategy, creativity, and execution came together to drive real business
            results.
          </p>

          <div className="text-center pb-8">
            <Link
              onClick={captureWorkClickEvent}
              to="/works"
              className="relative p-[2px] rounded-lg transition-all duration-300 bg-[linear-gradient(135deg,#00aeff,#00ffd9)] hover:bg-[linear-gradient(135deg,#00d4ff,#00ffea)] inline-block cursor-pointer"
            >
              <span className="block rounded-lg bg-[#0f2c27fe] hover:bg-transparent text-white hover:text-black px-8 py-3 text-center font-semibold tracking-wide transition-all duration-300">
              View Case Studies
              </span>
            </Link>
          </div>
          
          
        </div>

    
    <Carousel plugins={[plugin.current]} className="w-full max-w-[90vw] md:hidden relative mx-auto">
      <CarouselContent>
        {servicesItem.map((eachService, index) => (
          <CarouselItem key={index}>
            <div className="text-center text-2xl">{eachService.Name} <span className={`${eachService.Name==='Ears need them'? "hidden" : "inline"}`}><MoveRight/></span><span className={`${eachService.Name!=='Ears need them'?"hidden":"inline"}`}><MoveLeft/></span></div>
            <div className="p-1">
              <Card className="w-full h-full border-none">
                <CardContent className="flex aspect-square items-center justify-center w-full h-full p-0">
                  <div
                    className="relative group flex w-full h-full flex-col justify-end rounded-[10px] bg-red-300"
                    style={{
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    <img
                      src={eachService.Image}
                      alt=""
                      className=" h-full w-full rounded-[10px] object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

          </CarouselItem>
        ))}
      </CarouselContent>
     
    </Carousel>
    </div>
    
  )
}

export default PortfolioMobile;