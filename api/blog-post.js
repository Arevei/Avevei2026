import { fetchPublicPostBySlug, getSiteUrl, renderBlogPostHtml, renderNotFoundHtml } from "./_blog-ssr.js"

function resolveSlug(req) {
  const querySlug = req.query?.slug

  if (Array.isArray(querySlug) && querySlug.length > 0) {
    return querySlug.join("/")
  }

  if (typeof querySlug === "string" && querySlug.trim()) {
    return querySlug
  }

  const parsedUrl = new URL(req.url || "", getSiteUrl())
  const fallbackSlug = parsedUrl.searchParams.get("slug")
  return fallbackSlug || ""
}

export default async function handler(req, res) {
  const slug = resolveSlug(req)

  if (!slug.trim()) {
    res.status(307).setHeader("Location", "/blog")
    res.end()
    return
  }

  try {
    const post = await fetchPublicPostBySlug(slug)

    if (!post) {
      res.setHeader("Content-Type", "text/html; charset=utf-8")
      res.setHeader("Cache-Control", "s-maxage=120, stale-while-revalidate=600")
      res.status(404).send(renderNotFoundHtml(slug))
      return
    }

    res.setHeader("Content-Type", "text/html; charset=utf-8")
    res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate=3600")
    res.status(200).send(renderBlogPostHtml(post))
  } catch {
    res.setHeader("Content-Type", "text/html; charset=utf-8")
    res.setHeader("Cache-Control", "no-store")
    res.status(503).send(renderNotFoundHtml(slug))
  }
}
