import styled from 'styled-components';
import point from '../img/point.png';
import axios from 'axios';
import arrow from '../img/arrow.png';
import { useState } from 'react';
export default function RegisterProgramInfo () {
    const [InfoList, setInfoList] = useState({});
    const [facilityName, setFacilityName] = useState('');
    const getFacilityName = async () => {
        try {
            const response = await axios.get(`/profile/${localStorage.getItem('user-id')}`,
                {headers: {
                  Authorization: `Bearer ${localStorage.getItem("access-token")}`,
                }},
            );
            setInfoList(response.data);
        }
        catch(error){
            console.log('get facility name error!')
        }
      }
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
    span {
        color: #3A55B5;
        margin-right: 5px;
    }
  `;
  const TitleInput = styled.input`
  background-color: #F5F5F5;
  width: 644px;
  height: 53px;
  border-radius: 10px;
  border: 0;
  text-indent: 15px;
  font-size: 24px;
  line-height: 24px;
  margin-right: 100px;
  &:focus {
    outline: none;
  }
  `
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
    margin-top: 20px;
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
    span {
        padding-right: 10px;
    }
  `;
  const TextKind = styled.div`
    width: 125px;
    height: 38px;
    color: #717171;
    font-size: 20px;
    line-height: 24px;
    span {
        color: #3A55B5;
        padding-right: 5px;
    }
  `;
  const TextAbout = styled.div`
    width: 330px;
    height: 38px;
    font-size: 20px;
    line-height: 24px;
    font-weight: 700;
    `
    const GreyInput = styled.input`
    width: ${props => props.width};
    height: 38px;
    border-radius: 10px;
    background-color: #F5F5F5;
    border: 0;
    margin-right: 5px;
    text-indent: 10px;
    font-size: 16px;
    line-height: 24px;
    &:focus {
        outline: none;
    }`
    const GreyInputContainer = styled.div`
    display: flex;
    width: 273px;
    height: 38px;
    align-items: baseline;`
    const Select = styled.select`
    border-radius: 15px;
    font-size: 16px;
    text-indent: 5px;
    line-height: 16px;
    border: 0;
    width: ${(props) => props.width};
    padding-left: 10px;
    appearance: none;
    background: url("${arrow}") no-repeat right center;
    background-size: 40px;
    background-color: white;
    border: 1px solid black;: 
    &:focus {
    outline: none;
    }
    `;
    const Span = styled.div`
    width: 28px;
    height: 38px;
    line-height: 38px;`
    return (
        <ProgramInfoContainer>
             <TitleAndPointContainer>
                <Title><span>*</span>제목</Title>
                <TitleInput placeholder='제목을 입력하세요. (15자 이내)'/>
                <PointBtn><img src={point}alt='' style={{paddingRight: '10px'}}></img>300 P</PointBtn>
            </TitleAndPointContainer>
            <InfoContainer>
                <TextContainer>
                    <Text>
                        <TextKind>요양원</TextKind>
                        <TextAbout>행복요양원</TextAbout>
                    </Text>
                    <Text>
                        <TextKind><span>*</span>모집기간</TextKind>
                        <GreyInputContainer>
                            <GreyInput width='67px' placeholder='2023'></GreyInput>
                            .
                            <GreyInput width='41px' placeholder='07'></GreyInput>
                            ~
                            <GreyInput width='67px' placeholder='2023'></GreyInput>
                            .
                            <GreyInput width='41px' placeholder='08'></GreyInput>
                        </GreyInputContainer>
                    </Text>
                </TextContainer>
                <TextContainer>
                    <Text>
                        <TextKind><span>*</span>활동 분야</TextKind>
                        <Select width= '281px'>
                            <option value='스마트폰 사용법'>스마트폰 사용법</option>
                            <option value='SNS 활용법'>SNS 활용법</option>
                            <option value='유튜브 활용법'>유튜브 활용법</option>
                            <option value='키오스크 활용법'>키오스크 활용법</option>
                        </Select>
                    </Text>
                    <Text>
                        <TextKind><span>*</span>모집인원</TextKind>
                        <GreyInput width='67px'></GreyInput>
                        <Span>명</Span>
                    </Text>
                </TextContainer>
                <TextContainer>
                    <Text>
                        <TextKind><span>*</span>활동기간</TextKind>
                        <GreyInputContainer>
                            <GreyInput width='67px' placeholder='2023'></GreyInput>
                            .
                            <GreyInput width='41px' placeholder='09'></GreyInput>
                            ~
                            <GreyInput width='67px' placeholder='2023'></GreyInput>
                            .
                            <GreyInput width='41px' placeholder='12'></GreyInput>
                        </GreyInputContainer>
                    </Text>
                    <Text>
                        <TextKind>주소</TextKind>
                        <TextAbout>ddd</TextAbout>
                    </Text>
                </TextContainer>
                <TextContainer>
                    <Text>
                        <TextKind>연락처</TextKind>
                        <TextAbout>010</TextAbout>
                    </Text>
                    <Text>
                        <TextKind>Email</TextKind>
                        <TextAbout>eee</TextAbout>
                    </Text>
                </TextContainer>
            </InfoContainer>
        </ProgramInfoContainer>
    );
}