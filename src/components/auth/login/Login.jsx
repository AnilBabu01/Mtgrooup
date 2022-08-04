import React, { useState, useEffect } from "react";
import Logo from "../../images/logo.jpeg";
import lock from "../../images/lock.png";
import man from "../../images/man.png";
import axios from "axios";
import Alert from "@mui/material/Alert";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import VisibilityIcon from "@material-ui/icons/Visibility";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    number: "",
    password: "",
  });
  const [successful, setsuccessful] = useState(false);
  const [userallready, setuserallready] = useState(false);
  const [showprocess, setshowprocess] = useState(false);
  const [showpassword, setshowpassword] = useState(false);
  const [message, setmessage] = useState("");
  const success = "success";


  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const { number, password } = credentials;
  const handleSubmit = async (e) => {
    e.preventDefault();
    setshowprocess(true);
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/api/login`,
      {
        mobile_no: number,
        password: password,
      }
    );
 
    if (response.data.status === true) {
      localStorage.setItem("tokenauth", response.data.token);
      navigate("/")
  }

    if (response.data.status === false) {
      setmessage(response.data.msg);
      setTimeout(() => {
        setmessage("");
        setshowprocess(false);
      }, 2000);
    }
   

  
    console.log("registe data", number, response.data.token);
  };
  return (
    <>
      <div className="main-auth">
        <div>
          <div className="logo-div">
            <img src={Logo} alt="logo" />
          </div>
          {message && (
            <Alert variant="filled" severity={success}>
              {message}
            </Alert>
          )}

          <div className="form-div">
            <form onSubmit={handleSubmit}>
              <div className="input-div">
                <img src={man} alt="logo" />
                <input
                  onChange={onChange}
                  name="number"
                  value={number}
                  type="text"
                  placeholder="Phone Number"
                />
              </div>
              <div className="input-div">
                <img src={lock} alt="logo" />
                <input
                  onChange={onChange}
                  name="password"
                  value={password}
                  type={showpassword ? "text" : "password"}
                  placeholder="Login Password"
                />
                <li
                  className="showpassworddsignup1"
                  onClick={() => setshowpassword(!showpassword)}
                >
                  {showpassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </li>
              </div>
              <div className="btn-div">
                <button>
                  {showprocess ? (
                    <CircularProgress
                      style={{ width: "21px", height: "21px" }}
                    />
                  ) : (
                    "Login"
                  )}
                </button>
              </div>
            </form>
            <div className="reg-div1">
              <Link className="forget-pass" to="/forget-password">
                Forget Password
              </Link>
            </div>
            <div className="reg-div1">
              <Link className="forget-pass" to="/signup">
                don't have an account, register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
