import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import home from "../images/home.png";
import team from "../images/team.png";
import write from "../images/write.png";
import SystemUpdateAltIcon from "@material-ui/icons/SystemUpdateAlt";
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
      case "/home":
        navigate("/home");
        break;
      case "team":
        navigate("/team");
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
        navigate("/home");
        break;
    }
  }, [activeTabs, navigate]);

  return (
    <>
      <div className="center-bottom-nav">
        <div className="bottom-nav">
          <div className="bn-tab">
            {activeTabs === "fiewin" ? (
              <>
                <div className="centericon">
                  <AppsIcon
                    style={{
                      color: "rgb(137,87,229)",
                      width: "35px",
                      height: "35px",
                    }}
                    onClick={() => setActiveTabs("home")}
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
                    onClick={() => setActiveTabs("home")}
                    className="imgsize"
                  />
                  <p className="notactivetext">Home</p>
                </div>
              </>
            )}
          </div>

          {mobile ? (
            ""
          ) : (
            <>
              <div className="bn-tab">
                <a
                  href="https://www.mtgrooups.in/mtgrooups.apk"
                  target="_blank"
                  style={{ marginLeft: "15px", marginTop: "18px" }}
                  className="icon-divv"
                >
                  <SystemUpdateAltIcon
                    style={{
                      color: "rgb(137,87,229)",
                      width: "35px",
                      height: "35px",
                    }}
                  />
                  <p style={{ marginTop: "0px", color: "gray" }}>Download</p>
                </a>
              </div>
            </>
          )}

          <div className="bn-tab">
            {activeTabs === "invite" ? (
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
            {activeTabs === "recharge" ? (
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
