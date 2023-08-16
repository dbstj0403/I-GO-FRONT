import styled from "styled-components";
import Postcode from "./Postcode";
import { useState } from "react";
export default function AddInfoForCarer() {
  const [enrollAddress, setEnrollAddress] = useState({
    address: "",
  });

  const [popup, setPopup] = useState(false);

  const handleInput = (e) => {
    setEnrollAddress({
      ...enrollAddress,
      [e.target.name]: e.target.value,
    });
  };

  const handleComplete = (data) => {
    setPopup(!popup);
  };
  return (
    <div>
      <Container>
        <div>
          <Text>복지시설 이름 (10자 이내)</Text>
          <Input placeholder="아이고 요양센터" width="266px"></Input>
        </div>
        <Box>
          <Text>관리자 이름</Text>
          <Input placeholder="홍길동" width="266px"></Input>
        </Box>
      </Container>

      <Container>
        <div>
          <Text>복지시설 전화번호</Text>
          <Input placeholder="02-1234-5678" width="266px"></Input>
        </div>
        <Box>
          <Text>관리자 Email</Text>
          <Input placeholder="example@email.com" width="266px"></Input>
        </Box>
      </Container>

      <Container>
        <div>
          <Text>복지시설 위치</Text>
          <Input
            width="392px"
            type="text"
            required={true}
            name="address"
            onChange={handleInput}
            value={enrollAddress.address}
          ></Input>
        </div>
        <Box>
          <SearchAdressBtn onClick={handleComplete}>주소 찾기</SearchAdressBtn>
          {popup && (
            <Postcode
              enrollAddress={enrollAddress}
              setEnrollAddress={setEnrollAddress}
              popup={popup}
              setPopup={setPopup}
            ></Postcode>
          )}
        </Box>
      </Container>
      <Container>
        <div>
          <Text>상세 주소</Text>
          <Input
            width="392px"
            name="detailAddress"
            onChange={(e) => {
              setEnrollAddress({
                ...enrollAddress,
                [e.target.name]: e.target.value,
              });
            }}
          ></Input>
        </div>
      </Container>
      <SubmitBtn>입력 완료</SubmitBtn>
    </div>
  );
}
const Text = styled.div`
  font-size: 18px;
  line-height: 18px;
  font-weight: 700;
`;
const Input = styled.input`
    border-radius: 30px;
    background-color: #F5F5F5;
    width: ${(props) => props.width};
    height: 72px;
    border: 0;
    margin-top: 15px;
    text-indent: 20px;
    Input:: placeholder: 18px;
    font-size: 18px;
    line-height: 18px;
    &:focus {
        outline: 2px solid black;
    }
    `;
const Container = styled.div`
  margin-top: 24px;
  display: flex;
`;
const Box = styled.div`
  margin-left: 32px;
`;
const SearchAdressBtn = styled.button`
  width: 152px;
  height: 72px;
  border-radius: 50px;
  border: 1px solid #e3e3e3;
  background-color: white;
  box-shadow: 5px 5px 5px lightgrey;
  margin-top: 33px;
  font-size: 18px;
  font-weight: 700;
  line-height: 18px;
  &:hover {
    cursor: pointer;
  }
`;
const SubmitBtn = styled.button`
  width: 191px;
  height: 72px;
  border-radius: 50px;
  background-color: black;
  color: white;
  font-size: 18px;
  line-height: 18px;
  font-weight: 700;
  border: 0;
  margin-top: 50px;
  &:hover {
    cursor: pointer;
  }
`;
