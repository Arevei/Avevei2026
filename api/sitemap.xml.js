import fs from "fs"
import path from "path"

const SITE_URL = (process.env.SITE_URL || process.env.VITE_SITE_URL || "https://www.arevei.com").replace(/\/$/, "")
const BLOG_API_BASE_URL = (
  process.env.BLOG_API_BASE_URL ||
  process.env.VITE_BLOG_API_BASE_URL ||
  "https://areveiadmin-blog.vercel.app"
).replace(/\/$/, "")

const staticRoutes = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/blog", priority: "0.9", changefreq: "daily" },
  { path: "/services", priority: "0.8", changefreq: "monthly" },
  { path: "/about", priority: "0.8", changefreq: "monthly" },
  { path: "/what-we-do", priority: "0.8", changefreq: "monthly" },
  { path: "/team", priority: "0.7", changefreq: "monthly" },
  { path: "/faq", priority: "0.8", changefreq: "monthly" },
  { path: "/works", priority: "0.8", changefreq: "monthly" },
  { path: "/prices", priority: "0.8", changefreq: "monthly" },
  { path: "/contact", priority: "0.7", changefreq: "monthly" },
  { path: "/meet", priority: "0.7", changefreq: "monthly" },
  { path: "/privacypolicy", priority: "0.3", changefreq: "yearly" },
  { path: "/refundpolicy", priority: "0.3", changefreq: "yearly" },
  { path: "/shippingpolicy", priority: "0.3", changefreq: "yearly" },
  { path: "/terms", priority: "0.3", changefreq: "yearly" },
]

const serviceRoutes = [
  { path: "/services/website-development", priority: "0.8", changefreq: "monthly" },
  { path: "/services/seo-content-strategy", priority: "0.8", changefreq: "monthly" },
  { path: "/services/branding-design", priority: "0.8", changefreq: "monthly" },
  { path: "/services/performance-marketing", priority: "0.8", changefreq: "monthly" },
  { path: "/services/ai-marketing-automation", priority: "0.8", changefreq: "monthly" },
  { path: "/services/social-media-management", priority: "0.8", changefreq: "monthly" },
]

function todayIsoDate() {
  return new Date().toISOString().split("T")[0]
}

function toIsoDate(value) {
  if (!value) {
    return todayIsoDate()
  }

  const parsed = new Date(value)

  if (Number.isNaN(parsed.getTime())) {
    return todayIsoDate()
  }

  return parsed.toISOString().split("T")[0]
}

function buildSitemapXml(blogPosts) {
  const staticEntries = staticRoutes.map(
    (route) => `
  <url>
    <loc>${SITE_URL}${route.path}</loc>
    <lastmod>${todayIsoDate()}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )

  const serviceEntries = serviceRoutes.map(
    (route) => `
  <url>
    <loc>${SITE_URL}${route.path}</loc>
    <lastmod>${todayIsoDate()}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )

  const blogEntries = blogPosts.map(
    (post) => `
  <url>
    <loc>${SITE_URL}/blog/${post.slug}</loc>
    <lastmod>${toIsoDate(post.dateModified || post.publishedAt)}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
  )

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticEntries, ...serviceEntries, ...blogEntries].join("")}
</urlset>
`
}

async function fetchPublishedBlogPosts() {
  const response = await fetch(`${BLOG_API_BASE_URL}/api/public/posts`, {
    headers: {
      Accept: "application/json",
    },
  })

  if (!response.ok) {
    throw new Error(`Failed to fetch blog posts from ${BLOG_API_BASE_URL} (${response.status})`)
  }

  const data = await response.json()

  if (!Array.isArray(data.posts)) {
    throw new Error("Blog API response is missing the posts array.")
  }

  return data.posts
}

function readStaticFallback() {
  const fallbackPath = path.resolve(process.cwd(), "public", "sitemap.xml")

  if (!fs.existsSync(fallbackPath)) {
    return null
  }

  return fs.readFileSync(fallbackPath, "utf8")
}

export default async function handler(req, res) {
  res.setHeader("Content-Type", "application/xml; charset=utf-8")
  res.setHeader("Cache-Control", "s-maxage=900, stale-while-revalidate=86400")

  try {
    const blogPosts = await fetchPublishedBlogPosts()
    res.status(200).send(buildSitemapXml(blogPosts).trim())
  } catch (error) {
    const fallback = readStaticFallback()

    if (fallback) {
      res.status(200).send(fallback.trim())
      return
    }

    res.status(500).send(`<!-- ${error instanceof Error ? error.message : "Sitemap generation failed"} -->`)
  }
}
