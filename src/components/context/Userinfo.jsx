import { useState, createContext } from "react";
import{useNavigate}from "react-router-dom"
import axios from "axios";
const userinfocontext = createContext();
export default function Userinfo(props) {
  const navigate = useNavigate();
  const [user, setuser] = useState("");
  const [plans, setplans] = useState("");
  const logout = () => {
   
    localStorage.removeItem("tokenauth");
    setTimeout(() => {
    
      navigate("/login");
    }, 1000);
  };
  
  axios.defaults.headers.get["Authorization"] = `Bearer ${localStorage.getItem(
    "tokenauth"
  )}`;

  const getuserinfo = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/user`);
    if(response.status===401){
      logout();
    }
    setuser(response.data);
  };

  const getplans = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/api/plans`
    );
    if(response.status===401){
      logout();
    }
    setplans(response.data);
  };

  return (
    <userinfocontext.Provider value={{ user, plans, getuserinfo, getplans }}>
      {props.children}
    </userinfocontext.Provider>
  );
}

export {userinfocontext};
