import React, { useState } from "react";
import Logo from "../../images/logo.jpg";
import lock from "../../images/lock.png";
import man from "../../images/man.png";
import { Link ,useNavigate } from "react-router-dom";
import "./Login.css";
const Login = () => {
  const naviaget = useNavigate();
  const [credentials, setCredentials] = useState({
    number: "",
    password: "",
  });

  const { number, password } = credentials;
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    naviaget("/home")
    const { number, password } = credentials;
    console.log("registe data", number, password);
  };
  return (
    <>
      <div className="main-auth">
        <div>
          <div className="logo-div">
            <img src={Logo} alt="logo" />
          </div>
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
                  type="text"
                  placeholder="Login Password"
                />
              </div>
              <div className="btn-div">
                <button>Login</button>
              </div>
            </form>
            <div className="reg-div">
              <Link to="/signup">Register</Link>
              <Link className="forget-pass" to="/forget-password">
                Forget Password
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
