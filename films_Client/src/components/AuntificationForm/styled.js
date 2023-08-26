import styled, { css } from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const Wrapper = styled.section`
    color: white;
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 100px;
`;

export const Title = styled.h2`
    font-family: 'Righteous',cursive;
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    
`

export const FieldsList = styled(Form)`
    max-width: 400px;
    margin: 0 auto;
`
export const FieldWrapper = styled.div`
margin-bottom: 20px;

`
export const Error = styled(ErrorMessage)`
    color: red;
    font-size: 12px;
    margin-top: 7px;
`
export const CustomCheckbox = styled.label`
    display: flex;
    align-items: center;
`


export const Button = styled.button`
    width: 100%;
    color: white;
    padding: 20px 0;
    border-radius: 6px;
    border: none;
    background-color: #043491;
    text-transform: uppercase;
    font-family: 'Righteous',cursive;

`

export const AuthField = styled(Field)`

    background: none;
    font-size: 18px;
    padding: 10px;
    border: none;
    width: 400px;
    font-family: 'Righteous',cursive;
    color: white;
    border-bottom:2px solid #043491;
    outline: none;
    &::placeholder{
        color: #848181;
        text-transform: capitalize;
        font-size: 14px;
    }
    ${(props) =>
        props.type === 'checkbox' &&
        css`
        appearance: none;
        position: relative;
        width: 20px;
        height: 20px;
        border: 2px solid white;
        background-color: transparent;
        transition: background-color 0.3s;
        margin-right: 20px;
        &::before {
          content: '';
          position: absolute;
          top: 2px;
          left: 2px;
          width: 16px;
          height: 16px;
          background-color: white;
          opacity: 0;
          transition: opacity 0.3s;
        }
  
        &:checked {
          background-color: #043491;
        }
  
        &:checked::before {
          opacity: 1;
        }

      `}
`

