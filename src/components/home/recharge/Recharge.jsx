import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@material-ui/icons/Close";
import "./Recharge.css";
import Adminbankdel from "./Adminbankdel";
const Recharge = () => {
  const navigate = useNavigate();
  const [amout, setamout] = useState("");
  const [showadminbankdel, setshowadminbankdel] = useState(false);

  const submitamount = () => {
    setshowadminbankdel(true)

  };
  return (
    <>
      <div className="close-div7">
        <CloseIcon
          style={{ color: "white" }}
          onClick={() => navigate("/home")}
        />
        <div className="title-div7">
          <p>Recharge</p>
        </div>
      </div>
      {showadminbankdel && <Adminbankdel amout={amout} />}
      {!showadminbankdel && (
        <>
          <div className="main-rech">
            <div>
              <p>Enter amount:</p>
              <h2>
                <span className="red-p">₹</span>Amount
              </h2>
              <p className="red-p">
                1: Fill in The callback UTR correctly , and the account will be
                credited within 1 minute.
              </p>
              <p span className="red-p">
                2: If you forget ti fill in the UTR , please contact the online
                customer service in time yo help you solve the problem of the
                safe arrial of funds
              </p>
            </div>
            <div className="rupe-div">
              <button onClick={() => setamout("1000")}>1000</button>
              <button onClick={() => setamout("1000")}>3000</button>
              <button onClick={() => setamout("1000")}>65000</button>
              <button onClick={() => setamout("1000")}>15000</button>
            </div>
            <div className="rupe-div">
              <button onClick={() => setamout("1000")}>50000</button>
              <button onClick={() => setamout("1000")}>100000</button>
              <button onClick={() => setamout("1000")}>300000</button>
              <button onClick={() => setamout("1000")}>50000</button>
            </div>
          </div>

          <div className="confirm-btn-div">
            <button onClick={submitamount}>Confirm recharge</button>
          </div>
        </>
      )}
    </>
  );
};

export default Recharge;
