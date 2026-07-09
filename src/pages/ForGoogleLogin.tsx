import { toast } from "@/components/ui/use-toast";
import { useUserContext } from "@/contextApi/AuthContext";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";


const ForGoogleLogin = () => {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const accessToken = queryParams.get('accessToken') as string;
    const refreshToken = queryParams.get('refreshToken') as string;
    const navigate = useNavigate();
    const { checkAuthUser } = useUserContext();

    const setUpGoogleLogin = async () => {

        try {
            localStorage.setItem('accessTokenArevei', accessToken);
            localStorage.setItem('refreshTokenArevei', refreshToken);
            const isLoggedIn = await checkAuthUser(accessToken);

            if (isLoggedIn) {
                navigate("/");
                toast({
                    title: `Welcome Back to Arevei`,

                })
            } else {
                navigate('/sign-in')
                throw new Error("Something Went wrong , Please try again");
            }


        }
        catch (error: any) {
            if (error.message) {
                toast({
                    variant: "destructive",
                    title: "SignUp Failed",
                    description: error.message,
                })
            }
        }


    }


    useEffect(() => {

        setUpGoogleLogin();

    }, [])


    return (

        <div className="flex flex-1">
            <div className="home-container -ml-1 xs:-ml-0">
                <div className="home-posts relative">
                    <div className="flex flex-col justify-center items-center gap-2 m-10">
                        <h1 className='text-white'>A moment please , we are setting up everything</h1>
                        <div className="flex flex-row gap-2 m-10">
                        <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
                        <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.3s]"></div>
                        <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default ForGoogleLogin