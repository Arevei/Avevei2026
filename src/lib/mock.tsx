// Mock data for Ploy.ai clone

export const navItems = [
    { label: 'Product', items: ['Ploy Web', 'Ploy Grow', 'Ploy Ads', 'Analytics', 'PloyBooks'] },
    { label: 'Resources', items: ['Blog', 'Docs', 'Guides', 'Changelog'] },
    { label: 'Solutions', items: ['Enterprise', 'Agencies', 'Startups'] },
    { label: 'Company', items: ['About', 'Careers', 'Press'] },
    { label: 'Pricing', items: null },
    { label: 'The Ploy Effect', items: null },
];

export const companyLogos = [
    { name: 'Leadbay', src: 'https://storage.googleapis.com/ployai/d21bf4ad-2458-43ee-9561-54c28ab0e85f/user/356e6d33-leadbay-logo.png' },
    { name: 'Taiga', src: 'https://storage.googleapis.com/ployai/d21bf4ad-2458-43ee-9561-54c28ab0e85f/user/c75d78b8-taiga-logo.svg' },
    { name: 'Volca', src: 'https://storage.googleapis.com/ployai/d21bf4ad-2458-43ee-9561-54c28ab0e85f/user/18073b06-volca-logo.png' },
    { name: 'Once', src: 'https://storage.googleapis.com/ployai/d21bf4ad-2458-43ee-9561-54c28ab0e85f/user/c2e3acb2-once-logo.png' },
    { name: 'Raspire', src: 'https://storage.googleapis.com/ployai/d21bf4ad-2458-43ee-9561-54c28ab0e85f/user/322531be-raspire-logo.png' },
    { name: 'Indie Health', src: 'https://storage.googleapis.com/ployai/d21bf4ad-2458-43ee-9561-54c28ab0e85f/user/032d0ef5-indie-health-logo.png' },
    { name: 'CodeCrafters', src: 'https://storage.googleapis.com/ployai/d21bf4ad-2458-43ee-9561-54c28ab0e85f/user/09069fdf-codecrafters-logo.svg' },
    { name: 'Datost', src: 'https://storage.googleapis.com/ployai/d21bf4ad-2458-43ee-9561-54c28ab0e85f/user/e96d17e2-datost-logo.ico' },
    { name: 'Hex', src: 'https://storage.googleapis.com/ployai/d21bf4ad-2458-43ee-9561-54c28ab0e85f/user/8bec4c6b-hex-logo.png' },
    { name: 'TNT Growth', src: 'https://storage.googleapis.com/ployai/d21bf4ad-2458-43ee-9561-54c28ab0e85f/user/379451b5-tnt-growth-icon.svg' },
    { name: 'Tonik', src: 'https://storage.googleapis.com/ployai/d21bf4ad-2458-43ee-9561-54c28ab0e85f/user/273409d5-tonik-logo-256.png' },
];

export const pillars = [
    {
        title: 'Monitor',
        desc: "Ploy watches your site and your competitors' — continuously. Rankings, traffic, content gaps, conversion drops. Nothing slips through.",
        color: 'bg-[#E7F5D9]',
    },
    {
        title: 'Act',
        desc: "Ploy doesn't just report back. Its agents write content, fix what's broken, and run experiments — automatically, while you focus on the product.",
        color: 'bg-[#F8DAEE]',
    },
    {
        title: 'Surface',
        desc: 'Every insight becomes a clear next step. Know who\u2019s visiting, what\u2019s working, and where your biggest opportunities are.',
        color: 'bg-[#DCE7F6]',
    },
];

export const dashboardCards = [
    {
        tag: 'Web',
        tagColor: 'bg-black text-white',
        heading: '102',
        subheading: 'pages built',
        note: 'Competitor launched pricing page \u2192 auto-built 3 counter-pages + 2 ABM landing pages',
        stats: [
            { label: 'Traffic', value: '+29%' },
            { label: 'SEO fixes', value: '21' },
            { label: 'Vitals score', value: '97' },
        ],
        footer: 'Building case study',
        dotColor: 'bg-pink-300',
        chartColor: 'stroke-pink-400 fill-pink-100',
    },
    {
        tag: 'Grow',
        tagColor: 'bg-[#C7F27A] text-black',
        heading: '482',
        subheading: 'visitors identified',
        note: 'Web \u2192 Pricing page spike from Web \u2192 identified 12 enterprise visitors, queued outreach',
        stats: [
            { label: 'ICP matches', value: '15' },
            { label: 'Outreach', value: '32' },
            { label: 'Replies', value: '13' },
        ],
        footer: 'Syncing intent signals to CRM',
        dotColor: 'bg-lime-300',
        chartColor: 'stroke-lime-400 fill-lime-100',
    },
    {
        tag: 'Ads',
        tagColor: 'bg-black text-white',
        heading: '$7K',
        subheading: 'pipeline attributed',
        note: 'Grow flagged high-intent segment \u2192 created campaign \u2192 traced to 3 closed deals',
        stats: [
            { label: 'Creatives made', value: '10' },
            { label: 'Deals traced', value: '5' },
            { label: 'Ads flagged', value: '4' },
        ],
        footer: 'Tracking impression \u2192 close',
        dotColor: 'bg-yellow-300',
        chartColor: 'stroke-yellow-400 fill-yellow-100',
    },
];

