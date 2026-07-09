import ReactGA from "react-ga4"

const RefundPolicy = () => {
    ReactGA.send({ hitType: "pageview", page: "/refundpolicy", title: "Refund Page" });
    return (
        <div className="flex flex-1">
            <div className="home-container">
                <div className="home-posts w-[90vw]">
                    <div className="w-[80vw]">
                        <h1 className="text-5xl text-center text-[#14B1A0] mt-6">Cancellation & Refund Policy</h1>
                        <p className="text-2xl mt-5">Last updated on 28-03-2024 15:32:17</p>
                        <p className="text-2xl mt-4">
                            Shakyawar Mediatech LLP believes in helping its customers as far as possible, and has therefore
                            a liberal cancellation policy.
                        </p>
                        <div className='w-full h-[1px] bg-gray-400 mt-3'></div>
                        <h2 className="text-4xl text-center text-[#14B1A0] mt-5">Under this policy:
                        </h2>
                        <p className="text-2xl mt-4">· Cancellations will be considered only if the request is made immediately after placing the order.
                            However, the cancellation request may not be entertained if the orders have been communicated to the
                            vendors/merchants and they have initiated the process of shipping them.
                        </p>
                        <p className="text-2xl mt-4">· Shakyawar Mediatech LLP does not accept cancellation requests for perishable items like
                            flowers, eatables etc. However, refund/replacement can be made if the customer establishes that the
                            quality of product delivered is not good.
                        </p>
                        <p className="text-2xl mt-4">· In case of receipt of damaged or defective items please report the same to our Customer Service team.
                            The request will, however, be entertained once the merchant has checked and determined the same at his
                            own end. This should be reported within 30 Days days of receipt of the products. In case you feel that the
                            product received is not as shown on the site or as per your expectations, you must bring it to the notice of
                            our customer service within 30 Days days of receiving the product. The Customer Service Team after
                            looking into your complaint will take an appropriate decision.
                        </p>
                        <p className="text-2xl mt-4">· In case of complaints regarding products that come with a warranty from manufacturers, please refer
                            the issue to them. In case of any Refunds approved by the Shakyawar Mediatech LLP, it will take
                            16-30 Days days for the refund to be processed to the end customer.
                        </p>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default RefundPolicy