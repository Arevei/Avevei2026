"use client"

import { motion } from "framer-motion"
import { FaLinkedin } from "react-icons/fa"
import { Link } from "react-router-dom"

import { teamMembers } from "@/lib/geo-data"

const TeamSection = () => {
  return (
    <div className="w-full  px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center "
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#00ffd9] via-[#00ffd9] to-[#00aeff] bg-clip-text text-transparent mb-12 text-center">
            Meet Our Creative Team
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 ">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1, type: "spring" }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
                scale: 1.03,
                transition: { duration: 0.3 },
              }}
              className="relative p-[.9px] rounded-2xl group hover:bg-[linear-gradient(135deg,#00d4ff,#00ffea)] transition-all duration-300 cursor-pointer"
            >
              <div className="bg-[#010302] backdrop-blur-sm rounded-2xl flex flex-col items-center p-6 shadow-xl h-full relative overflow-hidden">
                {/* Subtle gradient overlay */}
                <div
                  className="absolute inset-0 opacity-5 pointer-events-none"
                  style={{
                    background: "linear-gradient(135deg, rgba(0, 174, 255, 0.2) 0%, rgba(0, 255, 217, 0.2) 100%)",
                  }}
                />

                {/* Profile Image with animated gradient ring */}
                <div className="relative mb-6">
                  <motion.div
                    className="absolute group-hover:inset-0 rounded-full bg-[linear-gradient(135deg,#00aeff,#00ffd9)]  blur-md"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />
                  <div className="relative p-1 rounded-full bg-[linear-gradient(135deg,#00aeff,#00ffd9)]">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-32 h-32 object-cover object-center rounded-full shadow-2xl"
                      width="128"
                      height="128"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Member Info */}
                <div className="flex flex-col justify-between items-center w-full h-full relative z-10">
                  <div className="flex flex-col items-center w-full mb-4">
                    <span
                      className="text-lg font-bold text-white mb-1 text-center"
                      style={{ lineHeight: "1.3", wordBreak: "break-word" }}
                    >
                      {member.name}
                    </span>
                    <span className="tracking-wide text-[#00ffd9] font-semibold text-sm text-center mb-2">
                      {member.role}
                    </span>

                    {/* Gradient divider */}
                    <div className="h-[1px] w-16 bg-[linear-gradient(90deg,transparent,#00aeff,#00ffd9,transparent)] my-2" />

                    <span className="text-gray-400 text-xs text-center">{member.qualification}</span>
                    <span className="text-gray-500 text-xs text-center">{member.college}</span>
                  </div>

                  {/* LinkedIn button with gradient border design */}
                  <button
                    className="relative p-[.9px] rounded-full transition-all duration-300 bg-[linear-gradient(135deg,#00aeff,#00ffd9)] hover:bg-[linear-gradient(135deg,#00d4ff,#00ffea)] w-full cursor-pointer "
                    onClick={() => {
                      if (member.linkedin) {
                        window.open(member.linkedin, "_blank")
                      }
                    }}
                    disabled={!member.linkedin}
                  >
                    <span className="flex items-center justify-center gap-2 rounded-full bg-[#0f2c27fe] group-hover:bg-transparent text-white group-hover:text-black py-2.5 px-4 font-semibold tracking-wide transition-all duration-300">
                      <FaLinkedin className="w-4 h-4" />
                      View LinkedIn
                    </span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Link
            to="/team"
            className="rounded-lg border border-[#00E6C4]/40 px-5 py-3 text-sm font-semibold text-[#00E6C4] transition hover:bg-[#00E6C4]/10"
          >
            View full team
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TeamSection
