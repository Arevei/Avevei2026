import { useState } from "react"
import { Link } from "react-router-dom"
import { 
  Building2, 
  Target, 
  Eye, 
  Flame, 
  ChevronDown, 
  ArrowRight 
} from "lucide-react"

import Footer from "@/components/Footer/Footer"
import JsonLd from "@/components/shared/JsonLd"
import {
  buildBreadcrumbSchema,
  buildLocalBusinessSchema,
  buildOrganizationSchema,
  buildFaqSchema,
} from "@/lib/geo-data"
import { SITE_URL } from "@/lib/site"

const FAQS_DATA = [
  {
    question: "What is Arevei Technologies?",
    answer: "Arevei Technologies is an AI Native Website Manager and growth execution company that helps AI and B2B SaaS businesses keep their websites updated, optimized, and converting, without manual maintenance.",
  },
  {
    question: "What does \"AI Native Website Manager\" mean?",
    answer: "It means the website management itself, not just the marketing around it, is run by an AI system. Arevei's platform handles content updates, technical SEO, and performance monitoring autonomously, rather than requiring a developer for every change.",
  },
  {
    question: "When was Arevei founded?",
    answer: "Arevei was founded in 2024.",
  },
  {
    question: "Who does Arevei work with?",
    answer: "Arevei primarily works with AI companies and B2B SaaS businesses that need their website to move as fast as their product does.",
  },
  {
    question: "How is Arevei different from a traditional marketing agency?",
    answer: "A traditional agency executes tasks manually through a team. Arevei combines an AI system that runs the website day-to-day with a human team that handles strategy, design, and campaigns, reducing turnaround time and ongoing maintenance cost.",
  },
  {
    question: "What is Arevei's long-term goal?",
    answer: "Arevei's stated goal is to build 5 AI products by 2035 that solve real human problems reliably, starting with the AI Native Website Manager.",
  },
] as const

