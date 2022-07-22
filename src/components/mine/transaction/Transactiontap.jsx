import React, { useState } from "react";
import Recordrecharge from "./Recordrecharge";
import Recordwithdraw from "./Recordwithdraw";
import Recordall from "./Recordall";
import "./TransacTap.css";
const Transactiontap = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
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
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <Recordrecharge />
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <Recordwithdraw />
        </div>
        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <Recordall />
        </div>
      </div>
    </div>
  );
};

export default Transactiontap;
