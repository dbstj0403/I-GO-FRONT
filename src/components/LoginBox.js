import '../componentsCss/LoginBox.css'
import { AmazonLoginButton } from 'react-social-login-buttons';
import { GoogleLoginButton } from 'react-social-login-buttons';
import { GithubLoginButton } from 'react-social-login-buttons';
import { RiKakaoTalkFill } from 'react-icons/ri';
export default function LoginBox () {

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
                        iconSize={'35px'} iconColor={'black'} style={kakaoBtnStyle}>카카오로 로그인</AmazonLoginButton>
                    </div>
                    <div className='google'>
                        <GoogleLoginButton align={'center'} iconSize={'35px'} style={googleBtnStyle}>구글로 로그인</GoogleLoginButton>
                    </div>
                    <div className='github'><GithubLoginButton align={'center'} iconSize={'35px'} style={githubBtnStyle}>깃허브로 로그인</GithubLoginButton>
                    </div>
                </div>
            </div>
        </div>
    );
}