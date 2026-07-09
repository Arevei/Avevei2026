"use client"

import React from "react"
import { motion } from "framer-motion"
import { Link, useLocation } from "react-router-dom"
import { MdOutlineApps, MdOutlineDashboard, MdOutlineWeb } from "react-icons/md"
import { RiSettings4Line } from "react-icons/ri"
import { TbReportAnalytics } from "react-icons/tb"
import { FiArrowUpRight, FiMessageSquare } from "react-icons/fi"
import { BiSolidBriefcaseAlt2 } from "react-icons/bi"
import { BsInfoCircle } from "react-icons/bs"

import { useUserContext } from "@/contextApi/AuthContext"

const menus = [
  { name: "Home", link: "/", icon: MdOutlineDashboard },
  { name: "Schedule a Meeting", link: "/meet", icon: FiMessageSquare },
  { name: "Portfolio", link: "/works", icon: TbReportAnalytics },
  { name: "Products", link: "/products", icon: MdOutlineApps },
  { name: "Services", link: "/services", icon: BiSolidBriefcaseAlt2 },
  { name: "About", link: "/about", icon: BsInfoCircle },
  { name: "Blogs", link: "/blog", icon: MdOutlineWeb },
  { name: "My Account", link: "/user/account/details", icon: RiSettings4Line },
]

const LeftSideBar = () => {
  const { sideBarOpen, setSideBarOpen } = useUserContext()
  const { pathname } = useLocation()
  const isBlogRoute = pathname === "/blog" || pathname.startsWith("/blog/")

  if (isBlogRoute) return null

  return (
    <nav className="absolute left-0 top-0 z-50 hidden h-screen lg:block">
      <div
        onMouseEnter={() => {
          setSideBarOpen(true)
        }}
        onMouseLeave={() => {
          setSideBarOpen(false)
        }}
        className={`ml-2 mt-24 rounded-[28px] bg-black/40 p-3 backdrop-blur-md transition-all duration-300 ${
          sideBarOpen ? "w-[300px]" : "w-[80px]"
        }`}
      >
        <div className="space-y-2">
          {menus.map((menu) => {
            const isActive = pathname === menu.link

            return (
              <Link
                to={menu.link}
                key={menu.name}
                className={`group flex items-center gap-3 rounded-[22px] px-2 py-2 transition-all duration-300 ${
                  isActive
                    ? "bg-[linear-gradient(135deg,#00aeff,#00ffd9)] text-black shadow-[0_10px_28px_rgba(0,255,217,0.18)]"
                    : "text-white/72 hover:bg-white/[0.05] hover:text-white"
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl ${
                    isActive ? "bg-black/10 text-black" : "bg-[#00E6C4]/10 text-[#00E6C4]"
                  }`}
                >
                  {React.createElement(menu.icon, { size: 21 })}
                </motion.div>

                <motion.div
                  initial={false}
                  animate={{
                    opacity: sideBarOpen ? 1 : 0,
                    width: sideBarOpen ? "auto" : 0,
                    x: sideBarOpen ? 0 : -10,
                  }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="flex min-w-0 flex-1 items-center justify-between overflow-hidden"
                >
                  <span className={`truncate text-sm font-semibold ${isActive ? "text-black" : "text-white"}`}>
                    {menu.name}
                  </span>
                  <FiArrowUpRight className={`${isActive ? "text-black" : "text-white/35"} transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5`} />
                </motion.div>
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default LeftSideBar
