import React, { useState, useEffect } from "react";
import Recordrecharge from "./RechargeRecord/Recordrecharge";
import Recordwithdraw from "./WithdraRecord/Recordwithdraw";
import Recordall from "./AllRecord/Recordall";
import axios from "axios";
import "./TransacTap.css";
const Transactiontap = () => {
  const [toggleState, setToggleState] = useState(1);
  const [statusvalue, setstatusvalue] = useState(1);

  const [allsearch, setallsearch] = useState("");
  const [rechargesearch, setrechargesearch] = useState("");
  const [withdrawaearch, setwithdrawaearch] = useState("");
  const [showsearch, setshowsearch] = useState(false);
  const [search, setsearch] = useState({
    start: "",
    end: "",
  });

  const { start, end } = search;
  const onchange = (e) => {
    setsearch({ ...search, [e.target.name]: e.target.value });
  };

  const toggleTab = (index) => {
    if (index === 1) {
      setstatusvalue(1);
    }
    if (index === 2) {
      setstatusvalue(0);
    }
    if (index === 3) {
      setstatusvalue(3);
    }
    setToggleState(index);
  };

  useEffect(() => {}, [showsearch, statusvalue]);

  const searchbtn = async () => {
    console.log("dates", start, "to", end, "status", statusvalue);

    const response = await axios.get(
      `https://www.admin.mtgrooups.in/api/transaction-history?status=${statusvalue}&&from=${start}&to=${end}`
    );

    if (response.data.status === true) {
      if (statusvalue == 1) {
        setrechargesearch(response.data.data);
        setshowsearch(!showsearch);
        setwithdrawaearch("");
        setallsearch("");
      }
      if (statusvalue === 0) {
        setwithdrawaearch(response.data.data);
        setshowsearch(!showsearch);
        setrechargesearch("");
        setallsearch("");
      }
      if (statusvalue === 3) {
        setallsearch(response.data.data);
        setshowsearch(!showsearch);
        setwithdrawaearch("");
        setrechargesearch("");
      }
    }

    console.log("recharge data", response.data.data);
  };
  return (
    <>
      <div className="search-div">
        <input type="date" value={start} name="start" onChange={onchange} /> To
        <input type="date" value={end} name="end" onChange={onchange} />
        <button onClick={searchbtn} className="search-btn">
          Search
        </button>
      </div>
      <div className="container">
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs8 active-tabs" : "tabs8"}
            onClick={() => toggleTab(1)}
          >
            Recharge
          </button>
          <button
            className={toggleState === 2 ? "tabs8 active-tabs" : "tabs8"}
            onClick={() => toggleTab(2)}
          >
            Withdraw
          </button>
          <button
            className={toggleState === 3 ? "tabs8 active-tabs" : "tabs8"}
            onClick={() => toggleTab(3)}
          >
            ALL types
          </button>
        </div>

        <div className="content-tabs">
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            <Recordrecharge
              searchdata={rechargesearch}
              showsearch={showsearch}
            />
          </div>

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            <Recordwithdraw searchdata={withdrawaearch} />
          </div>
          <div
            className={
              toggleState === 3 ? "content  active-content" : "content"
            }
          >
            <Recordall searchdata={allsearch} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Transactiontap;
