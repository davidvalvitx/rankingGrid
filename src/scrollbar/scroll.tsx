import * as React from "react";
import * as PropTypes from 'prop-types';
import { ScrollbarWrapper, Content } from "./wrapper"

export const Scrollbar = props => {
    const { children } = props
    return (
        <ScrollbarWrapper>
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