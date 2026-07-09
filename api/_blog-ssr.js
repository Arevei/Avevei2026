const SITE_URL = (process.env.SITE_URL || process.env.VITE_SITE_URL || "https://www.arevei.com").replace(/\/$/, "")
const BLOG_API_BASE_URL = (
  process.env.BLOG_API_BASE_URL ||
  process.env.VITE_BLOG_API_BASE_URL ||
  "https://areveiadmin-blog.vercel.app"
).replace(/\/$/, "")
const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/images/social.png`

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;")
}

function toIsoDate(value) {
  if (!value) return new Date().toISOString()
  const parsed = new Date(value)
  if (Number.isNaN(parsed.getTime())) return new Date().toISOString()
  return parsed.toISOString()
}

function formatReadableDate(value) {
  const parsed = new Date(value)
  if (Number.isNaN(parsed.getTime())) return ""
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(parsed)
}

function normalizeSlug(rawSlug = "") {
  return decodeURIComponent(rawSlug).trim().replace(/^\/+|\/+$/g, "").toLowerCase()
}

function getPostUrl(post) {
  return `${SITE_URL}/blog/${encodeURIComponent(post.slug || "")}`
}

function getPostImage(post) {
  return post.thumbnail || DEFAULT_OG_IMAGE
}

function renderTags(tags = [], limit = tags.length) {
  return tags
    .slice(0, limit)
    .map((tag) => `<span class="tag tag-muted">#${escapeHtml(tag)}</span>`)
    .join("")
}

function buildHead({
  title,
  description,
  canonicalUrl,
  imageUrl = DEFAULT_OG_IMAGE,
  robots = "index,follow",
  extraMeta = "",
}) {
  return `
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(description)}" />
    <meta name="robots" content="${escapeHtml(robots)}" />
    <link rel="canonical" href="${escapeHtml(canonicalUrl)}" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:url" content="${escapeHtml(canonicalUrl)}" />
    <meta property="og:image" content="${escapeHtml(imageUrl)}" />
    <meta property="og:site_name" content="Arevei Technologies" />
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:title" content="${escapeHtml(title)}" />
    <meta property="twitter:description" content="${escapeHtml(description)}" />
    <meta property="twitter:image" content="${escapeHtml(imageUrl)}" />
    ${extraMeta}
  `
}

