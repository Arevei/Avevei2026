
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import PricesOne from "./DifferentPrices/PricesForLaptop/PricesOne";
import PricesTwo from "./DifferentPrices/PricesForLaptop/PricesTwo";
import PricesThree from "./DifferentPrices/PricesForLaptop/PricesThree";
import { PriceCardOne } from "./DifferentPrices/PricesForPhone/PriceCardOne";
import { PriceCardTwo } from "./DifferentPrices/PricesForPhone/PriceCardTwo";
import { PriceCardThree } from "./DifferentPrices/PricesForPhone/PriceCardThree";
import ReactGA from "react-ga4"
function NewPrices() {

  const capturePrices = (priceTag : string) => {
    ReactGA.event({
      category: priceTag,
      action: 'Prices Button',
    })
  }
  return (
    <Tabs defaultValue="Branding" className="mt-4 w-[90vw] xs:max-w-[60vw] md:max-w-[50vw] lg:max-w-[65vw] z-40 bg-transparent rounded-3xl">
      <TabsList className="mb-8 mt-5 grid grid-cols-3 grid-flow-row gap-3 w-full lg:max-w-[70%] mx-auto">
        <TabsTrigger onClick={() => {
            capturePrices("Branding")
          }} id="Branding" className="text-lg sm:text-xl md:text-2xl lg:text-3xl rounded-lg" value="Branding">Branding</TabsTrigger>
        <TabsTrigger onClick={() => {
            capturePrices("Websites")
          }} id="Websites" className="text-lg sm:text-xl md:text-2xl lg:text-3xl rounded-lg" value="Websites">Websites</TabsTrigger>
        <TabsTrigger onClick={() => {
            capturePrices("Marketing")
          }} id="Marketing" className="text-lg sm:text-xl md:text-2xl lg:text-3xl rounded-lg" value="Marketing">Marketing</TabsTrigger>
      </TabsList>
      <TabsContent value="Branding">
        <PriceCardOne/>
        <PricesOne/>
      </TabsContent>
      <TabsContent value="Websites">
      <PriceCardTwo/>
        <PricesTwo/>
      </TabsContent>
      <TabsContent value="Marketing">
      <PriceCardThree/>
        <PricesThree/>
      </TabsContent>

    </Tabs>  )
}
export default NewPrices;