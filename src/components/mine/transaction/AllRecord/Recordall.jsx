import React, { useState, useEffect } from "react";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import {useNavigate} from"react-router-dom"
import "../Record.css";
import Record from "../Record";

const Recordall = ({ searchdata, searchloader }) => {
  const [allrecord, setallrecord] = useState("");
  const navigate =useNavigate();
  axios.defaults.headers.get["Authorization"] = `Bearer ${localStorage.getItem(
    "tokenauth"
  )}`;
  const logout = () => {
   
    localStorage.removeItem("tokenauth");
    setTimeout(() => {
    
      navigate("/login");
    }, 1000);
  };
  const getrecharge = async () => {
    const response = await axios.get(
      "https://www.admin.mtgrooups.in/api/transaction-history"
    );
    if(response.status===401){
      logout();
    }
    if (response.data.status === true) {
      setallrecord(response.data.data);
    }

    console.log("recharge data", response.data.data);
  };

  useEffect(() => {
    getrecharge();
  }, []);

  return (
    <>
      {searchloader && (
        <>
          {!searchdata && (
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
            </>
          )}

          {allrecord && (
            <>
              {allrecord.length === 0 && (
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

      {(!searchdata && !allrecord) || !searchloader ? (
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

export default Recordall;
