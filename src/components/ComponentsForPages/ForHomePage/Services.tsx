"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"

import { serviceListings } from "@/lib/service-listings-data"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel"

function Services() {
  const [carouselApi, setCarouselApi] = React.useState<CarouselApi>()
  const [activeIndex, setActiveIndex] = React.useState(0)
  const autoplayPlugin = React.useRef(
    Autoplay({
      delay: 3200,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  )

  React.useEffect(() => {
    if (!carouselApi) return
    const onSelect = () => setActiveIndex(carouselApi.selectedScrollSnap())
    carouselApi.on("select", onSelect)
    return () => {
      carouselApi.off("select", onSelect)
    }
  }, [carouselApi])

  const scrollPrev = () => carouselApi?.scrollPrev()
  const scrollNext = () => carouselApi?.scrollNext()

  return (
    <section className="relative mx-auto flex w-full max-w-7xl flex-col gap-6 overflow-x-hidden px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl space-y-4 px-2 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45 }}
          className="mx-auto text-[2rem] font-bold leading-[1.02] tracking-tight bg-gradient-to-r from-[#00ffd9] via-[#00ffd9] to-[#00aeff] bg-clip-text text-transparent sm:max-w-[18ch] sm:text-4xl lg:max-w-none lg:text-5xl"
        >
          End-to-End Services for Modern Brands
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="mx-auto max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl"
        >
          Integrated solutions designed to build, grow, and scale your brand across every touchpoint.
        </motion.p>
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4">
        <Carousel
          setApi={setCarouselApi}
          opts={{ loop: true, align: "start" }}
          plugins={[autoplayPlugin.current]}
          className="w-full"
        >
          <CarouselContent className="-ml-0">
            {serviceListings.map((service) => (
              <CarouselItem key={service.slug} className="basis-full pl-0">
                <Card className="w-full h-full overflow-hidden rounded-[20px] border border-[#00E6C4]/15 bg-[#050808]/95 shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:rounded-[24px] lg:rounded-[30px]">
                  <CardContent className="p-0 h-full">
                    <div className="grid min-w-0 grid-cols-1 lg:grid-cols-2 h-full">
                      {/* Left: Text content */}
                      <div className="flex min-w-0 flex-col justify-center p-5 sm:p-7 lg:p-9">
                        <div className="space-y-4 sm:space-y-5">
                          {/* Label chip */}
                          <div className="flex flex-wrap items-center gap-3">
                            <span className="inline-flex max-w-full rounded-full border border-[#00E6C4]/20 bg-[#00E6C4]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#00E6C4] sm:text-[11px]">
                              {service.eyebrow}
                            </span>
                          </div>

                          {/* Title */}
                          <h3 className="break-words text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
                            {service.title}
                          </h3>

                          {/* Short blurb */}
                          <p className="max-w-xl text-sm leading-6 text-white/72 sm:text-base sm:leading-7">
                            {service.description}
                          </p>

                          {/* Know More button */}
                          <div className="pt-1">
                            <Link
                              to={`/services/${service.slug}`}
                              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#00ffd9] to-[#00aeff] px-5 py-2.5 text-sm font-semibold text-black shadow-md transition-all duration-200 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,217,0.35)]"
                            >
                              Explore {service.title}
                              <ChevronRight className="h-4 w-4" />
                            </Link>
                          </div>
                        </div>
                      </div>

                      {/* Right: Image */}
                      <div className="min-w-0 h-full p-3 pt-0 sm:p-4 sm:pt-0 lg:p-4">
                        <div className="relative h-full w-full mx-auto sm:mx-auto lg:mx-0 sm:w-[70%] lg:w-full rounded-[16px]">
                          <img
                            src={service.image}
                            alt={service.ctaLabel}
                            className="block h-full w-full object-cover object-center rounded-[20px]"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Prev / Dot indicators / Next navigation */}
        <div className="flex items-center justify-center gap-4 mt-1">
          {/* Prev button */}
          <button
            onClick={scrollPrev}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all duration-200 hover:border-[#00E6C4]/40 hover:bg-[#00E6C4]/10 hover:text-[#00E6C4]"
            aria-label="Previous service"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Dot indicators */}
          <div className="flex items-center gap-2">
            {serviceListings.map((_, i) => (
              <button
                key={i}
                onClick={() => carouselApi?.scrollTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? "h-2.5 w-6 bg-[#00E6C4]"
                    : "h-2 w-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          {/* Next button */}
          <button
            onClick={scrollNext}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all duration-200 hover:border-[#00E6C4]/40 hover:bg-[#00E6C4]/10 hover:text-[#00E6C4]"
            aria-label="Next service"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Services
