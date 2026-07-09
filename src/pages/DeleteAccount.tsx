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
import { DeleteFormSchema} from "@/lib/validations"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { useUserContext } from "@/contextApi/AuthContext"
import Loader from "@/components/shared/Loader"

import ReactGA from "react-ga4"



function DeleteAccount() {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Delete Page" });

  const captureDeleteClick = (bname:string)=>{
    ReactGA.event({
        category: bname,
        action: 'Delete Page',
      });
}

  const navigate = useNavigate();
  const { isLoading: isUserLoading , user: userFromStore  } = useUserContext();
  const [loading, setloading] = useState(false);


  const form = useForm<z.infer<typeof DeleteFormSchema>>({
    resolver: zodResolver(DeleteFormSchema),
    defaultValues: {
      Password : ""
    },
  })

  async function onSubmit(FormData: z.infer<typeof DeleteFormSchema>) {

    try {
      console.log(FormData);
      setloading(true);
      const res = await fetch(`https://areveibackend.onrender.com/api/v1/users/delete-user/${userFromStore.userid}`, {
        method: 'DELETE',
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


      else if(data.success === true) {
        localStorage.removeItem('accessTokenArevei');
        localStorage.removeItem('refreshTokenArevei');
        navigate("/");
        setloading(false);
        toast({
          title: "Account Delete",
          description : "Your Account is Deleted Successfully"
        })
        captureDeleteClick("Delete Success")
      } 
      else {
        navigate('/sign-in')
        throw new Error("Error , Please Login");
      }

    

    } catch (error:any) {
      setloading(false);
      if(error.message){
        toast({
          variant : "destructive",
          title: "Deletion Failed",
          description: error.message,
        })
      }
      captureDeleteClick("Delete Fail")
      
    }

  }
  

  return (

    <div className="flex flex-1">
            <div className="home-container">
              <div className="home-posts">
                {
                    userFromStore.email != ""? 
                    <div className="w-[90vw] md:w-[40vw] mt-14 flex items-center  flex-col">
                    <Form {...form}>
                      
                       
                        <form onSubmit={form.handleSubmit(onSubmit)} className="bg-[#faf9fa2c] rounded-lg p-7 flex flex-col gap-5 w-full">
                        <FormField
                            control={form.control}
                            name="Password"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="shad-form_label">Password</FormLabel>
                                <FormControl>
                                  <Input onClick={()=>{
                                    captureDeleteClick("Password")
                                  }} type="text" className="bg-transparent" {...field} />
                                </FormControl>
                                <FormMessage className="text-red" />
                              </FormItem>
                            )}
                          />
                        
                
                
                          <Button type="submit" className=" bg-red text-white hover:bg-red/70">
                            {loading || isUserLoading ? <Loader /> : "Delete Account"}
                          </Button>
                        </form>
                     
                    </Form>
                    </div> : (
                        <div className="  w-[60vw] h-[80vh] flex flex-col items-center justify-center mt-8">
                            <h1 className="text-center text-2xl md:text-5xl">Signup For Great Discounts</h1>
                        <img className="w-full h-[40%] md:w-[80%] md:h-[80%] bg-white rounded-lg" src="https://illustrations.popsy.co/white/sales.svg" alt="" />
                        <div className="mt-4 flex gap-2">
                            <Link onClick={()=>{
                                    captureDeleteClick("Sign Up")
                                  }} to="/sign-up"><Button className="bg-white text-black w-[50px] lg:w-auto hover:bg-off-white">SignUp</Button></Link>
                            <Link onClick={()=>{
                                    captureDeleteClick("Sign In")
                                  }} to="/sign-in"><Button className="bg-white text-black w-[50px] lg:w-auto hover:bg-off-white">SignUp</Button></Link>
                        </div>
                        
                </div>)}
              </div>
            </div>
        </div>


    
  )
}

export default DeleteAccount;