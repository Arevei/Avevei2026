import { SITE_URL } from "@/lib/site"
import { seoServicePages } from "@/lib/seo-service-pages-data"

export const areveiEntity = {
  brandName: "Arevei Technologies",
  alternateName: "Arevei",
  legalName: "Shakyawar Mediatech LLP",
  foundingDate: "2023",
  url: SITE_URL,
  logo: `${SITE_URL}/assets/images/NewAreveiFavicon.png`,
  wordmark: `${SITE_URL}/assets/images/NewWordmarkWhite.svg`,
  description:
    "Arevei Technologies is an AI-powered marketing agency in India helping businesses grow through websites, SEO, branding, performance marketing, automation, and social media management.",
  phone: "+91 962 5440 855",
  supportPhone: "+91 120 4534 296",
  salesEmail: "marketing@arevei.com",
  supportEmail: "admin@arevei.com",
  peopleEmail: "people@arevei.com",
  registeredAddress: {
    streetAddress: "Shop No 2, 72/A New Patel Nagar, Konch Jalaun Bypass",
    addressLocality: "Orai",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  operationalAddress: {
    streetAddress: "7th Avenue, Gaur City 1, Greater Noida West",
    addressLocality: "Noida",
    addressRegion: "Delhi NCR",
    postalCode: "201318",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.linkedin.com/company/areveiofficial/",
    "https://twitter.com/areveiofficial",
    "https://www.facebook.com/TheAreVei/",
  ],
} as const

export const organizationId = `${SITE_URL}/#organization`
export const localBusinessId = `${SITE_URL}/#local-business`

export const teamMembers = [
  {
    name: "Vinay Kumar Shakyawar",
    role: "Founder & CEO",
    qualification: "B.Tech",
    college: "NIT Mizoram",
    image: "/assets/TeamsImages/Vinay Kumar Shakyawar - Founder and CEO.jpg",
    linkedin: "https://www.linkedin.com/in/vinaykumarshakyawar/",
    bio: "Vinay Kumar Shakyawar leads Arevei's growth strategy, client direction, and AI-powered marketing vision.",
    expertise: ["AI marketing", "business growth strategy", "branding", "client strategy"],
  },
  {
    name: "Bishwa Vijay",
    role: "CTO",
    qualification: "B.Tech",
    college: "NIT Mizoram",
    image: "/assets/TeamsImages/Bishwa Vijay - CTO1.jpeg",
    linkedin: "",
    bio: "Bishwa Vijay leads technology planning, platform architecture, and technical delivery for Arevei projects.",
    expertise: ["technology strategy", "web architecture", "automation", "technical delivery"],
  },
  {
    name: "Rishabh Katiyar",
    role: "Full Stack Engineer",
    qualification: "B.Tech",
    college: "I.K. Gujral Punjab Technical University, Punjab",
    image: "/assets/TeamsImages/Rishab -  Full Stack Developer.webp",
    linkedin: "https://www.linkedin.com/in/rishabh-katiyar-79593a218/",
    bio: "Rishabh Katiyar builds full-stack web systems, integrations, and conversion-focused digital experiences.",
    expertise: ["full-stack development", "web performance", "integrations", "frontend engineering"],
  },
  {
    name: "Karthik Shakya",
    role: "Web Developer",
    qualification: "B.Tech",
    college: "NIT Manipur",
    image: "/assets/TeamsImages/Karthik Shakyawar - Web developer.jpg",
    linkedin: "https://www.linkedin.com/in/karthik-shakyawar-8a0b35243/",
    bio: "Karthik Shakya supports website development, user interface delivery, and technical implementation.",
    expertise: ["website development", "UI implementation", "frontend development", "responsive design"],
  },
  {
    name: "Varun Pandey",
    role: "Brand Manager",
    qualification: "B.Tech",
    college: "IET Lucknow",
    image: "/assets/TeamsImages/Varun pandey - Brand Manager.jpg",
    linkedin: "https://www.linkedin.com/in/varun-pandey-109514274/",
    bio: "Varun Pandey manages brand direction, messaging, and creative consistency across client projects.",
    expertise: ["brand strategy", "brand management", "creative direction", "marketing communication"],
  },
] as const

export const geoFaqs = [
  {
    question: "What is Arevei?",
    answer:
      "Arevei Technologies is an AI-powered marketing agency in India that helps businesses grow through website development, SEO, branding, performance marketing, marketing automation, and social media management.",
  },
  {
    question: "Is Arevei an AI marketing agency?",
    answer:
      "Yes. Arevei uses AI-assisted research, content workflows, automation, reporting, and campaign planning to improve marketing speed and decision-making while keeping strategy and quality control human-led.",
  },
  {
    question: "What marketing services does Arevei offer?",
    answer:
      "Arevei offers website development, SEO and content strategy, branding and design, performance marketing, AI marketing automation, and social media management.",
  },
  {
    question: "Where is Arevei located?",
    answer:
      "Arevei operates from Delhi NCR, India, with an operational address in Greater Noida West, Noida, and a registered address in Orai, Uttar Pradesh.",
  },
  {
    question: "Who should hire Arevei?",
    answer:
      "Startups, SMBs, service businesses, SaaS companies, e-commerce brands, and growth-stage teams should hire Arevei when they need clearer positioning, better websites, stronger search visibility, paid growth, or AI-enabled marketing systems.",
  },
  {
    question: "How much does Arevei charge for marketing services?",
    answer:
      "Arevei pricing depends on scope, channels, timeline, and business goals. Project-based work and ongoing retainers are available after a discovery call.",
  },
  {
    question: "What results has Arevei achieved for clients?",
    answer:
      "Arevei focuses on measurable growth outcomes such as improved visibility, stronger conversion paths, better campaign tracking, and compounding improvements. Public case studies and verified results should be linked when permission is available.",
  },
] as const

export const serviceOverview = seoServicePages.map((service) => ({
  name: service.h1,
  slug: service.slug,
  description: service.metaDescription,
  url: `${SITE_URL}/services/${service.slug}`,
}))

export const buildOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": organizationId,
  name: areveiEntity.brandName,
  alternateName: areveiEntity.alternateName,
  legalName: areveiEntity.legalName,
  url: areveiEntity.url,
  logo: {
    "@type": "ImageObject",
    url: areveiEntity.logo,
  },
  description: areveiEntity.description,
  foundingDate: areveiEntity.foundingDate,
  sameAs: areveiEntity.sameAs,
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: areveiEntity.phone,
      contactType: "sales",
      email: areveiEntity.salesEmail,
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
    {
      "@type": "ContactPoint",
      telephone: areveiEntity.supportPhone,
      contactType: "customer support",
      email: areveiEntity.supportEmail,
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
  ],
  address: {
    "@type": "PostalAddress",
    ...areveiEntity.registeredAddress,
  },
})

