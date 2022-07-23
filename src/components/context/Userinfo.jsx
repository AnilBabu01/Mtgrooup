import { useState, createContext } from "react";
import axios from "axios";
const userinfocontext = createContext();
export default function Userinfo(props) {
  const [user, setuser] = useState("");
  const [plans, setplans] = useState("");
 
  axios.defaults.headers.get["Authorization"] = `Bearer ${localStorage.getItem(
    "tokenauth"
  )}`;

  const getuserinfo = async () => {
    const response = await axios.get("https://www.admin.mtgrooups.in/api/user");

    setuser(response.data);
  };

  const getplans = async () => {
    const response = await axios.get(
      "https://www.admin.mtgrooups.in/api/plans"
    );

    setplans(response.data);
  };

  return (
    <userinfocontext.Provider value={{ user, plans, getuserinfo, getplans }}>
      {props.children}
    </userinfocontext.Provider>
  );
}

export {userinfocontext};