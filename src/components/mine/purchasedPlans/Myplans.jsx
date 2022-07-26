import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@material-ui/icons/Close";
import axios from "axios";
import Plan from "./Plan";
import "./Myplans.css";
const Myplans = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("tokenauth");
  const [plans, setplans] = useState("");
  axios.defaults.headers.get["Authorization"] = `Bearer ${localStorage.getItem(
    "tokenauth"
  )}`;

  const getplans = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/api/purchasedPlan`
    );
    setplans(response.data.data);
    console.log(response.data.data);
  };
  useEffect(() => {
    if (!token) {
      navigate("/");
    }

    getplans();
  }, []);

  return (
    <>
      <div className="close-div10">
        <CloseIcon
          style={{ color: "white" }}
          onClick={() => navigate("/mine")}
        />
        <div className="title-div10">
          <p>My plans</p>
        </div>
      </div>

      <div className="plan-div10">
        {plans &&
          plans.map((item) => {
            return (
              <>
                <div key={item.id}>
                  <Plan
                    title={item.title}
                    revenuecycle={item.revenue_cycle}
                    dailyincome={item.daily_income}
                    amountReceived={item.amountReceived}
                    timeLeft={item.timeLeft}
                    inputcost={item.input_cost}
                    img={item.image}
                  />
                </div>
              </>
            );
          })}

       
      </div>
      {plans && (
          <>
            {plans.length === 0 && (
              <>
                <div className="not-found-div">
                  <h2>Record Not Found</h2>
                </div>
              </>
            )}
          </>
        )}
    </>
  );
};

export default Myplans;
