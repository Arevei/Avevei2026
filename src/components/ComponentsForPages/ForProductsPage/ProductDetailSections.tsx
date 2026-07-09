import {
  BadgeCheck,
  CalendarDays,
  Cloud,
  Download,
  ExternalLink,
  Eye,
  FileBadge,
  FolderOpen,
  Globe2,
  HeartHandshake,
  Link2,
  LockKeyhole,
  MonitorSmartphone,
  QrCode,
  Rocket,
  ShieldCheck,
  Sparkles,
  UsersRound,
  WalletCards,
  Wifi,
  Zap,
} from "lucide-react"
import type { ElementType, ReactNode } from "react"

type DetailFeature = {
  title: string
  copy: string
}

type ProductDetailCardProps = {
  badge: string
  name: string
  tagline: string
  description: string
  icon: ElementType
  primaryHref: string
  primaryLabel: string
  meta: string[]
  categories: string[]
  features: DetailFeature[]
  children: ReactNode
}

const ngoModules = [
  { icon: Globe2, title: "Website", copy: "Create a stunning NGO website and keep every update connected to your operations." },
  { icon: UsersRound, title: "Membership", copy: "Manage member registration, roles, QR ID cards, fees, certificates, and referrals." },
  { icon: HeartHandshake, title: "Donations", copy: "Accept donations securely with receipts, QR verification, and gateway support." },
  { icon: CalendarDays, title: "Events & News", copy: "Publish events, updates, categories, media, and editable content from one dashboard." },
  { icon: Rocket, title: "Fundraising", copy: "Launch campaigns with goals, progress tracking, donor lists, and campaign analytics." },
  { icon: FileBadge, title: "Certificates", copy: "Generate membership certificates and appointment letters without manual work." },
  { icon: ShieldCheck, title: "Reports", copy: "Measure donations, engagement, events, campaign progress, and organizational growth." },
  { icon: BadgeCheck, title: "Why NGOs choose it", copy: "Affordable, secure, easy to manage, professionally branded, and built for impact." },
]

const joinCloudFlow = [
  "Install JoinCloud",
  "Add your files",
  "Create a share link or QR",
  "Preview in browser",
  "Download only the final",
]

const joinCloudComparison = [
  ["Share time for 1-5 GB", "1-10 hours", "Few minutes, based on network speed"],
  ["Review before download", "Chaotic downloads", "Browser preview"],
  ["Project file copies", "Multiple on both sides", "One final copy"],
  ["Current version", "Nobody knows", "The link always is"],
  ["Third-party storage", "Always", "Never by default"],
  ["Recipient account", "Sometimes needed", "Never needed"],
]

