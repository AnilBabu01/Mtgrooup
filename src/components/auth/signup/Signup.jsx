import React, { useState } from "react";
import Logo from "../../images/logo.jpg";
import jewellery from "../../images/jewellery.png";
import { Link, useNavigate } from "react-router-dom";
import Close from "../login/forgetpassword/Close";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";
import Alert from "@mui/material/Alert";
import "../login/Login.css";
import "./Signup.css";
const Signup = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    number: "",
    password: "",
    confirmpassword: "",
    withdrawpassword: "",
    invitationcode: "",
  });
  const [successful, setsuccessful] = useState(false);
  const [userallready, setuserallready] = useState(false);
  const [showprocess, setshowprocess] = useState(false);
  const success = "success";
  const warning = "warning";
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
    setshowprocess(true);
    const response = await axios.post(
      "https://www.admin.mtgrooups.in/api/register",
      {
        mobile_no: number,
        password: password,
        cnf_password: confirmpassword,
        withdrawl_password: withdrawpassword,
        refer_code: invitationcode,
      }
    );
    if (response.data.status === true) {
      setsuccessful(true);

      setTimeout(() => {
        setsuccessful(false);
        setshowprocess(false);
        navigate("/login");
      }, 2000);
    }
    if (response.data.status === false) {
      setuserallready(true);

      setTimeout(() => {
        setuserallready(false);
        setshowprocess(false);
      }, 2000);
    }
    console.log("registe data", number, response);
  };
  return (
    <>
      <Close title={"Register"} />

      <div className="main-auth">
        <div>
          <div className="logo-div1">
            <img src={Logo} alt="logo" />
          </div>
          {successful || userallready ? (
            <Alert variant="filled" severity={successful ? success : warning}>
              {successful
                ? "register successfully"
                : "Email or Mobile Number already exist "}
            </Alert>
          ) : (
            ""
          )}
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
                  type="password"
                  placeholder="Please enter login password"
                />
              </div>
              <div className="input-div1">
                <img src={jewellery} alt="logo" />
                <input
                  onChange={onChange}
                  name="confirmpassword"
                  value={confirmpassword}
                  type="password"
                  placeholder="Please enter confirm password"
                />
              </div>
              <div className="input-div1">
                <img src={jewellery} alt="logo" />
                <input
                  onChange={onChange}
                  name="withdrawpassword"
                  value={withdrawpassword}
                  type="password"
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
                <button>
                  {showprocess ? (
                    <CircularProgress
                      style={{ width: "21px", height: "21px" }}
                    />
                  ) : (
                    "Register"
                  )}
                </button>
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
