import { motion } from "framer-motion"
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ExternalLink,
  Globe2,
  HeartHandshake,
  Mail,
  ShieldCheck,
  Target,
  UsersRound,
} from "lucide-react"
import ReactGA from "react-ga4"
import Footer from "@/components/Footer/Footer"
import { Link } from "react-router-dom"

const featureSections = [
  {
    icon: UsersRound,
    title: "Smart Membership Management",
    copy: "Manage members, roles, engagement, payments, ID cards, certificates, appointments, and referrals from one dashboard.",
    image: "/assets/products/ngo-management/membership.jpg",
    points: ["Online membership registration", "Membership fees collection", "QR verified ID cards", "Appointment letters and referrals"],
  },
  {
    icon: HeartHandshake,
    title: "Transparent Donation Management",
    copy: "Accept donations securely, issue receipts automatically, verify contributions, and build donor trust with real-time visibility.",
    image: "/assets/products/ngo-management/donations.jpg",
    points: ["Online donations", "Automated receipts", "QR verified receipts", "Payment gateway integration"],
  },
  {
    icon: Target,
    title: "Fundraising Campaigns",
    copy: "Launch campaigns, track goals, measure progress, and manage donor relationships with a professional campaign workflow.",
    image: "/assets/products/ngo-management/fundraising.jpg",
    points: ["Campaign launch", "Goal tracking", "Real-time progress", "Donor analytics"],
  },
  {
    icon: CalendarDays,
    title: "Events & News Management",
    copy: "Keep your community informed with event listings, news updates, editable media, and secure mobile-friendly publishing.",
    image: "/assets/products/ngo-management/events.jpg",
    points: ["Event listings", "News updates", "Editable content", "Mobile friendly"],
  },
]

const benefits = [
  "Affordable pricing",
  "Complete digital ecosystem",
  "Smart email automation",
  "Easy management",
  "Secure system",
  "Professional branding",
  "Dedicated support",
]

const stats = [
  { value: "500+", label: "NGOs empowered" },
  { value: "25+", label: "Countries" },
  { value: "1M+", label: "Lives impacted" },
  { value: "+200%", label: "Efficiency growth" },
]

