import styled from "styled-components";
import ProgramInfo from "../components/ProgramInfo";

export default function ProgramDetailPage() {
  const Container = styled.div`
  min-height: 100vh;
  `
  const Banner = styled.div`
  width: 100%;
  height: 179px;
  background-color: #F9F1DF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  `
  const BannerTitle = styled.div`
  font-sizE: 40px;
  line-height: 40px;
  font-weight: 700;
  margin-bottom: 15px;
  `
  const BannerText = styled.div`
  font-sizE: 16px;
  line-height: 30px;
  color: #717171;
  `
 
  return (
    <Container>
      <Banner>
        <BannerTitle>프로그램 신청하기</BannerTitle>
        <BannerText>어르신을 위한 디지털 기기 교육 프로그램입니다. 활동을 신청하고 포인트를 적립하세요!</BannerText>
      </Banner>
      <ProgramInfo/>
    </Container>

  );
}
