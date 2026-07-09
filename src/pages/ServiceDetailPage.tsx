"use client"

import { useParams, Link, Navigate, useNavigate } from "react-router-dom"
import { useRef, useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { legacyServiceDetails } from "@/lib/legacy-service-details-data"
import { homeServices } from "@/lib/home-services-data"
import { seoServicePages, type SeoServicePage } from "@/lib/seo-service-pages-data"
import { serviceListings } from "@/lib/service-listings-data"
import { buildBreadcrumbSchema, buildFaqSchema, buildOrganizationSchema, buildServiceSchema } from "@/lib/geo-data"
import { SITE_URL } from "@/lib/site"

/* ─── Sticky Prev/Next navigation (home services only) ──────────── */
const StickyServiceNav = ({ slug }: { slug: string }) => {
  const navigate = useNavigate()
  const currentIndex = serviceListings.findIndex((s) => s.slug === slug)
  if (currentIndex === -1) return null

  const prev = serviceListings[(currentIndex - 1 + serviceListings.length) % serviceListings.length]
  const next = serviceListings[(currentIndex + 1) % serviceListings.length]

  return (
    <>
      {/* Left — Prev */}
      <button
        onClick={() => navigate(`/services/${prev.slug}`)}
        className="group fixed left-0 lg:left-24 top-1/2 -translate-y-1/2 z-10 flex items-center gap-0 overflow-hidden lg:rounded-l-2xl rounded-l-none  rounded-r-2xl border-y border-r border-white/10 bg-[#00E6C4]/10  backdrop-blur-md transition-all duration-300 hover:border-[#00E6C4]/30 hover:bg-black/90"
        aria-label={`Previous: ${prev.title}`}
      >
        <span className="flex h-12 w-10 shrink-0 items-center justify-center text-white/60 group-hover:text-[#00E6C4] text-[#00E6C4]  transition-colors duration-200">
          <ChevronLeft className="h-5 w-5 text-[#00E6C4] " />
        </span>
        <span className="max-w-0 overflow-hidden whitespace-nowrap text-xs font-medium text-white/80 transition-all duration-300 group-hover:max-w-[120px] group-hover:pr-4">
          {prev.title}
        </span>
      </button>

      {/* Right — Next */}
      <button
        onClick={() => navigate(`/services/${next.slug}`)}
        className="group fixed lg:right-24 right-0 top-1/2 -translate-y-1/2 z-10 flex items-center gap-0 overflow-hidden rounded-l-2xl lg:rounded-r-2xl rounded-r-none border-y border-l border-white/10 bg-[#00E6C4]/10 backdrop-blur-md transition-all duration-300 hover:border-[#00E6C4]/30 hover:bg-black/90"
        aria-label={`Next: ${next.title}`}
      >
        <span className="max-w-0 overflow-hidden whitespace-nowrap text-xs font-medium text-white/80 transition-all duration-300 group-hover:max-w-[120px] group-hover:pl-4">
          {next.title}
        </span>
        <span className="flex h-12 w-10 shrink-0 items-center justify-center text-white/60 group-hover:text-[#00E6C4] transition-colors duration-200">
          <ChevronRight className="h-5 w-5 text-[#00E6C4] " />
        </span>
      </button>
    </>
  )
}

/* ─── Simple service detail (from ServicesPage) ───────────────────── */
const SimpleServiceDetail = ({
  service,
  scrollRef,
}: {
  service: (typeof legacyServiceDetails)[0]
  scrollRef: React.RefObject<HTMLDivElement>
}) => {
  const Icon = service.icon
  return (
    <div ref={scrollRef} className="relative w-full overflow-x-hidden overflow-y-auto pb-24">
      <div className="relative w-full h-56 md:h-72 lg:h-80 overflow-hidden">
        <img src={service.image || "/placeholder.svg"} alt={service.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
      </div>

      <div className="max-w-3xl mx-auto px-4 md:px-8 -mt-16 relative z-10">
        <motion.div className="mb-4 flex justify-center" initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
          <div className="bg-[#181A20] rounded-full p-4 border-4 border-white/10 shadow-xl">
            <Icon className="w-12 h-12 text-green-400 drop-shadow-lg" />
          </div>
        </motion.div>

        <motion.h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
          {service.title}
        </motion.h1>

        <motion.p className="text-gray-300 text-lg text-center mb-8 leading-relaxed" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
          {service.description}
        </motion.p>

        <motion.div className="bg-[#181A20] border border-gray-700/60 rounded-2xl p-6 mb-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
          <h2 className="text-white font-semibold text-lg mb-4">What's Included</h2>
          <ul className="space-y-3">
            {service.bullets.map((bullet, i) => (
              <motion.li key={i} className="flex items-start gap-3 text-gray-300 text-sm" initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.35 + i * 0.1 }}>
                <span className="mt-1.5 w-2 h-2 rounded-full bg-green-400 shrink-0" />
                {bullet}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }}>
          <Button className="bg-gradient-to-r from-[#00ffd9] to-[#00aeff] text-black font-semibold py-3 px-8 rounded-lg shadow-md hover:scale-105 hover:shadow-[0_0_25px_rgba(0,255,217,0.4)] transition-all duration-200 text-base" asChild>
            <Link to="/meet">Book a Free Consultation</Link>
          </Button>
          <Link to="/services" className="text-gray-400 hover:text-white text-sm transition-colors duration-200 underline underline-offset-4">
            Back to all services
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

/* ─── Rich home service detail ────────────────────────────────────── */
const RichServiceDetail = ({
  service,
  scrollRef,
}: {
  service: (typeof homeServices)[0]
  scrollRef: React.RefObject<HTMLDivElement>
}) => {
  return (
    <div ref={scrollRef} className="relative w-full overflow-x-hidden overflow-y-auto pb-28">
      {/* ── Hero ───────────────────────────────────────────────────── */}
      <div className="relative w-full h-64 md:h-80 lg:h-[26rem] overflow-hidden">
        <img src={service.image || "/placeholder.svg"} alt={service.label} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-black/10" />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 px-6 text-center">
          <motion.span
            className="mb-3 inline-flex rounded-full border border-[#00E6C4]/30 bg-[#00E6C4]/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-widest text-[#00E6C4]"
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
          >
            {service.label}
          </motion.span>
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
          >
            {service.tagline}
          </motion.h1>
        </div>
      </div>

      {/* ── Intro block ─────────────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-6 md:px-8 pt-12 pb-10 text-center">
        <motion.p
          className="text-white/80 text-lg md:text-xl leading-relaxed mb-5"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
        >
          {service.intro}
        </motion.p>
        <motion.p
          className="text-white/50 text-base leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
        >
          {service.whatWeDo}
        </motion.p>
      </div>

      {/* ── Section label ───────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 md:px-8 mb-10">
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-white/8" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/30">What We Deliver</span>
          <div className="h-px flex-1 bg-white/8" />
        </div>
      </div>

      {/* ── Feature sections — editorial layout ─────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 md:px-8 space-y-0">
        {service.features.map((feature, i) => (
          <motion.div
            key={i}
            className="relative grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-0 lg:gap-12 py-12 border-b border-white/6 last:border-b-0"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: 0.05 }}
          >
            {/* Ghost number — decorative background */}
            <span
              aria-hidden
              className="pointer-events-none absolute -top-4 right-0 select-none text-[8rem] md:text-[11rem] font-black leading-none text-white/[0.03]"
            >
              {String(i + 1).padStart(2, "0")}
            </span>

            {/* Left col: number + title */}
            <div className="flex flex-row lg:flex-col items-start gap-3 lg:gap-2 mb-6 lg:mb-0">
              <span className="inline-block bg-gradient-to-r from-[#00ffd9] to-[#00aeff] bg-clip-text text-transparent text-4xl md:text-5xl font-black leading-none tracking-tighter">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-white font-bold text-xl md:text-2xl leading-snug lg:mt-3 lg:max-w-[14rem]">
                {feature.title}
              </h3>
            </div>

            {/* Right col: description + bullets */}
            <div>
              <p className="text-white/65 text-sm md:text-base leading-relaxed mb-6">
                {feature.description}
              </p>

              {/* Bullet grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                {feature.bullets.map((bullet, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-[#00ffd9] to-[#00aeff]" />
                    <span className="text-sm text-white/70 leading-snug">{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── Closing quote ───────────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-6 md:px-8 mt-16">
        <motion.div
          className="relative rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          {/* Gradient border trick */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00ffd9]/20 to-[#00aeff]/20 p-px">
            <div className="h-full w-full rounded-2xl bg-[#08100f]" />
          </div>
          <div className="relative px-8 py-8 text-center">
            {/* Large quote mark */}
            <span className="block text-6xl font-black leading-none text-[#00E6C4]/20 mb-2 font-serif">"</span>
            <p className="text-white/80 text-base md:text-lg leading-relaxed italic">
              {service.closingStatement}
            </p>
          </div>
        </motion.div>
      </div>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <motion.div
        className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center px-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <Button
          className="bg-gradient-to-r from-[#00ffd9] to-[#00aeff] text-black font-semibold py-3 px-8 rounded-lg shadow-md hover:scale-105 hover:shadow-[0_0_25px_rgba(0,255,217,0.4)] transition-all duration-200 text-base"
          asChild
        >
          <Link to="/meet">Book a Free Consultation</Link>
        </Button>
        <Link to="/" className="text-gray-400 hover:text-white text-sm transition-colors duration-200 underline underline-offset-4">
          Back to Home
        </Link>
      </motion.div>
    </div>
  )
}

/* ─── SEO service detail ──────────────────────────────────────────── */
const SeoServiceDetail = ({
  service,
  scrollRef,
}: {
  service: SeoServicePage
  scrollRef: React.RefObject<HTMLDivElement>
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  // Inject JSON-LD schemas
  useEffect(() => {
    const organizationSchema = document.createElement("script")
    organizationSchema.type = "application/ld+json"
    organizationSchema.id = "ld-organization"
    organizationSchema.textContent = JSON.stringify(buildOrganizationSchema())

    const serviceSchema = document.createElement("script")
    serviceSchema.type = "application/ld+json"
    serviceSchema.id = "ld-service"
    serviceSchema.textContent = JSON.stringify(buildServiceSchema(service))

    const faqSchema = document.createElement("script")
    faqSchema.type = "application/ld+json"
    faqSchema.id = "ld-faq"
    faqSchema.textContent = JSON.stringify(buildFaqSchema(service.faqs))

    const breadcrumbSchema = document.createElement("script")
    breadcrumbSchema.type = "application/ld+json"
    breadcrumbSchema.id = "ld-service-breadcrumb"
    breadcrumbSchema.textContent = JSON.stringify(
      buildBreadcrumbSchema([
        { name: "Home", url: `${SITE_URL}/` },
        { name: "Services", url: `${SITE_URL}/services` },
        { name: service.h1, url: `${SITE_URL}/services/${service.slug}` },
      ])
    )

    document.head.appendChild(organizationSchema)
    document.head.appendChild(serviceSchema)
    document.head.appendChild(faqSchema)
    document.head.appendChild(breadcrumbSchema)

    return () => {
      document.getElementById("ld-organization")?.remove()
      document.getElementById("ld-service")?.remove()
      document.getElementById("ld-faq")?.remove()
      document.getElementById("ld-service-breadcrumb")?.remove()
    }
  }, [service.slug])

  return (
    <div ref={scrollRef} className="relative w-full overflow-x-hidden overflow-y-auto pb-28">
      {/* ── Hero ───────────────────────────────────────────────────── */}
      <div className="relative w-full min-h-[18rem] md:min-h-[22rem] flex items-end overflow-hidden bg-gradient-to-br from-[#030e0c] via-[#071a14] to-[#041510]">
        {/* Decorative radial glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#00E6C4]/5 blur-3xl" />
        </div>
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 md:px-10 pb-12 pt-20 text-center">
          <motion.span
            className="mb-4 inline-flex rounded-full border border-[#00E6C4]/30 bg-[#00E6C4]/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-widest text-[#00E6C4]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            Arevei Service
          </motion.span>
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mt-3"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {service.h1}
          </motion.h1>
        </div>
      </div>

      {/* ── Opening paragraph ──────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-6 md:px-10 pt-10 pb-8 text-center">
        <motion.p
          className="text-white/75 text-base md:text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {service.openingParagraph}
        </motion.p>
      </div>

      {/* ── Two section cards ──────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
        {/* Section 1 */}
        <motion.div
          className="rounded-2xl border border-white/8 bg-white/[0.03] p-7"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-white font-bold text-lg mb-5">{service.section1Title}</h2>
          <ul className="space-y-3">
            {service.section1Items.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-[#00ffd9] to-[#00aeff]" />
                <span className="text-sm text-white/70 leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Section 2 */}
        <motion.div
          className="rounded-2xl border border-white/8 bg-white/[0.03] p-7"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-white font-bold text-lg mb-5">{service.section2Title}</h2>
          <ul className="space-y-3">
            {service.section2Items.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-[#00ffd9] to-[#00aeff]" />
                <span className="text-sm text-white/70 leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* ── Ideal for ──────────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 md:px-10 mb-12">
        <motion.div
          className="flex items-start gap-3 rounded-xl border border-[#00E6C4]/20 bg-[#00E6C4]/5 px-6 py-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45 }}
        >
          <span className="text-[#00E6C4] text-sm font-semibold shrink-0 mt-0.5">Ideal for:</span>
          <span className="text-white/70 text-sm leading-relaxed">{service.idealFor}</span>
        </motion.div>
      </div>

      {/* ── FAQ section ────────────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-6 md:px-10 mb-14">
        <div className="flex items-center gap-4 mb-7">
          <div className="h-px flex-1 bg-white/8" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/30">FAQ</span>
          <div className="h-px flex-1 bg-white/8" />
        </div>
        <div className="space-y-3">
          {service.faqs.map((faq, i) => {
            const isOpen = openFaq === i
            return (
              <motion.div
                key={i}
                className="rounded-xl border border-white/8 bg-white/[0.03] overflow-hidden"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-semibold text-white leading-snug">{faq.question}</span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-[#00E6C4] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm text-white/65 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* ── CTA + related services ─────────────────────────────────── */}
      <motion.div
        className="max-w-3xl mx-auto px-6 md:px-10 flex flex-col items-center gap-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-white/60 text-base italic max-w-xl">{service.ctaText}</p>
        <Button
          className="bg-gradient-to-r from-[#00ffd9] to-[#00aeff] text-black font-semibold py-3 px-8 rounded-lg shadow-md hover:scale-105 hover:shadow-[0_0_25px_rgba(0,255,217,0.4)] transition-all duration-200 text-base"
          asChild
        >
          <Link to="/meet">Book a Free Consultation</Link>
        </Button>
        {service.relatedServices.length > 0 && (
          <div className="flex flex-wrap justify-center gap-3">
            <span className="text-xs text-white/30 uppercase tracking-widest w-full mb-1">Related Services</span>
            {service.relatedServices.map((rel) => (
              <Link
                key={rel.slug}
                to={`/services/${rel.slug}`}
                className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs text-white/70 hover:border-[#00E6C4]/40 hover:text-[#00E6C4] transition-all duration-200"
              >
                {rel.label}
              </Link>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  )
}

/* ─── Router ──────────────────────────────────────────────────────── */
const ServiceDetailPage = () => {
  const { slug } = useParams<{ slug: string }>()
  const scrollRef = useRef<HTMLDivElement>(null)

  // Scroll to top whenever slug changes (prev/next navigation)
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0, behavior: "instant" })
  }, [slug])

  if (!slug) return <Navigate to="/services" replace />

  const simpleService = legacyServiceDetails.find((s) => s.slug === slug)
  if (simpleService) return <SimpleServiceDetail service={simpleService} scrollRef={scrollRef} />

  const richService = homeServices.find((s) => s.slug === slug)
  if (richService) {
    return (
      <>
        <StickyServiceNav slug={slug} />
        <RichServiceDetail service={richService} scrollRef={scrollRef} />
      </>
    )
  }

 

  const seoPage = seoServicePages.find((s) => s.slug === slug)
  if (seoPage) 
    return <>
        <StickyServiceNav slug={slug} />
        <SeoServiceDetail service={seoPage} scrollRef={scrollRef} />
      </>
    // return <SeoServiceDetail service={seoPage} scrollRef={scrollRef} />

  return <Navigate to="/services" replace />
}

export default ServiceDetailPage
