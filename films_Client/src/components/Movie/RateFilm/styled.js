import styled from 'styled-components';


export const RateWrapper = styled.ul`
    width: 100%;
    background-color: #202022;
    margin-left: 200px;
   
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 40px 20px;
`;

export const RateTitle = styled.h5`
    margin:0;
    font-size: 25px;
`
export const RateDescription = styled.p`
margin:10px 0;
font-size: 18px;
color: #c9c9c9;
`
export const StarsWrapper = styled.ul`
    list-style: none;
    width: 100%;
    padding:0;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`


export const Star = styled.li`
  position: relative;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  z-index: 1000;
  justify-content: center;
  border-radius: 50%;
  background-color: white;
  color: black;
  font-size: 20px; 
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    z-index:-1;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
  }

  &::before {
    border-bottom: 40px solid white; /* Цвет звездочки */
    transform: rotate(35deg);
  }

  &::after {
    border-bottom: 40px solid white; /* Цвет звездочки */
    transform: rotate(-35deg);
  }
`;