import { useEffect, useRef, useState } from "react"
import type { ReactNode } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, ExternalLink } from "lucide-react"

type ProductShowcaseProps = {
  variant?: "home" | "page"
}

type ActiveProduct = "ngo" | "joincloud"

const ngoScreens = [
  { label: "Transform", src: "/assets/products/ngo-management/transformation.jpg" },
  { label: "Platform", src: "/assets/products/ngo-management/platform.jpg" },
  { label: "Members", src: "/assets/products/ngo-management/membership.jpg" },
  { label: "Events", src: "/assets/products/ngo-management/events.jpg" },
  { label: "Fundraising", src: "/assets/products/ngo-management/fundraising.jpg" },
  { label: "Donations", src: "/assets/products/ngo-management/donations.jpg" },
]

const LaptopMockup = ({ children, label }: { children: ReactNode; label: string }) => (
  <div className="laptop-stage mx-auto" aria-label={label}>
    <div className="laptop-screen">{children}</div>
    <img
      src="/assets/products/device/laptop-framer.png"
      alt=""
      aria-hidden="true"
      className="laptop-frame"
      draggable="false"
    />
  </div>
)

const NgoLaptopScreen = ({ active }: { active: boolean }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (!active) return

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % ngoScreens.length)
    }, 2300)

    return () => window.clearInterval(timer)
  }, [active])

  const activeScreen = ngoScreens[activeIndex]

  return (
    <div className="h-full w-full">
      <div key={activeScreen.src} className="laptop-flip-media">
        <img src={activeScreen.src} alt={`AREVEI NGO Management ${activeScreen.label}`} />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex items-center justify-center gap-1.5 bg-gradient-to-t from-black/70 to-transparent pb-3 pt-10">
        {ngoScreens.map((screen, index) => (
          <button
            key={screen.src}
            type="button"
            aria-label={`Show ${screen.label}`}
            onClick={() => setActiveIndex(index)}
            className={`pointer-events-auto h-1.5 rounded-full transition-all duration-300 ${
              activeIndex === index ? "w-7 bg-[#00ffd9]" : "w-1.5 bg-white/35"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

const JoinCloudLaptopScreen = ({ active }: { active: boolean }) => (
  <div className="relative h-full w-full bg-black">
    {active ? (
      <video
        key="joincloud-active-video"
        className="h-full w-full object-cover"
        controls
        muted
        autoPlay
        loop
        playsInline
        preload="metadata"
      >
        <source
          src="https://stream.mux.com/ZR6KBQtJG028VCectitLL3Ud00neFjF7p1Tc3gbvg83bY.m3u8?redundant_streams=true"
          type="application/x-mpegURL"
        />
      </video>
    ) : (
      <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_center,rgba(0,255,217,0.22),rgba(0,0,0,0.92)_64%)]">
        <span className="text-xs font-semibold uppercase text-white/55">JoinCloud</span>
      </div>
    )}
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_48%,rgba(0,0,0,0.28))]" />
  </div>
)

const LaptopScreenSwitcher = ({ activeProduct }: { activeProduct: ActiveProduct }) => (
  <LaptopMockup label={`${activeProduct === "ngo" ? "AREVEI NGO Management" : "JoinCloud"} laptop preview`}>
    <div className="relative h-full w-full">
      <div
        className={`absolute inset-0 transition-all duration-700 ${
          activeProduct === "ngo" ? "opacity-100 blur-0 scale-100" : "opacity-0 blur-sm scale-95"
        }`}
      >
        <NgoLaptopScreen active={activeProduct === "ngo"} />
      </div>
      <div
        className={`absolute inset-0 transition-all duration-700 ${
          activeProduct === "joincloud" ? "opacity-100 blur-0 scale-100" : "opacity-0 blur-sm scale-105"
        }`}
      >
        <JoinCloudLaptopScreen active={activeProduct === "joincloud"} />
      </div>
    </div>
  </LaptopMockup>
)

const ProductPanel = ({
  product,
  eyebrow,
  title,
  subheading,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  observeRef,
  mobileMedia,
}: {
  product: ActiveProduct
  eyebrow: string
  title: string
  subheading: string
  primaryHref: string
  primaryLabel: string
  secondaryHref: string
  secondaryLabel: string
  observeRef: (node: HTMLElement | null) => void
  mobileMedia: ReactNode
}) => (
  <article
    ref={observeRef}
    data-product={product}
    className="flex min-h-[78vh] flex-col items-center justify-center rounded-lg border border-white/10 bg-[linear-gradient(180deg,rgba(7,16,20,0.58),rgba(2,7,9,0.74))] px-5 py-12 text-center shadow-[0_26px_80px_rgba(0,0,0,0.28)] sm:px-8 lg:min-h-[86vh]"
  >
    <p className="text-sm font-semibold uppercase text-[#00ffd9]">{eyebrow}</p>
    <h3 className="mt-4 max-w-xl text-3xl font-semibold leading-tight text-white sm:text-4xl">{title}</h3>
    <p className="mt-4 max-w-lg text-base leading-8 text-white/68 sm:text-lg">{subheading}</p>

    <div className="mt-7 w-full md:hidden">{mobileMedia}</div>

    <div className="mt-8 flex flex-wrap justify-center gap-3">
      <a
        href={primaryHref}
        className="inline-flex items-center gap-2 rounded-md bg-[linear-gradient(135deg,#00aeff,#00ffd9)] px-5 py-3 text-sm font-bold text-black transition-transform duration-300 hover:-translate-y-0.5"
      >
        {primaryLabel}
        <ArrowRight className="h-4 w-4" />
      </a>
      <Link
        to={secondaryHref}
        className="inline-flex items-center gap-2 rounded-md border border-white/12 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:border-[#00ffd9]/45 hover:text-[#00ffd9]"
      >
        {secondaryLabel}
        
        <ExternalLink className="h-4 w-4" />
      </Link>
    </div>
  </article>
)

const ProductShowcase = ({ variant = "home" }: ProductShowcaseProps) => {
  const isPage = variant === "page"
  const [activeProduct, setActiveProduct] = useState<ActiveProduct>("ngo")
  const panelRefs = useRef<Record<ActiveProduct, HTMLElement | null>>({
    ngo: null,
    joincloud: null,
  })

  useEffect(() => {
    const panels = Object.values(panelRefs.current).filter(Boolean) as HTMLElement[]
    if (!panels.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        const product = mostVisible?.target.getAttribute("data-product") as ActiveProduct | null
        if (product) {
          setActiveProduct(product)
        }
      },
      {
        root: null,
        rootMargin: "-30% 0px -30% 0px",
        threshold: [0.2, 0.35, 0.5, 0.65],
      }
    )

    panels.forEach((panel) => observer.observe(panel))

    return () => observer.disconnect()
  }, [])

  const setPanelRef = (product: ActiveProduct) => (node: HTMLElement | null) => {
    panelRefs.current[product] = node
  }

  return (
    <section className="relative w-full overflow-visible px-4 py-8 text-center sm:px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl">
        
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#00ffd9] via-[#00ffd9] to-[#00aeff] bg-clip-text text-transparent ">
            Explore Arevei Products
          </h2>
          
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
            Two product experiences built for NGO operations and direct file sharing.
          </p>
        </div>

        <div className="mt-10 flex flex-col md:flex-row">
          <div className="hidden w-full md:block md:w-[60%] z-10 lg:sticky lg:top-24 lg:self-start ">
            <LaptopScreenSwitcher activeProduct={activeProduct} />
            <div className="mt-6 hidden justify-center gap-2 lg:flex">
              <span
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  activeProduct === "ngo" ? "w-9 bg-[#00ffd9]" : "w-3 bg-white/25"
                }`}
              />
              <span
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  activeProduct === "joincloud" ? "w-9 bg-[#00ffd9]" : "w-3 bg-white/25"
                }`}
              />
            </div>
          </div>

          <div className="space-y-6 w-full md:w-[40%]">
            <ProductPanel
              product="ngo"
              eyebrow="NGO Management"
              title="Transform Your NGO Digitally"
              subheading="Your NGO website, members, events, donations, certificates, and reports in one digital system."
              primaryHref="/products/ngo-management"
              primaryLabel={isPage ? "View details" : "know more"}

              secondaryHref="/products/ngo-management/website"
              secondaryLabel="View Demo"
              observeRef={setPanelRef("ngo")}
              mobileMedia={
                <LaptopMockup label="AREVEI NGO Management mobile laptop preview">
                  <NgoLaptopScreen active />
                </LaptopMockup>
              }
            />

            <ProductPanel
              product="joincloud"
              eyebrow="JoinCloud"
              title="System as a Cloud"
              subheading="Desktop app for LAN and public file sharing directly from your system, with browser links for sending and receiving files."
              primaryHref="/products/joincloud"
              primaryLabel={isPage ? "View details" : "Know more"}
              secondaryHref="/products/joincloud/website"
              secondaryLabel="Visit JoinCloud"
              observeRef={setPanelRef("joincloud")}
              mobileMedia={
                <LaptopMockup label="JoinCloud mobile laptop video preview">
                  <JoinCloudLaptopScreen active />
                </LaptopMockup>
              }
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase
