import React, { useEffect, useState } from 'react';
import DeviceInfo from './DeviceInfo.js';
import '../componentsCss/Smartphone.css';
import axios from "axios";

export default function Smartphone() {

  let [devices, setDevices] = useState();

  const getDevices = async () => {
    try {
        const devices = await axios.get("http://api.igoofficial.com/rental",{
        headers: {
            Authorization: `Bearer ${localStorage.getItem("access-token")}`,
        },
    });
    console.log(devices);
    setDevices(devices.data)
    }
    catch {
        alert("Get Devices error!");
    }
    
  }

  useEffect(() => {
    getDevices();
  }, []);





  return (
    <div className='mapped_devices'>
      {devices && devices.map((data) => (
        <DeviceInfo
          id={data.id}
          manufacturer={data.manufacturer}
          model_name={data.model_name}
          model_code={data.model_code}
          manufacturing_date={data.manufacturing_date}
          registration_date={data.registration_date}
          battery_capacity={data.battery_capacity}
          memory_amount={data.memory_amount}
          is_active={data.is_active}
          rental_start_at={data.rental_start_at}
          rental_end_at={data.rental_end_at}
          point={data.point} 
          image={data.image}
        />
      ))}
    </div>
  )
}
