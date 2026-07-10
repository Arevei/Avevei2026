import React, { useEffect, useState, useRef } from 'react'
import { ArrowUpRight, ChevronDown, ChevronLeft, ChevronRight, Check, Play, Plus, Minus, X, Sparkles } from 'lucide-react';
import {
    navItems,
    companyLogos,
    pillars,
    dashboardCards,
    processSteps,
    blogPosts,
    engines,
    audiences,
    comparison,
    testimonials,
    pricingPlans,
    faqs,
    footerCols,
} from '@/lib/mock';

/* ================= Utility ================= */
function useInView(ref: React.RefObject<HTMLDivElement>, threshold = 0.2) {
    const [inView, setInView] = useState(false);
    useEffect(() => {
        if (!ref.current) return;
        const io = new IntersectionObserver(
            ([e]) => e.isIntersecting && setInView(true),
            { threshold }
        );
        io.observe(ref.current);
        return () => io.disconnect();
    }, [ref, threshold]);
    return inView;
}

/* ================= Logo ================= */
const Logo = () => (
    <a href="/" className="flex items-center gap-2">
        <span className="font-display text-[22px] tracking-tight text-black">Arevei</span>
    </a>
);

/* ================= Navbar ================= */
export function NewAreveiNavbar() {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const on = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', on);
        return () => window.removeEventListener('scroll', on);
    }, []);

    return (
        <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
            <nav
                className={`flex items-center gap-2 md:gap-6 px-4 md:px-6 py-2 md:py-2.5 rounded-full backdrop-blur-lg transition-all duration-500 ${scrolled ? 'bg-white/90 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.25)]' : 'bg-white/65'} border border-black/5 w-full max-w-[1180px] justify-between`}
            >
                <Logo />
                <ul className="hidden lg:flex items-center gap-1">
                    {navItems.map((it) => (
                        <li key={it.label} className="relative group">
                            <button
                                className="flex items-center gap-1 px-3 py-2 text-[14px] text-black/80 hover:text-black transition-colors"
                            >
                                <span className="link-hover">{it.label}</span>
                                {it.items && (
                                    <ChevronDown className="h-3.5 w-3.5 opacity-60 group-hover:rotate-180 transition-transform duration-300" />
                                )}
                            </button>
                            {it.items && (
                                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 min-w-[220px] bg-white rounded-2xl shadow-[0_20px_50px_-20px_rgba(0,0,0,0.25)] border border-black/5 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 p-2 z-50">
                                    {it.items.map((s) => (
                                        <a
                                            key={s}
                                            href="#"
                                            className="block px-3 py-2 rounded-lg text-[14px] text-black/80 hover:bg-black/5 hover:text-black transition-colors"
                                        >
                                            {s}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
                <div className="flex items-center gap-2">
                    <button className="hidden sm:inline-flex px-4 md:px-5 py-2 rounded-full bg-white hover:bg-black/5 text-[14px] font-medium transition-colors border border-black/10">
                        Get Website Audit
                    </button>
                    <button className="px-4 md:px-5 py-2 rounded-full bg-black text-white text-[14px] font-medium hover:bg-neutral-800 transition-colors">
                        Book a Demo
                    </button>
                </div>
            </nav>
        </div>
    );
}

/* ================= Hero ================= */
function Hero() {
    return (
        <section className="relative pt-24 px-4">
            <div className="relative mx-auto max-w-[1400px] rounded-[28px] overflow-hidden min-h-[86vh] flex items-center justify-center">
                <div
                    className="absolute inset-0 bg-cover bg-center scale-105"
                    style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1522252234503-e356532cafd5?w=1920&q=80)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/55 to-black/80" />

                <div className="relative z-10 text-center max-w-[1100px] px-6 py-24">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur border border-white/20 px-4 py-1.5 mb-8">
                        <Sparkles className="h-3.5 w-3.5 text-[#C7F27A]" />
                        <span className="text-[12px] uppercase tracking-[0.18em] text-white/90">AI Native Website Manager</span>
                    </div>
                    <h1 className="display-hero text-white text-[9vw] md:text-[6vw] lg:text-[80px] leading-[0.98]">
                        Turn your website into a<br />
                        <span className="italic font-normal" style={{ fontFamily: "'Manrope', sans-serif" }}>money-making</span> machine.
                    </h1>
                    <p className="mt-8 text-white/85 text-[15px] md:text-[18px] max-w-[640px] mx-auto leading-relaxed">
                        Arevei blends AI speed with senior human judgment to build, manage, and grow your website —
                        end-to-end, under one retainer.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                        <button className="group px-6 py-3 rounded-full bg-white text-black text-[14px] font-medium hover:scale-[1.03] transition-transform">
                            <span className="inline-flex items-center gap-2">
                                Get Website Audit
                                <ArrowUpRight className="h-4 w-4 -mr-1 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </span>
                        </button>
                        <button className="px-6 py-3 rounded-full bg-transparent border border-white/40 text-white text-[14px] font-medium hover:bg-white/10 transition-colors">
                            Book a Demo
                        </button>
                    </div>
                </div>

                <a
                    href="#video"
                    className="group absolute bottom-6 left-6 z-10 hidden md:flex items-center gap-3 bg-white/95 backdrop-blur rounded-2xl px-3 py-2.5 pr-4 max-w-[340px] shadow-lg hover:bg-white transition"
                >
                    <div className="h-10 w-14 rounded-lg bg-[#C7F27A] flex items-center justify-center">
                        <Play className="h-4 w-4 text-black fill-black" />
                    </div>
                    <div className="text-left">
                        <div className="text-[10px] uppercase tracking-widest text-black/50 font-semibold">Watch</div>
                        <div className="text-[13px] text-black leading-tight">How Arevei manages your website — 90 seconds.</div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-black/60 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
            </div>
        </section>
    );
}

/* ================= Logos Marquee ================= */
function LogosMarquee() {
    const list = [...companyLogos, ...companyLogos];
    return (
        <section className="py-14 overflow-hidden">
            <p className="text-center text-[13px] uppercase tracking-[0.18em] text-black/50 mb-8">
                Trusted by growing brands, founders, and mission-led organizations
            </p>
            <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#F3EEE6] to-transparent z-10" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#F3EEE6] to-transparent z-10" />
                <div className="flex items-center gap-16 marquee-track w-max">
                    {list.map((l, i) => (
                        <div key={i} className="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity duration-500">
                            <img src={l.src} alt={l.name} className="h-8 w-8 object-contain rounded-md" />
                            <span className="text-[16px] text-black/70 font-medium tracking-tight">{l.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ================= Problem Section ================= */
function ProblemSection() {
    return (
        <section className="relative px-4 pb-20 pt-6">
            <div className="max-w-[1200px] mx-auto text-center">
                <div className="text-[12px] uppercase tracking-[0.22em] text-black/50 mb-6">The reality</div>
                <h2 className="display-hero text-black text-[10vw] md:text-[72px] leading-[0.98] max-w-[900px] mx-auto">
                    Your website was built.<br />
                    <span className="text-black/40">Then everyone got busy.</span>
                </h2>
                <p className="mt-8 text-[16px] md:text-[18px] text-black/70 max-w-[720px] mx-auto leading-relaxed">
                    The launch was exciting. Then came real work — product, customers, hiring.
                    The site slowly became out-of-date, un-optimized, and quietly leaking pipeline.
                    Sound familiar?
                </p>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                    {[
                        { k: 'Stagnant', d: 'The blog stopped updating six months ago. The pricing page has typos. Nobody has time to fix it.' },
                        { k: 'Invisible', d: 'You rank for nothing. ChatGPT does not know you exist. AI Overviews cite your competitors.' },
                        { k: 'Untracked', d: 'You have no idea where visitors drop off, which pages convert, or what your bounce rate is doing.' },
                    ].map((it) => (
                        <div key={it.k} className="rounded-[20px] bg-white p-6 card-lift border border-black/5">
                            <div className="text-[13px] font-semibold uppercase tracking-widest text-black/50 mb-2">{it.k}</div>
                            <div className="text-[15px] text-black/80 leading-relaxed">{it.d}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ================= What Arevei Does ================= */
function WhatArevei() {
    const ref = useRef<HTMLDivElement>(null!);
    const inView = useInView(ref);

    return (
        <section ref={ref} className="relative py-24 md:py-32 px-4">
            <div className="max-w-[1200px] mx-auto">
                <div className="relative text-center">
                    <div className="text-[12px] uppercase tracking-[0.22em] text-black/50 mb-6">What Arevei does</div>
                    <h2 className="display-hero text-black text-[10vw] md:text-[72px] leading-[0.98]">
                        <span>We build, manage,</span>
                        <br />
                        <span className={`inline-block transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-30 translate-y-3'}`}>
                            analyze, and grow.
                        </span>
                    </h2>
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1675437434916-fd6d0b03749d?w=600&q=80"
                        className="hidden md:block pointer-events-none select-none absolute right-[6%] top-[-10%] w-[180px] h-[180px] object-cover rounded-full mix-blend-multiply opacity-90 animate-float"
                    />
                    <p className="mt-8 text-[16px] md:text-[17px] text-black/60 max-w-[560px] mx-auto">
                        Four pillars, one retainer, one team. No more agency ping-pong.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mt-16">
                    {pillars.map((p, i) => (
                        <div
                            key={p.title}
                            className={`rounded-[22px] p-7 md:p-8 min-h-[280px] card-lift ${p.color}`}
                            style={{ transitionDelay: `${i * 100}ms` }}
                        >
                            <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center mb-6 overflow-hidden">
                                <div className="grid grid-cols-2 gap-[2px] p-2 opacity-90">
                                    {[...Array(4)].map((_, k) => (
                                        <div
                                            key={k}
                                            className="w-2 h-2 rounded-[2px] bg-[#C7F27A]"
                                            style={{ opacity: (k + 1) / 4 }}
                                        />
                                    ))}
                                </div>
                            </div>
                            <h3 className="font-display text-[26px] tracking-tight text-black mb-3">{p.title}</h3>
                            <p className="text-[15px] leading-relaxed text-black/70">{p.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ================= Video Section ================= */
function VideoSection() {
    const [open, setOpen] = useState(false);
    return (
        <section id="video" className="relative px-4 pb-20">
            <div className="max-w-[1400px] mx-auto rounded-[28px] overflow-hidden relative min-h-[420px] flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #111 0%, #1a1a1a 100%)' }}>
                <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70" />
                <div className="relative z-10 text-center px-6 py-20 max-w-[820px]">
                    <div className="text-[12px] uppercase tracking-[0.22em] text-white/60 mb-4">Watch</div>
                    <h2 className="display-hero text-white text-[9vw] md:text-[56px] leading-[0.98]">
                        What we do &<br />how we do it.
                    </h2>
                    <p className="mt-6 text-white/75 text-[15px] md:text-[16px] max-w-[520px] mx-auto">
                        A 90-second look at the Arevei workflow — from audit to launch to compounding growth.
                    </p>
                    <button
                        onClick={() => setOpen(true)}
                        className="group mt-8 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white text-black text-[14px] font-medium hover:scale-[1.03] transition-transform"
                    >
                        <span className="h-8 w-8 rounded-full bg-black text-white flex items-center justify-center">
                            <Play className="h-3.5 w-3.5 fill-white" />
                        </span>
                        Play the video
                        <ArrowUpRight className="h-4 w-4 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                </div>
            </div>

            {open && (
                <div
                    className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
                    onClick={() => setOpen(false)}
                >
                    <div className="relative w-full max-w-[960px] aspect-video rounded-2xl overflow-hidden bg-black" onClick={(e) => e.stopPropagation()}>
                        <button
                            onClick={() => setOpen(false)}
                            className="absolute top-3 right-3 h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center z-10"
                        >
                            <X className="h-4 w-4" />
                        </button>
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                            title="Arevei — What we do"
                            frameBorder="0"
                            allow="autoplay; encrypted-media; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>
            )}
        </section>
    );
}

/* ================= Sparkchart ================= */
const SparkChart = ({ colorClass = 'stroke-pink-400 fill-pink-100' }) => (
    <svg viewBox="0 0 200 60" className="w-full h-[46px]" preserveAspectRatio="none">
        <path
            d="M0 50 L20 45 L40 40 L60 42 L80 30 L100 32 L120 22 L140 18 L160 12 L180 8 L200 4 L200 60 L0 60 Z"
            className={colorClass}
            strokeWidth="2"
            opacity="0.5"
        />
        <path
            d="M0 50 L20 45 L40 40 L60 42 L80 30 L100 32 L120 22 L140 18 L160 12 L180 8 L200 4"
            className={colorClass.replace('fill-', '')}
            fill="none"
            strokeWidth="2"
        />
    </svg>
);

/* ================= Get Seen. Get Sales. Get Ahead. ================= */
function SeenSalesAhead() {
    return (
        <section className="relative px-4 pt-14 pb-20">
            <div className="max-w-[1400px] mx-auto rounded-[28px] p-6 md:p-14 relative overflow-hidden bg-[#0A0D0C]">
                {/* subtle grid texture */}
                <div className="pointer-events-none absolute inset-0 opacity-[0.04]"
                    style={{ backgroundImage: 'linear-gradient(#C7F27A 1px,transparent 1px),linear-gradient(90deg,#C7F27A 1px,transparent 1px)', backgroundSize: '48px 48px' }} />

                <div className="relative grid md:grid-cols-2 gap-8 items-start">
                    <div>
                        <h2 className="display-hero text-white text-[10vw] md:text-[64px] leading-[0.98]">
                            Get Seen.<br />Get Sales.<br />
                            <span className="inline-flex items-center gap-3">
                                <span className="inline-block w-16 h-12 md:w-24 md:h-16 rounded-full bg-gradient-to-br from-[#00E6C4]/60 to-[#C7F27A] shadow-inner animate-float" />
                                Get Ahead.
                            </span>
                        </h2>
                    </div>
                    <div className="md:pt-20">
                        <p className="text-[15px] md:text-[17px] text-white/60 max-w-[440px] leading-relaxed">
                            Arevei Web builds and optimizes. Arevei Grow attracts and ranks. Arevei Ads scales and attributes.
                            Every action informs the next.
                        </p>
                        <div className="mt-6 flex gap-3">
                            <button className="px-5 py-2.5 rounded-full bg-[#C7F27A] text-black text-[13px] font-semibold hover:bg-[#b8e662] transition-colors">
                                See it in action
                            </button>
                            <button className="px-5 py-2.5 rounded-full border border-white/20 text-white text-[13px] hover:border-white/40 transition-colors">
                                Book a demo
                            </button>
                        </div>
                    </div>
                </div>

                <div className="relative grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mt-16">
                    {dashboardCards.map((c, idx) => (
                        <div key={c.tag} className={`rounded-[20px] p-5 card-lift border ${idx === 2 ? 'bg-[#0F1413] border-[#1E2523]' : 'bg-white border-transparent'}`}>
                            <div className="flex items-center gap-2 mb-4">
                                <span className={`font-display text-[16px] tracking-tight ${idx === 2 ? 'text-white' : 'text-black'}`}>Arevei</span>
                                <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${c.tagColor}`}>{c.tag}</span>
                            </div>
                            <div className="flex items-end justify-between gap-2">
                                <div>
                                    <div className={`font-display text-[44px] leading-none ${idx === 2 ? 'text-white' : 'text-black'}`}>{c.heading}</div>
                                    <div className={`text-[12px] mt-1 ${idx === 2 ? 'text-white/50' : 'text-black/60'}`}>{c.subheading}</div>
                                </div>
                                <div className="w-1/2">
                                    <SparkChart colorClass={c.chartColor} />
                                </div>
                            </div>
                            <div className={`mt-4 text-[12px] rounded-lg p-3 leading-snug ${idx === 2 ? 'text-white/50 bg-white/5' : 'text-black/60 bg-black/[0.03]'}`}>{c.note}</div>
                            <div className={`grid grid-cols-3 gap-2 mt-4 pt-4 border-t ${idx === 2 ? 'border-white/10' : 'border-black/5'}`}>
                                {c.stats.map((s) => (
                                    <div key={s.label}>
                                        <div className={`text-[10px] uppercase tracking-wide ${idx === 2 ? 'text-white/40' : 'text-black/45'}`}>{s.label}</div>
                                        <div className={`font-display text-[18px] mt-0.5 ${idx === 2 ? 'text-white' : 'text-black'}`}>{s.value}</div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-4 flex items-center gap-2">
                                <span className={`w-2 h-2 rounded-full ${c.dotColor} soft-pulse`} />
                                <span className={`text-[12px] ${idx === 2 ? 'text-white/50' : 'text-black/70'}`}>{c.footer}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ================= One Platform, Three Engines ================= */
function OnePlatform() {
    return (
        <section className="relative px-4 pb-20 overflow-hidden">
            <div className="max-w-[1400px] mx-auto rounded-[28px] bg-[#0A0D0C] relative overflow-hidden">
                <div className="px-6 md:px-14 pt-16 md:pt-20 pb-12 text-center relative">
                    <div className="text-[12px] uppercase tracking-[0.22em] text-white/40 mb-6">One platform · three engines</div>
                    <h2 className="display-hero text-white text-[10vw] md:text-[72px] leading-[0.98]">
                        One platform<br />three engines.
                    </h2>
                    <p className="mt-5 text-white/50 text-[15px] max-w-[480px] mx-auto">
                        Build, grow, and scale — all under one retainer. No agency ping-pong.
                    </p>
                </div>

                <div className="px-4 md:px-6 pb-8 md:pb-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 items-stretch">
                        {engines.map((e) => (
                            <div
                                key={e.name}
                                className={`group relative rounded-[20px] p-6 md:p-8 flex flex-col card-lift transition-all duration-500 ${
                                    e.highlight
                                        ? 'bg-[#C7F27A] text-black'
                                        : 'bg-[#111815] border border-[#1E2523] text-white'
                                }`}
                            >
                                {/* header row */}
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-2">
                                        <span className={`w-2 h-2 rounded-full soft-pulse ${e.highlight ? 'bg-black/40' : 'bg-[#C7F27A]'}`} />
                                        <span className={`text-[12px] font-medium tracking-wide ${e.highlight ? 'text-black/70' : 'text-white/60'}`}>
                                            {e.name}
                                        </span>
                                    </div>
                                    {e.badgeRight && (
                                        <span className={`text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full ${e.highlight ? 'bg-black/10 text-black/60' : 'bg-white/10 text-white/50'}`}>
                                            {e.badgeRight}
                                        </span>
                                    )}
                                </div>

                                {/* headline */}
                                <h3 className={`font-display text-[28px] md:text-[32px] leading-[1.05] tracking-tight mb-3 ${e.highlight ? 'text-black' : 'text-white'}`}>
                                    {e.headline}
                                </h3>
                                <p className={`text-[13px] leading-relaxed mb-7 ${e.highlight ? 'text-black/65' : 'text-white/45'}`}>
                                    {e.tagline}
                                </p>

                                {/* features */}
                                <ul className="space-y-3 flex-1">
                                    {e.features.map((f) => (
                                        <li key={f} className={`flex items-start gap-2.5 text-[13px] leading-snug ${e.highlight ? 'text-black/80' : 'text-white/65'}`}>
                                            <Check className={`h-3.5 w-3.5 mt-0.5 shrink-0 ${e.highlight ? 'text-black' : 'text-[#C7F27A]'}`} />
                                            {f}
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA */}
                                <button className={`mt-8 group/btn inline-flex items-center gap-1.5 text-[13px] font-semibold transition-colors ${
                                    e.ctaAccent
                                        ? 'text-[#C7F27A] hover:text-[#b8e662]'
                                        : e.highlight
                                        ? 'text-black hover:text-black/70'
                                        : 'text-white/70 hover:text-white'
                                }`}>
                                    {e.cta}
                                    <ArrowUpRight className="h-3.5 w-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ================= Our Process ================= */
function OurProcess() {
    const [activeSteps, setActiveSteps] = useState<Set<number>>(new Set());
    const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observers = stepRefs.current.map((el, i) => {
            if (!el) return null;
            const io = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) setActiveSteps(prev => new Set([...prev, i]));
                },
                { threshold: 0.45 }
            );
            io.observe(el);
            return io;
        });
        return () => observers.forEach(io => io?.disconnect());
    }, []);

    const maxActive = activeSteps.size > 0 ? Math.max(...activeSteps) : -1;
    const fillPct = maxActive >= 0 ? ((maxActive + 1) / processSteps.length) * 100 : 0;

    return (
        <section className="relative px-4 pb-20">
            <div className="max-w-[1400px] mx-auto rounded-[28px] bg-[#0A0D0C] relative overflow-hidden">
                <div className="px-6 md:px-14 pt-16 md:pt-20 pb-12 text-center">
                    <div className="text-[12px] uppercase tracking-[0.22em] text-white/40 mb-6">Our process</div>
                    <h2 className="display-hero text-white text-[10vw] md:text-[64px] leading-[0.98]">
                        Audit. Build. Track.<br />Recommend. Execute. Report.
                    </h2>
                </div>

                {/* Timeline */}
                <div className="relative px-4 md:px-10 pb-16 md:pb-20">
                    {/* Track line */}
                    <div className="absolute left-1/2 top-0 bottom-16 w-px bg-white/10 -translate-x-1/2 hidden md:block" />
                    {/* Filled line */}
                    <div
                        className="absolute left-1/2 top-0 w-px bg-[#C7F27A] -translate-x-1/2 transition-all duration-700 ease-out hidden md:block"
                        style={{ height: `${fillPct}%` }}
                    />

                    <div className="max-w-[900px] mx-auto flex flex-col gap-10 md:gap-14">
                        {processSteps.map((step, i) => {
                            const isLeft = i % 2 === 0; // even → content left, label right
                            const isActive = activeSteps.has(i);

                            return (
                                <div
                                    key={i}
                                    ref={el => { stepRefs.current[i] = el; }}
                                    className={`relative transition-all duration-700 ${isActive ? 'opacity-100' : 'opacity-25'}`}
                                >
                                    {/* Mobile layout */}
                                    <div className="md:hidden flex gap-4">
                                        <div className="flex flex-col items-center pt-1">
                                            <div className={`h-3.5 w-3.5 rounded-full border-2 transition-all duration-500 shrink-0 ${isActive ? 'bg-[#C7F27A] border-[#C7F27A] shadow-[0_0_8px_#C7F27A]' : 'bg-[#0A0D0C] border-white/20'}`} />
                                            {i < processSteps.length - 1 && <div className="flex-1 w-px bg-white/10 mt-2" />}
                                        </div>
                                        <div className="pb-4">
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="text-[10px] font-mono uppercase tracking-widest text-[#C7F27A]">{step.tag}</span>
                                                <span className="text-[10px] text-white/35">{step.timestamp}</span>
                                            </div>
                                            <h3 className="text-white font-display text-[20px] tracking-tight leading-tight">{step.title}</h3>
                                            <p className="text-white/45 text-[13px] mt-1.5 leading-relaxed">{step.body}</p>
                                        </div>
                                    </div>

                                    {/* Desktop zigzag layout */}
                                    <div className="hidden md:grid grid-cols-[1fr_40px_1fr] gap-4 items-center">
                                        {/* Left column */}
                                        {isLeft ? (
                                            <div className="text-right pr-8">
                                                <div className="text-[10px] font-mono uppercase tracking-widest text-[#C7F27A] mb-1">{step.tag}</div>
                                                <h3 className="text-white font-display text-[24px] md:text-[28px] tracking-tight leading-tight">{step.title}</h3>
                                                <p className="text-white/45 text-[13px] mt-2 leading-relaxed max-w-[300px] ml-auto">{step.body}</p>
                                            </div>
                                        ) : (
                                            <div className="text-right pr-8 flex flex-col items-end justify-center">
                                                <span className="text-[11px] font-mono text-white/35">{step.timestamp}</span>
                                            </div>
                                        )}

                                        {/* Center dot */}
                                        <div className="flex justify-center">
                                            <div className={`h-4 w-4 rounded-full border-2 transition-all duration-500 ${isActive ? 'bg-[#C7F27A] border-[#C7F27A] shadow-[0_0_12px_#C7F27A80]' : 'bg-[#0A0D0C] border-white/25'}`} />
                                        </div>

                                        {/* Right column */}
                                        {!isLeft ? (
                                            <div className="pl-8">
                                                <div className="text-[10px] font-mono uppercase tracking-widest text-[#C7F27A] mb-1">{step.tag}</div>
                                                <h3 className="text-white font-display text-[24px] md:text-[28px] tracking-tight leading-tight">{step.title}</h3>
                                                <p className="text-white/45 text-[13px] mt-2 leading-relaxed max-w-[300px]">{step.body}</p>
                                            </div>
                                        ) : (
                                            <div className="pl-8 flex flex-col justify-center">
                                                <span className="text-[11px] font-mono text-white/35">{step.timestamp}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ================= Why Arevei ================= */
function WhyArevei() {
    return (
        <section className="relative px-4 pb-20">
            <div className="max-w-[1200px] mx-auto">
                <div className="max-w-3xl mb-12">
                    <div className="text-[12px] font-mono uppercase tracking-[0.2em] text-[#0F6E56] mb-4">Why Arevei</div>
                    <h2 className="display-hero text-black text-[9vw] md:text-[56px] leading-[1.02]">
                        Not an agency.<br />
                        <span className="text-black/40">Not a SaaS. Both.</span>
                    </h2>
                    <p className="mt-5 text-[15px] md:text-[16px] text-black/60 leading-relaxed max-w-[540px]">
                        The best of a software subscription (predictable pricing, always-on) with the best of a service
                        (real humans, real strategy).
                    </p>
                </div>

                {/* Comparison table */}
                <div className="rounded-[22px] border border-black/8 bg-white overflow-hidden">
                    {/* Header */}
                    <div className="grid grid-cols-3 border-b border-black/8 bg-black/[0.02]">
                        <div className="p-4 md:p-5" />
                        <div className="p-4 md:p-5 text-center border-l border-black/8">
                            <span className="text-[12px] md:text-[13px] font-semibold text-black/50 tracking-wide">Traditional Agency</span>
                        </div>
                        <div className="p-4 md:p-5 text-center border-l border-black/8 bg-black">
                            <span className="text-[12px] md:text-[13px] font-semibold text-white tracking-wide">Arevei</span>
                        </div>
                    </div>

                    {comparison.map((row, i) => (
                        <div
                            key={row.label}
                            className={`grid grid-cols-3 items-center ${i < comparison.length - 1 ? 'border-b border-black/6' : ''}`}
                        >
                            <div className="p-4 md:p-5 text-[13px] md:text-[14px] font-medium text-black/80">{row.label}</div>
                            <div className="p-4 md:p-5 border-l border-black/6 text-[12px] md:text-[13px] text-black/50 text-center flex items-center justify-center gap-1.5">
                                <X className="h-3.5 w-3.5 text-red-400/70 shrink-0" />
                                {row.agency}
                            </div>
                            <div className="p-4 md:p-5 border-l border-black/6 text-center bg-black/[0.025] flex items-center justify-center gap-1.5">
                                <Check className="h-3.5 w-3.5 text-[#0F6E56] shrink-0" />
                                <span className="text-[12px] md:text-[13px] font-semibold text-black">{row.arevei}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ================= Unified Website Management ================= */
function UnifiedManagement() {
    return (
        <section className="relative px-4 pb-20">
            <div className="max-w-[1400px] mx-auto">
                <div className="text-center mb-10">
                    <div className="text-[12px] uppercase tracking-[0.22em] text-black/50 mb-6">Unified website management</div>
                    <h2 className="display-hero text-black text-[10vw] md:text-[64px] leading-[0.98]">
                        One team.<br />Every kind of business.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {audiences.map((a) => (
                        <div
                            key={a.title}
                            className="group rounded-[22px] bg-white p-7 md:p-8 min-h-[380px] flex flex-col card-lift relative overflow-hidden border border-black/5"
                        >
                            <div className={`absolute -right-10 -top-10 w-40 h-40 rounded-full ${a.accent} opacity-70 group-hover:scale-125 transition-transform duration-700`} />
                            <div className="relative">
                                <h3 className="font-display text-[32px] leading-none tracking-tight text-black">{a.title}</h3>
                                <p className="text-[15px] text-black/70 mt-2">{a.tagline}</p>
                                <ul className="mt-6 space-y-2.5">
                                    {a.features.map((f) => (
                                        <li key={f} className="text-[14px] text-black/75 flex gap-2">
                                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-black shrink-0" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-auto pt-6 flex flex-wrap items-center gap-2 relative">
                                <button className="group/btn px-4 py-2 rounded-full bg-black text-white text-[13px] font-medium flex items-center gap-1 hover:bg-neutral-800 transition-colors">
                                    {a.cta}
                                    <ArrowUpRight className="h-3.5 w-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                </button>
                                {a.cta2 && (
                                    <button className="px-4 py-2 rounded-full bg-white border border-black/10 text-black text-[13px] font-medium hover:bg-black/5 transition-colors">
                                        {a.cta2}
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ================= Testimonials ================= */
function Testimonials() {
    return (
        <section className="relative px-4 pb-20">
            <div className="max-w-[1400px] mx-auto rounded-[28px] bg-black text-white px-6 md:px-14 py-16 md:py-20">
                <div className="text-center mb-12">
                    <div className="text-[12px] uppercase tracking-[0.22em] text-white/60 mb-6">Clientele</div>
                    <h2 className="display-hero text-white text-[10vw] md:text-[64px] leading-[0.98]">
                        Loved by growing<br />brands & founders.
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {testimonials.map((t) => (
                        <div
                            key={t.name}
                            className="rounded-[22px] bg-white/[0.06] hover:bg-white/[0.1] p-7 md:p-8 border border-white/10 card-lift relative overflow-hidden"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className={`h-10 w-10 rounded-xl ${t.badge} text-black flex items-center justify-center`}>
                                    <Play className="h-3.5 w-3.5 fill-black" />
                                </div>
                                <div>
                                    <div className="font-display text-[18px] text-white">{t.name}</div>
                                    <div className="text-[12px] text-white/50">{t.role}</div>
                                </div>
                            </div>
                            <p className="text-[15px] md:text-[17px] text-white/85 leading-relaxed">"{t.quote}"</p>
                            <button className="mt-6 group inline-flex items-center gap-1 text-[13px] text-white/70 hover:text-white">
                                Watch story
                                <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ================= Pricing ================= */
function Pricing() {
    const [tab, setTab] = useState<'development' | 'management'>('management');
    const plans = tab === 'development' ? pricingPlans.development : pricingPlans.management;

    return (
        <section className="relative px-4 pb-20">
            <div className="max-w-[1400px] mx-auto">
                <div className="text-center mb-10">
                    <div className="text-[12px] uppercase tracking-[0.22em] text-black/50 mb-6">Pricing</div>
                    <h2 className="display-hero text-black text-[10vw] md:text-[64px] leading-[0.98]">
                        Simple. Transparent.<br />Welcome-offer live.
                    </h2>
                    <div className="mt-8 inline-flex items-center gap-1 bg-white rounded-full p-1 border border-black/10">
                        <button
                            onClick={() => setTab('development')}
                            className={`px-5 py-2 rounded-full text-[13px] font-medium transition-colors ${tab === 'development' ? 'bg-black text-white' : 'text-black/70 hover:text-black'}`}
                        >
                            Development
                        </button>
                        <button
                            onClick={() => setTab('management')}
                            className={`px-5 py-2 rounded-full text-[13px] font-medium transition-colors ${tab === 'management' ? 'bg-black text-white' : 'text-black/70 hover:text-black'}`}
                        >
                            Management
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
                    {plans.map((p) => (
                        <div
                            key={p.name}
                            className={`rounded-[22px] p-7 md:p-8 flex flex-col card-lift border transition-colors ${p.highlight ? 'bg-black text-white border-black' : 'bg-white text-black border-black/5'}`}
                        >
                            <div className="flex items-center justify-between mb-3">
                                <h3 className="font-display text-[22px] tracking-tight">{p.name}</h3>
                                {p.highlight && (
                                    <span className="text-[10px] uppercase tracking-widest bg-[#C7F27A] text-black px-2 py-1 rounded-full font-semibold">
                                        Welcome offer
                                    </span>
                                )}
                            </div>
                            <p className={`text-[14px] ${p.highlight ? 'text-white/70' : 'text-black/60'}`}>{p.desc}</p>
                            <div className="mt-6 flex items-baseline gap-2">
                                {p.originalPrice && (
                                    <span className={`text-[15px] line-through ${p.highlight ? 'text-white/40' : 'text-black/40'}`}>
                                        {p.originalPrice}
                                    </span>
                                )}
                                <span className="font-display text-[38px] leading-none">{p.price}</span>
                                {p.frequency && (
                                    <span className={`text-[13px] ${p.highlight ? 'text-white/60' : 'text-black/50'}`}>{p.frequency}</span>
                                )}
                            </div>
                            <ul className="mt-6 space-y-2.5 flex-1">
                                {p.features.map((f) => (
                                    <li key={f} className="flex items-start gap-2 text-[14px]">
                                        <Check className={`h-4 w-4 mt-0.5 shrink-0 ${p.highlight ? 'text-[#C7F27A]' : 'text-black'}`} />
                                        <span className={p.highlight ? 'text-white/85' : 'text-black/80'}>{f}</span>
                                    </li>
                                ))}
                            </ul>
                            <button
                                className={`mt-8 group px-5 py-2.5 rounded-full text-[14px] font-medium flex items-center justify-center gap-1 transition-colors ${p.highlight ? 'bg-[#C7F27A] text-black hover:bg-[#b8e662]' : 'bg-black text-white hover:bg-neutral-800'}`}
                            >
                                {p.cta}
                                <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ================= Blog Preview ================= */
function BlogPreview() {
    const trackRef = useRef<HTMLDivElement>(null!);
    const scroll = (dir: number) => {
        const el = trackRef.current;
        if (!el) return;
        el.scrollBy({ left: dir * 360, behavior: 'smooth' });
    };

    return (
        <section className="relative px-4 pb-20">
            <div className="max-w-[1400px] mx-auto rounded-[28px] bg-[#0A0D0C] relative overflow-hidden">
                {/* subtle dot grid */}
                <div className="pointer-events-none absolute inset-0 opacity-[0.04]"
                    style={{ backgroundImage: 'radial-gradient(circle, #C7F27A 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

                <div className="relative px-6 md:px-14 pt-16 pb-8 grid md:grid-cols-2 gap-6 items-end">
                    <div>
                        <div className="text-[12px] uppercase tracking-[0.22em] text-white/40 mb-6">Resources</div>
                        <h2 className="display-hero text-white text-[10vw] md:text-[56px] leading-[0.98]">
                            Founder guides
                            <span className="inline-block w-10 md:w-14 h-10 md:h-14 mx-3 rounded-full bg-[#C7F27A] align-middle animate-float" />
                            &amp; AI website playbooks.
                        </h2>
                    </div>
                    <div className="md:pb-2">
                        <p className="text-[14px] md:text-[15px] text-white/50 max-w-[360px] leading-relaxed">
                            Everything we have learned running websites for growing brands, distilled into short reads.
                        </p>
                        <div className="flex gap-2 mt-6">
                            <button
                                onClick={() => scroll(-1)}
                                className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center transition text-white"
                            >
                                <ChevronLeft className="h-4 w-4" />
                            </button>
                            <button
                                onClick={() => scroll(1)}
                                className="h-10 w-10 rounded-full bg-[#C7F27A] text-black hover:bg-[#b8e662] flex items-center justify-center transition"
                            >
                                <ChevronRight className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                </div>

                <div ref={trackRef} className="no-scrollbar overflow-x-auto pb-12 px-6 md:px-14 flex gap-4 snap-x snap-mandatory scroll-smooth">
                    {blogPosts.map((b, i) => (
                        <a
                            key={i}
                            href="#"
                            className="group snap-start shrink-0 w-[280px] md:w-[320px] rounded-[18px] bg-[#111815] border border-[#1E2523] hover:border-[#C7F27A]/30 overflow-hidden flex flex-col card-lift transition-colors"
                        >
                            {/* Image */}
                            <div className="relative h-[160px] overflow-hidden">
                                <img
                                    src={b.image}
                                    alt={b.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#111815] via-transparent to-transparent" />
                                <span className="absolute bottom-3 left-3 text-[10px] font-mono uppercase tracking-widest text-[#C7F27A] bg-[#111815]/80 backdrop-blur-sm px-2 py-1 rounded-full border border-[#C7F27A]/30">
                                    {b.tag}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="p-5 flex flex-col flex-1">
                                <div className="flex items-start justify-between gap-2 mb-3">
                                    <h3 className="font-display text-[16px] leading-[1.2] text-white group-hover:text-[#C7F27A] transition-colors">
                                        {b.title}
                                    </h3>
                                    <ArrowUpRight className="h-4 w-4 text-white/30 group-hover:text-[#C7F27A] shrink-0 mt-0.5 transition-colors" />
                                </div>
                                <p className="text-[12px] text-white/40 leading-snug flex-1">{b.desc}</p>
                                <div className="flex items-center gap-2 pt-4 mt-4 border-t border-white/5">
                                    <span className="h-5 w-5 rounded-full bg-[#0F6E56]/60 inline-flex items-center justify-center text-[8px] text-white font-bold">A</span>
                                    <span className="text-[11px] text-white/40">{b.author}</span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ================= FAQ ================= */
function FAQ() {
    const [open, setOpen] = useState(0);
    return (
        <section className="relative px-4 pb-20">
            <div className="max-w-[900px] mx-auto">
                <div className="text-center mb-10">
                    <div className="text-[12px] uppercase tracking-[0.22em] text-black/50 mb-6">FAQ</div>
                    <h2 className="display-hero text-black text-[10vw] md:text-[56px] leading-[0.98]">
                        Questions we hear often.
                    </h2>
                </div>
                <div className="space-y-3">
                    {faqs.map((f, i) => {
                        const isOpen = open === i;
                        return (
                            <div
                                key={i}
                                className="rounded-2xl bg-white border border-black/5 overflow-hidden card-lift"
                            >
                                <button
                                    onClick={() => setOpen(isOpen ? -1 : i)}
                                    className="w-full flex items-center justify-between gap-4 px-5 md:px-6 py-4 md:py-5 text-left"
                                >
                                    <span className="text-[15px] md:text-[16px] font-semibold text-black">{f.q}</span>
                                    <span className={`h-8 w-8 rounded-full bg-black/5 flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                                        {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                                    </span>
                                </button>
                                <div
                                    className={`grid transition-all duration-400 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="px-5 md:px-6 pb-5 text-[14px] md:text-[15px] text-black/70 leading-relaxed">{f.a}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

/* ================= Final CTA ================= */
function CTA() {
    const [url, setUrl] = useState('');
    return (
        <section className="px-4 pb-20">
            <div
                className="max-w-[1400px] mx-auto rounded-[28px] px-6 md:px-14 py-20 md:py-28 relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #B5F09D 0%, #C7F27A 45%, #E7F5D9 100%)' }}
            >
                <div className="relative z-10 text-center max-w-[900px] mx-auto">
                    <h2 className="display-hero text-black text-[10vw] md:text-[64px] leading-[0.98]">
                        Let your website grow<br />without living in your head.
                    </h2>
                    <p className="mt-6 text-[15px] md:text-[17px] text-black/75">
                        Drop your URL. We will send you a free audit within 48 hours — no card, no calls.
                    </p>

                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="mt-8 max-w-[520px] mx-auto flex items-center gap-2 bg-white rounded-full p-1.5 shadow-lg"
                    >
                        <input
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            placeholder="yoursite.com"
                            className="flex-1 bg-transparent px-4 py-2.5 text-[15px] outline-none text-black placeholder:text-black/40"
                        />
                        <button
                            className="px-5 py-2.5 rounded-full bg-black text-white text-[14px] font-medium flex items-center gap-1 hover:bg-neutral-800 transition-colors"
                        >
                            Get Audit
                            <ArrowUpRight className="h-3.5 w-3.5" />
                        </button>
                    </form>
                    <p className="mt-4 text-[12px] text-black/50">Free · 48 hour turnaround · No commitment</p>
                </div>

                <div className="pointer-events-none absolute -left-16 -bottom-16 w-56 h-56 rounded-full bg-white/30 blur-2xl" />
                <div className="pointer-events-none absolute -right-20 -top-20 w-72 h-72 rounded-full bg-white/40 blur-3xl" />
            </div>
        </section>
    );
}

/* ================= Footer ================= */
export function Footer() {
    return (
        <footer className="px-4 pb-8">
            <div className="max-w-[1400px] mx-auto rounded-[28px] bg-black text-white px-6 md:px-14 py-16 md:py-20">
                <div className="grid md:grid-cols-[2fr_repeat(4,1fr)] gap-10">
                    <div>
                        <div className="font-display text-[36px] leading-none tracking-tight">Arevei</div>
                        <p className="text-white/60 text-[14px] mt-4 max-w-[260px]">
                            The AI-Native Website Manager. Build, manage, and grow — all under one team.
                        </p>
                        <div className="mt-8">
                            <div className="text-[13px] uppercase tracking-widest text-white/50 mb-3">Contact</div>
                            <div className="text-[14px] text-white/80">hello@arevei.com</div>
                            <div className="text-[14px] text-white/60 mt-1">+91 XXXXX XXXXX</div>
                        </div>
                        <div className="mt-6 flex items-center gap-3">
                            {['x', 'in', 'yt'].map((s) => (
                                <a
                                    key={s}
                                    href="#"
                                    className="h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-[11px] uppercase transition-colors"
                                >
                                    {s}
                                </a>
                            ))}
                        </div>
                    </div>
                    {footerCols.map((c) => (
                        <div key={c.title}>
                            <div className="text-[13px] uppercase tracking-widest text-white/50 mb-4">{c.title}</div>
                            <ul className="space-y-2">
                                {c.links.map((l) => (
                                    <li key={l}>
                                        <a href="#" className="text-[14px] text-white/85 hover:text-white link-hover">
                                            {l}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="font-display text-[16vw] md:text-[220px] leading-none mt-16 opacity-95 tracking-tighter select-none">
                    Arevei
                </div>
                <div className="mt-8 flex flex-col md:flex-row justify-between gap-3 text-[12px] text-white/50">
                    <div>© {new Date().getFullYear()} Arevei Inc. All rights reserved.</div>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white">Privacy</a>
                        <a href="#" className="hover:text-white">Terms</a>
                        <a href="#" className="hover:text-white">Security</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

/* ================= Home ================= */
export default function Home() {
    return (
        <div className="flex flex-col gap-0 w-full bg-[#F3EEE6] min-h-screen">
            <NewAreveiNavbar />
            <Hero />
            <LogosMarquee />
            <ProblemSection />
            <WhatArevei />
            <VideoSection />
            <SeenSalesAhead />
            <OnePlatform />
            <OurProcess />
            <WhyArevei />
            <UnifiedManagement />
            <Testimonials />
            <Pricing />
            <BlogPreview />
            <FAQ />
            <CTA />
        </div>
    );
}
