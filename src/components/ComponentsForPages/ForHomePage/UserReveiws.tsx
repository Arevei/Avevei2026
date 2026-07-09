
import UserReveiwCard from '@/components/shared/UserReveiwCard'
import { FaFacebook , FaInstagram  , FaPinterest , FaLinkedin } from "react-icons/fa"

const UserReveiwsLaptop = () => {


    const ReveiwList = [
        {
            name: "Piyush",
            username: "PiyuJain",
            pic: "https://images.unsplash.com/photo-1607081692251-d689f1b9af84?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            logo: <FaInstagram size={30} />,
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
            name: "Nisha",
            username: "JainNisha",
            pic: "https://as2.ftcdn.net/v2/jpg/06/47/55/67/1000_F_647556764_JR8yQKwcGFqWB6BbOxYGhNfBnAiMd05a.jpg",
            logo: <FaPinterest size={30} />,
            post: "Arevei's web services exceeded my expectations. Their team delivered a sleek, user-friendly website that perfectly encapsulated our brand identity. Their attention to detail and prompt communication made the process seamless."
        },
        {
            name: "Raghuban",
            username: "raghu28",
            pic: "https://media.istockphoto.com/id/1212177440/photo/portrait-of-a-happy-man-of-indian-origin.webp?b=1&s=170667a&w=0&k=20&c=leJSjyq5nxpPK93z5xxwS7S_zMAMzLi3me9jVivf1aI=",
            logo: <FaLinkedin size={30} />,
            post: "Arevei's brand management services elevated our financial profits significantly. Their expertise was instrumental in driving growth and success for our company."
        }
    ]

    return (
        <div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#00ffd9] via-[#00ffd9] to-[#00aeff] bg-clip-text text-transparent mb-12 text-center px-10">
            Read what our clients think of us.
          </h2>
        <div className="hidden max-w-5xl mx-auto md:grid md:grid-cols-2 lg:grid-flow-col lg:grid-rows-2 md:grid-flow-row gap-8 place-items-center ">
            

            {
                ReveiwList.map((eachReveiw) => {
                    return (
                        <span key={eachReveiw.name} className='relative'><UserReveiwCard pic={eachReveiw.pic} name={eachReveiw.name} username={eachReveiw.username} post={eachReveiw.post} />
                        </span>
                    )
                })
            }


        </div>
        </div>
    )
}

export default UserReveiwsLaptop