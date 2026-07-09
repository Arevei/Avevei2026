import { Link } from "react-router-dom"
import ReactGA from "react-ga4"

import { FAQMeet } from "@/components/shared/FAQMeet"
import RevealOnScroll from "@/components/shared/RevealOnScroll"

const schedulerUrl =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1Ng-fRtiNtTsbeiq0Z6DTkEvGsKYwGcrTeAM1JpxIAg4QjcYwjYD3zwrPPPsm2veTlk_bMSFtz?gv=true"

const highlights = [
  "30-minute strategy call",
  "Fast follow-up on WhatsApp or email",
]

function MeetForm() {
  ReactGA.send({ hitType: "pageview", page: "/meet", title: "Meeting Page" })

  const captureFormClicks = (label: string) => {
    ReactGA.event({
      category: label,
      action: "Form Button",
    })
  }

  return (
    <main className="w-full overflow-x-hidden">
      <section className="relative min-h-screen overflow-x-hidden px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 lg:gap-10">
          <RevealOnScroll
            className="grid items-start gap-6 lg:grid-cols-[minmax(320px,0.92fr)_minmax(0,1.08fr)]"
          >
            <div className="space-y-6 rounded-[32px]  bg-black/45 p-6 backdrop-blur-md sm:p-8 lg:sticky lg:top-6">
              <span className="inline-flex rounded-full border border-[#00E6C4]/30 bg-[#00E6C4]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#00E6C4]">
                Schedule a Call
              </span>

              <div className="space-y-4">
                <h1 className="max-w-[12ch] text-4xl font-bold leading-none sm:text-5xl lg:text-6xl">
                  Let&apos;s plan your next move.
                </h1>
                <p className="max-w-xl text-sm leading-7 text-white/75 sm:text-base">
                  Book a focused strategy meeting with the Arevei team. We&apos;ll understand your goals, review your current setup, and map the fastest path to better growth.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {highlights.map((item) => (
                  <div key={item} className="rounded-2xl  bg-white/[0.03] px-4 py-3 text-sm text-white/80">
                    {item}
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row lg:flex-col">
                <a
                  href="https://wa.me/919625440855?text=Hi!%20I%27d%20like%20to%20book%20a%20meeting%20with%20Arevei."
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => captureFormClicks("WhatsApp")}
                  className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#00aeff] to-[#00ffd9] px-6 py-3 text-sm font-semibold text-black transition-transform duration-300 hover:scale-[1.01]"
                >
                  Chat on WhatsApp
                </a>

                <Link
                  to="/contact"
                  onClick={() => captureFormClicks("Contact")}
                  className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white/[0.08]"
                >
                  Open Contact Page
                </Link>
              </div>
            </div>

            <div className="min-w-0 rounded-[32px]  bg-[#050808]/90 p-3 shadow-[0_20px_80px_rgba(0,0,0,0.38)] sm:p-4">
              <div className="overflow-hidden rounded-[24px] border border-white/6 bg-white">
                <iframe
                  src={schedulerUrl}
                  title="Schedule a meeting with Arevei"
                  className="block h-[78vh] min-h-[700px] w-full bg-white"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll className="rounded-[32px] border border-white/8 bg-black/40 p-6 backdrop-blur-md sm:p-8" delay={0.04}>
            <div className="mb-6 space-y-3 text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">Frequently Asked Questions</h2>
              <p className="mx-auto max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                A few quick answers before you book. If you need something specific, message us and we&apos;ll help right away.
              </p>
            </div>

            <div className="flex justify-center">
              <FAQMeet />
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </main>
  )
}

export default MeetForm
