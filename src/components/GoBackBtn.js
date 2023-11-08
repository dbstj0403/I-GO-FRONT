import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../componentsCss/GoBackBtn.css'

function GoBackBtn() {
    const navigate = useNavigate();
    const onClickBtn = () => {
        navigate(-1);
    };
    return (
        <button className='return_btn' onClick={onClickBtn}>돌아가기</button>
    )
}

export default GoBackBtn