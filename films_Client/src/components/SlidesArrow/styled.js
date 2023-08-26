import styled from 'styled-components';

export const Arrow = styled.div`
    width: 40px;
    height: 40px;
    color: white;
    position: absolute;
    border-radius: 50%;
    background-color: #053BA3;
    display: flex;
    right: -20px;
    position: absolute;
    justify-content: center;
    align-items: center;
    transition: all 0.2s linear;
    &:before{
        content: none;
    }
    &:hover{
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        background-color: rgba(5, 59, 163, 0.7)
    }


    @media(max-width: 820px) {
        right: 20px;
    }

    
`;
export const Icon = styled.img`

`