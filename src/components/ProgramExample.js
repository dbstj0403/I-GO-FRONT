import styled from 'styled-components';
import smartphone from '../img/smartphone.png';
import sns from '../img/sns.png';
import youtube from '../img/youtube.png';
import kiosk from '../img/kiosk.png';
export default function ProgramExample() {

    const Container = styled.div`
    width: 1100px;
    height: 537px;
    flex-direction: column;
    justify-content: center;
    margin-top: 150px;

    @media screen and (min-width: 769px) and (max-width: 1200px) {
    width: 760px;
    }

    @media screen and (max-width: 768px) {
    width: 400px;
    margin-bottom: 100px;
    `

    const Title = styled.div`
    font-size: 24px;
    line-height: 24px;
    font-weight: 700;

    @media screen and (min-width: 769px) and (max-width: 1200px) {
    font-size: 18px;
    }

    @media screen and (max-width: 768px) {
    font-size: 16px;
    }
    `

    const ImgContainer = styled.div`
    width: 263px;
    height: 352px;
    border-radius: 10px;
    border: 1px solid #E3E3E3;
    margin-top: 20px;

    @media screen and (min-width: 769px) and (max-width: 1200px) {
    width: 180px;
    height: 280px;
    }

    @media screen and (max-width: 768px) {
    width: 180px;
    height: 250px;
    `

    const FlexContainer = styled.div`
    display: flex;
    gap: 20px;

    @media screen and (min-width: 769px) and (max-width: 1200px) {
    gap: 10px;
    }

    @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    gap: 10px;
    }
    
    `
    const ImgTitle = styled.div`
    font-size: 20px;
    font-weight: 700;
    margin-top: 20px;
    padding: 0px 20px;

    @media screen and (min-width: 769px) and (max-width: 1200px) {
    font-size: 16px;
    margin-top: 16px;
    padding: 0px 12px;
    }

    @media screen and (max-width: 768px) {
    font-size: 12px;
    margin-top: 12px;
    padding: 0px 10px;
    `

    const ImgText = styled.div`
    font-size: 16px;
    line-height: 20px;
    font-weight: 400;
    margin-top: 10px;

    @media screen and (min-width: 769px) and (max-width: 1200px) {
    font-size: 13px;
    line-height: 20px;
    }

    @media screen and (max-width: 768px) {
    font-size: 11px;
    line-height: 16spx;
    margin-top: 5px;
    }
    `

    return (
        <Container>
            <Title>디지털 기기 교육 프로그램</Title>
            <FlexContainer>
                <ImgContainer>
                    <img src={smartphone} alt='' width='100%'></img>
                    <ImgTitle>스마트폰 사용법<ImgText>문자, 통화, 지도, 카메라, 앱 설치 등 기본 기능을 알려드립니다.</ImgText></ImgTitle>
                </ImgContainer>
                <ImgContainer>
                    <img src={sns} alt='' width='100%'></img>
                    <ImgTitle>SNS 활용하기<ImgText>카카오톡, 네이버 밴드 등 가입부터 채팅까지 알려드립니다.</ImgText></ImgTitle>
                </ImgContainer>
                <ImgContainer>
                    <img src={youtube} alt='' width='100%'></img>
                    <ImgTitle>유튜브 활용법<ImgText>원하는 콘텐츠를 검색해 영상을 시청하는 법을 알려드립니다.</ImgText></ImgTitle>
                </ImgContainer>
                <ImgContainer>
                    <img src={kiosk} alt='' width='100%'></img>
                    <ImgTitle>키오스크 사용법<ImgText>매장 내 키오스크를 함께 이용해보며 사용법을 알려드립니다.</ImgText></ImgTitle>
                </ImgContainer>
            </FlexContainer>
        </Container>
    );
}