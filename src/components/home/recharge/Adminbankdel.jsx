import React from "react";
import "./Adminbankdel.css";
import FileCopyIcon from "@material-ui/icons/FileCopy";
const Adminbankdel = ({ amout }) => {
  return (
    <>
      <div className="main-step-div">
        <div className="step1-div">
          <p> 1 Copy And Send The Money</p>
          <p>Please transfer 5000 Exactly To The Below Bank Details</p>
          <div>
            <p className="title-p">Bank Name</p>
             <div className="icon-div-recharge-main">
              <input type="text" value="PUNJAB NATIONAL BANK" />{" "}
              <div className="icon-div-recharge">
                {" "}
                <FileCopyIcon /> Copy Code
              </div>
            </div>
            <p className="title-p">Account Holder Name</p>
             <div className="icon-div-recharge-main">
              <input type="text"  value="MR ANIL BABU"/>{" "}
              <div className="icon-div-recharge">
                {" "}
                <FileCopyIcon /> Copy Code
              </div>
            </div>
            <p className="title-p">Account Number</p>
             <div className="icon-div-recharge-main">
              <input type="text"  value="00000255555"/>{" "}
              <div className="icon-div-recharge">
                {" "}
                <FileCopyIcon /> Copy Code
              </div>
            </div>
            <p className="title-p">Account Type</p>
             <div className="icon-div-recharge-main">
              <input type="text" value="Current" />{" "}
              <div className="icon-div-recharge">
                {" "}
                <FileCopyIcon /> Copy Code
              </div>
            </div>
            <p className="title-p">IFSC Code</p>
             <div className="icon-div-recharge-main">
              <input type="text" value="Punbd444" />{" "}
              <div className="icon-div-recharge">
                {" "}
                <FileCopyIcon /> Copy Code
              </div>
            </div>
            <p className="title-p">Branch</p>
             <div className="icon-div-recharge-main">
              <input type="text" value="ABOHAR"/>{" "}
              <div className="icon-div-recharge">
                {" "}
                <FileCopyIcon /> Copy Code
              </div>
            </div>
          </div>
            <div>
                <h2>Transaction Details</h2>
                <p>Enter UTR Number</p>
                 <input className="utr-input" type="text"/>
                
            </div>
            <button className="rec-brn">Submit</button>
        </div>
      </div>
    </>
  );
};

export default Adminbankdel;
