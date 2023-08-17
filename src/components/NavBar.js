import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../componentsCss/NavBar.css";
import logo from "../img/logo.png";
import { useSelector } from "react-redux";

export default function NavBar() {
  //   const { isLogin } = useSelector(({ login }) => login);
  const moveToPage = useNavigate();
  const { userData } = useSelector(({ user }) => user);
  useEffect(() => {
    console.log("user: ", userData);
  }, []);

  const moveToLogin = () => {
    moveToPage("/login");
  };
  const moveToMain = () => {
    moveToPage("/");
  };
  return (
    <nav className="navBar">
      <div className="logo" onClick={moveToMain}>
        <img alt="" src={logo} />
      </div>
      <ul className="navBar-container">
        <li className="nav-item">
          <NavLink to="/" className="nav-menu">
            프로그램
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/" className="nav-menu">
            기기 대여
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/donation" className="nav-menu">
            기기 기부
          </NavLink>
        </li>
      </ul>
      {userData.name.length > 0 && (
        //눌렀을 때 마이페이지 이동
        <button className="profilebtn">{userData.name}</button>
      )}
      {userData.name.length === 0 && (
        <button className="loginbtn" onClick={moveToLogin}>
          로그인
        </button>
      )}
    </nav>
  );
}
