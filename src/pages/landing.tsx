import React, { useEffect, useState, useRef } from 'react';
import { ArrowUpRight, ChevronDown, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import {
    navItems,
    companyLogos,
    pillars,
    dashboardCards,
    timeline,
    ployBooks,
    engines,
    audiences,
    footerCols
} from '../lib/mock';
import '../newapp.css';
// import { motion } from 'framer-motion';

const Logo = () => (
    <a href="/" className="flex items-center gap-2">
        <span className="font-display text-[26px] tracking-tight text-black lowercase">ploy</span>
    </a>
);

export function NewAreveiNavbar() {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const on = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', on);
        return () => window.removeEventListener('scroll', on);
    }, []);

    return (
        <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
            <nav className={`flex items-center gap-2 md:gap-6 px-4 md:px-6 py-2 md:py-2.5 rounded-full backdrop-blur-lg transition-all duration-500 ${scrolled ? 'bg-white/85 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.25)]' : 'bg-white/60'} border border-black/5 w-full max-w-[1180px] justify-between`}>
                <Logo />
                <ul className="hidden lg:flex items-center gap-1">
                    {navItems.map((it) => (
                        <li key={it.label} className="relative group">
                            <button className="flex items-center gap-1 px-3 py-2 text-[14px] text-black/80 hover:text-black transition-colors">
                                <span className="link-hover">{it.label}</span>
                                {it.items && <ChevronDown className="h-3.5 w-3.5 opacity-60 group-hover:rotate-180 transition-transform duration-300" />}
                            </button>
                            {it.items && (
                                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 min-w-[220px] bg-white rounded-2xl shadow-[0_20px_50px_-20px_rgba(0,0,0,0.25)] border border-black/5 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 p-2">
                                    {it.items.map((s) => (
                                        <a key={s} href="#" className="block px-3 py-2 rounded-lg text-[14px] text-black/80 hover:bg-black/5 hover:text-black transition-colors">{s}</a>
                                    ))}
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
                <div className="flex items-center gap-2">
                    <button className="px-4 md:px-5 py-2 rounded-full bg-white hover:bg-black/5 text-[14px] font-medium transition-colors border border-black/10">Log in</button>
                    <button className="px-4 md:px-5 py-2 rounded-full bg-black text-white text-[14px] font-medium hover:bg-neutral-800 transition-colors">Start Free</button>
                </div>
            </nav>
        </div>
    );
}

function Hero() {
    return (
        <section className="relative pt-24 px-4">
            <div className="relative mx-auto max-w-[1400px] rounded-[28px] overflow-hidden min-h-[86vh] flex items-center justify-center">
                {/* Background image */}
                <div
                    className="absolute inset-0 bg-cover bg-center scale-105"
                    style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1622737133809-d95047b9e673?w=1920&q=80)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70" />

                {/* Content */}
                <div className="relative z-10 text-center max-w-[1100px] px-6 py-24">
                    <h1 className="display-hero text-white text-[13vw] md:text-[7.5vw] lg:text-[112px] leading-[0.92]">
                        Your website should<br />be working harder<br />than you are.
                    </h1>
                    <p className="mt-8 text-white/85 text-[15px] md:text-[17px] max-w-[520px] mx-auto">
                        Ploy is the marketing platform that turns your website into your company’s growth engine.
                    </p>
                    <div className="mt-8 flex items-center justify-center gap-3">
                        <button className="group px-6 py-3 rounded-full bg-white text-black text-[14px] font-medium hover:scale-[1.03] transition-transform">
                            <span className="inline-flex items-center gap-2">Start Free
                                <ArrowUpRight className="h-4 w-4 -mr-1 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </span>
                        </button>
                        <button className="px-6 py-3 rounded-full bg-transparent border border-white/40 text-white text-[14px] font-medium hover:bg-white/10 transition-colors">Get Demo</button>
                    </div>
                </div>

                {/* Announcement banner */}
                <a href="#" className="group absolute bottom-6 left-6 z-10 flex items-center gap-3 bg-white/95 backdrop-blur rounded-2xl px-3 py-2.5 pr-4 max-w-[340px] shadow-lg hover:bg-white transition">
                    <img alt="announcement" src="https://i.ytimg.com/vi/NONVS2IoDQE/mqdefault.jpg" className="h-10 w-14 object-cover rounded-lg" />
                    <div className="text-left">
                        <div className="text-[10px] uppercase tracking-widest text-black/50 font-semibold">Announcement</div>
                        <div className="text-[13px] text-black leading-tight">Ploy raises $27M seed to build the first website platform that grows your business.</div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-black/60 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
            </div>
        </section>
    );
}

function PloyBooks() {
    const trackRef = useRef<HTMLDivElement>(null);
    const scroll = (dir: number) => {
        const el = trackRef.current;
        if (!el) return;
        el.scrollBy({ left: dir * 380, behavior: 'smooth' });
    };

    return (
        <section className="relative px-4 pb-20">
            <div className="max-w-[1400px] mx-auto rounded-[28px] relative overflow-hidden" style={{ background: '#CFE0F8' }}>
                <div className="px-6 md:px-14 pt-16 pb-6 grid md:grid-cols-2 gap-6 items-start">
                    <h2 className="display-hero text-black text-[11vw] md:text-[66px] leading-[0.95]">
                        Expert strategies,<br />
                        deployed
                        <span className="inline-block w-14 md:w-20 h-14 md:h-20 mx-3 rounded-full bg-gradient-to-br from-white to-sky-200 align-middle shadow-inner animate-float" />
                        for you.
                    </h2>
                    <div className="md:pt-16">
                        <p className="text-[15px] md:text-[16px] text-black/75 max-w-[440px]">
                            PloyBooks are pre-built growth strategies executed by specialized agents. Run them on a schedule, trigger them from an event, or let Ploy decide.
                        </p>
                        <div className="flex gap-2 mt-6">
                            <button onClick={() => scroll(-1)} className="h-10 w-10 rounded-full bg-white hover:bg-white/80 border border-black/10 flex items-center justify-center transition">
                                <ChevronLeft className="h-4 w-4" />
                            </button>
                            <button onClick={() => scroll(1)} className="h-10 w-10 rounded-full bg-black text-white hover:bg-neutral-800 flex items-center justify-center transition">
                                <ChevronRight className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                </div>

                <div ref={trackRef} className="no-scrollbar overflow-x-auto pb-14 px-6 md:px-14 flex gap-4 snap-x snap-mandatory scroll-smooth">
                    {ployBooks.map((b, i) => (
                        <a key={i} href="#" className="group snap-start shrink-0 w-[300px] md:w-[340px] rounded-2xl bg-white/85 hover:bg-white p-6 min-h-[300px] flex flex-col justify-between card-lift">
                            <div>
                                <div className="flex items-center justify-between mb-8">
                                    <span className="font-display text-[18px] lowercase">ploy</span>
                                    <ArrowUpRight className="h-4 w-4 opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </div>
                                <div className="font-display text-[26px] leading-[1.05] text-black">{b.title}</div>
                                <p className="mt-4 text-[13.5px] text-black/60 leading-snug">{b.desc}</p>
                            </div>
                            <div className="flex items-center gap-2 pt-4 mt-4 border-t border-black/5">
                                <span className="h-6 w-6 rounded-full bg-black/10 inline-block" />
                                <span className="text-[12px] text-black/60">by <span className="text-black">{b.author}</span></span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

function EmployeeTimeline() {
    return (
        <section className="relative px-4 pb-20">
            <div className="max-w-[1400px] mx-auto rounded-[28px] relative overflow-hidden" style={{ background: '#F5F142' }}>
                <div className="px-6 md:px-14 pt-16 pb-10 text-center relative">
                    <h2 className="display-hero text-black text-[13vw] md:text-[86px] leading-[0.95]">
                        An employee
                        <div className="relative inline-block ml-2">
                            <span className="inline-block w-14 md:w-24 h-14 md:h-24 rounded-full bg-gradient-to-br from-lime-200 to-lime-400 align-middle shadow-inner animate-float-alt" />
                        </div>
                        <br />that never sleeps
                    </h2>
                </div>

                <div className="px-4 md:px-10 pb-16">
                    <div className="max-w-[860px] mx-auto flex flex-col gap-3">
                        {timeline.map((t, i) => (
                            <div key={i} className="group grid grid-cols-[80px_1fr] md:grid-cols-[100px_140px_1fr] gap-3 md:gap-6 items-start bg-white/60 hover:bg-white rounded-2xl p-4 md:p-5 transition-colors card-lift">
                                <div className="text-[12px] font-medium text-black/60 pt-1">{t.time}</div>
                                <div className="hidden md:block text-[11px] uppercase tracking-widest text-black/50 pt-1.5">{t.tag}</div>
                                <div>
                                    <div className="md:hidden text-[10px] uppercase tracking-widest text-black/50 mb-1">{t.tag}</div>
                                    <div className="text-[15px] md:text-[16px] font-medium text-black">{t.title}</div>
                                    <div className="text-[13px] md:text-[14px] text-black/60 mt-1">{t.body}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

const SparkChart = ({ colorClass = 'stroke-pink-400 fill-pink-100' }: { colorClass?: string }) => (
    <svg viewBox="0 0 200 60" className="w-full h-[46px]" preserveAspectRatio="none">
        <path d="M0 50 L20 45 L40 40 L60 42 L80 30 L100 32 L120 22 L140 18 L160 12 L180 8 L200 4 L200 60 L0 60 Z" className={colorClass} strokeWidth="2" opacity="0.5" />
        <path d="M0 50 L20 45 L40 40 L60 42 L80 30 L100 32 L120 22 L140 18 L160 12 L180 8 L200 4" className={colorClass.replace('fill-', '')} fill="none" strokeWidth="2" />
    </svg>
);

function SlepSection() {
    return (
        <section className="relative px-4 pt-14 pb-20">
            <div className="max-w-[1400px] mx-auto rounded-[28px] p-6 md:p-14 relative overflow-hidden" style={{ background: 'radial-gradient(120% 90% at 30% 20%, #F8BEEB 0%, #F5AEE0 55%, #EA8FD1 100%)' }}>
                <div className="grid md:grid-cols-2 gap-8 items-start">
                    <div>
                        <h2 className="display-hero text-black text-[12vw] md:text-[68px] leading-[0.95]">
                            You slept 8 hours.<br />
                            <span className="inline-flex items-center gap-3">
                                <span className="inline-block w-16 h-12 md:w-24 md:h-16 rounded-full bg-gradient-to-br from-pink-200 to-pink-400 shadow-inner animate-float" />
                                Ploy didn’t.
                            </span>
                        </h2>
                    </div>
                    <div className="md:pt-24">
                        <p className="text-[15px] md:text-[16px] text-black/75 max-w-[440px]">
                            Ploy Web builds and optimizes. Ploy Grow identifies and reaches. Ploy Ads creates and attributes. All three act on what the others find.
                        </p>
                    </div>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mt-16">
                    {dashboardCards.map((c) => (
                        <div key={c.tag} className="rounded-[20px] bg-white p-5 card-lift">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="font-display text-[18px] lowercase">ploy</span>
                                <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${c.tagColor}`}>{c.tag}</span>
                            </div>
                            <div className="flex items-end justify-between gap-2">
                                <div>
                                    <div className="font-display text-[54px] leading-none text-black">{c.heading}</div>
                                    <div className="text-[12px] text-black/60 mt-1">{c.subheading}</div>
                                </div>
                                <div className="w-1/2"><SparkChart colorClass={c.chartColor} /></div>
                            </div>
                            <div className="mt-4 text-[12px] text-black/60 bg-black/[0.03] rounded-lg p-3 leading-snug">{c.note}</div>
                            <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-black/5">
                                {c.stats.map((s) => (
                                    <div key={s.label}>
                                        <div className="text-[10px] uppercase tracking-wide text-black/45">{s.label}</div>
                                        <div className="font-display text-[20px] mt-0.5">{s.value}</div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-4 flex items-center gap-2">
                                <span className={`w-2 h-2 rounded-full ${c.dotColor} soft-pulse`} />
                                <span className="text-[12px] text-black/70">{c.footer}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function useInView(ref: React.RefObject<HTMLElement | null>, threshold = 0.3) {
    const [inView, setInView] = useState(false);
    useEffect(() => {
        if (!ref.current) return;
        const io = new IntersectionObserver(([e]) => e.isIntersecting && setInView(true), { threshold });
        io.observe(ref.current);
        return () => io.disconnect();
    }, [ref, threshold]);
    return inView;
}

function Autopilot() {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref);

    return (
        <section ref={ref} className="relative py-24 md:py-32 px-4">
            <div className="max-w-[1200px] mx-auto">
                <div className="relative text-center">
                    <h2 className="display-hero text-black text-[10vw] md:text-[80px] leading-[0.95]">
                        <span className="inline-block relative">Your <span className="inline-block px-2">website</span> launched.</span>
                        <br />
                        <span className="inline-block relative">
                            <span>Then it</span>
                            <span className={`ml-3 inline-block transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-30 translate-y-3'}`}>
                                stopped.
                            </span>
                        </span>
                    </h2>
                    {/* Floating gummy shape */}
                    <img
                        alt="blob"
                        src="https://images.unsplash.com/photo-1675437434916-fd6d0b03749d?w=600&q=80"
                        className="hidden md:block pointer-events-none select-none absolute right-[8%] top-[6%] w-[220px] h-[220px] object-cover rounded-full mix-blend-multiply opacity-90 animate-float"
                        style={{ filter: 'contrast(1.05) saturate(1.1)' }}
                    />
                    <p className="mt-8 text-[16px] md:text-[17px] text-black/60 max-w-[560px] mx-auto">Ploy takes what you have and puts it on autopilot.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-16">
                    {pillars.map((p, i) => (
                        <div key={p.title} className={`rounded-[22px] p-7 md:p-8 min-h-[280px] card-lift ${p.color}`} style={{ transitionDelay: `${i * 100}ms` }}>
                            <div className="w-12 h-12 rounded-xl bg-black/85 flex items-center justify-center mb-6 overflow-hidden">
                                <div className="grid grid-cols-2 gap-[2px] p-2 opacity-90">
                                    {[...Array(4)].map((_, k) => (
                                        <div key={k} className="w-2 h-2 rounded-[2px] bg-[#C7F27A]" style={{ opacity: (k + 1) / 4 }} />
                                    ))}
                                </div>
                            </div>
                            <h3 className="font-display text-[28px] tracking-tight text-black mb-3">{p.title}</h3>
                            <p className="text-[15px] leading-relaxed text-black/70">{p.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
// function HowItWorks() {
//     return (
//         <section className="py-32 px-6 bg-white border-y border-border/50">
//             <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
//                 <motion.div
//                     initial={{ opacity: 0, x: -30 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.6 }}
//                     className="flex-1"
//                 >
//                     <h2 className="text-4xl md:text-6xl font-display uppercase tracking-tight mb-6">Convert on autopilot.</h2>
//                     <p className="text-xl text-muted-foreground leading-relaxed mb-10">
//                         Stop losing qualified leads to generic landing pages. Ploy automatically identifies who is visiting and shows them the most relevant message.
//                     </p>
//                     <div className="space-y-8">
//                         {[
//                             { num: "01", title: "Connect your site", desc: "Add one line of code to your existing website. Works with Webflow, Framer, Next.js and more." },
//                             { num: "02", title: "Set up audiences", desc: "Define rules based on firmographics, behavior, or CRM data." },
//                             { num: "03", title: "Watch pipeline grow", desc: "Our platform optimizes variations automatically to maximize your conversion rate." }
//                         ].map((step, i) => (
//                             <div key={i} className="flex gap-6">
//                                 <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center font-display text-xl shrink-0">
//                                     {step.num}
//                                 </div>
//                                 <div>
//                                     <h4 className="text-xl font-bold mb-2">{step.title}</h4>
//                                     <p className="text-muted-foreground">{step.desc}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </motion.div>
//                 <motion.div
//                     initial={{ opacity: 0, scale: 0.95 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.6 }}
//                     className="flex-1 w-full bg-background rounded-[40px] p-8 md:p-12 relative overflow-hidden"
//                 >
//                     <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 to-transparent pointer-events-none" />
//                     <div className="bg-white rounded-2xl shadow-xl border border-border p-6 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
//                         <div className="flex items-center gap-3 mb-6 pb-6 border-b border-border">
//                             <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white font-black text-xs">
//                                 N
//                             </div>
//                             <div>
//                                 <div className="font-bold text-sm">Visitor detected</div>
//                                 <div className="text-xs text-muted-foreground">Enterprise Media Company</div>
//                             </div>
//                         </div>
//                         <div className="space-y-4">
//                             <div className="h-4 bg-gray-100 rounded w-3/4"></div>
//                             <div className="h-4 bg-gray-100 rounded w-1/2"></div>
//                             <div className="h-10 bg-accent/20 rounded-lg w-full mt-6 flex items-center px-4 border border-accent/30">
//                                 <span className="text-sm font-semibold text-accent">Applying "Enterprise" template...</span>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="bg-primary text-white rounded-2xl shadow-xl p-6 mt-8 transform rotate-3 hover:rotate-0 transition-transform duration-500 relative z-10 translate-x-4 md:translate-x-8">
//                         <div className="text-xs font-bold uppercase tracking-wider text-accent mb-2">Live View</div>
//                         <div className="text-2xl font-display tracking-tight leading-none mb-4">SCALE YOUR GLOBAL MEDIA EMPIRE</div>
//                         <div className="text-sm text-white/70 mb-6">See how our CDN accelerates delivery for millions of concurrent viewers.</div>
//                         <div className="h-10 bg-white text-primary rounded-full flex items-center justify-center font-bold text-sm w-1/2">
//                             Book Enterprise Demo
//                         </div>
//                     </div>
//                 </motion.div>
//             </div>
//         </section>
//     );
// }


function LogosMarquee() {
    const list = [...companyLogos, ...companyLogos];
    return (
        <section className="py-14 overflow-hidden">
            <p className="text-center text-[13px] uppercase tracking-[0.18em] text-black/50 mb-8">Trusted by high-horsepower teams at</p>
            <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#F3EEE6] to-transparent z-10" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#F3EEE6] to-transparent z-10" />
                <div className="flex items-center gap-16 marquee-track w-max">
                    {list.map((l, i) => (
                        <div key={i} className="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity duration-500">
                            <img src={l.src} alt={l.name} className="h-6 w-6 object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                            <span className="text-[16px] text-black/70 font-medium tracking-tight">{l.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function Footer() {
    return (
        <footer className="px-4 pb-8">
            <div className="max-w-[1400px] mx-auto rounded-[28px] bg-black text-white px-6 md:px-14 py-16 md:py-20">
                <div className="grid md:grid-cols-[2fr_repeat(4,1fr)] gap-10">
                    <div>
                        <div className="font-display text-[42px] lowercase leading-none">ploy</div>
                        <p className="text-white/60 text-[14px] mt-4 max-w-[260px]">The marketing platform that turns your website into your company’s growth engine.</p>
                        <div className="mt-8 flex items-center gap-3">
                            {['x', 'li', 'yt'].map((s) => (
                                <a key={s} href="#" className="h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-[11px] uppercase">{s}</a>
                            ))}
                        </div>
                    </div>
                    {footerCols.map((c) => (
                        <div key={c.title}>
                            <div className="text-[13px] uppercase tracking-widest text-white/50 mb-4">{c.title}</div>
                            <ul className="space-y-2">
                                {c.links.map((l) => (
                                    <li key={l}><a href="#" className="text-[14px] text-white/85 hover:text-white link-hover">{l}</a></li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="font-display text-[16vw] md:text-[220px] leading-none mt-16 opacity-95 lowercase select-none">ploy</div>
                <div className="mt-8 flex flex-col md:flex-row justify-between gap-3 text-[12px] text-white/50">
                    <div>© {new Date().getFullYear()} Ploy Inc. All rights reserved.</div>
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

function CTA() {
    const [url, setUrl] = useState('');

    return (
        <section className="px-4 pb-20">
            <div className="max-w-[1400px] mx-auto rounded-[28px] px-6 md:px-14 py-20 md:py-28 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #B5F09D 0%, #C7F27A 45%, #E7F5D9 100%)' }}>
                <div className="relative z-10 text-center max-w-[900px] mx-auto">
                    <h2 className="display-hero text-black text-[12vw] md:text-[80px] leading-[0.95]">
                        Stop maintaining<br />your website.
                    </h2>
                    <p className="mt-6 text-[15px] md:text-[17px] text-black/75">Plug in your URL and watch it slurp your whole site in 60 seconds.</p>

                    <form onSubmit={(e) => e.preventDefault()} className="mt-8 max-w-[520px] mx-auto flex items-center gap-2 bg-white rounded-full p-1.5 shadow-lg">
                        <input
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            placeholder="yoursite.com"
                            className="flex-1 bg-transparent px-4 py-2.5 text-[15px] outline-none text-black placeholder:text-black/40"
                        />
                        <button className="px-5 py-2.5 rounded-full bg-black text-white text-[14px] font-medium flex items-center gap-1 hover:bg-neutral-800 transition-colors">
                            Start Free <ArrowUpRight className="h-3.5 w-3.5" />
                        </button>
                    </form>
                    <p className="mt-4 text-[12px] text-black/50">Free tier · No card · 60-second slurp</p>
                </div>

                <div className="pointer-events-none absolute -left-16 -bottom-16 w-56 h-56 rounded-full bg-white/30 blur-2xl" />
                <div className="pointer-events-none absolute -right-20 -top-20 w-72 h-72 rounded-full bg-white/40 blur-3xl" />
            </div>
        </section>
    );
}

function Audiences() {
    return (
        <section className="relative px-4 pb-20">
            <div className="max-w-[1400px] mx-auto">
                <div className="text-center mb-10">
                    <div className="text-[13px] uppercase tracking-[0.18em] text-black/50 mb-4">Who’s Ploy for?</div>
                    <h2 className="display-hero text-black text-[11vw] md:text-[72px] leading-[0.95]">For teams that ship,<br />measure, and win.</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {audiences.map((a) => (
                        <div key={a.title} className="group rounded-[22px] bg-white p-7 md:p-8 min-h-[380px] flex flex-col card-lift relative overflow-hidden">
                            <div className={`absolute -right-10 -top-10 w-40 h-40 rounded-full ${a.accent} opacity-70 group-hover:scale-125 transition-transform duration-700`} />
                            <div className="relative">
                                <h3 className="font-display text-[36px] leading-none text-black">{a.title}</h3>
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
                                    <button className="px-4 py-2 rounded-full bg-white border border-black/10 text-black text-[13px] font-medium hover:bg-black/5 transition-colors">{a.cta2}</button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function OnePlatform() {
    const [active, setActive] = useState(0);

    return (
        <section className="relative px-4 pb-20 overflow-hidden">
            <div className="max-w-[1400px] mx-auto rounded-[28px] bg-[#F3EEE6] relative overflow-hidden">
                {/* decorative blobs */}
                <img alt="" src="https://images.unsplash.com/photo-1660136308586-432226190a26?w=800&q=70" className="pointer-events-none select-none absolute -right-16 -top-16 w-[360px] h-[360px] object-cover rounded-full mix-blend-multiply opacity-70 animate-float" />
                <img alt="" src="https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?w=800&q=70" className="pointer-events-none select-none absolute -left-24 top-40 w-[300px] h-[300px] object-cover rounded-full mix-blend-multiply opacity-60 animate-float-alt" />

                <div className="px-6 md:px-14 pt-24 pb-20 text-center relative">
                    <div className="text-[13px] uppercase tracking-[0.18em] text-black/50 mb-6">One • platform • three • engines</div>
                    <h2 className="display-hero text-black text-[13vw] md:text-[90px] leading-[0.95]">
                        One platform<br />three engines
                    </h2>
                </div>

                <div className="px-4 md:px-10 pb-16 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {engines.map((e, i) => (
                            <div
                                key={e.title}
                                onMouseEnter={() => setActive(i)}
                                className={`rounded-[22px] p-7 md:p-8 min-h-[360px] transition-all duration-500 card-lift ${e.color} ${active === i ? 'md:scale-[1.02]' : ''}`}
                            >
                                <div className="flex items-center gap-2 mb-6">
                                    <span className="font-display text-[20px] lowercase">ploy</span>
                                    <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-black text-white">{e.title}</span>
                                </div>
                                <h3 className="font-display text-[36px] tracking-tight text-black leading-none">{e.title}</h3>
                                <p className="text-[15px] text-black/70 mt-2">{e.tagline}</p>
                                <ul className="mt-8 space-y-3">
                                    {e.features.map((f) => (
                                        <li key={f} className="flex items-start gap-2 text-[14px] text-black/80">
                                            <Check className="h-4 w-4 mt-0.5 shrink-0" /> {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function Home() {
    return (
        <div className="flex flex-col gap-0 w-full">
            <Hero />
            <LogosMarquee />
            <Autopilot />
            {/* <HowItWorks /> */}
            <SlepSection />
            <EmployeeTimeline />
            <PloyBooks />
            <OnePlatform />
            <Audiences />
            <CTA />
        </div>
    );
}