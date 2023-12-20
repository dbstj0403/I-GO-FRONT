import styled from "styled-components";

function MessageBox({ messageList, user }) {
  console.log(messageList, user);
  return (
    <>
      {messageList.map((message, index) => {
        return (
          <Container key={index}>
            {message.senderName === user.userName ? (
              <Box1>
                <Mymessage>{message.message}</Mymessage>
              </Box1>
            ) : (
              <Box2>
                <OtherMessage>{message.message}</OtherMessage>
              </Box2>
            )}
          </Container>
        );
      })}
    </>
  );
}

export default MessageBox;

const Box1 = styled.div`
  display: flex;
  justify-content: flex-end;
  width: auto;
  height: 50px;
  align-items: center;
`;

const Box2 = styled.div`
  display: flex;
  justify-content: flex-start;
  width: auto;
  height: 50px;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100px;
`;

const Mymessage = styled.div`
  display: flex;
  justify-content: center;
  padding-left: 10px;
  margin-right: 20px;
  padding-right: 10px;
  align-items: center;
  width: auto;
  min-width: 100px;
  height: 46px;
  background-color: rgba(216, 142, 0, 1);
  border-radius: 10px;
  color: white;
`;

const OtherMessage = styled.div`
  display: flex;
  justify-content: center;
  padding-right: 10px;
  padding-left: 10px;
  margin-left: 20px;
  align-items: center;
  min-width: 100px;
  width: auto;
  height: 46px;
  background-color: rgba(216, 142, 0, 1);
  border-radius: 10px;
  color: white;
`;
