"use client"

import { useEffect, useMemo, useRef, useState, type RefObject } from "react"
import { useParams, Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

import { fetchBlogPost } from "@/lib/blog-api"
import { SITE_URL } from "@/lib/site"
import type { BlogPost, BlogPostCard } from "@/lib/blog-types"
import { generateBreadcrumbSchema, prepareBlogHtml } from "@/lib/blog-utils"
import { useBlogTheme } from "@/lib/use-blog-theme"
import Footer from "@/components/Footer/Footer"

type HeadingItem = {
  id: string
  text: string
  level: "h2" | "h3"
}

const setMetaTag = (selector: string, attr: "name" | "property", key: string, content: string) => {
  let tag = document.head.querySelector<HTMLMetaElement>(selector)

  if (!tag) {
    tag = document.createElement("meta")
    tag.setAttribute(attr, key)
    document.head.appendChild(tag)
  }

  tag.setAttribute("content", content)
}

const ReadingProgress = ({ containerRef }: { containerRef: RefObject<HTMLDivElement> }) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const update = () => {
      const total = container.scrollHeight - container.clientHeight
      setProgress(total > 0 ? (container.scrollTop / total) * 100 : 0)
    }

    update()
    container.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)

    return () => {
      container.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [containerRef])

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-[100] bg-white/5">
      <div className="blog-reading-progress h-full transition-none" style={{ width: `${progress}%` }} />
    </div>
  )
}

const Breadcrumb = ({
  category,
  title,
}: {
  category: string
  title: string
}) => (
  <nav
    aria-label="breadcrumb"
    className="flex items-center flex-wrap gap-1.5 text-xs text-gray-600 mb-6"
  >
    <Link to="/" className="hover:text-[#00ffd9] transition-colors">
      Home
    </Link>
    <span>/</span>
    <Link to="/blog" className="hover:text-[#00ffd9] transition-colors">
      Blog
    </Link>
    <span>/</span>
    <span className="text-[#00ffd9]/80">{category}</span>
    <span>/</span>
    <span className="text-gray-500 truncate max-w-[200px]">{title}</span>
  </nav>
)

