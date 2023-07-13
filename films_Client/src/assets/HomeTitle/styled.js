import styled from 'styled-components';


export const Title = styled.h2`
  color: white;
  position: relative;
  width: fit-content;
  font-family: Nunito;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  text-transform: capitalize;

  @media(max-width: 560px) {
    font-size: 20px;
    margin: 0 0 10px 0;
  }
`
export const Icon = styled.img`
  position: absolute;
  right: -40px;
  top: -10px;
`;