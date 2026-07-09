import Check from "../CheckoutPage/Check"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { CheckCircle } from "lucide-react"

export function PriceCardTwo() {
 
  const servicesItem = [
    {
      "Header": "WebVibe",
      "Feature1": "Website Design",
      "Feature2": "Static Website",
      "Feature3": "Responsive",
      "Feature4": "Fast Delivery",
      "Feature5": "Premium Support",
      "Price": 10999

    },
    {
      "Header": "WebFusion",
      "Feature1": "All in WebVibe",
      "Feature2": "Free Domain",
      "Feature3": "Webapps",
      "Feature4": "Hosting",
      "Feature5": "Premium Support",
      "Price": 19999

    },
    {
      "Header": "WebPlus",
      "Feature1": "All in WebFusion",
      "Feature2": "Website Maintenance",
      "Feature3": "Customisable",
      "Feature4": "Any Technology",
      "Feature5": "Premium Support",
      "Price": 59999

    }
  ]





  return (
    <Carousel className="w-full lg:hidden relative">
      <CarouselContent>
        {servicesItem.map((eachService, index) => (
          <CarouselItem key={index}>



            <div className="flex flex-col items-center justify-center md:flex-row lg:col-span-7">
              <div className="w-full p-5">
                <div className="rounded-md border border-black bg-[#F8F8FF]">
                  <div className=" border-b border-b-black">
                    <div className="px-9 py-4">
                      <h3 className=" text-2xl font-bold leading-snug text-black">{eachService.Header}</h3>
                    </div>
                  </div>
                  <div className="px-9 pb-9 pt-8 ">
                    <p className="mb-6 font-medium leading-relaxed text-black">Features included:</p>
                    <ul className="mb-11">
                      <li className="mb-4 flex items-center">
                        <CheckCircle className="mr-2 text-green-500" size={16} />
                        <p className="font-semibold leading-normal text-black">{eachService.Feature1}</p>
                      </li>
                      <li className="mb-4 flex items-center">
                        <CheckCircle className="mr-2 text-green-500" size={16} />
                        <p className="font-semibold leading-normal text-black">{eachService.Feature2}</p>
                      </li>
                      <li className="mb-4 flex items-center">
                        <CheckCircle className="mr-2 text-green-500" size={16} />
                        <p className="font-semibold leading-normal text-black">{eachService.Feature3}</p>
                      </li>
                      <li className="mb-4 flex items-center">
                        <CheckCircle className="mr-2 text-green-500" size={16} />
                        <p className="font-semibold leading-normal text-black">{eachService.Feature4}</p>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 text-green-500" size={16} />
                        <p className="font-semibold leading-normal text-black">{eachService.Feature5}</p>
                      </li>
                    </ul>
                    <div className="text-black">Starting at</div>
                    <p className="mb-6 text-lg font-semibold leading-normal text-black">
                      <span className="ml-2 text-black text-2xl">₹{eachService.Price}</span>
                      <span className="text-black text-[10px]"> +18% GST</span>
                    </p>
                  </div>
                  <div className="px-9 pb-3 text-center w-full">
                    <Dialog>
                      <DialogTrigger className="rounded-md border border-black px-3 py-2 text-md font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:bg-black hover:text-white">
                        Buy
                      </DialogTrigger>
                      <DialogContent className="overflow-hidden h-[90vh] sm:h-auto sm:w-auto w-[95vw]">


                        <Check name={eachService.Header} price={eachService.Price} gst={parseFloat((eachService.Price * 0.18).toFixed(2))} />

                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>
            </div>



          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-5 text-black bg-transparent border-none" />
      <CarouselNext className="absolute right-5 text-black bg-transparent border-none" />
    </Carousel>
  )
}
