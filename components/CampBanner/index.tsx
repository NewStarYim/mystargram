import React, { FC, PropsWithChildren, useCallback } from 'react';
import { BannerDisplay, BannerText, BannerImage, BannerHr, BannerNextButton } from './style';
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

// interface Banner {
//     img: string;
//     text : string;
// }

// const CampBanner: FC<PropsWithChildren<Banner>> = ({img, text, children}) => {
const CampBanner = () => {
    return(
        <BannerDisplay>
            <BannerText>
                <label>개발은</label>
                <label>카페인과 함께</label>
                <BannerNextButton>
                    <BannerHr />
                    <BsChevronCompactLeft/>
                    <BsChevronCompactRight/>
                </BannerNextButton>
            </BannerText>
            <BannerImage>
            </BannerImage>
        </BannerDisplay>
    );
}

export default CampBanner;
