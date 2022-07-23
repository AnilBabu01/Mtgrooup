import React from "react";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@material-ui/icons/Close";
import "./Transaction.css";
import Transactiontap from "./Transactiontap";
const Transaction = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="close-div5">
        <CloseIcon
          style={{ color: "white" }}
          onClick={() => navigate("/mine")}
        />
        <div className="title-div5">
          <p>Account record</p>
        </div>
      </div>

      <Transactiontap />
    </>
  );
};

export default Transaction;
