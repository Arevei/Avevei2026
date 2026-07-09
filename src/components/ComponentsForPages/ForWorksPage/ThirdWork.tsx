
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ThirdWebsite } from "./ThirdWebsite"

const ThirdWork = ({capturePortfolio}:{capturePortfolio : (pname:string)=>void}) => {
    return (
        <div className="w-full px-5 flex flex-col">
            <div className="mx-auto w-full px-2 md:px-14">
                <div className="my-4">
                    <h1 className="text-6xl font-bold text-center">Crumbles</h1>
                </div>
                <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2">
                    <div className="flex flex-col items-center text-start">
                        <div
                            className="relative group flex h-[342px] w-full flex-col justify-end rounded-[10px] bg-red-300"
                            style={{
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                            }}
                        >
                            <img
                                src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/504db1187049889.6580ae8e5f841.png"
                                alt=""
                                className=" h-full w-full rounded-[10px] object-cover hover:opacity-45"
                            />
                            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100">
                                <h1 className="text-xl font-semibold">Brand Identity</h1>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center text-start">
                        <div
                            className="relative group flex h-[342px] w-full flex-col justify-end rounded-[10px] bg-red-300"
                            style={{
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                            }}
                        >
                            <img
                                src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/b2317a192910365.65e3214ecacd2.jpg"
                                alt=""
                                className="z-0 h-full w-full rounded-[10px] object-cover hover:opacity-45"
                            />
                            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100">
                                <h1 className="text-xl font-semibold text-white">Playful Pics</h1>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center text-start">
                        <div
                            className="relative group flex h-[342px] w-full flex-col justify-end rounded-[10px] bg-red-300"
                            style={{
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                            }}
                        >
                            <img
                                src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/fc96ff192910365.65e337578d3bf.jpg "
                                alt=""
                                className="z-0 h-full w-full rounded-[10px] object-cover hover:opacity-45"
                            />
                            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100">
                                <h1 className="text-xl font-semibold text-white">Unique Packaging</h1>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center text-start">
                        <div
                            className="relative group flex h-[342px] w-full flex-col justify-end rounded-[10px] bg-red-300"
                            style={{
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                            }}
                        >
                            <img
                                src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/755fd7192910365.65e3214ecb8ca.jpg"
                                alt=""
                                className="z-0 h-full w-full rounded-[10px] object-cover hover:opacity-45"
                            />
                            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100">
                                <h1 className="text-xl font-semibold text-white">Product Display</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-14 text-center">
                <Dialog>
                                <DialogTrigger onClick={()=>{
                                    capturePortfolio("Crumbles")
                                }} className="rounded-md border border-white px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:bg-white hover:text-black">
                                    Look More
                                </DialogTrigger>
                                <DialogContent className="h-[90vh] overflow-auto custom-scrollbar w-[95vw]">
                                    <DialogHeader>
                                        <DialogTitle className="text-4xl">Crumbles</DialogTitle>
                                    </DialogHeader>
                                    <ThirdWebsite />
                                </DialogContent>
                            </Dialog>

                </div>
            </div>
            <hr className="my-8 w-[80vw] self-center"/>
        </div>
    )
}

export default ThirdWork