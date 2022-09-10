import Banner from "./banner";
import Hero from "./hero";
import "./style.scss";
import Description from "./descriptions";
import bgImg from "../../img/tower.png";
import MoreDetail from "./moreDetail";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home">
      <div className="wrap">
        <Hero />
        <Banner />
        <section className="description-detail">
          <div className="background-img">
            <img src={bgImg} alt="" />
          </div>
          <Description />
          <MoreDetail />
        </section>
        <div className="ttnl">
          <h2>Take Your travels to the next level</h2>
          <p>
            TAKE YOUR TRAVELS TO THE NEXT LEVEL Nullam odio dis egestas vel
            varius parturient sollicitudin nisi ultricies. Vitae purus arcu enim
            feugiat suspendisse tellus. Get started
          </p>
          <Link to="/">Get started</Link>
        </div>
      </div>
    </div>
  );
};
export default Home;