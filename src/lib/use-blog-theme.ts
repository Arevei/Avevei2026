import { useEffect, useState } from "react"

export type BlogTheme = "dark" | "light"

const BLOG_THEME_STORAGE_KEY = "arevei-blog-theme"
const BLOG_THEME_CHANGE_EVENT = "arevei-blog-theme-change"

function getInitialBlogTheme(): BlogTheme {
  if (typeof window === "undefined") return "light"

  const storedTheme = window.localStorage.getItem(BLOG_THEME_STORAGE_KEY)
  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme
  }

  return "light"
}

export function useBlogTheme() {
  const [theme, setTheme] = useState<BlogTheme>(getInitialBlogTheme)

  useEffect(() => {
    document.documentElement.dataset.blogTheme = theme
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
    window.localStorage.setItem(BLOG_THEME_STORAGE_KEY, theme)
    window.dispatchEvent(new CustomEvent(BLOG_THEME_CHANGE_EVENT, { detail: theme }))
  }, [theme])

  useEffect(() => {
    const syncTheme = () => {
      setTheme(getInitialBlogTheme())
    }

    const syncCustomTheme = (event: Event) => {
      const nextTheme = (event as CustomEvent<BlogTheme>).detail
      if (nextTheme === "light" || nextTheme === "dark") {
        setTheme(nextTheme)
      }
    }

    window.addEventListener("storage", syncTheme)
    window.addEventListener(BLOG_THEME_CHANGE_EVENT, syncCustomTheme)

    return () => {
      window.removeEventListener("storage", syncTheme)
      window.removeEventListener(BLOG_THEME_CHANGE_EVENT, syncCustomTheme)
    }
  }, [])

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"))
  }

  return {
    theme,
    isLightTheme: theme === "light",
    toggleTheme,
  }
}
