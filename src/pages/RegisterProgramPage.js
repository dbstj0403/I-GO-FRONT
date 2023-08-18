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
        <BannerTitle>프로그램 등록하기</BannerTitle>
        <BannerText>어르신을 위한 디지털 기기 교육 프로그램입니다. 우리 요양원 어르신을 위한 프로그램을 등록해 주세요!</BannerText>
      </Banner>
      <RegisterProgramInfo/>
    </Container>

  );
}
