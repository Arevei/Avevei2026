import { motion } from "framer-motion"
import {
  Activity,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Globe2,
  Link2,
  MonitorSmartphone,
  MousePointer2,
  QrCode,
  Shield,
  Smartphone,
  Zap,
} from "lucide-react"
import ReactGA from "react-ga4"
import { Link } from "react-router-dom"
import Footer from "@/components/Footer/Footer"

const oldWay = [
  "Upload takes 1-10 hours",
  "Client downloads again",
  "Multiple copies pile up",
  "Upload revisions again",
  "FINAL_FINAL chaos",
  "Files stored on third-party servers",
]

const joinCloudWay = [
  "Add file instantly",
  "Share link in one click",
  "Browser preview with no download",
  "Feedback and rework live",
  "Client gets the final once",
  "Files stay on your system until shared",
]

const pillars = [
  {
    icon: Zap,
    title: "Fast",
    copy: "Files are shared directly from your system. No cloud upload bottleneck before review.",
  },
  {
    icon: Shield,
    title: "Private",
    copy: "Your files are not stored on third-party servers for mining. Access starts only when you share.",
  },
  {
    icon: MousePointer2,
    title: "Easy",
    copy: "Instant links, QR codes, simple access control, and realtime collaboration without technical complexity.",
  },
]

const features = [
  { icon: Activity, title: "4K Preview", copy: "Recipients preview high-res video and images directly in the browser." },
  { icon: Link2, title: "Link Sharing", copy: "Generate a shareable link for any file or folder in one click." },
  { icon: Smartphone, title: "Multi-Device Access", copy: "Open your cloud on phone, tablet, laptop, or any browser." },
  { icon: CheckCircle2, title: "Built-in File Manager", copy: "Organize and manage everything inside JoinCloud." },
  { icon: Shield, title: "Device Management", copy: "Approve devices, view history, and revoke access instantly." },
  { icon: Globe2, title: "Global Sharing", copy: "Share with anyone, anywhere, without uploading to a cloud server first." },
  { icon: MonitorSmartphone, title: "Remote Cloud Access", copy: "Control your personal cloud from any browser." },
  { icon: QrCode, title: "QR Code Sharing", copy: "Perfect for nearby devices and fast mobile access." },
]

const comparison = [
  ["Share time for 1-5 GB", "1-10 hours", "Few minutes, based on network speed"],
  ["Review without downloading", "Chaotic", "Browser preview"],
  ["File copies at project end", "Multiple on both sides", "One final copy"],
  ["Current version", "Nobody knows", "The link always is"],
  ["Feedback process", "Slow", "Realtime"],
  ["Third-party server storage", "Always", "Never by default"],
  ["Recipient account", "Sometimes", "Never"],
]

