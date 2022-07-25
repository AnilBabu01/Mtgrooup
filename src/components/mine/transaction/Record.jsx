import React from "react";

const Record = ({ type, amount, status, date }) => {
  var test = new Date(date);
  const datee = test.toISOString().split("T")[0];
  const hours = test.getUTCHours();
  const min = test.getUTCMinutes();
  const sec = test.getUTCSeconds();

  return (
    <>
      <div className="rec-mainn">
        <div className="rec-main-content">
          <div>
            <p className="date-p">{`${datee}  ${hours}:${min}:${sec}`}</p>
            <p className="red-pp">
              {type} <span className="date-p1">{amount}</span>
            </p>
          </div>
          <div className="success-div">{status}</div>
        </div>
      </div>
    </>
  );
};

export default Record;
