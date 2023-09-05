import styled from "styled-components";
import * as React from "react";

interface ColorKPI {
    color?: string,
    textSize?: number
}

const KPIBox = styled.div`
position: absolute;
bottom: 0;
display: flex;
justify-content: center;
align-items: center;
background-color: rgb(255, 255, 255);
width: 100%;
height: 42px;
border-top: 1px solid black;
`

const KPIText = styled.p<ColorKPI>`
margin: 0;
text-transform: uppercase;
vertical-align: middle;
line-height: 20px;
font-weight: 600;
margin-left: 0.8em;
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