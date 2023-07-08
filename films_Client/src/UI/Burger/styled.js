import styled, { keyframes } from "styled-components";

const burgerAnimation = keyframes`
  0% {
    transform: translateX(0) rotate(0);
  }
  50% {
    transform: translateX(-10px) rotate(0);
  }
  100% {
    transform: translateY(4px)  translateX(-10px) rotate(45deg);
  }
`;

const crossAnimation = keyframes`
  0% {
    transform: translateX(0) rotate(0);
  }
  50% {
    transform: translateX(-10px) rotate(0);
  }
  100% {
    transform: translateY(-4px)  translateX(-10px) rotate(-45deg);
  }
`;

const reverseBurgerAnimation = keyframes`
  0% {
    transform: translateX(-10px) rotate(45deg);
  }
  50% {
    transform: translateX(-10px) rotate(0);
  }
  100% {
    transform: translateX(0) rotate(0);
  }
`;

const reverseCrossAnimation = keyframes`
  0% {
    transform: translateX(-10px) rotate(-45deg);
  }
  50% {
    transform: translateX(-10px) rotate(0);
  }
  100% {
    transform: translateX(0) rotate(0);
  }
`;

export const BurgerMenu = styled.ul`
  display: none;
  list-style: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 30px;
  position: absolute;
  right: 120px;
  top: 7px;
  cursor: pointer;

  @media (max-width: 800px) {
    display: flex;
  }

  &.burgerActive .line-1 {
    animation: ${burgerAnimation} 0.3s forwards;
  }

  &.burgerActive .line-2 {
    display: none;
  }

  &.burgerActive .line-3 {
    animation: ${crossAnimation} 0.3s forwards;
  }

  &:not(.burgerActive) .line-1 {
    animation: ${reverseBurgerAnimation} 0.3s forwards;
  }

  &:not(.burgerActive) .line-3 {
    animation: ${reverseCrossAnimation} 0.3s forwards;
  }
`;

export const BurgerLine = styled.li`
  width: 25px;
  height: 3px;
  background-color: #fff;
  margin-bottom: 5px;
  transition: all 0.3s;
`;
