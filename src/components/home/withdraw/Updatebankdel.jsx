import React, { useState } from "react";
import axios from "axios";
import Alert from "@mui/material/Alert";
const Updatebankdel = ({setcloseupdate}) => {
  const [credentials, setCredentials] = useState({
    number: "",
    bankno: "",
    bankname: "",
    ifsc: "",
    withdrawpassword: "",
    name: "",
  });
  const [successful, setsuccessful] = useState(false);
  const [userallready, setuserallready] = useState(false);
  const [exist, setexist] = useState(false);
  const success = "success";
  const warning = "warning";
  const { number, bankno, bankname, ifsc, withdrawpassword, name } =
    credentials;
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  axios.defaults.headers.post["Authorization"] = `Bearer ${localStorage.getItem(
    "tokenauth"
  )}`;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "https://www.admin.mtgrooups.in/api/addBank",
      {
        withdrawl_password: withdrawpassword,
        phone_no: number,
        ifsc_code: ifsc,
        name: name,
        account_no: bankno,
        bank_name: bankname,
      }
    );
    if (response.data.status === true) {
     
     
      setsuccessful(true);
      setTimeout(() => {
        setsuccessful(false);
        setcloseupdate(true)
       
      }, 2000);
    }
    if (
      response.data.status === false &&
      response.data.msg === "Enter Valid Withdrawl Password!!"
    ) {
      setuserallready(true);
      setTimeout(() => {
        setuserallready(false);
      }, 2000);
    }
    if (
      response.data.status === false &&
      response.data.msg === "You can Add Only one withdraw Account!!"
    ) {
      setexist(true);
      setTimeout(() => {
        setcloseupdate(true)
        setexist(false);
      }, 2000);
    }

    console.log(
      "add bank data",
      number,
      bankno,
      bankname,
      ifsc,
      withdrawpassword,
      name,
      response
    );
  };

  return (
    <>
      {successful || userallready ? (
        <Alert variant="filled" severity={successful ? success : warning}>
          {successful
            ? "Bank details has been Updated"
            : "Enter valif withdraw password "}
        </Alert>
      ) : (
        ""
      )}
      {exist ? (
        <Alert variant="filled" severity={warning}>
          You can Add Only one withdraw Account
        </Alert>
      ) : (
        ""
      )}
      <form onSubmit={handleSubmit}>
        <div className="for-input-div">
          <input
            type="text"
            onChange={onChange}
            value={name}
            name="name"
            placeholder="Name"
          />
        </div>
        <div className="for-input-div">
          <input
            type="text"
            onChange={onChange}
            value={number}
            name="number"
            placeholder="Phone Number"
          />
        </div>
        <div className="for-input-div">
          <input
            type="text"
            onChange={onChange}
            value={bankno}
            name="bankno"
            placeholder="Account No"
          />
        </div>
        <div className="for-input-div">
          <input
            type="text"
            onChange={onChange}
            value={bankname}
            name="bankname"
            placeholder="Bank Name"
          />
        </div>
        <div className="for-input-div">
          <input
            type="text"
            onChange={onChange}
            value={ifsc}
            name="ifsc"
            placeholder="IFSC"
          />
        </div>
        <div className="for-input-div">
          <input
            type="password"
            onChange={onChange}
            value={withdrawpassword}
            name="withdrawpassword"
            placeholder="Withdraw Password"
          />
        </div>
        <div className="for-input-div">
          <button>Update</button>
        </div>
      </form>
    </>
  );
};

export default Updatebankdel;
