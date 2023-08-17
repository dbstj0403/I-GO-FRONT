import styled from 'styled-components';
export default function ShowPost () {
    const searchList = {
        acticity_status: 'done',
        activity_start_at: '2023.04',
        activity_end_at: '2023.06',
        activity_category: '스마트폰 사용법',
        nursingHomeName: '행복요양원',
        title: '스마트폰 교육 해주실 분 구해요'
    }
    const Container = styled.div`
    width: 1220px;
    height: 68px;
    font-size: 16px;
    line-height: 24px;
    align-items: center;
    display: flex;
    justify-content: center;
    font-weight: ${props => props.bold};
    border-bottom: 1px solid black;
    `
    const TableTitle = styled.div`
    width: ${props => props.width};
    height: 40px;
    font-size: 16px;
    line-height: 24px;
    align-items: center;
    display: flex;
    justify-content: center;
    font-weight: ${props => props.bold}
    `
    const IsApplied = styled.div`
    width: ${props => props.width};
    height: 40px;
    color: ${searchList.acticity_status === 'before' ? 'black' : (searchList.acticity_status === 'now' ? '#2DAB51' : '#D23838' )};
    font-size: 16px;
    line-height: 24px;
    align-items: center;
    display: flex;
    justify-content: center;
    font-weight: ${props => props.bold}
    `
    return (
        
        <Container>
            <IsApplied width='153px'>
                {searchList.acticity_status === 'before' ? '모집 전' : (searchList.acticity_status === 'now' ? '모집 중' : '모집 마감' )}
            </IsApplied>
            <TableTitle width='459px'>{searchList.title}</TableTitle>
            <TableTitle width='152px'>{searchList.activity_category}</TableTitle>
            <TableTitle width='152px'>{searchList.nursingHomeName}</TableTitle>
            <TableTitle width='152px'>{searchList.activity_start_at}~{searchList.activity_end_at}</TableTitle>
            <TableTitle width='152px' bold='700'>300p</TableTitle>
        </Container>
        
    );
}