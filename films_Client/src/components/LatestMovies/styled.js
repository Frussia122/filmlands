import styled from 'styled-components';
import Slider from "react-slick";

export const SliderWrapper = styled(Slider)`
    color: white; 
    margin-top: 50px;
    margin-left: -40px;
    width: 99%;

    @media(max-width: 1343px) {
        margin-left: -70px;
    }
    @media(max-width: 820px ){
        margin-left: -4px;
    }
    @media(max-width: 700px) {
        width: 107%;
        margin-left: -35px;
    }
`;

export const Film = styled.div`
    margin-left: 0px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 99%;
    height: 480px;
    border-radius: 10px;
    position: relative;
    
    @media (max-width: 1343px) {
        margin-left: 80px;
        width: 90%;
    }
    @media (max-width: 820px) {
        margin-left: 5px;
        width: 100%;
    }
    @media (max-width: 700px) {
        height: 330px;
    }
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
     
    @media (max-width: 1343px) {
        width: 50%;
    }
    @media (max-width: 700px) {
       width: 75%;
    }
`;

export const Title = styled.h2`
    font-family: 'Righteous', cursive;
    font-size: 30px;
    margin: 0;

    @media (max-width: 1343px) {
       font-size: 50px;
    }   

    @media (max-width: 700px) {
        font-size: 30px;
    }
`;

export const Date = styled.span`
    margin: 0 0 14px 0;
    font-family: 'Open Sans', sans-serif;
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px;
    @media (max-width: 1343px) {
        font-size: 23px;
     } 

     @media (max-width: 700px) {
        font-size: 13px;
    }
`;

export const Description = styled.p`
    font-family: Open Sans;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 1;
    display: -webkit-box;
    -webkit-line-clamp: 10; 
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;

    @media (max-width: 700px) {
        font-size: 14px;
    }

`;

export const Content = styled.div`

`;

export const Actions = styled.div`
    display:flex;
    align-items: center;
`



export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`