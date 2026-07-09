import { BarChart3, Users, TrendingUp, Target } from "lucide-react"

const Stats = () => {
  return (
    <section >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center ">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#00ffd9] via-[#00ffd9] to-[#00aeff] bg-clip-text text-transparent mb-12 text-center ">
            Built on Strategy. Backed by Results.
          </h2>
          <p className=" text-lg leading-relaxed text-gray-300">
            We understand markets, consumer psychology, and long-term brand growth—not just short-term wins.
          </p>
        </div>

        <div className="my-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="relative  hover:p-[1.3px] rounded-2xl bg-gradient-to-br from-[#00aeff] to-[#00ffd9] group">
            <div className="rounded-2xl bg-[#010302] backdrop-blur-sm p-8 h-full">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-[#00E6C4]/10 p-3">
                  <BarChart3 className="h-6 w-6 text-[#00E6C4]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-400">CPL (Meta & Google Ads)</p>
                  <p className="mt-2 text-3xl font-bold text-white">&lt; ₹80</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative  hover:p-[1.3px] rounded-2xl bg-gradient-to-br from-[#00aeff] to-[#00ffd9] group">
            <div className="rounded-2xl bg-[#010302] backdrop-blur-sm p-8 h-full">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-[#00E6C4]/10 p-3">
                  <Users className="h-6 w-6 text-[#00E6C4]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-400">Total Reach</p>
                  <p className="mt-2 text-3xl font-bold text-white">12.5M+</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative  hover:p-[1.3px] rounded-2xl bg-gradient-to-br from-[#00aeff] to-[#00ffd9] group">
            <div className="rounded-2xl bg-[#010302] backdrop-blur-sm p-8 h-full">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-[#00E6C4]/10 p-3">
                  <TrendingUp className="h-6 w-6 text-[#00E6C4]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-400">Qualified Leads</p>
                  <p className="mt-2 text-3xl font-bold text-white">10,000+</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative  hover:p-[1.3px] rounded-2xl bg-gradient-to-br from-[#00aeff] to-[#00ffd9] group">
            <div className="rounded-2xl bg-[#010302] backdrop-blur-sm p-8 h-full">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-[#00E6C4]/10 p-3">
                  <Target className="h-6 w-6 text-[#00E6C4]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-400">Revenue Generated</p>
                  <p className="mt-2 text-3xl font-bold text-white">₹50L+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats
