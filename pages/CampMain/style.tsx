import styled from '@emotion/styled';
import {mq, Breakpoints} from '@utils/mediaQuery';

export const Main = styled.div`
    display : grid;
    grid-auto-columns: max-content;
`;

export const CampContent = styled.div`
    padding : 1rem;
    width : 100%;
    word-break:break-all;
    ${mq(Breakpoints.lg)} {
        max-width : 80%;
        max-height : 45vh;
    };
}
`;