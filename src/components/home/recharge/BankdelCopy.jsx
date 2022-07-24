import React, { useContext,useEffect } from "react";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import { userinfocontext } from "../../context/Userinfo";
const BankdelCopy = () => {
  const context = useContext(userinfocontext);
  const { user, getuserinfo } = context;

  useEffect(() => {
    getuserinfo();
  }, []);

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
      <p> 1 Copy And Send The Money</p>
      <p>Please transfer 5000 Exactly To The Below Bank Details</p>
      <div>
        <div className="icon-div-recharge-alert"></div>
        <p className="title-p">Bank Name</p>
        <div className="icon-div-recharge-main">
          <input id="bank1" type="text" value={user?user.admin.bank_name:""} />{" "}
          <div onClick={copytext1} className="icon-div-recharge">
            {" "}
            <FileCopyIcon /> Copy
          </div>
        </div>
        <p className="title-p">Account Holder Name</p>
        <div className="icon-div-recharge-main">
          <input id="bank2" type="text"  value={user?user.admin.account_holder_name:""} />{" "}
          <div onClick={copytext2} className="icon-div-recharge">
            {" "}
            <FileCopyIcon /> Copy
          </div>
        </div>
        <p className="title-p">Account Number</p>
        <div className="icon-div-recharge-main">
          <input id="bank3" type="text" value={user?user.admin.account_no:""} />{" "}
          <div onClick={copytext3} className="icon-div-recharge">
            {" "}
            <FileCopyIcon /> Copy
          </div>
        </div>
        <p className="title-p">Account Type</p>
        <div className="icon-div-recharge-main">
          <input id="bank4" type="text" value={user?user.admin.account_type:""}  />{" "}
          <div onClick={copytext4} className="icon-div-recharge">
            {" "}
            <FileCopyIcon /> Copy
          </div>
        </div>
        <p className="title-p">IFSC Code</p>
        <div className="icon-div-recharge-main">
          <input id="bank5" type="text" value={user?user.admin.ifsc_code:""} />{" "}
          <div onClick={copytext5} className="icon-div-recharge">
            {" "}
            <FileCopyIcon /> Copy
          </div>
        </div>
        <p className="title-p">Branch</p>
        <div className="icon-div-recharge-main">
          <input id="bank6" type="text" value={user?user.admin.branch:""} />{" "}
          <div onClick={copytext6} className="icon-div-recharge">
            {" "}
            <FileCopyIcon /> Copy
          </div>
        </div>
      </div>
    </>
  );
};

export default BankdelCopy;
