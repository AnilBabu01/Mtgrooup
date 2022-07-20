import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Forgetpassword from "./components/auth/login/forgetpassword/Forgetpassword";
import Login from "./components/auth/login/Login";
import Signup from './components/auth/signup/Signup';
import Home from "./components/home/Home";
import Team from "./components/team/Team";
import Mine from "./components/mine/Mine";
import Invite from "./components/home/invite/Invite";
import Withdraw from "./components/home/withdraw/Withdraw";
const Main = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/forget-password" element={<Forgetpassword/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/team" element={<Team/>} />
          <Route path="/mine" element={<Mine/>} />
          <Route path="/invite" element={<Invite/>} />
          <Route path="/withdraw" element={<Withdraw/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Main;
