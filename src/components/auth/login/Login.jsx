import React, { useState } from "react";
import Logo from "../../images/logo.jpg";
import lock from "../../images/lock.png";
import man from "../../images/man.png";
import axios from "axios";
import Alert from "@mui/material/Alert";
import { Link ,useNavigate } from "react-router-dom";
import "./Login.css";
const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    number: "",
    password: "",
  });
  const [successful, setsuccessful] = useState(false);
  const [userallready, setuserallready] = useState(false);
  const success = "success";
  const warning = "warning";
  
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const { number, password } = credentials;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "https://tanishq.luckywin999.in/api/login",
      {
        mobile_no: number,
        password: password,
       
      }
    )
    if (response.data.status === true) {
      setsuccessful(true)
     
      setTimeout(() => {
        setsuccessful(false)
        navigate("/home")
      }, 2000);
    }
    if (response.data.status === false) {
      setuserallready(true)

      setTimeout(() => {
        setuserallready(false)
       
      }, 2000);
    }
  
      localStorage.setItem("tokenauth",response.data.token)
    console.log("registe data", number, response.data.token);
  };
  return (
    <>
      <div className="main-auth">
        <div>
          <div className="logo-div">
            <img src={Logo} alt="logo" />
          </div>
          {successful || userallready ? (
        <Alert variant="filled" severity={successful ? success : warning}>
          {successful
            ? "You have login successfully"
            : "Enter the correct credentials "}
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
                <button>Login</button>
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
