import { fetchPublicPosts, renderBlogIndexHtml } from "./_blog-ssr.js"

export default async function handler(req, res) {
  res.setHeader("Content-Type", "text/html; charset=utf-8")
  res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate=3600")

  try {
    const posts = await fetchPublicPosts()
    res.status(200).send(renderBlogIndexHtml(posts))
  } catch {
    res.status(503).send(renderBlogIndexHtml([]))
  }
}
