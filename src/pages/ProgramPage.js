import styled from "styled-components";
import { useState, useEffect } from "react";
import arrow from "../img/arrow.png";
import point from "../img/point.png";
import axios from "axios";

export default function ProgramPage() {
  //const Si = "서울특별시";
  const [selectGu, setSelectGu] = useState("");
  const [selectActivity, setSelectActivity] = useState("");
  const [searchList, setSearchList] = useState({});

  const search = async () => {
    try {
      const response = await axios.get(
        `http://api.igoofficial.com/program/?address=${selectGu}&activity=${selectActivity}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access-token")}`,
          },
        }
      );
      console.log(response.data);
      setSearchList(response.data);
    } catch (error) {
      console.log("SubmitInfo Error!");
    }
  };

  const option1 = [{ value: "서울특별시", label: "서울특별시" }];
  const option2 = [
    { value: "none", label: "구 선택" },
    { value: "강동구", label: "강동구" },
    { value: "강북구", label: "강북구" },
    { value: "강서구", label: "강서구" },
    { value: "관악구", label: "관악구" },
    { value: "광진구", label: "광진구" },
    { value: "구로구", label: "구로구" },
    { value: "금천구", label: "금천구" },
    { value: "노원구", label: "노원구" },
    { value: "도봉구", label: "도봉구" },
    { value: "동대문구", label: "동대문구" },
    { value: "동작구", label: "동작구" },
    { value: "마포구", label: "마포구" },
    { value: "서대문구", label: "서대문구" },
    { value: "서초구", label: "서초구" },
    { value: "성동구", label: "성동구" },
    { value: "성북구", label: "성북구" },
    { value: "송파구", label: "송파구" },
    { value: "양천구", label: "양천구" },
    { value: "영등포구", label: "영등포구" },
    { value: "용산구", label: "용산구" },
    { value: "은평구", label: "은평구" },
    { value: "종로구", label: "종로구" },
    { value: "중구", label: "중구" },
    { value: "중랑구", label: "중랑구" },
  ];
  const option3 = [
    { value: "none", label: "활동 분야 선택" },
    { value: "스마트폰 사용법", label: "스마트폰 사용법" },
    { value: "SNS 활용법", label: "SNS 활용법" },
    { value: "유튜브 활용법", label: "유튜브 활용법" },
    { value: "키오스크 활용법", label: "키오스크 활용법" },
  ];
  const PostContainer = styled.div`
    width: 1220px;
    margin-top: 70px;
  `;
  const TextContainer = styled.div`
    display: flex;
  `;
  const SearchingResultText = styled.div`
    font-size: 16px;
    line-height: 24px;
    span {
      color: #d88e00;
    }
  `;
  const DateInfoText = styled.div`
    margin-left: 25px;
    font-size: 16px;
    line-height: 24px;
    color: #717171;
  `;
  const Table = styled.div`
    width: 1220px;
    height: 40px;
    background-color: #e3e3e3;
    margin-top: 10px;
    display: flex;
    justify-content: space-around;
    border-top: 1px solid black;
  `;
  const TableTitle = styled.div`
    width: ${(props) => props.width};
    height: 40px;
    font-size: 16px;
    line-height: 24px;
    align-items: center;
    display: flex;
    justify-content: center;
  `;

  return (
    <Container>
      <TitleContainer>
        <BigTitle>디지털 교육 프로그램 목록</BigTitle>
        <SmallTitle>
          어르신을 위한 디지털 기기 교육 프로그램입니다. 활동을 신청하고
          포인트를 적립하세요!
        </SmallTitle>
      </TitleContainer>
      <SearchContainer>
        <SelectContainer>
          <SelectTitle>활동 지역</SelectTitle>
          <Select width="200px">
            {option1.map((item, idx) => (
              <option value={item.value} key={idx}>
                {item.label}
              </option>
            ))}
          </Select>
          <Select
            width="200px"
            onChange={(e) => {
              setSelectGu(e.target.value);
            }}
          >
            {option2.map((item, idx) => (
              <option value={item.value} key={idx}>
                {item.label}
              </option>
            ))}
          </Select>
        </SelectContainer>
        <SelectContainer>
          <SelectTitle>활동 분야</SelectTitle>
          <Select
            width="420px"
            onChange={(e) => {
              setSelectActivity(e.target.value);
            }}
          >
            {option3.map((item, idx) => (
              <option value={item.value} key={idx}>
                {item.label}
              </option>
            ))}
          </Select>
        </SelectContainer>
        <SearchBtn onClick={search}>검색</SearchBtn>
      </SearchContainer>

      <PostContainer>
        <TextContainer>
          <SearchingResultText>
            총 <span>{searchList.length}</span>건의 검색 결과가 있습니다.
          </SearchingResultText>
          <DateInfoText>
            ※ 모집/활동 시작일은 해당월의 1일, 마감일은 해당 월의 마지막 일을
            의미합니다.
          </DateInfoText>
        </TextContainer>
        <Table>
          <TableTitle width="153px">모집 여부</TableTitle>
          <TableTitle width="459px">모집 제목</TableTitle>
          <TableTitle width="152px">활동 분야</TableTitle>
          <TableTitle width="152px">요양원</TableTitle>
          <TableTitle width="152px">활동 기간</TableTitle>
          <TableTitle width="152px">
            <img src={point} alt=""></img>포인트
          </TableTitle>
        </Table>
      </PostContainer>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
`;
const TitleContainer = styled.div`
  width: 672px;
  height: 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const BigTitle = styled.div`
  font-size: 40px;
  font-weight: 700;
  line-height: 66px;
`;
const SmallTitle = styled.div`
  font-size: 16px;
  line-height: 30px;
  color: #717171;
`;
const SearchContainer = styled.div`
  width: 806px;
  height: 212px;
  border-radius: 30px;
  background-color: #fdd888;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const SelectContainer = styled.div`
  width: 534px;
  height: 40px;
  display: flex;
  margin-bottom: 20px;
`;
const SelectTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
  line-height: 40px;
`;
const Select = styled.select`
  border-radius: 15px;
  margin-left: 20px;
  border: 0;
  width: ${(props) => props.width};
  padding-left: 10px;
  appearance: none;
  background: url("${arrow}") no-repeat right center;
  background-size: 40px;
  background-color: white;
  &:focus {
    outline: none;
  }
`;
const SearchBtn = styled.button`
  width: 64px;
  height: 31px;
  color: white;
  background-color: black;
  border-radius: 20px;
  border: 0;
  font-size: 16px;
  font-weight: 700;
  line-height: 16px;
  cursor: pointer;
`;
