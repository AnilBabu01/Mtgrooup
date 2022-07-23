import React, { useState } from "react";
import "./Adminbankdel.css";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import Alert from "@mui/material/Alert";
const Adminbankdel = ({ amout }) => {
  const [utr, setutr] = useState("");
  const [successful, setsuccessful] = useState(false);
  const success = "success";
  const warning = "warning";
  const onchange = (e) => {
    setutr(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    setsuccessful(true);
    setTimeout(() => {
      setsuccessful(false);
    }, 2000);

    console.log(utr);
  };
  const copytext1 = () => {
    var text = document.getElementById("bank1");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const copytext2 = () => {
    var text = document.getElementById("bank2");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const copytext3 = () => {
    var text = document.getElementById("bank3");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const copytext4 = () => {
    var text = document.getElementById("bank4");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const copytext5 = () => {
    var text = document.getElementById("bank5");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const copytext6 = () => {
    var text = document.getElementById("bank6");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  return (
    <>
      <div className="main-step-div">
        <div className="step1-div">
          <p> 1 Copy And Send The Money</p>
          <p>Please transfer 5000 Exactly To The Below Bank Details</p>
          <div>
            <div className="icon-div-recharge-alert">
              {successful ? (
                <Alert
                  variant="filled"
                  severity={successful ? success : warning}
                >
                  {successful ? "Recharge successfully" : "Please try again "}
                </Alert>
              ) : (
                ""
              )}
            </div>
            <p className="title-p">Bank Name</p>
            <div className="icon-div-recharge-main">
              <input id="bank1" type="text" value="PUNJAB NATIONAL BANK" />{" "}
              <div onClick={copytext1} className="icon-div-recharge">
                {" "}
                <FileCopyIcon /> Copy
              </div>
            </div>
            <p className="title-p">Account Holder Name</p>
            <div className="icon-div-recharge-main">
              <input id="bank2" type="text" value="MR ANIL BABU" />{" "}
              <div onClick={copytext2} className="icon-div-recharge">
                {" "}
                <FileCopyIcon /> Copy
              </div>
            </div>
            <p className="title-p">Account Number</p>
            <div className="icon-div-recharge-main">
              <input id="bank3" type="text" value="00000255555" />{" "}
              <div onClick={copytext3} className="icon-div-recharge">
                {" "}
                <FileCopyIcon /> Copy
              </div>
            </div>
            <p className="title-p">Account Type</p>
            <div className="icon-div-recharge-main">
              <input id="bank4" type="text" value="Current" />{" "}
              <div onClick={copytext4} className="icon-div-recharge">
                {" "}
                <FileCopyIcon /> Copy
              </div>
            </div>
            <p className="title-p">IFSC Code</p>
            <div className="icon-div-recharge-main">
              <input id="bank5" type="text" value="Punbd444" />{" "}
              <div onClick={copytext5} className="icon-div-recharge">
                {" "}
                <FileCopyIcon /> Copy
              </div>
            </div>
            <p className="title-p">Branch</p>
            <div className="icon-div-recharge-main">
              <input id="bank6" type="text" value="ABOHAR" />{" "}
              <div onClick={copytext6} className="icon-div-recharge">
                {" "}
                <FileCopyIcon /> Copy
              </div>
            </div>
          </div>
          <form onSubmit={submit}>
            <div>
              <h2>Transaction Details</h2>
              <p>Enter UTR Number</p>
              <input
                className="utr-input"
                type="text"
                placeholder="UTR Number"
                onChange={onchange}
                value={utr}
                name="utr"
              />
            </div>
            <button className="rec-brn">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Adminbankdel;
