import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../componentsCss/DeviceDetail.css'
import { useParams } from 'react-router-dom'
import point from '../img/point.png'

export default function DeviceDetail() {

    const { id } = useParams();
    const [device, setDevice] = useState({});

    const getDevice = async () => {
        try {
            const response = await axios.get(
                "/data/products.json",
                {
                    // 헤더
                }
            );
            console.log(response);
            console.log(response.data);
            setDevice(response.data.find((device) => device.id === parseInt(id)))
        }
        catch {
            alert("Get Device Detail error!");
        }
    }

    useEffect(() => {
        getDevice();
    }, []);

    const today = new Date();
    const monthAfter = new Date();
    monthAfter.setMonth(today.getMonth()+1);

    const rentalStartDate = `${today.getFullYear()}.${today.getMonth() + 1}.${today.getDate()}`;
    const rentalEndDate = `${monthAfter.getFullYear()}.${monthAfter.getMonth() + 1}.${monthAfter.getDate()}`;

    return (
        <div className='detail_container'>
            <div className='detail_body'>
                <img className='device_detail_img'
                    alt='' src={device.image}
                />
                <div className='body_content'>
                    <div className='name_and_point' style={{ display: "flex", justifyContent: "space-between" }}>
                        <div className='name'>{device.model_name}</div>
                        <div className='point'>
                            <img alt="" src={point} style={{ width: "30px", height: "30px" }} />
                            {" "}{device.point}{" "}p
                        </div>
                    </div>
                    <div className='info_container'>
                        <div className='text_container'>
                            <div className='text'>
                                <div className='text_kind'>제조사</div>
                                <div className='text_about'>{device.manufacturer}</div>
                            </div>
                            <div className='text'>
                                <div className='text_kind'>모델명</div>
                                <div className='text_about'>{device.model_name}</div>
                            </div>
                        </div>
                        <div className='text_container'>
                            <div className='text'>
                                <div className='text_kind'>제조연원</div>
                                <div className='text_about'>{device.manufacturing_date}</div>
                            </div>
                            <div className='text'>
                                <div className='text_kind'>등록일</div>
                                <div className='text_about'>{device.registration_date}</div>
                            </div>
                        </div>
                        <div className='text_container'>
                            <div className='text'>
                                <div className='text_kind'>배터리 용량</div>
                                <div className='text_about'>{device.battery_capacity}</div>
                            </div>
                            <div className='text'>
                                <div className='text_kind'>내장메모리</div>
                                <div className='text_about'>{device.memory_amount}</div>
                            </div>
                        </div>
                    </div>
                    <div className='rental_detail'>
                        <span>※ 대여 시 포인트는 차감되지 않습니다.</span>
                        <span>※ ‘선물’ 태그가 걸린 기기는 [기기 기부] 서비스를 통해 등록된 중고 기기입니다.</span>
                        <span>※ 대여 신청 시 신청일로부터 3일 내로 배송이 시작됩니다. (택배비 부담X)</span>
                        <span>※ 기본 대여 기간은 배송 완료일로부터 1개월입니다.</span>
                        <span>※ 대여 기간 연장은 [마이페이지]에서 1개월 단위로 신청할 수 있으며, 대여 만료일에 보유하고 있는 포인트가 부족한 경우 연장은 불가능하므로, 일주일 내로 대여자가 직접 택배사를 통해 반납해주셔야 합니다. (택배비 착불 선택)</span>
                    </div>
                </div>
            </div>
            <div className='detail_body_plus'>
                <div className='rental_term'>
                    <hr />
                    <div className='rental_term_text'>
                        <div style={{display: "flex", justifyContent: "space-between"}}><span>대여 신청일</span> {rentalStartDate}</div>
                        <div style={{display: "flex", justifyContent: "space-between"}}><span>대여 기간</span> {rentalStartDate} ~ {rentalEndDate}</div>
                        <div style={{display: "flex", justifyContent: "space-between"}}><span>대여 만료일</span> {rentalEndDate}</div>
                        <div style={{display: "flex", justifyContent: "space-between"}}><span>연장 시 필요한 포인트</span> {device.point}{" "}p</div>
                    </div>
                    <hr />
                </div>
                <div className='rental_note'>
                    <span>※ 기기 파손 시 수리비 혹은 손해배상을 청구할 수 있으므로,<br />
                        기기 사용 시 주의하시기 바랍니다.</span>
                    <span>※ 대여 만료일이 지난 후 3일 내로 반납 접수를 완료하지 않은 경우, <br />법적 책임을 물을 수 있습니다.</span>
                    <span>※ 대여, 연장, 반납 등과 관련한 자세한 사항은 [마이페이지]를 참고하시기 바랍니다.</span>

                </div>
            </div>
            <div className='btn_container'>
                <button className='rental_btn'>대여 신청하기</button>
                <button className='return_btn'>돌아가기</button>
            </div>
        </div>
    )
}
