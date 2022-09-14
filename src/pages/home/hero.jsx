import imgRafik from "../../img/rafiki.png";
import { useContext } from "react";
import { appContext } from "../../context/appContext";
import Socials from "../../components/socials";
import { useNavigate } from "react-router-dom";

const Hero = ({header,content,image}) => {
  const { headerHeight } = useContext(appContext);
  const navigate=useNavigate()
  return (
    <div
      className="hero"
      style={{
        minHeight: `calc(100vh - ${headerHeight}px)`,
      }}>
    {image &&  <div className="image">
        <img src={imgRafik} alt="hero-img" />
      </div>}
      <h1>
        {header}
      </h1>
      <p>
       {content}
      </p>
      <button onClick={()=>navigate('/availability')}>Book a Trip</button>
      <Socials />
    </div>
  );
};

export default Hero;
