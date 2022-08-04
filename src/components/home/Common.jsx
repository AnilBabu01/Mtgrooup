import React, { useState } from "react";
import axios from "axios";
import "./Common.css";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",

    width: "100%",
    "&:focus": {
      outline: "none",
    },
  },
  paper: {
    backgroundColor: "rgb(137,87,229)",
    border: "none",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    "&:focus": {
      outline: "none",
    },
    width: "300px",
    height: "150px",
    borderRadius: "15px",

    color: "white",
    fontSize: "20px",
  },
  paper1: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
}));
const Common = ({
  img,
  rupee,
  dailyincome,
  revenuecycle,
  totalrevenue,
  id,
  title,
  setgetagainuserinf,
  getagainuserinfo,
}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [succussbuy, setsuccussbuy] = React.useState(false);
  const [notbuy, setnotbuy] = useState(false);
  const [insifficent, setinsifficent] = useState(false);
  const [message, setmessage] = useState("");
  const success = "success";
  const handleOpen = () => {
    setOpen(true);
  };

  axios.defaults.headers.post["Authorization"] = `Bearer ${localStorage.getItem(
    "tokenauth"
  )}`;

  const buy = async (id) => {
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/api/purchaseProduct`,
      {
        plan_id: id,
      }
    );

    console.log(response);
    if (response.data.status === true) {
      setgetagainuserinf(!getagainuserinfo)
      setmessage(response.data.msg);
      handleOpen();
      setTimeout(() => {}, 8000);
    }
    if (response.data.status === false) {
      setmessage(response.data.msg);
      handleOpen();
      setTimeout(() => {}, 8000);
    }
  };

  const getid = (id) => {
    console.log("buy id", id);

    var answer = window.confirm("Do you want to buy this plan");
    if (answer) {
      //some code
      buy(id);
      console.log(answer);
    } else {
      //some code
      console.log(answer);
    }
  };
  return (
    <>
      <Modal
        className={classes.modal}
        open={open}
        onClose={open}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className={classes.paper1}>{message}</div>
            <div className={classes.paper1}>
              <button className="logout-btnn1" onClick={() => setOpen(false)}>
                Ok
              </button>
            </div>
          </div>
        </Fade>
      </Modal>
      <div
        className="plan-com-div"
        onClick={() => {
          getid(id);
        }}
      >
        <div className="plan-img-div">
          <img src={img} alt="jew1" />
        </div>
        <div className="plan-text-div">
          <h2>{title ? title : "No title"}</h2>

          <p>
            Input Costs :{" "}
            <span className="plan-text-div-inber">₹{rupee ? rupee : "0"}</span>
          </p>
          <p>
            Daily Icome :{" "}
            <span className="plan-text-div-inber">
              ₹{dailyincome ? dailyincome : "0"}
            </span>
          </p>
          <p>
            Revenue cycle :{" "}
            <span className="plan-text-div-inber">
              {revenuecycle ? revenuecycle : "0"} day
            </span>
          </p>
          <p>
            Total Revenue :{" "}
            <span className="plan-text-div-inber">
              ₹{totalrevenue ? totalrevenue : "0"}
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Common;
