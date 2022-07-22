import React, { useState } from "react";

const Updatebankdel = ({setOpen}) => {
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
    setOpen(false)
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
    </>
  );
};

export default Updatebankdel;
