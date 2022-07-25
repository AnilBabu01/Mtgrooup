import React from "react";
import axios from "axios";
import "./Common.css";
const Common = ({
  img,
  rupee,
  dailyincome,
  revenuecycle,
  totalrevenue,
  id,
}) => {
    
  axios.defaults.headers.post["Authorization"] = `Bearer ${localStorage.getItem(
    "tokenauth"
  )}`;

  const buy =async(id)=>{

    const response = await axios.post("https://www.admin.mtgrooups.in/api/purchaseProduct",{
      plan_id:id
    });

    console.log(response)
  }

  const getid = (id) => {
    console.log("buy id", id);

    var answer = window.confirm("Do you want to buy this plan");
    if (answer) {
      //some code
      buy(id);
      console.log(answer);
    } else {
      //some code
      console.log(answer);
    }
  };
  return (
    <>
      <div
        className="plan-com-div"
        onClick={() => {
          getid(id);
        }}
      >
        <div className="plan-img-div">
          <img src={img} alt="jew1" />
        </div>
        <div className="plan-text-div">
          <h2>Commoditly investment No .1</h2>
          <p className="plan-text-div-inber">Limit 1 time</p>
          <p>
            Input Costs : <span className="plan-text-div-inber">₹{rupee}</span>
          </p>
          <p>
            Daily Icome :{" "}
            <span className="plan-text-div-inber">₹{dailyincome}</span>
          </p>
          <p>
            Revenue cycle :{" "}
            <span className="plan-text-div-inber">{revenuecycle} day</span>
          </p>
          <p>
            Total Revenue :{" "}
            <span className="plan-text-div-inber">₹{totalrevenue}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Common;
