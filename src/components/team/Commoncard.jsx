import React from "react";
import "./Commoncard.css";
import logo from "../images/logo.jpg";
const Commoncard = ({
  recharge,
  withdraw,
  name,
  phone,
  recommendednumbre,
  regtime,
}) => {
  const typecast = phone.toString();
  const first = typecast.substring(0, 3);
  const second = typecast.substring(7, 10);
  var test = new Date(regtime);
  const date =  test.toISOString().split('T')[0]
  const hours =test.getUTCHours();
  const min=test.getUTCMinutes();
  const sec=test.getUTCSeconds()
  console.log("convsetrd date", date,hours);
 
  return (
    <>
      <div className="recharg-div-home3">
        <div className="recharg-div-home-content3">
          <div className="com-div-img">
            <img src={logo} alt="logo" />
            <div className="name-div">
              <h2>Name: {name}</h2>
              <p className="blue">Recharge: {recharge}</p>
              <p className="blue">Withdraw: {withdraw}</p>
            </div>
          </div>

          <div className="no-div">
            <p className="blue" dir="rtl">
              Phone:{`${first}####${second}`}
            </p>
            <p className="gree" dir="rtl">
              Recommended number: {recommendednumbre}
            </p>
            <p className="or" dir="rtl">
              Registration time: {`${hours}:${min}:${sec}`}
            </p>
            <p className="or" dir="rtl">
              {date}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Commoncard;
