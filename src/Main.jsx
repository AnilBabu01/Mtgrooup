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
import Mybank from "./components/mine/mybank/Mybank";
import Transaction from "./components/mine/transaction/Transaction";
import Mineresetpassword from "./components/mine/repassword/Mineresetpassword";
import Recharge from "./components/home/recharge/Recharge";
import Userinfo from "./components/context/Userinfo";
import Myplans from "./components/mine/purchasedPlans/Myplans";
const Main = () => {
  return (
    <>
      <BrowserRouter>
      <Userinfo>
        <Routes>
          <Route path="/signup/:code" element={<Signup/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/forget-password" element={<Forgetpassword/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/team" element={<Team/>} />
          <Route path="/mine" element={<Mine/>} />
          <Route path="/invite" element={<Invite/>} />
          <Route path="/withdraw" element={<Withdraw/>} />
          <Route path="/mybank" element={<Mybank/>} />
          <Route path="/transaction" element={<Transaction/>} />
          <Route path="/mine-reset-password" element={<Mineresetpassword/>} />
          <Route path="/recharge" element={<Recharge/>} />
          <Route path="/myplans" element={<Myplans/>} />
        </Routes>
        </Userinfo>
      </BrowserRouter>
    </>
  );
};

export default Main;
