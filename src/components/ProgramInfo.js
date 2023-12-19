import styled from 'styled-components';
import { useLocation, useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
import point from '../img/point.png';
import KakaoMap from "./KakaoMap";
import GoBackBtn from './GoBackBtn';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
export default function ProgramInfo({ isCarer }) {
    const location = useLocation();
    //const searchList = location.state.searchList;

    /*
    const movePage = useNavigate();
    const moveToSearchPage = () => {
        movePage('/program');
    }
    const enrollProgram = async () => {
        try {
            const response = await axios.post(`/program/${searchList.id}/subscribe/`,
                { headers: {
                  Authorization: `Bearer ${localStorage.getItem("access-token")}`,
                }});
            
        }
        catch(error){

        }
    }*/
    const ProgramInfoContainer = styled.div`
    width: 1008px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 769px) and (max-width: 1200px) {
        width: 720px;
    }
    @media screen and (max-width: 768px) {
        width: 400px;
    }
  `;
    const TitleAndPointContainer = styled.div`
    width: 1008px;
    display: flex;
    height: 54px;
    align-items: baseline;
    margin-top: 80px;
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
    const Title = styled.div`
    font-size: 24px;
    line-height: 24px;
    font-weight: 700;
    @media screen and (min-width: 769px) and (max-width: 1200px) {
        font-size: 16px;
    }
    @media screen and (max-width: 768px) {
        font-size: 12px;
    }
  `;
    const PointBtn = styled.button`
    width: 143px;
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
        line-height: 16px;
    }
    @media screen and (max-width: 768px) {
        font-size: 12px;
        line-height: 12px;
    }
  `;
    const InfoContainer = styled.div`
    width: 1010px;
    height: 286px;
    border-radius: 10px;
    border: 1px solid #bfbfbf;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 769px) and (max-width: 1200px) {
        width: 720px;
        height: 200px;
    }
    @media screen and (max-width: 768px) {
        width: 400px;
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
        width: 600px;
        height: 30px;
        font-size: 14px;
        margin: 5px;
    }
    @media screen and (max-width: 768px) {
        width: 320px;
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
        width: 300px;
        height: 28px;
    }
    @media screen and (max-width: 768px) {
        width: 160px;
        height: 20px;
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
  `;
    const TextAbout = styled.div`
    width: 330px;
    @media screen and (min-width: 769px) and (max-width: 1200px) {
        width: 240px;
    }
    @media screen and (max-width: 768px) {
        width: 100px;
    }
    `

    const DetailInfoContainer = styled.div`
    width: 1008px;
    border-radius: 10px;
    border: 1px solid #bfbfbf;
    margin-top: 20px;
    display: flex;
    align-items: flex-start;
    padding: 40px 50px;
    font-size: 20px;
    @media screen and (min-width: 769px) and (max-width: 1200px) {
        width: 720px;
        font-size: 16px;
        padding: 30px 60px;
    }
    @media screen and (max-width: 768px) {
        width: 400px;
        font-size: 10px;
        padding: 20px 40px;
    }
  `;

    const DetailInfoText = styled.div`
    width: 750px;
    line-height: 24px;
    @media screen and (min-width: 769px) and (max-width: 1200px) {
        width: 680px;
        line-height: 20px;
    }
    @media screen and (max-width: 768px) {
        width: 300px;
        line-height: 16px;
    }
    `;

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
    background-color: #FDD888;
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

    {/*
    const BackToListBtn = styled.button`
    width: 150px;
    height: 67px;
    border-radius: 30px;
    border: 0;
    background-color: #E3E3E3;
    font-size: 20px;
    line-height: 20px;
    font-weight: 700;
    box-shadow: 5px 5px 5px #CCCCCC;
    cursor: pointer;
    `
    */}

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
    const { id } = useParams();

    const [program, setProgram] = useState("");
    
    const getProgram = async () => {
        try {
            const response = await axios.get(
                "http://api.igoofficial.com/program/",
                {
                    // 헤더
                }
            );
            console.log(response);
            console.log(response.data);
            setProgram(response.data.find((program) => program.id === parseInt(id)))
        }
        catch {
            alert("Get Program Detail error!")
        }
    }

    useEffect(() => {
        getProgram();
    }, []);

    return (
        <ProgramInfoContainer>
            <TitleAndPointContainer>
                <Title>{program.title}</Title>
                {isCarer ? null :
                    <PointBtn><img src={point} alt='' style={{ paddingRight: '10px' }}></img>300 P</PointBtn>
                }
            </TitleAndPointContainer>
            <InfoContainer>
                <TextContainer>
                    <Text>
                        <TextKind>요양원</TextKind>
                        <TextAbout>{program.facility_name}</TextAbout>
                    </Text>
                    <Text>
                        <TextKind>모집기간</TextKind>
                        <TextAbout>{program.regist_start_at} ~ {program.regist_end_at}</TextAbout>
                    </Text>
                </TextContainer>
                <TextContainer>
                    <Text>
                        <TextKind>활동 분야</TextKind>
                        <TextAbout>{program.activity_category}</TextAbout>
                    </Text>
                    <Text>
                        <TextKind>모집인원</TextKind>
                        <TextAbout>{program.subscriber_limit}명</TextAbout>
                    </Text>
                </TextContainer>
                <TextContainer>
                    <Text>
                        <TextKind>활동기간</TextKind>
                        <TextAbout>{program.activity_start_at} ~ {program.activity_end_at}</TextAbout>
                    </Text>
                    <Text>
                        <TextKind>주소</TextKind>
                        <TextAbout>{program.address.address}</TextAbout>
                    </Text>
                </TextContainer>
                <TextContainer>
                    <Text>
                        <TextKind>연락처</TextKind>
                        <TextAbout>{program.phone}</TextAbout>
                    </Text>
                    <Text>
                        <TextKind>Email</TextKind>
                        <TextAbout>{program.email}</TextAbout>
                    </Text>
                </TextContainer>
            </InfoContainer>
            <DetailInfoContainer>
                <TextKind>상세설명</TextKind>
                <DetailInfoText>
                    {program.content}
                </DetailInfoText>
            </DetailInfoContainer>
            <KakaoMap />
            <BtnContainer>
                {isCarer ? null :
                    <EnrollBtn>신청하기</EnrollBtn>
                }
                {/*<BackToListBtn onClick={moveToSearchPage}>뒤로 가기</BackToListBtn>*/}
                <GoBackBtn />
            </BtnContainer>
            <BottomBanner>
                <BottomText>
                    ※ 모든 프로그램은 선착순으로 모집하며, 해당 프로그램이 ‘모집중’ 상태인 경우, 신청이 가능합니다.
                </BottomText>
                <BottomText>
                    ※ [신청하기] 클릭 시 바로 프로그램 신청이 완료되며, [신청 완료] 상태가 되어 요양센터에 학생 정보가 건네집니다.
                </BottomText>
                <BottomText>
                    ※ 프로그램 내용 혹은 승인 여부 등 자세한 문의사항은 요양센터 전화 혹은 이메일을 통해 빠른 문의가 가능합니다.
                </BottomText>
            </BottomBanner>

        </ProgramInfoContainer>

    );
}
