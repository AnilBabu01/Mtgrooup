import React from "react";
import BottomNavBar from "../bottomnavbar/BottomNavbar";
import NoteIcon from '@material-ui/icons/Note';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import CallIcon from '@material-ui/icons/Call';
import { useNavigate } from "react-router-dom";
import "./Mine.css";
const Mine = () => {
  const navigate = useNavigate();
  return (
    <>
      
      <div className="main-mine">
        <div className="mine-options">
          <div className="mine-menu">
            <div className="btn-div1">
              <p>0</p>
              <p>Total revenue</p>
            </div>
            <div className="btn-div1">
              <p>0</p>
              <p>Total recharge</p>
            </div>
            <div className="btn-div1">
              <p>0</p>
              <p>Earning today</p>
            </div>
          </div>
          <div className="mine-menu">
            <div className="btn-div1">
              <p>0</p>
              <p>Total assets</p>
            </div>
            <div className="btn-div1">
              {" "}
              <p>0</p>
              <p>Total withdraw</p>
            </div>
            <div className="btn-div1">
              <p>0</p>
              <p>Commission</p>
            </div>
          </div>
        </div>
      </div>
      <div className="main-mine">
        <div className="mine-options-go">
        <div onClick={()=>navigate("/home")} className="btn-divv">
          <div className="icon-div">
            <NoteIcon/>
            <p> My Product</p>
           
          </div>
          <div>
          <img src="https://res.cloudinary.com/fiewin/image/upload/images/arrowRight.png" alt="rightgo"/>
          </div>
        </div>
        <div onClick={()=>navigate("/team")} className="btn-divv">
          <div className="icon-div">
            <PermIdentityIcon/>
            <p> My Team</p>
           
          </div>
          <div>
          <img src="https://res.cloudinary.com/fiewin/image/upload/images/arrowRight.png" alt="rightgo"/>
          </div>
        </div>
        <div onClick={()=>navigate("/forget-password")} className="btn-divv">
          <div className="icon-div">
            <LockOpenIcon />
            <p>Reset Password</p>
           
          </div>
          <div>
          <img src="https://res.cloudinary.com/fiewin/image/upload/images/arrowRight.png" alt="rightgo"/>
          </div>
        </div>
        <div onClick={()=>navigate("/invite")} className="btn-divv">
          <div className="icon-div">
            <CallIcon />
            <p>Invite Friends</p>
         
          </div>
          <div>
          <img src="https://res.cloudinary.com/fiewin/image/upload/images/arrowRight.png" alt="rightgo"/>
          </div>
        </div>
        </div>
      </div>

      <BottomNavBar name="mine" />
    </>
  );
};

export default Mine;
