import styled from "styled-components";
import ProgramInfo from "../components/ProgramInfo";
import RegisterProgramInfo from "../components/RegisterProgramInfo";
import axios from "axios";

export default function RegisterProgramPage() {
  
  const Container = styled.div`
  min-height: 100vh;
  `
  const Banner = styled.div`
  width: 100%;
  height: 179px;
  background-color: #D9DFF5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 769px) and (max-width: 1200px) {
    height: 140px;
  }
  @media screen and (max-width: 768px) {
    height: 120px;
  }
  `
  const BannerTitle = styled.div`
  font-size: 40px;
  line-height: 40px;
  font-weight: 700;
  margin-bottom: 15px;
  @media screen and (min-width: 769px) and (max-width: 1200px) {
    font-size: 28px;
    line-height: 28px;
  }
  @media screen and (max-width: 768px) {
    font-size: 24px;
    line-height: 24px;
  }
  `
  const BannerText = styled.div`
  font-size: 16px;
  line-height: 30px;
  color: #717171;
  @media screen and (min-width: 769px) and (max-width: 1200px) {
    font-size: 14px;
    line-height: 14px;
  }
  @media screen and (max-width: 768px) {
    width: 300px;
    font-size: 12px;
    line-height: 12px;
  }
  `
 
  return (
    <Container>
      <Banner>
        <BannerTitle>프로그램 등록하기</BannerTitle>
        <BannerText>어르신을 위한 디지털 기기 교육 프로그램입니다. 우리 요양원 어르신을 위한 프로그램을 등록해 주세요!</BannerText>
      </Banner>
      <RegisterProgramInfo/>
    </Container>

  );
}
