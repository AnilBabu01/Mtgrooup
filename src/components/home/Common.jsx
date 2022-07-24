import React from "react";
import "./Common.css";
const Common = ({img,rupee,dailyincome, revenuecycle,totalrevenue}) => {
  return (
    <>
      <div className="plan-com-div">
        <div className="plan-img-div">
          <img src={img} alt="jew1" />
        </div>
        <div className="plan-text-div">
          <h2>Commoditly investment No .1</h2>
          <p className="plan-text-div-inber">Limit 1 time</p>
          <p>Input Costs : <span className="plan-text-div-inber">₹{rupee}</span></p>
          <p>Daily Icome : <span className="plan-text-div-inber">₹{dailyincome}</span></p>
          <p>Revenue cycle : <span className="plan-text-div-inber">{revenuecycle} day</span></p>
          <p>Total Revenue : <span className="plan-text-div-inber">₹{totalrevenue}</span></p>
        </div>
      </div>
    </>
  );
};

export default Common;
