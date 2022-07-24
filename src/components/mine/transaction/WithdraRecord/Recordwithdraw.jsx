import React, { useState, useEffect } from "react";
import axios from "axios";
import Record from "../Record";
import "../Record.css";

const Recordwithdraw = ({ searchdata }) => {
  const [withdraw, setwithdraw] = useState("");
  axios.defaults.headers.get["Authorization"] = `Bearer ${localStorage.getItem(
    "tokenauth"
  )}`;

  const getrecharge = async () => {
    const response = await axios.get(
      "https://www.admin.mtgrooups.in/api/transaction-history?status=0"
    );

    if (response.data.status === true) {
      setwithdraw(response.data.data);
    }

    console.log("recharge data", response.data.data);
  };

  useEffect(() => {
    getrecharge();
  }, []);

  return (
    <>
      {!searchdata && (
        <>
          {withdraw &&
            withdraw.map((item) => {
              return (
                <Record
                  type={item.type}
                  amount={item.amount}
                  status={item.status}
                  date={item.created_at}
                />
              );
            })}
          {!withdraw && (
            <>
              <div className="not-found-div">
                <h2>Record Not Found</h2>
              </div>
            </>
          )}
        </>
      )}

      {searchdata && (
        <>
          {searchdata.map((item) => {
            return (
              <Record
                type={item.type}
                amount={item.amount}
                status={item.status}
                date={item.created_at}
              />
            );
          })}
        </>
      )}
    </>
  );
};

export default Recordwithdraw;
