import React from 'react'
import styled from "styled-components";
import { useState } from 'react'
import point from '../img/point.png';
import Smartphone from '../components/Smartphone.js'
import Tablet from '../components/Tablet.js'
import Notebook from '../components/Notebook.js'


export default function RentalHome() {

  // category 창 (smartphone, tablet, notebook)
  const [category, setCategory] = useState("smartphone");

  // category 선택 버튼 기능 
  const handleClickButton = e => {
    const { name } = e.target;
    setCategory(name);
  }

  // 카테고리 창에 해당하는 컴포넌트 
  const selectCategory = {
    smartphone: <Smartphone />,
    tablet: <Tablet />,
    notebook: <Notebook />
  }

  // 스타일 컴포넌트 

  const RentalHomeContainer = styled.div`
    width: 1440px;
    margin: auto;
    padding: 140px 110px 210px 110px;
  `
  const RentalTitle = styled.div`
    margin: auto;
    color: var(--gray-4, #717171);
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    line-height: 30px;
    padding: 34px 384px 20px 384px;
    span {
      color: var(--gray-5, #2C2C2C);
      text-align: center;
      font-size: 40px;
      font-weight: 700;
      line-height: 66px;
    }
  `
  const RentalCategory = styled.div`
    margin: auto;
    display: flex;
    flex-direction: row;
    gap: 30px;
    justify-content: center;
    padding: 20px 20px 40px 20px;
  `
  const CategoryBtn = styled.button`
    width: 170px;
    height: 60px;
    border-radius: 50px;
    border: 1px solid var(--gray-2, #E3E3E3);
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
    color: #000;
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    cursor: pointer;
  `
  const RentalParagraph = styled.div`
    margin: auto;
    padding: 20px 40px 20px 40px;
    display: flex;
    justify-content: center;
    width: 840px;
    border-radius: 30px;
    background: var(--yellow-1, #F9F1DF);
  `
  const ParagraphText = styled.div`
    margin: 0px 20px 0px;
    justify-content: center;
    color: #000;
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: -0.9px;
  `
  const RentalDevice = styled.div`
    margin: auto;
    display: flex; 
    padding: 50px;
  `

  return (
    <RentalHomeContainer>
      <RentalTitle>
        <span>전자기기 대여</span><br />
        프로그램을 통해 얻은 포인트로 전자기기를 대여하세요!
      </RentalTitle>
      <RentalCategory>
        <CategoryBtn onClick={handleClickButton} name={"smartphone"}>📱 스마트폰</CategoryBtn>
        <CategoryBtn onClick={handleClickButton} name={"tablet"}>📕 태블릿</CategoryBtn>
        <CategoryBtn onClick={handleClickButton} name={"notebook"}>💻 노트북</CategoryBtn>

      </RentalCategory>
      <RentalParagraph>
        <img src={point} alt='' style={{ width: '30px', height: '30px' }} />
        <ParagraphText>
          각 전자기기에 할당된 포인트는 대여 및 연장 시 학생이 보유해야 하는 최소 포인트입니다.<br />
          꾸준한 프로그램 활동을 통해 포인트를 유지해 대여 기간을 연장할 수 있습니다.
        </ParagraphText>
      </RentalParagraph>
      <RentalDevice>
        {category && <div>{selectCategory[category]}</div>}
      </RentalDevice>

    </RentalHomeContainer>
  )
}
