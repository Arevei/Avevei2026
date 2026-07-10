// SVG placeholder logo generator (returns data URI)
const svgLogo = (letter: string, bg = '#111') =>
    `data:image/svg+xml;utf8,${encodeURIComponent(
        `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='8' fill='${bg}'/><text x='50%' y='55%' font-family='Manrope,sans-serif' font-size='16' font-weight='800' fill='#fff' text-anchor='middle' dominant-baseline='middle'>${letter}</text></svg>`
    )}`;

export const navItems = [
    { label: 'Home', items: null, href: '/' },
    { label: 'Products', items: ['Arevei Web', 'Arevei Grow', 'Arevei Ads'] },
    { label: 'Pricing', items: null, href: '/pricing' },
    { label: 'Clientele', items: null, href: '/clientele' },
    { label: 'Resources', items: ['Blog', 'Founder Guides', 'AI Website Management', 'SEO/AEO/GEO'] },
    { label: 'About', items: null, href: '/about' },
];

export const companyLogos = [
    { name: 'Ayurooms', src: svgLogo('A', '#0F766E') },
    { name: 'LLF', src: svgLogo('L', '#7C3AED') },
    { name: 'Maharishi', src: svgLogo('M', '#B45309') },
    { name: 'Joincloud', src: svgLogo('J', '#2563EB') },
    { name: 'DS Polypack', src: svgLogo('D', '#111') },
    { name: 'Sgtmake', src: svgLogo('S', '#DB2777') },
    { name: 'Jenii', src: svgLogo('J', '#059669') },
    { name: 'Chandak', src: svgLogo('C', '#DC2626') },
    { name: 'Nisvartha', src: svgLogo('N', '#4F46E5') },
];

// Four pillars: Build, Manage, Analyze, Grow
export const pillars = [
    {
        title: 'Build',
        desc: 'Ship a production-ready website in days, not months. AI-drafted layouts, human-crafted judgment, on-brand from the first paint.',
        color: 'bg-[#DCE7F6]',
    },
    {
        title: 'Manage',
        desc: 'Continuous updates, content refreshes, technical fixes, and copy tweaks — handled while you focus on the business.',
        color: 'bg-[#E7F5D9]',
    },
    {
        title: 'Analyze',
        desc: 'We watch every visitor, every page, every drop-off. You get a clear read on what is working — and what to change next.',
        color: 'bg-[#F8DAEE]',
    },
    {
        title: 'Grow',
        desc: 'SEO, AEO, GEO, ads, outreach — we execute the growth playbook end-to-end and prove the ROI in your CRM.',
        color: 'bg-[#F5F142]',
    },
];

// Dashboard cards
export const dashboardCards = [
    {
        tag: 'Seen',
        tagColor: 'bg-black text-white dark:bg-[#00E6C4] dark:text-[#0D0F0E]',
        heading: '3.4x',
        subheading: 'organic visibility',
        note: 'Auto-optimized meta, structured schema, AI overview coverage across 60+ pages in the last 30 days.',
        stats: [
            { label: 'Impressions', value: '+218%' },
            { label: 'AI cites', value: '41' },
            { label: 'Rankings', value: '82' },
        ],
        footer: 'Indexing new AEO answers',
        dotColor: 'bg-pink-300',
        chartColor: 'stroke-pink-400 fill-pink-100',
    },
    {
        tag: 'Sales',
        tagColor: 'bg-[#00E6C4] text-black',
        heading: '₹42L',
        subheading: 'pipeline generated',
        note: 'Landing pages, lead magnets, and outreach sequences aligned to your ICP. Every touchpoint logged.',
        stats: [
            { label: 'Leads', value: '312' },
            { label: 'Qualified', value: '87' },
            { label: 'Booked', value: '24' },
        ],
        footer: 'Syncing to your CRM',
        dotColor: 'bg-lime-300',
        chartColor: 'stroke-lime-400 fill-lime-100',
    },
    {
        tag: 'Ahead',
        tagColor: 'bg-black text-white dark:bg-[#00E6C4] dark:text-[#0D0F0E]',
        heading: '12',
        subheading: 'competitor moves flagged',
        note: 'Pricing shifts, new comparison pages, positioning updates — we spot them and counter them within 48 hours.',
        stats: [
            { label: 'Signals', value: '46' },
            { label: 'Counter-plays', value: '9' },
            { label: 'Wins', value: '5' },
        ],
        footer: 'Watching 8 rivals',
        dotColor: 'bg-yellow-300',
        chartColor: 'stroke-yellow-400 fill-yellow-100',
    },
];

