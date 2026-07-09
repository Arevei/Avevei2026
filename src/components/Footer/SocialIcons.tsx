
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
// import { FaDiscord } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
import ReactGA from "react-ga4"
const SocialIcons = () => {
  const captureSocialClicks = (socialName:string)=>{
    ReactGA.event({
      category: socialName,
      action: 'Social Buttons',
    })
  }
  return (
    <div className="">
        <span
          className="inline-flex flex-wrap items-center justify-center gap-3 rounded-full p-2 text-2xl"
        >
          <a onClick={()=>{
            captureSocialClicks("Facebook")
          }} href="https://www.facebook.com/TheAreVei/" target="_blank" rel="noreferrer" aria-label="Follow Arevei on Facebook"><FaFacebook size={28} className="hover:text-white duration-500"/></a>
          <a onClick={()=>{
            captureSocialClicks("Twitter")
          }} href="https://twitter.com/areveiofficial" target="_blank" rel="noreferrer" aria-label="Follow Arevei on Twitter / X"><FaXTwitter size={28} className="hover:text-white duration-500"/></a>
          {/* <a onClick={()=>{
            captureSocialClicks("Discord")
          }} href="https://discord.gg/jNtJuEng" target="_blank"><FaDiscord size={30} className="hover:text-white duration-500"/></a> */}
          <a onClick={()=>{
            captureSocialClicks("LinkedIn")
          }} href="https://www.linkedin.com/company/areveiofficial/"  target="_blank" rel="noreferrer" aria-label="Follow Arevei on LinkedIn"><FaLinkedin size={28} className="hover:text-white duration-500"/></a>
          {/* <a onClick={()=>{
            captureSocialClicks("Instagram")
          }} href="https://www.instagram.com/arevei_official?igsh=MW5ranhrd2J5Njg2aQ==" target="_blank"><FaInstagram size={30} className="hover:text-white duration-500"/></a> */}
        </span>
    </div>
  );
};

export default SocialIcons;