const FAQItem = ({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) => {
  return (
    <div className="border-b border-white/[0.08] last:border-b-0">
      <button
        onClick={onClick}
        className="w-full py-5 flex justify-between items-center text-left text-white hover:text-[#00E6C4] transition-colors duration-300 group"
      >
        <span className="font-semibold text-base md:text-lg pr-4 group-hover:translate-x-1 transition-transform duration-300">
          {question}
        </span>
        <ChevronDown 
          className={`w-5 h-5 text-gray-400 group-hover:text-[#00E6C4] shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-[#00E6C4]" : ""
          }`} 
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-60 pb-6 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  )
}

const AboutPage = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  return (
    <div className="flex flex-1">
      <div className="home-container w-full overflow-x-hidden bg-black text-white selection:bg-[#00E6C4]/30 selection:text-[#00E6C4]">
        {/* SEO schemas */}
        <JsonLd id="ld-about-organization" data={buildOrganizationSchema()} />
        <JsonLd id="ld-about-local-business" data={buildLocalBusinessSchema()} />
        <JsonLd
          id="ld-about-breadcrumb"
          data={buildBreadcrumbSchema([
            { name: "Home", url: `${SITE_URL}/` },
            { name: "About", url: `${SITE_URL}/about` },
          ])}
        />
        <JsonLd id="ld-about-faq" data={buildFaqSchema(FAQS_DATA)} />

        <main className="max-w-6xl mx-auto px-4 md:px-8 py-16 space-y-24">
          
          {/* Hero Section */}
          <section className="text-center space-y-6 pt-8 max-w-4xl mx-auto relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-[#00E6C4]/10 rounded-full blur-3xl -z-10" />
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-[0.2em] text-[#00E6C4]">
              <Building2 className="w-3.5 h-3.5" /> Company
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight bg-gradient-to-r from-white via-white to-gray-500 bg-clip-text text-transparent">
              About Arevei Technologies
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Arevei Technologies is the AI Native Website Manager built to keep websites performing, updating, and growing without manual upkeep. We pair that system with a full-stack team that handles strategy, design, SEO, and performance marketing, so brands can save time and scale fast.
            </p>
          </section>

          {/* Facts Row */}
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 text-center hover:border-[#00E6C4]/40 transition-all duration-300 group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#00E6C4]/5 rounded-full blur-2xl group-hover:bg-[#00E6C4]/10 transition-colors" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-2">Founded</p>
              <p className="text-3xl font-extrabold text-white bg-gradient-to-r from-white to-gray-400 bg-clip-text">2024</p>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 text-center hover:border-[#00E6C4]/40 transition-all duration-300 group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#00E6C4]/5 rounded-full blur-2xl group-hover:bg-[#00E6C4]/10 transition-colors" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-2">Primary Market</p>
              <p className="text-2xl font-extrabold text-[#00E6C4]">AI and B2B SaaS companies</p>
            </div>
          </section>

          {/* Mission, Vision, Goal Cards */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Mission */}
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c0c0e] hover:bg-[#121215] p-8 hover:-translate-y-1 hover:border-[#00E6C4]/20 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#00E6C4]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Flame className="w-6 h-6 text-[#00E6C4]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  To build AI that is reliable for humans and works for humans, not around them.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c0c0e] hover:bg-[#121215] p-8 hover:-translate-y-1 hover:border-[#00ffd9]/20 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#00ffd9]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Eye className="w-6 h-6 text-[#00ffd9]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  To build 5 AI products by 2035 that solve real human problems, reliably.
                </p>
              </div>
            </div>

            {/* Goal */}
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c0c0e] hover:bg-[#121215] p-8 hover:-translate-y-1 hover:border-[#00aeff]/20 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#00aeff]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-6 h-6 text-[#00aeff]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Our Goal</h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  To make every website we manage run like a money-making machine, not a maintenance burden.
                </p>
              </div>
            </div>
          </section>

          {/* Core Pillars */}
          <section className="space-y-12">
            <div className="text-center space-y-4 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-extrabold">What Arevei Does</h2>
              <p className="text-gray-400 text-sm md:text-base">
                Discover the two core pillars powering our autonomous growth infrastructure and full-stack execution systems.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Pillar 1 */}
              <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 md:p-10 flex flex-col justify-between hover:border-[#00E6C4]/30 hover:shadow-[0_10px_40px_rgba(0,230,196,0.05)] transition-all duration-500">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00E6C4]/10 border border-[#00E6C4]/20 text-xs font-semibold text-[#00E6C4] uppercase tracking-wider">
                    Pillar 1
                  </div>
                  <h3 className="text-2xl font-bold text-white">AI Native Website Manager</h3>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    Arevei's AI Native Website Manager is an autonomous system that keeps a website updated, technically sound, and search-visible in real time. It handles content publishing, on-page SEO, uptime and performance monitoring, and routine fixes, without waiting on a developer or an agency ticket queue.
                  </p>
                  <div className="pt-2">
                    <span className="text-xs font-semibold text-gray-400 block mb-1">WHO IT'S FOR:</span>
                    <p className="text-sm text-gray-300 bg-white/5 border border-white/5 inline-block px-3.5 py-1.5 rounded-lg">
                      SaaS companies and AI-native businesses that need their website to keep pace with fast product and content cycles.
                    </p>
                  </div>
                </div>
                <div className="pt-8">
                  <Link 
                    to="/what-we-do"
                    className="inline-flex items-center gap-2 text-[#00E6C4] font-semibold hover:gap-3 transition-all duration-300 text-sm group"
                  >
                    See How It Works <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 md:p-10 flex flex-col justify-between hover:border-[#00ffd9]/30 hover:shadow-[0_10px_40px_rgba(0,255,217,0.05)] transition-all duration-500">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00ffd9]/10 border border-[#00ffd9]/20 text-xs font-semibold text-[#00ffd9] uppercase tracking-wider">
                    Pillar 2
                  </div>
                  <h3 className="text-2xl font-bold text-white">Full-Stack Growth Execution</h3>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    Software alone doesn't build a brand. Arevei's team runs strategy, web development, SEO, branding, and paid media around the AI Website Manager, combining automation with human judgment so growth doesn't come at the cost of quality or consistency.
                  </p>
                  <div className="pt-2">
                    <span className="text-xs font-semibold text-gray-400 block mb-1">WHO IT'S FOR:</span>
                    <p className="text-sm text-gray-300 bg-white/5 border border-white/5 inline-block px-3.5 py-1.5 rounded-lg">
                      Brands seeking end-to-end strategy, campaigns, and high-converting frontend setups.
                    </p>
                  </div>
                </div>
                <div className="pt-8">
                  <Link 
                    to="/team"
                    className="inline-flex items-center gap-2 text-[#00ffd9] font-semibold hover:gap-3 transition-all duration-300 text-sm group"
                  >
                    Meet the Team <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Frequently Asked Questions */}
          <section className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
                Got questions? We've got answers. Explore how our AI native infrastructure and operations compare to traditional setups.
              </p>
            </div>

            <div className="border-t border-b border-white/[0.08] divide-y divide-white/[0.08]">
              {FAQS_DATA.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openFaqIndex === index}
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                />
              ))}
            </div>
          </section>
        </main>
        
        <div className="mt-16">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default AboutPage
