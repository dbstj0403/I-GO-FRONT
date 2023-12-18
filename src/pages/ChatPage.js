import { useEffect, useState } from "react";
import styled from "styled-components";
import Chat from "../components/Chat";
import ChatList from "../components/ChatLIst";
import io from "socket.io-client";
import socket from "../hooks/useSocket";

function ChatPage() {
  const [user, setUser] = useState(null); // userName, roomName 저장
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [roomName, setRoomName] = useState("");
  // const roomName = ""; // 현재 메시지를 보내고자 하는 roomName rooms에서 가져오거나 라우팅 중에 params로 가져오면 될듯?

  // 전송하고자 하는 메시지 서버에 전송
  const sendMessage = (event) => {
    event.preventDefault();
    socket.emit("sendMessage", message, user.userName, user.roomName);
    setMessage("");
  };

  // 서버로부터
  useEffect(() => {
    askUserName();
    // 현재 속한 room 정보 가져오기
    socket.on("rooms", (res) => {
      setRooms(res);
    });
    // 나눈 대화 메시지 목록 가져오기 & 실시간 메시지 수신
    socket.on("receiveMessage", (res) => {
      console.log("Res", res);
      setMessageList((prev) => prev.concat(res));
    });
  }, []);

  const askUserName = () => {
    const userName = prompt("이름을 입력해 주세요!");
    const roomName = prompt("접속할 채팅방 이름을 입력해 주세요!");
    socket.emit("joinRoom", userName, roomName, (res) => {
      console.log("login 완료!", res);
      setRoomName(roomName);
      if (res?.ok) {
        // 성공적으로 로그인하면 유저 데이터 state에 저장
        setUser(res.data);
      } else {
        alert("접속에 실패했습니다. 다시 시도해 주세요.");
        window.location.reload();
      }
    });

    //   const id = ""; // room의 아이디
    //   // 채팅방에 join 받아온 room 목록에서 연결
    //   socket.emit("joinRoom", id);
  };
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
        <Chat
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
          messageList={messageList}
          user={user}
          roomName={roomName}
        />
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
