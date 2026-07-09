"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import ReactGA from "react-ga4"

function OurServicesLaptop() {
  const captureManagement = (serviceName: string) => {
    ReactGA.event({
      category: serviceName,
      action: "Services Button",
    })
  }

  return (
    <div className="sm:flex justify-center items-center w-[90%] lg:w-[70%] hidden flex-col">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#00E6C4] mb-4 text-center">
        End-to-End Services for Modern Brands
      </h2>
      <p className="text-lg text-gray-300 text-center mb-12 max-w-2xl">
        Integrated solutions designed to build, grow, and scale your brand across every touchpoint.
      </p>

      <Tabs defaultValue="Branding" className="mt-4 w-full">
        <TabsList className=" mb-8 text-lg lg:text-2xl grid w-full grid-rows-2 grid-flow-col gap-10  lg:grid-cols-6 lg:grid-flow-row lg:gap-3">
          <TabsTrigger
            onClick={() => {
              captureManagement("Branding")
            }}
            id="Branding"
            className="text-xl rounded-lg"
            value="Branding"
          >
            Branding
          </TabsTrigger>
          <TabsTrigger
            onClick={() => {
              captureManagement("Wedding")
            }}
            id="Wedding"
            className="text-xl rounded-lg"
            value="Wedding"
          >
            Wedding
          </TabsTrigger>
          <TabsTrigger
            onClick={() => {
              captureManagement("Webapps")
            }}
            id="Webapps"
            className="text-xl rounded-lg"
            value="Webapps"
          >
            Webapps
          </TabsTrigger>
          <TabsTrigger
            onClick={() => {
              captureManagement("Marketing")
            }}
            id="Marketing"
            className="text-xl rounded-lg"
            value="Marketing"
          >
            Marketing
          </TabsTrigger>
          <TabsTrigger
            onClick={() => {
              captureManagement("Management")
            }}
            id="Management"
            className="text-xl rounded-lg"
            value="Management"
          >
            Management
          </TabsTrigger>
          <TabsTrigger
            onClick={() => {
              captureManagement("Strategy")
            }}
            id="Strategy"
            className="text-xl rounded-lg"
            value="Strategy"
          >
            Strategy
          </TabsTrigger>
        </TabsList>
        <TabsContent value="Branding">
          <Card className="w-full h-full rounded-2xl border-none">
            <CardContent className="flex aspect-square items-center justify-center w-full h-full p-0">
              <div
                className="relative group flex w-full h-full flex-col justify-end"
                style={{
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <img src={"/assets/images/branding.png"} alt="" className=" h-full w-full rounded-2xl object-cover" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="Wedding">
          <Card className="w-full h-full rounded-2xl border-none">
            <CardContent className="flex aspect-square items-center justify-center w-full h-full p-0">
              <div
                className="relative group flex w-full h-full flex-col justify-end"
                style={{
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <img src={"/assets/images/wedding.jpg"} alt="" className=" h-full w-full rounded-2xl object-cover" />
              </div>
            </CardContent>
          </Card>{" "}
        </TabsContent>
        <TabsContent value="Webapps">
          <Card className="w-full h-full rounded-2xl border-none">
            <CardContent className="flex aspect-square items-center justify-center w-full h-full p-0">
              <div
                className="relative group flex w-full h-full flex-col justify-end"
                style={{
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <img src={"/assets/images/webservice.png"} alt="" className="h-full w-full rounded-2xl object-cover" />
              </div>
            </CardContent>
          </Card>{" "}
        </TabsContent>
        <TabsContent value="Marketing">
          <Card className="w-full h-full rounded-2xl border-none">
            <CardContent className="flex aspect-square items-center justify-center w-full h-full p-0">
              <div
                className="relative group flex w-full h-full flex-col justify-end"
                style={{
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <img src={"/assets/images/marketing.jpg"} alt="" className=" h-full w-full rounded-2xl object-cover" />
              </div>
            </CardContent>
          </Card>{" "}
        </TabsContent>
        <TabsContent value="Management">
          <Card className="w-full h-full rounded-2xl border-none">
            <CardContent className="flex aspect-square items-center justify-center w-full h-full p-0">
              <div
                className="relative group flex w-full h-full flex-col justify-end"
                style={{
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <img src={"/assets/images/manage.png"} alt="" className=" h-full w-full rounded-2xl object-cover" />
              </div>
            </CardContent>
          </Card>{" "}
        </TabsContent>
        <TabsContent value="Strategy">
          <Card className="w-full h-full rounded-2xl border-none">
            <CardContent className="flex aspect-square items-center justify-center w-full h-full p-0">
              <div
                className="relative group flex w-full h-full flex-col justify-end"
                style={{
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <img src={"/assets/images/strategy.jpg"} alt="" className=" h-full w-full rounded-2xl object-cover" />
              </div>
            </CardContent>
          </Card>{" "}
        </TabsContent>
      </Tabs>
    </div>
  )
}
export default OurServicesLaptop
