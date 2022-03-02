import React, { FC, PropsWithChildren, useCallback } from 'react';
import { Header, IconButton } from './style';
import { BsFillPersonFill } from "react-icons/bs";
const CampHeader = () => {
    return(
        <Header>
            <label>caffein</label>
            <IconButton><BsFillPersonFill/></IconButton>
        </Header>
    );
}

export default CampHeader;