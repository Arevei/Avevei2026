

import { toast } from '@/components/ui/use-toast';
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const PaymentDetails = () => {
    const [paymentDetailsObject, setpaymentDetailsObject] = useState<any>({})
    const [loader, setLoader] = useState(true)
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const payId = queryParams.get('paymentId')?.slice(11, -10);
    const packName = queryParams.get('name');

    const callCheckStatus = async (token:string) => {
        try{
        const response = await fetch(`https://areveibackend.onrender.com/api/v1/payments/pay/checkStatus/${payId}/${packName}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorisation': `Bearer ${token}`
            },
            credentials: "include"
        })

        const responseWithData = await response.json();
       
        if (responseWithData.data.allDetails[0].success===true && responseWithData.data.allDetails[0].code === "PAYMENT_SUCCESS") {
            setpaymentDetailsObject({ ...paymentDetailsObject, TransactionId: responseWithData.data.transactionId, amount: (responseWithData.data.amount / 100) })
        }
        else {
            throw new Error("Please try again later")
        }
    }
    catch (error: any) {
        if (error.message) {
          toast({
            variant: "destructive",
            title: "Payment Error",
            description: error.message
          })
        }
        navigate("/")
        
      }finally{
        setLoader(false);
      }

        
    }





    useEffect(() => {
        const token = localStorage.getItem('accessTokenArevei');
        if(token!==null){
            callCheckStatus(token);
        }
        else{
            toast({
                variant: "destructive",
                title: "Payment Error",
                description: "Please try again later"
              })
            navigate("/")
        }

    }, [])





    return (
        <div className="flex flex-1">
            <div className="home-container -ml-1 xs:-ml-0">
                <div className="home-posts relative">

                    <h1 className='text-center text-xl'>Payment Receipt</h1>

                    {
                        loader===true ?
                            <div className="flex flex-col justify-center items-center gap-2 m-10">
                                <h1 className='text-white'>A moment please , we are setting up everything</h1>
                                <div className="flex flex-row gap-2 m-10">
                                    <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
                                    <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.3s]"></div>
                                    <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
                                </div>
                            </div> :
                            <div className="mx-auto my-4 w-[80%] sm:w-[60%] md:w-[40%] md:my-6">
                                <div className="overflow-hidden  rounded-xl shadow">
                                    <div className="grid grid-cols-1">

                                        <div className="bg-gray-100 px-5 py-6 md:px-8">
                                            <div className="flow-root">
                                                <ul className="-my-7 divide-y divide-gray-200">

                                                    <li
                                                        className="flex items-stretch justify-between space-x-5 py-7"
                                                    >
                                                        <div className="flex flex-1 items-stretch">
                                                            <div className="flex flex-col justify-between">
                                                                <div className="flex-1">

                                                                    <p className="mt-1.5 text-lg font-medium text-green-800">
                                                                        Arevei
                                                                    </p>
                                                                    <p className="text-sm font-bold text-black">Transaction ID</p>
                                                                    <p className="text-sm font-bold text-black">{paymentDetailsObject.TransactionId}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                </ul>
                                            </div>
                                            <hr className="mt-6 border-gray-200" />
                                            <ul className="mt-6 space-y-3">
                                            <li className="flex items-center justify-between text-black">
                                                    <p className="text-sm font-medium ">Pack Name</p>
                                                    <p className="text-sm font-medium ">{packName}</p>
                                                </li>
                                                <li className="flex items-center justify-between text-black">
                                                    <p className="text-sm font-medium ">Pack Price</p>
                                                    <p className="text-sm font-medium ">₹ {paymentDetailsObject.amount - (0.18 * paymentDetailsObject.amount)}</p>
                                                </li>
                                                <li className="flex items-center justify-between text-black">
                                                    <p className="text-sm font-medium ">18% GST</p>
                                                    <p className="text-sm font-medium ">₹ {0.18 * paymentDetailsObject.amount}</p>
                                                </li>
                                                <li className="flex items-center justify-between text-black">
                                                    <p className="text-sm font-medium">Sub total</p>
                                                    <p className="text-sm font-bold">₹ {paymentDetailsObject.amount}</p>
                                                </li>
                                            </ul>
                                            <div className="mt-10 flex justify-end  pt-6">
                                                <button
                                                    type="button"
                                                    className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                                >
                                                    Download
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

export default PaymentDetails