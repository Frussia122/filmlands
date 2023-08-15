import styled from 'styled-components';


export const Wrapper = styled.div`
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TypeBlock = styled.div`
    margin-right: 20px;
    display:flex;
    align-items: flex-end;
    justify-content: center;
    font-size: 24px;
    position: relative;
    width: 400px;
    background: #042159;
    height: 200px;
    background: ;
    border-radius: 9px;
    transition: all 0.1s linear;
    cursor: pointer;
    &:after{
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 100%;
        height: 94%;
        background-color: black;
        opacity: 0;

    }
    &:hover{
        transform: scale(1.05);
        &:after{
            opacity: 0.2;
        }
    }
  
`
export const Background = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 12px;
`

export const Type = styled.button`
    color: white;
    font-size: 20px;
    border: none;
    margin: 0;
    background:  #053BA3;
    padding: 10px 0 12px 0px;
    margin-bottom: -40px;
    border-bottom-right-radius: 9px;
    border-bottom-left-radius: 9px;
    border-top: 1px solid #fdfdfd2e;
    text-align: center;
    width: 100%;
`