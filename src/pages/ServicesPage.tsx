"use client"

import { motion } from "framer-motion"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, type CarouselApi } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FaChartLine, FaHandshake, FaRobot } from "react-icons/fa"
import { Link } from "react-router-dom"
import CraftingStatusHero from "@/components/ComponentsForPages/ForServicesPage/CraftingStatusHero"
import WhatsAppbtn from "@/components/ui/WhatsAppBtn"
import { useRef, useEffect, useState } from "react"
import { serviceListings } from "@/lib/service-listings-data"
import { SITE_URL } from "@/lib/site"
import JsonLd from "@/components/shared/JsonLd"
import { buildBreadcrumbSchema, buildOrganizationSchema, organizationId } from "@/lib/geo-data"
import Footer from "@/components/Footer/Footer"

const Services = () => {
  // For parallax effect on cards
  const parallaxRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return
      const cards = parallaxRef.current.querySelectorAll(".parallax-card")
      cards.forEach((card: any) => {
        const rect = card.getBoundingClientRect()
        const offset = Math.max(0, 1 - Math.abs(rect.top - window.innerHeight / 2) / 400)
        card.style.transform = `translateY(${(1 - offset) * 30}px)`
      })
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const schema = document.createElement("script")
    schema.type = "application/ld+json"
    schema.id = "ld-services-overview"
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: serviceListings.map((service, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Service",
          name: service.ctaLabel,
          description: service.description,
          url: `${SITE_URL}/services/${service.slug}`,
          provider: {
            "@id": organizationId,
          },
        },
      })),
    })

    document.head.appendChild(schema)

    return () => {
      document.getElementById("ld-services-overview")?.remove()
    }
  }, [])

  // Autoplay plugin for mobile carousel
  const autoplayPlugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true, stopOnMouseEnter: true })
  )
  const [, setCarouselApi] = useState<CarouselApi>()

  // Animated bullet points
  const bulletVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({ opacity: 1, x: 0, transition: { delay: i * 0.12 } }),
  }

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center overflow-x-hidden pb-24">
      <JsonLd id="ld-services-organization" data={buildOrganizationSchema()} />
      <JsonLd
        id="ld-services-breadcrumb"
        data={buildBreadcrumbSchema([
          { name: "Home", url: `${SITE_URL}/` },
          { name: "Services", url: `${SITE_URL}/services` },
        ])}
      />
      <CraftingStatusHero />

      {/* Services Slider/Grid */}
      <section ref={parallaxRef} className="relative z-10 w-full flex flex-col items-center mt-12">
        <div className="w-full max-w-4xl px-4 text-center mb-10 space-y-4">
          <motion.p
            className="text-xs font-semibold uppercase tracking-[0.28em] text-[#00E6C4]"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.45 }}
          >
            SEO-Focused Service Stack
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: 0.05 }}
          >
            Services built to improve discoverability, conversion, and long-term growth
          </motion.h2>
          <motion.p
            className="text-base md:text-lg text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            From website development and SEO content strategy to paid media, branding, AI automation, and social
            media management, every service page now maps directly to Arevei's search-focused offer set.
          </motion.p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 md:px-10 lg:px-20 w-full max-w-7xl">
          {serviceListings.map((service, idx) => {
            const Icon = service.icon
            return (
              <motion.article
                key={service.slug}
                className="parallax-card group  border border-gray-700/60 rounded-3xl shadow-2xl p-0 flex flex-col items-center hover:border-green-400/80 transition-all duration-300 relative overflow-hidden focus-within:ring-2 focus-within:ring-green-400"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                tabIndex={0}
                aria-label={service.title}
              >
                {/* Service Image */}
                <div className="w-full h-40 md:h-48 lg:h-52 overflow-hidden flex items-center justify-center bg-gradient-to-br from-green-900/30 via-blue-900/20 to-black/80">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.ctaLabel}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                {/* Animated Icon */}
                <motion.div
                  className="-mt-8 mb-2 z-10 bg-[#181A20] rounded-full p-3 border-4 border-white/10 shadow-lg"
                  whileHover={{ scale: 1.18, rotate: 8 }}
                  whileTap={{ scale: 0.95, rotate: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  aria-label={service.title + " icon"}
                >
                  <Icon className="w-10 h-10 text-green-400 drop-shadow-lg" />
                </motion.div>
                <div className="flex flex-col flex-1 w-full px-6 pb-6 pt-2">
                  <CardHeader className="text-center space-y-2">
                    <span className="text-[11px] uppercase tracking-[0.24em] text-[#00E6C4]">{service.eyebrow}</span>
                    <CardTitle className="text-2xl font-bold text-white mb-2 drop-shadow">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-200 mb-3 text-sm text-center">{service.description}</CardContent>
                  <ul className="text-left text-sm text-gray-300 mb-4 space-y-1">
                    {service.bullets.map((b, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start gap-2"
                        variants={bulletVariants}
                        initial="hidden"
                        whileInView="visible"
                        custom={i}
                        viewport={{ once: true, amount: 0.2 }}
                      >
                        <span className="mt-1 w-2 h-2 rounded-full bg-green-400 inline-block" />
                        {b}
                      </motion.li>
                    ))}
                  </ul>
                  <Button
                    className="mt-auto w-full bg-[#00E6C4]/10 text-[#00E6C4]  font-semibold py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#00ffd9] focus:ring-offset-2 transition-all duration-200 hover:scale-105 "
                    aria-label={`Explore ${service.ctaLabel}`}
                    tabIndex={0}
                    asChild
                  >
                    <Link to={`/services/${service.slug}`}>Explore {service.title}</Link>
                  </Button>
                </div>
              </motion.article>
            )
          })}
        </div>
        {/* Mobile Carousel */}
        <div className="md:hidden w-full px-0">
          <Carousel
            setApi={setCarouselApi}
            opts={{ loop: true }}
            plugins={[autoplayPlugin.current]}
            className="w-full"
          >
            <CarouselContent>
              {serviceListings.map((service, idx) => {
                const Icon = service.icon
                return (
                  <CarouselItem key={service.slug} className="p-2">
                    <motion.article
                      className="parallax-card group bg-[#181A20] border border-gray-700/60 rounded-3xl shadow-2xl p-0 flex flex-col items-center hover:border-green-400/80 transition-all duration-300 relative overflow-hidden focus-within:ring-2 focus-within:ring-green-400"
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                      tabIndex={0}
                      aria-label={service.title}
                    >
                      {/* Service Image */}
                      <div className="w-full h-40 xs:h-48 overflow-hidden flex items-center justify-center bg-gradient-to-br from-green-900/30 via-blue-900/20 to-black/80">
                        <img
                          src={service.image || "/placeholder.svg"}
                          alt={service.ctaLabel}
                          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                      {/* Animated Icon */}
                      <motion.div
                        className="-mt-8 mb-2 z-10 bg-[#181A20] rounded-full p-3 border-4 border-white/10 shadow-lg"
                        whileHover={{ scale: 1.18, rotate: 8 }}
                        whileTap={{ scale: 0.95, rotate: -8 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        aria-label={service.title + " icon"}
                      >
                        <Icon className="w-10 h-10 text-green-400 drop-shadow-lg" />
                      </motion.div>
                      <div className="flex flex-col flex-1 w-full px-4 pb-6 pt-2">
                        <CardHeader className="text-center space-y-2">
                          <span className="text-[11px] uppercase tracking-[0.24em] text-[#00E6C4]">{service.eyebrow}</span>
                          <CardTitle className="text-2xl font-bold text-white mb-2 drop-shadow">
                            {service.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="text-gray-200 mb-2 text-base">{service.description}</CardContent>
                        <ul className="text-left text-sm text-gray-300 mb-4 space-y-1">
                          {service.bullets.map((b, i) => (
                            <motion.li
                              key={i}
                              className="flex items-start gap-2"
                              variants={bulletVariants}
                              initial="hidden"
                              whileInView="visible"
                              custom={i}
                              viewport={{ once: true, amount: 0.2 }}
                            >
                              <span className="mt-1 w-2 h-2 rounded-full bg-green-400 inline-block" />
                              {b}
                            </motion.li>
                          ))}
                        </ul>
                        <Button
                          className="mt-auto w-full bg-gradient-to-r from-[#00ffd9] to-[#00aeff] text-black font-semibold py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#00ffd9] focus:ring-offset-2 transition-all duration-200 hover:scale-105 hover:shadow-[0_0_25px_rgba(0,255,217,0.4)] focus-visible:ring-4 focus-visible:ring-[#00aeff]"
                          aria-label={`Explore ${service.ctaLabel}`}
                          tabIndex={0}
                          asChild
                        >
                          <Link to={`/services/${service.slug}`}>Explore {service.title}</Link>
                        </Button>
                      </div>
                    </motion.article>
                  </CarouselItem>
                )
              })}
            </CarouselContent>
            <CarouselPrevious className="left-1 h-10 w-10 rounded-full bg-black/60 border-gray-600 text-white hover:bg-black/80" />
            <CarouselNext className="right-1 h-10 w-10 rounded-full bg-black/60 border-gray-600 text-white hover:bg-black/80" />
          </Carousel>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 w-full flex flex-col items-center mt-20 px-4 md:px-10 lg:px-20">
        <motion.div
          className="w-full max-w-4xl text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow">
            Ready to connect your website, SEO, ads, and automation?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            Let's map the right combination of services for your growth stage, acquisition channels, and internal
            capacity. We can help you prioritise what to build first and what to automate next.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              className="bg-[#00E6C4]/10 text-[#00E6C4]  font-semibold py-3 px-8 rounded-lg shadow-md hover:scale-105 hover:shadow-[0_0_25px_rgba(0,255,217,0.4)] transition-all duration-200 text-lg"
              asChild
            >
              <Link to="/meet">Get Started Today</Link>
            </Button>

            <div className="flex items-center gap-2">
              <WhatsAppbtn />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <motion.div
              className="text-center p-6 bg-[#00E6C4]/10 border border-gray-700/60 rounded-2xl hover:border-[#00ffd9] transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="w-12 h-12 bg-[#00ffd9]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHandshake className="w-6 h-6 text-[#00ffd9]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Discovery Call</h3>
              <p className="text-gray-300 text-sm">
                Get a focused review of your website, search visibility, paid channels, and automation opportunities.
              </p>
            </motion.div>

            <motion.div
              className="text-center p-6 bg-[#00E6C4]/10 border border-gray-700/60 rounded-2xl hover:border-[#00aeff] transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-12 h-12 bg-[#00ffd9]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaChartLine className="w-6 h-6 text-[#00ffd9]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Revenue-Focused Strategy</h3>
              <p className="text-gray-300 text-sm">
                Every recommendation is tied back to discoverability, lead quality, conversion rate, and ROI.
              </p>
            </motion.div>

            <motion.div
              className="text-center p-6 bg-[#00E6C4]/10 border border-gray-700/60 rounded-2xl hover:border-[#00ffd9] transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="w-12 h-12 bg-[#00ffd9]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaRobot className="w-6 h-6 text-[#00ffd9]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Automation-Ready Execution</h3>
              <p className="text-gray-300 text-sm">
                Use AI and workflow automation where it creates real leverage without sacrificing quality control.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Blinking cursor style for typewriter */}
      <style>{`
        .blinking-cursor { animation: blink 1.2s steps(1) infinite; }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
      `}</style>

      <Footer />
    </div>
  )
}

export default Services
