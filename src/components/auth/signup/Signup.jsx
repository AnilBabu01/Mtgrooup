import React, { useState } from "react";
import Logo from "../../images/logo.jpeg";
import jewellery from "../../images/jewellery.png";
import { Link, useNavigate } from "react-router-dom";
import Close from "../login/forgetpassword/Close";
import CircularProgress from "@material-ui/core/CircularProgress";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { useParams } from "react-router-dom";
import axios from "axios";
import Alert from "@mui/material/Alert";
import "../login/Login.css";
import "./Signup.css";
const Signup = () => {
  const navigate = useNavigate();

  const { code } = useParams();

  const [credentials, setCredentials] = useState({
    number: "",
    password: "",
    confirmpassword: "",
    withdrawpassword: "",
    invitationcode: "",
    otp: "",
  });
  const [successful, setsuccessful] = useState(false);
  const [userallready, setuserallready] = useState(false);
  const [showprocess, setshowprocess] = useState(false);
  const [optsent, setoptsent] = useState(false);
  const [numberis, setnumberis] = useState(false);
  const [validotp, setvalidotp] = useState(false);
  const [showpassword1, setshowpassword1] = useState(false);
  const [showpassword2, setshowpassword2] = useState(false);
  const [showpassword3, setshowpassword3] = useState(false);
  const success = "success";
  const warning = "warning";
  const {
    number,
    password,
    confirmpassword,
    withdrawpassword,
    invitationcode,
    otp,
  } = credentials;
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  axios.defaults.headers.get["Authorization"] = `Bearer ${localStorage.getItem(
    "tokenauth"
  )}`;

  const getotp = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/api/sendOtpForRegisteration/${number}`
    );

    if (
      response.data.status === true &&
      response.data.msg === "Mobile No Already Registered!!"
    ) {
      setnumberis(true);
      setTimeout(() => {
        setnumberis(false);
      }, 2000);
    }
    if (
      response.data.status === true &&
      response.data.msg === "OTP Send Successfully!!"
    ) {
      setoptsent(true);
      setTimeout(() => {
        setoptsent(false);
      }, 2000);
    }
    if (response.data.status === false) {
      setTimeout(() => {}, 2000);
    }

    console.log("otp", response);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setshowprocess(true);
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/api/register`,
      {
        mobile_no: number,
        password: password,
        cnf_password: confirmpassword,
        withdrawl_password: withdrawpassword,
        refer_code: invitationcode,
        otp: otp,
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
    if (
      response.data.status === false &&
      response.data.msg === "Enter Valid OTP"
    ) {
      setvalidotp(true);
      setTimeout(() => {
        setvalidotp(false);
        setshowprocess(false);
      }, 2000);
    }
    if (
      response.data.status === false &&
      response.data.msg === "First Send OTP!"
    ) {
      setuserallready(true);

      setTimeout(() => {
        setuserallready(false);
        setshowprocess(false);
      }, 2000);
    }
    if (
      response.data.status === false &&
      response.data.msg === "Mobile No Already Registered"
    ) {
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
              {successful ? "Register Successfully" : "First Send OTP"}
            </Alert>
          ) : (
            ""
          )}
          {validotp ? (
            <Alert variant="filled" severity={warning}>
              Enter Valid OTP
            </Alert>
          ) : (
            ""
          )}
          {optsent || numberis ? (
            <Alert variant="filled" severity={optsent ? success : warning}>
              {optsent
                ? "Otp send successfully"
                : "Email or Mobile Number already exist"}
            </Alert>
          ) : (
            ""
          )}

          <div className="form-div">
            <div className="otp-reg">
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
                  <input
                    onChange={onChange}
                    name="otp"
                    value={otp}
                    type="text"
                    placeholder="Please enter otp"
                  />
                </div>
                <div className="input-div1">
                  <li
                    className="showpassworddsignup"
                    onClick={() => setshowpassword1(!showpassword1)}
                  >
                    {showpassword1 ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </li>
                  <input
                    onChange={onChange}
                    name="password"
                    value={password}
                    type={showpassword1 ? "text" : "password"}
                    placeholder="Please enter login password"
                  />
                </div>
                <div className="input-div1">
                  <li
                    className="showpassworddsignup"
                    onClick={() => setshowpassword2(!showpassword2)}
                  >
                    {showpassword2 ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </li>
                  <input
                    onChange={onChange}
                    name="confirmpassword"
                    value={confirmpassword}
                    type={showpassword2 ? "text" : "password"}
                    placeholder="Please enter confirm password"
                  />
                </div>
                <div className="input-div1">
                  <li
                    className="showpassworddsignup"
                    onClick={() => setshowpassword3(!showpassword3)}
                  >
                    {showpassword3 ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </li>
                  <input
                    onChange={onChange}
                    name="withdrawpassword"
                    value={withdrawpassword}
                    type={showpassword3 ? "text" : "password"}
                    placeholder="Please enter withdraw password"
                  />
                </div>
                <div className="input-div1">
                  <input
                    onChange={onChange}
                    name="invitationcode"
                    value={code ? code : invitationcode}
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

              <div className="set-otpdiv">
                <button
                  className={!number ? "set-opt-btn" : "set-opt-btn1"}
                  disabled={!number ? true : ""}
                  onClick={getotp}
                >
                  Get Otp
                </button>
              </div>
            </div>

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
