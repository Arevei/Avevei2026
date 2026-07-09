"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FaQuoteLeft } from "react-icons/fa"

type propss = {
  pic: string
  name: string
  username: string
  post: string
}

const UserReveiwCard = ({ pic, name, username, post }: propss) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      className="cursor-pointer "
    >
      <div className="relative p-[.9px] rounded-2xl  hover:bg-[linear-gradient(135deg,#00d4ff,#00ffea)] transition-all duration-300">
        <Card className="w-[280px] md:w-[400px] sm:w-[300px] rounded-2xl flex flex-col bg-[#010302] backdrop-blur-md border-0 relative overflow-hidden h-full pt-10">
          {/* Gradient overlay effect */}
          <div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              background: "linear-gradient(135deg, rgba(0, 174, 255, 0.3) 0%, rgba(0, 255, 217, 0.3) 100%)",
            }}
          />

          {/* Quote icon at top */}
          <div className="absolute top-4 right-4 z-10">
            <FaQuoteLeft className="w-8 h-8 text-[#00ffd9] opacity-30" />
          </div>

          <CardHeader className="text-start flex flex-col gap-4 relative z-10 pt-6 pb-4">
            {/* Review text first */}
            <CardContent className="p-0">
              <p className="text-gray-300 text-base leading-relaxed italic">{post}</p>
            </CardContent>
          </CardHeader>

          {/* Profile section at bottom with gradient separator */}
          <div className="relative mt-auto">
            <div className="h-[2px] w-full bg-[linear-gradient(90deg,transparent,#00aeff,#00ffd9,transparent)] mb-4" />

            <div className="flex flex-row items-center gap-4 px-6 pb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,#00aeff,#00ffd9)] rounded-full blur-sm" />
                <img
                  className="relative w-[64px] h-[64px] rounded-full object-cover border-2 border-[#00ffd9]"
                  src={pic || "/placeholder.svg"}
                  alt={name}
                  width="64"
                  height="64"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col">
                <CardTitle className="text-white font-bold text-lg">{name}</CardTitle>
                <CardDescription className="text-[#00ffd9] text-sm">@{username}</CardDescription>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </motion.div>
  )
}

export default UserReveiwCard
