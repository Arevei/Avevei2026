import { Link } from "react-router-dom"

import Footer from "@/components/Footer/Footer"
import JsonLd from "@/components/shared/JsonLd"
import {
  buildBreadcrumbSchema,
  buildOrganizationSchema,
  organizationId,
  serviceOverview,
} from "@/lib/geo-data"
import { SITE_URL } from "@/lib/site"

const WhatWeDoPage = () => {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Arevei Technologies Core Services",
    itemListElement: serviceOverview.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        url: service.url,
        provider: {
          "@id": organizationId,
        },
      },
    })),
  }

  return (
    <div className="flex flex-1">
      <div className="home-container w-full overflow-x-hidden">
        <JsonLd id="ld-what-we-do-organization" data={buildOrganizationSchema()} />
        <JsonLd id="ld-what-we-do-services" data={itemListSchema} />
        <JsonLd
          id="ld-what-we-do-breadcrumb"
          data={buildBreadcrumbSchema([
            { name: "Home", url: `${SITE_URL}/` },
            { name: "What We Do", url: `${SITE_URL}/what-we-do` },
          ])}
        />

        <main className="home-posts px-4 pb-10 pt-8 sm:px-6 lg:px-10">
          <section className="w-full max-w-5xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#00E6C4]">
              Services overview
            </p>
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              What Does Arevei Do?
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/72 sm:text-lg">
              Arevei Technologies helps businesses grow by combining website development, SEO, branding,
              performance marketing, AI automation, and social media management. The agency builds the strategy,
              creative assets, technical systems, and campaign workflows needed to attract better leads and
              convert more customers. Arevei is best suited for companies that need practical growth execution,
              not only advice.
            </p>
          </section>

          <section className="w-full max-w-6xl">
            <h2 className="mb-6 text-3xl font-bold text-white">Our Core Services</h2>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
              {serviceOverview.map((service) => (
                <article key={service.slug} className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
                  <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/65">{service.description}</p>
                  <Link
                    to={`/services/${service.slug}`}
                    className="mt-5 inline-flex text-sm font-semibold text-[#00E6C4] hover:text-white"
                  >
                    Explore service
                  </Link>
                </article>
              ))}
            </div>
          </section>

          <section className="grid w-full max-w-6xl grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold text-white">Who We Help</h2>
            </div>
            <div className="space-y-4 text-base leading-8 text-white/70 lg:col-span-2">
              <p>
                Arevei helps startups, SMBs, SaaS teams, e-commerce brands, professional service businesses,
                and growth-stage companies that want stronger online visibility and clearer marketing execution.
              </p>
              <p>
                The team is a fit when a business needs a practical partner for strategy, website improvements,
                content, paid acquisition, automation, or ongoing brand communication.
              </p>
            </div>
          </section>

          <section className="grid w-full max-w-6xl grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold text-white">Our Approach</h2>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:col-span-2">
              {[
                "Understand the business, audience, offer, and current funnel.",
                "Build the website, content, brand, or campaign system around measurable goals.",
                "Use AI and automation where it improves speed, reporting, or workflow quality.",
                "Review performance and improve the system through small, consistent upgrades.",
              ].map((item, index) => (
                <div key={item} className="rounded-xl border border-white/10 bg-black/25 p-5">
                  <p className="text-sm font-semibold text-[#00E6C4]">Step {index + 1}</p>
                  <p className="mt-2 text-sm leading-7 text-white/70">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="w-full max-w-6xl rounded-2xl border border-[#00E6C4]/20 bg-[#00E6C4]/5 p-6 text-center sm:p-8">
            <h2 className="text-3xl font-bold text-white">Why Choose Arevei?</h2>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-white/72">
              Arevei combines marketing strategy, creative execution, web technology, and AI-enabled workflows
              in one team. That makes it easier for clients to connect their website, content, paid campaigns,
              automation, and reporting into a single growth system.
            </p>
          </section>

          <Footer />
        </main>
      </div>
    </div>
  )
}

export default WhatWeDoPage
