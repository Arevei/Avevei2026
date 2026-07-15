import { useEffect, useMemo, useState } from "react"
import { Link } from "react-router-dom"

import { fetchBlogPosts } from "@/lib/blog-api"
import type { BlogPostCard } from "@/lib/blog-types"
import { useBlogTheme } from "@/lib/use-blog-theme"
import "./Blog.css"

const FeaturedCard = ({ post }: { post: BlogPostCard }) => (
  <Link to={`/blog/${post.slug}`} className="block group mb-10">
    <div className="relative overflow-hidden rounded-[28px] border border-black/8 bg-white shadow-[0_24px_70px_rgba(13,15,14,0.08)] transition-all duration-500 hover:-translate-y-1 hover:border-[#0F6E56]/35 dark:border-[#1E2523] dark:bg-[#0F1413] dark:hover:border-[#00E6C4]/35 dark:hover:shadow-[0_24px_70px_rgba(0,230,196,0.08)]">
      <div className="absolute inset-0 z-0 hidden dark:block">
        <img
          src={post.thumbnail}
          alt={post.thumbnailAlt || post.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[#050505]/78" />
      </div>

      <div className="featured-card-content relative z-10 grid gap-6 p-5 md:grid-cols-[0.95fr_1.25fr] md:p-8 lg:p-10">
        <div className="aspect-[16/10] overflow-hidden rounded-[20px] border border-black/8 bg-[#F7F7F4] dark:hidden">
          <img
            src={post.thumbnail}
            alt={post.thumbnailAlt || post.title}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex min-h-[280px] flex-col justify-end md:min-h-[340px]">
        <div className="mb-4 flex items-center gap-2">
          <span className="rounded-full bg-[#C7F27A] px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-[#0A0D0C] dark:bg-[#00E6C4]">
            Featured
          </span>
          <span className="category-badge rounded-full border border-[#00E6C4]/40 px-3 py-1 text-[11px] font-semibold text-[#00E6C4]">
            {post.category}
          </span>
        </div>
        <h2 className="font-display mb-3 line-clamp-2 text-xl leading-tight text-[#0D0F0E] transition-colors duration-300 group-hover:text-[#0F6E56] dark:text-white dark:drop-shadow-lg dark:group-hover:text-[#00E6C4] md:text-3xl lg:text-4xl">
          {post.title}
        </h2>
        <p className="mb-5 line-clamp-2 max-w-xl text-sm text-black/62 dark:text-gray-300 dark:drop-shadow-md md:text-base">
          {post.excerpt}
        </p>
        <div className="flex items-center gap-3 text-sm text-black/45 dark:text-gray-400">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#C7F27A] text-sm font-bold text-[#0A0D0C] dark:bg-[#00E6C4]">
            {post.author.charAt(0)}
          </div>
          <span className="author-name font-medium text-black dark:text-white">{post.author}</span>
          <span className="text-black/25 dark:text-gray-600">|</span>
          <span>{post.date}</span>
          <span className="text-black/25 dark:text-gray-600">|</span>
          <span className="text-[#0F6E56] dark:text-[#00E6C4]/80">{post.readTime}</span>
        </div>
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#C7F27A]/8 blur-3xl dark:bg-[#00E6C4]/8" />
    </div>
  </Link>
)

const BlogCard = ({ post, isNewest }: { post: BlogPostCard; isNewest: boolean }) => (
  <Link to={`/blog/${post.slug}`} className="block h-full group">
    <article className="flex h-full flex-col overflow-hidden rounded-[20px] border border-black/8 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#0F6E56]/35 hover:shadow-[0_18px_45px_rgba(13,15,14,0.08)] dark:border-[#1E2523] dark:bg-[#0F1413] dark:hover:border-[#00E6C4]/35 dark:hover:shadow-[0_18px_45px_rgba(0,230,196,0.08)]">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={post.thumbnail}
          alt={post.thumbnailAlt || post.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 hidden bg-black/45 dark:block" />
        <span className="absolute left-3 top-3 rounded-full bg-[#C7F27A] px-2.5 py-1 text-[11px] font-bold text-[#0A0D0C] shadow-lg dark:bg-[#00E6C4]">
          {post.category}
        </span>
        {isNewest && (
          <span className="absolute right-3 top-3 rounded-full border border-[#00E6C4]/45 bg-[#071312]/70 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-[#00E6C4]">
            New
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2.5 flex items-center gap-2 text-xs text-black/45 dark:text-[#8A928F]">
          <span>{post.date}</span>
          <span>|</span>
          <span className="text-[#0F6E56] dark:text-[#00E6C4]">{post.readTime}</span>
        </div>
        <h3 className="font-display mb-2.5 line-clamp-2 text-base leading-snug text-black transition-colors duration-200 group-hover:text-[#0F6E56] dark:text-[#EDEFEE] dark:group-hover:text-[#00E6C4]">
          {post.title}
        </h3>
        <p className="mb-3 line-clamp-3 flex-1 text-sm leading-relaxed text-black/60 dark:text-[#8A928F]">
          {post.excerpt}
        </p>
        <div className="mb-3 flex flex-wrap gap-1">
          {post.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-black/10 px-2 py-0.5 text-[10px] text-black/45 dark:border-white/10 dark:text-[#8A928F]"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between border-t border-black/6 pt-3 dark:border-[#1E2523]">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#D6F5EF] text-xs font-bold text-[#0F6E56] dark:bg-[#00E6C4]/20 dark:text-[#00E6C4]">
              {post.author.charAt(0)}
            </div>
            <span className="max-w-[110px] truncate text-xs text-black/45 dark:text-[#8A928F]">
              {post.author}
            </span>
          </div>
          <span className="text-xs font-medium text-[#0F6E56] transition-transform group-hover:translate-x-0.5 dark:text-[#00E6C4]">
            Read →
          </span>
        </div>
      </div>
    </article>
  </Link>
)

const BlogSkeleton = () => (
  <div className="space-y-10">
    <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16 xl:px-20">
      <div className="overflow-hidden rounded-[28px] border border-black/8 bg-white dark:border-[#1E2523] dark:bg-[#0F1413]">
        <div className="aspect-[21/9] w-full skeleton-shimmer" />
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-[20px] border border-black/8 bg-white dark:border-[#1E2523] dark:bg-[#0F1413]"
          >
            <div className="aspect-video w-full skeleton-shimmer" />
            <div className="space-y-3 p-5">
              <div className="h-4 w-28 rounded-full skeleton-shimmer" />
              <div className="h-7 w-full rounded-full skeleton-shimmer" />
              <div className="h-7 w-5/6 rounded-full skeleton-shimmer" />
              <div className="h-4 w-full rounded-full skeleton-shimmer" />
              <div className="h-4 w-4/5 rounded-full skeleton-shimmer" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

const Blog = () => {
  const [posts, setPosts] = useState<BlogPostCard[]>([])
  const [activeCategory, setActiveCategory] = useState("All")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { isLightTheme } = useBlogTheme()

  useEffect(() => {
    let cancelled = false

    setLoading(true)
    fetchBlogPosts()
      .then((data) => {
        if (!cancelled) {
          setPosts(data)
          setError(null)
        }
      })
      .catch(() => {
        if (!cancelled) {
          setError("We couldn't load the blog posts right now.")
        }
      })
      .finally(() => {
        if (!cancelled) {
          setLoading(false)
        }
      })

    return () => {
      cancelled = true
    }
  }, [])

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(posts.map((p) => p.category)))],
    [posts]
  )

  const filteredPosts = useMemo(
    () =>
      activeCategory === "All" ? posts : posts.filter((p) => p.category === activeCategory),
    [activeCategory, posts]
  )

  const featuredPost = filteredPosts[0] ?? null
  const gridPosts = filteredPosts.slice(1)

  return (
    <div className={`blog-theme ${isLightTheme ? "blog-theme-light" : "blog-theme-dark"} flex min-h-0 flex-1`}>
      <div className="w-full overflow-x-hidden">
        <div className="min-h-full w-full text-black dark:text-[#EDEFEE]">
          <div className="relative px-6 pb-8 pt-12 text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#0F6E56]/20 bg-[#0F6E56]/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#0F6E56] dark:border-[#00E6C4]/20 dark:bg-[#00E6C4]/10 dark:text-[#00E6C4]">
              Insights &amp; Ideas
            </div>
            <h1 className="display-hero mb-4 text-4xl leading-tight text-black dark:text-[#EDEFEE] md:text-5xl lg:text-6xl">
              The Arevei Blog
            </h1>
            <p className="mx-auto mb-5 max-w-xl text-base text-black/60 dark:text-[#8A928F] md:text-lg">
              Strategies, playbooks, and insights for modern brands doing business with AI.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-black/40 dark:text-[#8A928F]">
              <span>{posts.length} articles</span>
              <span className="text-[#0F6E56]/30 dark:text-[#00E6C4]/30">|</span>
              <span>{Math.max(categories.length - 1, 0)} topics</span>
            </div>
          </div>

          <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-2 px-6 pb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? "scale-105 bg-[#0F6E56] text-white shadow-lg shadow-[#0F6E56]/15 dark:bg-[#00E6C4] dark:text-[#0A0D0C] dark:shadow-[#00E6C4]/20"
                    : "border border-black/8 bg-white text-black/60 hover:border-[#0F6E56]/30 hover:text-black dark:border-[#1E2523] dark:bg-[#0F1413] dark:text-[#8A928F] dark:hover:border-[#00E6C4]/30 dark:hover:text-[#EDEFEE]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="mb-10 h-px w-full bg-[#0F6E56]/15 dark:bg-[#00E6C4]/16" />

          <div className="mx-auto max-w-7xl px-4 pb-20 md:px-8 lg:px-16 xl:px-20">
            {loading ? (
              <BlogSkeleton />
            ) : error ? (
              <div className="py-24 text-center text-black/50 dark:text-[#8A928F]">
                <p className="mb-2 text-lg font-medium text-black dark:text-[#EDEFEE]">{error}</p>
                <p className="text-sm">Make sure the admin API is running on port 3000.</p>
              </div>
            ) : filteredPosts.length === 0 ? (
              <div className="py-24 text-center text-black/50 dark:text-[#8A928F]">
                <p className="mb-4 text-5xl">✦</p>
                <p className="mb-2 text-lg font-medium text-black dark:text-[#EDEFEE]">No posts in this category yet</p>
                <p className="text-sm">Check back soon or browse another topic.</p>
              </div>
            ) : (
              <>
                {featuredPost && <FeaturedCard post={featuredPost} />}
                {gridPosts.length > 0 && (
                  <>
                    {filteredPosts.length > 1 && (
                      <div className="mb-7 flex items-center gap-4">
                        <span className="text-xs uppercase tracking-widest text-black/40 dark:text-[#8A928F]">
                          More articles
                        </span>
                        <div className="h-px flex-1 bg-black/6 dark:bg-[#1E2523]" />
                      </div>
                    )}
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                      {gridPosts.map((post, index) => (
                        <BlogCard key={post.id} post={post} isNewest={index === 0} />
                      ))}
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog

