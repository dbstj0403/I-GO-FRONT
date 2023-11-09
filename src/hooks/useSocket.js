import io from "socket.io-client";
import { useCallback } from "react";
import axios from "axios";

// 커스텀 훅스 사용 예시 -> const [socket, disconnect] = useSocket(workspace);
const sockets = {};
const backUrl = ""; // 백엔드 서버 주소
const useSocket = (workspace) => {
  const disconnect = useCallback(() => {
    if (workspace) {
      sockets[workspace].disconnect();
    }
  }, [workspace]);
  if (!workspace) {
    return [undefined, disconnect];
  }
  sockets[workspace] = io.connect(`${backUrl}/ws-${workspace}`); // 서버와 소켓 연결
  sockets[workspace].emit("sendMessage", "world"); // 서버에 이벤트 이름과 내용을 전송함.
  sockets[workspace].on("receiveMessage", (data) => {
    console.log(data);
  });
  sockets[workspace].on("data", (data) => {
    console.log(data);
  });
  sockets[workspace].on("onlineList", (data) => {
    console.log(data);
  });

  return [sockets[workspace], disconnect];
};
