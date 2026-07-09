
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Link, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import UpdateForm from "@/_authentication/authForms/UpdateForm"
import { useUserContext } from "@/contextApi/AuthContext"
import Loader from "@/components/shared/Loader"
import { useState } from "react"
import { toast } from "@/components/ui/use-toast"
import AdminView from "./AdminView"
const UserView = ({captureAccountClick}:{captureAccountClick:(bname:string)=>void}) => {


    const navigate = useNavigate();
  const { user: userStore } = useUserContext()
  const [loading, setLoading] = useState(false)

  const signOutFunction = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://areveibackend.onrender.com/api/v1/users/logout', {
        method: 'POST',
        headers : {
            'Authorisation' : `Bearer ${userStore.access}`
        },
        credentials : "include"
      });
      const responseData = await response.json();

      if (responseData.success === false) {
        throw new Error(responseData.message);
      }

      
      localStorage.removeItem('accessTokenArevei');
      localStorage.removeItem('refreshTokenArevei');

      toast({
        variant: "default",
        title: "Sign Out Successful"
      })

      navigate("/");
      return;

    }
    catch (error: any) {
      setLoading(false);
      if (error.message) {
        toast({
          variant: "destructive",
          title: "Sign Out Failed",
          description: error.message,
        })
      }
    }
  }

    return (
        <div>
            <section className="relative overflow-hidden py-10 mb-3">
                <div className="relative">
                    <div className="mx-auto max-w-xl lg:max-w-7xl">
                        <div className="my-18 -mx-4 flex flex-wrap px-4">
                            <div className="w-full px-4 lg:w-1/2">
                                <Card className="w-[80vw] sm:w-[50vw] rounded-lg flex flex-col flex-wrap ">
                                    <CardHeader className="text-justify flex flex-row justify-center md:justify-start text-sm sm:text-lg">
                                        <div className="flex sm:flex-row justify-center items-center gap-2 flex-col">
                                            <img className="w-[70px] h-[70px] rounded-full" src={`${userStore.GooglePic==="NA"?'/assets/images/finalLogo.png':userStore.GooglePic}`} />
                                            <div className="flex flex-col justify-center items-center">
                                                <CardTitle>{userStore.name}</CardTitle>
                                                <CardDescription>{userStore.email}</CardDescription>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="flex gap-1 flex-col justify-center items-center w-full">
                                        <div className="flex flex-col md:flex-row gap-7">
                                            <div className="flex flex-col  gap-7">
                                                <div>
                                                    Name
                                                    <Input disabled className="bg-transparent text-white" value={userStore.name} />
                                                </div>
                                                <div>
                                                    Country
                                                    <Input disabled className="bg-transparent text-white" value={userStore.country} />
                                                </div>

                                            </div>
                                            <div className="flex flex-col gap-7">
                                            <div>
                                                    Email
                                                    <Input disabled className="bg-transparent text-white" value={userStore.email} />
                                                </div>
                                                
                                                <div>
                                                    Phone
                                                    <Input disabled className="bg-transparent text-white" value={userStore.phone} />
                                                </div>

                                            </div>
                                        </div>
                                        <div className="flex gap-1 self-end mt-5">
                                        <Dialog>
                                        <DialogTrigger onClick={()=>{
                                            captureAccountClick("Update Form")
                                        }} className="rounded-md border border-white px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:bg-white hover:text-black">
                                            Update
                                        </DialogTrigger>
                                        <DialogContent>
                                            <DialogHeader>
                                                <DialogTitle>Update Profile</DialogTitle>
                                                <DialogDescription>

                                                </DialogDescription>
                                            </DialogHeader>
                                            <UpdateForm/>
                                            <Link onClick={()=>{
                                            captureAccountClick("Password")
                                        }} to={`/user/updatepassword/${userStore.name}`}><Button className=" bg-white text-black hover:bg-off-white">Change Password</Button></Link>
                                            <Link onClick={()=>{
                                            captureAccountClick("Delete Page")
                                        }} to={`/user/deleteaccount/${userStore.name}`}><Button className=" bg-red text-white hover:bg-red/75">Delete Account</Button></Link>
                                        </DialogContent>
                                    </Dialog>
                                    <Button className="bg-red text-white hover:bg-red/75" onClick={()=>{
                                        signOutFunction();
                                        captureAccountClick("SignOut");

                                    }}>{loading ? <Loader /> : "Sign Out"}</Button>
                                        </div>
                                    </CardContent>
                                </Card>
                                <div className="mt-14 text-center">
                                    

                                </div>
                            </div>

                        </div>

                    </div>
                    <AdminView/>
                </div>
            </section>
        </div>
    )
}

export default UserView