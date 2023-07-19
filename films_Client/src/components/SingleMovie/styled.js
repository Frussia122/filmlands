import styled from 'styled-components';



export const Wrapper = styled.section`
    color: white;
    position: relative;
    
`;


export const Video = styled.div`
z-index: -2;
position: relative;
margin-top: -100px;
width: 100%;
height: 100vh;
`

export const Content = styled.div`
    position: absolute;
  width: 100%;
  height: 100%;
  top: 97px;
  left: 0;
  padding-top: 60px;
  z-index: 1000;
  &::after{
    background: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
  }
`;

export const Title = styled.h2`
font-family: Righteous;
font-size: 48px;

`;

export const Description = styled.p`
  max-width: 600px;
  font-size: 20px;
  font-family: Open Sans;

`;
export const Info = styled.ul`
  display: flex;
  font-family: Righteous;

  list-style: none;
  padding-left: 0;
  font-size: 20px;
  color: gray;
  align-items: center;

  li{
    margin-right: 20px;
  }
`;
export const Rating = styled.li`
    border-radius: 10px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    background-color: green;
    color: white;
    height: 40px;
`;

export const Date = styled.li`
`;

export const Genre = styled.li`

`;

export const Age = styled.li`

`
export const Directors = styled.ul`
  display: flex;
  list-style:none;
  padding: 0;
  font-weight: 500;
  color: gray;
  font-family: Open Sans;
  letter-spacing: 0.5px;
`

export const Actors = styled.ul`
    display: flex;
    font-family: Open Sans;
    list-style:none;
    padding: 0;
    color: gray;
    font-weight: 500;
    letter-spacing: 0.5px;
`
export const Person = styled.li`
  margin-left: 5px;
  color: white;
  position: relative;
  opacity: 0.8;
  &:after{
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: gray;
    bottom: 0;
    left: 0;
  }
`
export const Controls = styled.div`
  margin-top: 40px;
`

export const Trailer = styled.button`
  background-color: #053BA3;
  color: white;
  border: 1px solid #053BA3;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 20px;
  font-family: Open Sans;
  cursor: pointer;
  transition: all .2s linear;
  &:hover{
    background-color: transparent;
    border: 1px solid white;
  }
  margin-right: 10px;

`
export const Watch = styled.button`
background-color: transparent;
color: white;
border: 1px solid white;
border-radius: 10px;
padding: 10px 20px;
font-size: 20px;
font-family: Open Sans;
cursor: pointer;
transition: all .2s linear;
&:hover{
  background-color: #053BA3;
  border: 1px solid #053BA3;
}

`