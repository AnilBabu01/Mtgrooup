import React, { useEffect, useState, useContext } from "react";
import CloseIcon from "@material-ui/icons/Close";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import Updatebankdel from "./Updatebankdel";
import axios from "axios";
import { userinfocontext } from "../../context/Userinfo";
import "./Withdraw.css";
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
    width: "600px",
    borderRadius: "15px",
  },
  paper1: {
    backgroundColor: "rgb(137,87,229)",
    border: "none",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    color:"white",
    "&:focus": {
      outline: "none",
    },
    width: "650px",
    height: "150px",
    borderRadius: "15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "25px",
  },
}));

const Withdraw = () => {
  const classes = useStyles();
  const context = useContext(userinfocontext);
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [openupdate, setopenupdate] = useState(true);
  const [userbank, setuserbank] = useState("");
  const [totalamout, settotalamout] = useState("");
  const [closeupdate, setcloseupdate] = useState(false);
  const [useramount, setuseramount] = useState("")
  const [message, setmessage] = useState("");

  const token = localStorage.getItem("tokenauth");
  const { user, getuserinfo } = context;
  
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  axios.defaults.headers.get["Authorization"] = `Bearer ${localStorage.getItem(
    "tokenauth"
  )}`;

  axios.defaults.headers.post["Authorization"] = `Bearer ${localStorage.getItem(
    "tokenauth"
  )}`;

  const getuserbankinfo = async () => {
    const response = await axios.get("https://www.admin.mtgrooups.in/api/bank");

    setuserbank(response.data.data[0]);
  };
  const bankstatus = async () => {
    const res = await axios.get("https://www.admin.mtgrooups.in/api/user");
    setopenupdate(res.data.data.isBank);
    setuseramount(res.data.data.amount)
      console.log(res)
  };
  useEffect(() => {
    if (!token) {
      navigate("/");
    }
    getuserinfo();
    getuserbankinfo();
    bankstatus();
  }, [closeupdate]);

  if (openupdate === false) {
    setTimeout(() => {
      handleOpen();
    }, 1000);
  }

  const onchange = (e) => {
    settotalamout(e.target.value);
  };
  const logout = () => {
   
    localStorage.removeItem("tokenauth");
    setTimeout(() => {
    
      navigate("/login");
    }, 1000);
  };
  const withdrawfub = async () => {
    console.log("withdraw");
    if(totalamout<"200"){
      setOpen1(true);
      setmessage("The minimum withdraw amount per time is not less than Rs 200");
      setTimeout(() => {
        setmessage("");
        setOpen1(false);
      }, 2000);
    }
    else
    {
      const response = await axios.post(
        "https://www.admin.mtgrooups.in/api/withdraw",
        {
          withdrawl_type_id: userbank ? userbank.id : "",
          amount: totalamout,
        }
      );
        
        if(response.status===401){
          logout();
        }
        if (response.data.status === true) {
          getuserbankinfo();
          setOpen1(true);
          setmessage(response.data.msg);
          setTimeout(() => {
            setmessage("");
            setOpen1(false);
          }, 2000);
        }
        if (response.data.status === false) {
          setOpen1(true);
          setmessage(response.data.msg);
          setTimeout(() => {
            setmessage("");
            setOpen1(false);
          }, 2000);
        }
    }
   
   
    
  };
 
  return (
    <>
      <div className="close-div">
        <CloseIcon
          style={{ color: "white" }}
          onClick={() => navigate("/")}
        />
        <div className="title-div">
          <p>Withdraw</p>
        </div>
      </div>
      {!closeupdate && (
        <>
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
                  <Updatebankdel setcloseupdate={setcloseupdate} />
                </div>
              </Fade>
            </Modal>
          </div>
        </>
      )}
      <Modal
        className={classes.modal}
        open={open1}
        onClose={handleClose1}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open1}>
          <div className={classes.paper1}>
           {message}
          </div>
        </Fade>
      </Modal>
      <div className="recharg-div-home1">
        <div className="withdrawoptins1">
          <div className="tax-div">
            <p>Tax 10%</p>
          </div>
          <div className="am-div">
            <p>₹ </p>
            <input
              type="text"
              value={totalamout}
              name="totalamout"
              onChange={onchange}
            />
            <h2>Amount</h2>
          </div>
          <div className="bal-div">
            <p>Balance: ₹ {useramount?useramount:"0.00"} </p>
            <p className="with-p">Withdraw All</p>
          </div>
        </div>
      </div>

      <div className="recharg-div-home1">
        <div className="withdrawoptins1">
          <div className="bank-del">
            <p>Name:</p>
            <input type="text" value={userbank ? userbank.name : ""} />
          </div>
          <div className="bank-del">
            <p>Phone Number:</p>
            <input type="text" value={userbank ? userbank.phone_no : ""} />
          </div>
          <div className="bank-del">
            <p>Bank account:</p>
            <input type="text" value={userbank ? userbank.account_no : ""} />
          </div>
          <div className="bank-del">
            <p>Full name:</p>
            <input type="text" value={userbank ? userbank.name : ""} />
          </div>
          <div className="bank-del">
            <p>IFSC:</p>
            <input type="text" value={userbank ? userbank.ifsc_code : ""} />
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
        <button onClick={withdrawfub}>withdraw</button>
      </div>
    </>
  );
};

export default Withdraw;
