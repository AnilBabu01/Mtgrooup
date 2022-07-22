import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import "./Withdraw.css";
import Updatebankdel from "./Updatebankdel";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    "&:focus": {
      outline: "none",
    },
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "none",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    "&:focus": {
      outline: "none",
    },
    width:"600px",
    borderRadius:"15px"
  },
}));

const Withdraw = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [num, setnum] = useState("");
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (num === "") {
    setTimeout(() => {
      handleOpen();
    }, 2000);
  }

  return (
    <>
      <div className="close-div">
        <CloseIcon
          style={{ color: "white" }}
          onClick={() => navigate("/home")}
        />
        <div className="title-div">
          <p>Withdraw</p>
        </div>
      </div>

      <div>
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
               <Updatebankdel setOpen={setOpen}/>
            </div>
          </Fade>
        </Modal>
      </div>

      <div className="recharg-div-home1">
        <div className="withdrawoptins1">
          <div className="tax-div">
            <p>Tax 10%</p>
          </div>
          <div className="am-div">
            <p>₹ </p>
            <h2>Amount</h2>
          </div>
          <div className="bal-div">
            <p>Balance: ₹ 0.25</p>
            <p className="with-p">Withdraw All</p>
          </div>
        </div>
      </div>

      <div className="recharg-div-home1">
        <div className="withdrawoptins1">
          <div className="bank-del">
            <p>Phone Number:</p>
            <input type="text" value={num} />
          </div>
          <div className="bank-del">
            <p>Bank account:</p>
            <input type="text" value={num} />
          </div>
          <div className="bank-del">
            <p>Full name:</p>
            <input type="text" value={num} />
          </div>
          <div className="bank-del">
            <p>IFSC:</p>
            <input type="text" value={num} />
          </div>
          <div className="bank-del">
            <p>Withdraw password</p>
            <input type="password" value="" />
          </div>
        </div>
      </div>
      <div className="recharg-div-home1">
        <div className="withdrawoptins1">
          <div className="withdraw-div">
            <p>
              •The withdraw and arrival time is subject to the real-time
              processing time of the local bank, and the normal arrival time is
              10 minutes to 5 hours.{" "}
            </p>
          </div>
          <div className="withdraw-div">
            <p>
              •The minimum withdraw amount per time is not less than Rs 200.
            </p>
          </div>
          <div className="withdraw-div">
            <p>•Withdrawal time is. 08:40-20:40 every day</p>
          </div>
        </div>
      </div>

      <div className="with-div">
        <button>Please pay 20% withdraw tax first</button>
      </div>
    </>
  );
};

export default Withdraw;
