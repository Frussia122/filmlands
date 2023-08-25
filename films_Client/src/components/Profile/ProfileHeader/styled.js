import styled from 'styled-components';


export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media(max-width: 640px) {
        flex-direction: column;
        align-items: flex-start;
    }
`
export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
`

export const UserName = styled.h4`
    margin: 0;
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    @media(max-width: 840px) {
        font-size: 28px;
    }
    @media(max-width: 640px) {
        width: 100%;
        
    }
`
export const UserEmail = styled.p`
    margin: 0;
    color: #BBB8B8;
    font-family: Open Sans;
    font-size: 20px;

    @media(max-width: 840px) {
        font-size: 18px;
    }
`

export const EditButton = styled.button`
    background-color: #053BA3;
    color: white;
    border:none;
    border-radius: 8px;
    padding: 10px 80px;
    cursor: pointer;
    font-family: Open Sans;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    @media(max-width: 840px) {
        font-size: 18px;
        
    }
    @media(max-width: 640px) {
        font-size: 14px;
        margin-top: 20px;
        width: 100%;
    }

`