import React, { useState } from "react";
import { Link } from "react-router-dom";
import Close from "./Close";
import "./Forgetpassword.css";
import Getotp from "./Getotp";
const Forgetpassword = () => {
  const [credentials, setCredentials] = useState({
    number: "",
    otp: "",
    password: "",
  });

  const { number, password, otp } = credentials;
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { number, password, otp } = credentials;
    console.log("registe data", number, password, otp);
  };
  return (
    <>
      <Close  title={"Find Password"}/>
      <div className="pad-div">
        <div className="forget-div">
          <div>
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
                  type="text"
                  onChange={onChange}
                  value={password}
                  name="password"
                  placeholder="Login password"
                />
              </div>
              <div className="for-input-div">
                <button>Confirm</button>
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
