import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@material-ui/icons/Close";
import axios from "axios";
import Alert from "@mui/material/Alert";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./Mybank.css";
import BottomNavBar from "../../bottomnavbar/BottomNavbar";
import { formLabelClasses } from "@mui/material";
const Mybank = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    name: "",
    number: "",
    bankno: "",
    bankname: "",
    ifsc: "",
    withdrawpassword: "",
  });
  const [bankidd, setbankidd] = useState("");
  const [successful, setsuccessful] = useState(false);
  const [userallready, setuserallready] = useState(false);
  const [showprocess, setshowprocess] = useState(false);
  const token = localStorage.getItem("tokenauth");
  const success = "success";
  const warning = "warning";
  const { number, bankno, bankname, ifsc, withdrawpassword, name } =
    credentials;
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  axios.defaults.headers.post["Authorization"] = `Bearer ${localStorage.getItem(
    "tokenauth"
  )}`;
  axios.defaults.headers.get["Authorization"] = `Bearer ${localStorage.getItem(
    "tokenauth"
  )}`;

  const bankid = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/bank`);

    setbankidd(response.data.data[0]);

    console.log("bank", bankidd);
  };

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
    bankid();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setshowprocess(true);
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/api/addBank`,
      {
        withdrawl_id: bankidd.id,
        withdrawl_password: withdrawpassword,
        phone_no: number,
        ifsc_code: ifsc,
        name: name,
        account_no: bankno,
        bank_name: bankname,
      }
    );

    if (response.data.status === true) {
      setsuccessful(true);
      setTimeout(() => {
        setsuccessful(false);
        setshowprocess(false);
        navigate("/mine")
      }, 2000);
    }
    if (response.data.status === false) {
      setuserallready(true);
      setTimeout(() => {
        setuserallready(false);
        setshowprocess(false);
      }, 2000);
    }

    console.log(
      "change password data",

      response
    );
  };
  return (
    <>
       <div className="close-div6">
        <CloseIcon
          style={{ color: "white" }}
          onClick={() => navigate("/mine")}
        />
        <div className="title-div12">
          <p>My Bank</p>
        </div>
      </div>
      <div className="pad-div">
        {successful || userallready ? (
          <Alert variant="filled" severity={successful ? success : warning}>
            {successful
              ? "Bank Account Details Added Successfully"
              : "Please enter withdrawl_type_id "}
          </Alert>
        ) : (
          ""
        )}
        <div className="forget-div">
          <form onSubmit={handleSubmit}>
            <div className="for-input-div">
              <input
                type="text"
                onChange={onChange}
                value={name}
                name="name"
                placeholder="Name"
              />
            </div>
            <div className="for-input-div">
              <input
                type="text"
                onChange={onChange}
                value={number}
                name="number"
                placeholder="Phone Number"
              />
            </div>
            <div className="for-input-div">
              <input
                type="text"
                onChange={onChange}
                value={bankno}
                name="bankno"
                placeholder="Account No"
              />
            </div>
            <div className="for-input-div">
              <input
                type="text"
                onChange={onChange}
                value={bankname}
                name="bankname"
                placeholder="Bank Name"
              />
            </div>
            <div className="for-input-div">
              <input
                type="text"
                onChange={onChange}
                value={ifsc}
                name="ifsc"
                placeholder="IFSC"
              />
            </div>
            <div className="for-input-div">
              <input
                type="password"
                onChange={onChange}
                value={withdrawpassword}
                name="withdrawpassword"
                placeholder="Withdraw Password"
              />
            </div>
            <div className="for-input-div">
              <button>
                {showprocess ? (
                  <CircularProgress style={{ width: "21px", height: "21px" }} />
                ) : (
                  "Update"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      <BottomNavBar name="mybank" />
    </>
  );
};

export default Mybank;
