import { Link } from "react-router-dom"

import Footer from "@/components/Footer/Footer"
import JsonLd from "@/components/shared/JsonLd"
import { buildBreadcrumbSchema, buildFaqSchema, geoFaqs } from "@/lib/geo-data"
import { SITE_URL } from "@/lib/site"

const FAQPage = () => {
  return (
    <div className="flex flex-1">
      <div className="home-container w-full overflow-x-hidden">
        <JsonLd id="ld-geo-faq" data={buildFaqSchema(geoFaqs)} />
        <JsonLd
          id="ld-faq-breadcrumb"
          data={buildBreadcrumbSchema([
            { name: "Home", url: `${SITE_URL}/` },
            { name: "FAQ", url: `${SITE_URL}/faq` },
          ])}
        />

        <main className="home-posts px-4 pb-10 pt-8 sm:px-6 lg:px-10">
          <section className="w-full max-w-5xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#00E6C4]">
              Answers
            </p>
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Frequently Asked Questions About Arevei
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/72 sm:text-lg">
              Direct answers about Arevei Technologies, its services, location, pricing approach, and who the
              agency is best suited for.
            </p>
          </section>

          <section className="w-full max-w-4xl space-y-4">
            {geoFaqs.map((faq) => (
              <article key={faq.question} className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
                <h2 className="text-xl font-bold leading-snug text-white">{faq.question}</h2>
                <p className="mt-3 text-base leading-8 text-white/70">{faq.answer}</p>
              </article>
            ))}
          </section>

          <section className="w-full max-w-4xl rounded-2xl border border-[#00E6C4]/20 bg-[#00E6C4]/5 p-6 text-center">
            <h2 className="text-2xl font-bold text-white">Need a more specific answer?</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-white/70">
              Share your business goals and Arevei can recommend the right mix of website, SEO, branding,
              automation, and campaign support.
            </p>
            <Link
              to="/meet"
              className="mt-5 inline-flex rounded-lg bg-[#00E6C4] px-5 py-3 text-sm font-semibold text-black transition hover:bg-[#00ffd9]"
            >
              Schedule a meeting
            </Link>
          </section>

          <Footer />
        </main>
      </div>
    </div>
  )
}

export default FAQPage
