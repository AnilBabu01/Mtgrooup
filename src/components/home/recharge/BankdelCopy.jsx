import React, { useContext, useEffect, useState } from "react";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import { userinfocontext } from "../../context/Userinfo";
import { CopyToClipboard } from "react-copy-to-clipboard";
const BankdelCopy = () => {
  const context = useContext(userinfocontext);
  const { user, getuserinfo } = context;
  const [copied1, setcopied1] = useState(false);
  const [copied2, setcopied2] = useState(false);
  const [copied3, setcopied3] = useState(false);
  const [copied4, setcopied4] = useState(false);
  const [copied5, setcopied5] = useState(false);
  const [copied6, setcopied6] = useState(false);
  const [copied7, setcopied7] = useState(false);
  let bankname;
  let holdername;
  let accountno;
  let ifsc;
  let branch;
  let accounttype;
  let upiid;
  if (user) {
    bankname = user.admin.bank_name;
    holdername = user.admin.account_holder_name;
    accountno = user.admin.account_no;
    ifsc = user.admin.branch;
    branch = user.admin.branch;
    accounttype = user.admin.account_type;
    upiid= user.admin.upi_id;
    console.log("user info",user)

  }
  useEffect(() => {
    getuserinfo();
  }, []);

  setTimeout(() => {
    setcopied1(false);
    setcopied2(false);
    setcopied3(false);
    setcopied4(false);
    setcopied5(false);
    setcopied6(false);
    setcopied7(false);
  }, 2000);
 
  return (
    <>
      <p> 1 Copy And Send The Money</p>
      <p>Please transfer 5000 Exactly To The Below Bank Details</p>
      <div>
      <div className="copy-msg">
          <h2 className="title-p">UPI Id</h2>{" "}
          {copied7 ? <p className="copied-p">Copied</p> : null}
        </div>
        <div className="icon-div-recharge-main">
          <input id="bank1" type="text" value={upiid} />{" "}
          <div>
            <CopyToClipboard text={upiid} onCopy={() => setcopied7(true)}>
              <div className="icon-div-recharge">
                {" "}
                <span>
                  {" "}
                  <FileCopyIcon />
                  Copy
                </span>
              </div>
            </CopyToClipboard>
          </div>
        </div>
        <p style={{marginTop:"2px",marginBottom:"2px"}}>------------------------OR---------------------</p>
        <div className="copy-msg">
          <h2 className="title-p">Bank Name</h2>{" "}
          {copied1 ? <p className="copied-p">Copied</p> : null}
        </div>

        <div className="icon-div-recharge-main">
          <input id="bank1" type="text" value={bankname} />{" "}
          <div>
            <CopyToClipboard text={bankname} onCopy={() => setcopied1(true)}>
              <div className="icon-div-recharge">
                {" "}
                <span>
                  {" "}
                  <FileCopyIcon />
                  Copy
                </span>
              </div>
            </CopyToClipboard>
          </div>
        </div>
        <div className="copy-msg">
          <p className="title-p">Account Holder Name</p>{" "}
          {copied2 ? <p className="copied-p">Copied</p> : null}
        </div>

        <div className="icon-div-recharge-main">
          <input id="bank2" type="text" value={holdername} />{" "}
          <div>
            <CopyToClipboard text={holdername} onCopy={() => setcopied2(true)}>
              <div className="icon-div-recharge">
                {" "}
                <span>
                  {" "}
                  <FileCopyIcon />
                  Copy
                </span>
              </div>
            </CopyToClipboard>
          </div>
        </div>
        <div className="copy-msg">
          <p className="title-p">Account Number</p>{" "}
          {copied3 ? <p className="copied-p">Copied</p> : null}
        </div>

        <div className="icon-div-recharge-main">
          <input id="bank3" type="text" value={accountno} />
          <div>
            <CopyToClipboard text={accountno} onCopy={() => setcopied3(true)}>
              <div className="icon-div-recharge">
                {" "}
                <span>
                  {" "}
                  <FileCopyIcon />
                  Copy
                </span>
              </div>
            </CopyToClipboard>
          </div>
        </div>
        <div className="copy-msg">
          <p className="title-p">Account Type</p>{" "}
          {copied4 ? <p className="copied-p">Copied</p> : null}
        </div>

        <div className="icon-div-recharge-main">
          <input id="bank4" type="text" value={accounttype} />{" "}
          <div>
            <CopyToClipboard text={accounttype} onCopy={() => setcopied4(true)}>
              <div className="icon-div-recharge">
                {" "}
                <span>
                  {" "}
                  <FileCopyIcon />
                  Copy
                </span>
              </div>
            </CopyToClipboard>
          </div>
        </div>
        <div className="copy-msg">
          <p className="title-p">IFSC Code</p>{" "}
          {copied5 ? <p className="copied-p">Copied</p> : null}
        </div>

        <div className="icon-div-recharge-main">
          <input id="bank5" type="text" value={ifsc} />{" "}
          <div>
            <CopyToClipboard text={ifsc} onCopy={() => setcopied5(true)}>
              <div className="icon-div-recharge">
                {" "}
                <span>
                  {" "}
                  <FileCopyIcon />
                  Copy
                </span>
              </div>
            </CopyToClipboard>
          </div>
        </div>
        <div className="copy-msg">
          <p className="title-p">Branch</p>{" "}
          {copied6 ? <p className="copied-p">Copied</p> : null}
        </div>

        <div className="icon-div-recharge-main">
          <input id="bank6" type="text" value={branch} />{" "}
          <div>
            <CopyToClipboard text={branch} onCopy={() => setcopied6(true)}>
              <div className="icon-div-recharge">
                {" "}
                <span>
                  {" "}
                  <FileCopyIcon />
                  Copy
                </span>
              </div>
            </CopyToClipboard>
          </div>
        </div>
      </div>
    </>
  );
};

export default BankdelCopy;
