import React, { useState } from "react";
import axios from "axios";
import Alert from "@mui/material/Alert";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./Getotp.css";
const Getotp = () => {
  const [credentials, setCredentials] = useState({
    number: "",
  });
  const [successful, setsuccessful] = useState(false);
  const [invalidno, setinvalidno] = useState(false)
  const [showprocess, setshowprocess] = useState(false);
  const success = "success";
  const warning = "warning";
  const { number } = credentials;
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setshowprocess(true)
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
        setshowprocess(false)
      }, 2000);
    }
    if (response.data.status === false) {
      setinvalidno(true);
      setTimeout(() => {
        setinvalidno(false);
        setshowprocess(false)
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
          <button>
          {showprocess ? (
                    <CircularProgress
                      style={{ width: "18px", height: "18px" }}
                    />
                  ) : (
                    "Otp"
                  )}
            </button>
        </div>
      </form>
    </>
  );
};

export default Getotp;
