"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"


import { Button } from "@/components/ui/button"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { toast } from "@/components/ui/use-toast"
import { Input } from "@/components/ui/input"
import { PasswordFormSchema } from "@/lib/validations"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { useUserContext } from "@/contextApi/AuthContext"
import Loader from "@/components/shared/Loader"
import ReactGA from "react-ga4"




function UpdatePassword() {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Update Pass Page" });
  const captureUpdateClick = (bname:string)=>{
    ReactGA.event({
        category: bname,
        action: 'Update Page',
      });
}
  const navigate = useNavigate();
  const { isLoading: isUserLoading, user: userFromStore, checkAuthUser } = useUserContext();
  const [loading, setloading] = useState(false);


  const form = useForm<z.infer<typeof PasswordFormSchema>>({
    resolver: zodResolver(PasswordFormSchema),
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: ""
    },
  })

  async function onSubmit(FormData: z.infer<typeof PasswordFormSchema>) {

    try {
      console.log(FormData);
      setloading(true);
      console.log(`/api/v1/users/update/${userFromStore.userid}`)
      const res = await fetch(`https://areveibackend.onrender.com/api/v1/users/update-password/${userFromStore.userid}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorisation' : `Bearer ${userFromStore.access}`
        },
        body: JSON.stringify(FormData),
        credentials : "include"
      });

      const data = await res.json();


      if (data.success === false) {
        throw new Error("up");
      }

      const isUserUpdated = await checkAuthUser(localStorage.getItem('accessTokenArevei') as string);

      if (isUserUpdated) {
        navigate("/");
        setloading(false);
        toast({
          title: "Password Updated",
          description: "Your Password is Updated Successfully"
        })
        captureUpdateClick("Update Success")
      } else {
        navigate('/sign-in')
        throw new Error("Error , Please Login with new Password");
      }



    } catch (error: any) {
      setloading(false);
      if (error.message) {
        toast({
          variant: "destructive",
          title: "Update Failed",
          description: error.message,
        })
      }
      captureUpdateClick("Update Failed")

    }

  }


  return (
    <div className="flex flex-1">
      <div className="home-container">
        <div className="home-posts">
        {
                    userFromStore.email != ""? (<div className="w-[90vw] md:w-[40vw] flex items-center flex-col mt-14">
                    <Form {...form}>
        
        
                      <form onSubmit={form.handleSubmit(onSubmit)} className="bg-[#faf9fa2c] rounded-lg p-7 flex flex-col gap-5 w-full">
                        <FormField
                          control={form.control}
                          name="oldPassword"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="shad-form_label">Old Password</FormLabel>
                              <FormControl>
                                <Input onClick={()=>{
                                  captureUpdateClick("Old Pass")
                                }} type="text" className="bg-transparent" {...field} />
                              </FormControl>
                              <FormMessage className="text-red" />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="newPassword"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="shad-form_label">New Password</FormLabel>
                              <FormControl>
                                <Input onClick={()=>{
                                  captureUpdateClick("New Pass")
                                }} type="text" className="bg-transparent" {...field} />
                              </FormControl>
                              <FormMessage className="text-red" />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="confirmNewPassword"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="shad-form_label">Confirm New Password</FormLabel>
                              <FormControl>
                                <Input onClick={()=>{
                                  captureUpdateClick("Confirm Pass")
                                }} type="text" className="bg-transparent" {...field} />
                              </FormControl>
                              <FormMessage className="text-red" />
                            </FormItem>
                          )}
                        />
        
        
                        <Button type="submit" className="shad-button_primary bg-white text-black">
                          {loading || isUserLoading ? <Loader /> : "Update Password"}
                        </Button>
                      </form>
        
                    </Form>
                  </div>) : (
                        <div className="  w-[60vw] h-[80vh] flex flex-col items-center justify-center mt-8">
                            <h1 className="text-center text-2xl md:text-5xl">Signup For Great Discounts</h1>
                        <img className="w-full h-[40%] md:w-[80%] md:h-[80%] bg-white rounded-lg" src="https://illustrations.popsy.co/white/sales.svg" alt="" />
                        <div className="mt-4 flex gap-2">
                            <Link onClick={()=>{
                                  captureUpdateClick("Sign Up")
                                }} to="/sign-up"><Button className="bg-white text-black w-[50px] lg:w-auto hover:bg-off-white">SignUp</Button></Link>
                            <Link onClick={()=>{
                                  captureUpdateClick("Sign In")
                                }} to="/sign-in"><Button className="bg-white text-black w-[50px] lg:w-auto hover:bg-off-white">SignIn</Button></Link>
                        </div>
                        
                </div>
                    ) 
                }
        </div>
      </div>
    </div>

  )
}

export default UpdatePassword;
