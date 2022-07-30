import React, { useState, useEffect } from "react";
import Commoncard from "../Commoncard";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";
import {useNavigate} from"react-router-dom"
const Third = () => {
  const [levelfirst, setlevelfirst] = useState("");
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
  const getlevelfirst = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/api/teams/3`
    );
    if(response.status===401){
      logout();
    }
    if (response.data.status === true) {
      setlevelfirst(response.data.data);
    }

    console.log("recharge data", response.data.data);
  };

  useEffect(() => {
    getlevelfirst();
  }, []);

  return (
    <>
      {levelfirst &&
        levelfirst.map((item) => {
          return (
            <Commoncard
              recharge={item.recharge}
              withdraw={item.withdraw}
              name={item.name}
              phone={item.mobile_no}
              recommendednumbre={item.recommended_number}
              regtime={item.created_at}
            />
          );
        })}

      {levelfirst && (
        <>
          {levelfirst.length === 0 && (
            <>
              <div className="not-found-div">
                <h2>Record Not Found</h2>
              </div>
            </>
          )}
        </>
      )}
        {!levelfirst? (
        <>
          <div className="loader">
            <CircularProgress style={{ width: "10%", height: "10%" }} />
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default Third;
