import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const NavLinks = styled.ul`
  padding-left: 0;
  list-style: none;
  display: flex;
  transition: all 0.2s linear;
  opacity: 1;
  
  @media (max-width: 800px) {
    position: absolute;
    padding: 20px;
    left: -100%;
    top: 40px;
    flex-direction: column;
    width: 100%;
    background-color: black;
    z-index: 1000;
  }

  &.menuActive {
    animation: ${slideIn} 0.5s forwards;
  }
`;

export const LinkItem = styled.li`
  margin-right: 20px;

  @media(max-width: 800px) {
    padding: 10px 0;
    border-bottom: 1px solid #252424;
    margin-bottom: 2px;
  }
`;

export const Link = styled.a`
  font-size: 20px;
  color: white;
  text-decoration: none;
  
  @media (max-width: 800px) {
    font-size: 24px;
  }
`;