const items = [
  {
    image: "/img/deepak-siva-s-EdeK-fo0s-unsplash 1.png",
    body: "We have customizable World Cup packages that will allow our guests to see Qatar and experience this illustrious tournament the way they want. This 2022 World Cup will offer up some wonderful experiences in addition to the incredible soccer and we think our guests are going to be very impressed with the host country. ",
  },
  {
    image: "/img/rowen-smith-bL5GFVYyJC4-unsplash 1.png",
    body: `In addition to our luxury accommodations, our guests will be able to make their choice of exciting tours, airport and match transportation and much more.
    In addition, all of our guests will receive the high-touch service Sportyleisures has become known for, including the services of our 24/7 multilingual on-site host team.`,
  },
  {
    image: "/img/willie-burger-pGwgxDz-35g-unsplash 1.png",
    body: `Our host country is a home of gorgeous beaches, enticing markets, world-class museums, impressive architecture, and unique landscapes. We’re really excited about this event and this destination and we can’t wait to show you why.`,
  },
];

const venue = [
  {
    image: "/img/deepak-siva-s-EdeK-fo0s-unsplash 1venues.png",
    location: "15km west of central doha",
    capacity: "40,000",
    name: "al janoub stadium",
    features: "exciting plaza, extensive gardens",
  },
  {
    image: "/img/deepak-siva-s-EdeK-fo0s-unsplash 1venues-1.png",
    location: "15km north of central doha",
    capacity: "86,000",
    name: "lusail stadium",
    features: "multi purpose facilities, plaza",
  },
  {
    image: "/img/deepak-siva-s-EdeK-fo0s-unsplash 1venues-3.png",
    location: "3km south of central al-khor",
    capacity: "60,000",
    name: "Al Bayt Stadium ",
    features: "sorrounding plazas and practice fields",
  },
  {
    image: "/img/deepak-siva-s-EdeK-fo0s-unsplash 1venues-2.png",
    location: "20km west of central doha",
    capacity: "40,000",
    name: "Al Rayyan Stadium ",
    features: "undulating facade; symbols of Qatar's culture",
  },
];
const MoreDetail = () => {
  return (
    <section className="more-detail">
      <h3>LUXURY TRAVEL PACKAGES to the 2022 World Cup in Qatar</h3>

      {items.map((item, idx) => (
        <div className="box" key={idx}>
          <div className="image">
            <img src={item.image} alt="" />
          </div>
          <div className="text">
            <p>{item.body}</p>
          </div>
        </div>
      ))}

      <h3>QATAR’S VENUES</h3>
      <div className="venue-boxes">
        {venue.map((item, idx) => {
          return (
            <div className="venue-box" key={idx}>
              <div className="image">
                <img src={item.image} alt="" />
              </div>
              <div className="title">{item.name}</div>
              <div className="details">
                <p>
                  Capacity<span>: {item.capacity}</span>
                </p>
                <p>
                  Location<span>: {item.location}</span>
                </p>
                <p>
                  Features<span>: {item.features}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default MoreDetail;
