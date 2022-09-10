import React from "react";
import "./index.scss";
import Img from "../../img/event.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Form from "../Forms";

function Availability(props) {
//   const navigate= useNavigate()
const [book,setBook]=useState(false)

  return (
    <div className="home availability">
        {book && <Form click={()=>setBook(!book)}/>}
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
              <button onClick={()=>setBook(!book)}>Book a Trip</button>
              <div className="button">Our packages</div>
            </div>
          </div>
        </div>
        <div className="events">
          <h2>OTHER EVENTS</h2>
          <div className="event_rack">
            <div className="event">
              <img src={Img} alt="" />
              <p>Champions League</p>
            </div>
            <div className="event">
            <img src={Img} alt="" />
            <p>Champions League</p>
            </div>
            <div className="event">
            <img src={Img} alt="" />
            <p>Champions League</p>
            </div>
            <div className="event">
            <img src={Img} alt="" />
            <p>Champions League</p>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Availability;
