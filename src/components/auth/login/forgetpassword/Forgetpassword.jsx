import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import Close from "./Close";
import "./Forgetpassword.css";
import axios from "axios";
import Alert from "@mui/material/Alert";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Getotp from "./Getotp";
const Forgetpassword = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    number: "",
    otp: "",
    password: "",
  });
  const [successful, setsuccessful] = useState(false);
  const [invalidotp, setinvalidotp] = useState(false);
  const [showprocess, setshowprocess] = useState(false);
  const [showpassword, setshowpassword] = useState(false);
  const [message, setmessage] = useState("");
  const success = "success";
  const { number, password, otp } = credentials;
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setshowprocess(true);
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/api/changeForgetPassword`,
      {
        mobile_no: number,
        otp: otp,
        password: password,
      }
    );
   
    if (response.data.status === true) {
      setmessage(response.data.msg);
      setTimeout(() => {
        setmessage("");
        navigate("/login")
        setshowprocess(false);
      }, 2000);
    }

    if (response.data.status === false) {
      setmessage(response.data.msg);
      setTimeout(() => {
        setmessage("");
        setshowprocess(false);
      }, 2000);
    }

    console.log("registe data", number, response);

    console.log("registe data", number, password, otp);
  };
  return (
    <>
      <Close title={"Reset Password"} />
      <div className="pad-div">
        <div className="forget-div">
          <div>
          {message && (
            <Alert variant="filled" severity={success}>
              {message}
            </Alert>
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
                <li
                  className="showpassworddsignup2"
                  onClick={() => setshowpassword(!showpassword)}
                >
                  {showpassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </li>
                <input
                  type={showpassword ? "text" : "password"}
                  onChange={onChange}
                  value={password}
                  name="password"
                  placeholder="Login password"
                />
              </div>
              <div className="for-input-div">
                <button>
                  {showprocess ? (
                    <CircularProgress
                      style={{ width: "21px", height: "21px" }}
                    />
                  ) : (
                    "Reset"
                  )}
                </button>
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