// Our Process
export const processSteps = [
    { time: 'Step 01', tag: 'Audit', title: 'Free Website Audit', body: 'Full teardown of your current site — SEO, UX, conversion, tech debt, and competitor gaps. Delivered in 48 hours.' },
    { time: 'Step 02', tag: 'Build', title: 'Build or Improve', body: 'On-brand pages built or improved to convert. AI-powered speed, professional human judgment.' },
    { time: 'Step 03', tag: 'Instrument', title: 'Connect Tracking', body: 'Analytics, heatmaps, session replays, form intent, and attribution wired up on day one.' },
    { time: 'Step 04', tag: 'Insight', title: 'Recommend', body: 'Weekly brief on what is working, what is leaking, and recommended improvements.' },
    { time: 'Step 05', tag: 'Action', title: 'Execute', body: 'Copy changes, technical updates, SEO/AEO optimizations, and landing pages shipped for you.' },
    { time: 'Step 06', tag: 'Reporting', title: 'Report & Grow', body: 'Monthly growth reviews tying every action to real sales pipeline and opportunities.' },
];

// Blog Posts
export const blogPosts = [
    { title: 'How to Increase Sales Through Your Website', author: 'Arevei Team', desc: 'Turn your static landing pages into active pipelines by fixing layout, copywriting, and clear conversion goals.' },
    { title: 'How AI Managed Websites Work', author: 'Arevei Team', desc: 'The workflow mechanism that keeps a site continuously optimized using advanced models and professional strategy.' },
    { title: 'Why Founders Need an AI Native Website Manager', author: 'Arevei Team', desc: 'Stop spending hours in your CMS or chasing developers. Here is how a managed model saves founder bandwidth.' },
    { title: 'SEO vs AEO vs GEO: What Businesses Need to Know', author: 'Arevei Team', desc: 'Understanding Search Engine, Answer Engine, and Generative Engine Optimization for modern buyer visibility.' },
    { title: 'How Website Lead Tracking Improves Growth', author: 'Arevei Team', desc: 'Connecting analytics, heatmaps, and session data directly to your pipeline opportunities and CRM.' },
    { title: 'Why Your Website Stopped Growing After Launch', author: 'Arevei Team', desc: 'The post-launch void is where 90% of sites die. How to keep updating, analyzing, and growing your platform.' },
];

// Product / Service Ecosystem
export const engines = [
    {
        title: 'Arevei Web',
        tagline: 'Build & manage your website.',
        color: 'bg-[var(--surface)]',
        features: [
            'Website updates & changes',
            'Performance & speed care',
            'Technical maintenance',
            'Infrastructure & support',
            'Priority support updates',
        ],
    },
    {
        title: 'Arevei Grow',
        tagline: 'Analyze and grow monthly.',
        color: 'bg-[var(--surface)]',
        features: [
            'Everything in Arevei Web',
            'SEO, AEO & GEO strategy',
            'Analytics & lead tracking',
            'Conversion improvement',
            'Strategy & team support',
        ],
    },
    {
        title: 'Arevei Ads',
        tagline: 'AI-powered ad management.',
        color: 'bg-[var(--surface)]',
        features: [
            'Ad creative production',
            'Paid campaign management',
            'Acquisition tracking',
            'Full performance loop',
            'Coming Soon - Join Waitlist',
        ],
    },
];

// Unified Website Management Section
export const audiences = [
    {
        title: 'Growing Brands',
        tagline: 'Move fast without breaking the funnel.',
        features: [
            'Weekly page updates & new launches',
            'Continuous SEO & AEO optimization',
            'Landing pages that keep converting',
            'Analytics that tell you the truth',
        ],
        cta: 'See how it works',
        cta2: 'Book a demo',
        accent: 'bg-[var(--accent)]',
    },
    {
        title: 'Founders & Ops',
        tagline: 'Stop living in your CMS.',
        features: [
            'One team for build, manage, grow',
            'No more agency ping-pong',
            'Fixed monthly retainer, no surprises',
            'A single dashboard — or none at all',
        ],
        cta: 'Talk to founder',
        cta2: 'See pricing',
        accent: 'bg-[var(--accent)]',
    },
    {
        title: 'Mission-Led Orgs',
        tagline: 'A website that respects the mission.',
        features: [
            'Story-driven design language',
            'Content that ranks and resonates',
            'Impact reporting built into the site',
            'Non-profit friendly pricing',
        ],
        cta: 'Explore for mission orgs',
        cta2: null,
        accent: 'bg-[var(--accent)]',
    },
];

// Why Arevei
export const whyArevei = [
    { title: 'AI Speed', desc: 'We use AI-powered systems to analyze, recommend, and accelerate execution.' },
    { title: 'Professional Judgment', desc: 'Strategy, quality, development, implementation, and final decisions managed by professionals.' },
    { title: 'Freedom from Bandwidth', desc: 'Website growth and management that runs continuously without depending on your internal team.' },
];

// Testimonials / Clientele
export const testimonials = [
    {
        name: 'Ayurooms',
        role: 'Wellness Retreats',
        quote: 'How Ayurooms improved its digital growth system with Arevei.',
        badge: 'bg-[var(--surface)]',
    },
    {
        name: 'LLF',
        role: 'Educational Foundation',
        quote: 'How LLF strengthened its website management with Arevei.',
        badge: 'bg-[var(--surface)]',
    },
    {
        name: 'Maharishi',
        role: 'Mission-Led Institution',
        quote: 'How Maharishi built a more strategic website experience with Arevei.',
        badge: 'bg-[var(--surface)]',
    },
];

