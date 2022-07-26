import React, { useEffect, useState } from "react";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import "../Record.css";
import Record from "../Record";
const Recordrecharge = ({ searchdata, searchloader }) => {
  const [recharge, setrecharge] = useState("");
  axios.defaults.headers.get["Authorization"] = `Bearer ${localStorage.getItem(
    "tokenauth"
  )}`;

  console.log("search data", searchdata);
  const getrecharge = async () => {
    const response = await axios.get(
      "https://www.admin.mtgrooups.in/api/transaction-history?status=1"
    );

    if (response.data.status === true) {
      setrecharge(response.data.data);
    }

    console.log("recharge data", response.data.data);
  };

  useEffect(() => {
    getrecharge();
  }, []);

  console.log(setrecharge.length);
  return (
    <>
      {searchloader && (
        <>
          {!searchdata && (
            <>
              {recharge &&
                recharge.map((item) => {
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

          {recharge && (
            <>
              {recharge.length === 0 && (
                <>
                  <div className="not-found-div">
                    <h2>Record Not Found</h2>
                  </div>
                </>
              )}
            </>
          )}
        </>
      )}

      {(!searchdata && !recharge) || !searchloader ? (
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

export default Recordrecharge;
