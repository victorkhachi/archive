import { Link } from "react-router-dom";
import "./style.scss";
const Socials = () => {
  return (
    <section className="socials">
      {/* <div className="social">
        <Link to="/" className="icon">
          <img src="/img/FacebookLogo.png" alt="" />
        </Link>
      </div> */}
      {/* <div className="social">
        <Link to="/" className="icon">
          <img src="/img/LinkedinLogo.png" alt="" />
        </Link>
      </div> */}
      <div className="social">
        <Link to="/" className="icon">
          <img src="/img/InstagramLogo.png" alt="" />
        </Link>
      </div>
      <div className="social">
        <Link to="/" className="icon">
          <img src="/img/TwitterLogo.png" alt="" />
        </Link>
      </div>
    </section>
  );
};
export default Socials;
