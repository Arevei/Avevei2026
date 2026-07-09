'use client'
import PricesOne from '@/components/ComponentsForPages/ForHomePage/DifferentPrices/PricesForLaptop/PricesOne'
import PricesThree from '@/components/ComponentsForPages/ForHomePage/DifferentPrices/PricesForLaptop/PricesThree'
import PricesTwo from '@/components/ComponentsForPages/ForHomePage/DifferentPrices/PricesForLaptop/PricesTwo'
import { PriceCardOne } from '@/components/ComponentsForPages/ForHomePage/DifferentPrices/PricesForPhone/PriceCardOne'
import { PriceCardThree } from '@/components/ComponentsForPages/ForHomePage/DifferentPrices/PricesForPhone/PriceCardThree'
import { PriceCardTwo } from '@/components/ComponentsForPages/ForHomePage/DifferentPrices/PricesForPhone/PriceCardTwo'
import { AccordionDemo } from '@/components/shared/FAQ'
import MeetButton from '@/components/shared/MeetButton/MeetButton'
import { Link } from 'react-router-dom'

import ReactGA from "react-ga4"


export function PricingPageTwo() {
    ReactGA.send({ hitType: "pageview", page: "/prices", title: "Pricing Page" });
    const captureMeetLinkPrices = ()=>{
        ReactGA.event({
          category: 'Price Page',
          action: 'Meet Button',
        });
      }

    return (

        <div className="flex flex-1">
            <div className="flex flex-col flex-1 items-center gap-5 overflow-scroll custom-scrollbar pb-20">
                <div className="home-posts">

                    {/* Hero Section */}
                    <div className=" flex w-[80vw] flex-col flex-wrap space-y-8 pb-10 pt-12">
                        <p className="text-3xl font-bold md:text-5xl md:leading-10 text-green-300 self-center">
                            Simple Pricing, Maximum Value
                        </p>
                        <p className="max-w-3xl text-base md:text-xl self-center">
                            Experience the ease of understanding with our transparent pricing structure. At Arevei, we prioritize clarity, providing straightforward pricing with no hidden fees or surprises
                        </p>
                    </div>
                    <div className='flex flex-col w-[95vw] xs:w[80vw] sm:w-[50vw] lg:w-[70vw] md:mx-auto'>
                        <div className="mx-auto inline-flex rounded-full bg-gray-100 px-4 py-1 self-center">
                            <p className="text-xl font-semibold uppercase tracking-widest text-black">
                                Branding
                            </p>
                        </div>

                        <PricesOne />
                        <PriceCardOne />
                        <div className='w-[50vw] bg-gray-500 h-[1px] self-center mb-6'></div>
                        <div className="mx-auto inline-flex rounded-full bg-gray-100 px-4 py-1 self-center">
                            <p className="text-xl font-semibold uppercase tracking-widest text-black">
                                Web Services
                            </p>
                        </div>
                        <PricesTwo />
                        <PriceCardTwo />
                        <div className='w-[50vw] bg-gray-500 h-[1px] self-center mb-6'></div>

                        <div className="mx-auto inline-flex rounded-full bg-gray-100 px-4 py-1 self-center">
                            <p className="text-xl font-semibold uppercase tracking-widest text-black">
                                Marketing
                            </p>
                        </div>
                        <PricesThree />
                        <PriceCardThree />
                        <div className='w-[50vw] bg-gray-500 h-[1px] self-center mb-6'></div>

                    </div>

                    {/* FAQs */}
                    <h1 className='text-4xl md:text-5xl border-b-2 border-b-white]' >Got a Question?</h1>
                    <AccordionDemo />

                    <div className="">
                                        <div className="flex flex-col md:gap-5 rounded-md p-4 md:flex-row md:p-8 lg:space-x-8 justify-center items-center">
                                            <div className="space-y-2">
                                                <p className="text-2xl font-semibold leading-loose">
                                                    Still have questions?
                                                </p>
                                            </div>
                                            <Link onClick={()=>{
                                                captureMeetLinkPrices();
                                            }} to="/meet" className="bg-white text-black hover:bg-off-white rounded-md"><MeetButton details='CONTACT US' /></Link>
                                        </div>
                                    </div>

                </div>
            </div>
        </div>


    )
}
