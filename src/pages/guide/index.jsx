import "./index.scss";
import Img from "../../img/guide.png";
import Socials from "../../components/socials";
import { Plan } from "../Forms";

export default function Guide() {

  const packages = [
    {
     plan:{ name: "Regular Package",
      description: "up to 1"},
      entry: 
        [
          {
            name: "Follow your team ",
            time: "Nov 19- dec 20",
            amount: 25500,
          },
          {
            name: "Group Stage",
            time: "Nov 19 -Dec 4",
            amount: 11800,
          },
          {
            name: "Round of 16 only",
            time: "Dec 1 - Dec 8",
            amount: 'sold out',
          },
          {
            name: "Round of 16 through finals",
            time: "Dec 1 - Dec 20",
            amount: 22500,
          },

          {
            name: "Quarter finals only",
            time: "Dec 7- Dec 12",
            amount: 'sold out',
          },
          {
            name: "Quarter finals through finals",
            time: "Dec 7- Dec 20",
            amount: 17850,
          },
          {
            name: "Semi finals only",
            time: "Dec 11- Dec 16",
            amount: 11250,
          },
          {
            name: "Semi finals through finals",
            time: "Dec 11- Dec 20",
            amount: 18000,
          },
          {
            name: "Finals",
            time: "Dec 20",
            amount: 11500,
          },
        
      ],
    },
    {plan:{ name: "premium", description: "up to 2"},entry: [
        {
          name: "Follow your team ",
          time: "Nov 19- dec 20",
          amount:45900,
        },
        {
          name: "Group Stage",
          time: "Nov 19 -Dec 4",
          amount: 21400,
        },
        {
          name: "Round of 16 only",
          time: "Dec 1 - Dec 8",
          amount: 20500,
        },
        {
          name: "Round of 16 through finals",
          time: "Dec 1 - Dec 20",
          amount:'sold out',
        },

        {
          name: "Quarter finals only",
          time: "Dec 7- Dec 12",
          amount: 'sold out',
        },
        {
          name: "Quarter finals through finals",
          time: "Dec 7- Dec 20",
          amount: 32500,
        },
        {
          name: "Semi finals only",
          time: "Dec 11- Dec 16",
          amount: 19900,
        },
        {
          name: "Semi finals through finals",
          time: "Dec 11- Dec 20",
          amount: 28300,
        },
        {
          name: "Finals",
          time: "Dec 20",
          amount: 18000,
        },
      
    ], },
    {plan: {name: "Premium Package", description: " up to 5"},entry: [
        {
          name: "Follow your team ",
          time: "Nov 19- dec 20",
          amount: 92000,
        },
        {
          name: "Group Stage",
          time: "Nov 19 -Dec 4",
          amount: 'sold out',
        },
        {
          name: "Round of 16 only",
          time: "Dec 1 - Dec 8",
          amount: 'sold out',
        },
        {
          name: "Round of 16 through finals",
          time: "Dec 1 - Dec 20",
          amount: 78000,
        },

        {
          name: "Quarter finals only",
          time: "Dec 7- Dec 12",
          amount: 'sold out',
        },
        {
          name: "Quarter finals through finals",
          time: "Dec 7- Dec 20",
          amount: 72000,
        },
        {
          name: "Semi finals only",
          time: "Dec 11- Dec 16",
          amount: 45000,
        },
        {
          name: "Semi finals through finals",
          time: "Dec 11- Dec 20",
          amount: 54000,
        },
        {
          name: "Finals",
          time: "Dec 20",
          amount: 38000,
        },
      
    ], }]
    
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
        {packages.map(Package=>(<Plan entry={Package.entry} Package={Package.plan}/>))}
        </div>
        <p>Gold upgrade: Requires a 20% increase in fees
          <br />
Diamond upgrade: Requires a 45% increase in fees.
<br />
To know more, contact our customer service agent at <a href="tel:++44 7418 366386">+44 7418 366386</a></p>
      </div>
    </div>
  );
}
