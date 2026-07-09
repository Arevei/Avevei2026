import type { IconType } from "react-icons"
import { FaBullhorn, FaChartLine, FaGlobe, FaPaintBrush, FaRobot, FaSearch } from "react-icons/fa"

export type ServiceListing = {
  slug: string
  title: string
  eyebrow: string
  image: string
  description: string
  bullets: string[]
  ctaLabel: string
  icon: IconType
}

export const serviceListings: ServiceListing[] = [
  {
    slug: "website-development",
    title: "Website Development",
    eyebrow: "SEO-ready builds",
    image: "/assets/images/webservice.png",
    description:
      "Fast, conversion-focused websites, landing pages, and CMS builds engineered to turn traffic into qualified leads.",
    bullets: [
      "Custom website design and development",
      "SEO-safe migrations, redirects, and canonical setup",
      "Core Web Vitals, speed, and conversion optimisation",
    ],
    ctaLabel: "Website Development Services",
    icon: FaGlobe,
  },
  {
    slug: "seo-content-strategy",
    title: "SEO & Content Strategy",
    eyebrow: "Organic growth",
    image: "/assets/images/seo.png",
    description:
      "Technical SEO, keyword strategy, and content systems that help your business rank higher and attract better-fit traffic.",
    bullets: [
      "Technical SEO audits and on-page optimisation",
      "Keyword research, topic clusters, and editorial planning",
      "SEO-led blogs, pillar pages, and landing page copy",
    ],
    ctaLabel: "SEO and Content Strategy Services",
    icon: FaSearch,
  },
  {
    slug: "branding-design",
    title: "Branding & Design",
    eyebrow: "Memorable identity",
    image: "/assets/ServicesImages/Branding.webp",
    description:
      "Brand strategy, identity systems, and digital-first design that make your business look credible and feel impossible to ignore.",
    bullets: [
      "Logo systems, colour palettes, and typography",
      "Brand guidelines and messaging direction",
      "Marketing collateral and website UI design",
    ],
    ctaLabel: "Branding and Design Services",
    icon: FaPaintBrush,
  },
  {
    slug: "performance-marketing",
    title: "Performance Marketing",
    eyebrow: "Paid growth",
    image: "/assets/ServicesImages/Marketing.webp",
    description:
      "Paid ads on Google, Meta, and LinkedIn managed with full-funnel strategy, tracking, testing, and ROI accountability.",
    bullets: [
      "Google, Meta, and LinkedIn campaign management",
      "Landing page testing and conversion tracking",
      "Audience research, reporting, and budget optimisation",
    ],
    ctaLabel: "Performance Marketing Services",
    icon: FaChartLine,
  },
  {
    slug: "ai-marketing-automation",
    title: "AI Marketing & Automation",
    eyebrow: "Scale smarter",
    image: "/assets/ServicesImages/Automation.webp",
    description:
      "AI workflows and marketing automation that streamline lead handling, content ops, reporting, and campaign execution.",
    bullets: [
      "AI content pipelines and reporting dashboards",
      "CRM enrichment, lead scoring, and nurture flows",
      "HubSpot, ActiveCampaign, Make, n8n, and custom automations",
    ],
    ctaLabel: "AI Marketing and Automation Services",
    icon: FaRobot,
  },
  {
    slug: "social-media-management",
    title: "Social Media Management",
    eyebrow: "Consistent presence",
    image: "/assets/images/social.png",
    description:
      "Strategy, creative, scheduling, and reporting for social channels that need to build audience, trust, and inbound demand.",
    bullets: [
      "Monthly content calendars and approval workflows",
      "Copywriting, design, and founder-led content",
      "Community engagement and social performance reporting",
    ],
    ctaLabel: "Social Media Management Services",
    icon: FaBullhorn,
  },
]
