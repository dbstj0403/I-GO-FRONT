import styled from "styled-components";
import { useEffect } from "react";
const { kakao } = window;

const MapContainer = styled.div`
  width: 1010px;
  height: 579px;
  border-radius: 10px;
`;

export default function KakaoMap() {
  const lat = 0;
  const lon = 0;

  // const { kakao } = window;

  useEffect(() => {
    let container = document.getElementById("map");

    let option = {
      center: new kakao.maps.LatLng(lat, lon), // 지도의 중심좌표
      level: 1, // 지도의 확대 레벨
    };

    let map = new kakao.maps.Map(container, option); // 지도 생성

    // // 마커가 표시될 위치
    var markerPosition = new kakao.maps.LatLng(lat, lon);

    // // 마커 생성
    var marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    // // 마커가 지도 위에 표시되도록 설정
    marker.setMap(map);
  }, [lat, lon]);
  return <MapContainer id="map"></MapContainer>;
}
