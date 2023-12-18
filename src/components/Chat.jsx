import { useState } from "react";
import styled from "styled-components";
import MessageBox from "./MessageBox";
function Chat({
  message,
  setMessage,
  sendMessage,
  messageList,
  user,
  roomName,
}) {
  return (
    <Container>
      <ChatHeader>
        <RoomTitle>{roomName}</RoomTitle>
      </ChatHeader>
      <ChatBox>
        <MessageBox messageList={messageList} user={user} />
      </ChatBox>
      <MessageContainer messageList={messageList} user={user}>
        <form
          onSubmit={sendMessage}
          onKeyDown={(e) => {
            if (e.key === "Enter") sendMessage(e);
          }}
        >
          <InputField
            placeholder="메시지를 입력해 주세요."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          ></InputField>
          <SubmitBtn type="submit" disabled={message === ""}>
            전송
          </SubmitBtn>
        </form>
      </MessageContainer>
    </Container>
  );
}

export default Chat;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 717px;
`;

const ChatHeader = styled.div`
  width: 60%;
  height: 143px;
  align-items: center;
  display: flex;
  border-left: solid 5px rgba(245, 245, 245, 1);
`;

const RoomTitle = styled.div`
  font-weight: 700;
  font-size: 30px;
  margin-left: 20px;
`;

const ChatBox = styled.div`
  width: 100%;
  height: 409px;
  background-color: rgba(245, 245, 245, 1);
`;

const MessageContainerWrapper = styled.div`
  border: solid 2px red;
  width: 100%;
  height: 165px;
  overflow-y: auto; /* Make the container scrollable */
`;

const MessageContainer = styled.div`
  width: 100%;
  height: 165px;
  border-left: solid 5px rgba(245, 245, 245, 1);
  border-bottom: solid 3px rgba(245, 245, 245, 1);
`;

const InputField = styled.textarea`
  width: 100%;
  height: 100px;
  font-size: 15px;
  padding-top: 10px;
  padding-left: 15px;
  border: none;
  resize: none;
  &:focus {
    outline: none;
  }
`;

const SubmitBtn = styled.button`
  width: 81px;
  height: 40px;
  border-radius: 10px;
  margin-left: 650px;
  cursor: pointer;
  color: white;
  background-color: rgba(216, 142, 0, 1);
  border: 0;
  font-size: 15px;
  font-weight: 500;
`;
