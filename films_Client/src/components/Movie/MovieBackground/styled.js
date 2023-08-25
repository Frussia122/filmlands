import styled from 'styled-components';



export const VideoWrapper = styled.div`
margin-top: -120px;
  position: relative;
  padding-top: 56.25%; 
  z-index: 5;


  @media (max-width: 768px) {
    padding-top: 75%;
  }
`;

export const Video = styled.div`
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  
  &::after {
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