function buildShell({ head, body, jsonLd = "" }) {
  return `<!doctype html>
<html lang="en">
  <head>
    ${head}
    <script>
      (function () {
        try {
          var key = "arevei-blog-theme";
          var stored = window.localStorage.getItem(key);
          var theme = stored === "light" || stored === "dark"
            ? stored
            : (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
          document.documentElement.dataset.blogTheme = theme;
          window.__toggleBlogTheme = function () {
            var nextTheme = document.documentElement.dataset.blogTheme === "light" ? "dark" : "light";
            document.documentElement.dataset.blogTheme = nextTheme;
            window.localStorage.setItem(key, nextTheme);
          };
        } catch (error) {}
      })();
    </script>
    <style>
      :root {
        color-scheme: dark;
      }

      :root[data-blog-theme="light"] {
        color-scheme: light;
      }

      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        font-family: "Poppins", system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
        background: #050505;
        color: #e5e7eb;
        min-height: 100vh;
      }

      body::before {
        content: "";
        position: fixed;
        inset: 0;
        z-index: -2;
        background-image:
          linear-gradient(rgba(0, 255, 127, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 255, 127, 0.1) 1px, transparent 1px);
        background-size: 50px 50px;
        opacity: 0.5;
      }

      body::after {
        content: "";
        position: fixed;
        inset: 0;
        z-index: -1;
        background:
          radial-gradient(circle at 20% 0%, rgba(0, 255, 217, 0.16), transparent 30%),
          radial-gradient(circle at 86% 18%, rgba(0, 174, 255, 0.11), transparent 28%),
          linear-gradient(180deg, rgba(5, 5, 5, 0.12), #050505 78%);
        pointer-events: none;
      }

      :root[data-blog-theme="light"] body {
        background: #f7fbfb;
        color: #071312;
      }

      :root[data-blog-theme="light"] body::before {
        background-image:
          linear-gradient(rgba(0, 96, 86, 0.08) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 96, 86, 0.08) 1px, transparent 1px);
      }

      :root[data-blog-theme="light"] body::after {
        background:
          radial-gradient(circle at 20% 0%, rgba(0, 174, 255, 0.12), transparent 30%),
          radial-gradient(circle at 86% 18%, rgba(0, 255, 217, 0.12), transparent 28%),
          linear-gradient(180deg, rgba(255, 255, 255, 0.2), #f7fbfb 78%);
      }

      a {
        color: #00ffd9;
        text-decoration: none;
      }

      a:hover {
        color: #7fffee;
      }

      .shell {
        width: min(1180px, 92%);
        margin: 0 auto;
        padding: 26px 0 72px;
      }

      .brand {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        margin-bottom: 34px;
      }

      .brand img {
        width: 150px;
        height: auto;
      }

      .brand-link,
      .back-link,
      .read-link,
      .theme-toggle {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        color: rgba(0, 255, 217, 0.78);
        font-size: 14px;
        font-weight: 600;
      }

      .brand-actions {
        display: flex;
        align-items: center;
        gap: 12px;
      }

      .theme-toggle {
        justify-content: center;
        min-width: 54px;
        height: 40px;
        padding: 0 12px;
        border: 1px solid rgba(0, 255, 217, 0.25);
        border-radius: 999px;
        background: rgba(0, 0, 0, 0.42);
        cursor: pointer;
        backdrop-filter: blur(16px);
      }

      .theme-toggle::before {
        content: "Light";
        font-size: 12px;
      }

      :root[data-blog-theme="light"] .theme-toggle {
        background: rgba(255, 255, 255, 0.82);
        color: #005f56;
        box-shadow: 0 12px 32px rgba(15, 23, 42, 0.08);
      }

      :root[data-blog-theme="light"] .theme-toggle::before {
        content: "Dark";
      }

      .eyebrow {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 18px;
        border: 1px solid rgba(0, 255, 217, 0.2);
        border-radius: 999px;
        background: rgba(0, 255, 217, 0.1);
        color: #00ffd9;
        padding: 8px 15px;
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }

      .hero-copy {
        max-width: 720px;
        margin: 0 auto 38px;
        text-align: center;
      }

      h1,
      h2,
      h3 {
        font-family: "Sintony", "Poppins", system-ui, sans-serif;
      }

      h1 {
        margin: 0 0 18px;
        color: #ffffff;
        font-size: clamp(2.35rem, 6vw, 4.8rem);
        line-height: 1.05;
      }

      .gradient-title {
        background: linear-gradient(110deg, #ffffff, #00ffd9 56%, #00aeff);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }

      .lede {
        margin: 0;
        color: #9ca3af;
        font-size: clamp(1rem, 2.4vw, 1.15rem);
        line-height: 1.7;
      }

      .card {
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 16px;
        background: rgba(0, 0, 0, 0.44);
        box-shadow: 0 18px 60px rgba(0, 0, 0, 0.24);
      }

      :root[data-blog-theme="light"] h1,
      :root[data-blog-theme="light"] .post-card h3,
      :root[data-blog-theme="light"] .article-header h1,
      :root[data-blog-theme="light"] .post-content h1,
      :root[data-blog-theme="light"] .post-content h2,
      :root[data-blog-theme="light"] .post-content h3,
      :root[data-blog-theme="light"] .post-content h4 {
        color: #071312;
      }

      :root[data-blog-theme="light"] .lede,
      :root[data-blog-theme="light"] .meta,
      :root[data-blog-theme="light"] .post-card p {
        color: #4b5b5a;
      }

      :root[data-blog-theme="light"] .card,
      :root[data-blog-theme="light"] .post-card,
      :root[data-blog-theme="light"] .side-panel {
        border-color: rgba(7, 19, 18, 0.12);
        background: rgba(255, 255, 255, 0.86);
        box-shadow: 0 20px 50px rgba(15, 23, 42, 0.08);
      }

      .post-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 20px;
      }

      .post-card {
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 16px;
        overflow: hidden;
        background: rgba(0, 0, 0, 0.5);
        transition: border-color 180ms ease, transform 180ms ease, box-shadow 180ms ease;
      }

      .post-card:hover {
        border-color: rgba(0, 255, 217, 0.38);
        transform: translateY(-4px);
        box-shadow: 0 8px 30px rgba(0, 255, 217, 0.1);
      }

      .post-card-media {
        position: relative;
        display: block;
        aspect-ratio: 16 / 9;
        overflow: hidden;
        background: rgba(255, 255, 255, 0.04);
      }

      .post-card-media img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 520ms ease;
      }

      .post-card:hover .post-card-media img {
        transform: scale(1.05);
      }

      .post-card-media::after {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.62));
      }

      .post-card-body {
        padding: 20px;
      }

      .post-card h3 {
        margin: 0 0 8px;
        color: #ffffff;
        font-size: 19px;
        line-height: 1.3;
      }

      .post-card p {
        margin: 0;
        color: #9ca3af;
        line-height: 1.6;
        font-size: 14px;
      }

      .meta {
        margin: 0 0 12px;
        color: #9ca3af;
        font-size: 14px;
      }

      .tag-row,
      .article-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }

      .tag {
        display: inline-flex;
        align-items: center;
        border-radius: 999px;
        padding: 6px 11px;
        font-size: 12px;
        font-weight: 700;
      }

      .tag-primary {
        background: linear-gradient(90deg, #00ffd9, #00aeff);
        color: #000000;
      }

      .tag-muted {
        border: 1px solid rgba(255, 255, 255, 0.1);
        color: #a1a1aa;
      }

      .article-hero {
        position: relative;
        height: clamp(220px, 34vw, 360px);
        overflow: hidden;
        border-bottom: 1px solid rgba(255, 255, 255, 0.07);
      }

      .article-hero img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .article-hero::after {
        content: "";
        position: absolute;
        inset: 0;
        background:
          linear-gradient(0deg, #050505 0%, rgba(5, 5, 5, 0.62) 45%, rgba(5, 5, 5, 0.18) 100%),
          linear-gradient(90deg, rgba(0, 0, 0, 0.32), transparent);
      }

      .article-wrap {
        width: min(1060px, 92%);
        margin: -50px auto 0;
        position: relative;
        z-index: 2;
      }

      .article-header {
        padding: 0 0 34px;
      }

      .article-header h1 {
        max-width: 900px;
        font-size: clamp(2rem, 5vw, 3.65rem);
        background: linear-gradient(120deg, #ffffff, #f3f4f6 52%, #00ffd9);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }

      .article-meta {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 18px;
        margin-top: 28px;
        padding: 20px 0;
        border-top: 1px solid rgba(255, 255, 255, 0.07);
        border-bottom: 1px solid rgba(255, 255, 255, 0.07);
      }

      .author {
        display: flex;
        align-items: center;
        gap: 12px;
      }

      .avatar {
        display: grid;
        place-items: center;
        width: 42px;
        height: 42px;
        border-radius: 999px;
        background: linear-gradient(135deg, #00ffd9, #00aeff);
        color: #000000;
        font-weight: 800;
      }

      .article-grid {
        display: grid;
        grid-template-columns: minmax(0, 1fr) 250px;
        gap: 54px;
      }

      .post-content {
        color: #d1d5db;
        line-height: 1.9;
      }

      :root[data-blog-theme="light"] .post-content {
        color: #233231;
      }

      :root[data-blog-theme="light"] .post-content :where(*):not(a) {
        color: #233231 !important;
      }

      .post-content img {
        width: 100%;
        height: auto;
        border-radius: 16px;
      }

      .post-content h1,
      .post-content h2,
      .post-content h3,
      .post-content h4 {
        color: #ffffff;
        line-height: 1.2;
      }

      :root[data-blog-theme="light"] .post-content h1,
      :root[data-blog-theme="light"] .post-content h2,
      :root[data-blog-theme="light"] .post-content h3,
      :root[data-blog-theme="light"] .post-content h4,
      :root[data-blog-theme="light"] .post-content strong,
      :root[data-blog-theme="light"] .post-content th {
        color: #071312 !important;
      }

      :root[data-blog-theme="light"] .post-content a {
        color: #008f82 !important;
      }

      :root[data-blog-theme="light"] .post-content table {
        width: 100%;
        overflow: hidden;
        border-collapse: separate;
        border-spacing: 0;
        border: 1px solid rgba(7, 19, 18, 0.12);
        border-radius: 12px;
        background: rgba(255, 255, 255, 0.72);
      }

      :root[data-blog-theme="light"] .post-content th {
        background: rgba(0, 255, 217, 0.16) !important;
      }

      :root[data-blog-theme="light"] .post-content td,
      :root[data-blog-theme="light"] .post-content th {
        border-bottom: 1px solid rgba(7, 19, 18, 0.1);
        padding: 14px 16px;
      }

      .post-content h2 {
        margin: 42px 0 16px;
        font-size: 1.7rem;
      }

      .post-content h3 {
        margin: 30px 0 12px;
        font-size: 1.28rem;
      }

      .post-content p,
      .post-content ul,
      .post-content ol,
      .post-content blockquote,
      .post-content figure {
        margin: 16px 0;
      }

      .post-content ul,
      .post-content ol {
        padding-left: 1.4rem;
      }

      .post-content blockquote {
        border-left: 3px solid #00ffd9;
        padding-left: 16px;
        color: #e5e7eb;
      }

      :root[data-blog-theme="light"] .post-content blockquote {
        color: #142321;
        background: rgba(0, 255, 217, 0.08);
        border-radius: 0 12px 12px 0;
        padding-top: 12px;
        padding-bottom: 12px;
      }

      .side-panel {
        position: sticky;
        top: 24px;
        align-self: start;
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 16px;
        background: rgba(0, 0, 0, 0.4);
        padding: 20px;
      }

      .side-panel p {
        margin: 0 0 12px;
        color: #4b5563;
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.12em;
        text-transform: uppercase;
      }

      .empty-state {
        padding: 44px 22px;
        text-align: center;
      }

      @media (max-width: 860px) {
        .brand {
          align-items: flex-start;
          flex-direction: column;
        }

        .article-grid {
          display: block;
        }

        .side-panel {
          margin-top: 34px;
          position: static;
        }
      }

      @media (max-width: 560px) {
        .shell {
          width: min(100% - 28px, 1180px);
          padding-top: 20px;
        }

        .article-wrap {
          width: min(100% - 28px, 1060px);
        }
      }
    </style>
    ${jsonLd}
  </head>
  <body>
    ${body}
  </body>
</html>`
}

