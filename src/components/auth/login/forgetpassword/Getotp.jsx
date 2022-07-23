import React, { useState } from "react";
import axios from "axios";
import Alert from "@mui/material/Alert";
import "./Getotp.css";
const Getotp = () => {
  const [credentials, setCredentials] = useState({
    number: "",
  });
  const [successful, setsuccessful] = useState(false);
  const [invalidno, setinvalidno] = useState(false)
  const success = "success";
  const warning = "warning";
  const { number } = credentials;
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post(
      "https://www.admin.mtgrooups.in/api/sendForgetPasswordOtp",
      {
        mobile_no: number,
      }
    );
    if (response.data.status === true) {
      setsuccessful(true);
      setTimeout(() => {
        setsuccessful(false);
      }, 2000);
    }
    if (response.data.status === false) {
      setinvalidno(true);
      setTimeout(() => {
        setinvalidno(false);
      }, 2000);
    }

    console.log("registe data", number, response);
  };
  return (
    <>
      {successful || invalidno ? (
        <Alert variant="filled" severity={successful ? success : warning}>
          {successful
            ? "OTP Send Successfully!!"
            : "Enter Registered Mobile No"}
        </Alert>
      ) : (
        ""
      )}
      <form onSubmit={handleSubmit}>
        <div className="for-input-div1">
          <input
            onChange={onChange}
            value={number}
            name="number"
            type="text"
            placeholder="Phone number"
          />
          <button>Otp</button>
        </div>
      </form>
    </>
  );
};

export default Getotp;
