

import { Dialog, DialogContent,DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { FirstWebsite } from "./FirstWebsite"



const FirstWork = ({capturePortfolio}:{capturePortfolio : (pname:string)=>void}) => {
    
    return (






        <div className="w-full px-5 flex flex-col">
            <section className="relative overflow-hidden py-10">
                <div className="relative">
                    <div className="mx-auto max-w-xl lg:max-w-7xl">
                        <div className="mx-auto mb-14 w-[90vw] xs:w-full text-center flex flex-col justify-center items-center">
                            <span className="self-center mb-4 inline-block rounded-full bg-gray-50 px-3 py-1 text-xl font-semibold text-black">
                                OUR WORKS
                            </span>
                            <h1 className="text-6xl font-bold mt-10 w-full">Zelios</h1>
                        </div>
                        <div className="lg:mx-14 flex flex-wrap">
                            <div className="w-[90vw] xs:w-full px-4 lg:w-1/2">
                                <div className="group block w-full">
                                    <img
                                        className="mb-1 block w-full rounded-lg"
                                        src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/c1981d192544137.65dda66308433.png"
                                        alt=""
                                    />
                                    <span className="mb-5 block">Mar 14, 2024</span>
                                    
                                </div>
                            </div>
                            <div className="w-[90vw] xs:w-full px-4 lg:w-1/2 hidden lg:block">
                                <div className="group block w-full">
                                    <img
                                        className="mb-1 block w-full rounded-lg"
                                        src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/1f8555192544137.65dda663075c0.png"
                                        alt=""
                                    />
                                   
                                </div>
                            </div>
                            
                        </div>
                        <div className="text-center flex flex-col justify-center items-center">
                        <h4 className="mb-5 text-3xl font-semibold hidden lg:block">
                        Transforming Zelios: Crafting a Brand Legacy with Distinction
                                    </h4>
                                    <p className="max-w-xl text-lg hidden lg:block text-center">
                                    Empowering Zelios Agency to Shine Brighter: Our bespoke branding solutions have ignited a new era of distinction for Zelios. From captivating visual identities to resonant messaging, our collaborative journey has unlocked the true essence of Zelios's brand, setting it apart as a beacon of excellence in the industry.
                                    </p>
                        </div>

                        <div className="text-center relative mt-5">
                            <Dialog>
                                <DialogTrigger onClick={()=>{
                                    capturePortfolio("Zelios")
                                }} className="rounded-md border border-white px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:bg-white hover:text-black">
                                    Look More
                                </DialogTrigger>
                                <DialogContent className="h-[90vh] overflow-auto custom-scrollbar w-[95vw] flex flex-col">
                                    <DialogHeader className="text-4xl">
                                        <DialogTitle className="text-4xl">ZeliosAgency</DialogTitle>
                                    </DialogHeader>
                                    <FirstWebsite />
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

export default FirstWork