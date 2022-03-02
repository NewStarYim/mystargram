import styled from '@emotion/styled';
import {mq, Breakpoints} from '@utils/mediaQuery';

export const BannerDisplay = styled.div`
    display : grid;
    margin-top : 1rem;
    margin-bottom : 1rem;
    ${mq(Breakpoints.lg)} {
        display : flex;
    };
    align-itmes: center;
    justify-content: space-between;
`;
export const BannerText = styled.div`
    display : grid;
    padding-top : 3rem;
    width : 95vw;
    ${mq(Breakpoints.lg)} {
        padding-top : 9rem;
        width : 30%;
    };
    & > label {
        font-size : 2rem;
        font-weight: bold;
        color : #fff;
    }
   
`;
export const BannerNextButton = styled.div`
    display : none;
    ${mq(Breakpoints.md)} {
        display : flex;
        justify-content : space-between;
        align-items : center;
        & > svg {
            font-size : 2rem;
            color : #fff;
        }
    }
`;
export const BannerHr = styled.hr`
    ${mq(Breakpoints.md)} {
        display : flex;
        width : 75%;
        border : 0.5px solid #fff;
    }
`;

export const BannerImage = styled.div`
    display : flex;
    width : 95vw;
    height : 20vh;
    margin-top : 1rem;
    ${mq(Breakpoints.md)} {
        width : 65%;
        height : auto;
    };
    align-items : center;
    border-radius: 1rem;
    border: none;
    background-color: #f5f5f5;
    font-size : 1.5rem;
`