import React from 'react'
import styled from "styled-components";
//import { useNavigate } from 'react-router-dom';


function Dropdown({user, moveToMypageStudent, moveToMypageCarer}) {

    const DropDownContainer = styled.div`
    position: absolute;
    width: auto;
    margin-top: 60px;
    padding: 10px;
    background-color: white;
    box-shadow: 2px 4px 8px rgba(0,0,0,0.3);
    font-size: 14px;
    cursor: pointer;
    @media screen and (max-width: 768px) {
      font-size: 10px;
      margin-top: 40px;
      padding: 5px; 
    }
  `
    const DropDownMenu = styled.div`
    padding: 10px;
    overflow: visible;
    &:hover {
      background-color: lightgray;
    }
  `
  //const movePage = useNavigate();

  const logout = () => {
    localStorage.clear();
    //localStorage.removeItem("access-token");
    //localStorage.removeItem("refresh-token");
    //localStorage.removeItem("user-id");
    //movePage('/');
    window.location.replace("/");

}

    return (
        <DropDownContainer>
            <DropDownMenu onClick={user ? moveToMypageStudent : moveToMypageCarer}>
                마이페이지
            </DropDownMenu>
            <DropDownMenu onClick={logout}>
                로그아웃
            </DropDownMenu>
        </DropDownContainer>
    )
}

export default Dropdown

