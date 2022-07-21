import React, { useState } from "react";
import First from "./first/First";
import Second from "./second/Second";
import "./TeamTap.css";
import Third from "./third/Third";

const TeamTap = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          First
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Second
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Third
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <First />
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <Second />
        </div>
        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <Third />
        </div>
      </div>
    </div>
  );
};

export default TeamTap;
