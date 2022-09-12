import "./index.scss";
import Img from "../../img/guide.png";
import Socials from "../../components/socials";
import { Plan } from "../Forms";

export default function Guide() {

    const packages=[
        {name:'Single Package',description:'up to 1'},
        {name:'Family Package',description:'up to 2'},
        {name:'Premium Package',description:' up to 5'},
        // {name:'',description:''},

]
  return (
    <div className="home guide">
      <div className="top_img">
        <img src={Img} alt="" />
      </div>
      <p>
        The world has been deeply affected by the COVID19 Pandemic. A lot was
        lost. A lot was learned, including the importance of leisure. Give
        yourself this opportunity to witness a world celebration. Your
        relaxation is our priority. All safety precautions and protocols are
        fully observed by Sporty Leisure. Let's move to Qatar.
      </p>
      <div className="features_promo">
        <div className="features">
          <h1>General Features</h1>
          <ul>
            <li>Luxury Accommodation </li>
            <li>Daily breakfast </li>
            <li>24hour Asssistance </li>
            <li>Airport and Match transportation </li>
            <li>Qatar welcome kit </li>
            <li>Personalized itinerary </li>
            <li>Private tour (Leisure Bonus) </li>
            <li>Tax and service charges </li>
          </ul>
        </div>
        <div className="promo">
          <div>
            <h1>2022 WORLD CUP</h1>
            <p>
              The world tournament (which holds every 4 years) is scheduled to
              be held in Qatar from November 21 to December 18. The West Asian
              country has exciting offers, and we are certain our guests would
              have a thrilling experience
            </p>
          </div>
          <div>
            <h1>Get Started</h1>
            <p>
              The location, cycle of activities and peculiarity of event are
              tailored to give you the experience of a lifetime. Begin your
              journey to the beautiful city of Qatar by booking a trip with us.
              Sporty Leisure's price chart gives an array of travel packages
              with exciting features. Select your desired travel package or book
              a customized trip with one of our agents.
            </p>
          </div>
        </div>
      </div>

      <div className="price_chart">
        <h1>PRICE CHART</h1>
        <div className="prices">
        {packages.map(Package=>(<Plan Package={Package}/>))}
        </div>
        <p>Gold upgrade: Requires a 20% increase in fees
Diamond upgrade: Requires a 45% increase in fees.
To know more, contact our customer service agent at <a href="tel:++44 7418 366386">+44 7418 366386</a></p>
      </div>
    </div>
  );
}
