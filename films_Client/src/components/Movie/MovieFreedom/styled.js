import styled from 'styled-components';

export const MainWrapper = styled.section`
    background: linear-gradient(180deg, rgba(5, 59, 163, 0.00) 0%, #053BA3 100%);
`;

export const Wrapper = styled.div`
    color: white;
    display: flex;
    justify-content: space-between;
    padding-bottom: 80px;

    @media(max-width: 1100px) {
        flex-direction: column;
    }
    @media(max-width: 415px) {
        justify-content: center;
        align-items: center;
        text-align: center;
    }
`;

export const Title = styled.h2`
    margin-top: 48px;
    font-family: Nunito;
    font-size: 30px;
    font-weight: 500;
    
    @media(max-width: 415px) {
        font-size: 24px;
        margin-top: 24px;
    }
`;

export const Description = styled.p`
    max-width: 604px;
    margin: 106px 0 60px 0;
    font-family: Open Sans;
    font-size: 20px;
    font-weight: 400;
    line-height: 23px;

    @media(max-width: 415px) {
        margin: 5px 0 20px 0;
        font-size: 14px;
        line-height: 1;
    }
`

export const Button = styled.button`
    border-radius: 20px;
    padding: 11px 42px;
    font-family: Open Sans;
    font-size: 18px;
    font-weight: 400;
    line-height: 23px;
    border: none;

    @media(max-width: 415px) {
        padding: 5px 26px;
        font-size: 14px;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    
    @media(max-width: 1100px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
`;

export const Background = styled.img`
    @media(max-width: 415px) {
        width: 100%;
    }
`;

export const Red = styled.p`
    color: red;
    font-weight: bold;
`