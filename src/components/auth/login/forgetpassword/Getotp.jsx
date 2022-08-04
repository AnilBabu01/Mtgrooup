import React, { useState } from "react";
import axios from "axios";
import Alert from "@mui/material/Alert";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./Getotp.css";
const Getotp = () => {
  const [credentials, setCredentials] = useState({
    number: "",
  });

  const [showprocess, setshowprocess] = useState(false);
  const [message, setmessage] = useState("");
  const success = "success";

  const { number } = credentials;
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setshowprocess(true)
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/api/sendForgetPasswordOtp`,
      {
        mobile_no: number,
      }
    );
    if (response.data.status === true) {
      setmessage(response.data.msg);
      setTimeout(() => {
        setshowprocess(false)
        setmessage("");
      }, 2000);
    }

    if (response.data.status === false) {
      setmessage(response.data.msg);
      setTimeout(() => {
        setmessage("");
        setshowprocess(false)
      }, 2000);
    }

    console.log("registe data", number, response);
  };
  return (
    <>
        {message && (
            <Alert variant="filled" severity={success}>
              {message}
            </Alert>
          )}   
      <form onSubmit={handleSubmit}>
        <div className="for-input-div1">
          <input
            onChange={onChange}
            value={number}
            name="number"
            type="text"
            placeholder="Phone number"
          />
          <button disabled={!number ? true : ""}>
          {showprocess ? (
                    <CircularProgress
                      style={{ width: "18px", height: "18px" }}
                    />
                  ) : (
                    "Otp"
                  )}
            </button>
        </div>
      </form>
    </>
  );
};

export default Getotp;
