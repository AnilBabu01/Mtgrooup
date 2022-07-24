import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Record.css";
import Record from "../Record";

const Recordall = () => {
  const [allrecord, setallrecord] = useState("");
  axios.defaults.headers.get["Authorization"] = `Bearer ${localStorage.getItem(
    "tokenauth"
  )}`;

  const getrecharge = async () => {
    const response = await axios.get(
      "https://www.admin.mtgrooups.in/api/transaction-history"
    );

    if (response.data.status === true ) {
      setallrecord(response.data.data);
    }

    console.log("recharge data", response.data.data);
  };

  useEffect(() => {
    getrecharge();
  }, []);

  return (
    <>
      {allrecord &&
        allrecord.map((item) => {
          return (
            <Record
              type={item.type}
              amount={item.amount}
              status={item.status}
              date={item.created_at}
            />
          );
        })}
      {!allrecord && (
        <>
          <div className="not-found-div">
            <h2>Record Not Found</h2>
          </div>
        </>
      )}
    </>
  );
};

export default Recordall;
