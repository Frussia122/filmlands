import styled from 'styled-components';

export const MainWrapper = styled.section`
    background: linear-gradient(180deg, rgba(5, 59, 163, 0.00) 0%, #053BA3 100%);
`;

export const Wrapper = styled.div`
    color: white;
    display: flex;
    justify-content: space-around;
    padding-bottom: 80px;
`;

export const Title = styled.h2`
    margin-top: 48px;
    font-family: Nunito;
    font-size: 30px;
    font-weight: 500;
`;

export const Description = styled.p`
    max-width: 604px;
    margin: 106px 0 60px 0;
    font-family: Open Sans;
    font-size: 20px;
    font-weight: 400;
    line-height: 23px;
`

export const Button = styled.button`
    border-radius: 20px;
    padding: 11px 42px;
    font-family: Open Sans;
    font-size: 18px;
    font-weight: 400;
    line-height: 23px;
    border: none;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

export const Background = styled.img`

`;

export const Red = styled.p`
    color: red;
    font-weight: bold;
`