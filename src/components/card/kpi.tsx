import styled from "styled-components";
import * as React from "react";

interface ColorKPI {
    color?: string,
    textSize?: number
}

const KPIBox = styled.div`
position: absolute;
top: 0;
display: flex;
background-color: rgb(255, 255, 255);
width: fit-content;
height: fit-content;
min-width: 55px;
min-height: 20px;
margin-top: 100%;
`

const KPIText = styled.p<ColorKPI>`
margin: 0;
text-transform: uppercase;
vertical-align: middle;
line-height: 20px;
font-weight: 700;
margin-left: 0.6em;
margin-right: 0.5em;
padding: 0.2em;
color: ${(props) => props.color};
`

const KPI = (props) => {
    return (
        <KPIBox>
            <KPIText color={props.color} textSize={props.textSize} style={{ "fontSize": props.textSize }}>
                {props.children}
            </KPIText>
        </KPIBox>
    )
}

export default KPI