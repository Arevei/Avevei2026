"use client"
import "./googlebutton.css"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import type { z } from "zod"

import { Button } from "@/components/ui/button"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

import { toast } from "@/components/ui/use-toast"
import { Input } from "@/components/ui/input"
import { SignInFormSchema } from "@/lib/validations"
import { Link, useNavigate } from "react-router-dom"
import Loader from "../../components/shared/Loader"
import { useUserContext } from "@/contextApi/AuthContext"
import { useState } from "react"
import ReactGA from "react-ga4"

function SignInForm() {
  ReactGA.send({ hitType: "pageview", page: "/sign-in", title: "Sign In Page" })
  const captureAuthSign = (bname: string) => {
    ReactGA.event({
      category: bname,
      action: "Login Form",
    })
  }

  const navigate = useNavigate()
  const { isLoading: isUserLoading, checkAuthUser } = useUserContext()
  const [loading, setloading] = useState(false)

  const form = useForm<z.infer<typeof SignInFormSchema>>({
    resolver: zodResolver(SignInFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  async function onSubmit(FormData: z.infer<typeof SignInFormSchema>) {
    try {
      setloading(true)

      const res = await fetch("https://areveibackend.onrender.com/api/v1/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(FormData),
        credentials: "include",
      })
      const data = await res.json()

      if (data.success === false) {
        throw new Error(data.message)
      }
      localStorage.setItem("accessTokenArevei", data.data.accessToken)
      localStorage.setItem("refreshTokenArevei", data.data.refreshToken)

      const isLoggedIn = await checkAuthUser(data.data.accessToken)

      if (isLoggedIn) {
        form.reset()

        navigate("/")
        setloading(false)
      } else {
        throw new Error("Some error occured, Please try again")
      }
    } catch (error: any) {
      setloading(false)
      if (error.message) {
        toast({
          variant: "destructive",
          title: "SignIn Error",
          description: error.message,
        })
      }
    }
  }

  const callGoogleAuthentication = () => {
    window.open("https://areveibackend.onrender.com/api/v1/googleAuth/registerGoogleUser", "_self")
  }

  return (
    <Form {...form}>
      <div className="sm:w-420 flex-center flex-col">
        <Link
          onClick={() => {
            captureAuthSign("Logo")
          }}
          to="/"
        >
          <img className="w-[150px] h-[30px]" src="/assets/images/NewWordmarkWhite.svg"></img>
        </Link>
        <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12">Welcome Back!</h2>
        <h2 className="h3-bold md:h2-bold pt-5 ">Please Enter your credentials</h2>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full mt-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="shad-form_label">Email</FormLabel>
                <FormControl>
                  <Input
                    onClick={() => {
                      captureAuthSign("Email")
                    }}
                    type="text"
                    className="bg-transparent focus-visible:ring-[#00ffd9] focus-visible:ring-2"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="shad-form_label">Password</FormLabel>
                <FormControl>
                  <Input
                    onClick={() => {
                      captureAuthSign("Password")
                    }}
                    type="password"
                    className="bg-transparent focus-visible:ring-[#00ffd9] focus-visible:ring-2"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red" />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="bg-gradient-to-r from-[#00ffd9] to-[#00aeff] text-black font-bold hover:scale-105 hover:shadow-[0_0_25px_rgba(0,255,217,0.5)] transition-all duration-300"
          >
            {loading || isUserLoading ? <Loader /> : "Login"}
          </Button>
          <p className="text-small-regular text-light-2 text-center mt-2">
            Don't have an account?
            <Link
              onClick={() => {
                captureAuthSign("Sign Up")
              }}
              to="/sign-up"
              className="text-[#00ffd9] text-small-semibold ml-1 hover:text-[#00aeff] transition-colors"
            >
              Sign Up
            </Link>
          </p>
        </form>

        <button onClick={callGoogleAuthentication} className="signgoogle mt-2">
          <svg viewBox="0 0 256 262" preserveAspectRatio="xMidYMid" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
              fill="#4285F4"
            ></path>
            <path
              d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
              fill="#34A853"
            ></path>
            <path
              d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
              fill="#FBBC05"
            ></path>
            <path
              d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
              fill="#EB4335"
            ></path>
          </svg>
          Continue with Google
        </button>
      </div>
    </Form>
  )
}

export default SignInForm
