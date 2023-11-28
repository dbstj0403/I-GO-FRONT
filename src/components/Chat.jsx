import { useState } from "react";
import styled from "styled-components";
function Chat({ message, setMessage, sendMessage, messageList, user }) {
  return (
    <Container>
      <h1>채팅 주고받을 컴포넌트</h1>
      <ChatBox>
        <MessageContainer messageList={messageList} user={user} />
        <form onSubmit={sendMessage}>
          <input
            placeholder="메시지를 입력해 주세요."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          ></input>
          <button type="submit" disabled={message === ""}>
            전송
          </button>
        </form>
      </ChatBox>
    </Container>
  );
}

export default Chat;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`;

const ChatBox = styled.div`
  border: solid 2px;
  width: 700px;
  height: 900px;
`;

const MessageContainer = styled.div`
  border: solid 2px;
  width: 650px;
  margin-left: 20px;
  height: 500px;
`;
