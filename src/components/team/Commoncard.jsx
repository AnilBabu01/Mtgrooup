import React from "react";
import "./Commoncard.css";
import logo from "../images/logo.jpg";
const Commoncard = () => {
  return (
    <>
      <div className="recharg-div-home3">
        <div className="recharg-div-home-content3">
          <div className="com-div-img">
            <img src={logo} alt="logo" />
            <div className="name-div">
            <h2>Name:anil babu</h2>
            <p className="blue">Recharge:0</p>
            <p className="blue">Withdraw:0</p>
          </div>
          </div>
          
          <div className="no-div">
            <p  className="blue" dir="rtl">Phone:759*****85</p>
            <p className="gree" dir="rtl">Recommended number:0</p>
            <p className="or" dir="rtl">Registration time:11-07-2022</p>
            <p  className="or" dir="rtl">23-29-17</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Commoncard;
