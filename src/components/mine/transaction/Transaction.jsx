import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@material-ui/icons/Close";
import "./Transaction.css";
import Transactiontap from "./Transactiontap";
const Transaction = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("tokenauth");
  useEffect(() => {
    
    if (!token) {
      navigate("/");
    }
  }, [])
  
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
