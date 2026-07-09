export interface BlogPostCard {
  id: string
  slug: string
  title: string
  excerpt: string
  author: string
  date: string
  readTime: string
  category: string
  tags: string[]
  thumbnail: string
  thumbnailAlt?: string
}

export interface BlogPost extends BlogPostCard {
  seoTitle?: string
  seoDescription?: string
  contentHtml: string
  authorRole: string
  publishedAt: string
  dateModified?: string
  keyTakeaways: string[]
  status?: "DRAFT" | "PUBLISHED"
  editorMode?: "FROALA" | "HTML"
}

export interface BlogPostDetailResponse {
  post: BlogPost
  relatedPosts: BlogPostCard[]
}
