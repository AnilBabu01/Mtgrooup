import React, { useState } from "react";
import axios from "axios";
import Alert from "@mui/material/Alert";
import {useNavigate} from"react-router-dom"
const Updatebankdel = ({ setcloseupdate }) => {
  const navigate =useNavigate();
  const [credentials, setCredentials] = useState({
    number: "",
    bankno: "",
    bankname: "",
    ifsc: "",
    withdrawpassword: "",
    name: "",
  });

  const [message, setmessage] = useState("");
  const success = "success";
  const { number, bankno, bankname, ifsc, withdrawpassword, name } =
    credentials;
    const logout = () => {
   
      localStorage.removeItem("tokenauth");
      setTimeout(() => {
      
        navigate("/login");
      }, 1000);
    };
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
    if(response.status===401){
      logout();
    }
    if (response.data.status === true) {
      setmessage(response.data.msg);
      setTimeout(() => {
        setcloseupdate(true);
        setmessage("");
      }, 2000);
    }
    if (response.data.status === false) {
      setmessage(response.data.msg);
      setTimeout(() => {
        setcloseupdate(true);
        setmessage("");
      }, 2000);
    }
  };

  return (
    <>
      {message && (
        <Alert variant="filled" severity={success}>
          {message}
        </Alert>
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
