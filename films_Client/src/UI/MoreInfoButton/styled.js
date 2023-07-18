import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const Info = styled(Link)`
    border-radius: 20px;
    background: #053BA3;
    border: none;
    color: white;
    padding: 8px 25px;
    font-family: Open Sans;
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-right: 10px;
    @media (max-width: 1343px) {
        font-size: 20px;
     } 
     @media (max-width: 700px) {
        font-size: 10px;
    }
`;
