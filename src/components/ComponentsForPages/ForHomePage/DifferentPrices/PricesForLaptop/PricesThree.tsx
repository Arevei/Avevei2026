
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { CheckCircle, XCircleIcon } from "lucide-react"
import Check from "../CheckoutPage/Check"
const PricesThree = () => {
    return (
        <section className="relative overflow-hidden py-10 hidden lg:block ">
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:-mr-2 lg:w-1/3">
              <div className="mx-auto max-w-sm rounded-md bg-inherit pb-20 pl-5 pr-8 pt-6 lg:pb-8">
                <span className="mb-2 block text-lg font-semibold text-white">MarketVibe</span>
                <div className="flex flex-col items-end gap-2">
                  <span>Starting at</span>
                  <span className="text-3xl font-extrabold leading-none">₹10,999<span className="text-[10px]">+18% GST</span></span>
                </div>
                <div className="mt-7 border-t border-gray-100 pt-5">
                  <ul className="mb-10">
                    <li className="mb-6 flex items-center">
                      
                      <CheckCircle className="mr-2 text-green-500" size={20} />
                      <span className="ml-2 text-sm text-white">Marketing Strategy</span>
                    </li>
                    <li className="mb-6 flex items-center">
                    <CheckCircle className="mr-2 text-green-500" size={20} />
                      <span className="ml-2 text-sm text-white">Social Marketing</span>
                    </li>
                    <li className="mb-6 flex items-center">
                    <CheckCircle className="mr-2 text-green-500" size={20} />
                      <span className="ml-2 text-sm text-white">Analysis</span>
                    </li>
                    <li className="mb-6 flex items-center">
                    <CheckCircle className="mr-2 text-green-500" size={20} />
                      <span className="ml-2 text-sm text-white">Detailed Report</span>
                    </li>
                    <li className="mb-6 flex items-center">
                    <XCircleIcon className="mr-2 text-red" size={20} />
                      <span className="ml-2 text-sm text-white">Prediction Analysis</span>
                    </li>
                    <li className="mb-6 flex items-center">
                    <XCircleIcon className="mr-2 text-red" size={20} />
                      <span className="ml-2 text-sm text-white">Future Plans</span>
                    </li>
                    <li className="mb-6 flex items-center">
                    <XCircleIcon className="mr-2 text-red" size={20} />
                      <span className="ml-2 text-sm text-white">Free Billboard</span>
                    </li>
                    <li className="mb-6 flex items-center">
                    <XCircleIcon className="mr-2 text-red" size={20} />
                      <span className="ml-2 text-sm text-white">1 year Support</span>
                    </li>
                    <li className="mb-6 flex items-center">
                    <XCircleIcon className="mr-2 text-red" size={20} />

                      <span className="ml-2 text-sm text-white">Offline Marketing</span>
                    </li>
                    <li className="mb-6 flex items-center">
                    <XCircleIcon className="mr-2 text-red" size={20} />

                      <span className="ml-2 text-sm text-white">Influencer Marketing</span>
                    </li>
                  </ul>
          
                </div>
                <Dialog>
                  <DialogTrigger className="rounded-md border border-white px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:bg-white hover:text-black">
                    Buy
                  </DialogTrigger>
                  <DialogContent className="overflow-hidden h-[90vh] sm:h-auto sm:w-auto w-[95vw]">
                    
                    
                    <Check name={"MarketVibe"} price={10999} gst={1979.82}/>

                  </DialogContent>
                </Dialog>
              </div>
            </div>


            <div className="-mt-4 w-full lg:-mt-0 lg:w-1/3">
              <div className="pt-22 relative mx-auto max-w-sm rounded-lg bg-[#F8F8FF] px-10 pb-16 ">
                <div className="absolute left-1/2 top-0 inline-flex -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full p-2">
                  <div className="flex-shrink-0 rounded-full bg-gradient-to-r from-green-400 to-blue-500 px-5 py-4 text-sm font-semibold uppercase text-white">
                    Most Popular
                  </div>
                </div>
                <span className="mb-2 block pt-10 text-lg font-semibold text-black">MarketFusion</span>
                <div className="flex flex-col items-end text-green-500 gap-2">
                  <span>Starting at</span>
                  <span className="text-[27px] font-extrabold leading-none">₹24,999<span className="text-[8px]">+18% GST</span></span>
                </div>
                <div className="mt-7 border-t border-orange-500 pt-5">
                <ul className="mb-10">
                    <li className="mb-6 flex items-center">
                      
                      <CheckCircle className="mr-2 text-green-700" size={20} />
                      <span className="ml-2 text-sm text-black">Marketing Strategy</span>
                    </li>
                    <li className="mb-6 flex items-center">
                    <CheckCircle className="mr-2 text-green-700" size={20} />
                      <span className="ml-2 text-sm text-black">Social Marketing</span>
                    </li>
                    <li className="mb-6 flex items-center">
                    <CheckCircle className="mr-2 text-green-700" size={20} />
                      <span className="ml-2 text-sm text-black">Analysis</span>
                    </li>
                    <li className="mb-6 flex items-center">
                    <CheckCircle className="mr-2 text-green-700" size={20} />
                      <span className="ml-2 text-sm text-black">Detailed Report</span>
                    </li>
                    <li className="mb-6 flex items-center">
                    <CheckCircle className="mr-2 text-green-700" size={20} />
                      <span className="ml-2 text-sm text-black">Prediction Analysis</span>
                    </li>
                    <li className="mb-6 flex items-center">
                    <CheckCircle className="mr-2 text-green-700" size={20} />
                      <span className="ml-2 text-sm text-black">Future Plans</span>
                    </li>
                    <li className="mb-6 flex items-center">
                    <CheckCircle className="mr-2 text-green-700" size={20} />
                      <span className="ml-2 text-sm text-black">Free Billboard</span>
                    </li>
                    <li className="mb-6 flex items-center">
                    <XCircleIcon className="mr-2 text-red" size={20} />
                      <span className="ml-2 text-sm text-black">1 year Support</span>
                    </li>
                    <li className="mb-6 flex items-center">
                    <XCircleIcon className="mr-2 text-red" size={20} />

                      <span className="ml-2 text-sm text-black">Offline Marketing</span>
                    </li>
                    <li className="mb-6 flex items-center">
                    <XCircleIcon className="mr-2 text-red" size={20} />

                      <span className="ml-2 text-sm text-black">Influencer Marketing</span>
                    </li>
                  </ul>
          
                </div>
                <Dialog>
                  <DialogTrigger className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:bg-black hover:text-white">
                    Buy
                  </DialogTrigger>
                  <DialogContent className="overflow-hidden h-[90vh] sm:h-auto sm:w-auto w-[95vw]">
                    
                    <Check  name={"MarketFusion"} price={24999} gst={4499.82}/>

                  </DialogContent>
                </Dialog>
              </div>
            </div>
            <div className="-mt-4 w-full lg:-ml-2 lg:-mt-0 lg:w-1/3">
              <div className="rounded-b-5xl lg:rounded-r-5xl mx-auto max-w-sm bg-inherit pb-8 pl-8 pr-5 pt-12 lg:rounded-b-none lg:pt-6">
                <span className="mb-2 block text-lg font-semibold text-white">MarketPlus</span>
                <div className="flex flex-col items-end gap-2">
                  <span>Starting at</span>
                  <span className="text-3xl font-extrabold leading-none">₹49,999<span className="text-[10px]">+18% GST</span></span>
                </div>
                <div className="mt-7 border-t border-gray-100 pt-5">
                <ul className="mb-10">
                    <li className="mb-6 flex items-center">
                      
                      <CheckCircle className="mr-2 text-green-500" size={20} />
                      <span className="ml-2 text-sm text-white">Marketing Strategy</span>
                    </li>
                    <li className="mb-6 flex items-center">
                    <CheckCircle className="mr-2 text-green-500" size={20} />
                      <span className="ml-2 text-sm text-white">Social Marketing</span>
                    </li>
                    <li className="mb-6 flex items-center">
                    <CheckCircle className="mr-2 text-green-500" size={20} />
                      <span className="ml-2 text-sm text-white">Analysis</span>
                    </li>
                    <li className="mb-6 flex items-center">
                    <CheckCircle className="mr-2 text-green-500" size={20} />
                      <span className="ml-2 text-sm text-white">Detailed Report</span>
                    </li>
                    <li className="mb-6 flex items-center">
                    <CheckCircle className="mr-2 text-green-500" size={20} />
                      <span className="ml-2 text-sm text-white">Prediction Analysis</span>
                    </li>
                    <li className="mb-6 flex items-center">
                    <CheckCircle className="mr-2 text-green-500" size={20} />
                      <span className="ml-2 text-sm text-white">Future Plans</span>
                    </li>
                    <li className="mb-6 flex items-center">
                    <CheckCircle className="mr-2 text-green-500" size={20} />
                      <span className="ml-2 text-sm text-white">Free Billboard</span>
                    </li>
                    <li className="mb-6 flex items-center">
                    <CheckCircle className="mr-2 text-green-500" size={20} />
                      <span className="ml-2 text-sm text-white">1 year Support</span>
                    </li>
                    <li className="mb-6 flex items-center">
                    <CheckCircle className="mr-2 text-green-500" size={20} />

                      <span className="ml-2 text-sm text-white">Offline Marketing</span>
                    </li>
                    <li className="mb-6 flex items-center">
                    <CheckCircle className="mr-2 text-green-500" size={20} />

                      <span className="ml-2 text-sm text-white">Influencer Marketing</span>
                    </li>
                  </ul>
          
                </div>
                <Dialog>
                  <DialogTrigger className="rounded-md border border-white px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:bg-white hover:text-black">
                    Buy
                  </DialogTrigger>
                  <DialogContent className="overflow-hidden h-[90vh] sm:h-auto sm:w-auto w-[95vw]">
                    
                    
                    <Check name={"MarketPlus"} price={49999} gst={8999.82}/>

                  </DialogContent>
                </Dialog>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
    )
}

export default PricesThree;