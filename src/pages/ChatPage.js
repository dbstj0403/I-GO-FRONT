import styled from "styled-components";
function ChatPage() {
  return (
    <>
      <Banner>
        <Title>채팅으로 문의하기</Title>
        <Text>
          프로그램에 대해 궁금한 점이 있나요? 요양원 보호사와의 채팅을 통해 직접
          문의해 보세요!
        </Text>
      </Banner>
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
