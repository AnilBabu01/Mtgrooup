import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@material-ui/icons/Close";
import axios from "axios";
import Alert from "@mui/material/Alert";

import CircularProgress from "@material-ui/core/CircularProgress";
import "./Mybank.css";
import BottomNavBar from "../../bottomnavbar/BottomNavbar";

const Mybank = () => {
  const navigate = useNavigate();
 
  const [bankidd, setbankidd] = useState("");
  const [showprocess, setshowprocess] = useState(false);
  const token = localStorage.getItem("tokenauth");
  const [message, setmessage] = useState("");
  const [runmore, setrunmore] = useState(false)
  const success = "success";
  const [credentials, setCredentials] = useState({
    name: "",
    number: "",
    bankno: "",
    bankname: "",
    ifsc: "",
    withdrawpassword: "",
  });
  const { number, bankno, bankname, ifsc, withdrawpassword, name } =
    credentials;
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  axios.defaults.headers.post["Authorization"] = `Bearer ${localStorage.getItem(
    "tokenauth"
  )}`;
  axios.defaults.headers.get["Authorization"] = `Bearer ${localStorage.getItem(
    "tokenauth"
  )}`;
  const logout = () => {
   
    localStorage.removeItem("tokenauth");
    setTimeout(() => {
    
      navigate("/login");
    }, 1000);
  };
  const bankid = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/api/bank`
    );
    if(response.status===401){
      logout();
    }
    setrunmore(true)
    setbankidd(response.data.data[0]);

    console.log(response.data.data[0])
     
    
};
const fill =()=>{
  
  setCredentials({
    name: bankidd.name,
    number: bankidd.phone_no,
    bankno: bankidd.account_no,
    bankname: bankidd.bank_name,
    ifsc: bankidd.ifsc_code,
   
   
  })
}


console.log("bank",bankidd.account_no)
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
    bankid();
    fill();
  }, [runmore]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setshowprocess(true);
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/api/addBank`,
      {
        withdrawl_id: bankidd.id,
        withdrawl_password: withdrawpassword,
        phone_no: number,
        ifsc_code: ifsc,
        name: name,
        account_no: bankno,
        bank_name: bankname,
      }
    );

    if (response.data.status === true) {
      setmessage(response.data.msg);
      setTimeout(() => {
        setmessage("");
        setshowprocess(false);
        navigate("/mine");
      }, 2000);
    }
    if (response.data.status === false) {
      setmessage(response.data.msg);
      setTimeout(() => {
        setmessage("");
        setshowprocess(false);
      }, 2000);
    }

    console.log(
      "change password data",

      response
    );
  };
  return (
    <>
      <div className="close-div6">
        <CloseIcon
          style={{ color: "white" }}
          onClick={() => navigate("/mine")}
        />
        <div className="title-div12">
          <p>My Bank</p>
        </div>
      </div>
      <div className="pad-div">
        {message && (
          <Alert variant="filled" severity={success}>
            {message}
          </Alert>
        )}
        <div className="forget-div">
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
              <button style={{ backgroundColor: "rgb(137,87,229)" }}>
                {showprocess ? (
                  <CircularProgress style={{ width: "21px", height: "21px" }} />
                ) : (
                  "Update"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      <BottomNavBar name="mybank" />
    </>
  );
};

export default Mybank;
