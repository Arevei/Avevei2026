"use client"
import "./googlebutton.css"
import { zodResolver } from "@hookform/resolvers/zod"
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import { useForm } from "react-hook-form"
import type { z } from "zod"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { toast } from "@/components/ui/use-toast"
import { Input } from "@/components/ui/input"
import { SignUpFormSchema } from "@/lib/validations"
import { countries } from "@/lib/constantValues/codes"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import Loader from "../../components/shared/Loader"
import { useUserContext } from "@/contextApi/AuthContext"
import ReactGA from "react-ga4"

function SignUpForm() {
  ReactGA.send({ hitType: "pageview", page: "/sign-up", title: "Sign Up Page" })

  const captureSignUp = (bname: string) => {
    ReactGA.event({
      category: bname,
      action: "Sign Up Form",
    })
  }

  const navigate = useNavigate()
  const { isLoading: isUserLoading, checkAuthUser } = useUserContext()
  const [loading, setloading] = useState(false)
  const [countryCode, setCountryCode] = useState("")

  const form = useForm<z.infer<typeof SignUpFormSchema>>({
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: {
      name: "",
      email: "",
      country: "",
      phone: "",
      password: "",
    },
  })

  async function onSubmit(FormData: z.infer<typeof SignUpFormSchema>) {
    try {
      setloading(true)

      const res = await fetch("https://areveibackend.onrender.com/api/v1/users/sign-up", {
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

      const session = await fetch("https://areveibackend.onrender.com/api/v1/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: FormData.email,
          password: FormData.password,
        }),
        credentials: "include",
      })

      const sessionData = await session.json()

      if (sessionData.success === false) {
        navigate("/sign-in")
        throw new Error("Something Went wrong , Please Login")
      }

      localStorage.setItem("accessTokenArevei", sessionData.data.accessToken)
      localStorage.setItem("refreshTokenArevei", sessionData.data.refreshToken)

      const isLoggedIn = await checkAuthUser(sessionData.data.accessToken)

      if (isLoggedIn) {
        form.reset()
        navigate("/")
        setloading(false)
        toast({
          title: `Welcome ${FormData.name}`,
          description: "Thank You for Signing Up , Please check your Email Inbox",
        })
        captureSignUp("Created")
      } else {
        navigate("/sign-in")
        throw new Error("Something Went wrong , Please Login")
      }
    } catch (error: any) {
      setloading(false)
      if (error.message) {
        toast({
          variant: "destructive",
          title: "SignUp Failed",
          description: error.message,
        })
      }
      captureSignUp("Failed")
    }
  }
  const callGoogleAuthentication = () => {
    window.open("https://areveibackend.onrender.com/api/v1/googleAuth/registerGoogleUser", "_self")
  }

  return (
    <div className="sm:w-420 flex items-center  flex-col">
      <Link
        onClick={() => {
          captureSignUp("Logo")
        }}
        to="/"
      >
        <img className="w-[150px] h-[30px]" src="/assets/images/NewWordmarkWhite.svg"></img>
      </Link>
      <h2 className="h3-bold md:h2-bold sm:pt-10">Create an account</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-2 w-full">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="shad-form_label">Name</FormLabel>
                <FormControl>
                  <Input
                    onClick={() => {
                      captureSignUp("Name")
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
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="shad-form_label">Email</FormLabel>
                <FormControl>
                  <Input
                    onClick={() => {
                      captureSignUp("Email")
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
            name="country"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="shad-form_label">Country</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        onClick={() => {
                          captureSignUp("Country")
                        }}
                        variant="outline"
                        role="combobox"
                        className={cn(
                          "w-full justify-between focus-visible:ring-[#00ffd9] focus-visible:ring-2",
                          !field.value && "text-muted-foreground",
                        )}
                      >
                        {field.value
                          ? countries.find((country) => country.value === field.value)?.label
                          : "Select Country"}
                        <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0 overflow-auto">
                    <Command className="overflow-y-auto">
                      <CommandInput placeholder="Search Country" className="h-9 bg-black text-white" />
                      <CommandList className="custom-scrollbar">
                        <CommandEmpty className="bg-black">No Country found.</CommandEmpty>
                        <CommandGroup className="bg-black overflow-y-auto">
                          {countries.map((country) => (
                            <CommandItem
                              value={country.label}
                              key={country.value}
                              onSelect={() => {
                                form.setValue("country", country.value)
                                setCountryCode(country.value)
                              }}
                            >
                              {country.label}
                              <CheckIcon
                                className={cn(
                                  "ml-auto h-4 w-4",
                                  country.value === field.value ? "opacity-100" : "opacity-0",
                                )}
                              />
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="shad-form_label">Phone No.</FormLabel>
                <FormControl>
                  <div className="flex gap-3 items-center">
                    <div className="h-full text-lg">{countryCode}</div>
                    <Input
                      onClick={() => {
                        captureSignUp("Phone")
                      }}
                      type="number"
                      className="bg-transparent focus-visible:ring-[#00ffd9] focus-visible:ring-2"
                      {...field}
                    />
                  </div>
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
                      captureSignUp("Password")
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
            {loading || isUserLoading ? <Loader /> : "SignUp"}
          </Button>
          <p className="text-small-regular text-light-2 text-center mt-2">
            Already have an account?
            <Link
              onClick={() => {
                captureSignUp("Sign In")
              }}
              to="/sign-in"
              className="text-[#00ffd9] text-small-semibold ml-1 hover:text-[#00aeff] transition-colors"
            >
              Log in
            </Link>
          </p>
        </form>
      </Form>
      <button className="signgoogle mt-2" onClick={callGoogleAuthentication}>
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
  )
}

export default SignUpForm
