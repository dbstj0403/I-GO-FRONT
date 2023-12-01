import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../componentsCss/NavBar.css";
import logo from "../img/logo.png";
import { useSelector } from "react-redux";
import styled from "styled-components";
import point from "../img/point.png";
import { FiMenu } from "react-icons/fi";
import Dropdown from "./ProfileDropdown";


export default function NavBar() {
  const moveToPage = useNavigate();
  const { userData } = useSelector(({ user }) => user);
  useEffect(() => {
    console.log("user: ", userData);
  }, []);

  const moveToMypageStudent = () => {
    moveToPage("/mypageStudent");
  };

  const moveToMypageCarer = () => {
    moveToPage("/mypageCarer");
  };

  const moveToLogin = () => {
    moveToPage("/login");
  };

  const moveToMain = () => {
    moveToPage("/");
  };

  // 반응형 - mobile 햄버거바
  const [isToggled, setIsToggled] = useState(false);

  const toggleMenu = () => {
    setIsToggled((e) => !e);
  }

  // 프로필 버튼 드롭다운 (마이페이지 / 로그아웃 중 선택)
  const [view, setView] = useState(false);

  {/** 
  function Dropdown() {
    return (
      <DropDownContainer>
        <DropDownMenu onClick={moveToMypageStudent}>
          마이페이지
        </DropDownMenu>
        <DropDownMenu>
          로그아웃

        </DropDownMenu>
      </DropDownContainer>
    )
  }
  */}

  const PointBtn = styled.button`
    border-radius: 30px;
    border: 1px #cccccc solid;
    background-color: white;
    align-items: center;
    display: flex;
    justify-content: center;
  `;
  const ProfileBtn = styled.button`
    color: white;
    border-radius: 30px;
    border: 0;
    background-color: black;
    align-items: center;
    display: flex;
    justify-content: center;
  `
  const Container = styled.div`
    display: flex;
    position: relative;
    right: 50px;
  `;

  {/*
  const DropDownContainer = styled.div`
    width: auto;
    margin: 10px;
    padding: 5px;
    box-shadow: 2px 4px 8px rgba(0,0,0,0.3);
    font-size: 14px;
    cursor: pointer;
    @media screen and (max-width: 768px) {
      font-size: 10px;
    }
    
  `
  
  const DropDownMenu = styled.div`
    padding: 10px;
    &:hover {
      background-color: lightgray;
    }
  `
  */}


  return (
    <div isToggled={isToggled} style={{ position: 'relative', zIndex: 10 }}>
      <div className="navBar" >

        {/* Mobile - 햄버거바 */}
        <FiMenu
          className="hamburger"
          size="1.5em"
          onClick={toggleMenu}
        />

        {/* 로고 */}
        <img
          className="logo" onClick={moveToMain}
          alt="" src={logo} object-fit="cover"
        />

        {/* 메뉴바 */}
        <ul className="navBar-menu">
          <li className="nav-item">
            <NavLink to="/program" className="nav-menu">
              프로그램
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/rental" className="nav-menu">
              기기 대여
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/donation" className="nav-menu">
              기기 기부
            </NavLink>
          </li>
        </ul>

        {/* 포인트 및 프로필 버튼 */}
        {userData.is_register && userData.is_student ? (
          <Container>
            <PointBtn className="pointbtn">
              <img className="pointImg" src={point} alt="" style={{ paddingRight: "10px" }} object-fit="cover" ></img>
              {userData.point} P
            </PointBtn>
            {/** 
            <ProfileBtn className="profilebtn" onClick={moveToMypageStudent}>
              <img src={userData.img} alt=""></img>학생 {userData.name}님
            </ProfileBtn>
            */}

            <ul style={{ display: "flex", justifyContent: "center" }}>
              <ProfileBtn className="profilebtn" onClick={() => { setView(!view) }}>
                <img src={userData.img} alt=""></img>학생 {userData.name}님
              </ProfileBtn>
              {view && <Dropdown user={userData.is_student} moveToMypageStudent={moveToMypageStudent} moveToMypageCarer={moveToMypageCarer} />}
            </ul>

          </Container>
        ) : userData.is_carer ? (
          <Container>
            {/*}
            <ProfileBtn onClick={moveToMypageCarer}>
              <img src={userData.img} alt=""></img>관리자 {userData.name}님
            </ProfileBtn>
        */}
            <ul style={{ display: "flex", justifyContent: "center" }}>
              <ProfileBtn className="profilebtn" onClick={() => { setView(!view) }}>
                <img src={userData.img} alt=""></img>학생 {userData.name}님
              </ProfileBtn>
              {view && <Dropdown user={userData.is_student} moveToMypageStudent={moveToMypageStudent} moveToMypageCarer={moveToMypageCarer} />}
            </ul>
          </Container>
        ) : (
          <button className="loginbtn" onClick={moveToLogin}>
            로그인
          </button>
        )}
      </div>
      {isToggled && (
        <div className="toggleBar">
          <ul className="toggleBar-menu">
            <li className="toggle-item">
              <NavLink to="/program" className="toggle-menu">
                프로그램
              </NavLink>
            </li>
            <li className="toggle-item">
              <NavLink to="/rental" className="toggle-menu">
                기기 대여
              </NavLink>
            </li>
            <li className="toggle-item">
              <NavLink to="/donation" className="toggle-menu">
                기기 기부
              </NavLink>
            </li>
          </ul>

        </div>
      )}
    </div>
  );
}
