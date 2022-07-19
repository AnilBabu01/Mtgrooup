import React, { useState } from "react";

import "./TeamTap.css";

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
          fffffff
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          gdhhsgdhghdghgh
        </div>
        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          anil
        </div>
      </div>
    </div>
  );
};

export default TeamTap;
