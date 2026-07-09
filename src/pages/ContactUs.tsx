import ReactGA from "react-ga4"
import JsonLd from "@/components/shared/JsonLd"
import { areveiEntity, buildBreadcrumbSchema, buildLocalBusinessSchema, buildOrganizationSchema } from "@/lib/geo-data"
import { SITE_URL } from "@/lib/site"

const ContactUs = () => {
    ReactGA.send({ hitType: "pageview", page: "/contact", title: "Contact Details Page" });
    return (
        <div className="flex flex-1">
            <JsonLd id="ld-contact-organization" data={buildOrganizationSchema()} />
            <JsonLd id="ld-contact-local-business" data={buildLocalBusinessSchema()} />
            <JsonLd
                id="ld-contact-breadcrumb"
                data={buildBreadcrumbSchema([
                    { name: "Home", url: `${SITE_URL}/` },
                    { name: "Contact", url: `${SITE_URL}/contact` },
                ])}
            />
            <div className="home-container">
                <div className="home-posts w-[90vw]">
                    <h1 className='text-4xl md:text-7xl text-center text-[#14B1A0] mt-6'>Contact Us</h1>
                    <div className='flex gap-5 w-[80vw]'>
                       
                        <div className='w-[80%] sm:w-[60%] self-center'>
                            <h2 className='text-3xl'>You may contact us using the information below:</h2>
                            <div className='w-full h-[1px] bg-gray-400'></div>
                            <div className='text-3xl mt-3 text-[#14B1A0]'>Brand Name: </div>
                            <div className='text-xl'>{areveiEntity.brandName}</div>
                            <div className='w-full h-[1px] bg-gray-400'></div>
                            <div className='text-3xl mt-3 text-[#14B1A0]'>Legal Registered Name: </div>
                            <div className='text-xl'>{areveiEntity.legalName}</div>
                            <div className='w-full h-[1px] bg-gray-400'></div>
                            <div className='text-3xl mt-3 text-[#14B1A0]'>Registered Address:</div> 
                            <div className='text-xl'>{areveiEntity.registeredAddress.streetAddress}, {areveiEntity.registeredAddress.addressLocality}, {areveiEntity.registeredAddress.addressRegion}, India</div>
                            <div className='w-full h-[1px] bg-gray-400'></div>
                            <div className='text-3xl mt-3 text-[#14B1A0]'>Operational Address:</div>
                            <div className='text-xl'>{areveiEntity.operationalAddress.streetAddress}, {areveiEntity.operationalAddress.addressLocality}, {areveiEntity.operationalAddress.addressRegion}, {areveiEntity.operationalAddress.postalCode}</div>
                            <div className='w-full h-[1px] bg-gray-400'></div>
                            <div className='text-xl'> <span className='text-2xl text-[#14B1A0]'>For Sales and Partnership Enquiries: </span>{areveiEntity.phone}</div>
                            <div className='text-xl'> <span className='text-2xl text-[#14B1A0]'>For Customer Service & Support: </span>  {areveiEntity.supportPhone} </div>
                            <div className='w-full h-[1px] bg-gray-400'></div>
                            <div className='text-xl'> <span className='text-2xl text-[#14B1A0]'>For Career and Hr Support: </span>{areveiEntity.peopleEmail}</div>
                            <div className='text-xl'> <span className='text-2xl text-[#14B1A0]'>For Marketing & Sales: </span>{areveiEntity.salesEmail}</div>
                            <div className='text-xl'> <span className='text-2xl text-[#14B1A0]'>For Customer Service, Complaints & Feedback: </span>{areveiEntity.supportEmail}</div>
                            
                        </div>
                        <img src='/assets/images/contactus.svg' className='bg-white w-1/3 rounded-lg hidden md:block'></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
