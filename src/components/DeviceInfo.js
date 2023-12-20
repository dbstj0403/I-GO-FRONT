import React from 'react'
import { Link } from 'react-router-dom'
import '../componentsCss/DeviceInfo.css'

export default function DeviceInfo({ device }) {
    return (
        <div className='device_box'>
            <Link to={`/rental/${device.id}`} style={{textDecoration: "none"}} >
            <img className='device_img'
                alt='image' src={device.image}  />
            <div className='device_info'>
                <div className='device_name'>{device.model_name}</div>
                <div className='device_price'>{device.point}{" "}p</div>
            </div>
            </Link>
        </div>
    )
}