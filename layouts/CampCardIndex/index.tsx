import { CampInfo } from '@typings/interface';
import React from 'react';
import { CampCardFlexer, CampCardIndexInner, CampCardIndexWrapper, CampGuideTextDiv } from './style';

interface Props {
    data : CampInfo[];
}

const CampCardIndex = () => {
    const testData:CampInfo = {
        id : 1,
        title : '직접 해보는 페이스북 마케팅 실무', //타이틀
        startDate: '2021-02-28',
        status:'모집중',
        field: 'IT/백엔드',
        category:'pop',
        thumbUrl:''
    };

    return(
        <CampCardIndexWrapper>
            <CampCardIndexInner>
                <label>인기 부트 캠프</label>
                <CampCardFlexer>
                    <div>111</div>
                    <div>111</div>
                    <div>111</div>
                    <div>111</div>
                </CampCardFlexer>
                <label>특가 할인 캠프</label>
                <CampCardFlexer>
                    <div>111</div>
                    <div>111</div>
                    <div>111</div>
                    <div>111</div>
                </CampCardFlexer>
                <CampGuideTextDiv>
                    <label>현직자와 소통하며 배우는 실무 스킬, 퍼스널 트레이닝</label>
                </CampGuideTextDiv>
            </CampCardIndexInner>
        </CampCardIndexWrapper>
    )
}

export default CampCardIndex;