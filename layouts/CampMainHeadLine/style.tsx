import styled from '@emotion/styled';
import {mq, Breakpoints} from '@utils/mediaQuery';

export const CampHeadLine = styled.div`
    width : 100vw;
    background : linear-gradient(#7475FF, #6499FC);
    padding : 1rem;
    display : grid;
    grid-auto-rows: max-content;
    align-items : center;
    justify-content : center;
`;

export const CampInner = styled.div`
    word-break:break-all;
    width : 95vw;
    height : auto;
    ${mq(Breakpoints.lg)} {
        max-width : 960px;
        max-height : 45vh;
        width : 960px;
    };
`;  