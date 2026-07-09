"use client"
import "./googlebutton.css"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { countries } from "@/lib/constantValues/codes"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { cn } from "@/lib/utils"
import { toast } from "@/components/ui/use-toast"
import { Input } from "@/components/ui/input"
import { PhoneNumberFormSchema } from "@/lib/validations"
import { useLocation, useNavigate } from "react-router-dom"
import Loader from "../../components/shared/Loader"
import { useUserContext } from "@/contextApi/AuthContext"
import { useEffect, useState } from "react"

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"




function PhoneNumberForm() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const userID = queryParams.get('userid');
    const navigate = useNavigate();
    const { isLoading: isUserLoading, checkAuthUser } = useUserContext();
    const [loading, setloading] = useState(false);
    const [countryCode, setCountryCode] = useState("")

    const form = useForm<z.infer<typeof PhoneNumberFormSchema>>({
        resolver: zodResolver(PhoneNumberFormSchema),
        defaultValues: {
            country: "",
            phone: ""
        },
    })

    async function onSubmit(FormData: z.infer<typeof PhoneNumberFormSchema>) {

        try {
            setloading(true);

            const res = await fetch(`https://areveibackend.onrender.com/api/v1/googleAuth/setContactDetails?userid=${userID}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(FormData),
                credentials: "include"
            });
            const data = await res.json();

            if (data.success === false) {
                throw new Error(data.message);
            }
            localStorage.setItem("accessTokenArevei",data.data.accessToken);
            localStorage.setItem("refreshTokenArevei",data.data.refreshToken);

            const isLoggedIn = await checkAuthUser(data.data.accessToken);

            if (isLoggedIn) {
                form.reset();

                navigate("/");
                setloading(false);
            }
            else {
                throw new Error("Some error occured, Please try again");
            }

        } catch (error: any) {
            setloading(false);
            if (error.message) {
                toast({
                    variant: "destructive",
                    title: "SignIn Error",
                    description: error.message
                })
            }
        }

    }

    useEffect(() => {
        if (userID===null) {
            navigate("/sign-in")
        }
    }, [])




    return (


        <div className="flex flex-1 justify-center items-center">
            <div className="flex flex-col flex-1 items-center gap-5 overflow-scroll px-5 custom-scrollbar pb-0">

                <div className="sm:w-420 flex-center flex-col">
                    <Form {...form}>

                        <img className="w-[150px] h-[30px]" src="/assets/images/NewWordmarkWhite.svg"></img>
                        <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12">
                            Almost Done
                        </h2>
                        <h2 className="h3-bold md:h2-bold pt-5 text-center">
                            Please Enter your contact details
                        </h2>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full mt-4">
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
                                            <PopoverContent className="w-[200px] p-0 overflow-auto">
                                                <Command className="overflow-y-auto">
                                                    <CommandInput
                                                        placeholder="Search Country"
                                                        className="h-9 bg-black text-white"
                                                    />
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
                                                                            country.value === field.value
                                                                                ? "opacity-100"
                                                                                : "opacity-0"
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
                                                <Input type="number" className="bg-transparent" {...field} />
                                            </div>
                                        </FormControl>
                                        <FormMessage className="text-red" />
                                    </FormItem>
                                )}
                            />


                            <Button type="submit" className="shad-button_primary text-xl">
                                {loading || isUserLoading ? <Loader /> : "Continue"}
                            </Button>
                        </form>

                        





                    </Form>
                </div>
            </div>
        </div>



    )
}

export default PhoneNumberForm;