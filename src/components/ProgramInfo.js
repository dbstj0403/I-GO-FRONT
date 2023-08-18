import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import point from '../img/point.png';
export default function ProgramInfo () {
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
    `
    return (
        <ProgramInfoContainer>
            <TitleAndPointContainer>
                <Title>{searchList.title}</Title>
                <PointBtn><img src={point} alt='' style={{paddingRight: '10px'}}></img>300 P</PointBtn>
            </TitleAndPointContainer>
            <InfoContainer>
                <TextContainer>
                    <Text>
                        <TextKind>요양원</TextKind>
                        <TextAbout>{searchList.facility_name}</TextAbout>
                    </Text>
                    <Text>
                        <TextKind>모집기간</TextKind>
                        <TextAbout>{searchList.regist_start_at}~{searchList.regist_end_at}</TextAbout>
                    </Text>
                </TextContainer>
                <TextContainer>
                    <Text>
                        <TextKind>활동 분야</TextKind>
                        <TextAbout>{searchList.activity_category}</TextAbout>
                    </Text>
                    <Text>
                        <TextKind>모집인원</TextKind>
                        <TextAbout>{searchList.subscriber_limit}명</TextAbout>
                    </Text>
                </TextContainer>
                <TextContainer>
                    <Text>
                        <TextKind>활동기간</TextKind>
                        <TextAbout>{searchList.activity_start_at}~{searchList.activity_end_at}</TextAbout>
                    </Text>
                    <Text>
                        <TextKind>주소</TextKind>
                        <TextAbout>{searchList.address.address} {searchList.address.detail_address}</TextAbout>
                    </Text>
                </TextContainer>
                <TextContainer>
                    <Text>
                        <TextKind>연락처</TextKind>
                        <TextAbout>{searchList.phone}</TextAbout>
                    </Text>
                    <Text>
                        <TextKind>Email</TextKind>
                        <TextAbout>{searchList.email}</TextAbout>
                    </Text>
                </TextContainer>

            </InfoContainer>

        </ProgramInfoContainer>

    );
}
