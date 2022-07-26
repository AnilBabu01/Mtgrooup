import React, { useState } from "react";
import "./Adminbankdel.css";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@mui/material/Alert";
import axios from "axios";
import BankdelCopy from "./BankdelCopy";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
    "&:focus": {
      outline: "none",
    },
    width: "650px",
    height: "150px",
    borderRadius: "15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color:"white",
    fontSize: "25px",
  },
}));
const Adminbankdel = ({ transactionid }) => {
  const classes = useStyles();
  const [utr, setutr] = useState("");
  const [message, setmessage] = useState("");
  const onchange = (e) => {
    setutr(e.target.value);
  };
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  axios.defaults.headers.post["Authorization"] = `Bearer ${localStorage.getItem(
    "tokenauth"
  )}`;
  const submit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/api/updateUtrNo`,
      {
        transaction_id: transactionid,
        utr_no: utr,
      }
    );
    
    if (response.data.status === true) {
      handleOpen();
      setmessage(response.data.msg);
      setTimeout(() => {
        setmessage("");
        setOpen(false);
      }, 2000);
    }
    if (response.data.status === false) {
      setmessage(response.data.msg);
      handleOpen();
      setTimeout(() => {
        setmessage("");
        setOpen(false);
      }, 2000);
    }
};
  return (
    <>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            {message}
          </div>
        </Fade>
      </Modal>
      <div className="main-step-div">
        <div className="step1-div">
          <BankdelCopy />

          <form onSubmit={submit}>
            <div>
              <h2>Transaction Details</h2>
              <p>Enter UTR Number</p>
              <input
                className="utr-input"
                type="text"
                placeholder="UTR Number"
                onChange={onchange}
                value={utr}
                name="utr"
              />
            </div>
            <button className="rec-brn">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Adminbankdel;
