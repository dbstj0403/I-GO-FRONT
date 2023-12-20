import styled from 'styled-components';
import { ClipLoader } from "react-spinners";
export default function Spinner () {
    const SpinnerWrapper = styled.div`
        display: flex;
        justify-content: center;
        min-height: 100vh;
        align-items: center;
    `;
    const ItemWrapper = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        bottom: 100px;
        `;
    const LoadingText = styled.div`
        font-size: 20px;
        line-height: 30px;
        
        margin: 50px;
        `;
    return (
        <SpinnerWrapper>
            <ItemWrapper>
                <LoadingText>로딩 중입니다... 잠시만 기다려 주세요! 😀</LoadingText>
                <ClipLoader/>
            </ItemWrapper>
        </SpinnerWrapper>
    );
}