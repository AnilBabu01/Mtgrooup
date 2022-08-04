import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Alert from "@mui/material/Alert";
import CloseIcon from "@material-ui/icons/Close";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./Mineresetpassword.css";
import BottomNavBar from "../../bottomnavbar/BottomNavbar";
const Mineresetpassword = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    oldpassword: "",
    newpassword: "",
    confirmbnewpassword: "",
  });
  const [showprocess, setshowprocess] = useState(false);
  const [message, setmessage] = useState("");
  const success = "success";
  const token = localStorage.getItem("tokenauth");
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);
  const logout = () => {
   
    localStorage.removeItem("tokenauth");
    setTimeout(() => {
    
      navigate("/login");
    }, 1000);
  };
  const { oldpassword, newpassword, confirmbnewpassword } = credentials;
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  axios.defaults.headers.post["Authorization"] = `Bearer ${localStorage.getItem(
    "tokenauth"
  )}`;
  const handleSubmit = async (e) => {
    e.preventDefault();
    setshowprocess(true);
    const response = await axios.post(
      "https://www.admin.mtgrooups.in/api/resetPassword",
      {
        old_password: oldpassword,
        new_password: newpassword,
        cnf_password: confirmbnewpassword,
      }
    );
    if(response.status===401){
      logout();
    }
    if (response.data.status === true) {
      setmessage(response.data.msg);
      setTimeout(() => {
        setmessage("");
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
         {message && (
            <Alert variant="filled" severity={success}>
              {message}
            </Alert>
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
              <button
                disabled={
                  !oldpassword && !newpassword && !confirmbnewpassword
                    ? true
                    : ""
                }
                style={{ backgroundColor: "rgb(137,87,229)" }}
              >
                {showprocess ? (
                  <CircularProgress style={{ width: "21px", height: "21px" }} />
                ) : (
                  "Change"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      <BottomNavBar name="mine-reset-password" />
    </>
  );
};

export default Mineresetpassword;
