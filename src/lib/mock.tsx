
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

// \"What Arevei Does\" — four pillars: Build, Manage, Analyze, Grow
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

// Dashboard cards — \"Get Seen. Get Sales. Get Ahead.\"
export const dashboardCards = [
    {
        tag: 'Seen',
        tagColor: 'bg-black text-white',
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
        tagColor: 'bg-[#C7F27A] text-black',
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
        tagColor: 'bg-black text-white',
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

// Our Process — reuses old timeline layout
export const processSteps = [
    { time: 'Step 01', tag: 'Discovery', title: 'Free Website Audit', body: 'Full teardown of your current site — SEO, UX, conversion, tech debt, and competitor gaps. Delivered in 48 hours.' },
    { time: 'Step 02', tag: 'Build', title: 'Design & Development', body: 'On-brand pages built to convert. AI-drafted first pass, refined by our humans, shipped to your domain.' },
    { time: 'Step 03', tag: 'Instrument', title: 'Track Everything', body: 'Analytics, heatmaps, session replays, form intent, ad attribution — all wired up on day one.' },
    { time: 'Step 04', tag: 'Insight', title: 'Recommend', body: 'Weekly briefs on what to change, why, and the expected lift. No dashboards to babysit.' },
    { time: 'Step 05', tag: 'Action', title: 'Execute', body: 'Copy edits, new pages, technical fixes, campaign launches — we ship the recommendations for you.' },
    { time: 'Step 06', tag: 'Reporting', title: 'Report & Refine', body: 'Monthly report tying every action to pipeline. Then we do it all over again — smarter.' },
];

// Blog / Insights (reuses PloyBooks scroll pattern)
export const blogPosts = [
    { title: 'The Founder’s Guide to AI Website Management', author: 'Arevei Team', desc: 'What changes when your website is managed by AI plus a human team — and why the old CMS/agency model is dying.' },
    { title: 'AEO in 2026: How to Get Cited by ChatGPT & Perplexity', author: 'Arevei Team', desc: 'Structured content, entity clarity, and quotable formatting — the three-part playbook for AI Overview visibility.' },
    { title: 'Why Most Websites Stop Growing After Launch', author: 'Arevei Team', desc: 'The post-launch void is where 90% of websites die. Here is what to do in the first 90 days after go-live.' },
    { title: 'From Google to Gemini: The New SEO Playbook', author: 'Arevei Team', desc: 'Ranking on Google is table stakes. Ranking inside AI answers is where pipeline is being decided in 2026.' },
    { title: 'Landing Pages That Convert 3x More Leads', author: 'Arevei Team', desc: 'The above-the-fold blueprint we use for every Arevei site — with real conversion data from our clients.' },
    { title: 'How to Audit a Website in 30 Minutes', author: 'Arevei Team', desc: 'The checklist we run for every free audit — SEO, UX, technical, conversion — with tools you can use today.' },
    { title: 'The Real Cost of a Cheap Website', author: 'Arevei Team', desc: 'Template sites feel like a bargain until month six. Here is the actual math on what you lose over 24 months.' },
];

// One platform, three engines
export const engines = [
    {
        title: 'Arevei Web',
        tagline: 'Build. Optimize. Convert.',
        color: 'bg-[#DCE7F6]',
        features: [
            'AI-native website builder',
            'SEO, AEO & GEO landing pages',
            'Ad landing page optimization',
            'Built-in analytics and heatmaps',
        ],
    },
    {
        title: 'Arevei Grow',
        tagline: 'Attract. Rank. Reach.',
        color: 'bg-[#E7F5D9]',
        features: [
            'Organic content & AEO strategy',
            'Automated outreach sequences',
            'Intent tracking & lead scoring',
            'CRM & sales pipeline sync',
        ],
    },
    {
        title: 'Arevei Ads',
        tagline: 'Advertise. Attribute. Scale.',
        color: 'bg-[#F8DAEE]',
        features: [
            'Ad creative production at scale',
            'Meta & Google campaign management',
            'Full-funnel attribution',
            'Weekly performance reviews',
        ],
    },
];

// Unified Website Management — audience-style cards
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
        accent: 'bg-[#F5F142]',
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
        accent: 'bg-[#F8BEEB]',
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
        accent: 'bg-[#B5F09D]',
    },
];

// Why Arevei — AI Speed. Professional Judgment.
export const whyArevei = [
    { title: 'AI Speed', desc: 'Pages, copy, and campaigns drafted in minutes — not weeks. We use AI where it is fastest.' },
    { title: 'Professional Judgment', desc: 'Every AI draft is reviewed, refined, and shipped by senior humans. No AI slop hits your site.' },
    { title: 'One Team, End-to-End', desc: 'Design, dev, SEO, content, ads — under one roof, one retainer, one point of contact.' },
    { title: 'ROI-First Reporting', desc: 'We report on pipeline, not vanity metrics. If it does not move revenue, we do not celebrate it.' },
];

