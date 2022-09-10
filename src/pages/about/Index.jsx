import Banner from "../home/banner";
import Hero from "../home/hero";
import "./index.scss";

export default function About() {
  return (
    <div className="home about">
      <div className="wrap">
        <Hero />
        <div className="banner">
          <div className="l-g">
            <h2>What our clients are saying</h2>
            <div className="card_container">
            <div className="about_cards">

              <div className="card">
                <div className="circle"></div>
                <p>
                  <h3>Brooklyn Simmons</h3>
                  <span>
                    Laoreet fames placerat dui vitae ut felis sed. Elementum,
                    nunc posuere risus est quisque pretium. Ultrices a arcu sed
                    nisl. Posuere faucibus odio duis nullam lorem auctor. A
                    quisque felis congue ornare eleifend. At vulputate a
                    sagittis purus.
                  </span>
                </p>
              </div>
              <div className="card">
                {" "}
                <div className="circle"></div>
                <p> <h3>Brooklyn Simmons</h3>
                  <span>
                    Laoreet fames placerat dui vitae ut felis sed. Elementum,
                    nunc posuere risus est quisque pretium. Ultrices a arcu sed
                    nisl. Posuere faucibus odio duis nullam lorem auctor. A
                    quisque felis congue ornare eleifend. At vulputate a
                    sagittis purus.
                  </span></p>
              </div>
              <div className="card">
                {" "}
                <div className="circle"></div>
                <p> <h3>Brooklyn Simmons</h3>
                  <span>
                    Laoreet fames placerat dui vitae ut felis sed. Elementum,
                    nunc posuere risus est quisque pretium. Ultrices a arcu sed
                    nisl. Posuere faucibus odio duis nullam lorem auctor. A
                    quisque felis congue ornare eleifend. At vulputate a
                    sagittis purus.
                  </span></p>
              </div>
            </div>
            </div>
          </div>
        </div>
    
      </div>
    </div>
  );
}
