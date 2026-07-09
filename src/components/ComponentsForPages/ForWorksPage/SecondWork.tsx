
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import SecondWebsite from "./SecondWebsite"
const SecondWork = ({capturePortfolio}:{capturePortfolio : (pname:string)=>void}) => {
    return (
        <div className="w-full flex flex-col">
            <section className="relative overflow-hidden">
                <div className="relative">
                    <div className="mx-auto max-w-xl lg:max-w-7xl">
                        <div className="mx-auto mb-14 w-[90vw] xs:w-full text-center flex flex-wrap justify-center items-center">

                            <h1 className="text-4xl xs:text-6xl font-bold w-[90vw]">UmaiDrinks</h1>
                        </div>
                        <div className="lg:mx-14 flex flex-wrap px-4">
                            <div className=" w-[95vw] md:w-full px-4 lg:w-1/2">
                                <div className="group block w-full">
                                    <img
                                        className="mb-1 block w-full rounded-lg"
                                        src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/efbc1e138732853.6222d1be5b637.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="w-full px-4 lg:w-1/2">
                                <span className="mb-5 block">Feb 20, 2024</span>
                                <h4 className="mb-5 text-3xl font-semibold hidden lg:block">
                                Revitalizing Umia: Crafting Irresistible Brand Magic for Juice Can Delight
                                </h4>
                                <p className="max-w-xl text-lg hidden lg:block">
                                Our vibrant branding solutions have infused Umia Company with a fresh burst of flavor and excitement. From bold logos to tantalizing packaging designs, our collaboration has transformed Umia into an iconic symbol of refreshment and vitality. 
                                </p>
                                <div className="mt-5 text-center">
                                <Dialog>
                                <DialogTrigger onClick={()=>{
                                    capturePortfolio("UmaiDrinks")
                                }} className="rounded-md border border-white px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:bg-white hover:text-black">
                                    Look More
                                </DialogTrigger>
                                <DialogContent className="h-[90vh] overflow-auto custom-scrollbar w-[95vw]">
                                    <DialogHeader>
                                        <DialogTitle className="text-4xl">UmaiDrinks</DialogTitle>
                                    </DialogHeader>
                                    <SecondWebsite />
                                </DialogContent>
                            </Dialog>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <hr className="my-8 w-[80vw] self-center" />
        </div>
    )
}

export default SecondWork