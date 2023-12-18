import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
export default function ShowPost({ searchList }) {
  console.log(searchList);
  const movePage = useNavigate();
  const moveToProgramDetailPage = () => {
    movePage("/programDetail");
  };
  const Container = styled.div`
    width: 1220px;
    height: 68px;
    font-size: 16px;
    line-height: 24px;
    align-items: center;
    display: flex;
    justify-content: center;
    font-weight: ${(props) => props.bold};
    border-bottom: 1px solid black;
    cursor: pointer;
    @media screen and (min-width: 769px) and (max-width: 1200px) {
      width: 720px;
      flex-wrap: wrap;
      margin: auto;
      height: 90px;
    }
    @media screen and (max-width: 768px) {
      width: 440px;
      flex-wrap: wrap;
      margin: auto;
      height: 60px;
    }
  `;
  const TableTitle1 = styled.div`
    width: 459px;
    height: 40px;
    font-size: 16px;
    line-height: 24px;
    align-items: center;
    display: flex;
    justify-content: center;
    font-weight: ${(props) => props.bold};
    @media screen and (min-width: 769px) and (max-width: 1200px) {
      width: 540px;
      font-size: 14px;
      height: 40px;
      align-items: flex-end;
    }
    @media screen and (max-width: 768px) {
      width: 330px;
      font-size: 10px;
      height: 30px;
      align-items: flex-end;
    }
  `;
  const TableTitle2 = styled.div`
    width: 152px;
    height: 40px;
    font-size: 16px;
    line-height: 24px;
    align-items: center;
    display: flex;
    justify-content: center;
    font-weight: ${(props) => props.bold};
    @media screen and (min-width: 769px) and (max-width: 1200px) {
      width: 180px;
      font-size: 14px;
      height: 50px;
      align-items: flex-start;
      padding-top: 10px;
    }
    @media screen and (max-width: 768px) {
      width: 110px;
      font-size: 10px;
      height: 30px;
      align-items: flex-start;

    }
`;
  const IsApplied = styled.div`
    width: 153px;
    height: 40px;
    color: ${searchList.activity_status === "before"
      ? "black"
      : searchList.activity_status === "now"
      ? "#2DAB51"
      : "#D23838"};
    font-size: 16px;
    line-height: 24px;
    align-items: center;
    display: flex;
    justify-content: center;
    font-weight: ${(props) => props.bold};
    @media screen and (min-width: 769px) and (max-width: 1200px) {
      width: 180px;
      font-size: 14px;
      height: 40px;
      align-items: flex-end;
    }
    @media screen and (max-width: 768px) {
      width: 110px;
      font-size: 10px;
      height: 30px;
      font-weight: 700;
      align-items: flex-end;

    }
  `;
  return (
    <Container onClick={moveToProgramDetailPage}>
      {/*<SmallContent>

  </SmallContent>*/}
      <IsApplied>
        {searchList.activity_status === "before"
          ? "모집 전"
          : searchList.activity_status === "now"
          ? "모집 중"
          : "모집 마감"}
      </IsApplied>
      <TableTitle1>{searchList.title}</TableTitle1>
      <TableTitle2>{searchList.activity_category}</TableTitle2>
      <TableTitle2>{searchList.facility_name}</TableTitle2>
      <TableTitle2>
        {searchList.activity_start_at}~{searchList.activity_end_at}
      </TableTitle2>
      <TableTitle2 bold="700">
        {searchList.reward} p
      </TableTitle2>
    </Container>
  );
}
