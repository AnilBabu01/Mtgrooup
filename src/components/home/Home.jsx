import React, { useState, useContext, useEffect } from "react";
import BottomNavBar from "../bottomnavbar/BottomNavbar";
import { userinfocontext } from "../context/Userinfo";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Common from "./Common";
import "./Home.css";
import Slider from "./Slider";

const Home = () => {
  const navigate = useNavigate();

  const context = useContext(userinfocontext);
  const { user, getuserinfo } = context;
  const [longterm, setlongterm] = useState("");
  const [shortteram, setshortteram] = useState("");
  const [pending, setpending] = useState("");
  const [recharge, setrecharge] = useState("");
  const [image, setimage] = useState("");
  const [getagainuserinfo, setgetagainuserinfo] = useState(false);
  const blance = pending - recharge;
  axios.defaults.headers.get["Authorization"] = `Bearer ${localStorage.getItem(
    "tokenauth"
  )}`;

  const logout = () => {
    localStorage.removeItem("tokenauth");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };
  const mobile = localStorage.getItem("isMobile");
  const getimages = async () => {
    const response = await axios.get(
      "https://www.admin.mtgrooups.in/api/slider"
    );

    setimage(response.data.data);
  };
  console.log(image);
  const getplans = async () => {
    const response = await axios.get(
      "https://www.admin.mtgrooups.in/api/plans"
    );
    console.log("from home", response.status);
    if (response.status === 401) {
      logout();
    }
    setlongterm(response.data.data.longTerm);
    setshortteram(response.data.data.shortTerm);
    setpending(response.data.pending);
    setrecharge(response.data.recharge);
  };
  const token = localStorage.getItem("tokenauth");
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
    getimages();
    getplans();
    getuserinfo();
  }, [getagainuserinfo]);
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
          <Slider image={image} />
      </div>

      {longterm && (
        <>
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
                        setgetagainuserinf={setgetagainuserinfo}
                        getagainuserinfo={getagainuserinfo}
                        key={item.id}
                        id={item.id}
                        img={item.image}
                        rupee={item.input_cost}
                        dailyincome={item.daily_income}
                        revenuecycle={item.revenue_cycle}
                        totalrevenue={item.total_revenue}
                        title={item.title}
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
        </>
      )}

      {!longterm && !shortteram && (
        <div className="loader">
          <CircularProgress style={{ width: "10%", height: "10%" }} />
        </div>
      )}

      {shortteram && (
        <>
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
                        setgetagainuserinf={setgetagainuserinfo}
                        getagainuserinfo={getagainuserinfo}
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
        </>
      )}

      <BottomNavBar name="home" />
    </>
  );
};

export default Home;
