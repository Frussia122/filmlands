import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const Favorites = styled(FontAwesomeIcon)`
    border-radius: 50%;
    background: #053BA3;
    padding: 9px;
    @media (max-width: 1343px) {
        padding: 13px;
        font-size: 22px;
     } 
     @media (max-width: 700px) {
        padding: 8px;
        font-size: 14px;
    }
`;
