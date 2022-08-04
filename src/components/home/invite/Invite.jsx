import React, { useContext, useEffect, useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import { useNavigate } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import BottomNavbar from "../../bottomnavbar/BottomNavbar";
import { CopyToClipboard } from "react-copy-to-clipboard";
import axios from "axios";
import "./Invite.css";

const Invite = () => {
  const navigate = useNavigate();
  const [user, setuser] = useState("");
  const [code, setcode] = useState("")
  const token = localStorage.getItem("tokenauth");
  const [copydata, setcopydata] = useState("");
  const [copied, setcopied] = useState(false);
  
  axios.defaults.headers.get["Authorization"] = `Bearer ${localStorage.getItem(
    "tokenauth"
  )}`;
  const getuserinfo = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/api/user`
    );
    setcode(response.data.data.refer_code)
    setcopydata(`https://www.mtgrooups.in/signup/${response.data.data.refer_code}`)
    console.log("pplans", response.data.promotion);
    setuser(response.data.promotion)
  };

setTimeout(() => {
  setcopied(false)
}, 2000);
  useEffect(() => {
    getuserinfo();
    if (!token) {
      navigate("/login");
    }
    getuserinfo();
  }, []);

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
            Bonus:<span>Rs.{user ? user.bonus : "0"}</span>
          </p>
        </div>

        <div className="total-mmain-div">
          <div className="total-mmain-div-btn">
            <p>Total Peaple</p>
            <p>{user ? user.peopleCount : "0"}</p>
          </div>
          <div className="total-mmain-div-btn">
            <p>Contribution</p>
            <p>{user ? user.bonus : "0"}</p>
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
                value={code}
              />
            </div>
            <div className="margin-div">
              <TextField
                className="text-input-mui"
                required
                id="link"
                variant="outlined"
                label="My Promotion Link"
                value={copydata}
              />
            </div>
          </form>
        </div>
        <CopyToClipboard text={copydata} onCopy={() => setcopied(true)}>
          <div className="total-mmain-div1">
            <button className="total-mmain-div-btn1">Copy Link</button>
          </div>
        </CopyToClipboard>
        <div className="copy-left">{copied ? <p>Copied</p> : null}</div>
      </div>

      <BottomNavbar name="invite" />
    </>
  );
};

export default Invite;
