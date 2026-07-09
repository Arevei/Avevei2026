"use client"

import { Link, useLocation, useNavigate } from "react-router-dom"

import { Button } from "../ui/button"
import { useUserContext } from "@/contextApi/AuthContext"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useState } from "react"
import { toast } from "@/components/ui/use-toast"
import Loader from "./Loader"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import LeftSideBarPhone from "./SIdeBarForPhone"
import BlogHeader from "./BlogHeader"
// import TopBtn from "./TopBtn/TopBtn"
import ReactGA from "react-ga4"

const Topbar = () => {
  const { pathname } = useLocation()
  const showBlogThemeToggle = pathname === "/blog" || pathname.startsWith("/blog/")
  const navigate = useNavigate()
  const { user: userFromStore } = useUserContext()
  const [loading, setLoading] = useState(false)

  const captureTopBarClicks = (btnName: string) => {
    ReactGA.event({
      category: btnName,
      action: "Top Buttons",
    })
  }

  const signOutFunction = async () => {
    console.log(userFromStore.access)
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
      return
    } catch (error: any) {
      setLoading(false)
      if (error.message) {
        toast({
          variant: "destructive",
          title: "Sign Out Failed",
          description: error.message,
        })
      }
    }
  }

  if (showBlogThemeToggle) {
    return <BlogHeader />
  }

  const logoSrc = "/assets/images/NewWordmarkWhite.svg"

  return (
    <section className="topbar">
      <div className="flex justify-between items-center lg:justify-center py-3 px-5 relative">
        <div className="block lg:hidden">
          <LeftSideBarPhone />
        </div>

        <Link
          onClick={() => {
            captureTopBarClicks("Top Logo")
          }}
          to="/"
          className="flex gap-3 items-center pl-0 sm:pl-3 lg:pl-0 mr-12 sm:-mr-12 lg:-mr-0"
        >
          <img src={logoSrc} alt="Arevei" width={100} height={25} className="my-2"/>
        </Link>

        <div className="flex gap-4 lg:absolute lg:right-4">
          {userFromStore && userFromStore.email !== "" ? (
            <div className="flex items-center gap-3">
            <Dialog>
              <DialogTrigger
                onClick={() => {
                  captureTopBarClicks("Profile Pic")
                }}
              >
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
                    <Link
                      onClick={() => {
                        captureTopBarClicks("Account Btn")
                      }}
                      to={`/user/account/details`}
                    >
                      <button
                        className="cursor-pointer bg-[linear-gradient(135deg,_#00aeff,_#00ffd9)] hover:scale-105 text-black font-semibold py-2 px-6 rounded-lg transition transform shadow-lg"
                        style={{
                          boxShadow: "0 0 15px rgba(0, 255, 217, 0.3)",
                        }}
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
            </div>
          ) : (
            <div className="hidden items-center gap-3 sm:flex">
              <Link
            onClick={() => {
              captureTopBarClicks("Top Meet")
            }}
            to="/meet"
             className="relative p-[.9px] pl-[.8px] rounded-lg transition-all duration-300 bg-[linear-gradient(135deg,#00aeff,#00ffd9)] hover:bg-[linear-gradient(135deg,#00d4ff,#00ffea)] inline-block cursor-pointer mt-1"
          >
            <span className="block rounded-lg  bg-[#0f2c27fe] hover:bg-transparent text-white hover:text-black px-3 py-1.5 text-center  tracking-wide transition-all duration-300">
            Contact us
              </span>
          </Link>
              {/* Login button hidden
              <Link
                onClick={() => {
                  captureTopBarClicks("Login")
                }}
                to="/sign-in"
              >
                <button
                  className="cursor-pointer bg-[linear-gradient(135deg,_#00aeff,_#00ffd9)] hover:scale-105 text-black  px-3 py-1.5 rounded-lg transition transform shadow-lg hidden lg:block mt-1 "
                  style={{
                    boxShadow: "0 0 15px rgba(0, 255, 217, 0.3)",
                  }}
                >
                  Login
                </button>
              </Link>
              */}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Topbar
