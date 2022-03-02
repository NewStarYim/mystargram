import styled from '@emotion/styled';
import {mq, Breakpoints} from '@utils/mediaQuery';

export const Header = styled.div`
    display : flex;
    align-itmes: center;
    justify-content: space-between;
    width : 100%;
    & > label {
        font-family: cursive;
        font-size : 1.5rem;
        font-weight: bold;
        color : #fff;
    }
`;

export const IconButton = styled.button`
    text-align : center;
    align-items : center;
    border-radius: 2rem;
    border: none;
    background-color: transparent;
    color : #fff;
    font-size : 1.5rem;
`