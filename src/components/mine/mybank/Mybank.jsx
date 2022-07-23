import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@material-ui/icons/Close";
import "./Mybank.css";
import BottomNavBar from "../../bottomnavbar/BottomNavbar";
const Mybank = () => {
  const [num, setnum] = useState("75057##88");
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    number: "",
    bankno: "",
    fullname: "",
    ifsc: "",
    withdrawpassword: "",
  });

  const { number, bankno, fullname, ifsc, withdrawpassword } = credentials;
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(
      "change password data",
      number,
      bankno,
      fullname,
      ifsc,
      withdrawpassword
    );
  };
  return (
    <>
      <div className="close-div6">
        <CloseIcon
          style={{ color: "white" }}
          onClick={() => navigate("/mine")}
        />
        <div className="title-div6">
          <p>My Bank</p>
        </div>
      </div>
      <div className="pad-div">
        <div className="forget-div">
          <form onSubmit={handleSubmit}>
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
                placeholder="Bank Account"
              />
            </div>
            <div className="for-input-div">
              <input
                type="text"
                onChange={onChange}
                value={fullname}
                name="fullname"
                placeholder="Full Name"
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
              <button>Update</button>
            </div>
          </form>
        </div>
      </div>

      <BottomNavBar name="mybank" />
    </>
  );
};

export default Mybank;
