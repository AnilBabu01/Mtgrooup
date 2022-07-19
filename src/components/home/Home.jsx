import React from "react";
import BottomNavBar from "../bottomnavbar/BottomNavbar";
import TelegramIcon from "@material-ui/icons/Telegram";
import AllInboxIcon from "@material-ui/icons/AllInbox";
import PeopleIcon from "@material-ui/icons/People";
import SystemUpdateAltIcon from "@material-ui/icons/SystemUpdateAlt";
import BusinessIcon from "@material-ui/icons/Business";
import InputIcon from "@material-ui/icons/Input";
import jew1 from "../images/jew1.jfif";
import jew3 from "../images/jew3.jfif";
import jew4 from "../images/jew4.jfif";
import jew6 from "../images/jew6.jfif";
import "./Home.css";
import Common from "./Common";
const Home = () => {
  return (
    <>
      <div className="recharg-div-home">
        <div className="recharg-div-home-content">
          <div className="text-div">
            <p>0.00</p>
            <p>Balance</p>
          </div>
          <div className="text-div">
            <p>0.00</p>
            <p>Recharge</p>
          </div>
          <div className="text-div">
            <p>0.00</p>
            <p>Pending</p>
          </div>
        </div>
      </div>
      <div className="recharg-div-home">
        <div className="withdrawoptins">
          <div className="oprions-icon-div">
            <div className="icon-divv">
              <InputIcon className="icons" />
              <p>Recharge</p>
            </div>
            <div className="icon-divv">
              <TelegramIcon className="icons" />
              <p>Group</p>
            </div>
            <div className="icon-divv">
              <AllInboxIcon className="icons" />
              <p>Withdraw</p>
            </div>
          </div>

          <div className="oprions-icon-div">
            <div style={{ marginLeft: "15px" }} className="icon-divv">
              <PeopleIcon className="icons" />
              <p>Invite</p>
            </div>
            <div style={{ marginLeft: "15px" }} className="icon-divv">
              <SystemUpdateAltIcon className="icons" />
              <p>Download</p>
            </div>

            <div style={{ marginRight: "8px" }} className="icon-divv">
              <BusinessIcon className="icons" />
              <p>Compnay</p>
            </div>
          </div>
        </div>
      </div>
           <div className="icon-divv long">
                <p>Long Tearm Plan</p>
           </div>
        <div className="plan-div">
          <div>
          <Common img={jew1} rupee={"0"}/>
          </div>
          <div>
          <Common img={jew1} rupee={"0"}/>
          </div>
          <div>
          <Common img={jew3} rupee={"0"}/>
          </div>
          <div>
          <Common img={jew4} rupee={"0"}/>
          </div>
          <div>
          <Common img={jew6} rupee={"0"}/>
          </div>
          <div>
          <Common img={jew6} rupee={"0"}/>
          </div>
          
          
        </div>
      <BottomNavBar name="home" />
    </>
  );
};

export default Home;