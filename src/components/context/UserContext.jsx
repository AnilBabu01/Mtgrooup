import React, { createContext,useState } from "react";
import axios from "axios";



const UserContext = (props) => {
  const [user, setuser] = useState("")
  const [plans, setplans] = useState("")
  const Useinfo = createContext();
  axios.defaults.headers.get["Authorization"] = `Bearer ${localStorage.getItem(
    "tokenauth"
  )}`;

    const getuserinfo= async()=>{
        const response = await axios.get(
            "https://tanishq.luckywin999.in/api/user")
    
            setuser(response.data)
    }
    
    
    const getplans= async()=>{
        const response = await axios.get(
            "https://tanishq.luckywin999.in/api/plans")
    
            setplans(response.data)
    }

  return (
    <>
      <Useinfo.Provider
        value={{user,plans,getuserinfo,getplans}}
      >
        {props.children}
      </Useinfo.Provider>
    </>
  );
};

export default UserContext;
