import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import home from "../images/home.png";
import team from "../images/team.png";
import write from "../images/write.png";
import TelegramIcon from "@material-ui/icons/Telegram";
import ShareIcon from '@material-ui/icons/Share';
import AppsIcon from "@material-ui/icons/Apps";
import CreateIcon from "@material-ui/icons/Create";
import PeopleIcon from "@material-ui/icons/People";
import "./BottomNavbar.css";
const BottomNavBar = (props) => {
  const mobile = localStorage.getItem("isMobile");
  let navigate = useNavigate();
  const [activeTabs, setActiveTabs] = useState(props.name);
  useEffect(() => {
    switch (activeTabs) {
      case "/":
        navigate("/");
        break;
      case "team":
        navigate("/team");
        break;
        case "invite":
          navigate("/invite");
          break;
      case "mybank":
        navigate("/mybank");
        break;
      case "mine":
        navigate("/mine");
        break;
      case "mine-reset-password":
        navigate("/mine-reset-password");
        break;
      case "invite":
        navigate("/invite");
        break;

      default:
        navigate("/");
        break;
    }
  }, [activeTabs, navigate]);

  return (
    <>
      <div className="center-bottom-nav">
        <div className="bottom-nav">
          <div className="bn-tab">
            {activeTabs === "home" ? (
              <>
                <div className="centericon">
                  <AppsIcon
                    style={{
                      color: "rgb(137,87,229)",
                      width: "35px",
                      height: "35px",
                    }}
                    onClick={() => setActiveTabs("/")}
                    className="imgsize"
                  />

                  <p className="activetext">Home</p>
                </div>
              </>
            ) : (
              <>
                <div className="centericon">
                  <AppsIcon
                    style={{
                      color: "rgb(137,87,229)",
                      width: "35px",
                      height: "35px",
                    }}
                    onClick={() => setActiveTabs("/")}
                    className="imgsize"
                  />
                  <p className="notactivetext">Home</p>
                </div>
              </>
            )}
          </div>

        
              <div className="bn-tab">
                <a
                 href="https://t.me/mtgroopsofficial"
                 target="_blank"
                 
                  style={{ marginLeft: "15px", marginTop: "18px" }}
                  className="icon-divv"
                >
                  <TelegramIcon
                    style={{
                      color: "rgb(137,87,229)",
                      width: "35px",
                      height: "35px",
                    }}
                  />
                  <p style={{ marginTop: "0px", color: "gray" }}>Group</p>
                </a>
              </div>


              <div className="bn-tab">
            {activeTabs === "invite" ? (
              <>
                <div className="centericon">
                  <ShareIcon 
                    style={{
                      color: "rgb(137,87,229)",
                      width: "35px",
                      height: "35px",
                    }}
                    onClick={() => setActiveTabs("invite")}
                    className="imgsize"
                  />
                  <p className="activetext">Invite</p>
                </div>
              </>
            ) : (
              <>
                <div className="centericon">
                  <ShareIcon 
                    style={{
                      color: "rgb(137,87,229)",
                      width: "35px",
                      height: "35px",
                    }}
                    onClick={() => setActiveTabs("invite")}
                    className="imgsize"
                  />
                  <p className="notactivetext">Invite</p>
                </div>
              </>
            )}
          </div>

        
          <div className="bn-tab">
            {activeTabs === "team" ? (
              <>
                <div className="centericon">
                  <PeopleIcon
                    style={{
                      color: "rgb(137,87,229)",
                      width: "35px",
                      height: "35px",
                    }}
                    onClick={() => setActiveTabs("team")}
                    className="imgsize"
                  />
                  <p className="activetext">Team</p>
                </div>
              </>
            ) : (
              <>
                <div className="centericon">
                  <PeopleIcon
                    style={{
                      color: "rgb(137,87,229)",
                      width: "35px",
                      height: "35px",
                    }}
                    onClick={() => setActiveTabs("team")}
                    className="imgsize"
                  />
                  <p className="notactivetext">Team</p>
                </div>
              </>
            )}
          </div>


          <div className="bn-tab">
            {activeTabs === "mine" ? (
              <>
                <div className="centericon">
                  <CreateIcon
                    style={{
                      color: "rgb(137,87,229)",
                      width: "35px",
                      height: "35px",
                    }}
                    onClick={() => setActiveTabs("mine")}
                    className="imgsize"
                  />

                  <p className="activetext">Mine</p>
                </div>
              </>
            ) : (
              <>
                <div className="centericon">
                  <CreateIcon
                    style={{
                      color: "rgb(137,87,229)",
                      width: "35px",
                      height: "35px",
                    }}
                    onClick={() => setActiveTabs("mine")}
                    className="imgsize"
                  />
                  <p className="notactivetext">Mine</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomNavBar;