export const timeline = [
    { time: '11:42PM', tag: 'Competitor Intel', title: '@ads found a competitor positioning shift', body: 'Pricing page changed. New comparison opportunity.' },
    { time: '01:15AM', tag: 'Content', title: '@grow drafted a new landing page variant', body: 'Variant B targeting "alternative to [competitor]" \u2014 ready for review.' },
    { time: '03:08AM', tag: 'Technical SEO', title: '@web fixed 3 technical SEO issues', body: 'Broken OG URL on blog, missing XML sitemap entry, 404 bug patched.' },
    { time: '04:33AM', tag: 'Backlinks', title: '@web discovered 12 new backlink prospects', body: 'High-authority sites in your niche. Outreach drafts ready.' },
    { time: '05:01AM', tag: 'Analytics', title: '@ads spotted a traffic anomaly on /pricing', body: 'Bounce rate spiked 40% after yesterday\u2019s deploy. Investigating.' },
    { time: '05:47AM', tag: 'Keyword Research', title: '@grow mapped 28 low-competition keywords', body: 'Content briefs generated for top 5. Estimated 2.4k monthly traffic.' },
    { time: '06:22AM', tag: 'Performance', title: '@web cut page load time by 1.2s', body: 'Lazy-loaded hero images, deferred 3 scripts. Core Web Vitals now green.' },
    { time: '07:55AM', tag: 'AI Search', title: '@web improved AI overview presence', body: 'Added structured FAQ schema to 8 pages. ChatGPT now cites your docs.' },
];

export const ployBooks = [
    { title: 'Create a Homepage from Scratch', author: 'Ploy', desc: 'A lookbook-first, composition-obsessed workflow for shipping a production-ready homepage \u2014 section by section, on-brand from the first paint.' },
    { title: 'Build a Content Page', author: 'Bryant Chou', desc: 'Two-phase workflow for shipping content-driven pages \u2014 comparison guides, listicles, how-tos, pillar pages \u2014 with the research baked into the page.' },
    { title: 'Optimize Above-the-Fold Content', author: 'Julian Shapiro', desc: 'Audit and rewrite the most expensive section of any site \u2014 the hero a visitor sees before scrolling \u2014 then ship a fold that names one benefit and drives one action.' },
    { title: 'Publish Readiness', author: 'Lorenzo Gentile', desc: 'Take a Ploy site live on a custom domain the right way \u2014 a technical SEO audit, routing and redirects, robots and sitemap, then a clean greenfield or cutover go-live.' },
    { title: 'SEO & AEO Strategy System', author: 'Omid Ghiam', desc: 'The full APTK framework \u2014 keyword research, topic clustering, technical audits, on-page optimization, and AI-search visibility \u2014 for dedicated SEO engagements.' },
    { title: 'AEO Comparison Pages', author: 'Neel Murthy', desc: 'Build vs / alternatives / best-of pages engineered to be cited by AI Overviews, Perplexity, ChatGPT, and Google SGE \u2014 using the narrow-concession framing.' },
    { title: 'GSC Keyword Optimization', author: 'Bryant Chou', desc: 'Find keywords already earning impressions on a page but missing from the copy \u2014 then weave them in to lift CTR and rankings. No CSV exports.' },
    { title: 'Analyse Web Traffic & Visitor Engagement', author: 'Bryant Chou', desc: "Ploy reads your traffic, visitor quality, and engagement signals \u2014 and tells you what\u2019s working, what\u2019s weak, and what to fix next." },
];

export const engines = [
    {
        title: 'Web',
        tagline: 'Build. Optimize. Convert.',
        color: 'bg-[#DCE7F6]',
        features: [
            'AI website builder (Webflow-grade)',
            'SEO and ABM landing pages',
            'Ad landing page optimization',
            'Built-in analytics and on-page insights',
        ],
    },
    {
        title: 'Grow',
        tagline: 'Identify. Reach. Close.',
        color: 'bg-[#E7F5D9]',
        features: [
            'Visitor de-anonymization',
            'Automated personalized outreach',
            'Intent signals & lead scoring',
            'CRM integration',
        ],
    },
    {
        title: 'Ads',
        tagline: 'Create. Attribute. Scale.',
        color: 'bg-[#F8DAEE]',
        features: [
            'Ad library intelligence',
            'Automated ad creative at scale',
            'Full-funnel attribution: impression \u2192 close',
            'Meta campaign management',
        ],
    },
];

export const audiences = [
    {
        title: 'Enterprise',
        tagline: 'Scale without the sprawl.',
        features: [
            'Optimize hundreds of pages simultaneously',
            'AEO built in \u2014 be what AI recommends',
            'Connects to your CRM, analytics, and content stack',
            'SOC 2, SSO, role-based access',
        ],
        cta: 'Explore Enterprise',
        cta2: 'Book a demo',
        accent: 'bg-[#F5F142]',
    },
    {
        title: 'Agencies',
        tagline: 'Extend the relationship.',
        features: [
            'Manage all client sites from one dashboard',
            'White-label ready \u2014 your brand, not ours',
            'PloyBooks run automatically across every account',
            'Real-time client dashboards, zero manual reporting',
        ],
        cta: 'Explore Agencies',
        cta2: 'See agencies on Ploy',
        accent: 'bg-[#F8BEEB]',
    },
    {
        title: 'Startups',
        tagline: 'Growth without the first hire.',
        features: [
            'Ship a site in hours, not weeks',
            'SEO that compounds while you build product',
            'Lead gen on autopilot from day one',
            'Startup-friendly pricing',
        ],
        cta: 'Explore Startups',
        cta2: null,
        accent: 'bg-[#B5F09D]',
    },
];

export const footerCols = [
    { title: 'Product', links: ['Ploy Web', 'Ploy Grow', 'Ploy Ads', 'PloyBooks', 'Pricing'] },
    { title: 'Resources', links: ['Blog', 'Docs', 'Guides', 'Changelog', 'The Ploy Effect'] },
    { title: 'Solutions', links: ['Enterprise', 'Agencies', 'Startups'] },
    { title: 'Company', links: ['About', 'Careers', 'Press', 'Contact'] },
];

