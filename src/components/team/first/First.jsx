import React, { useState, useEffect } from "react";
import Commoncard from "../Commoncard";
import axios from "axios";
const First = () => {
  const [levelfirst, setlevelfirst] = useState("");
  axios.defaults.headers.get["Authorization"] = `Bearer ${localStorage.getItem(
    "tokenauth"
  )}`;

  const getlevelfirst = async () => {
    const response = await axios.get(
      "https://www.admin.mtgrooups.in/api/teams/1"
    );

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
    </>
  );
};

export default First;
