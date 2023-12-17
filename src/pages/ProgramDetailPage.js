import styled from "styled-components";
import ProgramInfo from "../components/ProgramInfo";
import { useSelector } from "react-redux";

export default function ProgramDetailPage() {
  const { userData } = useSelector(({ user }) => user);  // user {student? carer?} 여부

  const Container = styled.div`
  min-height: 100vh;
  `
  const Banner = styled.div`
  width: 100%;
  height: 179px;
  background-color: ${(props) => props.isCarer ? "#D9DFF5" : "#F9F1DF"};
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
      <Banner isCarer={userData.is_carer}>
        <BannerTitle>프로그램 상세 설명</BannerTitle>
        {userData.is_carer ?
          <BannerText>어르신을 위한 디지털 기기 교육 프로그램입니다.</BannerText>
          : <BannerText>어르신을 위한 디지털 기기 교육 프로그램입니다. 활동을 신청하고 포인트를 적립하세요!</BannerText>
        }
        </Banner>
      <ProgramInfo isCarer={userData.is_carer}/>
    </Container>

  );
}
