import { existsSync, readFileSync, writeFileSync } from "fs"
import { resolve, dirname } from "path"
import { fileURLToPath } from "url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const projectRoot = resolve(__dirname, "..")
const publicDir = resolve(projectRoot, "public")

function parseEnvFile(filePath) {
  if (!existsSync(filePath)) {
    return {}
  }

  return Object.fromEntries(
    readFileSync(filePath, "utf8")
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter((line) => line && !line.startsWith("#") && line.includes("="))
      .map((line) => {
        const [key, ...rest] = line.split("=")
        return [key.trim(), rest.join("=").trim().replace(/^['"]|['"]$/g, "")]
      })
  )
}

const env = {
  ...parseEnvFile(resolve(projectRoot, ".env")),
  ...parseEnvFile(resolve(projectRoot, ".env.local")),
  ...process.env,
}

const SITE_URL = (env.SITE_URL || env.VITE_SITE_URL || "https://www.arevei.com").replace(/\/$/, "")
const BLOG_API_BASE_URL = (
  env.BLOG_API_BASE_URL ||
  env.VITE_BLOG_API_BASE_URL ||
  "https://areveiadmin-blog.vercel.app"
).replace(/\/$/, "")

const TODAY = new Date().toISOString().split("T")[0]

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

function toIsoDate(value) {
  if (!value) {
    return TODAY
  }

  const parsed = new Date(value)

  if (Number.isNaN(parsed.getTime())) {
    return TODAY
  }

  return parsed.toISOString().split("T")[0]
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

function buildSitemapXml(blogPosts) {
  const staticEntries = staticRoutes.map(
    (route) => `
  <url>
    <loc>${SITE_URL}${route.path}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )

  const serviceEntries = serviceRoutes.map(
    (route) => `
  <url>
    <loc>${SITE_URL}${route.path}</loc>
    <lastmod>${TODAY}</lastmod>
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

function buildRobotsTxt() {
  return `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`
}

const blogPosts = await fetchPublishedBlogPosts()

writeFileSync(resolve(publicDir, "sitemap.xml"), buildSitemapXml(blogPosts).trim() + "\n")
writeFileSync(resolve(publicDir, "robots.txt"), buildRobotsTxt())

console.log("SEO files generated successfully")
console.log(`  Site URL: ${SITE_URL}`)
console.log(`  Blog API: ${BLOG_API_BASE_URL}`)
console.log(`  Static routes: ${staticRoutes.length}`)
console.log(`  Blog posts: ${blogPosts.length}`)
