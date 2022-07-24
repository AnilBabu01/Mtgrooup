import React from "react";
import "./Commoncard.css";
import logo from "../images/logo.jpg";
const Commoncard = ({recharge,withdraw,name,phone,recommendednumbre,regtime}) => {
  return (
    <>
      <div className="recharg-div-home3">
        <div className="recharg-div-home-content3">
          <div className="com-div-img">
            <img src={logo} alt="logo" />
            <div className="name-div">
            <h2>Name:{name}</h2>
            <p className="blue">Recharge:{recharge}</p>
            <p className="blue">Withdraw:{withdraw}</p>
          </div>
          </div>
          
          <div className="no-div">
            <p  className="blue" dir="rtl">Phone:{phone}</p>
            <p className="gree" dir="rtl">Recommended number:{recommendednumbre}</p>
            <p className="or" dir="rtl">Registration time:{regtime}</p>
            <p  className="or" dir="rtl">23-29-17</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Commoncard;
