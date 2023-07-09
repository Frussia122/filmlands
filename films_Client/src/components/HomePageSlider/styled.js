import styled from 'styled-components';
import Slider from "react-slick";

export const Wrapper = styled.section`
  margin-top: 102px;
`
export const FilmWrapper = styled.section`
    color: white;
    margin-bottom: 80px;
`;

export const Title = styled.h2`
  color: white;
  position: relative;
  width: fit-content;
`
export const Icon = styled.img`
  position: absolute;
  right: -40px;
  top: -10px;
`;
export const SliderWrapper = styled(Slider)`
  margin-left: -40px;

  .slick-next {
    right: 76px;
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
 `;

export const Film = styled.div`
    position: relative;
    border-radius: 20px;
    width: 267.081px;
    height: 379px;
    background-size: cover;
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
`;

export const Year = styled.span`
  font-family: Open Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const Footer = styled.div`
    position: absolute;
    right: 0;
    z-index: 1000;
`;