const TableOfContents = ({
  headings,
  contentRef
}: {
  headings: HeadingItem[];
  contentRef?: React.RefObject<HTMLDivElement>;
}) => {
  const [activeId, setActiveId] = useState("")
  const listRef = useRef<HTMLOListElement>(null)
  const isOverToc = useRef(false)

  useEffect(() => {
    if (headings.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isOverToc.current) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "-20% 0px -70% 0px" }
    )

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [headings])

  // Scroll active item into view only if off-screen (nearest) to prevent fluctuations
  useEffect(() => {
    if (!activeId || headings.length === 0) return

    const activeLink = listRef.current?.querySelector<HTMLAnchorElement>(
      `a[href="#${CSS.escape(activeId)}"]`
    )

    activeLink?.scrollIntoView({
      block: "nearest",
      inline: "nearest",
      behavior: "smooth",
    })
  }, [activeId, headings])

  if (headings.length < 2) return null

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {

    const element = document.getElementById(id)
    if (element && contentRef?.current) {
      const container = contentRef.current
      const containerRect = container.getBoundingClientRect()
      const elementRect = element.getBoundingClientRect()
      const relativeTop = elementRect.top - containerRect.top
      const scrollTarget = container.scrollTop + relativeTop - 80 // 80px offset for fixed header

      // Temporarily set isOverToc true to block observer updates during smooth scroll
      isOverToc.current = true
      container.scrollTo({
        top: scrollTarget,
        behavior: "smooth"
      })
      setActiveId(id)

      // Allow observer to resume once smooth scroll completes
      setTimeout(() => {
        isOverToc.current = false
      }, 1500)
    }
  }

  return (
    <div
      onMouseEnter={() => { isOverToc.current = true }}
      onMouseLeave={() => { isOverToc.current = false }}
      onTouchStart={() => { isOverToc.current = true }}
      onTouchEnd={() => { isOverToc.current = false }}
      className="bg-black/40 border border-white/[0.07] rounded-2xl p-5 h-auto lg:h-[70vh] overflow-y-auto toc-container"
    >
      <p className="text-[11px] font-semibold text-gray-600 uppercase tracking-widest mb-4">
        On This Page
      </p>
      <nav>
        <ol ref={listRef} className="space-y-1.5">
          {headings.map((heading, index) => {
            const isActive = activeId === heading.id
            return (
              <li key={heading.id}>
                <a
                  href={`#${heading.id}`}
                  onClick={(e) => handleClick(e, heading.id)}
                  className={`flex items-start gap-2.5 text-[13px] leading-snug py-2 px-3 rounded-lg transition-all duration-200 ${isActive
                    ? "bg-[#00ffd9]/10 text-[#00ffd9] font-semibold toc-active-item"
                    : "text-gray-500 hover:text-gray-200 hover:bg-white/5 toc-inactive-item"
                    }`}
                >
                  <span
                    className={`shrink-0 font-mono text-[10px] mt-0.5 ${isActive ? "text-[#00ffd9] toc-active-number" : "text-gray-700 toc-inactive-number"
                      }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className={heading.level === "h3" ? "pl-3" : ""}>{heading.text}</span>
                </a>
              </li>
            )
          })}
        </ol>
      </nav>
    </div>
  )
}

const RelatedPostCard = ({ post }: { post: BlogPostCard }) => (
  <Link to={`/blog/${post.slug}`} className="block group">
    <div className="bg-black/30 border border-white/[0.07] rounded-xl overflow-hidden hover:border-[#00ffd9]/30 hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(0,255,217,0.08)] transition-all duration-300">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={post.thumbnail}
          alt={post.thumbnailAlt || post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-2 left-2 bg-gradient-to-r from-[#00ffd9] to-[#00aeff] text-black text-[10px] font-bold px-2 py-0.5 rounded-full">
          {post.category}
        </span>
      </div>
      <div className="p-4">
        <p className="text-xs text-gray-500 mb-1.5">
          {post.date} · {post.readTime}
        </p>
        <h4 className="text-white font-semibold text-sm leading-snug line-clamp-2 group-hover:text-[#00ffd9] transition-colors">
          {post.title}
        </h4>
      </div>
    </div>
  </Link>
)

const BlogPostSkeleton = () => (
  <div className="flex min-h-0 flex-1">
    <div className="custom-scrollbar w-full overflow-x-hidden overflow-y-auto">
      <div className="min-h-full text-white">
        <div className="h-52 w-full skeleton-shimmer md:h-72 lg:h-80" />

        <div className="mx-auto max-w-6xl px-4 pb-20 md:px-8">
          <div className="pt-8">
            <div className="mb-4 h-4 w-28 rounded-full skeleton-shimmer" />
            <div className="mb-6 h-4 w-64 rounded-full skeleton-shimmer" />
          </div>

          <div className="mb-10 space-y-5">
            <div className="flex gap-2">
              <div className="h-8 w-28 rounded-full skeleton-shimmer" />
              <div className="h-8 w-24 rounded-full skeleton-shimmer" />
              <div className="h-8 w-20 rounded-full skeleton-shimmer" />
            </div>
            <div className="h-12 w-full max-w-4xl rounded-[1.2rem] skeleton-shimmer" />
            <div className="h-12 w-4/5 max-w-3xl rounded-[1.2rem] skeleton-shimmer" />
            <div className="h-5 w-full max-w-3xl rounded-full skeleton-shimmer" />
            <div className="h-5 w-2/3 max-w-2xl rounded-full skeleton-shimmer" />
            <div className="h-16 w-full rounded-[1.2rem] skeleton-shimmer" />
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_260px] xl:gap-16">
            <div className="space-y-5">
              <div className="h-10 w-3/4 rounded-[1rem] skeleton-shimmer" />
              <div className="h-5 w-full rounded-full skeleton-shimmer" />
              <div className="h-5 w-full rounded-full skeleton-shimmer" />
              <div className="h-5 w-11/12 rounded-full skeleton-shimmer" />
              <div className="h-72 w-full rounded-[1.4rem] skeleton-shimmer" />
              <div className="h-10 w-2/3 rounded-[1rem] skeleton-shimmer" />
              <div className="h-5 w-full rounded-full skeleton-shimmer" />
              <div className="h-5 w-full rounded-full skeleton-shimmer" />
              <div className="h-5 w-10/12 rounded-full skeleton-shimmer" />
              <div className="h-40 w-full rounded-[1.4rem] skeleton-shimmer" />
            </div>

            <div className="hidden space-y-5 lg:block">
              <div className="h-56 rounded-[1.4rem] skeleton-shimmer" />
              <div className="h-40 rounded-[1.4rem] skeleton-shimmer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const BlogPage = () => {
  const { paramSlag } = useParams<string>()
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [post, setPost] = useState<BlogPost | null>(null)
  const [relatedPosts, setRelatedPosts] = useState<BlogPostCard[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { isLightTheme } = useBlogTheme()

  useEffect(() => {
    scrollContainerRef.current?.scrollTo({ top: 0, behavior: "auto" })
  }, [paramSlag])

  useEffect(() => {
    if (!paramSlag) return

    let cancelled = false

    setLoading(true)
    setError(null)

    fetchBlogPost(paramSlag)
      .then((data) => {
        if (!cancelled) {
          setPost(data.post)
          setRelatedPosts(data.relatedPosts)
        }
      })
      .catch((fetchError: unknown) => {
        if (!cancelled) {
          const message =
            fetchError instanceof Error && fetchError.message === "Resource not found"
              ? "The blog post you're looking for doesn't exist or has been moved."
              : "We couldn't load this blog post right now."

          setPost(null)
          setRelatedPosts([])
          setError(message)
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
  }, [paramSlag])

  const preparedArticle = useMemo(
    () => (post ? prepareBlogHtml(post.contentHtml) : { html: "", headings: [] }),
    [post]
  )

  useEffect(() => {
    if (!post) return

    const canonicalUrl = `${SITE_URL}/blog/${post.slug}`
    const title = post.seoTitle ? `${post.seoTitle} | Arevei Blog` : `${post.title} | Arevei Blog`
    const description = post.seoDescription || post.excerpt
    const image = post.thumbnail

    document.title = title
    setMetaTag('meta[name="description"]', "name", "description", description)
    setMetaTag('meta[property="og:title"]', "property", "og:title", title)
    setMetaTag('meta[property="og:description"]', "property", "og:description", description)
    setMetaTag('meta[property="og:type"]', "property", "og:type", "article")
    setMetaTag('meta[property="og:url"]', "property", "og:url", canonicalUrl)
    setMetaTag('meta[property="og:image"]', "property", "og:image", image)
    setMetaTag('meta[property="article:published_time"]', "property", "article:published_time", post.publishedAt)
    setMetaTag(
      'meta[property="article:modified_time"]',
      "property",
      "article:modified_time",
      post.dateModified || post.publishedAt
    )
    setMetaTag('meta[property="article:author"]', "property", "article:author", post.author)
    setMetaTag('meta[property="article:section"]', "property", "article:section", post.category)

    document.head.querySelectorAll('meta[property="article:tag"]').forEach((element) => element.remove())
    post.tags.forEach((tag) => {
      const element = document.createElement("meta")
      element.setAttribute("property", "article:tag")
      element.setAttribute("content", tag)
      document.head.appendChild(element)
    })

    const schemas = [
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.seoTitle || post.title,
        description: description,
        image,
        url: canonicalUrl,
        datePublished: post.publishedAt,
        dateModified: post.dateModified || post.publishedAt,
        keywords: post.tags.join(", "),
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": canonicalUrl,
        },
        author: {
          "@type": "Person",
          name: post.author,
          jobTitle: post.authorRole,
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
      },
      generateBreadcrumbSchema(post),
    ]

    schemas.forEach((schema, index) => {
      const script = document.createElement("script")
      script.type = "application/ld+json"
      script.id = `ld-schema-${index}`
      script.textContent = JSON.stringify(schema)
      document.head.appendChild(script)
    })

    return () => {
      schemas.forEach((_, index) => {
        document.getElementById(`ld-schema-${index}`)?.remove()
      })
    }
  }, [post])

  if (loading) {
    return (
      <div className={`blog-theme ${isLightTheme ? "blog-theme-light" : "blog-theme-dark"} flex min-h-0 flex-1`}>
        <BlogPostSkeleton />
      </div>
    )
  }

  if (!post) {
    return (
      <div className={`blog-theme ${isLightTheme ? "blog-theme-light" : "blog-theme-dark"} flex flex-1 flex-col items-center justify-center px-6 text-white`}>
        <p className="text-6xl mb-6 opacity-30">✦</p>
        <h1 className="text-2xl font-bold mb-3">Post Not Found</h1>
        <p className="text-gray-500 mb-8 text-center max-w-sm">
          {error || "The blog post you're looking for doesn't exist or has been moved."}
        </p>
        <Link
          to="/blog"
          className="bg-gradient-to-r from-[#00ffd9] to-[#00aeff] text-black px-6 py-2.5 rounded-full font-semibold text-sm"
        >
          ← Back to Blog
        </Link>
      </div>
    )
  }

  const nextPost = relatedPosts[0] || null

  return (
    <>
      <ReadingProgress containerRef={scrollContainerRef} />

      <div className={`blog-theme ${isLightTheme ? "blog-theme-light" : "blog-theme-dark"} flex min-h-0 flex-1`}>
        <div
          ref={scrollContainerRef}
          className="custom-scrollbar w-full overflow-x-hidden overflow-y-auto"
        >
          <div className="min-h-full text-white">
            <div className="relative w-full h-52 md:h-72 lg:h-80 overflow-hidden">
              <img
                src={post.thumbnail}
                alt={post.thumbnailAlt || post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
            </div>

            <div className="max-w-6xl mx-auto px-4 md:px-8 pb-20">
              <div className="pt-8 pb-5">
                <Link
                  to="/blog"
                  className="blog-back-button inline-flex items-center gap-3 rounded-2xl border border-[#00ffd9]/25 bg-black/35 px-5 py-3 text-base font-bold text-[#00ffd9] shadow-[0_16px_38px_rgba(0,255,217,0.12)] transition-all hover:-translate-y-0.5 hover:border-[#00ffd9]/60 hover:bg-[#00ffd9]/10"
                >
                  <ArrowLeft className="h-5 w-5" />
                  Back to Blogs
                </Link>
              </div>

              <Breadcrumb category={post.category} title={post.title} />

              <header className="mb-10">
                <div className="flex flex-wrap gap-2 mb-5">
                  <span className="bg-gradient-to-r from-[#00ffd9] to-[#00aeff] text-black text-xs font-bold px-3 py-1.5 rounded-full">
                    {post.category}
                  </span>
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="border border-white/10 text-gray-400 text-xs px-3 py-1.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h1 className="blog-post-title text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5 bg-gradient-to-br from-white via-gray-100 to-[#00ffd9] bg-clip-text text-transparent">
                  {post.title}
                </h1>

                <p className="text-gray-400 text-lg leading-relaxed mb-7 max-w-3xl">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between flex-wrap gap-4 py-5 border-t border-b border-white/[0.07]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#00ffd9] to-[#00aeff] rounded-full flex items-center justify-center text-black font-bold text-base shrink-0">
                      {post.author.charAt(0)}
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{post.author}</p>
                      <p className="text-gray-500 text-xs">{post.authorRole}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <span>{post.date}</span>
                    <span className="text-[#00ffd9]/20">|</span>
                    <span className="text-[#00ffd9]/70 font-medium">{post.readTime}</span>
                  </div>
                </div>
              </header>

              <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-10 xl:gap-16">
                <div>
                  <article
                    className="blog-rich-content max-w-none"
                    dangerouslySetInnerHTML={{ __html: preparedArticle.html }}
                  />

                  <div className="mt-12 bg-gradient-to-br from-[#00ffd9]/8 to-[#00aeff]/5 border border-[#00ffd9]/20 rounded-2xl p-6">
                    <h3 className="text-[#00ffd9] font-bold text-base mb-4 flex items-center gap-2.5">
                      <span className="w-1 h-5 bg-gradient-to-b from-[#00ffd9] to-[#00aeff] rounded-full inline-block" />
                      Key Takeaways
                    </h3>
                    <ul className="space-y-3">
                      {post.keyTakeaways.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed"
                        >
                          <span className="text-[#00ffd9] mt-0.5 shrink-0 font-bold">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/[0.06]">
                    <p className="text-[11px] text-gray-600 uppercase tracking-widest mb-3">Tagged</p>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs border border-[#00ffd9]/15 text-[#00ffd9]/60 px-3 py-1 rounded-full hover:border-[#00ffd9]/40 hover:text-[#00ffd9] transition-colors cursor-default"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex items-start gap-4 bg-black/30 border border-white/[0.07] rounded-2xl p-6 hover:border-[#00ffd9]/20 transition-colors">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#00ffd9] to-[#00aeff] rounded-full flex items-center justify-center text-black font-bold text-xl shrink-0">
                      {post.author.charAt(0)}
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm mb-0.5">{post.author}</p>
                      <p className="text-[#00ffd9]/70 text-xs mb-2">
                        {post.authorRole} · Arevei
                      </p>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Expert in {post.category.toLowerCase()} strategies and growth marketing at
                        Arevei. Helping modern brands scale with data-driven insights.
                      </p>
                    </div>
                  </div>
                </div>

                <aside className="hidden lg:block ">
                  <div className="sticky top-6 ">
                    <TableOfContents headings={preparedArticle.headings} contentRef={scrollContainerRef} />

                    {post.tags.length > 0 && (
                      <div className="mt-5 bg-black/40 border border-white/[0.07] rounded-2xl p-5">
                        <p className="text-[11px] font-semibold text-gray-600 uppercase tracking-widest mb-3">
                          Tags
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[11px] border border-[#00ffd9]/15 text-[#00ffd9]/60 px-2.5 py-1 rounded-full hover:border-[#00ffd9]/35 hover:text-[#00ffd9] transition-colors cursor-default"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </aside>
              </div>

              {relatedPosts.length > 0 && (
                <section className="mt-16 pt-10 border-t border-white/[0.06]">
                  <div className="flex items-center gap-4 mb-7">
                    <h2 className="text-base font-bold text-white shrink-0">Related Articles</h2>
                    <div className="flex-1 h-px bg-white/[0.06]" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {relatedPosts.map((relatedPost) => (
                      <RelatedPostCard key={relatedPost.id} post={relatedPost} />
                    ))}
                  </div>
                </section>
              )}

              {nextPost && (
                <div className="mt-14 text-center">
                  <p className="text-gray-600 text-xs uppercase tracking-widest mb-3">
                    Continue Reading
                  </p>
                  <p className="text-white font-semibold text-lg mb-6 max-w-lg mx-auto leading-snug">
                    {nextPost.title}
                  </p>
                  <Link
                    to={`/blog/${nextPost.slug}`}
                    className="inline-flex items-center justify-center bg-gradient-to-r from-[#00ffd9] to-[#00aeff] text-black font-semibold px-8 py-2.5 rounded-full hover:scale-105 transition-transform shadow-lg shadow-[#00ffd9]/25 text-sm"
                  >
                    Read Next →
                  </Link>
                </div>
              )}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default BlogPage
