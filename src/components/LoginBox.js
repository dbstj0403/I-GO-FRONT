import '../componentsCss/LoginBox.css'
import { AmazonLoginButton } from 'react-social-login-buttons';
import { GoogleLoginButton } from 'react-social-login-buttons';
import { GithubLoginButton } from 'react-social-login-buttons';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { useState } from 'react';
export default function LoginBox () {
    /**
     * 카카오 로그인 관련 변수 및 AUTH URL
     */
    const KAKAO_REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;
    const KAKAO_REDIRECT_URI = 'www.http/loginCallback'; // 리다이렉션 URI 협의 필요
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code&scope=account_email`;
    const handleKakaoLogin = () => {
        localStorage.setItem('login-provider','kakao');
        window.location.href = KAKAO_AUTH_URL;
    }
    /**
     * 구글 로그인 관련 변수 및 AUTH URL
     */
    const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
    const GOOGLE_REDIRECT_URI = `http://localhost:3000/loginCallback`;
    const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?scope=profile%20email%20openid&include_granted_scopes=true&state=state_parameter_passthrough_value&redirect_uri=${GOOGLE_REDIRECT_URI}&response_type=code&client_id=${GOOGLE_CLIENT_ID}&access_type=offline&prompt=consent`;
    const handleGoogleLogin = ()=> {
        localStorage.setItem('login-provider','google');
        window.location.href = GOOGLE_AUTH_URL;
    }
    /**
     * 깃허브 로그인 관련 변수 및 AUTH URL
     */
    const GITHUB_CLIENT_ID = process.env.REACT_APP_GITHUB_CLIENT_ID;
    const GITHUB_REDIRECT_URI = `http://localhost:3000/loginCallback`;
    const GITHUB_AUTH_URL = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${GITHUB_REDIRECT_URI}&scope=user:email`;

    const handGithubleLogin = () => {
        localStorage.setItem('login-provider','github');
        window.location.href = GITHUB_AUTH_URL;
    };
    /**
     * 각 버튼 css style
     */
    const kakaoBtnStyle = {
        width: "350px",
        height: "48px",
        marginLeft: "0",
        borderRadius: "10px",
        fontSize: "17px",
        fontWeight: "550",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#FEE500",
        color: "black"
    }
    const googleBtnStyle = {
        width: "350px",
        height: "48px",
        marginLeft: "0",
        borderRadius: "10px",
        fontSize: "17px",
        fontWeight: "550",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "black"
    }
    const githubBtnStyle = {
        width: "350px",
        height: "48px",
        marginLeft: "0",
        borderRadius: "10px",
        fontSize: "17px",
        fontWeight: "550",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
    return(
        <div className='loginbox-container'>
            <div className='loginbox'>
                <div>
                    <p className="welcome">환영합니다</p>
                    <p className="welcome2">로그인 후 자유롭게 이용하세요.</p>
                    <div>
                        <AmazonLoginButton icon={RiKakaoTalkFill} activeStyle={{background: '#FFDC37'}} align={'center'}
                        iconSize={'35px'} iconColor={'black'} style={kakaoBtnStyle} onClick={handleKakaoLogin}>카카오로 로그인</AmazonLoginButton>
                    </div>
                    <div className='google'>
                        <GoogleLoginButton align={'center'} iconSize={'35px'} style={googleBtnStyle} onClick={handleGoogleLogin}>구글로 로그인</GoogleLoginButton>
                    </div>
                    <div className='github'><GithubLoginButton align={'center'} iconSize={'35px'} style={githubBtnStyle} onClick={handGithubleLogin}>깃허브로 로그인</GithubLoginButton>
                    </div>
                </div>
            </div>
        </div>
    );
}