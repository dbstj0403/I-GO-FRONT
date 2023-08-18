import React from 'react'
import { useState } from 'react'
import point from '../img/point.png';
import Smartphone from '../components/Smartphone.js'
import Tablet from '../components/Tablet.js'
import Notebook from '../components/Notebook.js'
import '../pagesCss/RentalHome.css'


export default function RentalHome() {

    // category 창 (smartphone, tablet, notebook)
    const [category, setCategory] = useState("smartphone");

    // category 선택 버튼 기능 
    const handleClickButton = e => {
        const { name } = e.target;
        setCategory(name);
    }

    // 카테고리 창에 해당하는 컴포넌트 
    const selectCategory = {
        smartphone: <Smartphone />,
        tablet: <Tablet />,
        notebook: <Notebook />
    }

    return (
        <div className='rental_home'>
          <div className='rental_title'>
            <span>전자기기 대여</span><br/>
            프로그램을 통해 얻은 포인트로 전자기기를 대여하세요!
          </div>
          <div className='rental_category'>
            <button className='category_btn' onClick={handleClickButton} name={"smartphone"}>📱 스마트폰</button>
            <button className='category_btn' onClick={handleClickButton} name={"tablet"}>📕 태블릿</button>
            <button className='category_btn' onClick={handleClickButton} name={"notebook"}>💻 노트북</button>
            
          </div>
          <div className='rental_paragraph'>
            <img src={point} alt='' style={{width: '30px', height: '30px'}}/>
            <div className='paragraph_text'>
              각 전자기기에 할당된 포인트는 대여 및 연장 시 학생이 보유해야 하는 최소 포인트입니다.<br/>
              꾸준한 프로그램 활동을 통해 포인트를 유지해 대여 기간을 연장할 수 있습니다. 
            </div>
          </div>
          <div className='rental_device'>
            {category && <div>{selectCategory[category]}</div>}
          </div>  
          
        </div>
      )
}