const JoinCloudProductPage = () => {
  ReactGA.send({ hitType: "pageview", page: "/products/joincloud", title: "JoinCloud Product Page" })

  return (
    <div className="flex flex-1">
      <div className="home-container w-full overflow-x-hidden">
        <main className="home-posts relative pb-6">
          <section className="relative w-full px-4 py-12 sm:px-6 lg:px-12">
            <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#00ffd9]/20 bg-[#00ffd9]/10 px-4 py-2 text-sm font-semibold text-[#00ffd9]">
                  <span className="h-2 w-2 rounded-full bg-[#00ffd9]" />
                  v0.3.4 Beta - Available now
                </div>
                <h1 className="mt-6 text-5xl font-bold leading-tight text-white sm:text-7xl">
                  Stop Uploading.
                  <span className="block bg-gradient-to-r from-[#00ffd9] to-[#00aeff] bg-clip-text text-transparent">
                    Start Creating.
                  </span>
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/68">
                  Send footage to your editor the moment you stop recording. No upload. No wait. Your files never leave
                  your system until you choose to share them.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link
                    to="/products/joincloud/website"
                    className="inline-flex items-center gap-2 rounded-md bg-[linear-gradient(135deg,#00aeff,#00ffd9)] px-5 py-3 text-sm font-bold text-black"
                  >
                    View JoinCloud website
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/meet"
                    className="inline-flex items-center gap-2 rounded-md border border-white/12 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white hover:text-[#00ffd9]"
                  >
                    Talk to Arevei
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <p className="mt-5 text-sm text-white/45">50 creators in private beta. Launching April 12, 2026.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.12 }}
                className="rounded-lg border border-white/10 bg-[linear-gradient(180deg,rgba(4,13,17,0.92),rgba(0,0,0,0.88))] p-5 shadow-[0_30px_90px_rgba(0,0,0,0.45)]"
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-300" />
                    <span className="h-3 w-3 rounded-full bg-[#00ffd9]" />
                  </div>
                  <p className="text-xs font-semibold uppercase text-white/45">Local-to-cloud link</p>
                </div>
                <div className="mt-5 rounded-lg border border-white/10 bg-black/35 p-5">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#00ffd9]/10 text-[#00ffd9]">
                        <Activity className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">FINAL_V4_RENDER.mp4</p>
                        <p className="mt-1 text-sm text-white/45">4.2 GB - 4K ProRes</p>
                      </div>
                    </div>
                    <span className="rounded-full border border-green-400/25 bg-green-400/10 px-3 py-1 text-xs font-bold text-green-300">
                      Live share active
                    </span>
                  </div>
                </div>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border border-white/10 bg-black/35 p-4">
                    <p className="text-sm text-white/45">Upload progress</p>
                    <p className="mt-2 text-3xl font-bold text-white">0%</p>
                    <p className="mt-1 text-sm text-[#00ffd9]">Because there is no upload.</p>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-black/35 p-4">
                    <p className="text-sm text-white/45">Transfer speed</p>
                    <p className="mt-2 text-3xl font-bold text-white">Line Rate</p>
                    <p className="mt-1 text-sm text-green-300">Host-to-recipient direct.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          <section className="w-full border-y border-white/10 bg-white/[0.025] px-4 py-16 sm:px-6 lg:px-12">
            <div className="mx-auto max-w-7xl">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold text-white sm:text-5xl">The End of FINAL_FINAL Chaos</h2>
                <p className="mt-4 text-lg leading-8 text-white/64">
                  Your own computer becomes the cloud. No third-party server. Direct from your machine to anyone, anywhere.
                </p>
              </div>
              <div className="mt-10 grid gap-6 md:grid-cols-2">
                <div className="rounded-lg border border-red-400/20 bg-red-500/5 p-6">
                  <h3 className="text-2xl font-bold text-red-300">The Old Way</h3>
                  <div className="mt-5 space-y-3">
                    {oldWay.map((item) => (
                      <div key={item} className="flex gap-3 text-white/64">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-red-400" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-lg border border-[#00ffd9]/25 bg-[#00ffd9]/5 p-6 shadow-[0_24px_70px_rgba(0,255,217,0.08)]">
                  <h3 className="text-2xl font-bold text-[#00ffd9]">The JoinCloud Way</h3>
                  <div className="mt-5 space-y-3">
                    {joinCloudWay.map((item) => (
                      <div key={item} className="flex gap-3 text-white/76">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#00ffd9]" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full px-4 py-16 sm:px-6 lg:px-12">
            <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
              {pillars.map((pillar) => {
                const Icon = pillar.icon

                return (
                  <div key={pillar.title} className="rounded-lg border border-white/10 bg-white/[0.035] p-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-[#00ffd9]/10 text-[#00ffd9]">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="mt-5 text-2xl font-bold text-white">{pillar.title}</h3>
                    <p className="mt-3 text-base leading-7 text-white/58">{pillar.copy}</p>
                  </div>
                )
              })}
            </div>
          </section>

          <section className="w-full border-y border-white/10 bg-white/[0.025] px-4 py-16 sm:px-6 lg:px-12">
            <div className="mx-auto max-w-7xl">
              <h2 className="text-center text-3xl font-bold text-white sm:text-5xl">Engineered for Creators</h2>
              <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {features.map((feature) => {
                  const Icon = feature.icon

                  return (
                    <div key={feature.title} className="rounded-lg border border-white/10 bg-black/24 p-5">
                      <Icon className="h-6 w-6 text-[#00ffd9]" />
                      <h3 className="mt-4 text-lg font-semibold text-white">{feature.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-white/58">{feature.copy}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          <section className="w-full px-4 py-16 sm:px-6 lg:px-12">
            <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <h2 className="text-3xl font-bold text-white sm:text-5xl">Old Way vs. JoinCloud</h2>
                <p className="mt-4 text-lg leading-8 text-white/64">
                  Same creative workflow. Now optimized by removing the waiting, duplicate downloads, and version confusion.
                </p>
              </div>
              <div className="overflow-x-auto rounded-lg border border-white/10">
                <table className="w-full min-w-[680px] text-left text-sm">
                  <thead className="bg-white/[0.06] text-white">
                    <tr>
                      <th className="px-4 py-3">Workflow</th>
                      <th className="px-4 py-3">Old Way</th>
                      <th className="px-4 py-3 text-[#00ffd9]">JoinCloud</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 text-white/66">
                    {comparison.map(([label, oldValue, joinValue]) => (
                      <tr key={label}>
                        <td className="px-4 py-3 font-semibold text-white">{label}</td>
                        <td className="px-4 py-3">{oldValue}</td>
                        <td className="px-4 py-3">{joinValue}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="w-full px-4 py-16 sm:px-6 lg:px-12">
            <div className="mx-auto max-w-4xl rounded-lg border border-[#00ffd9]/25 bg-[linear-gradient(180deg,rgba(0,255,217,0.12),rgba(255,255,255,0.03))] p-8 text-center shadow-[0_30px_90px_rgba(0,255,217,0.08)] sm:p-12">
              <p className="text-3xl font-semibold leading-tight text-white sm:text-5xl">
                "I believe your data should be in your control. Because that is your right."
              </p>
              <div className="mt-8 inline-flex items-center gap-4 text-left">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#00ffd9]/10 text-lg font-bold text-[#00ffd9]">
                  VS
                </div>
                <div>
                  <p className="font-bold text-white">Vinay Shakyawar</p>
                  <p className="text-sm text-[#00ffd9]">Founder, JoinCloud</p>
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

export default JoinCloudProductPage
