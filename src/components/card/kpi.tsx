import styled from "styled-components";
import * as React from "react";

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

const KPIText = styled.p`
margin: 0;
text-transform: uppercase;
vertical-align: middle;
line-height: 20px;
font-weight: 700;
margin-left: 0.6em;
margin-right: 0.5em;
padding: 0.2em;
`

const KPI = (props) => {
    const children = props
    return (
        <KPIBox>
            <KPIText>
                {children}
            </KPIText>
        </KPIBox>
    )
}

export default KPI