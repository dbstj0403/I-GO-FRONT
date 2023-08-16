import Spinner from "../components/Spinner";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { loginSuccess } from "@store/actions";
import axios from "axios";

export default function LoginCallbackPage() {
  const CODE = new URL(window.location.href).searchParams.get("code");
  const [registerState, setRegisterState] = useState(null);
  const [isLogin, setIsLogin] = useState(true);
  const [provider, setProvider] = useState(
    localStorage.getItem("login-provider")
  );
  const [userInfo, setUserInfo] = useState({});
  //   const dispatch = useDispatch();

  const selectProvider = () => {
    if (provider === "kakao") {
      sendCode("kakao");
    } else if (provider === "google") {
      sendCode("google");
    } else {
      sendCode("github");
    }
    console.log("login about:", provider);
    localStorage.removeItem("login-provider");
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
      localStorage.setItem("access-token", response.data.access);
      localStorage.setItem("refresh-token", response.data.refresh);
      setRegisterState(response.data.is_register);
    } catch (error) {
      console.log("Code sending error!");
    }
  };

  const getProfile = async () => {
    try {
      const response = await axios.get("http://localhost:8000/accounts", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access-token")}`,
        },
      });
      setUserInfo(response.data.profile); // 서버에서 가져온 유저 정보
      console.log(response.data.profile);
      //이걸 리덕스에 dispatch하기
    } catch (error) {
      console.log("Fetch User Info Error!");
    }
  };

  const movePage = useNavigate();
  const moveToPage = () => {
    if (registerState === true) {
      // 로그인 여부 리덕스 스토어 저장
      //   dispatch(loginSuccess(isLogin));
      getProfile();
      movePage("/");
    } else if (registerState === false) {
      movePage("/addInfo");
    } else {
      return;
    }
  };

  useEffect(() => {
    selectProvider();
  }, []);
  useEffect(() => {
    moveToPage();
  }, [registerState]);

  return (
    <div>
      <Spinner />
    </div>
  );
}
