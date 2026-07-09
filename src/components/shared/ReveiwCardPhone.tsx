import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FaQuoteLeft } from "react-icons/fa"

type propss = {
  pic: string,
  name: string,
  username: string,
  post: string,
}

const ReveiwCardPhone = ({ pic, name, username, post }: propss) => {
  return (
    <div className="relative w-full min-w-0 p-[.9px] rounded-2xl hover:bg-[linear-gradient(135deg,#00d4ff,#00ffea)] transition-all duration-300">
        <Card className="flex h-full w-full min-w-0 flex-col overflow-hidden rounded-2xl border-0 bg-[#010302] pt-8 backdrop-blur-md sm:pt-10">
          {/* Gradient overlay effect */}
          <div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              background: "linear-gradient(135deg, rgba(0, 174, 255, 0.3) 0%, rgba(0, 255, 217, 0.3) 100%)",
            }}
          />

          {/* Quote icon at top */}
          <div className="absolute right-3 top-3 z-10 sm:right-4 sm:top-4">
            <FaQuoteLeft className="h-6 w-6 text-[#00ffd9] opacity-30 sm:h-8 sm:w-8" />
          </div>

          <CardHeader className="relative z-10 flex min-w-0 flex-col gap-3 px-4 pb-4 pt-5 text-start sm:gap-4 sm:px-6 sm:pt-6">
            {/* Review text first */}
            <CardContent className="p-0">
              <p className="break-words text-[13px] italic leading-6 text-gray-300 sm:text-base sm:leading-7">{post}</p>
            </CardContent>
          </CardHeader>

          {/* Profile section at bottom with gradient separator */}
          <div className="relative mt-auto">
            <div className="h-[2px] w-full bg-[linear-gradient(90deg,transparent,#00aeff,#00ffd9,transparent)] mb-4" />

            <div className="flex min-w-0 flex-row items-center gap-3 px-4 pb-4 sm:gap-4 sm:px-6 sm:pb-6">
              <div className="relative shrink-0">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,#00aeff,#00ffd9)] rounded-full blur-sm" />
                <img
                  className="relative h-14 w-14 rounded-full border-2 border-[#00ffd9] object-cover sm:h-16 sm:w-16"
                  src={pic || "/placeholder.svg"}
                  alt={name}
                />
              </div>
              <div className="min-w-0 flex-1">
                <CardTitle className="truncate text-base font-bold text-white sm:text-lg">{name}</CardTitle>
                <CardDescription className="truncate text-xs text-[#00ffd9] sm:text-sm">@{username}</CardDescription>
              </div>
            </div>
          </div>
        </Card>
      </div>

  )
}

export default ReveiwCardPhone
