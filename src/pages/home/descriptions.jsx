const descriptions = [
  {
    title: "QATAR",
    body: "The West Asian country has made intensive preparations including construction of category 4 stadiums, 5 star hotels, beautiful architectural designs, tourist centers and much more. However, Qatar has a smaller land mass compared to previous destinations. Sporting leisures has made sufficient provisions to ensure our guests are given top notch services that meet required standards. ",
  },
  {
    title: "HOTELS",
    body: `The host country is an amazing travel and vacation destination, but finding the best accommodations is difficult because they are scarce especially when compared to other World Cup host countries. 
    To be specific, hotels that rival the Kempinski Residences & Suites, Doha and Mondrian Doha are extremely limited and the demand is at it’s peak. Sportyleisures is excited to offer you two of the best hotels in the country to our esteemed guests as part of their World Cup experience. `,
  },
  {
    title: "2022 WORLD CUP",
    body: "The anticipated World Cup tournament is here! This is a peculiar tournament & world event as it comes with a lot of exciting features. We are certain our guests would have a wonderful experience as we walk them through their journey to Qatar.",
  },
  {
    title: "Travel Experience",
    body: `We offer personalized travel experience and leisures to suit our guests’ demands. We understand the need to enjoy the journey but avoid the stress. Our services include a 24/7 onsite host team, airport reception, event specialists and multilingual experts, luxury accommodation, among others `,
  },
];

const Description = () => {
  return (
    <section className="description-wrap">
      {descriptions.map((item, idx) => {
        return (
          <div className="description" key={idx}>
            <h4 className="title">{item.title}</h4>
            <p>{item.body}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Description;
