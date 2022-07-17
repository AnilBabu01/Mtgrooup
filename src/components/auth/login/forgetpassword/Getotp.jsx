import React, { useState } from "react";
import "./Getotp.css";
const Getotp = () => {
  const [credentials, setCredentials] = useState({
    number: "",
  });

  const { number } = credentials;
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { number } = credentials;
    console.log("registe data", number);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="for-input-div1">
          <input
            onChange={onChange}
            value={number}
            name="number"
            type="text"
            placeholder="Phone number"
          />
          <button>Otp</button>
        </div>
      </form>
    </>
  );
};

export default Getotp;