const ProductDetailCard = ({
  badge,
  name,
  tagline,
  description,
  icon: Icon,
  primaryHref,
  primaryLabel,
  meta,
  categories,
  features,
  children,
}: ProductDetailCardProps) => (
  <section className="w-full px-4 sm:px-6 lg:px-12">
    <div className="mx-auto max-w-7xl overflow-hidden rounded-lg border border-white/10 bg-[linear-gradient(180deg,rgba(7,15,19,0.92),rgba(2,6,8,0.96))] shadow-[0_30px_90px_rgba(0,0,0,0.45)]">
      <div className="grid border-b border-white/10 lg:grid-cols-[1fr_22rem]">
        <div className="flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:p-8">
          <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-lg border border-[#00ffd9]/25 bg-[#00ffd9]/10 text-[#00ffd9]">
            <Icon className="h-12 w-12" />
          </div>
          <div className="text-center sm:text-left">
            <p className="text-sm font-semibold uppercase text-[#00ffd9]">{badge}</p>
            <h2 className="mt-2 text-3xl font-bold leading-tight text-white sm:text-5xl">{name}</h2>
            <p className="mt-2 text-lg text-white/76">{tagline}</p>
            <div className="mt-4 flex flex-wrap justify-center gap-3 text-sm text-white/50 sm:justify-start">
              {meta.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <aside className="border-t border-white/10 p-6 lg:border-l lg:border-t-0">
          <a
            href={primaryHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-bold text-black transition-transform duration-300 hover:-translate-y-0.5"
          >
            {primaryLabel}
            <ExternalLink className="h-4 w-4" />
          </a>
          <div className="mt-6 space-y-5 text-left">
            <div>
              <p className="text-sm font-semibold text-white/45">Works with</p>
              <p className="mt-2 text-base font-semibold text-white">Browser, desktop, mobile, teams</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-white/45">Categories</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {categories.map((category) => (
                  <span key={category} className="rounded-md border border-white/10 bg-white/[0.045] px-3 py-1.5 text-sm text-white/76">
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>

      <div className="grid lg:grid-cols-[1fr_22rem]">
        <div className="space-y-8 p-6 text-left sm:p-8">
          <p className="max-w-4xl text-lg leading-9 text-white/76">{description}</p>
          {children}
        </div>

        <aside className="border-t border-white/10 p-6 lg:border-l lg:border-t-0">
          <p className="text-sm font-semibold uppercase text-[#00ffd9]">Highlights</p>
          <div className="mt-4 space-y-4">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-lg border border-white/10 bg-white/[0.035] p-4 text-left">
                <h3 className="text-base font-semibold text-white">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/58">{feature.copy}</p>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  </section>
)

const ProductDetailSections = () => {
  return (
    <div className="w-full space-y-10">
      <ProductDetailCard
        badge="NGO Management"
        name="Transform Your NGO Digitally"
        tagline="Everything your NGO needs in one platform."
        description="AREVEI NGO Management brings the website, membership, donations, events, fundraising, certificates, reports, and communication workflows into one digital ecosystem built for NGOs."
        icon={Sparkles}
        primaryHref="https://nisvarthjan.vercel.app/"
        primaryLabel="Open NGO website"
        meta={["Built by Arevei", "NGO operations", "All-in-one platform"]}
        categories={["Membership", "Donations", "Events", "Fundraising", "Certificates"]}
        features={[
          { title: "Simplify operations", copy: "Bring daily administration, payments, content, and reports into one dashboard." },
          { title: "Amplify impact", copy: "Keep donors, members, volunteers, and communities connected with less manual work." },
          { title: "Accelerate change", copy: "Launch campaigns, manage events, and measure progress with real-time visibility." },
        ]}
      >
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {ngoModules.map((module) => {
            const Icon = module.icon

            return (
              <div key={module.title} className="rounded-lg border border-white/10 bg-black/24 p-4">
                <Icon className="h-6 w-6 text-[#00ffd9]" />
                <h3 className="mt-4 text-lg font-semibold text-white">{module.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/58">{module.copy}</p>
              </div>
            )
          })}
        </div>

        <div className="overflow-hidden rounded-lg border border-white/10 bg-black/35">
          <img
            src="/assets/products/ngo-management/overview.jpg"
            alt="AREVEI NGO Management overview"
            className="h-full w-full object-cover"
          />
        </div>
      </ProductDetailCard>

      <ProductDetailCard
        badge="JoinCloud"
        name="Stop Uploading. Start Creating."
        tagline="Turn your system storage into a personal cloud."
        description="JoinCloud is a desktop app that lets creators and teams share large files directly from their own system over LAN or public links. Recipients can preview files in the browser and download only when the file is truly final."
        icon={Cloud}
        primaryHref="https://www.joincloud.cloud/"
        primaryLabel="Open JoinCloud"
        meta={["v0.3.4 Beta", "Private beta", "Launching April 12, 2026"]}
        categories={["Direct sharing", "File preview", "LAN", "Public links", "Creator workflow"]}
        features={[
          { title: "Fast", copy: "No cloud upload bottleneck first. Files move from host to recipient based on network speed." },
          { title: "Private", copy: "Files are not stored on third-party servers for mining and nothing is accessible until you share it." },
          { title: "Easy", copy: "Instant links, QR codes, access revoke, and clean file management from one place." },
        ]}
      >
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-white/10 bg-black/24 p-5">
            <Link2 className="h-7 w-7 text-[#00ffd9]" />
            <h3 className="mt-4 text-lg font-semibold text-white">Share files directly</h3>
            <p className="mt-2 text-sm leading-6 text-white/58">From your system to anyone. No upload to third-party servers first.</p>
          </div>
          <div className="rounded-lg border border-white/10 bg-black/24 p-5">
            <Eye className="h-7 w-7 text-[#00ffd9]" />
            <h3 className="mt-4 text-lg font-semibold text-white">View before download</h3>
            <p className="mt-2 text-sm leading-6 text-white/58">Recipients preview videos and images in-browser before downloading.</p>
          </div>
          <div className="rounded-lg border border-white/10 bg-black/24 p-5">
            <Zap className="h-7 w-7 text-[#00ffd9]" />
            <h3 className="mt-4 text-lg font-semibold text-white">Save time, ship faster</h3>
            <p className="mt-2 text-sm leading-6 text-white/58">Remove repeated upload, download, review, and re-upload loops.</p>
          </div>
        </div>

        <div className="rounded-lg border border-white/10 bg-black/35 p-5">
          <p className="text-sm font-semibold uppercase text-[#00ffd9]">Install. Add. Share. Done.</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-5">
            {joinCloudFlow.map((step, index) => (
              <div key={step} className="rounded-lg border border-white/10 bg-white/[0.035] p-4 text-center">
                <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-[#00ffd9] text-sm font-bold text-black">
                  {index + 1}
                </div>
                <p className="mt-3 text-sm font-semibold text-white">{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-lg border border-white/10 bg-black/24 p-5">
            <p className="text-sm font-semibold uppercase text-[#00ffd9]">Built for</p>
            <div className="mt-4 space-y-3 text-sm leading-6 text-white/68">
              <p>Video editors moving files between laptop, PC, mobile, and tablet.</p>
              <p>Creators and production teams sharing large files daily.</p>
              <p>Studios, offices, research teams, and privacy-focused organizations.</p>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-white/10">
            <video className="h-full min-h-64 w-full object-cover" controls muted playsInline preload="metadata">
              <source
                src="https://stream.mux.com/ZR6KBQtJG028VCectitLL3Ud00neFjF7p1Tc3gbvg83bY.m3u8?redundant_streams=true"
                type="application/x-mpegURL"
              />
            </video>
          </div>
        </div>

        <div className="overflow-x-auto rounded-lg border border-white/10">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead className="bg-white/[0.055] text-white">
              <tr>
                <th className="px-4 py-3 font-semibold">Side by side</th>
                <th className="px-4 py-3 font-semibold">Old Way</th>
                <th className="px-4 py-3 font-semibold text-[#00ffd9]">JoinCloud</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 text-white/68">
              {joinCloudComparison.map(([label, oldWay, joinCloud]) => (
                <tr key={label}>
                  <td className="px-4 py-3 font-semibold text-white">{label}</td>
                  <td className="px-4 py-3">{oldWay}</td>
                  <td className="px-4 py-3">{joinCloud}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ProductDetailCard>

      <section className="w-full px-4 sm:px-6 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: MonitorSmartphone, title: "Multi-device access", copy: "Open your cloud on phone, tablet, laptop, or browser." },
            { icon: FolderOpen, title: "Built-in file manager", copy: "Organize and manage files in a clean structured workspace." },
            { icon: QrCode, title: "QR code sharing", copy: "Create instant access for nearby devices and fast handoffs." },
            { icon: LockKeyhole, title: "Device control", copy: "Approve devices, view connection history, and revoke access." },
            { icon: Wifi, title: "Global sharing", copy: "Share with anyone, anywhere, without uploading first." },
            { icon: Download, title: "No file size limits", copy: "Share large files without fighting platform limits." },
            { icon: WalletCards, title: "No recipient signup", copy: "They open the link, preview, and download when ready." },
            { icon: ShieldCheck, title: "Outbound only", copy: "System files stay isolated from JoinCloud access." },
          ].map((item) => {
            const Icon = item.icon

            return (
              <div key={item.title} className="rounded-lg border border-white/10 bg-white/[0.035] p-5">
                <Icon className="h-6 w-6 text-[#00ffd9]" />
                <h3 className="mt-4 text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/58">{item.copy}</p>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default ProductDetailSections
