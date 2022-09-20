import { Link, useLocation } from "react-router-dom";
import cx from "classnames";
import "./style.scss";
import { useContext } from "react";
import { appContext } from "../../context/appContext";
import { useState } from "react";

const navLinks = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "about",
    path: "/about",
  },
  {
    name: "guides",
    path: "/guides",
  },
  {
    name: "availability",
    path: "/availability",
  },
  // {
  //   name: "blog",
  //   path: "/blog",
  // },
];

const Header = () => {
  const { setHeaderHeight } = useContext(appContext);
  const { pathname } = useLocation();
  const [small, setSmall] = useState(true);
  const [showNav,setNav]=useState(false)
  return (
    <>
      <div onClick={()=>setNav(!showNav)} style={{left:`${showNav?'0':'-100%'}`}} className="slide_nav">
        <div onClick={(e)=>e.stopPropagation()} className="content">
          <div className="logo"><h1>Sporty Leisure</h1></div>
          <div className="links">
            {navLinks.map((link, idx) => {
              return (
                <div  className="links" key={idx}>
                  <Link onClick={()=>setNav(!showNav)}  to={link.path} className={pathname.toLowerCase() == link.path.toLowerCase()?'selected':''}>
                    {link.name}

                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 18L15 12L9 6"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="header">
        <div onClick={()=>setNav(!showNav)} className="bars">
          <svg
            width="51"
            height="50"
            viewBox="0 0 51 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_209_647)">
              <path
                d="M0 4H26C37.0457 4 46 12.9543 46 24C46 35.0457 37.0457 44 26 44H0V4Z"
                fill="white"
              />
            </g>
            <line
              x1="17"
              y1="17.3"
              x2="30.8667"
              y2="17.3"
              stroke="white"
              stroke-opacity="0.2"
              stroke-width="1.4"
            />
            <line
              x1="17"
              y1="17.3"
              x2="30.8667"
              y2="17.3"
              stroke="url(#paint0_linear_209_647)"
              stroke-width="1.4"
            />
            <line
              x1="15"
              y1="23.3"
              x2="31"
              y2="23.3"
              stroke="white"
              stroke-opacity="0.2"
              stroke-width="1.4"
            />
            <line
              x1="15"
              y1="23.3"
              x2="31"
              y2="23.3"
              stroke="url(#paint1_linear_209_647)"
              stroke-width="1.4"
            />
            <line
              x1="15"
              y1="29.3"
              x2="31"
              y2="29.3"
              stroke="white"
              stroke-opacity="0.2"
              stroke-width="1.4"
            />
            <line
              x1="15"
              y1="29.3"
              x2="31"
              y2="29.3"
              stroke="url(#paint2_linear_209_647)"
              stroke-width="1.4"
            />
            <defs>
              <filter
                id="filter0_d_209_647"
                x="-4"
                y="0.5"
                width="55"
                height="49"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feMorphology
                  radius="0.5"
                  operator="dilate"
                  in="SourceAlpha"
                  result="effect1_dropShadow_209_647"
                />
                <feOffset dx="0.5" dy="1" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.123822 0 0 0 0 0.207407 0 0 0 0 0.0725926 0 0 0 0.14 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_209_647"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_209_647"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_209_647"
                x1="17"
                y1="18.5"
                x2="30.8667"
                y2="18.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#5B9936" />
                <stop offset="0.5" stop-color="#A0A23F" />
                <stop offset="1" stop-color="#5B9936" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_209_647"
                x1="15"
                y1="24.5"
                x2="31"
                y2="24.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#5B9936" />
                <stop offset="0.5" stop-color="#A0A23F" />
                <stop offset="1" stop-color="#5B9936" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_209_647"
                x1="15"
                y1="30.5"
                x2="31"
                y2="30.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#5B9936" />
                <stop offset="0.5" stop-color="#A0A23F" />
                <stop offset="1" stop-color="#5B9936" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="div">
          <h1 className="logo"> Sporty Liesure</h1>
          <div className="quote">Get quote</div>
        </div>
      </div>

      <header
        ref={(ref) => {
          setHeaderHeight(ref?.clientHeight);
        }}
      >
        <div className="wrap">
          <div className="logo">
            <h1>Sporty Leisure</h1>
          </div>
          <div className="nav-links">
            {navLinks.map((link, idx) => {
              return (
                <div className="links" key={idx}>
                  <Link
                    to={link.path}
                    className={cx({
                      selected:
                        pathname.toLowerCase() === link.path.toLowerCase(),
                    })}
                  >
                    {link.name}
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="quote">Get quote</div>
        </div>
      </header>
    </>
  );
};

export default Header;
