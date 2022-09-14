import React from "react";
import "./index.scss";
import Img from "../../img/event.png";
import Img1 from "../../img/Olympics.png";

import Img2 from "../../img/F1.png";
import Img3 from "../../img/ball.png";
import Img4 from "../../img/cricket.png";
import Img5 from "../../img/tennis.png";
import Img6 from "../../img/rugby.png";
import Img7 from "../../img/bowl.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Form from "../Forms";

function Availability(props) {
    const navigate= useNavigate()
  const [book, setBook] = useState(false);

  return (
    <div className="home availability">
      {book && <Form click={() => setBook(!book)} />}
      <div className="wrap">
        <div className="top">
          <div className="img">
            <img src="/img/trophy.png" alt="" />
          </div>
          <div className="write_up">
            <h1>2022 WORLD CUP</h1>
            <h3>TO BE HELD IN QATAR</h3>
            <p>
              We have customizable World Cup packages that will allow our guests
              to see Qatar and experience this illustrious tournament the way
              they want. This 2022 World Cup will offer up some wonderful
              experiences in addition to the incredible soccer and we think our
              guests are going to be very impressed with the host country.{" "}
            </p>
            <div className="buttons">
              <button onClick={() => setBook(!book)}>Book a Trip</button>
              <div className="button" onClick={()=>navigate('/guides')}>Our packages</div>
            </div>
          </div>
        </div>
        <div className="events">
          <h2>OTHER EVENTS</h2>
          <div className="event_rack">
            <div className="event">
              <div className="coming">
                <div>
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M32.0002 58.6667C46.7278 58.6667 58.6668 46.7276 58.6668 32C58.6668 17.2724 46.7278 5.33334 32.0002 5.33334C17.2726 5.33334 5.3335 17.2724 5.3335 32C5.3335 46.7276 17.2726 58.6667 32.0002 58.6667Z"
                      stroke="#5B9936"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M32 16V32L42.6667 37.3333"
                      stroke="#5B9936"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <b>Coming soon</b>
              </div>
              <img src={Img1} alt="" />
              <p>Olympic Games</p>
            </div>
            <div className="event">
              <div className="coming">
                <div>
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M32.0002 58.6667C46.7278 58.6667 58.6668 46.7276 58.6668 32C58.6668 17.2724 46.7278 5.33334 32.0002 5.33334C17.2726 5.33334 5.3335 17.2724 5.3335 32C5.3335 46.7276 17.2726 58.6667 32.0002 58.6667Z"
                      stroke="#5B9936"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M32 16V32L42.6667 37.3333"
                      stroke="#5B9936"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <b>Coming soon</b>
              </div>
              <img src={Img} alt="" />
              <p>Champions League</p>
            </div>
            <div className="event">
              <div className="coming">
                <div>
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M32.0002 58.6667C46.7278 58.6667 58.6668 46.7276 58.6668 32C58.6668 17.2724 46.7278 5.33334 32.0002 5.33334C17.2726 5.33334 5.3335 17.2724 5.3335 32C5.3335 46.7276 17.2726 58.6667 32.0002 58.6667Z"
                      stroke="#5B9936"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M32 16V32L42.6667 37.3333"
                      stroke="#5B9936"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <b>Coming soon</b>
              </div>
              <img src={Img2} alt="" />
              <p>Formula One Racing</p>
            </div>
            <div className="event">
              <div className="coming">
                <div>
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M32.0002 58.6667C46.7278 58.6667 58.6668 46.7276 58.6668 32C58.6668 17.2724 46.7278 5.33334 32.0002 5.33334C17.2726 5.33334 5.3335 17.2724 5.3335 32C5.3335 46.7276 17.2726 58.6667 32.0002 58.6667Z"
                      stroke="#5B9936"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M32 16V32L42.6667 37.3333"
                      stroke="#5B9936"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <b>Coming soon</b>
              </div>
              <img src={Img3} alt="" />
              <p>National Basket ball</p>
            </div>
            <div className="event">
              <div className="coming">
                <div>
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M32.0002 58.6667C46.7278 58.6667 58.6668 46.7276 58.6668 32C58.6668 17.2724 46.7278 5.33334 32.0002 5.33334C17.2726 5.33334 5.3335 17.2724 5.3335 32C5.3335 46.7276 17.2726 58.6667 32.0002 58.6667Z"
                      stroke="#5B9936"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M32 16V32L42.6667 37.3333"
                      stroke="#5B9936"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <b>Coming soon</b>
              </div>
              <img src={Img7} alt="" />
              <p>Super Bowl</p>
            </div>
            <div className="event">
              <div className="coming">
                <div>
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M32.0002 58.6667C46.7278 58.6667 58.6668 46.7276 58.6668 32C58.6668 17.2724 46.7278 5.33334 32.0002 5.33334C17.2726 5.33334 5.3335 17.2724 5.3335 32C5.3335 46.7276 17.2726 58.6667 32.0002 58.6667Z"
                      stroke="#5B9936"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M32 16V32L42.6667 37.3333"
                      stroke="#5B9936"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <b>Coming soon</b>
              </div>
              <img src={Img6} alt="" />
              <p>Rugby World Cup</p>
            </div>
            <div className="event">
              <div className="coming">
                <div>
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M32.0002 58.6667C46.7278 58.6667 58.6668 46.7276 58.6668 32C58.6668 17.2724 46.7278 5.33334 32.0002 5.33334C17.2726 5.33334 5.3335 17.2724 5.3335 32C5.3335 46.7276 17.2726 58.6667 32.0002 58.6667Z"
                      stroke="#5B9936"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M32 16V32L42.6667 37.3333"
                      stroke="#5B9936"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <b>Coming soon</b>
              </div>
              <img src={Img5} alt="" />
              <p>Wimbeldon Tennis</p>
            </div>
            <div className="event">
              <div className="coming">
                <div>
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M32.0002 58.6667C46.7278 58.6667 58.6668 46.7276 58.6668 32C58.6668 17.2724 46.7278 5.33334 32.0002 5.33334C17.2726 5.33334 5.3335 17.2724 5.3335 32C5.3335 46.7276 17.2726 58.6667 32.0002 58.6667Z"
                      stroke="#5B9936"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M32 16V32L42.6667 37.3333"
                      stroke="#5B9936"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <b>Coming soon</b>
              </div>
              <img src={Img4} alt="" />
              <p>Cricket World Cup</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Availability;
