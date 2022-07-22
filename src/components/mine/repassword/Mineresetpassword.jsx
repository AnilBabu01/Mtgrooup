import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Alert from "@mui/material/Alert";
import CloseIcon from "@material-ui/icons/Close";
import "./Mineresetpassword.css";
import BottomNavBar from "../../bottomnavbar/BottomNavbar";
const Mineresetpassword = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    oldpassword: "",
    newpassword: "",
    confirmbnewpassword: "",
  });
  const [successful, setsuccessful] = useState(false);
  const [invalidotp, setinvalidotp] = useState(false);
  const success = "success";
  const warning = "warning";
  const { oldpassword, newpassword, confirmbnewpassword } = credentials;
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(
      "change password data",
      oldpassword,
      newpassword,
      confirmbnewpassword
    );
  };
  return (
    <>
      <div className="close-div5">
        <CloseIcon
          style={{ color: "white" }}
          onClick={() => navigate("/mine")}
        />
        <div className="title-div5">
          <p>Chanege Password</p>
        </div>
      </div>
      <div className="pad-div">
        <div className="forget-div">
          <form onSubmit={handleSubmit}>
            <div className="for-input-div">
              <input
                type="password"
                onChange={onChange}
                value={oldpassword}
                name="oldpassword"
                placeholder="Old Password"
              />
            </div>
            <div className="for-input-div">
              <input
                type="password"
                onChange={onChange}
                value={newpassword}
                name="newpassword"
                placeholder="New Password"
              />
            </div>
            <div className="for-input-div">
              <input
                type="password"
                onChange={onChange}
                value={confirmbnewpassword}
                name="confirmbnewpassword"
                placeholder="Confirm New Password"
              />
            </div>
            <div className="for-input-div">
              <button>Change</button>
            </div>
          </form>
        </div>
      </div>

      <BottomNavBar name="mine-reset-password" />
    </>
  );
};

export default Mineresetpassword;
