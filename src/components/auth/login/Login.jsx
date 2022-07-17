import React from "react";
import Logo from "../../images/logo.jpg";
import lock from "../../images/lock.png";
import man from "../../images/man.png";
import { Link } from "react-router-dom";
import "./Login.css";
const Login = () => {
  return (
    <>
      <div className="main-auth">
        <div>
          <div className="logo-div">
            <img src={Logo} alt="logo" />
          </div>
          <div className="form-div">
            <form>
              <div className="input-div">
                <img src={man} alt="logo" />
                <input type="text" placeholder="Phone Number" />
              </div>
              <div className="input-div">
                <img src={lock} alt="logo" />
                <input type="text" placeholder="Login Password" />
              </div>
              <div className="btn-div">
                <button>Login</button>
              </div>
            </form>
            <div className="reg-div">
              <Link to="/">Register</Link>
              <Link className="forget-pass" to="/">
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
