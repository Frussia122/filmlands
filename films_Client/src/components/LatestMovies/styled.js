import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Slider from "react-slick";

export const SliderWrapper = styled(Slider)`
    color: white; 
    margin-top: 50px;
`;

export const Film = styled.div`
    margin-left: 10px;
    background-size: cover;
    background-repeat: no-repeat;
    width: 790px;
    height: 480px;
    border-radius: 10px;
    position: relative;
`;

export const Information = styled.div`
    border-radius: 0px 10px 10px 0px;
    position: absolute;
    right: 0;
    top: 0;
    width: 350px;
    background: rgba(16, 16, 16, 0.60);
    backdrop-filter: blur(3px);
    height: 100%;
    padding: 21px 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
`;

export const Title = styled.h2`
    font-family: 'Righteous', cursive;
    font-size: 30px;
    margin: 0;
`;

export const Date = styled.span`
    margin: 0 0 14px 0;
    font-family: 'Open Sans', sans-serif;
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px;
`;

export const Description = styled.p`
    font-family: Open Sans;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 1;
`;

export const Content = styled.div`

`;

export const Actions = styled.div`
    display:flex;
    align-items: center;
`

export const Info = styled.button`
    border-radius: 20px;
    background: #053BA3;
    border: none;
    color: white;
    padding: 8px 25px;
    font-family: Open Sans;
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-right: 10px;
`;

export const Favorites = styled(FontAwesomeIcon)`
    border-radius: 20px;
    background: #053BA3;
    padding: 9px;
`;

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`