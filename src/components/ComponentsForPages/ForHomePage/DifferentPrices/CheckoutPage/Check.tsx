import { Button } from "@/components/ui/button";
import { useUserContext } from "@/contextApi/AuthContext";
import { Link } from "react-router-dom";


function CheckoutOne({ name, price, gst }: { name: string, price: number, gst: number }) {
    const { user: userPayment } = useUserContext();
    const makePayment = async (amount:number) => {
        const roundOffAmount = Math.ceil(amount)
        const responseFromPhonePeServer = await fetch(`https://areveibackend.onrender.com/api/v1/payments/pay/purchasePackage?amount=${roundOffAmount}&name=${name}`, {
            method: "GET",
            headers : {
                'Authorisation' : `Bearer ${userPayment.access}`
            },
            credentials : "include"
        })

        const redirectUrlFromPhonePe = await responseFromPhonePeServer.json();

        window.location.href = redirectUrlFromPhonePe.redirectUrl
    }



    return (


        <div className="flex flex-1">
            <div className="home-container -ml-1 xs:-ml-0">
                <div className="home-posts relative">
                    {
                        userPayment.email===""?
                        <div className="h-[70vh]">
                            <img className="h-full bg-white rounded-lg" src="https://illustrations.popsy.co/white/sales.svg" alt="" />
                            <div className="mt-2 flex gap-2 justify-center items-center">
                                        <Link to="/sign-up"><Button className="bg-green-600 text-white w-[50px] lg:w-auto hover:bg-off-white">SignUp</Button></Link>
                                        <Link  to="/sign-in"><Button className="bg-white text-black w-[50px] lg:w-auto hover:bg-off-white">SignIn</Button></Link>
                                    </div>
                        </div>:
                        <div className="mx-auto my-4 max-w-4xl md:my-6">
                        <div className="overflow-hidden  rounded-xl shadow">
                            <div className="grid grid-cols-1">

                                {/* Product List */}
                                <div className="bg-gray-100 px-5 py-6 md:px-8">
                                    <div className="flow-root">
                                        <ul className="-my-7 divide-y divide-gray-200">

                                            <li
                                                className="flex items-stretch justify-between space-x-5 py-7"
                                            >
                                                <div className="flex flex-1 items-stretch">
                                                    <div className="ml-5 flex flex-col justify-between">
                                                        <div className="flex-1">
                                                            <p className="text-sm font-bold text-black">{name}</p>
                                                            <p className="mt-1.5 text-sm font-medium text-gray-500">
                                                                Arevei
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                        </ul>
                                    </div>
                                    <hr className="mt-6 border-gray-200" />
                                    <form action="#" className="mt-6">
                                        <div className="sm:flex sm:space-x-2.5 md:flex-col md:space-x-0 lg:flex-row lg:space-x-2.5">
                                            <div className="flex-grow">
                                                <input
                                                    className="flex w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 text-black"
                                                    type="text"
                                                    placeholder="Enter coupon code"
                                                />
                                            </div>
                                            <div className="mt-4 sm:mt-0 md:mt-4 lg:mt-0">
                                                <button
                                                    type="button"
                                                    className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                                >
                                                    Apply Coupon
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                    <ul className="mt-6 space-y-3">
                                        <li className="flex items-center justify-between text-black">
                                            <p className="text-sm font-medium">Sub total</p>
                                            <p className="text-sm font-bold">₹ {price + gst}</p>
                                        </li>
                                        <li className="flex items-center justify-between text-black">
                                            <p className="text-sm font-medium ">Pack Price</p>
                                            <p className="text-sm font-medium ">₹ {price}</p>
                                        </li>
                                        <li className="flex items-center justify-between text-black">
                                            <p className="text-sm font-medium ">18% GST</p>
                                            <p className="text-sm font-medium ">₹ {gst}</p>
                                        </li>
                                    </ul>
                                    <div className="mt-10 flex justify-end  pt-6">
                                        <button onClick={()=>{makePayment(price+gst);
                                        }}
                                            type="button"
                                            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                        >
                                            Make payment
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    }
                    
                </div>
            </div>
        </div>


    )
}

export default CheckoutOne
