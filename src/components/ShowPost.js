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
  const IsApplied = styled.div`
    width: ${(props) => props.width};
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
  `;
  return (
    <Container onClick={moveToProgramDetailPage}>
      <IsApplied width="153px">
        {searchList.activity_status === "before"
          ? "모집 전"
          : searchList.activity_status === "now"
          ? "모집 중"
          : "모집 마감"}
      </IsApplied>
      <TableTitle width="459px">{searchList.title}</TableTitle>
      <TableTitle width="152px">{searchList.activity_category}</TableTitle>
      <TableTitle width="152px">{searchList.facility_name}</TableTitle>
      <TableTitle width="152px">
        {searchList.activity_start_at}~{searchList.activity_end_at}
      </TableTitle>
      <TableTitle width="152px" bold="700">
        {searchList.reward}
      </TableTitle>
    </Container>
  );
}
