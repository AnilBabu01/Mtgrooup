import React, { useState } from "react";
import Recordrecharge from "./RechargeRecord/Recordrecharge";
import Recordwithdraw from "./WithdraRecord/Recordwithdraw";
import Recordall from "./AllRecord/Recordall";
import "./TransacTap.css";
const Transactiontap = () => {
  const [toggleState, setToggleState] = useState(1);
  const [search, setsearch] = useState({
    start: "",
    end: "",
  });

  const { start, end } = search;
  const onchange = (e) => {
    setsearch({ ...search, [e.target.name]: e.target.value });
  };

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const searchbtn = () => {
    console.log("dates", start, "to", end);

    
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
            <Recordrecharge />
          </div>

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            <Recordwithdraw />
          </div>
          <div
            className={
              toggleState === 3 ? "content  active-content" : "content"
            }
          >
            <Recordall />
          </div>
        </div>
      </div>
    </>
  );
};

export default Transactiontap;
