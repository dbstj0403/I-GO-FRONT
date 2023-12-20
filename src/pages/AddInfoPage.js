import pencil from "../img/addInfo.png";
import styled from "styled-components";
import { useState } from "react";
import AddInfoForStudent from "../components/AddInfoForStudent";
import AddInfoForCarer from "../components/AddInfoForCarer";
export default function AddInfoPage() {
  /**
   * 각 버튼 클릭시 색상 변경하기 위한 변수
   */
  const [student, setStudent] = useState(null);
  const [nursingHome, setNursingHome] = useState(null);

  const handleBtnColor = () => {
    setStudent(true);
    setNursingHome(false);
  };
  const handleBtnColor2 = () => {
    setNursingHome(true);
    setStudent(false);
  };

  /**
   * 스타일 컴포넌트
   */
  const AddInfoContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 30px;
    margin-left: 50px;
  `;
  const InputContainer = styled.div`
    width: 642px;
    position: relative;
    right: 30px;
  `;
  const InputTitle = styled.div`
    font-size: 40px;
    line-height: 66px;
    font-weight: 700;
  `;
  const InputText = styled.div`
    font-size: 16px;
    line-height: 30px;
    color: #717171;
  `;
  const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
  `;
  const SelectBtn = styled.button`
    width: 91px;
    height: 46px;
    border-radius: 30px;
    border: 0;
    margin: 20px;
    margin-left: 0;
    margin-right: 30px;
    font-size: 16px;
    line-height: 30px;
    cursor: pointer;
    background-color: ${(props) => (props.color ? "#FDD888" : "white")};
    box-shadow: 5px 5px 5px lightgrey;
  `;
  const SelectBtn2 = styled.button`
    width: 91px;
    height: 46px;
    border-radius: 30px;
    border: 0;
    margin: 20px;
    margin-left: 0;
    margin-right: 30px;
    font-size: 16px;
    line-height: 30px;
    cursor: pointer;
    background-color: ${(props) => (props.color ? "#D9DFF5" : "white")};
    box-shadow: 5px 5px 5px lightgrey;
  `;
  const ConferText = styled.p`
        font-size: 14px;
        line-height: 20px;
        color: ${(props) => props.color}}
    `;
  return (
    <AddInfoContainer>
      <img alt="" src={pencil} />
      <InputContainer>
        <InputTitle>사용자 정보 입력</InputTitle>
        <InputText>
          어떤 목적으로 사이트를 찾아오셨나요?
          <br />
          학생인지 보호자인지에 따라 이용할 수 있는 서비스가 달라지므로 정확하게
          선택해 주세요.
        </InputText>
        <ButtonContainer>
          <SelectBtn onClick={handleBtnColor} color={student}>
            학생
          </SelectBtn>
          <SelectBtn2 onClick={handleBtnColor2} color={nursingHome}>
            요양원
          </SelectBtn2>
          {student ? (
            <ConferText color={"#D88E00"}>
              ※ 현재 고등학교 재학 중인 학생으로, 노인 디지털 교육을 제공하고
              <br />
              포인트를 쌓아 스마트폰을 대여하려고 합니다.
            </ConferText>
          ) : (
            <ConferText color={"#3A55B5"}>
              ※ 노인 복지시설 관리자로서,
              <br />
              어르신을 위한 디지털 기기 교육 프로그램을 등록하려고 합니다.
            </ConferText>
          )}
        </ButtonContainer>
        {student === true ? <AddInfoForStudent /> : null}
        {nursingHome === true ? <AddInfoForCarer /> : null}
      </InputContainer>
    </AddInfoContainer>
  );
}
