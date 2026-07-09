export type SeoServicePage = {
  slug: string
  metaTitle: string
  metaDescription: string
  h1: string
  openingParagraph: string
  section1Title: string
  section1Items: string[]
  section2Title: string
  section2Items: string[]
  idealFor: string
  faqs: Array<{ question: string; answer: string }>
  ctaText: string
  relatedServices: Array<{ slug: string; label: string }>
}

export const seoServicePages: SeoServicePage[] = [
  {
    slug: "website-development",
    metaTitle: "Website Development Services | Custom Web Design & Dev | Arevei",
    metaDescription:
      "Arevei builds fast, SEO-ready, conversion-optimised websites for growing businesses. From custom dev to CMS migrations - we engineer sites that perform.",
    h1: "Website Development Services That Convert Visitors Into Customers",
    openingParagraph:
      "Your website is your 24/7 salesperson. At Arevei, we don't just build websites - we engineer growth platforms. Whether you're starting from scratch, migrating platforms, or scaling an existing site, we build with performance, SEO, and conversion at the core.",
    section1Title: "What We Build",
    section1Items: [
      "Custom website design & development (WordPress, HubSpot, Webflow, Laravel)",
      "CMS migrations with full SEO preservation (URL mapping, redirects, canonical tags)",
      "Landing pages optimised for paid and organic traffic",
      "Web performance audits and Core Web Vitals optimisation",
      "GitHub-based version control and deployment pipelines",
      "Headless CMS and API-driven architectures",
    ],
    section2Title: "Why Businesses Choose Arevei for Web Development",
    section2Items: [
      "SEO-first architecture: Every site we build passes Core Web Vitals and is structured for search visibility from day one.",
      "Migration expertise: We've handled complex merges of Laravel, Node.js, and WordPress properties into single unified platforms.",
      "Speed obsession: We treat PageSpeed scores as a business metric, not a technical checkbox.",
      "Ongoing support: We offer tiered management plans so your site never goes stale.",
    ],
    idealFor: "Startups, SMBs, and mid-market companies looking to rebuild, migrate, or scale their web presence.",
    faqs: [
      {
        question: "How long does a website project take?",
        answer:
          "A standard 5-10 page website takes 4-6 weeks from kickoff to launch. Complex projects with migrations or custom functionality typically run 8-12 weeks.",
      },
      {
        question: "Do you build on WordPress?",
        answer:
          "Yes. We work across WordPress, HubSpot Content Hub, Webflow, and custom stacks depending on your needs.",
      },
      {
        question: "Will my existing SEO be preserved during a migration?",
        answer:
          "Absolutely. We handle full URL mapping, 301 redirect logic, canonical tags, and post-migration crawl audits to ensure zero equity loss.",
      },
    ],
    ctaText: "Ready to build a website that works as hard as you do? Let's talk.",
    relatedServices: [
      { slug: "seo-content-strategy", label: "SEO & Content Strategy" },
      { slug: "performance-marketing", label: "Performance Marketing" },
    ],
  },
  {
    slug: "seo-content-strategy",
    metaTitle: "SEO & Content Strategy Services | Organic Growth Agency | Arevei",
    metaDescription:
      "Arevei's SEO and content strategy services help you rank higher, attract qualified traffic, and convert readers into leads. Data-led, human-executed.",
    h1: "SEO & Content Strategy: Rank Higher, Attract the Right Audience",
    openingParagraph:
      "Traffic without intent is noise. At Arevei, we build SEO and content strategies that bring in the right visitors at the right moment in their buying journey. From technical SEO to editorial calendars - every decision is driven by data and built for long-term growth.",
    section1Title: "Our SEO & Content Services",
    section1Items: [
      "Technical SEO audits (crawlability, indexation, Core Web Vitals, schema markup)",
      "Keyword research and topical authority mapping",
      "On-page SEO optimisation (title tags, meta descriptions, H-tag structure, internal linking)",
      "Content strategy and editorial calendar development",
      "Long-form blog and pillar page creation",
      "SEO-led landing page copywriting",
      "Backlink profile analysis and link building outreach",
      "Monthly SEO reporting with ranking, traffic, and conversion metrics",
    ],
    section2Title: "Why Arevei's SEO Approach Is Different",
    section2Items: [
      "Topical authority over keyword stuffing: We build content clusters that signal expertise to Google.",
      "AI-assisted, human-refined: We use AI tooling to scale content production without sacrificing quality or brand voice.",
      "Conversion-first content: Every piece of content has a job - awareness, consideration, or decision. We write accordingly.",
      "Transparent reporting: No vanity metrics. You see rankings, organic sessions, leads, and attribution.",
    ],
    idealFor:
      "B2B companies, SaaS businesses, and service brands that want sustainable, compounding organic growth.",
    faqs: [
      {
        question: "How long before we see SEO results?",
        answer:
          "Most clients see measurable movement in 3-4 months for mid-competition keywords. Highly competitive terms take 6-12 months. We set clear expectations upfront.",
      },
      {
        question: "Do you write the content or just the strategy?",
        answer:
          "Both. We can work as a full-service content partner or as a strategy layer on top of your existing team.",
      },
      {
        question: "What industries do you specialise in?",
        answer:
          "We've worked across SaaS, professional services, e-commerce, and tech. Our process adapts to any industry.",
      },
    ],
    ctaText: "Want to know where your site stands today? Request a free SEO audit.",
    relatedServices: [
      { slug: "website-development", label: "Website Development" },
      { slug: "ai-marketing-automation", label: "AI Marketing & Automation" },
    ],
  },
  {
    slug: "branding-design",
    metaTitle: "Branding & Design Services | Brand Identity Agency | Arevei",
    metaDescription:
      "Arevei creates brand identities that are memorable, consistent, and built for digital-first markets. Logo, design system, brand guidelines - all under one roof.",
    h1: "Branding & Design Services That Make Your Business Unforgettable",
    openingParagraph:
      "Your brand is more than a logo. It's the feeling your customers get when they interact with you. Arevei builds brand identities that are cohesive, distinctive, and designed to scale - from your first business card to a full digital design system.",
    section1Title: "What We Design",
    section1Items: [
      "Logo design and visual identity system",
      "Brand guidelines documentation (typography, colour, voice, usage rules)",
      "Website UI/UX design",
      "Marketing collateral (pitch decks, one-pagers, social templates)",
      "Digital-first design systems for product and marketing teams",
      "Brand audits and visual identity refreshes",
    ],
    section2Title: "The Arevei Branding Philosophy",
    section2Items: [
      "Strategy before aesthetics: We start with positioning, audience, and competitive research before opening a design tool.",
      "Digital-native thinking: Every element is designed for screens first - websites, social, ads, email.",
      "Consistency at scale: We deliver brand guidelines your team can actually use, not a PDF that collects dust.",
      "Integrated with marketing: Our design team works alongside your SEO and growth teams for seamless execution.",
    ],
    idealFor: "New businesses building their first brand, and established companies ready for a refresh.",
    faqs: [
      {
        question: "What's included in a brand identity project?",
        answer:
          "A standard brand identity includes logo suite, colour palette, typography system, usage guidelines, and a brand guidelines document. Add-ons include social templates, pitch decks, and web UI design.",
      },
      {
        question: "How long does a branding project take?",
        answer:
          "A full brand identity project typically takes 3-5 weeks depending on scope and revision rounds.",
      },
      {
        question: "Do you do brand strategy or just design?",
        answer:
          "Both. Our process always starts with a positioning workshop to define your audience, personality, and competitive differentiation before any design work begins.",
      },
    ],
    ctaText: "Ready to build a brand that stands out? Let's start with a discovery call.",
    relatedServices: [
      { slug: "website-development", label: "Website Development" },
      { slug: "social-media-management", label: "Social Media Management" },
    ],
  },
  {
    slug: "performance-marketing",
    metaTitle: "Performance Marketing & Paid Ads Services | Google & Meta Ads | Arevei",
    metaDescription:
      "Arevei manages Google, Meta, and LinkedIn ad campaigns that deliver measurable ROI. Strategy, creative, execution, and reporting - all in one place.",
    h1: "Performance Marketing Services: Paid Ads That Deliver Real ROI",
    openingParagraph:
      "Every rupee you spend on ads should be accountable. Arevei's performance marketing team runs paid campaigns across Google, Meta, and LinkedIn with a ruthless focus on ROAS, CPL, and pipeline contribution. No vanity clicks. No inflated impressions. Just results.",
    section1Title: "Our Paid Media Services",
    section1Items: [
      "Google Search, Display, Shopping & Performance Max campaigns",
      "Meta (Facebook & Instagram) ads - awareness, retargeting, and conversion",
      "LinkedIn ads for B2B lead generation",
      "Landing page design and A/B testing",
      "Conversion tracking setup (GA4, Meta Pixel, GTM)",
      "Monthly performance reporting with spend, leads, and ROI breakdown",
      "Audience research and competitor ad intelligence",
    ],
    section2Title: "Why Arevei's Paid Media Approach Works",
    section2Items: [
      "Full-funnel thinking: We map ad strategy to your sales funnel - from cold awareness to warm retargeting.",
      "Creative that converts: Our in-house design team produces ad creative that stops the scroll and drives action.",
      "Data-driven optimisation: We test audiences, creatives, and offers systematically - not by instinct.",
      "Transparent spend: You see every rupee spent and every lead generated in a real-time dashboard.",
    ],
    idealFor:
      "Businesses with a proven offer ready to scale, or companies moving from organic-only to a paid + organic growth model.",
    faqs: [
      {
        question: "What's the minimum ad budget you work with?",
        answer:
          "We work with clients spending a minimum of INR 50,000/month in ad spend. Below this, the optimisation cycles are too slow to generate meaningful learnings.",
      },
      {
        question: "Do you manage the ad accounts or just consult?",
        answer:
          "We manage end-to-end - account setup, campaign creation, daily monitoring, creative production, and monthly reporting.",
      },
      {
        question: "How do you measure success?",
        answer:
          "Depending on your goals, we track CPL (cost per lead), ROAS (return on ad spend), pipeline influenced, and revenue attributed. We agree on KPIs before the campaign starts.",
      },
    ],
    ctaText: "Want to know what your current ad spend could be doing? Get a free account audit.",
    relatedServices: [
      { slug: "seo-content-strategy", label: "SEO & Content Strategy" },
      { slug: "ai-marketing-automation", label: "AI Marketing & Automation" },
    ],
  },
  {
    slug: "ai-marketing-automation",
    metaTitle: "AI Marketing & Automation Services | AI-Powered Agency | Arevei",
    metaDescription:
      "Arevei integrates AI into your marketing operations - automating content, lead generation, reporting, and workflows so your team can focus on strategy.",
    h1: "AI Marketing & Automation: Scale Your Marketing Without Scaling Your Team",
    openingParagraph:
      "The marketing teams that win in the next five years won't be the biggest - they'll be the most automated. Arevei helps businesses integrate AI into their marketing operations, from content production pipelines to lead nurturing workflows, so you can do more with less.",
    section1Title: "Our AI Marketing Services",
    section1Items: [
      "AI content production pipelines (blog, social, email at scale)",
      "Marketing automation setup (HubSpot, ActiveCampaign, Make, n8n)",
      "AI-powered lead scoring and CRM enrichment",
      "Chatbot and conversational AI for lead capture",
      "Automated reporting dashboards (GA4, HubSpot, ad platforms)",
      "CMO-level strategy with AI execution layer",
      "AI tool audit and stack recommendations",
    ],
    section2Title: "Why Arevei for AI Marketing",
    section2Items: [
      "Practitioners, not theorists: We run AI in our own marketing operations before recommending it to clients.",
      "Tool-agnostic: We work with your existing stack or recommend the best tools for your goals and budget.",
      "Human oversight built in: Every automated workflow has quality checks - AI augments your team, it doesn't replace judgment.",
      "Scalable systems: We build systems designed to onboard future hires, not just solve today's problems.",
    ],
    idealFor:
      "Growth-stage companies that need to scale marketing output without proportionally scaling headcount.",
    faqs: [
      {
        question: "Do we need to already be using AI tools?",
        answer:
          "No. We start with an audit of your current stack and marketing operations, then recommend and implement the right AI tools for your specific needs.",
      },
      {
        question: "Is AI-generated content safe for SEO?",
        answer:
          "When done right, yes. We follow Google's E-E-A-T guidelines - AI handles research and structure, humans add expertise and brand voice. The result is high-quality content at scale.",
      },
      {
        question: "What automation platforms do you work with?",
        answer:
          "We work with HubSpot, ActiveCampaign, Make (Integromat), n8n, Zapier, and custom API integrations depending on your stack.",
      },
    ],
    ctaText: "Curious what AI could do for your marketing? Book a free automation discovery call.",
    relatedServices: [
      { slug: "performance-marketing", label: "Performance Marketing" },
      { slug: "seo-content-strategy", label: "SEO & Content Strategy" },
    ],
  },
  {
    slug: "social-media-management",
    metaTitle: "Social Media Management Services | LinkedIn, Instagram & More | Arevei",
    metaDescription:
      "Arevei manages your social media presence end-to-end - strategy, content creation, scheduling, and analytics. Consistent, on-brand content that builds audience and drives leads.",
    h1: "Social Media Management: Consistent, On-Brand Content That Builds Real Audience",
    openingParagraph:
      "Posting randomly and hoping for engagement isn't a social strategy. Arevei builds and manages social media presences that are intentional, consistent, and connected to your broader marketing goals - whether that's brand awareness, lead generation, or thought leadership.",
    section1Title: "Our Social Media Services",
    section1Items: [
      "Social media strategy and channel selection",
      "Content calendar creation and approval workflow",
      "Copywriting and graphic design for posts",
      "LinkedIn thought leadership content for founders and executives",
      "Instagram, Facebook, and Twitter/X content management",
      "Community management and engagement",
      "Monthly analytics reporting (reach, engagement, follower growth, link clicks)",
      "Paid social integration with organic strategy",
    ],
    section2Title: "The Arevei Social Media Difference",
    section2Items: [
      "Brand voice consistency: We document your voice and tone before writing a single post, so everything sounds like you.",
      "Hook-driven copy: We write for attention - short, punchy, scroll-stopping content that drives real engagement.",
      "Integrated with the funnel: Social isn't isolated. We connect your content strategy to SEO, ads, and lead gen.",
      "Founder-led content: We specialise in personal brand content for founders and operators who want to build audience on LinkedIn.",
    ],
    idealFor:
      "Businesses that want to show up consistently on social without diverting internal team time to content production.",
    faqs: [
      {
        question: "How many posts per month are included?",
        answer:
          "Our packages start at 12 posts/month per platform. Higher volume packages and multi-platform bundles are available.",
      },
      {
        question: "Do you create the visuals too?",
        answer:
          "Yes. Our packages include graphic design using your brand guidelines. We handle copy and creative end-to-end.",
      },
      {
        question: "Can you manage LinkedIn for my personal profile?",
        answer:
          "Yes. We offer founder and executive personal brand packages specifically for LinkedIn thought leadership.",
      },
    ],
    ctaText: "Ready to stop winging social? Let's build a content strategy that works.",
    relatedServices: [
      { slug: "branding-design", label: "Branding & Design" },
      { slug: "performance-marketing", label: "Performance Marketing" },
    ],
  },
]
