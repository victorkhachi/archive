import imgRafik from "../../img/rafiki.png";
import { useContext } from "react";
import { appContext } from "../../context/appContext";
import Socials from "../../components/socials";

const Hero = () => {
  const { headerHeight } = useContext(appContext);

  return (
    <div
      className="hero"
      style={{
        minHeight: `calc(100vh - ${headerHeight}px)`,
      }}>
      <div className="image">
        <img src={imgRafik} alt="hero-img" />
      </div>
      <h1>TAKE YOUR TRAVELS TO THE NEXT LEVEL</h1>
      <p>
        Nullam odio dis egestas vel varius parturient sollicitudin nisi
        ultricies. Vitae purus arcu enim feugiat suspendisse tellus.
      </p>
      <button>Book a Trip</button>
      <Socials />
    </div>
  );
};

export default Hero;
