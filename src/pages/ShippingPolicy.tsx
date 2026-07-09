import ReactGA from "react-ga4"

const ShippingPolicy = () => {
    ReactGA.send({ hitType: "pageview", page: "/shippingpolicy", title: "Shipping Page" });
    return (
        <div className="flex flex-1">
            <div className="home-container">
                <div className="home-posts w-[90vw]">
                    <div className="w-[80vw]">
                        <h1 className="text-5xl text-center text-[#14B1A0] mt-6">Shipping & Delivery Policy</h1>
                        <p className="text-2xl mt-5">Last updated on 28-03-2024 15:33:02</p>
                        <div className='w-full h-[1px] bg-gray-400 mt-3'></div>
                        <p className="text-2xl mt-4">For International buyers, orders are shipped and delivered through registered international courier
                            companies and/or International speed post only. For domestic buyers, orders are shipped through
                            registered domestic courier companies and /or speed post only. Orders are shipped within 8+ Days days
                            or as per the delivery date agreed at the time of order confirmation and delivering of the shipment subject
                            to Courier Company / post office norms.
                        </p>
                        <p className="text-2xl mt-4">Shakyawar Mediatech LLP is not liable for any delay in delivery by the courier company / postal
                            authorities and only guarantees to hand over the consignment to the courier company or postal authorities
                            within 8+ Days days from the date of the order and payment or as per the delivery date agreed at the time
                            of order confirmation. Delivery of all orders will be to the address provided by the buyer. Delivery of our
                            services will be confirmed on your mail ID as specified during registration.
                        </p>
                        <p className="text-2xl mt-4">For any issues in utilizing our
                            services you may contact our helpdesk on or areveistudio@gmail.com.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShippingPolicy