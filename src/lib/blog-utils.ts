import type { BlogPost } from "./blog-types"
import { SITE_URL } from "./site"

/** Returns up to `limit` posts related to `current` by category + tag overlap */
export function getRelatedPosts(current: BlogPost, posts: BlogPost[], limit = 3): BlogPost[] {
  return posts
    .filter((p) => p.id !== current.id)
    .map((p) => ({
      post: p,
      score:
        (p.category === current.category ? 3 : 0) +
        p.tags.filter((t) => current.tags.includes(t)).length,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ post }) => post)
}

/** Converts heading text to a URL-safe anchor id */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim()
}

export function prepareBlogHtml(html: string) {
  const parser = new DOMParser()
  const doc = parser.parseFromString(html, "text/html")
  const headings = Array.from(doc.body.querySelectorAll("h2, h3")).map((element, index) => {
    const text = element.textContent?.trim() || `section-${index + 1}`
    const id = element.id || slugify(text)

    element.id = id

    return {
      id,
      text,
      level: element.tagName.toLowerCase() as "h2" | "h3",
    }
  })

  return {
    html: doc.body.innerHTML,
    headings,
  }
}

/** Generates schema.org BreadcrumbList JSON-LD for a blog post */
export function generateBreadcrumbSchema(post: BlogPost) {
  const siteUrl = SITE_URL
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
      {
        "@type": "ListItem",
        position: 3,
        name: post.category,
        item: `${siteUrl}/blog?category=${encodeURIComponent(post.category)}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: post.title,
        item: `${siteUrl}/blog/${post.slug}`,
      },
    ],
  }
}
