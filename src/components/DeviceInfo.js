import React from 'react'
import { Link } from 'react-router-dom'
import '../componentsCss/DeviceInfo.css'

export default function DeviceInfo({ id, model_name, point, image }) {
    return (
        <div className='device_box'>
            <Link to={`/rental/${id}`} style={{textDecoration: "none"}} >
            <img className='device_img'
                alt='image' src={image}  />
            <div className='device_info'>
                <div className='device_name'>{model_name}</div>
                <div className='device_price'>{point}{" "}p</div>
            </div>
            </Link>
        </div>
    )
}