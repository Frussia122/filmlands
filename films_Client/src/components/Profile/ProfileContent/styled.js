import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const Content = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-rows: 170px 77px 164px;
  grid-template-columns: 1fr 1fr 1fr 1fr 2fr;
  gap: 16px;

  @media (max-width: 820px) {
    grid-template-rows: 170px 170px 77px 164px 164px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media (max-width: 600px) {
    grid-template-rows: 170px 170px 170px 77px 105px 105px;
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 440px) {
    grid-template-rows: 140px 140px 140px 77px 115px 115px 115px;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
 
`;

export const Icon = styled(FontAwesomeIcon)`
  color: white;
  margin-right: 10px;
  z-index: 1002;
  font-size: 30px;
`




export const UserActionContent = styled.div`
    margin-top: 20px;
    z-index: 2;
`
export const UserAction = styled.div`
  border-radius: 8px;
  background: #053BA3;
  position: relative;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  font-size: 18px;
  flex-direction: column;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.4s;

  
  &:after {
    content: "";
    position: absolute;
    transition: all 0.4s;

    top: 0;
    left: 0;
    z-index: 0;
    opacity: .4;
    border-radius: 8px;
    width: 100%;
    background-color: black;
    height: 100%;
  }
  &:hover {
    transform: translateY(-5px);
    &:after {
        opacity: .5;
    }
  }
  /* Styles for different grid positions */
  &:nth-child(1) {
    grid-row: 1 / span 1;
    grid-column: 1 / span 1;
  }
  &:nth-child(2) {
    grid-row: 1 / span 1;
    grid-column: 2 / span 3;
  }
  &:nth-child(3) {
    grid-row: 1 / span 1;
    grid-column: 5 / span 1;
  }
  &:nth-child(4) {
    ${UserActionContent} {
    margin-top: 0;
    }
    justify-content: center;
    flex-direction: row;
    grid-row: 2 / span 1;
    grid-column: 1 / span 5;
  }
  &:nth-child(5) {
    grid-row: 3 / span 1;
    grid-column: 1 / span 1;
  }
  &:nth-child(6) {
    grid-row: 3 / span 1;
    grid-column: 2 / span 1;
  }
  &:nth-child(7) {
    grid-row: 3 / span 1;
    grid-column: 3 / span 1;
  }
  &:nth-child(8) {
    grid-row: 3 / span 1;
    grid-column: 4 / span 1;
  }
  &:nth-child(9) {
    grid-row: 3 / span 1;
    grid-column: 5 / span 1;
  }

  /* Additional styles for mobile */
  @media (max-width: 850px) {
    font-size: 14px;
    &:nth-child(1) {
      grid-row: 1 / span 1;
      grid-column: 1 / span 4;
    }
    &:nth-child(2) {
      grid-row: 2 / span 1;
      grid-column: 1 / span 2;
    }
    &:nth-child(3) {
      grid-row: 2 / span 1;
      grid-column: 3 / span 2;
    }
    &:nth-child(4) {
      grid-row: 3 / span 1;
      grid-column: 1 / span 4;
    }
    &:nth-child(5) {
      grid-row: 4 / span 1;
      grid-column: 1 / span 1;
    }
    &:nth-child(6) {
      grid-row: 4 / span 1;
      grid-column: 2 / span 1;
    }
    &:nth-child(7) {
      grid-row: 4 / span 1;
      grid-column: 3 / span 1;
    }
    &:nth-child(8) {
      grid-row: 4 / span 1;
      grid-column: 4 / span 1;
    }
    &:nth-child(9) {
      grid-row: 5 / span 1;
      grid-column: 1 / span 4;
    }
  }

  /* Additional styles for smaller screens */
  @media (max-width: 600px) {
    font-size: 16px;
    &:nth-child(1) {
      grid-row: 1 / span 1;
      grid-column: 1 / span 3;
    }
    &:nth-child(2) {
      grid-row: 2 / span 1;
      grid-column: 1 / span 3;
    }
    &:nth-child(3) {
      grid-row: 3 / span 1;
      grid-column: 1 / span 3;
    }
    &:nth-child(4) {
      grid-row: 4 / span 1;
      grid-column: 1 / span 3;
    }
    &:nth-child(5) {
      grid-row: 5 / span 1;
      grid-column: 1 / span 1;
    }
    &:nth-child(6) {
      grid-row: 5 / span 1;
      grid-column: 2 / span 1;
    }
    &:nth-child(7) {
      grid-row: 5 / span 1;
      grid-column: 3 / span 1;
    }
    &:nth-child(8) {
      grid-row: 6 / span 1;
      grid-column: 1 / span 1;
    }
    &:nth-child(9) {
      grid-row: 6 / span 1;
      grid-column: 2 / span 1;
    }
  }

  @media (max-width: 440px) {
    font-size: 14px;
    &:nth-child(1) {
      grid-row: 1 / span 1;
      grid-column: 1 / span 2;
    }
    &:nth-child(2) {
      grid-row: 2 / span 1;
      grid-column: 1 / span 2;
    }
    &:nth-child(3) {
      grid-row: 3 / span 1;
      grid-column: 1 / span 2;
    }
    &:nth-child(4) {
      grid-row: 4 / span 1;
      grid-column: 1 / span 2;
    }
    &:nth-child(5) {
      grid-row: 5 / span 1;
      grid-column: 1 / span 1;
    }
    &:nth-child(6) {
      grid-row: 5 / span 1;
      grid-column: 2 / span 1;
    }
    &:nth-child(7) {
      grid-row: 6 / span 1;
      grid-column: 1 / span 1;
    }
    &:nth-child(8) {
      grid-row: 6 / span 1;
      grid-column: 2 / span 1;
    }
    &:nth-child(9) {
      grid-row: 7 / span 1;
      grid-column: 1 / span 1;
    }
  }
`;
