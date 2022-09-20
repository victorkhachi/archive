import { Link } from "react-router-dom";
import "./style.scss";

const Footer = () => {
  return (
    <footer>
      <form className="news-letter">
        <h1>Subscribe to our newsletter</h1>
        {/* <p>
          Hendrerit egestas turpis venenatis vitae. In sit nisl tortor vel id.
        </p> */}
        <label htmlFor="email">
          <input type="text" name="email" placeholder="Your email" />
          <button type="submit">Subscribe</button>
        </label>
        <div>
          By clicking the subscribe button, you accept our{" "}
          <Link to={"/"}>Terms and Conditions </Link>
          and our <Link to={"/"}>Privacy Policy</Link>
        </div>
      </form>
      <section>
        <div className="contents">
          <div className="box">
            <p className="logo">
              Sporty Leisure
              <span>Let’s take your travels to the next level</span>
            </p>
          </div>
          <div className="box links">
            <div className="title">menu</div>
            <div className="quick-links">
              <Link to={"/about"}>About us</Link>
              <Link to={"/guides"}>Guides</Link>
              <Link to={"/availability"}>AVailability</Link>
              <Link to={"/blog"}> Blog</Link>
            </div>
          </div>
          <div className="box">
            <div className="title">contact address</div>
            <p>25 Horsell Rd, London N5 1XL, UK</p>
          </div>
          <div className="box">
            <div className="title">email address</div>
            <p>sportyleisure@qualityservice.com</p>
            <div className="title">Phone</div>
            <p>+44 7418 366386</p>
          </div>
          <div className="box"></div>
        </div>
      </section>
      <p className="least">
        © sportyleisure. All rights reserved{" "}
        <Link to={"/terms"}> Terms and Conditions</Link>
        <Link to={"/privacy"}>Privacy Policy</Link>
      </p>
    </footer>
  );
};

export default Footer;
