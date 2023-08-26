import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    font-size: 20px;
`

export const GoBack = styled(Link)`
    color: hsla(0,0%,100%,.72);
    text-decoration: none;
    margin-right: 20px;
    position: relative;
    &:after {
        content: '';
        position: absolute;
        top: 50%;
        right: -12px;
        width: 5px;
        height: 5px;
        background-color: white;
        border-radius: 50%;
    }
    &:before {
        transition: all .2s;
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        width: 0;
        height: 2px;
        background-color: white;
    }
    &:hover{
        color: white;
      &:before {
        width: 100%;
      }
    }
`

export const CurrentLocation = styled.p`
    color: hsla(0,0%,100%,.56);

`

