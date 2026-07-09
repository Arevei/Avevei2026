"use client"

import React from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Link, useLocation } from "react-router-dom"
import { HiMenuAlt3 } from "react-icons/hi"
import { MdOutlineApps, MdOutlineDashboard, MdOutlineWeb } from "react-icons/md"
import { RiSettings4Line } from "react-icons/ri"
import { TbReportAnalytics } from "react-icons/tb"
import { FiArrowRight, FiMessageSquare } from "react-icons/fi"
import { BiSolidBriefcaseAlt2 } from "react-icons/bi"
import { FaTimes } from "react-icons/fa"
import { BsInfoCircle } from "react-icons/bs"
import ReactGA from "react-ga4"

import { useUserContext } from "@/contextApi/AuthContext"

const menus = [
  { name: "Home", link: "/", icon: MdOutlineDashboard, tag: "Start" },
  { name: "Schedule a Meeting", link: "/meet", icon: FiMessageSquare, tag: "Book" },
  { name: "Portfolio", link: "/works", icon: TbReportAnalytics, tag: "Work" },
  { name: "Products", link: "/products", icon: MdOutlineApps, tag: "Suite" },
  { name: "Services", link: "/services", icon: BiSolidBriefcaseAlt2, tag: "Offers" },
  { name: "About", link: "/about", icon: BsInfoCircle, tag: "Company" },
  { name: "Blogs", link: "/blog", icon: MdOutlineWeb, tag: "Learn" },
  { name: "My Account", link: "/user/account/details", icon: RiSettings4Line, tag: "Profile" },
]

const LeftSideBarPhone = () => {
  const { pathname } = useLocation()
  const { sideBarOpen, setSideBarOpen } = useUserContext()

  const capturePhoneSideBarClicks = (btnNm: string) => {
    ReactGA.event({
      category: btnNm,
      action: "Phone Sidebar",
    })
  }

  return (
    <div>
      <AnimatePresence>
        {sideBarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="fixed inset-0 z-[99] bg-black/65 backdrop-blur-sm"
              onClick={() => setSideBarOpen(false)}
            />

            <motion.nav
              initial={{ opacity: 0, x: -24, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -24, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="fixed min-h-screen left-3 right-3 top-3 z-[100] max-h-[calc(100vh-24px)] overflow-hidden rounded-[30px]   bg-[linear-gradient(180deg,rgba(8,12,14,0.98),rgba(2,6,8,0.96))] shadow-[0_30px_80px_rgba(0,0,0,0.55)]"
            >
              <div className="flex items-center justify-between  px-5 py-5">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.32em] text-[#00E6C4]">Navigation</p>
                  <h2 className="mt-1 text-2xl font-semibold text-white">Explore Arevei</h2>
                </div>

                <motion.button
                  whileHover={{ scale: 1.06, rotate: 90 }}
                  whileTap={{ scale: 0.94 }}
                  className="flex h-12 w-12 items-center justify-center rounded-md bg-[#00E6C4]/10 text-[#00E6C4]"
                  onClick={() => {
                    setSideBarOpen(false)
                    capturePhoneSideBarClicks("Close")
                  }}
                >
                  <FaTimes size={22} />
                </motion.button>
              </div>

              <div className="max-h-[calc(100vh-132px)] overflow-y-auto px-4 py-4">
                

                <div className="space-y-3">
                  {menus.map((menu, i) => {
                    const isActive = pathname === menu.link

                    return (
                      <motion.div
                        key={menu.name}
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.045, duration: 0.24 }}
                      >
                        <Link
                          to={menu.link}
                          onClick={() => {
                            setSideBarOpen(false)
                            capturePhoneSideBarClicks(menu.name)
                          }}
                          className={`group flex items-center gap-4 rounded-[24px]  px-3 py-3 transition-all duration-300 ${
                            isActive
                              ? "border-transparent bg-[#00E6C4] text-black shadow-[0_12px_30px_rgba(0,255,217,0.24)]"
                              : " bg-white/[0.02] text-white/84 hover:border-[#00E6C4]/30 hover:bg-white/[0.04]"
                          }`}
                        >
                          <div
                            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl ${
                              isActive ? "bg-black/10 text-black" : "bg-[#00E6C4]/10 text-[#00E6C4]"
                            }`}
                          >
                            {React.createElement(menu.icon, { size: 24 })}
                          </div>

                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between gap-3">
                              <h3 className={`truncate text-lg font-semibold ${isActive ? "text-black" : "text-white"}`}>
                                {menu.name}
                              </h3>
                              <span
                                className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] ${
                                  isActive ? "bg-black/10 text-black/80" : "bg-white/[0.04] text-white/45"
                                }`}
                              >
                                {menu.tag}
                              </span>
                            </div>
                          </div>

                          <FiArrowRight className={`${isActive ? "text-black" : "text-white/35"} transition-transform duration-300 group-hover:translate-x-1`} />
                        </Link>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>

      {!sideBarOpen && (
        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          className="flex h-12 w-12 items-center justify-center rounded-md bg-[#00E6C4]/10 text-[#00E6C4]"
          onClick={() => {
            setSideBarOpen(true)
            capturePhoneSideBarClicks("Open")
          }}
        >
          <HiMenuAlt3 size={24} />
        </motion.button>
      )}
    </div>
  )
}

export default LeftSideBarPhone
