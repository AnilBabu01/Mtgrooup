import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import home from "../images/home.png";
import team from "../images/team.png";
import write from "../images/write.png";
import "./BottomNavbar.css";
const BottomNavBar = (props) => {
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
                  <img
                    className="imgsize"
                    src={home}
                    alt="home"
                    onClick={() => setActiveTabs("home")}
                  />
                  <p className="activetext">Home</p>
                </div>
              </>
            ) : (
              <>
                <div className="centericon">
                  <img
                    className="imgsize"
                    src={home}
                    alt="home1"
                    onClick={() => setActiveTabs("home")}
                  />
                  <p className="notactivetext">Home</p>
                </div>
              </>
            )}
          </div>
          <div className="bn-tab">
            {activeTabs === "invite" ? (
              <>
                <div className="centericon">
                  <img
                    className="imgsize"
                    src={team}
                    alt="share"
                    onClick={() => setActiveTabs("team")}
                  />
                  <p className="activetext">Team</p>
                </div>
              </>
            ) : (
              <>
                <div className="centericon">
                  <img
                    className="imgsize"
                    src={team}
                    alt="share1"
                    onClick={() => setActiveTabs("team")}
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
                  <img
                    className="imgsize"
                    src={write}
                    alt="rechar"
                    onClick={() => setActiveTabs("mine")}
                  />
                  <p className="activetext">Mine</p>
                </div>
              </>
            ) : (
              <>
                <div className="centericon">
                  <img
                    className="imgsize"
                    src={write}
                    alt="rechar"
                    onClick={() => setActiveTabs("mine")}
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
