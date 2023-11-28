import styled from "styled-components";

function MessageContainer({ messageList, user }) {
  return (
    <>
      {messageList.map((message, index) => {
        return (
          <Container key={message._id}>
            {message.user.name === user.name ? (
              <Mymessage>{message.chat}</Mymessage>
            ) : (
              <OtherMessage>{message.chat}</OtherMessage>
            )}
          </Container>
        );
      })}
    </>
  );
}

export default MessageContainer;

const Container = styled.div`
  width: 500px;
  height: 100px;
`;

const Mymessage = styled.div``;

const OtherMessage = styled.div``;
