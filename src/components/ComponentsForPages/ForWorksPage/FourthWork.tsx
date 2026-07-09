
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

import { FourthWebsite } from "./Fourthwebsite"
const FourthWork = ({capturePortfolio}:{capturePortfolio : (pname:string)=>void}) => {
  return (
    <div className="w-full flex flex-col">
            <section className="relative overflow-hidden">
                <div className="relative">
                    <div className="mx-auto max-w-xl lg:max-w-7xl">
                        <div className="mx-auto mb-14 w-[90vw] xs:w-full text-center flex flex-wrap justify-center items-center">

                            <h1 className="text-4xl xs:text-6xl font-bold w-[90vw]">more.Buds</h1>
                        </div>
                        <div className="lg:mx-14 flex flex-wrap px-4">
                        <div className="w-full px-4 lg:w-1/2">
                                <span className="mb-5 block">Jan 28, 2024</span>
                                <h4 className="mb-5 text-3xl font-semibold hidden lg:block">
                                Resonating Brilliance: Crafting Ear Bud Elegance for More's Brand & Website
                                </h4>
                                <p className="max-w-xl text-lg hidden lg:block">
                                Elevating More Company's Ear Buds with our Signature Branding and Website Solutions. Our collaboration has orchestrated a symphony of style and functionality, harmonizing captivating branding with a seamless online experience. With our innovative touch, More's ear buds transcend mere audio devices, becoming the ultimate statement of sound and sophistication. Welcome to a world where every beat resonates with unparalleled brilliance.
                                </p>
                                
                            </div>
                            <div className=" w-[95vw] md:w-full px-4 lg:w-1/2">
                                <div className="group block w-full">
                                    <img
                                        className="mb-1 block w-full rounded-lg"
                                        src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/a92ec5193727743.65f09f8256f74.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                            
                        </div>
                        <div className="mt-5 text-center">
                        <Dialog>
                                <DialogTrigger onClick={()=>{
                                    capturePortfolio("MoreBuds")
                                }} className="rounded-md border border-white px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:bg-white hover:text-black">
                                    Look More
                                </DialogTrigger>
                                <DialogContent className="h-[90vh] overflow-auto custom-scrollbar w-[95vw]">
                                    <DialogHeader>
                                        <DialogTitle className="text-4xl">More.buds</DialogTitle>
                                    </DialogHeader>
                                    <FourthWebsite />
                                </DialogContent>
                            </Dialog>

                                </div>
                    </div>
                </div>
            </section>
            <hr className="my-8 w-[80vw] self-center" />
        </div>
  )
}

export default FourthWork