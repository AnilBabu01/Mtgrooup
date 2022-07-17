import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import { useNavigate } from "react-router-dom";
import "./Close.css";
const Close = ({title}) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="close-div">
        <CloseIcon onClick={() => navigate("/")} />
        <div className="title-div">
          <p>{title}</p>
        </div>
      </div>
    </>
  );
};

export default Close;
