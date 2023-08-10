import Spinner from "../components/Spinner";
import { useState, useEffect} from "react";
import axios from "axios";

export default function LoginCallbackPage () {
    const CODE = new URL(window.location.href).searchParams.get('code');
    const [registerState, setRegisterState] = useState(null);
    const [provider, setProvider] = useState('');
    const [userInfor, setUserInfor] = useState({});
    const [loading, setLoading] = useState();

   
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
    
    const selectProvider = () => {
        setProvider(localStorage.getItem('login-provider'));
        if (provider === 'kakao'){
            sendCode('kakao');
        }
        else if (provider === 'google'){
            sendCode('google');
        }
        else {
            sendCode('github');
        }
    };

    useEffect(() => {selectProvider();}, []);
    
  return (
    <div>
        {registerState === null ? <Spinner/> : null}
    </div>
  );
}
    