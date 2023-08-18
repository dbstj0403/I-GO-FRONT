import styled from "styled-components";
import point from "../img/point.png";
import { useNavigate } from "react-router-dom";
export default function TitleTable({ isStudent }) {
  const searchList = [];
  const PostContainer = styled.div`
    width: 1220px;
    margin-top: 70px;
  `;
  const SearchingResultText = styled.div`
    font-size: 16px;
    line-height: 24px;
    position: relative;
    top: ${isStudent ? null : "17px"};
    span {
      color: #d88e00;
    }
  `;
  const TextContainer = styled.div`
    display: flex;
    height: ${isStudent ? "24px" : "61px"};
    width: 1220px;
    align-items: baseline;
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
  const DateInfoText = styled.div`
    margin-left: 25px;
    font-size: 16px;
    line-height: 24px;
    color: #717171;
    position: relative;
    top: ${isStudent ? null : "17px"};
  `;
  const TableTitle = styled.div`
    width: ${(props) => props.width};
    height: 40px;
    font-size: 16px;
    line-height: 24px;
    align-items: center;
    display: flex;
    justify-content: center;
    font-weight: ${(props) => props.bold};
  `;
  const RegisterProgramBtn = styled.button`
    width: 241px;
    height: 61px;
    color: white;
    background-color: #3a55b5;
    border-radius: 20px;
    font-size: 20px;
    font-weight: 700;
    line-height: 20px;
    border: 0;
    margin-left: 250px;
  `;
  const movePage = useNavigate();
  const moveToRegisterProgramPage = () => {
    movePage("/registerProgram");
  };
  return (
    <PostContainer>
      <TextContainer>
        <SearchingResultText>
          총 <span>{searchList.length}</span>건의 검색 결과가 있습니다.
        </SearchingResultText>
        <DateInfoText>
          ※ 모집/활동 시작일은 해당 월의 1일, 마감일은 해당 월의 마지막 일을
          의미합니다.
        </DateInfoText>
        {!isStudent && (
          <RegisterProgramBtn onClick={moveToRegisterProgramPage}>
            프로그램 등록하기
          </RegisterProgramBtn>
        )}
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
  );
}
