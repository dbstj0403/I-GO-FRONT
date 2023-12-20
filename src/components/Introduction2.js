import '../componentsCss/Introduction.css';
import introImg2 from '../img/introimg3.png';
export default function Introduction2 () {
    return (
        <div className='intro-container2'>
            <div className='intro-text'>
                <div className='intro3'>
                <span>아이고 </span>고마워라!<br/>
                어르신을 위한 <span>디지털 배움터</span>
                </div>
                <div className='intro2'>
                요양원 어르신을 위한 디지털 교육 프로그램을 열어<br/>
                우리동네 학생들을 선생님으로 맞아주세요!
                </div>
                <div className='btn-container'>
                    <button className='btn1'>프로그램 등록하러 가기</button>
                    <button className='btn2'>신청 내역 보러가기</button>
                </div>
            </div>
            <img className='intro-img' alt='' src={introImg2} object-fit="fit" />
        </div>
    );
}