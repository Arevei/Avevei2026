"use client"

import { useRef } from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { Link } from "react-router-dom"
import ReactGA from "react-ga4"

interface PortfolioItem {
  id: number
  title: string
  image: string
  description?: string
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Crumbl",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/504db1187049889.6580ae8e5f841.png",
    description: "E-commerce platform redesign",
  },
  {
    id: 2,
    title: "Zelios Agency",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/c1981d192544137.65dda66308433.png",
    description: "Creative agency branding",
  },
  {
    id: 3,
    title: "UmaiDrinks",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/efbc1e138732853.6222d1be5b637.png",
    description: "Beverage brand marketing",
  },
  {
    id: 4,
    title: "more.Buds",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/a92ec5193727743.65f09f8256f74.png",
    description: "Product launch campaign",
  },
]

const Portfolio = () => {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }))
  const captureWorkClickEvent = () => {
    ReactGA.event({
      category: "User",
      action: "Portfolio Button",
    })
  }

  return (
    <section className=" px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
      <div className="max-w-3xl mx-auto text-center ">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#00E6C4] mb-12">
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

        

        <div className="relative w-full">
         

          <Carousel
            plugins={[plugin.current]}
            className="w-full relative group mb-8"
            opts={{
              align: "start",
              loop: true,
              skipSnaps: false,
            }}
          >
            <CarouselContent className="-ml-2 sm:-ml-3 lg:-ml-4 ">
              {portfolioItems.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="pl-2 sm:pl-3 lg:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 "
                >
                  <div className="h-64 sm:h-72 lg:h-80 xl:h-96 rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden group/item cursor-pointer border border-transparent hover:border-[#00E6C4] transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,255,217,0.3)]">
                    <div className="relative h-full w-full">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={`${item.title} - ${item.description || "project"}`}
                        className="h-full w-full object-cover group-hover/item:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover/item:from-black/90 group-hover/item:via-black/60 transition-all duration-300 flex flex-col items-start justify-end p-4 sm:p-5 lg:p-6">
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">{item.title}</h3>
                        {item.description && (
                          <p className="text-xs sm:text-sm lg:text-base text-gray-200 mt-1 sm:mt-2">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="absolute -top-10 left-0 right-0 flex justify-around gap-3 sm:gap-10 z-20">
              <CarouselPrevious className="relative w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full border border-[#00E6C4]/50 hover:border-[#00E6C4] bg-black/40 hover:bg-black/60 text-[#00E6C4] hover:text-white transition-all duration-300 flex items-center justify-center hover:shadow-lg hover:shadow-[#00E6C4]/30" />
              <CarouselNext className="relative w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full border border-[#00E6C4]/50 hover:border-[#00E6C4] bg-black/40 hover:bg-black/60 text-[#00E6C4] hover:text-white transition-all duration-300 flex items-center justify-center hover:shadow-lg hover:shadow-[#00E6C4]/30" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
