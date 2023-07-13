import styled from 'styled-components';
import { SliderWrapper } from 'components/HomeSlider/styled'

export const Content = styled.div`
    max-width: 1317px;
    padding-left: 45px;

    @media(max-width: 1353px) {
        ${SliderWrapper} {
            max-width: 680px;
        }
    }
    @media(max-width: 700px){
        ${SliderWrapper} {
            max-width: 113%;        
        }
        padding-left: 0;

    }
    .slick-next {
        right: 0px;
    }
    .slick-list{
        margin: 0 24px !important;
    }
    @media(max-width: 560px) {
        .slick-next {
            right: 10px;
        } 
    }
`

export const Name = styled.h3`
    font-family: Nunito;
    font-size: 25px;
    font-weight: 500;
    text-transform: capitalize;

    @media(max-width: 560px) {
        font-size: 18px;
    }
`

export const Description = styled.p`
    max-width: 960px;
    font-family: Open Sans;
    font-size: 18px;
    font-weight: 400;
    @media(max-width: 560px) {
        font-size: 14px;
    }
`

export const Loader = styled.img`
    height:379px;
    margin-top: 20px;
`