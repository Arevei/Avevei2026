"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { toast } from "@/components/ui/use-toast"
import { Input } from "@/components/ui/input"
import { UpdateFormSchema } from "@/lib/validations"
import { countries } from "@/lib/constantValues/codes"
import {useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import Loader from "../../components/shared/Loader"
import { useUserContext } from "@/contextApi/AuthContext"





function UpdateForm() {
  const navigate = useNavigate();
  const { isLoading: isUserLoading , user: userFromStore , checkAuthUser } = useUserContext();
  const [loading, setloading] = useState(false);


  const form = useForm<z.infer<typeof UpdateFormSchema>>({
    resolver: zodResolver(UpdateFormSchema),
    defaultValues: {
      name: "",
      email: "",
      country: "",
      phone: ""
    },
  })

  async function onSubmit(FormData: z.infer<typeof UpdateFormSchema>) {

    try {
      setloading(true);
      const res = await fetch(`https://areveibackend.onrender.com/api/v1/users/update/${userFromStore.userid}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorisation' : `Bearer ${userFromStore.access}`
        },
        body: JSON.stringify({
          name: FormData.name,
          email: FormData.email,
          country: FormData.country,
          phone: FormData.phone,
        }),
        credentials : "include"
      });
 
      const data = await res.json();

      if (data.success === false) {
        throw new Error("up");
      }

      const isUserUpdated = await checkAuthUser(data.data.accessToken);

      if (isUserUpdated) {
        navigate("/");
        setloading(false);
        toast({
          title: `Dear ${FormData.name}`,
          description : "Your Details are Updated Successfully"
        })
      } else {
        navigate('/sign-in')
        throw new Error("Error , Please Login with new Email");
      }

    

    } catch (error:any) {
      setloading(false);
      if(error.message){
        toast({
          variant : "destructive",
          title: "Update Failed",
          description: error.message,
        })
      }
      
    }

  }
  useEffect(() => {
    form.setValue("name", userFromStore.name)
    form.setValue("country", userFromStore.country)
    form.setValue("email", userFromStore.email)
    form.setValue("phone", userFromStore.phone)

  }, [])
  

  return (
    <div className="sm:w-420 flex items-center  flex-col">
    <Form {...form}>
      
       
        <form onSubmit={form.handleSubmit(onSubmit)} className="bg-[#faf9fa2c] rounded-lg p-7 flex flex-col gap-5 w-full">

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="shad-form_label">Name</FormLabel>
                <FormControl>
                  <Input type="text" className="bg-transparent" {...field} />
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
                  <Input type="text" className="bg-transparent" {...field} />
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
                        variant="outline"
                        role="combobox"
                        className={cn(
                          "w-full justify-between",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value
                          ? countries.find(
                            (country) => country.value === field.value
                          )?.label
                          : "Select Country"}
                        <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0">
                    <Command>
                      <CommandInput
                        placeholder="Search Country"
                        className="h-9"
                      />
                      <CommandEmpty className="bg-black">No Country found.</CommandEmpty>
                      <CommandGroup className="bg-black">
                        {countries.map((country) => (
                          <CommandItem
                            value={country.label}
                            key={country.value}
                            onSelect={() => {
                              form.setValue("country", country.value)
                            }}
                          >
                            {country.label}
                            <CheckIcon
                              className={cn(
                                "ml-auto h-4 w-4",
                                country.value === field.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                          </CommandItem>
                        ))}
                      </CommandGroup>
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
                  <Input type="number" className="bg-transparent" {...field} />
                </FormControl>
                <FormMessage className="text-red" />
              </FormItem>
            )}
          />


          <Button type="submit" className="shad-button_primary bg-white text-black">
            {loading || isUserLoading ? <Loader /> : "Update Account"}
          </Button>
        </form>
     
    </Form>
    </div>
  )
}

export default UpdateForm;