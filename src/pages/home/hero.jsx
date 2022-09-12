import imgRafik from "../../img/rafiki.png";
import { useContext } from "react";
import { appContext } from "../../context/appContext";
import Socials from "../../components/socials";

const Hero = ({header,content,image}) => {
  const { headerHeight } = useContext(appContext);

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
      <button>Book a Trip</button>
      <Socials />
    </div>
  );
};

export default Hero;
