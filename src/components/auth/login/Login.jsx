import React, { useState } from "react";
import Logo from "../../images/logo.jpg";
import lock from "../../images/lock.png";
import man from "../../images/man.png";
import axios from "axios";
import Alert from "@mui/material/Alert";
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

  const success = "success";
  const warning = "warning";

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const { number, password } = credentials;
  const handleSubmit = async (e) => {
    e.preventDefault();
    setshowprocess(true);
    const response = await axios.post(
      "https://www.admin.mtgrooups.in/api/login",
      {
        mobile_no: number,
        password: password,
      }
    );
    if (response.data.status === true) {
      setsuccessful(true);

      setTimeout(() => {
        setsuccessful(false);
        setshowprocess(false);
        navigate("/home");
      }, 1000);
    }
    if (response.data.status === false) {
      setuserallready(true);

      setTimeout(() => {
        setuserallready(false);
        setshowprocess(false);
      }, 1000);
    }

    localStorage.setItem("tokenauth", response.data.token);
    console.log("registe data", number, response.data.token);
  };
  return (
    <>
      <div className="main-auth">
        <div>
          <div className="logo-div">
            <img src={Logo} alt="logo" />
          </div>
          {userallready ? (
            <Alert variant="filled" severity={warning}>
              Enter the correct credentials
            </Alert>
          ) : (
            ""
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
                  type="password"
                  placeholder="Login Password"
                />
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
