import React from "react";
import BottomNavBar from "../bottomnavbar/BottomNavbar";
import TelegramIcon from "@material-ui/icons/Telegram";
import AllInboxIcon from "@material-ui/icons/AllInbox";
import PeopleIcon from "@material-ui/icons/People";
import BusinessIcon from "@material-ui/icons/Business";
import InputIcon from "@material-ui/icons/Input";
import jew1 from "../images/jew1.jfif";
import jew3 from "../images/jew3.jfif";
import jew4 from "../images/jew4.jfif";
import jew6 from "../images/jew6.jfif";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Common from "./Common";
const Home = () => {
  const navigate = useNavigate();
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
            <div  onClick={()=>navigate("/recharge")} className="icon-divv">
              <InputIcon className="icons" />
              <p>Recharge</p>
            </div>
            <div onClick={()=>navigate("/invite")} className="icon-divv">
              <TelegramIcon className="icons" />
              <p>Group</p>
            </div>
            <div onClick={()=>navigate("/withdraw")} className="icon-divv">
              <AllInboxIcon className="icons" />
              <p>Withdraw</p>
            </div>
          </div>

          <div className="oprions-icon-div1">
            <div onClick={()=>navigate("/invite")}  className="icon-divv">
              <PeopleIcon className="icons" />
              <p>Invite</p>
            </div>
           
            <div  className="icon-divv">
              <BusinessIcon className="icons" />
              <p>Compnay</p>
            </div>
          </div>
        </div>
      </div>
           <div className="icon-divv1 long">
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
       <div className="icon-divv long">
                <p>Short Tearm Plan</p>
           </div>
        <div style={{marginBottom:"55px"}}   className="plan-div">
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
