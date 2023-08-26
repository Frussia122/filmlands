import styled from 'styled-components';
import {Wrapper} from 'components/Home/HomeSlider/styled'
export const MovieInformation = styled.div`
  
`


export const MovieMenu = styled.ul`
margin-top: -110px;
position: relative;
z-index: 1000;
  display: flex;
  list-style:none;
  padding:0;
  width: 100%;
  padding-bottom: 10px;
  border-bottom: 2px solid gray;
`

export const MovieAction = styled.li`
  margin-right: 20px;
  font-size: 24px;
  cursor: pointer;
  &.active_MovieAction {
    position: relative;

    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: #053BA3;
      bottom: -12px;
      left: 0;
    }
  }
   
`
export const TabContent = styled.div`
z-index: 1002;
position: relative;
  ${Wrapper} {
    margin-top: 0;
  }
`