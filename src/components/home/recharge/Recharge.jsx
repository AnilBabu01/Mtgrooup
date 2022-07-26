import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@material-ui/icons/Close";
import axios from "axios";
import "./Recharge.css";
import Adminbankdel from "./Adminbankdel";
const Recharge = () => {
  const navigate = useNavigate();
  const [amout, setamout] = useState("");
  const [showadminbankdel, setshowadminbankdel] = useState(false);
  const [transactionid, settransactionid] = useState("");
  axios.defaults.headers.post["Authorization"] = `Bearer ${localStorage.getItem(
    "tokenauth"
  )}`;
  const token = localStorage.getItem("tokenauth");
  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, []);

  const onchnge = (e) => {
    setamout(e.target.value);
  };
  const submitamount = async () => {
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/api/addAmount`,
      {
        amount: amout,
      }
    );
    if (response.data.status === true) {
      setshowadminbankdel(true);
      settransactionid(response.data.transaction_id);
    }

    console.log("add amount", response.data.status);
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
      {showadminbankdel && <Adminbankdel transactionid={transactionid} />}
      {!showadminbankdel && (
        <>
          <div className="main-rech">
            <div>
              <p>Enter amount:</p>
               <div className="cen-am">
              
              <h2>
                {" "}
                <span className="red-p">₹</span>
              </h2>
              <input
                className="am-input"
                type="text"
                value={amout}
                onChange={onchnge}
                name="amout"
              />

              <h2>
                <span className="left-amount">Amount</span>
              </h2>

               </div>
             
              <p className="red-p">
                1: Fill in The callback UTR correctly , and the account will be
                credited within 1 minute.
              </p>
              <p span className="red-p">
                2: If you forget ti fill in the UTR , please contact the online
                customer service in time to help you solve the problem of the
                safe arrival of funds
              </p>
            </div>
            <div className="rupe-div">
              <button onClick={() => setamout("1000")}>1000</button>
              <button onClick={() => setamout("3000")}>3000</button>
              <button onClick={() => setamout("65000")}>65000</button>
              <button onClick={() => setamout("15000")}>15000</button>
            </div>
            <div className="rupe-div">
              <button onClick={() => setamout("50000")}>50000</button>
              <button onClick={() => setamout("100000")}>100000</button>
              <button onClick={() => setamout("300000")}>300000</button>
              <button onClick={() => setamout("50000")}>50000</button>
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
