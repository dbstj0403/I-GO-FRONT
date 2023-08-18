import Spinner from "../components/Spinner";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Postcode from "../components/Postcode";
import { useDispatch, useSelector } from "react-redux";
// import { loginSuccess } from "@store/actions";
import axios from "axios";
import { userSuccess } from "../store/user/actions";
import styled from "styled-components";
import pencil from "../img/addInfo.png";

export default function MypageStudent() {
  const { userData } = useSelector(({ user }) => user);
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [detailedAddress, setDetailedAddress] = useState("");
  const [enrollAddress, setEnrollAddress] = useState({
    address: "",
    zoneCode: "",
    detailAddress: "",
  });
  const [zipcode, setZipcode] = useState("");
  const [popup, setPopup] = useState(false);
  const [activeTab, setActiveTab] = useState("modify");
  const movePage = useNavigate();
  const dispatch = useDispatch();

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    if (tabName === "program" || tabName === "rent") {
      setTimeout(() => {
        alert("현재 준비 중인 기능입니다!");
      }, 0);
    }
  };

  useEffect(() => {
    setProfile();
  }, []);

  const handleComplete = () => {
    setPopup(!popup);
  };

  const handleInput = (e) => {
    setEnrollAddress({
      ...enrollAddress,
      [e.target.name]: e.target.value,
    });
  };

  const setProfile = async () => {
    try {
      const response = await axios.get(
        "http://api.igoofficial.com/accounts?type=student",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access-token")}`,
          },
        }
      );
      const user = response.data;
      setName(user.profile.name);
      setBirthDate(user.profile.birthdate);
      setPhone(user.profile.phone);
      setEmail(user.profile.email);
      setAddress(user.profile.address.address);
      setDetailedAddress(user.profile.address.detail_address);
      setZipcode(user.profile.address.zone_code);
    } catch (error) {
      console.log("Fetch User Info Error!");
    }
  };

  const submitInfo = async () => {
    try {
      await axios.patch(
        `http://api.igoofficial.com/profile/${userData.id}`,
        {
          name: name,
          birthdate: birthDate,
          phone: phone,
          email: email,
          address: {
            address: enrollAddress.address ? enrollAddress.address : address,
            detail_address: enrollAddress.detailAddress
              ? enrollAddress.detailAddress
              : detailedAddress,
            zone_code: enrollAddress.zoneCode
              ? enrollAddress.zoneCode
              : zipcode,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access-token")}`,
          },
        }
      );
      //로그인 성공 여부 스토어에 저장
      getProfile();
      //리덕스에 user객체 store
      movePage("/mypage");
    } catch (error) {
      console.log("SubmitInfo Error!");
    }
  };

  const getProfile = async () => {
    try {
      const response = await axios.get(
        "http://api.igoofficial.com/accounts?type=student",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access-token")}`,
          },
        }
      );
      //이걸 리덕스에 dispatch하기
      const user = response.data;
      const newUser = {
        is_student: response.data.is_student,
        is_carer: response.data.is_carer,
        is_register: response.data.is_register,
        point: response.data.point,
        id: response.data.id,
        name: user.profile.name,
        img: user.profile.image,
      };
      dispatch(userSuccess(newUser));
    } catch (error) {
      console.log("Fetch User Info Error!");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <ul style={{ fontSize: "40px", fontWeight: "bold" }}>마이페이지</ul>
      <ul style={{ fontSize: "16px", color: "#717171", marginTop: "15px" }}>
        나의 프로필 및 활동 내역을 관리하세요
      </ul>
      <MypageContainer>
        <Category
          active={activeTab === "modify"}
          onClick={() => handleTabClick("modify")}
        >
          👤 프로필 관리
        </Category>
        <Category
          active={activeTab === "program"}
          onClick={() => handleTabClick("program")}
        >
          📋 나의 프로그램
        </Category>
        <Category
          active={activeTab === "rent"}
          onClick={() => handleTabClick("rent")}
        >
          📱 대여 관리
        </Category>
      </MypageContainer>
      {activeTab === "modify" && (
        <ModifyInfoContainer>
          <img alt="" src={pencil} />
          <InputContainer>
            <InputTitle>프로필 정보 수정</InputTitle>
            <Container>
              <div>
                <Text>이름</Text>
                <Input
                  placeholder={name}
                  width="266px"
                  onChange={(e) => setName(e.target.value)}
                ></Input>
              </div>
              <Box>
                <Text>생년월일</Text>
                <Input
                  placeholder={birthDate}
                  width="266px"
                  onChange={(e) => setBirthDate(e.target.value)}
                ></Input>
              </Box>
            </Container>
            <Container>
              <div>
                <Text>전화번호</Text>
                <Input
                  placeholder={phone}
                  width="266px"
                  onChange={(e) => setPhone(e.target.value)}
                ></Input>
              </div>
              <Box>
                <Text>Email</Text>
                <Input
                  placeholder={email}
                  width="266px"
                  onChange={(e) => setEmail(e.target.value)}
                ></Input>
              </Box>
            </Container>

            <Container>
              <div>
                <Text>거주지</Text>
                <Input
                  width="392px"
                  type="text"
                  required={true}
                  name="address"
                  placeholder={address}
                  onChange={handleInput}
                  value={enrollAddress.address}
                ></Input>
              </div>
              <Box>
                <SearchAdressBtn onClick={handleComplete}>
                  주소 찾기
                </SearchAdressBtn>
                {popup && (
                  <Postcode
                    enrollAddress={enrollAddress}
                    setEnrollAddress={setEnrollAddress}
                    popup={popup}
                    setPopup={setPopup}
                  ></Postcode>
                )}
              </Box>
            </Container>
            <Container>
              <div>
                <Text>상세 주소</Text>
                <Input
                  width="392px"
                  name="detailAddress"
                  placeholder={detailedAddress}
                  onChange={(e) => {
                    setEnrollAddress({
                      ...enrollAddress,
                      [e.target.name]: e.target.value,
                    });
                  }}
                ></Input>
              </div>
            </Container>
            <SubmitBtn onClick={submitInfo}>수정 완료</SubmitBtn>
          </InputContainer>
        </ModifyInfoContainer>
      )}
    </div>
  );
}

