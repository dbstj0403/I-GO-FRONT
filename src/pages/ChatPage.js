import { useEffect, useState } from "react";
import styled from "styled-components";
import Chat from "../components/Chat";
import ChatList from "../components/ChatLIst";
import socket from "socket.io-client";

function ChatPage() {
  const [message, setMessage] = useState(""); // 메시지 내용 담기
  const [messageList, setMessageList] = useState("");
  const sendMessage = (event) => {
    event.preventDefault();
    socket.emit("sendMessage", message);
  };
  useEffect(() => {
    socket.on("receiveMessage", (message) => {
      console.log(message);
      setMessageList((prev) => prev.concat(message));
    });
  });
  return (
    <>
      <Banner>
        <Title>채팅으로 문의하기</Title>
        <Text>
          프로그램에 대해 궁금한 점이 있나요? 요양원 보호사와의 채팅을 통해 직접
          문의해 보세요!
        </Text>
      </Banner>
      <ChatContainer>
        <ChatList />
        <Chat />
      </ChatContainer>
    </>
  );
}
export default ChatPage;
const Banner = styled.div`
  width: 100%;
  height: 179px;
  background-color: rgba(249, 241, 223, 1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 40px;
  line-height: 50px;
  font-weight: bold;
`;

const Text = styled.div`
  font-size: 16px;
  line-height: 30px;
  color: rgba(113, 113, 113, 1);
  margin-top: 10px;
`;

const ChatContainer = styled.div`
  display: flex;
`;
