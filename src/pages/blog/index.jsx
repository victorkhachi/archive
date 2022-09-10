import React, { useContext } from "react";
import Socials from "../../components/socials";
import { appContext } from "../../context/appContext";
import Img from '../../img/article.png'
import "./index.scss";

function Blog(props) {
  const { headerHeight } = useContext(appContext);

  return (
    <div className="home blog">
      <div className="wrap">
        <div
          className="hero"
          style={{
            minHeight: `calc(100vh - ${headerHeight}px)`,
          }}
        >
          <div className="tbab">
            <address>6:45 AM Today</address>
            <h2>THE BOYS ARE BACK!</h2>
            <p>
              Orci, ipsum, ut semper donec rhoncus. At sit placerat non, congue
              risus at eget. Vel vitae nibh morbi consequat risus, porttitor sed
              urna. Ut massa eget.
            </p>
            <button>Read Article</button>
          </div>

          <Socials />
        </div>
        <div className="daily_news">
        <h2>Daily News</h2>
        <div className="news">
          <div className="headline">
            <div className="img">
                <img src={Img} alt="" />
            </div>
            <div className="write_up">
              <h4>Lorem ipsum dolor sit.</h4>
              <p>
                Donec lacus, non facilisi pretium nec egestas. Sit suspendisse
                justo vulputate odio cursus felis bibendum sed vel. Enim
                suspendisse sit amet dapibus ultrices sit arcu. Hendrerit libero
                sagittis sagittis eget urna tellus.
              </p>
              <span>Read more</span>
            </div>
          </div>
          <div className="headline">
            <div className="img">
                <img src={Img} alt="" />
            </div>
            <div className="write_up">
              <h4>Lorem ipsum dolor sit.</h4>
              <p>
                Donec lacus, non facilisi pretium nec egestas. Sit suspendisse
                justo vulputate odio cursus felis bibendum sed vel. Enim
                suspendisse sit amet dapibus ultrices sit arcu. Hendrerit libero
                sagittis sagittis eget urna tellus.
              </p>
              <span>Read more</span>
            </div>
          </div>
          <div className="headline">
            <div className="img">
                <img src={Img} alt="" />
            </div>
            <div className="write_up">
              <h4>Lorem ipsum dolor sit.</h4>
              <p>
                Donec lacus, non facilisi pretium nec egestas. Sit suspendisse
                justo vulputate odio cursus felis bibendum sed vel. Enim
                suspendisse sit amet dapibus ultrices sit arcu. Hendrerit libero
                sagittis sagittis eget urna tellus.
              </p>
              <span>Read more</span>
            </div>
          </div>
          <div className="headline">
            <div className="img">
                <img src={Img} alt="" />
            </div>
            <div className="write_up">
              <h4>Lorem ipsum dolor sit.</h4>
              <p>
                Donec lacus, non facilisi pretium nec egestas. Sit suspendisse
                justo vulputate odio cursus felis bibendum sed vel. Enim
                suspendisse sit amet dapibus ultrices sit arcu. Hendrerit libero
                sagittis sagittis eget urna tellus.
              </p>
              <span>Read more</span>
            </div>
          </div>
          <div className="headline">
            <div className="img">
                <img src={Img} alt="" />
            </div>
            <div className="write_up">
              <h4>Lorem ipsum dolor sit.</h4>
              <p>
                Donec lacus, non facilisi pretium nec egestas. Sit suspendisse
                justo vulputate odio cursus felis bibendum sed vel. Enim
                suspendisse sit amet dapibus ultrices sit arcu. Hendrerit libero
                sagittis sagittis eget urna tellus.
              </p>
              <span>Read more</span>
            </div>
          </div>
          <div className="headline">
            <div className="img">
                <img src={Img} alt="" />
            </div>
            <div className="write_up">
              <h4>Lorem ipsum dolor sit.</h4>
              <p>
                Donec lacus, non facilisi pretium nec egestas. Sit suspendisse
                justo vulputate odio cursus felis bibendum sed vel. Enim
                suspendisse sit amet dapibus ultrices sit arcu. Hendrerit libero
                sagittis sagittis eget urna tellus.
              </p>
              <span>Read more</span>
            </div>
          </div>
        </div>
        <p >See more</p>
      </div>
      </div>
     
    </div>
  );
}

export default Blog;
