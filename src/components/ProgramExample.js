import styled from 'styled-components';
import smartphone from '../img/smartphone.png';
import sns from '../img/sns.png';
import youtube from '../img/youtube.png';
import kiosk from '../img/kiosk.png';
export default function ProgramExample () {
const Container = styled.div`
width: 100%;
height: 537px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Title = styled.div`
font-size: 24px;
line-height: 24px;
font-weight: 700;
position: relative;
right: 440px;
`
const ImgContainer = styled.div`
width: 263px;
height: 352px;
border-radius: 10px;
border: 1px solid #E3E3E3;
margin-top: 20px;
margin-right: 20px;
`
const FlexContainer = styled.div`
display: flex;
`
const ImgTitle = styled.div`
font-size: 20px;
font-weight: 700;
line-height: 20px;
margin-top: 20px;
padding-left: 20px;
padding-right: 20px;
`
const ImgText = styled.div`
font-size: 16px;
line-height: 20px;
font-weight: 400;
margin-top: 10px;`
    return (
        <Container>
            <Title>디지털 기기 교육 프로그램</Title>
            <FlexContainer>
                <ImgContainer>
                    <img src={smartphone} alt=''></img>
                    <ImgTitle>스마트폰 사용법<ImgText>문자, 통화, 지도, 카메라, 앱 설치 등 기본 기능을 알려드립니다.</ImgText></ImgTitle>
                </ImgContainer>
                <ImgContainer>
                    <img src={sns} alt=''></img>
                    <ImgTitle>SNS 활용하기<ImgText>카카오톡, 네이버 밴드 등 가입부터 채팅까지 알려드립니다.</ImgText></ImgTitle>
                </ImgContainer>
                <ImgContainer>
                    <img src={youtube} alt=''></img>
                    <ImgTitle>유튜브 활용법<ImgText>원하는 콘텐츠를 검색해 영상을 시청하는 법을 알려드립니다.</ImgText></ImgTitle>
                </ImgContainer>
                <ImgContainer>
                    <img src={kiosk} alt=''></img>
                    <ImgTitle>키오스크 사용법<ImgText>매장 내 키오스크를 함께 이용해보며 사용법을 알려드립니다.</ImgText></ImgTitle>
                </ImgContainer>
            </FlexContainer>
        </Container>
    );
}