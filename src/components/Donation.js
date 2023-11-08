import { useState } from "react";
import "../componentsCss/Donation.css";
import axios from "axios";
import RadioButton from "./RadioButton";
import GoBackBtn from './GoBackBtn';

export default function App() {
  // state 변수 선언
  const [model_category, setModelCategory] = useState("smartphone"); // 모델 기종
  const [model_name, setModelName] = useState(""); // 모델 이름
  const [remarks, setRemarks] = useState(""); // 특이사항
  const [sender_name, setSenderName] = useState(""); // 기부자 이름
  const [sender_phone, setSenderPhone] = useState(""); // 기부자 연락처
  const [sender_address, setSenderAddress] = useState(""); // 기부자 주소

  // 선물하기 버튼
  const submitDona = async () => {
    // 응답 (성공)
    try {
      const response = await axios.post(
        "http://api.igoofficial.com/donation/",
        {
          model_category: model_category,
          model_name: model_name,
          remarks: remarks,
          sender_name: sender_name,
          sender_phone: sender_phone,
          sender_address: sender_address,
        });
      console.log(response);
    } catch {
      // 응답 (실패)
      console.log("Donation submit error!");

      // 오류 (1) 기기 정보 중 입력 안 된 내용이 있는 경우
      if (model_category === "" || model_name === "" || remarks === "") {
        alert("선물할 기기의 정보를 모두 입력해주세요!");
      }

      // 오류 (2) 기부자 정보 중 입력 안 된 내용이 있는 경우
      else if (
        sender_name === "" ||
        sender_phone === "" ||
        sender_address === ""
      ) {
        alert("보내는 분 정보를 모두 입력해주세요!");
      }

      // 오류 (3)
      else {
        alert("형식에 맞게 답변을 입력해 주세요!");
      }
    }
  };

  console.log(sender_name);

  return (
    <div className="dona_home">
      <div className="dona_container" style={{ display: "flex" }}>
        <div className="dona_direction">
          <span>중고 전자기기 선물하기</span>
          <br />
          <br />
          우리집에 돌아다니는 중고 스마트폰을 기부해
          <br />
          경제적인 어려움을 느끼는 청소년들의 디지털 격차 해소에 도움을 주세요!
          <br />
          <br />
          ⭕ 잠금 장치는 모두 해제해주시기 바랍니다.
          <br />
          ⭕ 도착 즉시 초기화를 진행하게 됩니다.
          <br />
          ⭕ 배송 후 접수 취소 및 초기화 복구는 불가능합니다.
          <br />⭕ 기기에 중요한 정보가 없는지 확인해주시기 바랍니다.
        </div>
        <div className="round_container_pink">
          {/* 기종 선택 */}
          <div style={{ display: "flex" }}>
            <div className="input_title">
              <span>* </span>기종
            </div>
            <div className="dona_equip_radio">
              <RadioButton
                name="스마트폰"
                id="1"
                value="smartphone"
                onChange={(e) => {
                  setModelCategory(e.target.value);
                }}
                checked={model_category === "smartphone"}
              />
              <RadioButton
                name="태블릿"
                id="2"
                value="tablet"
                onChange={(e) => {
                  setModelCategory(e.target.value);
                }}
                checked={model_category === "tablet"}
              />
              <RadioButton
                name="노트북"
                id="3"
                value="notebook"
                onChange={(e) => {
                  setModelCategory(e.target.value);
                }}
                checked={model_category === "notebook"}
              />
            </div>
          </div>
          {/* 기기명 선택 */}
          <div style={{ display: "flex" }}>
            <div className="input_title">
              <span>* </span>기기명
            </div>
            <input className="input_box"
              placeholder="ex. 갤럭시 Z플립 3"
              onChange={(e) => {
                setModelName(e.target.value);
              }}
            />

          </div>
          {/* 특이사항 입력 (선택)  */}
          <div style={{ display: "flex" }}>
            <div className="input_title">
              <span>* </span>특이사항
            </div>

            <textarea className="text_box"
              placeholder="ex. 블루투스 연결이 안 됨 / 액정 깨짐"
              onChange={(e) => {
                setRemarks(e.target.value);
              }}
            />

          </div>
        </div>
      </div>
      <div className="dona_container" style={{ display: "flex" }}>
        <div className="deliver_info">
          보내는 분
          <div className="round_container_gray">
            <div style={{ display: "flex" }}>
              <div className="input_title">
                <span>* </span>성명
              </div>
              <input className="input_box"
                placeholder="ex. 홍길동"
                onChange={(e) => {
                  setSenderName(e.target.value);
                }}
              />
            </div>
            <div style={{ display: "flex" }}>
              <div className="input_title">
                <span>* </span>전화
              </div>
              <input className="input_box"
                placeholder="ex. ex. 010-1234-5678"
                onChange={(e) => {
                  setSenderPhone(e.target.value);
                }}
              />
            </div>
            <div style={{ display: "flex" }}>
              <div className="input_title">
                <span>* </span>주소
              </div>
              <input className="input_box"
                placeholder="상세주소까지 입력"
                onChange={(e) => {
                  setSenderAddress(e.target.value);
                }}
              />
            </div>
            <div style={{ display: "flex" }}>
              <div className="input_title">내용물</div>
              <div className="non_input_box">주의사항에 파손 체크 필수!</div>
            </div>
          </div>
        </div>
        <div className="deliver_info">
          받는 분
          <div className="round_container_gray">
            <div style={{ display: "flex" }}>
              <div className="input_title">성명</div>
              <div className="non_input_box">I-Go</div>
            </div>
            <div style={{ display: "flex" }}>
              <div className="input_title">전화</div>
              <div className="non_input_box">02-XXXX-XXXX</div>
            </div>
            <div style={{ display: "flex" }}>
              <div className="input_title">주소</div>
              <div className="non_input_box">서울시 마포구 와우산로 94 608호</div>
            </div>
            <div style={{ display: "flex" }}>
              <div className="input_title">비고</div>
              <div className="non_input_box">-</div>
            </div>
          </div>
        </div>
      </div>

      <div className="dona_text">
        <span>
          ※ 접수 후 7일 내로 발송 부탁드립니다. 선물이 잘 도착하면 입력하신
          번호로 문자 드리겠습니다. 감사합니다.
        </span>
      </div>

      <div className="btn_container" style={{display: "flex"}}>
        <button className="dona_btn" onClick={submitDona}>
          선물하기
        </button>
        <GoBackBtn/>
      </div>
    </div>
  );
}
