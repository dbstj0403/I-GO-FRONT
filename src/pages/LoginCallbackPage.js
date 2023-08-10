import Spinner from "../components/Spinner";
import { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function LoginCallbackPage () {
    const CODE = new URL(window.location.href).searchParams.get('code');
    const [registerState, setRegisterState] = useState(null);
    const [provider, setProvider] = useState(localStorage.getItem('login-provider'));
    
    const selectProvider = () => {
        if (provider === 'kakao'){
            sendCode('kakao');
        }
        else if (provider === 'google'){
            sendCode('google');
        }
        else {
            sendCode('github');
        }
        console.log('login about:', provider);
        localStorage.removeItem('login-provider');
    };

    const sendCode = async (provider) => {
        if (registerState === true) {
        return;
        }
        try {
            const response = await axios.post(
            `http://localhost:8000/auth/${provider}/token`,
            { code: CODE }
        );
        localStorage.setItem('access-token', response.data.access);
        localStorage.setItem('refresh-token', response.data.refresh);
        setRegisterState(response.data.is_register);
        } catch (error) {
        console.log("Code sending error!");
    }
    };

    const movePage = useNavigate();
    const moveToPage = () => {
        if (registerState === true){
            movePage('/');
        }
        else if (registerState === false){
            movePage('/addInfo');
        }
        else{
            return;
        }
    }

    useEffect(() => {selectProvider();}, []);
    useEffect(() => {moveToPage();}, [registerState]);

  return (
    <div>
        {registerState === null ? <Spinner/> : null}
    </div>
  );
}
    