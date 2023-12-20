import styled from 'styled-components';
import point from '../img/point.png';
import axios from 'axios';
import arrow from '../img/arrow.png';
import { useState, useEffect } from 'react';
import GoBackBtn from './GoBackBtn';
import KakaoMap from './KakaoMap';
import { useSelector } from 'react-redux';

export default function RegisterProgramInfo() {

    const [profile, setProfile] = useState();
    const [facility_name, setFacilityName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");


    const getUserProfile = async () => {
        try {
            const response = await axios.get(
                "http://api.igoofficial.com/accounts/",
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("access-token")}`,
                    },
                }
            )
            setProfile(response.data.profile);
            setFacilityName(response.data.profile.facility_name);
            setAddress(response.data.profile.address.address);
            setPhone(response.data.profile.phone);
            setEmail(response.data.profile.email);
            console.log("profile:", profile);
        }
        catch (e) {
            alert("Get User information error!")
        }
    }

    useEffect(() => {
        getUserProfile(0);
    }, []);

    /*
    const [InfoList, setInfoList] = useState({});
    const [facilityName, setFacilityName] = useState('');
    const getFacilityName = async () => {
        try {
            const response = await axios.get(`/profile/${localStorage.getItem('user-id')}`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("access-token")}`,
                    }
                },
            );
            setInfoList(response.data);
        }
        catch (error) {
            console.log('get facility name error!')
        }
    }
    */


    return (
        <ProgramInfoContainer>
            <TitleAndPointContainer>
                <Title><span>*</span>제목</Title>
                <TitleInput placeholder='제목을 입력하세요. (15자 이내)' />
                <PointBtn>
                    <img src={point} alt='' style={{ paddingRight: '10px' }}></img>
                    <GreyInput2 placeholder='30'></GreyInput2> p
                </PointBtn>
            </TitleAndPointContainer>
            <InfoContainer>
                <TextContainer>
                    <Text>
                        <TextKind>요양원</TextKind>
                        <TextAbout>{facility_name}</TextAbout>
                    </Text>
                    <Text>
                        <TextKind><span>*</span>모집기간</TextKind>
                        <GreyInputContainer>
                            <GreyInput1 placeholder='2023'></GreyInput1>
                            .
                            <GreyInput2 placeholder='07'></GreyInput2>
                            ~
                            <GreyInput1 placeholder='2023'></GreyInput1>
                            .
                            <GreyInput2 placeholder='08'></GreyInput2>
                        </GreyInputContainer>
                    </Text>
                </TextContainer>
                <TextContainer>
                    <Text>
                        <TextKind><span>*</span>활동 분야</TextKind>
                        <Select>
                            <option value='스마트폰 사용법'>스마트폰 사용법</option>
                            <option value='SNS 활용법'>SNS 활용법</option>
                            <option value='유튜브 활용법'>유튜브 활용법</option>
                            <option value='키오스크 활용법'>키오스크 활용법</option>
                        </Select>
                    </Text>
                    <Text>
                        <TextKind><span>*</span>모집인원</TextKind>
                        <GreyInput1></GreyInput1>
                        <Span>명</Span>
                    </Text>
                </TextContainer>
                <TextContainer>
                    <Text>
                        <TextKind><span>*</span>활동기간</TextKind>
                        <GreyInputContainer>
                            <GreyInput1 placeholder='2023'></GreyInput1>
                            .
                            <GreyInput2 placeholder='09'></GreyInput2>
                            ~
                            <GreyInput1 placeholder='2023'></GreyInput1>
                            .
                            <GreyInput2 placeholder='12'></GreyInput2>
                        </GreyInputContainer>
                    </Text>
                    <Text>
                        <TextKind>주소</TextKind>
                        <TextAbout>{address}</TextAbout>
                    </Text>
                </TextContainer>
                <TextContainer>
                    <Text>
                        <TextKind>연락처</TextKind>
                        <TextAbout>{phone}</TextAbout>
                    </Text>
                    <Text>
                        <TextKind>Email</TextKind>
                        <TextAbout>{email}</TextAbout>
                    </Text>
                </TextContainer>
            </InfoContainer>
            <DetailInfoContainer>
                <TextKind>상세설명</TextKind>
                <DetailInfoInput placeholder='상세 설명을 입력하세요. (400자 이내)' />
            </DetailInfoContainer>
            <KakaoMap />
            <BtnContainer>
                <EnrollBtn>등록하기</EnrollBtn>
                <GoBackBtn />
            </BtnContainer>
            <BottomBanner>
                <BottomText>
                    ※ 모든 프로그램은 선착순으로 모집하며, 해당 프로그램이 ‘모집중’ 상태인 경우, 신청이 가능합니다.
                </BottomText>
                <BottomText>
                    ※ [등록하기] 클릭 시 바로 프로그램이 등록되며, 학생들의 신청으로 튜터 선생님을 모집합니다.
                </BottomText>
                <BottomText>
                    ※ 등록 즉시 학생들의 신청을 받기 때문에, 등록 후에는 게시글을 수정 및 삭제할 수 없습니다.
                </BottomText>
            </BottomBanner>
        </ProgramInfoContainer>
    );
}

const ProgramInfoContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
const TitleAndPointContainer = styled.div`
width: 1008px;
display: flex;
height: 54px;
align-items: center;
margin-top: 80px;
span {
    color: #3A55B5;
    margin-right: 5px;
}
@media screen and (min-width: 769px) and (max-width: 1200px) {
    width: 720px;
    height: 40px;
    margin-top: 60px;
}
@media screen and (max-width: 768px) {
    width: 400px;
    height: 30px;
    margin-top: 40px;
}

`;
const TitleInput = styled.input`
background-color: #F5F5F5;
width: 680px;
height: 53px;
border-radius: 10px;
border: 0;
text-indent: 15px;
font-size: 24px;
line-height: 24px;
margin-right: 100px;
&:focus {
    outline: none;
}
@media screen and (min-width: 769px) and (max-width: 1200px) {
    width: 450px;
    font-size: 16px;
    margin-right: 60px;
}
@media screen and (max-width: 768px) {
    font-size: 12px;
    width: 220px;
    height: 40px;
    margin-right: 30px;
}
`
const Title = styled.div`
font-size: 24px;
line-height: 24px;
font-weight: 700;
margin-right: 10px;
@media screen and (min-width: 769px) and (max-width: 1200px) {
    font-size: 16px;
}
@media screen and (max-width: 768px) {
    font-size: 12px;
}
`;
const PointBtn = styled.button`
width: 143px;
height: 53px;
border-radius: 30px;
background-color: white;
border: 1px solid #cccccc;
font-size: 18px;
line-height: 18px;
align-items: center;
display: flex;
justify-content: center;
@media screen and (min-width: 769px) and (max-width: 1200px) {
    font-size: 16px;
}
@media screen and (max-width: 768px) {
    width: 100px;
    height: 40px;
    font-size: 12px;
}
`;
const InfoContainer = styled.div`
width: 1010px;
height: 286px;
border-radius: 10px;
border: 1px solid #bfbfbf;
margin-top: 20px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media screen and (min-width: 769px) and (max-width: 1200px) {
    width: 720px;
    height: 200px;
}
@media screen and (max-width: 768px) {
    width: 440px;
    height: 140px;
}
`;
const TextContainer = styled.div`
width: 910px;
height: 38px;
display: flex;
margin: 10px;
font-size: 20px;
@media screen and (min-width: 769px) and (max-width: 1200px) {
    width: 640px;
    height: 30px;
    font-size: 14px;
    margin: 5px;
}
@media screen and (max-width: 768px) {
    width: 400px;
    height: 20px;
    font-size: 10px;
    margin: 5px;
}
`;
const Text = styled.div`
width: 455px;
height: 38px;
display: flex;
align-items: center;
@media screen and (min-width: 769px) and (max-width: 1200px) {
    width: 320px;
    height: 28px;
}
@media screen and (max-width: 768px) {
    width: 200px;
    height: 20px;
}
span {
    padding-right: 10px;
}
`;
const TextKind = styled.div`
width: 125px;
color: #717171;
@media screen and (min-width: 769px) and (max-width: 1200px) {
    width: 100px;
}
@media screen and (max-width: 768px) {
    width: 60px;
}
span {
    color: #3A55B5;
    padding-right: 5px;
}
`;
const TextAbout = styled.div`
width: 330px;
@media screen and (min-width: 769px) and (max-width: 1200px) {
    width: 220px;
}
@media screen and (max-width: 768px) {
    width: 140px;
}
`

