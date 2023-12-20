import React, { useEffect } from "react";
import styled from "styled-components";

export default function KakaoMap({ address }) {
  useEffect(() => {
    showMap(address);
  }, [address]); // address가 변경될 때마다 showMap 호출

  const showMap = (address) => {
    // 카카오맵 API 스크립트 로드
    const script = document.createElement("script");
    script.async = true;
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_JAVASCRIPT_KEY}&autoload=false&libraries=services`;
    document.head.appendChild(script);

    script.onload = () => {
      // 카카오맵 API 초기화
      window.kakao.maps.load(() => {
        var mapContainer = document.getElementById("map"), // 지도를 표시할 div
          mapOption = {
            center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 임시 중심좌표
            level: 3, // 지도의 확대 레벨
          };

        // 지도 생성
        var map = new window.kakao.maps.Map(mapContainer, mapOption);

        // 주소-좌표 변환 객체 생성
        var geocoder = new window.kakao.maps.services.Geocoder();

        // 주소로 좌표 검색
        geocoder.addressSearch(address, function (result, status) {
          // 정상적으로 검색이 완료되면
          if (status === window.kakao.maps.services.Status.OK) {
            var coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);

            // 결과값으로 받은 위치를 마커로 표시
            var marker = new window.kakao.maps.Marker({
              map: map,
              position: coords,
            });

            // 지도의 중심을 결과값으로 받은 위치로 이동
            map.setCenter(coords);
          }
        });
      });
    };
  };

  const Map = styled.div`
    width: 1008px;
    height: 400px;
    margin: 20px 20px;
    border-radius: 10px;
    @media screen and (min-width: 769px) and (max-width: 1200px) {
      width: 720px;
      height: 360px;
    }
    @media screen and (max-width: 768px) {
      width: 400px;
      height: 200px;
    }
  `;

  return <Map id="map"></Map>;
}
