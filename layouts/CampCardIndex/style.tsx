import styled from '@emotion/styled';
import {mq, Breakpoints} from '@utils/mediaQuery';

export const CampCardIndexWrapper = styled.div`
    width : 100vw;
    padding : 1rem;
    display : grid;
    grid-auto-rows: max-content;
    align-items : center;
    justify-content : center;
`;

export const CampCardIndexInner = styled.div`
    word-break:break-all;
    width : 95vw;
    height : auto;
    display : grid;
    grid-auto-rows: max-content;
    ${mq(Breakpoints.lg)} {
        max-width : 960px;
        max-height : 45vh;
        width : 960px;
    };
    & > label {
        font-size : 1.2rem;
        font-weight: bold;
    }
`;

export const CampCardFlexer = styled.div`
    display : flex;
    align-items : center;
    justify-content : space-between;
    margin-top : 2rem;
    margin-bottom : 2rem;
`

export const CampGuideTextDiv = styled.div`
    padding-top : 1rem;
    padding-bottom : 1rem;
    padding-left : 1rem;
    margin-bottom : 2rem;
    background-color : #6499FC;
    & > label {
        font-size : 1.2rem;
        font-weight: bold;
        color : #fff;
    }
`