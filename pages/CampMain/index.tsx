import CampCardIndex from '@layouts/CampCardIndex';
import loadable from '@loadable/component';
import React from 'react';
import {Main, CampContent} from './style';

const CampMainHeadLine = loadable(() => import('@layouts/CampMainHeadLine'));
const CampMain = () => {
    return (
        <Main>
            <CampMainHeadLine />
            <CampCardIndex />
        </Main>
    )
};
export default CampMain;