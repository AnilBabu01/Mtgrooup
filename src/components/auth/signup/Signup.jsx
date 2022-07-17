import React, { useState } from "react";
import Logo from "../../images/logo.jpg";
import jewellery from "../../images/jewellery.png";
import { Link } from "react-router-dom";
import Close from '../login/forgetpassword/Close';
import "../login/Login.css";
import "./Signup.css";
const Signup = () => {
  const [credentials, setCredentials] = useState({
    number: "",
    password: "",
    confirmpassword: "",
    withdrawpassword: "",
    invitationcode: "",
  });
  const {
    number,
    password,
    confirmpassword,
    withdrawpassword,
    invitationcode,
  } = credentials;
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      number,
      password,
      confirmpassword,
      withdrawpassword,
      invitationcode,
    } = credentials;
    console.log(
      "registe data",
      number,
      password,
      confirmpassword,
      withdrawpassword,
      invitationcode
    );
  };
  return (
    <>
     <Close title={"Register"}/>
      <div className="main-auth">
        <div>
          <div className="logo-div1">
            <img src={Logo} alt="logo" />
          </div>
          <div className="form-div">
            <form onSubmit={handleSubmit}>
              <div className="input-div1">
                <input
                  onChange={onChange}
                  name="number"
                  value={number}
                  type="text"
                  placeholder="Phone Number"
                />
              </div>

              <div className="input-div1">
                <img src={jewellery} alt="logo" />
                <input
                  onChange={onChange}
                  name="password"
                  value={password}
                  type="text"
                  placeholder="Please enter login password"
                />
              </div>
              <div className="input-div1">
                <img src={jewellery} alt="logo" />
                <input
                  onChange={onChange}
                  name="confirmpassword"
                  value={confirmpassword}
                  type="text"
                  placeholder="Please enter confirm password"
                />
              </div>
              <div className="input-div1">
                <img src={jewellery} alt="logo" />
                <input
                  onChange={onChange}
                  name="withdrawpassword"
                  value={withdrawpassword}
                  type="text"
                  placeholder="Please enter withdraw password"
                />
              </div>
              <div className="input-div1">
                <img src={jewellery} alt="logo" />
                <input
                  onChange={onChange}
                  name="invitationcode"
                  value={invitationcode}
                  type="text"
                  placeholder="Invatitation code"
                />
              </div>
              <div className="btn-div">
                <button>Register</button>
              </div>
            </form>
            <div className="reg-div1">
              <Link className="forget-pass" to="/">
                Already have an account, log in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
