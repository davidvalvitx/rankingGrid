import styled from "styled-components";
import * as React from "react";
import Icon from "-!svg-react-loader!./icon.svg";

interface Flag {
    flag?: number
}

const Icon2 = styled(Icon)`
height: 2em;
width: 2em;
`

const Flag = styled.div<Flag>`
position: absolute;
top: 0;
right: 0;
z-index: 99;
width: 42px;
height: 42px;
margin-left: auto;
margin-right: 0.2em;
display: ${(props) =>props.flag === 1 ? null : "none"};
`


const Marca = (props) => {
    return (
            <Flag flag={props.flag}>
                 <Icon2></Icon2>
            </Flag>


    )
}
export default Marca