// Pricing
export const pricingPlans = {
    development: [
        {
            name: 'Template-Based Website',
            price: '₹20,000',
            originalPrice: null,
            frequency: 'one-time',
            desc: 'For businesses that need a clean, professional website launched quickly.',
            features: ['Startups & portfolios', 'Service business websites', 'Launch in 7 days', 'On-brand template design', 'Standard setup & contact forms'],
            cta: 'Start with Template Website',
            highlight: false,
        },
        {
            name: 'Advanced UI & Functional Website',
            price: '₹65,000',
            originalPrice: null,
            frequency: 'one-time',
            desc: 'For businesses that need a stronger, more customized website experience.',
            features: ['Growing businesses & brands', 'Lead-generation setup', 'Bespoke UI design', 'SEO/AEO infrastructure', 'Analytics integrations'],
            cta: 'Build Advanced Website',
            highlight: true,
        },
        {
            name: 'Custom / Enterprise Requirement',
            price: 'Custom',
            originalPrice: null,
            frequency: 'quote',
            desc: 'For custom workflows, advanced functionality, or larger systems.',
            features: ['Custom platforms', 'Advanced integrations', 'Enterprise requirements', 'Complex infrastructure', 'SLA support'],
            cta: 'Talk to Sales',
            highlight: false,
        },
    ],
    management: [
        {
            name: 'Arevei Web',
            price: '₹12,000',
            originalPrice: '₹15,000',
            frequency: '/mo',
            desc: 'Build and manage your website with professionals.',
            features: ['Website updates & edits', 'Performance management', 'Technical maintenance', 'Infrastructure support', 'Priority support', 'Monthly updates'],
            cta: 'Start with Arevei Web',
            highlight: false,
        },
        {
            name: 'Arevei Grow',
            price: '₹24,000',
            originalPrice: '₹30,000',
            frequency: '/mo',
            desc: 'Build, analyze, and grow your website every month.',
            features: ['Everything in Arevei Web', 'Analytics & lead tracking', 'SEO, AEO & GEO content strategy', 'Conversion & UX improvements', 'Dedicated strategy support'],
            cta: 'Start Growing',
            highlight: true,
        },
        {
            name: 'Arevei Ads',
            price: 'Waitlist',
            originalPrice: null,
            frequency: '',
            desc: 'AI-powered ad and acquisition management.',
            features: ['Campaign landing pages', 'Ad creative production', 'Attribution & paid strategy', 'Performance feedback loop', 'Paid channels optimization'],
            cta: 'Join Waitlist',
            highlight: false,
        },
    ],
};

// FAQ Section
export const faqs = [
    { q: 'What is an AI Native Website Manager?', a: 'An AI Native Website Manager combines AI-powered systems (for speed, copy, analysis, and recommendations) with professional strategy, development, and design to continuously build, manage, analyze, and grow your website.' },
    { q: 'Is Arevei a website development company or an AI company?', a: 'We are both. We use AI systems to accelerate the speed of content generation, audits, and performance checks, while our team of developers, copywriters, and designers review and execute every single change.' },
    { q: 'Do you only build websites?', a: 'No. While we build modern custom websites, we also manage existing websites, perform updates, manage organic visibility (SEO/AEO/GEO), and run growth campaigns monthly.' },
    { q: 'What is the difference between Arevei Web and Arevei Grow?', a: 'Arevei Web focuses on core website updates, infrastructure support, and maintenance. Arevei Grow adds analytics, pipeline/lead tracking, SEO/AEO/GEO strategy, and active conversions work to drive pipeline.' },
    { q: 'Will AI directly manage my website?', a: 'No. AI tools assist our workflow to ensure maximum speed and analysis, but every modification, line of code, and layout change is explicitly verified and deployed by our professional team.' },
    { q: 'Can Arevei improve my existing website?', a: 'Yes. We can take over, audit, optimize, and manage your existing website to improve its current performance, UX, and search engine/answer engine visibility.' },
    { q: 'Do you provide reports?', a: 'Yes. You receive monthly updates and clear reports tracking website performance, search visibility, lead signals, and conversion rates.' },
    { q: 'Is Arevei Ads available?', a: 'Arevei Ads is currently in closed waitlist and will be launched soon. You can join the waitlist in the pricing section.' },
];

export const footerCols = [
    { title: 'Products', links: ['Arevei Web', 'Arevei Grow', 'Arevei Ads', 'Pricing'] },
    { title: 'Services', links: ['Website Design & Development', 'Website Management', 'Website Growth', 'SEO/AEO/GEO', 'Website Analytics', 'Website Lead Tracking'] },
    { title: 'Company', links: ['About', 'Clientele', 'Case Studies', 'Contact', 'Book a Demo'] },
    { title: 'Resources', links: ['Blog', 'Founder Guides', 'AI Managed Websites', 'Website Growth', 'Landing Pages'] },
];
