import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import point from '../img/point.png';
export default function ProgramInfo () {
    const location = useLocation();
    //const searchList = location.state.searchList;
    
    const movePage = useNavigate();
    const moveToSearchPage = () => {
        movePage('/program');
    }
    /*const enrollProgram = async () => {
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
    `
    const BtnContainer = styled.div`
    width: 378px;
    height: 67px;
    display: flex;
    margin-top: 20px;
    justify-content: space-between;
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
    `
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
    const BottomBanner = styled.div`
    width: 1010px;
    height: 165px;
    border-radius: 10px;
    background-color: #F5F5F5;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 100px;
    padding-right: 100px;
    `
    const BottomText = styled.div`
    font-size: 16px;
    line-height: 16px;
    color: #2C2C2C;
    margin: 10px;
    `

    return (
        <ProgramInfoContainer>
            <TitleAndPointContainer>
                <Title>aa</Title>
                <PointBtn><img src={point} alt='' style={{paddingRight: '10px'}}></img>300 P</PointBtn>
            </TitleAndPointContainer>
            <InfoContainer>
                <TextContainer>
                    <Text>
                        <TextKind>요양원</TextKind>
                        <TextAbout>dd</TextAbout>
                    </Text>
                    <Text>
                        <TextKind>모집기간</TextKind>
                        <TextAbout>dd</TextAbout>
                    </Text>
                </TextContainer>
                <TextContainer>
                    <Text>
                        <TextKind>활동 분야</TextKind>
                        <TextAbout>dd</TextAbout>
                    </Text>
                    <Text>
                        <TextKind>모집인원</TextKind>
                        <TextAbout>dd명</TextAbout>
                    </Text>
                </TextContainer>
                <TextContainer>
                    <Text>
                        <TextKind>활동기간</TextKind>
                        <TextAbout>dd</TextAbout>
                    </Text>
                    <Text>
                        <TextKind>주소</TextKind>
                        <TextAbout>dd</TextAbout>
                    </Text>
                </TextContainer>
                <TextContainer>
                    <Text>
                        <TextKind>연락처</TextKind>
                        <TextAbout>dd</TextAbout>
                    </Text>
                    <Text>
                        <TextKind>Email</TextKind>
                        <TextAbout>dd</TextAbout>
                    </Text>
                </TextContainer>
            </InfoContainer>
            <BtnContainer>
                <EnrollBtn>신청하기</EnrollBtn>
                <BackToListBtn onClick={moveToSearchPage}>뒤로 가기</BackToListBtn>
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
