import styled from "styled-components";
import { useState, useEffect } from "react";
import arrow from "../img/arrow.png";
import TitleTable from "../components/TitleTable";
import axios from "axios";
import ShowPost from "../components/ShowPost";
import ProgramExample from "../components/ProgramExample";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function ProgramPage() {
  const [selectGu, setSelectGu] = useState("");  // 활동 지역 中 구 선택
  const [selectActivity, setSelectActivity] = useState("");  // 활동 분야 선택
  const [searchList, setSearchList] = useState([]);  // 프로그램 목록
  const [onSearch, setOnsearch] = useState(false);  // 검색버튼 클릭 여부
  const { userData } = useSelector(({ user }) => user);  // user {student? carer?} 여부

  const search = async () => {
    setOnsearch(true);
    try {
      const response = await axios.get(
        `http://api.igoofficial.com/program/?address=${selectGu}&activity=${selectActivity}`,
        {/*
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access-token")}`,
          },
        */}
      );
      console.log(response.data);
      setSearchList(response.data);
    } catch (error) {
      console.log("SubmitInfo Error!");
    }
  };

  const movePage = useNavigate();
  const moveToRegisterProgramPage = () => {
    movePage("/registerProgram");
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
  return (
    <Container>

      {/* 페이지 타이틀 */}
      <TitleContainer>
        <BigTitle>디지털 교육 프로그램 목록</BigTitle>
        {userData.is_carer ?
          <SmallTitle>
            어르신을 위한 디지털 기기 교육 프로그램입니다.
          </SmallTitle>
          : <SmallTitle>
            어르신을 위한 디지털 기기 교육 프로그램입니다. 활동을 신청하고
            포인트를 적립하세요!
          </SmallTitle>
        }

      </TitleContainer>

      {/* 프로그램 등록 버튼 */}
      {userData.is_carer && (
        <RegisterProgramBtn onClick={moveToRegisterProgramPage}>
          우리 요양원 프로그램 등록하기
        </RegisterProgramBtn>
      )}

      {/* 프로그램 검색 박스 */}
      <SearchContainer isCarer={userData.is_carer}>

        {/* 활동 지역 검색 */}
        <SelectContainer>
          <SelectTitle>활동 지역</SelectTitle>
          <ShortSelect>
            {option1.map((item, idx) => (
              <option value={item.value} key={idx}>
                {item.label}
              </option>
            ))}
          </ShortSelect>
          <ShortSelect
            onChange={(e) => {
              setSelectGu(e.target.value);
            }}
          >
            {option2.map((item, idx) => (
              <option value={item.value} key={idx}>
                {item.label}
              </option>
            ))}
          </ShortSelect>
        </SelectContainer>

        {/* 활동 분야 검색 */}
        <SelectContainer>
          <SelectTitle>활동 분야</SelectTitle>
          <LongSelect
            onChange={(e) => {
              setSelectActivity(e.target.value);
            }}
          >
            {option3.map((item, idx) => (
              <option value={item.value} key={idx}>
                {item.label}
              </option>
            ))}
          </LongSelect>
        </SelectContainer>

        {/* 검색 버튼 */}
        <SearchBtn onClick={search}>검색</SearchBtn>

      </SearchContainer>

      {/* 프로그램 목록 타이틀 및 프로그램 등록하기 버튼 */}
      {onSearch && (
        <TitleTable searchList={searchList} isStudent={userData.is_student} isCarer={userData.is_carer} />
      )}

      {/* 프로그램 목록 */}
      <ComponentContainer onSearch={onSearch}>
        {searchList.length !== 0
          ? searchList.map((item, idx) => (
            <ShowPost key={item.id} searchList={searchList[idx]} />
          ))
          : null}
      </ComponentContainer>

      {/* 프로그램 분야 설명 */}
      <ProgramExample />
    </Container>
  );
}
const ComponentContainer = styled.div`
  width: 1220px;
  border-top: ${(props) => (props.onSearch ? "1px solid" : null)};
  @media screen and (min-width: 769px) and (max-width: 1200px) {
    width: 720px;
  }
  @media screen and (max-width: 768px) {
    width: 440px;
  }
`;
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
  margin: 50px 0px 20px 0px;
  @media screen and (max-width: 768px) {
    width: 400px;
    height: 80px;
    margin: 30px 0px 10px 0px;
  }
`;
const BigTitle = styled.div`
  font-size: 40px;
  font-weight: 700;
  line-height: 66px;
  @media screen and (min-width: 769px) and (max-width: 1200px) {
    font-size: 28px;
  }
  @media screen and (max-width: 768px) {
    font-size: 24px;
    line-height: 40px;
  }
`;
const SmallTitle = styled.div`
  font-size: 16px;
  line-height: 30px;
  color: #717171;
  @media screen and (min-width: 769px) and (max-width: 1200px) {
    font-size: 14px;
  }
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
const RegisterProgramBtn = styled.button`
  width: 320px;
  height: 61px;
  color: white;
  background-color: #3a55b5;
  border-radius: 20px;
  font-size: 18px;
  font-weight: 700;
  border: 0;
  margin: auto;
  margin-bottom: 20px;
  @media screen and (min-width: 769px) and (max-width: 1200px) {
    font-size: 16px;
    width: 280px;
    height: 50px;
    margin-bottom: 15px;
  }
  @media screen and (max-width: 768px) {
    font-size: 12px;
    border-radius: 15px;
    width: 240px;
    height: 40px;
    margin-bottom: 0px;
  }
`;
const SearchContainer = styled.div`
  width: 806px;
  height: 212px;
  border-radius: 30px;
  background-color: ${(props) =>
    props.isCarer === true ? "#ADBBEC" : "#fdd888"};
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 769px) and (max-width: 1200px) {
    width: 700px;
    height: 200px;
  }
  @media screen and (max-width: 768px) {
    width: 400px;
    height: 150px;
  }
`;
const SelectContainer = styled.div`
  width: 534px;
  height: 40px;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  @media screen and (min-width: 769px) and (max-width: 1200px) {
    width: 500px;
    height: 40px;
  }
  @media screen and (max-width: 768px) {
    width: 400px;
    height: 30px;
    margin-bottom: 10px;
  }
`;
const SelectTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
  line-height: 40px;
  @media screen and (min-width: 769px) and (max-width: 1200px) {
    font-size: 14px;
  }
  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`;
const ShortSelect = styled.select`
  border-radius: 15px;
  margin-left: 20px;
  border: 0;
  width: 200px;
  padding-left: 10px;
  appearance: none;
  background: url("${arrow}") no-repeat right center;
  background-size: 40px;
  background-color: white;
  &:focus {
    outline: none;
  }
  @media screen and (min-width: 769px) and (max-width: 1200px) {
    font-size: 14px;
  }
  @media screen and (max-width: 768px) {
    font-size: 10px;
    margin-left: 10px;
    width: 100px;
  }
`;
const LongSelect = styled.select`
  border-radius: 15px;
  margin-left: 20px;
  border: 0;
  width: 420px;
  padding-left: 10px;
  appearance: none;
  background: url("${arrow}") no-repeat right center;
  background-size: 40px;
  background-color: white;
  &:focus {
    outline: none;
  }
  @media screen and (min-width: 769px) and (max-width: 1200px) {
    font-size: 14px;
  }
  @media screen and (max-width: 768px) {
    font-size: 10px;
    margin-left: 10px;
    width: 210px;
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
  @media screen and (min-width: 769px) and (max-width: 1200px) {
    font-size: 14px;
  }
  @media screen and (max-width: 768px) {
    width: 50px;
    height: 31px;
    font-size: 10px;
  }
`;
