import styled from "styled-components";

function MessageBox({ messageList, user }) {
  return (
    <Naaaa>
      {messageList.map((message, index) => {
        return (
          <Container key={index}>
            {message.senderName === user.userName ? (
              <Mymessage>{message.message}</Mymessage>
            ) : (
              <OtherMessage>{message.message}</OtherMessage>
            )}
          </Container>
        );
      })}
    </Naaaa>
  );
}

export default MessageBox;

const Naaaa = styled.div`
  border: solid 2px coral;
  width: 100%;
  height: 50px;
`;
const Container = styled.div`
  width: 500px;
  height: 100px;
`;

const Mymessage = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;
`;

const OtherMessage = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-left: 10px;
`;
