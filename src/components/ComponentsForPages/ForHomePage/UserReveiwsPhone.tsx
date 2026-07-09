import ReveiwCardPhone from "@/components/shared/ReveiwCardPhone"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { FaFacebook , FaInstagram  , FaPinterest , FaLinkedin } from "react-icons/fa"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"


function UserReveiwsPhone() {



    const ReveiwList = [
        {
            name: "Piyush",
            username: "PiyuJain",
            pic: "https://images.unsplash.com/photo-1607081692251-d689f1b9af84?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            logo: <FaInstagram  size={30} />,
            post: "Arevei's branding services are exceptional. Their creative team crafts captivating brand identities that truly resonate with our audience. From logo design to brand strategy, their expertise shines through, elevating our brand to new heights."
        },
        {
            name: "A.Merry",
            username: "MA_ry",
            pic: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5kaWFuJTIwcGVvcGxlJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D",
            logo: <FaFacebook size={30} />,
            post: "Our brand witnessed an impressive 38% growth with Arevei's strategic marketing solutions. Their expertise propelled us forward, making Arevei an invaluable asset to our success."
        },
        {
            name: "Raghuban",
            username: "raghu28",
            pic: "https://media.istockphoto.com/id/1212177440/photo/portrait-of-a-happy-man-of-indian-origin.webp?b=1&s=170667a&w=0&k=20&c=leJSjyq5nxpPK93z5xxwS7S_zMAMzLi3me9jVivf1aI=",
            logo: <FaLinkedin size={30} />,
            post: "Arevei's brand management services elevated our financial profits significantly. Their expertise was instrumental in driving growth and success for our company."
        },
        {
            name: "Nisha",
            username: "JainNisha",
            pic: "https://as2.ftcdn.net/v2/jpg/06/47/55/67/1000_F_647556764_JR8yQKwcGFqWB6BbOxYGhNfBnAiMd05a.jpg",
            logo: <FaPinterest size={30} />,
            post: "Arevei's web services exceeded my expectations. Their team delivered a sleek, user-friendly website that perfectly encapsulated our brand identity. Their attention to detail and prompt communication made the process seamless."
        }
    ]
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
      )



  return (
    <Carousel  plugins={[plugin.current]} className=" w-[90vw] xs:max-w-[60vw] md:hidden rounded-lg relative mx-auto" orientation="horizontal">
      <CarouselContent className="">
        {ReveiwList.map((eachReveiw, index) => (
          <CarouselItem key={index}>
            <div className="p-1 h-full rounded-lg">
            <ReveiwCardPhone pic={eachReveiw.pic} name={eachReveiw.name} username={eachReveiw.username}  post={eachReveiw.post} />
            
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-1 text-white bg-transparent border-none" />
  <CarouselNext className="absolute right-1 text-white bg-transparent border-none"/>
          </Carousel>
  )
}
export default UserReveiwsPhone;