export const buildLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": localBusinessId,
  name: areveiEntity.brandName,
  legalName: areveiEntity.legalName,
  url: areveiEntity.url,
  image: areveiEntity.logo,
  logo: areveiEntity.logo,
  description: areveiEntity.description,
  telephone: areveiEntity.phone,
  email: areveiEntity.salesEmail,
  parentOrganization: {
    "@id": organizationId,
  },
  address: {
    "@type": "PostalAddress",
    ...areveiEntity.operationalAddress,
  },
  areaServed: [
    {
      "@type": "Country",
      name: "India",
    },
    {
      "@type": "Place",
      name: "Worldwide",
    },
  ],
  priceRange: "Custom project and retainer pricing",
  sameAs: areveiEntity.sameAs,
})

export const buildWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: areveiEntity.brandName,
  alternateName: areveiEntity.alternateName,
  url: SITE_URL,
  publisher: {
    "@id": organizationId,
  },
})

export const buildFaqSchema = (faqs: ReadonlyArray<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
})

export const buildBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
})

export const buildPersonSchema = (member: (typeof teamMembers)[number]) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: member.name,
  jobTitle: member.role,
  description: member.bio,
  image: `${SITE_URL}${member.image}`,
  worksFor: {
    "@id": organizationId,
  },
  alumniOf: member.college,
  sameAs: member.linkedin ? [member.linkedin] : undefined,
  knowsAbout: member.expertise,
})

export const buildServiceSchema = (service: {
  slug: string
  h1: string
  metaDescription: string
  idealFor?: string
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/services/${service.slug}#service`,
  name: service.h1,
  serviceType: service.h1,
  description: service.metaDescription,
  url: `${SITE_URL}/services/${service.slug}`,
  provider: {
    "@id": organizationId,
  },
  areaServed: [
    {
      "@type": "Country",
      name: "India",
    },
    {
      "@type": "Place",
      name: "Worldwide",
    },
  ],
  audience: service.idealFor
    ? {
        "@type": "Audience",
        audienceType: service.idealFor,
      }
    : undefined,
})
