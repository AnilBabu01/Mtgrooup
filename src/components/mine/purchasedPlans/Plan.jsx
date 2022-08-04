import React from "react";
import jew1 from "../../images/jew4.jfif";
import "./Myplans.css";
const Plan = ({
  title,
  revenuecycle,
  dailyincome,
  amountReceived,
  timeLeft,
  img,
  inputcost,
}) => {
  return (
    <>
      <div className="plan-com-div">
        <div className="plan-img-div10">
          <img src={img} alt="jew1" />
        </div>
        <div className="plan-text-div10">
          <h2>
            {title ? title : "No Title"}
            <span className="plan-text-div-inber"></span>
          </h2>
          <p>
            Input cost:{" "}
            <span className="plan-text-div-inber">
              ₹{inputcost ? inputcost : "0"}
            </span>
          </p>
          <p>
            Daily income :{" "}
            <span className="plan-text-div-inber">
              ₹{dailyincome ? dailyincome : "0"}
            </span>
          </p>
          <p>
            Time left :{" "}
            <span className="plan-text-div-inber">
              {timeLeft ? timeLeft : "0"} days
            </span>
          </p>
          <p>
            Total revenue :{" "}
            <span className="plan-text-div-inber">
              ₹{revenuecycle ? revenuecycle : "0"}
            </span>
          </p>
          <p>
            Amount recieved :{" "}
            <span className="plan-text-div-inber">
              ₹{amountReceived ? amountReceived : "0"}
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Plan;
