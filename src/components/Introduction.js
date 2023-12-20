import '../componentsCss/Introduction.css';
import introImg from '../img/introimg.png';
export default function Introduction() {
    return (
        <div className='intro-container'>
            <div className='intro-text'>
                <div className='intro1'>
                    <span>아이고 </span>어르신! 스마트폰 사용법이요?<br />
                    <span>제가 가서(I go) </span>알려드릴게요!
                </div>
                <div className='intro2'>
                    스마트폰/키오스크 이용을 어려워하시는 우리동네 할머니, 할아버지 분들께<br />
                    디지털 교육 해드리고 최신 전자기기 대여하자!
                </div>
                <div className='btn-container'>
                    <button className='btn1'>프로그램 신청하러 가기</button>
                    <button className='btn2'>전자기기 대여하러 가기</button>
                </div>
            </div>
            <img className='intro-img' alt='' src={introImg} object-fit="fit" />
        </div>
    );
}