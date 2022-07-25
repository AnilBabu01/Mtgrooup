import React, { useState ,useEffect} from "react";
import First from "./first/First";
import Second from "./second/Second";
import CloseIcon from "@material-ui/icons/Close";
import PeopleIcon from "@material-ui/icons/People";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Third from "./third/Third";
import "./TeamTap.css";

const TeamTap = () => {
  const navigate = useNavigate();
  const [toggleState, setToggleState] = useState(1);
   const [teamno, setfirst] = useState(1)
   const [teamlevelinfo, setteamlevelinfo] = useState("")
  const toggleTab = (index) => {
    setToggleState(index);
    if(index===1)
    {
      setfirst(1)
    }
    if(index===2)
    {
      setfirst(2)
    }
    if(index===3)
    {
      setfirst(3)
    }
  };

  axios.defaults.headers.get["Authorization"] = `Bearer ${localStorage.getItem(
    "tokenauth"
  )}`;

      const getteaminfo=async()=>{
        const response = await axios.get(
          `https://www.admin.mtgrooups.in/api/teams/${teamno}`
        );
        setteamlevelinfo(response.data)
 }

useEffect(() => {
  getteaminfo();
}, [toggleState,teamno])


  return (
    <>

<div className="close-div">
        <CloseIcon style={{color:'white'}} onClick={() => navigate("/mine")} />
        <div className="title-div">
          <p style={{ fontSize: "22px" }} >My team</p>
        </div>
      </div>

      <div className="team-type-div">
        <table className="table">
          <tr>
            <td>
              {" "}
              <p>Team assests</p>
              <p className="chenge-color">₹{teamlevelinfo?teamlevelinfo.total_team_assets:"0"}</p>
            </td>
            <td>
              {" "}
              <p>Team recharge(₹)</p>
              <p className="chenge-color">₹{teamlevelinfo?teamlevelinfo.total_recharge:"0"}</p>
            </td>
            <td>
              {" "}
              <p>Team Number</p>
              <p className="chenge-color">{teamlevelinfo?teamlevelinfo.team_member:"0"}</p>
            </td>
          </tr>
        </table>
      </div>
       <div onClick={() => navigate("/invite")}  className="share-div">
      <div className="share-people">
        <PeopleIcon/>
       <p>Share with Friends</p> 
      </div>
      <div>
        <img src="https://res.cloudinary.com/fiewin/image/upload/images/arrowRight.png" alt="rightgo"/>
      </div>
     </div>

    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          First
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Second
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Third
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <First />
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <Second />
        </div>
        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <Third />
        </div>
      </div>
    </div>

    </>
  );
};

export default TeamTap;
