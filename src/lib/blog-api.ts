import type { BlogPostCard, BlogPostDetailResponse } from "./blog-types"

const BLOG_API_BASE_URL = (import.meta.env.VITE_BLOG_API_BASE_URL || "https://areveiadmin-blog.vercel.app").replace(
  /\/$/,
  ""
)

async function requestJson<T>(path: string): Promise<T> {
  const response = await fetch(`${BLOG_API_BASE_URL}${path}`)

  if (!response.ok) {
    const fallbackMessage = response.status === 404 ? "Resource not found" : "API request failed"
    throw new Error(fallbackMessage)
  }

  return response.json() as Promise<T>
}

export async function fetchBlogPosts(category?: string) {
  const query = category ? `?category=${encodeURIComponent(category)}` : ""
  const data = await requestJson<{ posts: BlogPostCard[] }>(`/api/public/posts${query}`)
  return data.posts
}

export async function fetchBlogPost(slug: string) {
  return requestJson<BlogPostDetailResponse>(`/api/public/posts/${encodeURIComponent(slug)}`)
}

export { BLOG_API_BASE_URL }