const DetailInfoContainer = styled.div`
width: 1008px;
border-radius: 10px;
border: 1px solid #bfbfbf;
margin-top: 20px;
display: flex;
align-items: flex-start;
padding: 40px 30px;
font-size: 20px;
@media screen and (min-width: 769px) and (max-width: 1200px) {
    width: 720px;
    font-size: 16px;
    padding: 30px 40px;
}
@media screen and (max-width: 768px) {
    width: 440px;
    font-size: 10px;
    padding: 20px 20px;
}
`;

const DetailInfoInput = styled.textarea`
width: 750px;
height: 240px;
line-height: 24px;
border: none;
font-size: 20px;
@media screen and (min-width: 769px) and (max-width: 1200px) {
    width: 680px;
    font-size: 16px;
    line-height: 20px;
}
@media screen and (max-width: 768px) {
    width: 300px;
    font-size: 10px;
    line-height: 16px;
}
&:focus {
  outline: none;
}
resize: none;
font-family: DM Sans;
`

const BtnContainer = styled.div`
width: 378px;
height: 67px;
display: flex;
margin-top: 20px;
justify-content: space-between;
@media screen and (min-width: 769px) and (max-width: 1200px) {
    width: 300px;
}
@media screen and (max-width: 768px) {
    width: 220px;
}
`
const EnrollBtn = styled.button`
width: 194px;
height: 67px;
border-radius: 30px;
border: 0;
background-color: #ADBBEC;
font-size: 20px;
line-height: 20px;
font-weight: 700;
box-shadow: 5px 5px 5px #CCCCCC;
cursor: pointer;
@media screen and (min-width: 769px) and (max-width: 1200px) {
    width: 130px;
    height: 60px;
    font-size: 16px;
}
@media screen and (max-width: 768px) {
    width: 95px;
    height: 40px;
    font-size: 12px;
}
`
const BottomBanner = styled.div`
width: 1010px;
border-radius: 10px;
background-color: #F5F5F5;
margin-top: 40px;
display: flex;
flex-direction: column;
justify-content: center;
padding: 30px 40px;
@media screen and (min-width: 769px) and (max-width: 1200px) {
    width: 720px;
    padding: 20px 40px;
}
@media screen and (max-width: 768px) {
    width: 400px;
    padding: 15px 20px;
}
`
const BottomText = styled.div`
font-size: 16px;
color: #2C2C2C;
margin: 10px;
@media screen and (min-width: 769px) and (max-width: 1200px) {
    font-size: 12px;
    margin: 5px;
}
@media screen and (max-width: 768px) {
    font-size: 10px;
    margin: 5px;
}
`

const GreyInput1 = styled.input`
width: 67px;
height: 38px;
border-radius: 10px;
background-color: #F5F5F5;
border: 0;
margin-right: 5px;
text-indent: 10px;
font-size: 16px;
line-height: 24px;
&:focus {
    outline: none;
}
@media screen and (min-width: 769px) and (max-width: 1200px) {
    font-size: 14px;
    height: 34px;
    width: 45px;
    text-indent: 5px;
}
@media screen and (max-width: 768px) {
    font-size: 10px;
    width: 30px;
    height: 25px;
    text-indent: 3px;
}
`
const GreyInput2 = styled.input`
width: 41px;
height: 38px;
border-radius: 10px;
background-color: #F5F5F5;
border: 0;
margin-right: 5px;
text-indent: 10px;
font-size: 16px;
line-height: 24px;
&:focus {
    outline: none;
}
@media screen and (min-width: 769px) and (max-width: 1200px) {
    font-size: 14px;
    height: 34px;
    width: 35px;
    text-indent: 5px;
}
@media screen and (max-width: 768px) {
    font-size: 10px;
    width: 20px;
    height: 25px;
    text-indent: 3px;
}
`
const GreyInputContainer = styled.div`
display: flex;
align-items: baseline;
`
const Select = styled.select`
border-radius: 15px;
font-size: 16px;
text-indent: 5px;
line-height: 16px;
border: 0;
width: 280px;
height: 38px;
padding-left: 10px;
appearance: none;
background: url("${arrow}") no-repeat right center;
background-size: 40px;
background-color: white;
border: 1px solid black;: 
&:focus {
outline: none;
}
@media screen and (min-width: 769px) and (max-width: 1200px) {
    font-size: 14px;
    width: 180px;
    height: 34px;
    padding-left: 5px;
}
@media screen and (max-width: 768px) {
    font-size: 10px;
    width: 110px;
    height: 25px;
    padding-left: 5px;
}
`;
const Span = styled.div`
width: 28px;
height: 38px;
line-height: 38px;`