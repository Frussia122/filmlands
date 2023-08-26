import styled from 'styled-components';

export const Wrapper = styled.section`
    color: white;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 37px 0 87px 0;

    @media(max-width: 900px) {
        flex-direction: column;
    }
    @media(max-width: 550px) {
        padding-bottom: 20px;
    }
`;

export const Connect = styled.div`
        @media(max-width: 550px) {
            margin-bottom: 50px;
        }
`;
export const FooterTitle = styled.h2`
    text-transform: uppercase;
    font-family: Nunito;
    font-size: 18px;
    font-weight: 400;
    line-height: 23px;
    text-transform: uppercase;
`;

export const NavContent = styled.div`
    display: flex;

    @media(max-width: 550px) {
        flex-direction: column;
    }
`;