export type HomeServiceFeature = {
  title: string
  description: string
  bullets: string[]
}

export type HomeService = {
  slug: string
  label: string
  tagline: string
  image: string
  intro: string
  whatWeDo: string
  features: HomeServiceFeature[]
  closingStatement: string
  link: string
}

export const homeServices: HomeService[] = [
  {
    slug: "branding",
    label: "Branding",
    tagline: "Make Your Brand Impossible to Ignore",
    image: "/assets/ServicesImages/Branding.webp",
    intro:
      "Your brand isn't just a logo — it's the emotional contract between your business and the world. Before you say a single word, your brand is already speaking. We build identity systems that earn trust instantly, create recognition that compounds over time, and position your business as the only obvious choice in your market.",
    whatWeDo:
      "We go far beyond aesthetics. Every visual decision, every word of copy, every touchpoint your customer encounters is engineered to communicate value and build loyalty. From the first glance to the lasting impression, we craft brands that live and breathe in the real world.",
    features: [
      {
        title: "Visual Identity System",
        description:
          "A cohesive visual language that works across every medium — digital, print, packaging, and beyond. We design with intention, ensuring every element of your brand reinforces the story you want to tell.",
        bullets: [
          "Logo design with full usage guidelines",
          "Typography system & brand colour palette",
          "Iconography, illustration style & visual motifs",
          "Brand style guide for consistent application",
        ],
      },
      {
        title: "Brand Voice & Positioning",
        description:
          "The most powerful brands don't just look good — they sound unmistakable. We define your brand's personality, craft messaging frameworks, and position you clearly against competitors so customers know exactly why you're the right choice.",
        bullets: [
          "Competitive positioning & market differentiation",
          "Brand voice, tone & personality definition",
          "Core messaging pillars & value proposition",
          "Taglines, headlines & copy frameworks",
        ],
      },
      {
        title: "Packaging & Collateral",
        description:
          "Physical and digital brand materials that elevate the customer experience at every interaction. Whether it's a product on a shelf or a pitch deck in a boardroom, your brand shows up with confidence.",
        bullets: [
          "Product packaging & label design",
          "Marketing collateral (brochures, decks, flyers)",
          "Social media templates & digital assets",
          "Branded merchandise & environmental design",
        ],
      },
    ],
    closingStatement:
      "A great brand doesn't cost money — it makes it. Every investment in brand clarity compounds as you scale, reducing acquisition costs and increasing the lifetime value of every customer you earn.",
    link: "/services/branding",
  },
  {
    slug: "technology",
    label: "Technology",
    tagline: "Websites That Work as Hard as You Do",
    image: "/assets/ServicesImages/Technology.png",
    intro:
      "In a world where attention spans are shrinking and competition is one scroll away, your website is your most important sales asset. We engineer high-performance digital experiences that don't just look stunning — they load in milliseconds, rank on Google, and systematically convert visitors into paying customers.",
    whatWeDo:
      "We build with purpose. Every layout decision, every line of code, every user flow is designed around one goal: turning your online presence into a revenue-generating machine. We combine design thinking with technical precision to deliver websites that perform as beautifully as they look.",
    features: [
      {
        title: "Custom Web Design & Development",
        description:
          "No templates. No compromises. We build bespoke websites tailored to your brand, your audience, and your growth goals. From clean B2B landing pages to complex multi-page experiences, we handle it end to end.",
        bullets: [
          "Fully custom UI/UX design from scratch",
          "React, Next.js & modern frontend frameworks",
          "Mobile-first, fully responsive across all devices",
          "Accessibility (WCAG) compliant builds",
        ],
      },
      {
        title: "eCommerce & Storefronts",
        description:
          "Whether you're launching a new store or scaling an existing one, we build eCommerce experiences that remove friction, build trust, and maximise every transaction. Shopify specialists with a track record of high-converting stores.",
        bullets: [
          "Shopify & custom eCommerce development",
          "Product page optimisation for conversion",
          "Checkout flow design & cart abandonment strategy",
          "Payment gateway integration & inventory setup",
        ],
      },
      {
        title: "Performance, SEO & Ongoing Support",
        description:
          "A beautiful website that no one finds is a wasted investment. We optimise every build for speed, search visibility, and long-term reliability — with ongoing support so your digital foundation never becomes a liability.",
        bullets: [
          "Core Web Vitals & page speed optimisation",
          "Technical SEO setup (schema, sitemaps, meta)",
          "Hosting, security & uptime monitoring",
          "Ongoing maintenance & feature development",
        ],
      },
    ],
    closingStatement:
      "Your website should be your best-performing team member — available 24/7, never sick, always on brand. We build digital experiences that generate leads while you sleep.",
    link: "/services/technology",
  },
  {
    slug: "automation",
    label: "Automation",
    tagline: "Eliminate Repetition. Multiply Output.",
    image: "/assets/ServicesImages/Automation.webp",
    intro:
      "Every hour your team spends on manual tasks — chasing leads, sending follow-ups, updating spreadsheets — is an hour not spent on growth. We design AI-powered automation systems that remove the busywork entirely, replacing manual processes with intelligent workflows that run around the clock without human intervention.",
    whatWeDo:
      "We analyse your existing operations and identify every point where time is being wasted on repetition. Then we engineer custom automation solutions that integrate with your existing tools, handle complexity, and scale as your business grows — giving your team back the hours they need to focus on what only humans can do.",
    features: [
      {
        title: "AI-Powered Workflow Design",
        description:
          "We map your entire customer journey and business operations, then build intelligent workflows that handle the complexity automatically. From lead scoring to content generation, AI does the heavy lifting.",
        bullets: [
          "End-to-end customer journey automation",
          "AI-driven lead scoring & qualification",
          "Automated reporting & performance dashboards",
          "Smart content personalisation at scale",
        ],
      },
      {
        title: "CRM & Pipeline Automation",
        description:
          "Your CRM should work for you — not the other way around. We set up automated pipelines that capture leads, route them intelligently, trigger follow-up sequences, and keep your sales team focused only on qualified opportunities.",
        bullets: [
          "CRM setup, migration & automation (HubSpot, GHL, Salesforce)",
          "Automated lead capture from all sources",
          "Pipeline stage triggers & deal management",
          "Sales team notification & task assignment",
        ],
      },
      {
        title: "Email & Multi-Channel Sequences",
        description:
          "From the first touchpoint to the final conversion, we build automated nurture sequences that deliver the right message to the right person at exactly the right time — across email, SMS, WhatsApp, and beyond.",
        bullets: [
          "Behavioural email & SMS drip campaigns",
          "Abandoned cart & re-engagement sequences",
          "Post-purchase onboarding & retention flows",
          "Multi-channel broadcast & segment management",
        ],
      },
    ],
    closingStatement:
      "The most scalable businesses aren't the ones with the most staff — they're the ones with the smartest systems. Automation is the ultimate leverage: you build it once, and it works for you forever.",
    link: "/services/automation",
  },
  {
    slug: "marketing",
    label: "Marketing",
    tagline: "Turn Clicks Into Customers, Consistently",
    image: "/assets/ServicesImages/Marketing.webp",
    intro:
      "Most businesses waste their marketing budget because they're running tactics without a strategy. They boost posts, run disconnected ads, and wonder why the numbers don't move. We build full-funnel marketing systems — from awareness to conversion — that are rooted in data, driven by creative, and engineered to generate predictable, measurable revenue.",
    whatWeDo:
      "We don't just manage campaigns — we build growth engines. Every channel we activate, every piece of content we create, and every campaign we launch is part of a deliberate system designed to attract your ideal customers, nurture their trust, and convert them efficiently at scale.",
    features: [
      {
        title: "Paid Advertising (Meta & Google)",
        description:
          "We manage paid media the way it was meant to be run: with rigorous testing, creative that converts, and constant optimisation. Our campaigns are built for profit, not just performance metrics that look good in a report.",
        bullets: [
          "Meta (Facebook & Instagram) ads management",
          "Google Search, Display & Shopping campaigns",
          "Audience research, targeting & lookalike creation",
          "A/B testing of creative, copy & landing pages",
        ],
      },
      {
        title: "Content Strategy & Organic Growth",
        description:
          "Paid media gets you traffic now. Content compounds over time. We build organic content systems that position your brand as the authority in your space, attract high-intent customers, and reduce your dependence on paid channels over time.",
        bullets: [
          "Content calendar & multi-channel strategy",
          "SEO-driven blog, video & social content",
          "Thought leadership & brand storytelling",
          "Influencer & partnership marketing",
        ],
      },
      {
        title: "Analytics, Attribution & Reporting",
        description:
          "You can't improve what you can't measure. We set up complete tracking and attribution systems so you know exactly where every lead and sale comes from — and exactly where to invest more.",
        bullets: [
          "GA4, Meta Pixel & conversion tracking setup",
          "Custom performance dashboards & reporting",
          "ROAS, CPA & LTV optimisation frameworks",
          "Monthly strategy reviews & budget allocation",
        ],
      },
    ],
    closingStatement:
      "Marketing is the only business function that directly creates revenue. When it's done right, it doesn't feel like an expense — it feels like a machine that prints money. That's what we build for you.",
    link: "/services/marketing",
  },
  {
    slug: "management",
    label: "Management",
    tagline: "Scale Smarter With Expert Guidance",
    image: "/assets/ServicesImages/Management.webp",
    intro:
      "The gap between businesses that plateau and businesses that scale isn't talent — it's strategy. Growing beyond a certain point requires more than working harder; it demands smarter systems, clearer decision-making, and expert guidance from people who've navigated the challenges you're facing right now. That's exactly what our Management service delivers.",
    whatWeDo:
      "We embed as your strategic growth partner — not a consultant who hands you a report and disappears, but a team that's in the trenches with you. We review performance, identify bottlenecks, build frameworks, and make sure every part of your marketing and operations is optimised for the next stage of growth.",
    features: [
      {
        title: "Ongoing Campaign Management",
        description:
          "Consistent execution is the difference between good campaigns and great results. We take ownership of your ongoing marketing activity — monitoring, optimising, and iterating every week — so performance keeps improving month after month.",
        bullets: [
          "Weekly campaign monitoring & optimisation",
          "Creative refresh & ad fatigue management",
          "Budget pacing & reallocation based on performance",
          "Platform algorithm updates & strategy adaptation",
        ],
      },
      {
        title: "Strategic Reviews & Growth Planning",
        description:
          "Every month, we sit down with you to review what's working, what isn't, and what the next quarter needs to look like. Growth planning isn't reactive — it's deliberate. We map out the path ahead and make sure you're always moving with intention.",
        bullets: [
          "Monthly performance review & strategy sessions",
          "Quarterly growth roadmaps & OKR setting",
          "Competitor analysis & market opportunity mapping",
          "New channel testing & expansion planning",
        ],
      },
      {
        title: "Conversion & Profit Optimisation",
        description:
          "Scaling revenue is only half the equation. We work on both sides of your P&L — driving more revenue AND improving the efficiency with which you earn it. Small improvements to conversion rates and margins compound dramatically at scale.",
        bullets: [
          "Landing page & funnel conversion optimisation",
          "Pricing strategy & offer development",
          "Upsell, cross-sell & retention systems",
          "Operational efficiency & margin improvement",
        ],
      },
    ],
    closingStatement:
      "The businesses that win aren't the ones that work the hardest — they're the ones with the clearest strategy and the most consistent execution. Let us be the strategic backbone that helps you scale with confidence.",
    link: "/services/management",
  },
]