async function fetchJson(pathname) {
  const response = await fetch(`${BLOG_API_BASE_URL}${pathname}`, {
    headers: { Accept: "application/json" },
  })

  if (!response.ok) {
    const error = new Error(`Blog API request failed (${response.status})`)
    error.status = response.status
    throw error
  }

  return response.json()
}

export async function fetchPublicPosts() {
  const data = await fetchJson("/api/public/posts")
  return Array.isArray(data.posts) ? data.posts : []
}

export async function fetchPublicPostBySlug(slug) {
  const normalized = normalizeSlug(slug)
  if (!normalized) return null

  try {
    const data = await fetchJson(`/api/public/posts/${encodeURIComponent(normalized)}`)
    return data?.post || null
  } catch (error) {
    if (error && error.status === 404) {
      return null
    }

    throw error
  }
}

export function renderBlogIndexHtml(posts) {
  const title = "Blog | Arevei Insights"
  const description = "Read growth, conversion, and digital strategy insights from the Arevei team."
  const canonicalUrl = `${SITE_URL}/blog`

  const cardsHtml = posts
    .map(
      (post) => `
      <article class="post-card">
        <a class="post-card-media" href="${escapeHtml(getPostUrl(post))}">
          <img src="${escapeHtml(getPostImage(post))}" alt="${escapeHtml(post.thumbnailAlt || post.title || "Blog post")}" loading="lazy" />
        </a>
        <div class="post-card-body">
          <div class="tag-row" style="margin-bottom: 12px;">
            <span class="tag tag-primary">${escapeHtml(post.category || "Blog")}</span>
          </div>
          <p class="meta">${escapeHtml(formatReadableDate(post.publishedAt || post.dateModified))} | ${escapeHtml(post.readTime || "")}</p>
          <h3><a href="${escapeHtml(getPostUrl(post))}">${escapeHtml(post.title)}</a></h3>
          <p>${escapeHtml(post.excerpt || "")}</p>
        </div>
      </article>
    `
    )
    .join("")

  const head = buildHead({
    title,
    description,
    canonicalUrl,
    imageUrl: DEFAULT_OG_IMAGE,
  })

  const jsonLd = `<script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Arevei Blog",
    url: canonicalUrl,
    publisher: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Arevei Technologies",
      url: SITE_URL,
    },
  })}</script>`

  const body = `
    <main class="shell">
      <div class="brand">
        <a class="brand-link" href="${SITE_URL}">
          <img src="${SITE_URL}/assets/images/NewWordmarkWhite.svg" alt="Arevei" />
        </a>
        <div class="brand-actions">
          <button class="theme-toggle" type="button" onclick="window.__toggleBlogTheme && window.__toggleBlogTheme()" aria-label="Toggle blog theme"></button>
          <a class="back-link" href="${SITE_URL}">Back to website</a>
        </div>
      </div>
      <section class="hero-copy">
        <div class="eyebrow">Insights &amp; Ideas</div>
        <h1 class="gradient-title">The Arevei Blog</h1>
        <p class="lede">${escapeHtml(description)}</p>
      </section>
      <section>
        ${
          cardsHtml
            ? `<div class="post-grid">${cardsHtml}</div>`
            : `<div class="card empty-state"><h2>No posts available</h2><p class="meta">Check back soon for new Arevei insights.</p></div>`
        }
      </section>
    </main>
  `

  return buildShell({ head, body, jsonLd })
}

