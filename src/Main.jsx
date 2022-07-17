import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Forgetpassword from "./components/auth/login/forgetpassword/Forgetpassword";
import Login from "./components/auth/login/Login";
import Signup from './components/auth/signup/Signup';
const Main = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/forget-password" element={<Forgetpassword/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Main;
