import CampBanner from '@components/CampBanner';
import CampHeader from '@components/CampHeader';
import React from 'react';
import { CampHeadLine, CampInner } from './style';


const CampMainHeadeLine = () => {
    return(
        <CampHeadLine>
            <CampInner>
                <CampHeader />
                <CampBanner />
            </CampInner>
        </CampHeadLine>
    );
};

export default CampMainHeadeLine;