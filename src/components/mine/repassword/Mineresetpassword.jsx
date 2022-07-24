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
  const [invalidodlpassword, setinvalidodlpassword] = useState(false);
  const [notbothsame, setnotbothsame] = useState(false);
  const success = "success";
  const warning = "warning";
  const { oldpassword, newpassword, confirmbnewpassword } = credentials;
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  axios.defaults.headers.post["Authorization"] = `Bearer ${localStorage.getItem(
    "tokenauth"
  )}`;
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post(
      "https://www.admin.mtgrooups.in/api/resetPassword",
      {
        old_password: oldpassword,
        new_password: newpassword,
        cnf_password: confirmbnewpassword,
      }
    );
    if (response.data.status === true) {
      setsuccessful(true);

      setTimeout(() => {
        setsuccessful(false);
      }, 2000);
    }
    if (
      response.data.status === false &&
      response.data.msg === "Enter Valid Old Password"
    ) {
      setinvalidodlpassword(true);
      setTimeout(() => {
        setinvalidodlpassword(false);
      }, 2000);
    }
    if (
      response.data.status === false &&
      response.data.msg === "Enter Both Password Same"
    ) {
      setnotbothsame(true);
      setTimeout(() => {
        setnotbothsame(false);
      }, 2000);
    }
    console.log(
      "change password data",
      oldpassword,
      newpassword,
      confirmbnewpassword,
      response
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
        {successful || invalidodlpassword ? (
          <Alert variant="filled" severity={successful ? success : warning}>
            {successful
              ? "Password Changed Successfully"
              : "Enter Valid Old Password "}
          </Alert>
        ) : (
          ""
        )}
        {notbothsame ? (
          <Alert variant="filled" severity={warning}>
            Please enter Both Password Same"
          </Alert>
        ) : (
          ""
        )}

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
