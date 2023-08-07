import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../componentsCss/NavBar.css';
import logo from '../img/logo.png';
export default function NavBar () {
    const moveToPage = useNavigate();
    const moveToLogin = () => {
        moveToPage('/login');
    }
    const moveToMain = () => {
        moveToPage('/');
    }
    return(
        <nav className='navBar'>
            <div className='logo' onClick={moveToMain}><img alt='' src={logo}/></div>
            <ul className='navBar-container'>
                <li className='nav-item'><NavLink to='/' className='nav-menu'>프로그램</NavLink></li>
                <li className='nav-item'><NavLink to='/' className='nav-menu'>기기 대여</NavLink></li>
                <li className='nav-item'><NavLink to='/' className='nav-menu'>기기 기부</NavLink></li>
            </ul>
            <button className='loginbtn' onClick={moveToLogin}>로그인</button>
        </nav>
    );
}