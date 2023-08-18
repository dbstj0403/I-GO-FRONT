import styled from "styled-components";
import { useLocation } from "react-router-dom";
import point from "../img/point.png";
export default function ProgramInfo() {
  const location = useLocation();
  const searchList = location.state.searchList;
  const ProgramInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;
  const TitleAndPointContainer = styled.div`
    display: flex;
    width: 1008px;
    height: 54px;
    justify-content: space-between;
    align-items: baseline;
    margin-top: 80px;
  `;
  const Title = styled.div`
    font-size: 24px;
    line-height: 24px;
    font-weight: 700;
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
  `;
  const TextContainer = styled.div`
    width: 910px;
    height: 38px;
    display: flex;
    margin: 10px;
  `;
  const Text = styled.div`
    width: 455px;
    height: 38px;
    display: flex;
  `;
  const TextKind = styled.div`
    width: 125px;
    height: 38px;
    color: #717171;
    font-size: 20px;
    line-height: 24px;
  `;
  const TextAbout = styled.div`
    width: 330px;
    height: 38px;
    font-size: 20px;
    line-height: 24px;
  `;
  const DetailInfoContainer = styled.div`
    width: 1008px;
    height: 322px;
    border-radius: 10px;
    border: 1px solid #bfbfbf;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 40px;
    padding-bottom: 40px;
  `;
  const DetailInfoText = styled.div`
    width: 750px;
    height; 180px;
    font-size: 20px;
    line-height: 24px;
    `;
  return (
    <ProgramInfoContainer>
      <TitleAndPointContainer>
        <Title>매주 금요일 키오스크 교육해 주실 분 모집합니다</Title>
        <PointBtn>
          <img src={point} alt="" style={{ paddingRight: "10px" }}></img>300 P
        </PointBtn>
      </TitleAndPointContainer>
      <InfoContainer>
        <TextContainer>
          <Text>
            <TextKind>요양원</TextKind>
            <TextAbout>서울행복요양원</TextAbout>
          </Text>
          <Text>
            <TextKind>모집기간</TextKind>
            <TextAbout>2023.07~2023.08</TextAbout>
          </Text>
        </TextContainer>
        <TextContainer>
          <Text>
            <TextKind>활동 분야</TextKind>
            <TextAbout>키오스크 사용법</TextAbout>
          </Text>
          <Text>
            <TextKind>모집인원</TextKind>
            <TextAbout>30명</TextAbout>
          </Text>
        </TextContainer>
        <TextContainer>
          <Text>
            <TextKind>활동기간</TextKind>
            <TextAbout>2023.08~2023.12</TextAbout>
          </Text>
          <Text>
            <TextKind>주소</TextKind>
            <TextAbout>서울시 00구 00로 00길 00</TextAbout>
          </Text>
        </TextContainer>
        <TextContainer>
          <Text>
            <TextKind>연락처</TextKind>
            <TextAbout>010-7241-0441</TextAbout>
          </Text>
          <Text>
            <TextKind>Email</TextKind>
            <TextAbout>example.@email.com</TextAbout>
          </Text>
        </TextContainer>
      </InfoContainer>
      <DetailInfoContainer>
        <TextKind>상세설명</TextKind>
        <DetailInfoText>
          설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설
          명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명
          설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설
          명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명
          설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명
        </DetailInfoText>
      </DetailInfoContainer>
      <KakaoMap />
    </ProgramInfoContainer>
  );
}
