import * as React from "react";
import { useState } from "react";
import * as PropTypes from 'prop-types';
import { ScrollbarWrapper, Content } from "./wrapper"


export const Scrollbar = (prop) => {
    const { children } = prop
    return (
        <ScrollbarWrapper color="black">
            <Content>
                {children}
            </Content>
        </ScrollbarWrapper>
    )
}


Scrollbar.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Scrollbar