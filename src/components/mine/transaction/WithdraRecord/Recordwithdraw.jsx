import React, { useState, useEffect } from "react";
import axios from "axios";
import Record from "../Record";
import CircularProgress from "@material-ui/core/CircularProgress";
import "../Record.css";

const Recordwithdraw = ({ searchdata, searchloader }) => {
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
  };

  useEffect(() => {
    getrecharge();
  }, []);

  console.log(withdraw.length);
  return (
    <>
      {searchloader && (
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
            </>
          )}

          {withdraw && (
            <>
              {withdraw.length === 0 && (
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
      )}

      {(!searchdata && !withdraw) || !searchloader ? (
        <>
          <div className="loader">
            <CircularProgress style={{ width: "10%", height: "10%" }} />
          </div>
        </>
      ) : (
        ""
      )}
      {searchdata && (
        <>
          {searchdata.length === 0 && (
            <>
              <div className="not-found-div">
                <h2>Record Not Search</h2>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Recordwithdraw;
