import React, { useState, useEffect } from "react";
import BottomNavBar from "../bottomnavbar/BottomNavbar";
import NoteIcon from "@material-ui/icons/Note";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import CallIcon from "@material-ui/icons/Call";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import SystemUpdateAltIcon from "@material-ui/icons/SystemUpdateAlt";
import InputIcon from "@material-ui/icons/Input";
import AllInboxIcon from "@material-ui/icons/AllInbox";
import TransformIcon from "@material-ui/icons/Transform";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import axios from "axios";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";
import "./Mine.css";
const Mine = () => {
  const navigate = useNavigate();
  const [successful, setsuccessful] = useState(false);
  const [minedata, setminedata] = useState("");
  const success = "success";
  const warning = "warning";
  const token = localStorage.getItem("tokenauth");
  const logout = () => {
    setsuccessful(true);
    localStorage.removeItem("tokenauth");
    setTimeout(() => {
      setsuccessful(false);
      navigate("/login");
    }, 1000);
  };


  axios.defaults.headers.get["Authorization"] = `Bearer ${localStorage.getItem(
    "tokenauth"
  )}`;

  const getmineinfo = async () => {
    const response = await axios.get("https://www.admin.mtgrooups.in/api/mine");
    setminedata(response.data.data);
    console.log(response.data.data);
    if(response.status===401){
      logout();
    }
  };

  useEffect(() => {
    getmineinfo();
    if (!token) {
      navigate("/login");

    }
   
  }, []);

  return (
    <>
      <div className="close-div">
        <button onClick={logout} className="logout-btnn">
          Logout
        </button>
      </div>
      {successful ? (
        <Alert variant="filled" severity={success}>
        You have logout successfully
        </Alert>
      ) : (
        ""
      )}
      <div className="main-mine">
        <div className="mine-options">
          <div className="mine-menu">
            <div className="btn-div1">
              <p>{minedata ? minedata.total_revenue : "0"}</p>
              <p>Total revenue</p>
            </div>
            <div className="btn-div1">
              <p>{minedata ? minedata.total_recharge : "0"}</p>
              <p>Total recharge</p>
            </div>
            <div className="btn-div1">
              <p>{minedata ? minedata.today_earning : "0"}</p>
              <p>Earning today</p>
            </div>
          </div>
          <div className="mine-menu">
            <div className="btn-div1">
              <p>{minedata ? minedata.total_assets : "0"}</p>
              <p>Total assets</p>
            </div>
            <div className="btn-div1">
              {" "}
              <p>{minedata ? minedata.total_withdraw : "0"}</p>
              <p>Total withdraw</p>
            </div>
            <div className="btn-div1">
              <p>{minedata ? minedata.commission : "0"}</p>
              <p>Commission</p>
            </div>
          </div>
        </div>
      </div>
      <div className="main-mine">
        <div className="mine-options-go">

          <div onClick={() => navigate("/mybank")} className="btn-divv">
            <div className="icon-div">
              <AccountBalanceIcon />
              <p> My Bank</p>
            </div>
            <div>
              <ArrowForwardIosIcon />
            </div>
          </div>
           
          <div onClick={() => navigate("/withdraw")} className="btn-divv">
            <div className="icon-div">
              <InputIcon/>
              <p>Withdraw</p>
            </div>
            <div>
              <ArrowForwardIosIcon />
            </div>
          </div>
           
          <div onClick={() => navigate("/recharge")} className="btn-divv">
            <div className="icon-div">
              <AllInboxIcon />
              <p>Recharge</p>
            </div>
            <div>
              <ArrowForwardIosIcon />
            </div>
          </div>



          <div onClick={() => navigate("/transaction")} className="btn-divv">
            <div className="icon-div">
              <TransformIcon />
              <p>Transaction</p>
            </div>
            <div>
              <ArrowForwardIosIcon />
            </div>
          </div>
          <div onClick={() => navigate("/myplans")} className="btn-divv">
            <div className="icon-div">
              <NoteIcon />
              <p> My Product</p>
            </div>
            <div>
              <ArrowForwardIosIcon />
            </div>
          </div>
          <div onClick={() => navigate("/team")} className="btn-divv">
            <div className="icon-div">
              <PermIdentityIcon />
              <p> My Team</p>
            </div>
            <div>
              <ArrowForwardIosIcon />
            </div>
          </div>
          <div
            onClick={() => navigate("/mine-reset-password")}
            className="btn-divv"
          >
            <div className="icon-div">
              <LockOpenIcon />
              <p>Reset Password</p>
            </div>
            <div>
              <ArrowForwardIosIcon />
            </div>
          </div>
          <div onClick={() => navigate("/invite")} className="btn-divv">
            <div className="icon-div">
              <CallIcon />
              <p>Invite Friends</p>
            </div>
            <div>
              <ArrowForwardIosIcon />
            </div>
          </div>
          <a   href="https://www.mtgrooups.in/mtgrooups.apk"
               className="btn-divv">
            <div className="icon-div">
              <SystemUpdateAltIcon/>
              <p>Download</p>
            </div>
            <div>
            
            </div>
          </a>
        </div>
      </div>

      <BottomNavBar name="mine" />
    </>
  );
};

export default Mine;
