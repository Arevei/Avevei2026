
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import React from "react"
function OurServicesPhone() {

 

  const servicesItem = [
    {
      "Name": "Branding",
      "Image": "/assets/images/branding.png",
    },
    {
      "Name": "Wedding",
      "Image": "/assets/images/wedding.jpg",
    },
    {
      "Name": "Website",
      "Image": "/assets/images/webservice.png"
    },
    {
      "Name": "Marketing",
      "Image": "/assets/images/marketing.jpg"
    },
    {
      "Name": "Management",
      "Image": "/assets/images/manage.png",
    },
    {
      "Name": "Strategy",
      "Image": "/assets/images/strategy.jpg"
    }
  ]


  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )


  return (
    <Carousel plugins={[plugin.current]} className="w-full max-w-[90vw] sm:hidden relative">
      <CarouselContent>
        {servicesItem.map((eachService, index) => (
          <CarouselItem key={index}>
            <div className="text-center text-2xl">{eachService.Name}</div>
            <div className="p-1">
              <Card className="w-full h-full border-none">
                <CardContent className="flex aspect-square items-center justify-center w-full h-full p-0">
                  <div
                    className="relative group flex w-full h-full flex-col justify-end rounded-[10px] bg-red-300"
                    style={{
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    <img
                      src={eachService.Image}
                      alt={eachService.Name}
                      className=" h-full w-full rounded-[10px] object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute top-3 left-1 text-white bg-transparent rounded-full w-8 h-8 " />
  <CarouselNext  className="absolute top-3 right-1 text-white bg-transparent rounded-full w-8 h-8"/>
    </Carousel>
  )
}

export default OurServicesPhone;