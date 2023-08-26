import styled from 'styled-components';

export const Categories = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    @media(max-width: 1100px) {
        display: flex;
        align-items: center;
        overflow-x: scroll;
        width: 100%;
    }
`

export const Category = styled.li`
    width: 148px;
    font-family: Nunito;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding: 13px 16px;
    text-transform: capitalize;
    cursor: pointer;

    &.activeCategory {
        background: linear-gradient(270deg, #053BA3 0%, rgba(5, 59, 163, 0.22) 100%);
    }

    @media(max-width: 560px) {
        font-size: 12px;
    }
`
