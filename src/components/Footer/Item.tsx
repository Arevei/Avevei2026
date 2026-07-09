
import { Link } from "react-router-dom";
import ReactGA from "react-ga4"
type arrayLinks = {
  name : string,
  link : string
}
type PropLinks = {
  Links:arrayLinks[],
  title:string
}
const Item = ({ Links, title }:PropLinks) => {

  const captureFooterLinks = (nameLink:string)=>{
    ReactGA.event({
      category: nameLink,
      action: 'Footer Buttons',
    })
  }

  return (
    <div className="min-w-0 text-center sm:text-left">
      <h3 className="mb-3 text-sm font-semibold tracking-[0.24em] text-white">{title}</h3>
      <ul className="space-y-2">
      {Links.map((link) => (
        <li key={link.name}>
          <Link onClick={()=>{
            captureFooterLinks(link.name)
          }}
            className="inline-block break-words text-sm leading-6 text-gray-400 duration-300 hover:text-teal-400"
            to={link.link}
          >
            {link.name}
          </Link>
        </li>
      ))}
      </ul>
    </div>
  );
};

export default Item;