export function renderBlogPostHtml(post) {
  const canonicalUrl = `${SITE_URL}/blog/${encodeURIComponent(post.slug)}`
  const title = post.seoTitle ? `${post.seoTitle} | Arevei Blog` : `${post.title} | Arevei Blog`
  const description = post.seoDescription || post.excerpt || "Read this article on the Arevei Blog."
  const publishedAt = toIsoDate(post.publishedAt)
  const modifiedAt = toIsoDate(post.dateModified || post.publishedAt)

  const head = buildHead({
    title,
    description,
    canonicalUrl,
    imageUrl: post.thumbnail || DEFAULT_OG_IMAGE,
    extraMeta: `
      <meta property="og:type" content="article" />
      <meta property="article:published_time" content="${escapeHtml(publishedAt)}" />
      <meta property="article:modified_time" content="${escapeHtml(modifiedAt)}" />
      <meta property="article:author" content="${escapeHtml(post.author || "Arevei")}" />
      <meta property="article:section" content="${escapeHtml(post.category || "Blog")}" />
    `,
  })

  const jsonLd = `<script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.seoTitle || post.title,
    description,
    image: post.thumbnail || DEFAULT_OG_IMAGE,
    url: canonicalUrl,
    datePublished: publishedAt,
    dateModified: modifiedAt,
    author: {
      "@type": "Person",
      name: post.author || "Arevei",
    },
    publisher: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Arevei Technologies",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/assets/images/NewAreveiFavicon.png`,
      },
    },
    mainEntityOfPage: canonicalUrl,
  })}</script>`

  const body = `
    <main>
      <div class="shell">
        <div class="brand">
          <a class="brand-link" href="${SITE_URL}">
            <img src="${SITE_URL}/assets/images/NewWordmarkWhite.svg" alt="Arevei" />
          </a>
          <div class="brand-actions">
            <button class="theme-toggle" type="button" onclick="window.__toggleBlogTheme && window.__toggleBlogTheme()" aria-label="Toggle blog theme"></button>
            <a class="back-link" href="${SITE_URL}/blog">All posts</a>
          </div>
        </div>
      </div>
      <div class="article-hero">
        <img src="${escapeHtml(getPostImage(post))}" alt="${escapeHtml(post.thumbnailAlt || post.title || "Blog post")}" />
      </div>
      <div class="article-wrap">
        <header class="article-header">
          <div class="tag-row" style="margin-bottom: 20px;">
            <span class="tag tag-primary">${escapeHtml(post.category || "General")}</span>
            ${renderTags(post.tags || [], 3)}
          </div>
          <h1>${escapeHtml(post.title || "")}</h1>
          <p class="lede">${escapeHtml(description)}</p>
          <div class="article-meta">
            <div class="author">
              <span class="avatar">${escapeHtml((post.author || "A").charAt(0).toUpperCase())}</span>
              <div>
                <p style="margin: 0; color: white; font-weight: 700;">${escapeHtml(post.author || "Arevei")}</p>
                <p class="meta" style="margin: 2px 0 0;">${escapeHtml(post.authorRole || "Arevei")}</p>
              </div>
            </div>
            <p class="meta" style="margin: 0;">${escapeHtml(formatReadableDate(post.publishedAt || post.dateModified))} | ${escapeHtml(post.readTime || "")}</p>
          </div>
        </header>
        <div class="article-grid">
          <article class="post-content">${post.contentHtml || ""}</article>
          <aside class="side-panel">
            <p>Tagged</p>
            <div class="article-tags">${renderTags(post.tags || [])}</div>
          </aside>
        </div>
      </div>
    </main>
  `

  return buildShell({ head, body, jsonLd })
}

export function renderNotFoundHtml(slug) {
  const title = "Post Not Found | Arevei Blog"
  const canonicalUrl = `${SITE_URL}/blog/${encodeURIComponent(normalizeSlug(slug || ""))}`
  const description = "This blog post could not be found."
  const head = buildHead({
    title,
    description,
    canonicalUrl,
    robots: "noindex,follow",
  })

  const body = `
    <main class="shell">
      <div class="brand">
        <a class="brand-link" href="${SITE_URL}">
          <img src="${SITE_URL}/assets/images/NewWordmarkWhite.svg" alt="Arevei" />
        </a>
        <div class="brand-actions">
          <button class="theme-toggle" type="button" onclick="window.__toggleBlogTheme && window.__toggleBlogTheme()" aria-label="Toggle blog theme"></button>
          <a class="back-link" href="${SITE_URL}/blog">Back to blog</a>
        </div>
      </div>
      <section class="card empty-state">
        <div class="eyebrow">Arevei Blog</div>
        <h1>Post Not Found</h1>
        <p class="lede">We couldn't find this blog post. It may have been moved or unpublished.</p>
        <p style="margin-top: 24px;"><a class="read-link" href="${SITE_URL}/blog">Back to blog</a></p>
      </section>
    </main>
  `

  return buildShell({ head, body })
}

export function getSiteUrl() {
  return SITE_URL
}
