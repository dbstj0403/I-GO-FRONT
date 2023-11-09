import styled from "styled-components";
function ChatList() {
  return (
    <Container>
      <h1>채팅방 리스트</h1>
      <ChatListBox />
    </Container>
  );
}

export default ChatList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`;
const ChatListBox = styled.div`
  width: 500px;
  height: 400px;
  border: solid 2px;
`;