const NGOProductPage = () => {
  ReactGA.send({ hitType: "pageview", page: "/products/ngo-management", title: "NGO Management Product Page" })

  return (
    <div className="flex flex-1">
      <div className="home-container w-full overflow-x-hidden">
        <main className="home-posts relative pb-6">
          <section className="relative w-full px-4 py-12 sm:px-6 lg:px-12">
            <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#00ffd9]/20 bg-[#00ffd9]/10 px-4 py-2 text-sm font-semibold text-[#00ffd9]">
                  <Globe2 className="h-4 w-4" />
                  Everything your NGO needs in one platform
                </div>
                <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-6xl">
                  Empowering NGOs.
                  <span className="block bg-gradient-to-r from-[#00ffd9] to-[#00aeff] bg-clip-text text-transparent">
                    Amplifying Impact.
                  </span>
                  Accelerating Change.
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/68">
                  AREVEI is an all-in-one digital platform designed for NGOs to enhance visibility, engage communities,
                  drive donations, and manage operations with clarity.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to="/meet"
                    className="inline-flex items-center gap-2 rounded-md bg-[linear-gradient(135deg,#00aeff,#00ffd9)] px-5 py-3 text-sm font-bold text-black"
                  >
                    Transform your NGO
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/products/ngo-management/website"
                    className="inline-flex items-center gap-2 rounded-md border border-white/12 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white hover:text-[#00ffd9]"
                  >
                    View Demo 
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.12 }}
                className="overflow-hidden rounded-lg border border-white/10 bg-black/35 shadow-[0_30px_90px_rgba(0,0,0,0.45)]"
              >
                <img src="/assets/products/ngo-management/overview.jpg" alt="AREVEI NGO Management overview" className="w-full" />
              </motion.div>
            </div>
          </section>

          <section className="w-full border-y border-[#00ffd9]/10 bg-[#00ffd9]/5 px-4 py-10 sm:px-6 lg:px-12">
            <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 text-center lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-lg border border-white/10 bg-black/24 p-5">
                  <p className="text-3xl font-bold text-white sm:text-4xl">{stat.value}</p>
                  <p className="mt-2 text-sm font-semibold uppercase text-[#00ffd9]">{stat.label}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="w-full px-4 py-16 sm:px-6 lg:px-12">
            <div className="mx-auto max-w-7xl">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold text-white sm:text-5xl">A Complete Digital Ecosystem</h2>
                <p className="mt-4 text-lg leading-8 text-white/64">Simplify operations, amplify impact, and accelerate change with tools built for NGO teams.</p>
              </div>

              <div className="mt-14 space-y-16">
                {featureSections.map((feature, index) => {
                  const Icon = feature.icon
                  const reverse = index % 2 === 1

                  return (
                    <div key={feature.title} className="grid gap-8 lg:grid-cols-2 lg:items-center">
                      <div className={reverse ? "lg:order-2" : ""}>
                        <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-[#00ffd9]/10 text-[#00ffd9]">
                          <Icon className="h-7 w-7" />
                        </div>
                        <h3 className="mt-5 text-3xl font-bold text-white">{feature.title}</h3>
                        <p className="mt-4 text-base leading-8 text-white/64">{feature.copy}</p>
                        <div className="mt-6 grid gap-3 sm:grid-cols-2">
                          {feature.points.map((point) => (
                            <div key={point} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.035] p-3">
                              <CheckCircle2 className="h-5 w-5 shrink-0 text-[#00ffd9]" />
                              <span className="text-sm font-semibold text-white/78">{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="overflow-hidden rounded-lg border border-white/10 shadow-[0_24px_70px_rgba(0,0,0,0.36)]">
                        <img src={feature.image} alt={feature.title} className="w-full" />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          <section className="w-full border-y border-white/10 bg-white/[0.025] px-4 py-16 sm:px-6 lg:px-12">
            <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <h2 className="text-3xl font-bold text-white sm:text-5xl">Why NGOs Choose AREVEI</h2>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-3 rounded-lg border border-white/10 bg-black/24 p-4">
                      <ShieldCheck className="h-5 w-5 shrink-0 text-[#00ffd9]" />
                      <span className="font-semibold text-white/82">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="overflow-hidden rounded-lg border border-[#00ffd9]/20 shadow-[0_24px_70px_rgba(0,255,217,0.1)]">
                <img src="/assets/products/ngo-management/comparison.jpg" alt="Why NGOs choose Arevei" className="w-full" />
              </div>
            </div>
          </section>

          <section className="w-full px-4 py-16 sm:px-6 lg:px-12">
            <div className="mx-auto max-w-5xl overflow-hidden rounded-lg border border-[#00ffd9]/20 bg-black/50 text-center shadow-[0_30px_90px_rgba(0,0,0,0.45)]">
              <div className="relative">
                <img src="/assets/products/ngo-management/transformation.jpg" alt="Transform your NGO digitally" className="h-full w-full object-cover opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/35" />
                <div className="absolute inset-0 flex flex-col items-center justify-center px-6 py-12">
                  <h2 className="text-4xl font-bold leading-tight text-white sm:text-6xl">
                    Your Mission.
                    <span className="block text-[#00ffd9]">Our Technology.</span>
                    Greater Impact.
                  </h2>
                  <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-white/58">
                    <span className="inline-flex items-center gap-2"><Globe2 className="h-4 w-4" /> www.arevei.com</span>
                    <span className="inline-flex items-center gap-2"><Mail className="h-4 w-4" /> vinay@arevei.com</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Footer />
        </main>
      </div>
    </div>
  )
}

export default NGOProductPage
