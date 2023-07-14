import styled from 'styled-components';


export const LinksWrapper = styled.ul`
    list-style: none;

    @media(max-width: 900px){
        padding: 0;
        margin-top: 50px;
        margin-right: 50px;
    }

    @media(max-width: 600px){
        padding: 0;
        margin-top: 50px;
        margin-right: 25px;
    }

    @media(max-width: 600px){
        padding: 0;
        margin-top: 0px;
    }
`;

export const Links = styled.li`
    font-family: Nunito;
    font-size: 17px;
    font-weight: 500;
    line-height: 16px;
    margin-bottom: 21px;
`;
export const GoodLinks = styled.a`

`;