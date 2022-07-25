import React, { useState, useContext, useEffect } from "react";
import BottomNavBar from "../bottomnavbar/BottomNavbar";
import TelegramIcon from "@material-ui/icons/Telegram";
import AllInboxIcon from "@material-ui/icons/AllInbox";
import PeopleIcon from "@material-ui/icons/People";
import BusinessIcon from "@material-ui/icons/Business";
import InputIcon from "@material-ui/icons/Input";
import { userinfocontext } from "../context/Userinfo";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Common from "./Common";
import "./Home.css";
const Home = () => {
  const navigate = useNavigate();
  const context = useContext(userinfocontext);
  const { user, getuserinfo } = context;
  const [longterm, setlongterm] = useState("");
  const [shortteram, setshortteram] = useState("");
  const [pending, setpending] = useState("");
  const [recharge, setrecharge] = useState("");
  const blance = pending - recharge;
  axios.defaults.headers.get["Authorization"] = `Bearer ${localStorage.getItem(
    "tokenauth"
  )}`;
  const getplans = async () => {
    const response = await axios.get(
      "https://www.admin.mtgrooups.in/api/plans"
    );
    setlongterm(response.data.data.longTerm);
    setshortteram(response.data.data.shortTerm);
    setpending(response.data.pending);
    setrecharge(response.data.recharge);
    console.log("pplans", response);
  };
  const token = localStorage.getItem("tokenauth");
  useEffect(() => {
    if (!token) {
      navigate("/");
    }

    getplans();
    getuserinfo();
  }, []);
  console.log(token);

  return (
    <>
      <div className="recharg-div-home">
        <div className="recharg-div-home-content">
          <div className="text-div">
            <p>{user && user.data.amount ? user.data.amount : "0.00"}</p>
            <p>Balance</p>
          </div>
          <div className="text-div">
            <p>{recharge ? recharge : "0.00"}</p>
            <p>Recharge</p>
          </div>
          <div className="text-div">
            <p>{pending ? pending : "0.00"}</p>
            <p>Pending</p>
          </div>
        </div>
      </div>
      <div className="recharg-div-home">
        <div className="withdrawoptins">
          <div className="oprions-icon-div">
            <div onClick={() => navigate("/recharge")} className="icon-divv">
              <InputIcon className="icons" />
              <p>Recharge</p>
            </div>
            <div onClick={() => navigate("/invite")} className="icon-divv">
              <TelegramIcon className="icons" />
              <p>Group</p>
            </div>
            <div onClick={() => navigate("/withdraw")} className="icon-divv">
              <AllInboxIcon className="icons" />
              <p>Withdraw</p>
            </div>
          </div>

          <div className="oprions-icon-div1">
            <div onClick={() => navigate("/invite")} className="icon-divv">
              <PeopleIcon className="icons" />
              <p>Invite</p>
            </div>

            <div className="icon-divv">
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
        {longterm &&
          longterm.map((item) => {
            return (
              <>
                <div>
                  <Common
                    key={item.id}
                    id={item.id}
                    img={item.image}
                    rupee={item.input_cost}
                    dailyincome={item.daily_income}
                    revenuecycle={item.revenue_cycle}
                    totalrevenue={item.total_revenue}
                  />
                </div>
              </>
            );
          })}

        {longterm && (
          <>
            {longterm.length === 0 && (
              <>
                <div className="not-found-div">
                  <h2>Record Not Found</h2>
                </div>
              </>
            )}
          </>
        )}
      </div>
      {!longterm && (
        <div className="not-found-div">
          <h2>Plans Not Found</h2>
        </div>
      )}
      <div className="icon-divv long">
        <p>Short Tearm Plan</p>
      </div>
      <div style={{ marginBottom: "55px" }} className="plan-div">
        {shortteram &&
          shortteram.map((item) => {
            return (
              <>
                <div key={item.id}>
                  <Common
                    id={item.id}
                    img={item.image}
                    rupee={item.input_cost}
                    dailyincome={item.daily_income}
                    revenuecycle={item.revenue_cycle}
                    totalrevenue={item.total_revenue}
                  />
                </div>
              </>
            );
          })}
        {shortteram && (
          <>
            {shortteram.length === 0 && (
              <>
                <div className="not-found-div">
                  <h2>Record Not Found</h2>
                </div>
              </>
            )}
          </>
        )}
      </div>
      <BottomNavBar name="home" />
    </>
  );
};

export default Home;
