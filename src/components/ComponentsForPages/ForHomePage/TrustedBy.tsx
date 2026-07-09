import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
const logos = [
  { src: "/assets/icons/Artboard 2 copy 2@2x.png", alt: "Client logo" },
  { src: "/assets/icons/Artboard 2 copy 3@2x.png", alt: "Client logo" },
  { src: "/assets/icons/Artboard 2 copy 4@2x.png", alt: "Client logo" },
  { src: "/assets/icons/Artboard 2 copy 5@2x.png", alt: "Client logo" },
  { src: "/assets/icons/Artboard 2 copy 6@2x.png", alt: "Client logo" },
  { src: "/assets/icons/Artboard 2 copy 7@2x.png", alt: "Client logo" },
  { src: "/assets/icons/Artboard 2 copy@2x.png", alt: "Client logo" },
  { src: "/assets/icons/Artboard 2 copy 9@2x.png", alt: "Client logo" },
  { src: "/assets/icons/Artboard 2 copy 10@2x.png", alt: "Client logo" },
  { src: "/assets/icons/Artboard 2 copy 11@2x.png", alt: "Client logo" },
  { src: "/assets/icons/Artboard 2@2x.png", alt: "Client logo" },
  { src: "/assets/icons/GRH_Light.png", alt: "GRH Client Logo" },
  { src: "/assets/icons/llf-logo.jpg", alt: "LLF Client Logo" },
]

const TrustedBy = () => {
      const plugin = React.useRef(
    Autoplay({
      delay: 1800,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  )
  return (
    <section className="mx-auto w-full max-w-6xl  px-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full flex-col gap-6 rounded-[28px] bg-black/25 px-4 py-8 sm:gap-8 sm:px-6 sm:py-10">

        <div className="space-y-3 text-center">
              <h2 className="mx-auto  text-3xl font-bold bg-gradient-to-r from-[#00ffd9] via-[#00ffd9] to-[#00aeff] bg-clip-text text-transparent sm:max-w-none sm:text-4xl lg:text-5xl">

            Innovating for 100+ Businesses
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-7 text-white/65 sm:text-xl">
            Brands across categories trust Arevei to build stronger positioning, sharper marketing, and better growth systems.
          </p>
        </div>

         <div className="w-full overflow-hidden">
          <Carousel  plugins={[plugin.current]} className="  rounded-lg  mx-auto w-[85vw] xs:w-full max-w-7xl" orientation="horizontal"
          >
            <CarouselContent >
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.src}
                  className="basis-[60%] pl-3 xs:basis-[44%] sm:basis-[33%] md:basis-[25%] lg:basis-[25%]"
                >
                  <div className="flex h-[88px] items-center justify-center rounded-2xl   bg-black/30 px-3 sm:h-[150px]">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="max-h-40 h-28 w-auto max-w-full object-contain opacity-90 sm:h-40"
                      loading="lazy"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
           </Carousel>
        </div>
      </div>
    </section>
  )
}

export default TrustedBy
