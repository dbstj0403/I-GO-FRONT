// import styled from "styled-components";
// import { useEffect } from "react";
// const { kakao } = window;

// export default function KakaoMap() {
//   const lat = 0;
//   const lon = 0;

//   // const { kakao } = window;

//   useEffect(() => {
//     let container = document.getElementById("map");

//     let option = {
//       center: new kakao.maps.LatLng(lat, lon), // 지도의 중심좌표
//       level: 1, // 지도의 확대 레벨
//     };

//     let map = new kakao.maps.Map(container, option); // 지도 생성

//     // // 마커가 표시될 위치
//     var markerPosition = new kakao.maps.LatLng(lat, lon);

//     // // 마커 생성
//     var marker = new kakao.maps.Marker({
//       position: markerPosition,
//     });

//     // // 마커가 지도 위에 표시되도록 설정
//     marker.setMap(map);
//   }, [lat, lon]);
//   return (
//     <div
//       style={{
//         marginTop: "60px",
//         width: "100%",
//         height: "60vh",
//         backgroundColor: "#c8c8c8",
//         //사이즈나 MAP에 대한 사이즈나 위치값은
//         //css로 조정해주면 된다.
//       }}
//       id="map"
//     ></div>
//   );
// }
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import styled from "styled-components";

export default function KakaoMap() {
  const { userData } = useSelector(({ user }) => user);
  const [coords, setCoords] = useState(null);
  const [address, setAddress] = useState("");

  const getProfile = async () => {
    try {
      const response = await axios.get(
        `http://api.igoofficial.com/accounts/${userData.id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access-token")}`,
          },
        }
      );
      setAddress(response.data.profile.address.address);
    } catch (error) {
      console.log("Fetch User Info Error!");
    }
  };

  const showMap = () => {
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
            center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
            level: 3, // 지도의 확대 레벨
          };

        // 지도를 생성합니다
        var map = new window.kakao.maps.Map(mapContainer, mapOption);

        // 주소-좌표 변환 객체를 생성합니다
        var geocoder = new window.kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(address, function (result, status) {
          // 정상적으로 검색이 완료됐으면
          if (status === window.kakao.maps.services.Status.OK) {
            var coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);

            // 결과값으로 받은 위치를 마커로 표시합니다
            var marker = new window.kakao.maps.Marker({
              map: map,
              position: coords,
            });

            // 인포윈도우로 장소에 대한 설명을 표시합니다
            // var infowindow = new window.kakao.maps.InfoWindow({
            //   content:
            //     '<div style="width:150px;text-align:center;padding:6px 0;">요양원</div>',
            // });
            // infowindow.open(map, marker);

            // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
            map.setCenter(coords);
          }
        });
      });
    };
  };
  useEffect(() => {
    getProfile();
    showMap();
  }, [address]);

  const Map = styled.div`
    width: 1008px;
    height: 400px;
    margin: 20px 20px;
    border-radius: 10px;
  `
  return <Map id="map" ></Map>;
}
