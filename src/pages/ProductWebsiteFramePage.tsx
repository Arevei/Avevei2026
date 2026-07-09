import { ArrowLeft, Globe2 } from "lucide-react"
import ReactGA from "react-ga4"
import { Link, useParams } from "react-router-dom"

const framedWebsites = {
  "ngo-management": {
    title: "NGO Management Website",
    url: "https://nisvarthjan.vercel.app/",
    backTo: "/products/ngo-management",
  },
  joincloud: {
    title: "JoinCloud Website",
    url: "https://www.joincloud.cloud/",
    backTo: "/products/joincloud",
  },
}

type FramedWebsiteSlug = keyof typeof framedWebsites

const ProductWebsiteFramePage = () => {
  const { slug } = useParams()
  const website = framedWebsites[slug as FramedWebsiteSlug]

  ReactGA.send({ hitType: "pageview", page: `/products/${slug}/website`, title: website?.title || "Product Website" })

  if (!website) {
    return (
      <div className="flex flex-1">
        <div className="home-container w-full overflow-x-hidden">
          <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
            <h1 className="text-4xl font-bold text-white">Website not found</h1>
            <Link to="/products" className="mt-6 rounded-md bg-[#00ffd9] px-5 py-3 font-bold text-black">
              Back to products
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-1">
      <div className="home-container w-full overflow-x-hidden">
        <div className="flex min-h-full w-full flex-col">
          <header className="sticky top-0 z-20 border-b border-white/10 bg-black/80 px-4 py-3 backdrop-blur-xl sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3">
              <Link
                to={website.backTo}
                className="inline-flex items-center gap-2 rounded-md border border-white/12 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white hover:text-[#00ffd9]"
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </Link>
              <div className="flex items-center gap-2 text-sm font-semibold text-white/72">
                <Globe2 className="h-4 w-4 text-[#00ffd9]" />
                {website.title}
              </div>
            </div>
          </header>

          <div className="mx-auto w-full max-w-7xl flex-1 px-2 py-3 sm:px-4">
            <div className="h-[calc(100vh-9rem)] overflow-hidden rounded-lg border border-white/10 bg-black shadow-[0_28px_80px_rgba(0,0,0,0.36)]">
              <iframe
                src={website.url}
                title={website.title}
                className="h-full w-full"
                loading="eager"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductWebsiteFramePage
