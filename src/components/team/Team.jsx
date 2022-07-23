import React from "react";
import BottomNavBar from "../bottomnavbar/BottomNavbar";
import CloseIcon from "@material-ui/icons/Close";
import PeopleIcon from "@material-ui/icons/People";
import "./Teams.css";
import TeamTap from "./TeamTap";
import { useNavigate } from "react-router-dom";
const Team = () => {
  const navigate = useNavigate();
      return(
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
              <p className="chenge-color">₹0</p>
            </td>
            <td>
              {" "}
              <p>Team recharge(₹)</p>
              <p className="chenge-color">₹0</p>
            </td>
            <td>
              {" "}
              <p>Team Number</p>
              <p className="chenge-color">1</p>
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

     <TeamTap/>
      <BottomNavBar name="team" />
    </>
  );
};

export default Team;