// Testimonials / Clientele
export const testimonials = [
    {
        name: 'Ayurooms',
        role: 'Wellness Retreats',
        quote: 'Arevei rebuilt our site in 3 weeks and doubled organic bookings in the first quarter.',
        badge: 'bg-[#E7F5D9]',
    },
    {
        name: 'LLF',
        role: 'Educational Foundation',
        quote: 'The team runs our website like it is their own. We stopped worrying about updates months ago.',
        badge: 'bg-[#DCE7F6]',
    },
    {
        name: 'Maharishi',
        role: 'Mission-Led Institution',
        quote: 'AI speed did not compromise the craft. The site finally reflects who we are.',
        badge: 'bg-[#F8DAEE]',
    },
];

// Pricing — Development tiers + Management tiers
export const pricingPlans = {
    development: [
        {
            name: 'Template Site',
            price: '₹20,000',
            originalPrice: null,
            frequency: 'one-time',
            desc: 'Fast, on-brand, ready in 7 days.',
            features: ['Up to 5 pages', 'Template-based design', 'Mobile responsive', 'Basic SEO setup', 'Contact & lead forms'],
            cta: 'Get Started',
            highlight: false,
        },
        {
            name: 'Advanced Custom',
            price: '₹65,000',
            originalPrice: null,
            frequency: 'one-time',
            desc: 'Fully custom, conversion-designed.',
            features: ['Up to 15 custom pages', 'Bespoke design system', 'Advanced SEO/AEO setup', 'Analytics integration', 'CMS training'],
            cta: 'Book a Call',
            highlight: true,
        },
        {
            name: 'Enterprise',
            price: 'Custom',
            originalPrice: null,
            frequency: 'quote',
            desc: 'For complex sites & platforms.',
            features: ['Unlimited pages', 'Custom integrations', 'Dedicated project lead', 'Migration & training', 'SLA support'],
            cta: 'Talk to Sales',
            highlight: false,
        },
    ],
    management: [
        {
            name: 'Arevei Web',
            price: '₹12,000',
            originalPrice: '₹18,000',
            frequency: '/mo',
            desc: 'We run your website, forever.',
            features: ['Weekly updates & content', 'Technical SEO monitoring', 'Analytics & reporting', 'Copy edits & new pages', 'Uptime & security'],
            cta: 'Start Management',
            highlight: false,
        },
        {
            name: 'Arevei Grow',
            price: '₹24,000',
            originalPrice: '₹36,000',
            frequency: '/mo',
            desc: 'Everything in Web, plus growth.',
            features: ['Everything in Arevei Web', 'SEO/AEO/GEO strategy', 'Content production', 'Outreach & link building', 'Monthly growth review'],
            cta: 'Start Growing',
            highlight: true,
        },
        {
            name: 'Arevei Ads',
            price: 'Waitlist',
            originalPrice: null,
            frequency: '',
            desc: 'Paid media management. Coming soon.',
            features: ['Meta & Google ads', 'Creative production', 'Full-funnel attribution', 'Weekly performance review', 'Landing page A/B testing'],
            cta: 'Join Waitlist',
            highlight: false,
        },
    ],
};

// FAQ
export const faqs = [
    { q: 'What exactly is Arevei?', a: 'Arevei is an AI-Native Website Manager. We build, manage, and grow your website end-to-end using AI speed and senior human judgment — under one retainer, with one team.' },
    { q: 'How is this different from a regular agency?', a: 'Regular agencies build your site and disappear. Arevei stays — updating, optimizing, and growing your website every single month. We are your outsourced website team.' },
    { q: 'Do I need my own website already?', a: 'No. We build from scratch, migrate from any platform, or take over your existing site. Whichever gets you to results faster.' },
    { q: 'How fast is a typical build?', a: 'Template sites go live in 7 days. Custom advanced builds ship in 3 to 4 weeks. Enterprise timelines are scoped per project.' },
    { q: 'What is the Welcome Offer?', a: 'For new clients we discount management retainers by roughly 33% for the first 3 months. See the pricing section for current rates.' },
    { q: 'Can I cancel management anytime?', a: 'Yes. Management retainers are month-to-month. If we are not delivering, you can leave — the website stays with you.' },
    { q: 'Do you work with non-profits?', a: 'Yes. Mission-led organizations get a discounted rate on both build and management. Ask us about it during your audit call.' },
    { q: 'What does \"AI Native\" actually mean?', a: 'Our workflow is built on AI from the ground up — copy drafting, layout generation, SEO research, and content refresh all run through models. Humans do the judging, refining, and shipping.' },
];

export const footerCols = [
    { title: 'Products', links: ['Arevei Web', 'Arevei Grow', 'Arevei Ads', 'Pricing'] },
    { title: 'Services', links: ['Website Audit', 'Custom Build', 'Website Management', 'SEO / AEO / GEO'] },
    { title: 'Company', links: ['About', 'Clientele', 'Careers', 'Contact'] },
    { title: 'Resources', links: ['Blog', 'Founder Guides', 'AI Website Management', 'Case Studies'] },
];
