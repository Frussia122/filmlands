 import styled from 'styled-components';
import Slider from "react-slick";
import { Info } from 'UI/MoreInfoButton/styled';

export const Wrapper = styled.section`
  margin-top: 102px;
  @media(max-width: 560px) {
    margin-top: 20px;
  }
`
export const FilmWrapper = styled.div`
    color: white;
    margin-bottom: 80px;
    position: relative;
    margin-top: 16px;

`;

export const SliderWrapper = styled(Slider)`
  margin-left: -40px;

  .slick-next {
    right: 25px;

    @media(max-width: 560px) {
      right: 19px;
       top: 45%;

    }
  }
`;
export const Information = styled.div`
    position: absolute;
    background: rgba(16, 16, 16, 0.29);
    backdrop-filter: blur(2px);
    height: 0px;
    width: 100%;
    opacity: 0;
    bottom: 0;
    left: 0;
    transition: all .2s linear;
    padding: 7px 12px 18px 4px;

    @media(max-width 700px) {
      ${Info} {
        padding: 4px 12px;
      }
    }
 `;

export const Film = styled.div`
    position: relative;
    border-radius: 20px;
    width: 267.081px;
    height: 379px;
    background-size: cover;
    padding-top: 19px;
    background-repeat: no-repeat;
    background-position: center;
    overflow: hidden;
    cursor: pointer;
    &:hover{
      ${Information} {
        height: 107px;
        opacity: 1;
      }
    }

    @media(max-width: 1300px) {

      &:hover{
        ${Information} {
          height: 140px;
          opacity: 1;
        }
      }
    }

    @media(max-width: 900px) {
      width: 321.081px;
      height: 457px;
    }

    @media(max-width: 700px) {
      width: 248.081px;
      height: 347px;
      &:hover{
        ${Information} {
          height: 42%;
          opacity: 1;
        }
      }
    }
    @media(max-width: 600px) {
      width: 225.081px;
      height: 325px;
    }
    @media(max-width: 539px) {
      width: 170.081px;
      height: 255px;
    }

    @media(max-width: 400px) {
      width: 156.081px;
      height: 228px;
    }

    @media(max-width: 389px) {
      width: 141.081px;
      height: 227px;
    }
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const Name = styled.h2`
    margin: 0;
    font-family: Righteous;
    font-size: 25px;
    text-transform: uppercase;

    @media(max-width: 768px) {
      font-size: 14px;
    }
`;

export const Year = styled.span`
  font-family: Open Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media(max-width: 768px) {
    font-size: 12px;
  }
`;
export const Footer = styled.div`
    position: absolute;
    right: 0;
    z-index: 1000;
`;

export const CountSeasons = styled.div`
  position: absolute;
  top: -16px;
  right: -5px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 38px;
  border-radius: 10px;
  background: #053BA3;
  z-index: 1010;

  @media(max-width: 560px) {
    top: -14px;
    right: -6px;
    width: 75px;
    height: 28px;
    font-size: 12px;
  }
`