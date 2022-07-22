import React from "react";
const Record = () => {
  return (
    <>
      <div className="rec-mainn">
        <div className="rec-main-content">
          <div>
            <p className="date-p">20-07-2022 10:01:12</p>
            <p className="red-pp">
              Withdraw <span className="date-p1"> -202.5</span>
            </p>
          </div>
          <div className="success-div">Success</div>
        </div>
      </div>
    </>
  );
};
const Recordwithdraw = () => {
  return (
    <>
      <Record />
      <Record />
      <Record />
      <Record />
      <Record />
    </>
  );
};

export default Recordwithdraw;
