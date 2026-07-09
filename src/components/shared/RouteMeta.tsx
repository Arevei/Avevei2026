import { useEffect } from "react"
import { useLocation } from "react-router-dom"

import { seoServicePages } from "@/lib/seo-service-pages-data"
import { SITE_URL } from "@/lib/site"

type MetaConfig = {
    title: string
    description: string
    image?: string
    robots?: string
    isArticle?: boolean
    articleMeta?: {
        publishedTime: string
        modifiedTime: string
        author: string
        section: string
        tags: string[]
    }
}

const siteName = "Arevei Technologies"
const siteUrl = SITE_URL
const defaultImage = `${siteUrl}/assets/images/social.png`
const twitterImage = `${siteUrl}/assets/images/social.png`

const routeMeta: Record<string, MetaConfig> = {
    "/": {
        title: "Arevei | Website Development, SEO, Branding & AI Marketing Agency",
        description:
            "Arevei helps modern brands grow with website development, SEO content strategy, branding, performance marketing, automation, and social media management.",
    },
    "/meet": {
        title: "Schedule a Free Meeting | Arevei",
        description:
            "Book a free strategy meeting with Arevei to discuss branding, websites, marketing, automation, and business growth.",
    },
    "/works": {
        title: "Portfolio | Arevei",
        description:
            "Explore Arevei's portfolio of branding, website, marketing, and growth projects built for modern businesses.",
    },
    "/services": {
        title: "Services | Website Development, SEO, Paid Ads & Branding | Arevei",
        description:
            "Explore Arevei services for website development, SEO content strategy, branding, performance marketing, AI marketing automation, and social media management.",
    },
    "/products": {
        title: "Products | NGO Management & JoinCloud | Arevei",
        description:
            "Explore Arevei products including NGO Management for websites, members, donations, events, certificates, and JoinCloud for modern cloud operations.",
        image: `${siteUrl}/assets/products/ngo-management/overview.jpg`,
    },
    "/products/ngo-management": {
        title: "NGO Management Platform | Arevei",
        description:
            "Explore Arevei NGO Management for websites, members, donations, events, fundraising, certificates, reports, and NGO growth.",
        image: `${siteUrl}/assets/products/ngo-management/overview.jpg`,
    },
    "/products/joincloud": {
        title: "JoinCloud | Direct File Sharing Product by Arevei",
        description:
            "Explore JoinCloud, a desktop app for direct LAN and public file sharing with browser preview, QR links, and no cloud upload wait.",
        image: `${siteUrl}/assets/products/ngo-management/transformation.jpg`,
    },
    "/prices": {
        title: "Pricing | Arevei",
        description:
            "View Arevei pricing for branding, website development, and marketing services tailored to business growth.",
    },
    "/contact": {
        title: "Contact Arevei",
        description:
            "Get in touch with Arevei for branding, growth strategy, website development, marketing, and automation services.",
    },
    "/about": {
        title: "About Arevei — The AI Native Website Manager for Modern Brands",
        description:
            "Arevei Technologies builds and manages websites with AI, combining an autonomous Website Manager with a full-stack growth team. Founded 2024, built for AI and B2B SaaS companies.",
    },
    "/what-we-do": {
        title: "What Does Arevei Do? | Services Overview",
        description:
            "Arevei Technologies helps businesses grow through website development, SEO, branding, performance marketing, AI automation, and social media management.",
    },
    "/team": {
        title: "Arevei Team | Leadership, Marketing, Branding & Web Experts",
        description:
            "Meet the Arevei team behind strategy, branding, website development, AI automation, and marketing execution.",
    },
    "/faq": {
        title: "Arevei FAQ | AI Marketing Agency Questions Answered",
        description:
            "Find direct answers about Arevei Technologies, its services, location, pricing approach, and AI-powered marketing work.",
    },
    "/blog": {
        title: "Blog | Arevei Insights",
        description:
            "Read Arevei insights on AI marketing, startup websites, automation, advertising, and growth strategies for modern brands.",
    },
    "/privacypolicy": {
        title: "Privacy Policy | Arevei",
        description: "Read the Arevei privacy policy and learn how we collect, use, and protect your information.",
    },
    "/terms": {
        title: "Terms & Conditions | Arevei",
        description: "Read the terms and conditions that govern the use of Arevei services and website.",
    },
    "/refundpolicy": {
        title: "Refund Policy | Arevei",
        description: "Review Arevei's refund policy for services, payments, and related support terms.",
    },
    "/shippingpolicy": {
        title: "Shipping Policy | Arevei",
        description: "Review Arevei's shipping and delivery policy where applicable.",
    },
    "/sign-in": {
        title: "Sign In | Arevei",
        description: "Access your Arevei account securely.",
        robots: "noindex, nofollow",
    },
    "/sign-up": {
        title: "Sign Up | Arevei",
        description: "Create your Arevei account to manage services and bookings.",
        robots: "noindex, nofollow",
    },
    "/google/auth/contact": {
        title: "Complete Your Profile | Arevei",
        description: "Add your contact details to complete your Arevei profile.",
        robots: "noindex, nofollow",
    },
    "/google/login/wait": {
        title: "Signing You In | Arevei",
        description: "Completing your Google sign-in for Arevei.",
        robots: "noindex, nofollow",
    },
    "/payment/details": {
        title: "Payment Details | Arevei",
        description: "Review payment details for your Arevei service request.",
        robots: "noindex, nofollow",
    },
}

