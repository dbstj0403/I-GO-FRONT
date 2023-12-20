import '../componentsCss/Introduction.css';
import introImg3 from '../img/introimg2.png';
export default function Introduction3 () {
    return (
        <div className='intro-container3'>
            <div className='intro-text'>
                <div className='intro4'>
                <span>아이고 </span>기특해라! 아이고 선생님들을 위해<br/>
                안 쓰는 <span>전자기기를 선물</span>하세요!
                </div>
                <div className='intro2'>
                우리 집에 돌아다니는 중고 전자기기를 기부해<br/>
                경제적인 어려움을 느끼는 청소년들의 디지털 격차 해소에 도움을 주세요!
                </div>
                <div className='btn-container'>
                    <button className='btn3'>안 쓰는 전자기기 선물하러 가기</button>
                </div>
            </div>
            <img className='intro-img' alt='' src={introImg3} object-fit="fit" />
        </div>
    );
}