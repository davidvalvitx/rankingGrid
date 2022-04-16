import * as React from "react";
import * as PropTypes from 'prop-types';
import { ScrollbarWrapper, Content } from "./wrapper"


export const Scrollbar = (prop) => {
    const { children } = prop
    return (
        <ScrollbarWrapper color={prop.color}>
            <Content>
                {children}
            </Content>
        </ScrollbarWrapper>
    )
}

// Scrollbar.propTypes = {
//     children: PropTypes.node.isRequired,
// }

export default Scrollbar