import UserView from "@/components/ComponentsForPages/ForAccountPage/UserView";

import { Button } from "@/components/ui/button";

import { useUserContext } from "@/contextApi/AuthContext"
import { Link } from "react-router-dom";

import ReactGA from "react-ga4"

const Account = () => {
    ReactGA.send({ hitType: "pageview", page: "/user/account/details", title: "Accounts Page" });
    const captureAccountClick = (bname:string)=>{
        ReactGA.event({
            category: bname,
            action: 'Account Click',
          });
    }
    const { user: userFromStore } = useUserContext();

    return (
        <div className="flex flex-1">
            <div className="home-container">
                <div className="home-posts">
                    {
                        userFromStore.email != "" ? <UserView captureAccountClick={captureAccountClick}/> : (
                          
                                <div className="w-[60vw] h-[80vh] flex flex-col items-center justify-center mt-8">
                                    <h1 className="text-center text-2xl md:text-5xl">Signup For Great Discounts</h1>
                                    <img className="w-full h-[40%] md:w-[80%] md:h-[60%] bg-white rounded-lg" src="https://illustrations.popsy.co/white/sales.svg" alt="" />
                                    <div className="mt-2 flex gap-2">
                                        <Link onClick={()=>{
                                            captureAccountClick("SignUp")
                                        }} to="/sign-up"><Button className="bg-white text-black w-[50px] lg:w-auto hover:bg-off-white">SignUp</Button></Link>
                                        <Link onClick={()=>{
                                            captureAccountClick("SignIn")
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

export default Account