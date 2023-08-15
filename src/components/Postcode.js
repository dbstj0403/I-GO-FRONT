import DaumPostcode from 'react-daum-postcode';
import styled from 'styled-components';
export default function Postcode ({enrollAddress, setEnrollAddress, setPopup}) {
    const Post = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.65);
    `
    const CloseBtn = styled.button`
    position: fixed;
    top: 410px;
    left: 1370px;
    width: 70px;
    height: 30px;
    font-size: 15px;
    font-weight: 700;
    background-color: black;
    color: white;
    border-radius: 10px;
    border: 0;
    cursor: pointer;
    `
    const complete = (data) =>{
        let fullAddress = data.address;
        let extraAddress = '';

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
        console.log(data)
        console.log(fullAddress)
        console.log(data.zonecode)

        setEnrollAddress({
            ...enrollAddress.enrollAddress,
            address:fullAddress,
            zoneCode: data.zonecode
        })
        setPopup(false);
    }
    return (
        <Post>
            <CloseBtn onClick={() => setPopup(false)}>닫기</CloseBtn>
            <DaumPostcode autoClose={false} onComplete={complete}/>
        </Post>
    );
}   