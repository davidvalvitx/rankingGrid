import styled from "styled-components";

interface Rank {
    tamano?: number,
    color?: string
}

export const Rank = styled.div<Rank>`
position: inline-block;
align-self: flex-start;
align-content: center;
justify-content: center;
min-height: 15px;
max-width: 22px;
color: white;
padding: 0.4em;
font-weight: 400;
border-bottom: 1px solid black;
// min-width: ${(props) => props.tamano};
// height: ${(props) => props.tamano};
text-overflow: ellipsis;
`

export const RankGrey = styled(Rank)`
margin-right: auto;
width: 100%;
background-color: ${(props) => props.color};
border-bottom: 1px solid black;
color: black;
font-weight: 400;
max-width: 100%;
`