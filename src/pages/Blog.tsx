import { useEffect, useMemo, useState } from "react"
import { Link } from "react-router-dom"

import { fetchBlogPosts } from "@/lib/blog-api"
import type { BlogPostCard } from "@/lib/blog-types"
import { useBlogTheme } from "@/lib/use-blog-theme"
import "./Blog.css"
import Footer from "@/components/Footer/Footer"

const FeaturedCard = ({ post }: { post: BlogPostCard }) => (
  <Link to={`/blog/${post.slug}`} className="block group mb-10">
    <div className="relative rounded-3xl overflow-hidden border border-[#00ffd9]/15 hover:border-[#00ffd9]/40 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,255,217,0.12)] bg-black/40">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src={post.thumbnail}
          alt={post.thumbnailAlt || post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/30 md:from-black/90 md:via-black/70 md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </div>

      {/* Content Layer (Relative) */}
      <div className="relative z-10 flex flex-col justify-end p-6 md:p-12 min-h-[320px] md:min-h-[400px] lg:min-h-[460px] max-w-3xl featured-card-content">
        <div className="flex items-center gap-2 mb-4">
          <span className="bg-gradient-to-r from-[#00ffd9] to-[#00aeff] text-black text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
            Featured
          </span>
          <span className="border border-[#00ffd9]/40 text-[#00ffd9] text-[11px] font-semibold px-3 py-1 rounded-full category-badge">
            {post.category}
          </span>
        </div>
        <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight group-hover:text-[#00ffd9] transition-colors duration-300 drop-shadow-lg line-clamp-2">
          {post.title}
        </h2>
        <p className="text-gray-300 text-sm md:text-base mb-5 line-clamp-2 max-w-xl drop-shadow-md">
          {post.excerpt}
        </p>
        <div className="flex items-center gap-3 text-sm text-gray-400">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00ffd9] to-[#00aeff] flex items-center justify-center text-black font-bold text-sm shrink-0">
            {post.author.charAt(0)}
          </div>
          <span className="text-white font-medium author-name">{post.author}</span>
          <span className="text-gray-600">·</span>
          <span>{post.date}</span>
          <span className="text-gray-600">·</span>
          <span className="text-[#00ffd9]/70">{post.readTime}</span>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#00ffd9]/5 rounded-full blur-3xl pointer-events-none" />
    </div>
  </Link>
)

const BlogCard = ({ post, isNewest }: { post: BlogPostCard; isNewest: boolean }) => (
  <Link to={`/blog/${post.slug}`} className="block h-full group">
    <article className="h-full flex flex-col bg-[rgba(0,0,0,0.5)] border border-white/[0.07] rounded-2xl overflow-hidden hover:border-[#00ffd9]/40 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,255,217,0.1)] transition-all duration-300">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={post.thumbnail}
          alt={post.thumbnailAlt || post.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <span className="absolute top-3 left-3 bg-gradient-to-r from-[#00ffd9] to-[#00aeff] text-black text-[11px] font-bold px-2.5 py-1 rounded-full shadow-lg">
          {post.category}
        </span>
        {isNewest && (
          <span className="absolute top-3 right-3 bg-black/60 border border-[#00ffd9]/50 text-[#00ffd9] text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide">
            New
          </span>
        )}
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 text-gray-500 text-xs mb-2.5">
          <span>{post.date}</span>
          <span>·</span>
          <span className="text-[#00ffd9]/70">{post.readTime}</span>
        </div>
        <h3 className="font-bold text-white text-base leading-snug mb-2.5 line-clamp-2 group-hover:text-[#00ffd9] transition-colors duration-200">
          {post.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 flex-1 mb-3">
          {post.excerpt}
        </p>
        <div className="flex flex-wrap gap-1 mb-3">
          {post.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="text-[10px] border border-white/10 text-gray-500 px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between pt-3 border-t border-white/[0.06]">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#00ffd9] to-[#00aeff] flex items-center justify-center text-black font-bold text-xs shrink-0">
              {post.author.charAt(0)}
            </div>
            <span className="text-gray-400 text-xs truncate max-w-[110px]">{post.author}</span>
          </div>
          <span className="text-[#00ffd9]/80 text-xs font-medium group-hover:translate-x-0.5 transition-transform">
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
      <div className="overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.03]">
        <div className="aspect-[21/9] w-full skeleton-shimmer" />
       
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.03]"
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
      <div className="custom-scrollbar w-full overflow-x-hidden overflow-y-auto">
        <div className="min-h-full w-full text-white">
          <div className="text-center pt-12 pb-8 px-6 relative">
            <div className="inline-flex items-center gap-2 bg-[#00ffd9]/10 border border-[#00ffd9]/20 text-[#00ffd9] text-xs font-semibold px-4 py-2 rounded-full mb-5 uppercase tracking-widest">
              Insights &amp; Ideas
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-[#00ffd9] to-[#00aeff] bg-clip-text text-transparent leading-tight">
              The Arevei Blog
            </h1>
            <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto mb-5">
              Strategies, playbooks, and insights for modern brands doing business with AI.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
              <span>{posts.length} articles</span>
              <span className="text-[#00ffd9]/30">|</span>
              <span>{Math.max(categories.length - 1, 0)} topics</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 justify-center max-w-6xl mx-auto px-6 pb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-[#00ffd9] to-[#00aeff] text-black shadow-lg shadow-[#00ffd9]/25 scale-105"
                    : "bg-white/5 border border-white/10 text-gray-400 hover:border-[#00ffd9]/30 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#00ffd9]/20 to-transparent mb-10" />

          <div className="px-4 md:px-8 lg:px-16 xl:px-20 pb-20 max-w-7xl mx-auto">
            {loading ? (
              <BlogSkeleton />
            ) : error ? (
              <div className="text-center py-24 text-gray-500">
                <p className="text-lg font-medium mb-2 text-white">{error}</p>
                <p className="text-sm">Make sure the admin API is running on port 3000.</p>
              </div>
            ) : filteredPosts.length === 0 ? (
              <div className="text-center py-24 text-gray-500">
                <p className="text-5xl mb-4">✦</p>
                <p className="text-lg font-medium mb-2 text-white">No posts in this category yet</p>
                <p className="text-sm">Check back soon or browse another topic.</p>
              </div>
            ) : (
              <>
                {featuredPost && <FeaturedCard post={featuredPost} />}
                {gridPosts.length > 0 && (
                  <>
                    {filteredPosts.length > 1 && (
                      <div className="flex items-center gap-4 mb-7">
                        <span className="text-xs text-gray-600 uppercase tracking-widest">
                          More articles
                        </span>
                        <div className="flex-1 h-px bg-white/[0.06]" />
                      </div>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
        <Footer/>
      </div>
    </div>
  )
}

export default Blog
