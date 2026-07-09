import Footer from "@/components/Footer/Footer"
import JsonLd from "@/components/shared/JsonLd"
import { buildBreadcrumbSchema, buildPersonSchema, teamMembers } from "@/lib/geo-data"
import { SITE_URL } from "@/lib/site"

const TeamPage = () => {
  return (
    <div className="flex flex-1">
      <div className="home-container w-full overflow-x-hidden">
        <JsonLd id="ld-team-people" data={teamMembers.map((member) => buildPersonSchema(member))} />
        <JsonLd
          id="ld-team-breadcrumb"
          data={buildBreadcrumbSchema([
            { name: "Home", url: `${SITE_URL}/` },
            { name: "Team", url: `${SITE_URL}/team` },
          ])}
        />

        <main className="home-posts px-4 pb-10 pt-8 sm:px-6 lg:px-10">
          <section className="w-full max-w-5xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#00E6C4]">
              Team
            </p>
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Arevei Leadership and Team
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/72 sm:text-lg">
              Arevei's team combines marketing strategy, brand management, website development, AI automation,
              and technical delivery. These people help turn business goals into practical growth systems.
            </p>
          </section>

          <section className="grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {teamMembers.map((member) => (
              <article key={member.name} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-28 w-28 rounded-full border border-[#00E6C4]/30 object-cover"
                  width="112"
                  height="112"
                  loading="lazy"
                />
                <h2 className="mt-5 text-2xl font-bold text-white">{member.name}</h2>
                <p className="mt-1 text-sm font-semibold text-[#00E6C4]">{member.role}</p>
                <p className="mt-4 text-sm leading-7 text-white/68">{member.bio}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {member.expertise.map((topic) => (
                    <span
                      key={topic}
                      className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/65"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex text-sm font-semibold text-[#00E6C4] hover:text-white"
                  >
                    View LinkedIn
                  </a>
                )}
              </article>
            ))}
          </section>

          <Footer />
        </main>
      </div>
    </div>
  )
}

export default TeamPage
