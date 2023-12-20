import styled from "styled-components";
function ChatList() {
  return (
    <Container>
      <h3>Chatting Room List</h3>
      <ChatListBox />
    </Container>
  );
}

export default ChatList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 100%;
  border-bottom: solid 3px rgba(245, 245, 245, 1);
  min-height: 717px;
`;
const ChatListBox = styled.div`
  width: 433px;
  height: 100px;
`;
