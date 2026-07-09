"use client"

import { Link, useNavigate } from "react-router-dom"
import { Moon, Sun } from "lucide-react"
import { useState } from "react"
import ReactGA from "react-ga4"

import { Button } from "../ui/button"
import { useUserContext } from "@/contextApi/AuthContext"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { toast } from "@/components/ui/use-toast"
import Loader from "./Loader"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useBlogTheme } from "@/lib/use-blog-theme"

const captureTopBarClicks = (btnName: string) => {
  ReactGA.event({
    category: btnName,
    action: "Top Buttons",
  })
}

const BlogHeader = () => {
  const { isLightTheme, toggleTheme } = useBlogTheme()
  const navigate = useNavigate()
  const { user: userFromStore } = useUserContext()
  const [loading, setLoading] = useState(false)

  const signOutFunction = async () => {
    try {
      setLoading(true)
      const response = await fetch("https://areveibackend.onrender.com/api/v1/users/logout", {
        method: "POST",
        headers: {
          Authorisation: `Bearer ${userFromStore.access}`,
        },
        credentials: "include",
      })
      const responseData = await response.json()

      if (responseData.success === false) {
        throw new Error(responseData.message)
      }

      localStorage.removeItem("accessTokenArevei")
      localStorage.removeItem("refreshTokenArevei")

      toast({
        variant: "default",
        title: "Sign Out Successful",
      })

      navigate("/sign-in")
    } catch (error: unknown) {
      setLoading(false)
      if (error instanceof Error) {
        toast({
          variant: "destructive",
          title: "Sign Out Failed",
          description: error.message,
        })
      }
    }
  }

  return (
    <section className="max-w-6xl mx-auto topbar blog-chrome-topbar">
      <div className="blog-header-inner flex w-full items-center justify-between px-5 py-3 lg:px-8">
        <Link
          onClick={() => captureTopBarClicks("Top Logo")}
          to="/"
          className="blog-header-logo-link flex shrink-0 items-center"
        >
          <img
            src="/assets/images/NewWordmarkWhite.svg"
            alt="Arevei"
            width={100}
            height={25}
            className="blog-header-logo my-2"
          />
        </Link>

        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            className="blog-theme-toggle inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#00ffd9]/25 bg-black/40 text-[#00ffd9] transition-all hover:border-[#00ffd9]/60 hover:bg-[#00ffd9]/10"
            aria-label={`Switch to ${isLightTheme ? "dark" : "light"} mode`}
            title={`Switch to ${isLightTheme ? "dark" : "light"} mode`}
          >
            {isLightTheme ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </button>

          {userFromStore && userFromStore.email !== "" ? (
            <Dialog>
              <DialogTrigger onClick={() => captureTopBarClicks("Profile Pic")}>
                <div className="p-[2px] rounded-full bg-[linear-gradient(135deg,_#00aeff,_#00ffd9)]">
                  <img
                    src={`${userFromStore.GooglePic === "NA" ? "/assets/images/finalLogo.png" : userFromStore.GooglePic}`}
                    alt="profile"
                    className="h-10 w-10 rounded-full"
                  />
                </div>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{userFromStore.name}</DialogTitle>
                </DialogHeader>
                <Card className="w-[200px] md:w-[350px] sm:w-[300px] rounded-lg flex flex-col flex-wrap bg-[#faf9fa69]">
                  <CardHeader className="text-justify flex flex-row justify-between text-sm sm:text-lg">
                    <div className="flex sm:flex-row justify-center items-center gap-2 flex-col">
                      <div className="p-1 rounded-full bg-[linear-gradient(135deg,_#00aeff,_#00ffd9)]">
                        <img
                          className="w-[70px] h-[70px] rounded-full"
                          src={`${userFromStore.GooglePic === "NA" ? "/assets/images/finalLogo.png" : userFromStore.GooglePic}`}
                        />
                      </div>
                      <div className="flex flex-col justify-center items-center">
                        <CardTitle>{userFromStore.name}</CardTitle>
                        <CardDescription>{userFromStore.email}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex gap-1 flex-col sm:flex-row justify-center items-center">
                    <Link onClick={() => captureTopBarClicks("Account Btn")} to="/user/account/details">
                      <button
                        className="cursor-pointer bg-[linear-gradient(135deg,_#00aeff,_#00ffd9)] hover:scale-105 text-black font-semibold py-2 px-6 rounded-lg transition transform shadow-lg"
                        style={{ boxShadow: "0 0 15px rgba(0, 255, 217, 0.3)" }}
                      >
                        {loading ? <Loader /> : "View Profile"}
                      </button>
                    </Link>
                    <Button
                      onClick={() => {
                        signOutFunction()
                        captureTopBarClicks("Sign Out")
                      }}
                      className="bg-red text-white hover:bg-red/80"
                    >
                      {loading ? <Loader /> : "Sign Out"}
                    </Button>
                  </CardContent>
                </Card>
              </DialogContent>
            </Dialog>
          ) : (
            <Link
              onClick={() => captureTopBarClicks("Top Meet")}
              to="/meet"
              className="blog-contact-button"
            >
              Contact us
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}

export default BlogHeader
