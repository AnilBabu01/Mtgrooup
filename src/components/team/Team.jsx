import React, { useEffect } from "react";
import BottomNavBar from "../bottomnavbar/BottomNavbar";
import "./Teams.css";
import TeamTap from "./TeamTap";
import { useNavigate } from "react-router-dom";
const Team = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("tokenauth");
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);
  console.log(token);
  return (
    <>
      <TeamTap />
      <BottomNavBar name="team" />
    </>
  );
};

export default Team;