/**
 * 스타일 컴포넌트
 */

const Category = styled.div`
  display: flex;
  padding: 17px 28px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 50px;
  background-color: ${(props) => (props.active ? "#fdd888" : "white")};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;
const ModifyInfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 30px;
  margin-left: 50px;
`;
const InputContainer = styled.div`
  width: 642px;
  position: relative;
  left: 60px;
`;
const InputTitle = styled.div`
  font-size: 40px;
  line-height: 66px;
  font-weight: 700;
`;
const Container = styled.div`
  margin-top: 24px;
  display: flex;
`;
const Text = styled.div`
  font-size: 18px;
  line-height: 18px;
  font-weight: 700;
`;
const Input = styled.input`
border-radius: 30px;
background-color: #F5F5F5;
width: ${(props) => props.width};
height: 72px;
border: 0;
margin-top: 15px;
text-indent: 20px;
Input:: placeholder: 18px;
font-size: 18px;
line-height: 18px;
&:focus {
    outline: 2px solid black;
}
`;
const MypageContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 28px;
  padding-top: 28px;
`;

const Box = styled.div`
  margin-left: 32px;
`;
const SearchAdressBtn = styled.button`
  width: 152px;
  height: 72px;
  border-radius: 50px;
  border: 1px solid #e3e3e3;
  background-color: white;
  box-shadow: 5px 5px 5px lightgrey;
  margin-top: 33px;
  font-size: 18px;
  font-weight: 700;
  line-height: 18px;
  &:hover {
    cursor: pointer;
  }
`;
const SubmitBtn = styled.button`
  width: 191px;
  height: 72px;
  border-radius: 50px;
  background-color: black;
  color: white;
  font-size: 18px;
  line-height: 18px;
  font-weight: 700;
  border: 0;
  margin-top: 50px;
  &:hover {
    cursor: pointer;
  }
`;
