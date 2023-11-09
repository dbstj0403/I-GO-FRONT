import React, { useEffect, useState } from 'react';
import DeviceInfo from './DeviceInfo.js';
import styled from "styled-components";
import axios from "axios";

export default function Smartphone() {

  const [devices, setDevices] = useState([]);

  const getDevices = async () => {
    try {
      const response = await axios.get(
        "/data/products.json",
        {
          //헤더
        }
      );
      setDevices(response.data);
    }
    catch {
      alert("Get Devices error!");
    }
  };

  useEffect(() => {
    getDevices();
  }, []);

  console.log(devices);

  const ShowDevices = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px 30px;
  `;


  return (
    <ShowDevices>
      {devices && devices.map((device) => {
        if (device.category === "스마트폰") {
          return <DeviceInfo key={device.id} device={device} />
        }
      })}
    </ShowDevices>
  )
}