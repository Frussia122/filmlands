import styled from 'styled-components';


export const Wrapper = styled.div`
`

export const SingleNotify = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 10px;
    &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 1px;
        bottom: 0;
        background-color: white;
        left: 0;
        opacity: .2;

    }
`

export const Message = styled.p`
    font-size: 20px;
    margin: 0;
    text-transform: capitalize;
    margin-bottom: 10px;
    opacity: .8;
`

export const Date = styled.span`
    color: gray;
`