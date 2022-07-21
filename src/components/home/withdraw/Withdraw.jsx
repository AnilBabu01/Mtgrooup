import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import { useNavigate } from "react-router-dom";
import "./Withdraw.css";
const Withdraw = () => {
  const navigate = useNavigate();
  const [num, setnum] = useState("75057##88");
  return (
    <>
      <div className="close-div">
        <CloseIcon
          style={{ color: "white" }}
          onClick={() => navigate("/home")}
        />
        <div className="title-div">
          <p>Withdraw</p>
        </div>
      </div>

      <div className="recharg-div-home1">
        <div className="withdrawoptins1">
          <div className="tax-div">
            <p>Tax 10%</p>
          </div>
          <div className="am-div">
            <p>₹ </p>
            <h2>Amount</h2>
          </div>
          <div className="bal-div">
            <p>Balance: ₹ 0.25</p>
            <p className="with-p">Withdraw All</p>
          </div>
        </div>
      </div>

      <div className="recharg-div-home1">
        <div className="withdrawoptins1">
          <div className="bank-del">
            <p>Phone Number:</p>
            <input type="text" value={num} />
          </div>
          <div className="bank-del">
            <p>Bank account:</p>
            <input type="text" value={num} />
          </div>
          <div className="bank-del">
            <p>Full name:</p>
            <input type="text" value={num} />
          </div>
          <div className="bank-del">
            <p>IFSC:</p>
            <input type="text" value={num} />
          </div>
          <div className="bank-del">
            <p>Withdraw password</p>
            <input type="password" value="" />
          </div>
        </div>
      </div>
      <div className="recharg-div-home1">
        <div className="withdrawoptins1">
          <div className="withdraw-div">
            <p>
              •The withdraw and arrival time is subject to the real-time
              processing time of the local bank, and the normal arrival time is
              10 minutes to 5 hours.{" "}
            </p>
          </div>
          <div className="withdraw-div">
            <p>
              •The minimum withdraw amount per time is not less than Rs 200.
            </p>
          </div>
          <div className="withdraw-div">
            <p>•Withdrawal time is. 08:40-20:40 every day</p>
          </div>
        </div>
      </div>
      
      <div className="with-div">
        <button>Please pay 20% withdraw tax first</button>
      </div>

    </>
  );
};

export default Withdraw;
