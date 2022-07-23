import React, { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import Close from "./Close";
import "./Forgetpassword.css";
import axios from "axios";
import Alert from "@mui/material/Alert";
import Getotp from "./Getotp";
const Forgetpassword = () => {
  const navigate =useNavigate();
  const [credentials, setCredentials] = useState({
    number: "",
    otp: "",
    password: "",
  });
  const [successful, setsuccessful] = useState(false);
  const [invalidotp, setinvalidotp] = useState(false);
  const success = "success";
  const warning = "warning";
  const { number, password, otp } = credentials;
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "https://www.admin.mtgrooups.in/api/changeForgetPassword",
      {
        mobile_no: number,
        otp : otp,
        password : password
      }
    );
    if (response.data.status === true) {
      setsuccessful(true);
      setTimeout(() => {
        setsuccessful(false);
        navigate("/login");
      }, 2000);
    }
    if (response.data.status === false) {
      setinvalidotp(true);
      setTimeout(() => {
        setinvalidotp(false);
      }, 2000);
    }

    console.log("registe data", number, response);
  
    console.log("registe data", number, password, otp);
  };
  return (
    <>
      <Close  title={"Reset Password"}/>
      <div className="pad-div">
        <div className="forget-div">
          <div>
          {successful || invalidotp ? (
        <Alert variant="filled" severity={successful ? success : warning}>
          {successful
            ? "Password Changed Successfully"
            : "Enter valid otp"}
        </Alert>
      ) : (
        ""
      )}
            <Getotp />
            <form onSubmit={handleSubmit}>
              <div className="for-input-div">
                <input
                  type="text"
                  onChange={onChange}
                  value={number}
                  name="number"
                  placeholder="Phone number"
                />
              </div>
              <div className="for-input-div">
                <input
                  type="text"
                  onChange={onChange}
                  value={otp}
                  name="otp"
                  placeholder="Please enter the otp"
                />
              </div>
              <div className="for-input-div">
                <input
                  type="password"
                  onChange={onChange}
                  value={password}
                  name="password"
                  placeholder="Login password"
                />
              </div>
              <div className="for-input-div">
                <button>Reset</button>
              </div>
            </form>
          </div>
          <div className="reg-div1">
            <Link className="forget-pass" to="/">
              Already have an account, log in
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forgetpassword;