const setMetaTag = (selector: string, attr: "name" | "property", key: string, content: string) => {
    let tag = document.head.querySelector<HTMLMetaElement>(selector)

    if (!tag) {
        tag = document.createElement("meta")
        tag.setAttribute(attr, key)
        document.head.appendChild(tag)
    }

    tag.setAttribute("content", content)
}

const removeMetaTag = (selector: string) => {
    document.head.querySelector(selector)?.remove()
}

const setLinkTag = (rel: string, href: string) => {
    let tag = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)

    if (!tag) {
        tag = document.createElement("link")
        tag.setAttribute("rel", rel)
        document.head.appendChild(tag)
    }

    tag.setAttribute("href", href)
}

const getMetaForPath = (pathname: string): MetaConfig => {
    if (pathname.startsWith("/services/")) {
        const slug = pathname.replace("/services/", "")
        const seoPage = seoServicePages.find((p) => p.slug === slug)
        if (seoPage) {
            return { title: seoPage.metaTitle, description: seoPage.metaDescription }
        }
    }

    if (pathname.startsWith("/blog/")) {
        return {
            title: "Article | Arevei Blog",
            description: "Read the latest insights and strategies from the Arevei blog.",
            image: defaultImage,
            isArticle: false,
        }
    }

    if (pathname.endsWith("/website") && pathname.startsWith("/products/")) {
        return {
            title: "Product Website Preview | Arevei",
            description: "Preview the linked product website inside the Arevei experience.",
            robots: "noindex, nofollow",
        }
    }

    if (pathname.startsWith("/user/account/")) {
        return {
            title: "My Account | Arevei",
            description: "Manage your Arevei account details and service information.",
            robots: "noindex, nofollow",
        }
    }

    if (pathname.startsWith("/user/updatepassword/")) {
        return {
            title: "Update Password | Arevei",
            description: "Update your Arevei account password securely.",
            robots: "noindex, nofollow",
        }
    }

    if (pathname.startsWith("/user/deleteaccount/")) {
        return {
            title: "Delete Account | Arevei",
            description: "Manage deletion of your Arevei account.",
            robots: "noindex, nofollow",
        }
    }

    return (
        routeMeta[pathname] || {
            title: "Arevei",
            description: "Arevei helps businesses grow with branding, websites, marketing, and automation.",
        }
    )
}

const RouteMeta = () => {
    const location = useLocation()

    useEffect(() => {
        const pathname = location.pathname
        const meta = getMetaForPath(pathname)
        const canonicalUrl = `${siteUrl}${pathname}`
        const image = meta.image || defaultImage

        document.title = meta.title

        setMetaTag('meta[name="description"]', "name", "description", meta.description)
        setMetaTag('meta[name="robots"]', "name", "robots", meta.robots || "index, follow")
        setMetaTag('meta[property="og:title"]', "property", "og:title", meta.title)
        setMetaTag('meta[property="og:description"]', "property", "og:description", meta.description)
        setMetaTag('meta[property="og:url"]', "property", "og:url", canonicalUrl)
        setMetaTag('meta[property="og:image"]', "property", "og:image", image)
        setMetaTag('meta[property="og:site_name"]', "property", "og:site_name", siteName)
        setMetaTag('meta[name="twitter:title"]', "name", "twitter:title", meta.title)
        setMetaTag('meta[name="twitter:description"]', "name", "twitter:description", meta.description)
        setMetaTag('meta[name="twitter:url"]', "name", "twitter:url", canonicalUrl)
        setMetaTag('meta[name="twitter:image"]', "name", "twitter:image", meta.image || twitterImage)
        setLinkTag("canonical", canonicalUrl)

        if (meta.isArticle && meta.articleMeta) {
            setMetaTag('meta[property="og:type"]', "property", "og:type", "article")
            setMetaTag(
                'meta[property="article:published_time"]',
                "property",
                "article:published_time",
                meta.articleMeta.publishedTime
            )
            setMetaTag(
                'meta[property="article:modified_time"]',
                "property",
                "article:modified_time",
                meta.articleMeta.modifiedTime
            )
            setMetaTag('meta[property="article:author"]', "property", "article:author", meta.articleMeta.author)
            setMetaTag('meta[property="article:section"]', "property", "article:section", meta.articleMeta.section)
            // article:tag is multi-value — clear stale tags then insert fresh ones
            document.head.querySelectorAll('meta[property="article:tag"]').forEach((el) => el.remove())
            meta.articleMeta.tags.forEach((tag) => {
                const el = document.createElement("meta")
                el.setAttribute("property", "article:tag")
                el.setAttribute("content", tag)
                document.head.appendChild(el)
            })
        } else {
            setMetaTag('meta[property="og:type"]', "property", "og:type", "website")
            removeMetaTag('meta[property="article:published_time"]')
            removeMetaTag('meta[property="article:modified_time"]')
            removeMetaTag('meta[property="article:author"]')
            removeMetaTag('meta[property="article:section"]')
            document.head.querySelectorAll('meta[property="article:tag"]').forEach((el) => el.remove())
        }
    }, [location.pathname])

    return null
}

export default RouteMeta
