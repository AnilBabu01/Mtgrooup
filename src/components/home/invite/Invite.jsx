import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import { useNavigate } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import BottomNavbar from "../../bottomnavbar/BottomNavbar";
import "./Invite.css";

const Invite = () => {
  const navigate = useNavigate();
  const copylink = () => {
    var text = document.getElementById("code");
    text.select();
    navigator.clipboard.writeText(text.value);
    var text1 = document.getElementById("link");
    text1.select();
    navigator.clipboard.writeText(text1.value);
  };

  return (
    <>
      <div className="close-div1">
        <CloseIcon
          style={{ color: "white" }}
          onClick={() => navigate("/mine")}
        />
        <div className="title-div1">
          <p>Promotion</p>
        </div>
      </div>

      <div className="invite-main-div">
        <div className="bonus-div">
          <p>
            Bonus:<span>Rs.0</span>
          </p>
        </div>

        <div className="total-mmain-div">
          <div className="total-mmain-div-btn">
            <p>Total Peaple</p>
            <p>0</p>
          </div>
          <div className="total-mmain-div-btn">
            <p>Contribution</p>
            <p>0</p>
          </div>
        </div>
        <div className="form-mui">
          <form noValidate autoComplete="off">
            <div className="margin-div">
              <TextField
                className="text-input-mui"
                required
                id="code"
                variant="outlined"
                label="My Propotion Code"
                defaultValue="EJRUFV12"
              />
            </div>
            <div className="margin-div">
              <TextField
                className="text-input-mui"
                required
                id="link"
                variant="outlined"
                label="My Promotion Link"
                defaultValue="https://www.google.com/"
              />
            </div>
          </form>
        </div>
        <div onClick={copylink} className="total-mmain-div1">
          <button className="total-mmain-div-btn1">Copy Link</button>
        </div>
      </div>

      <BottomNavbar name="invite" />
    </>
  );
};

export default Invite;
