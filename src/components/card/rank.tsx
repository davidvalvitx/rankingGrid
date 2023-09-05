import styled from "styled-components";

interface Rank {
    tamano?: number
}

export const Rank = styled.div<Rank>`
position: inline-block;
align-self: flex-start;
align-content: center;
justify-content: center;
min-height: 15px;
min-width: 15px;
color: white;
padding: 0.5em;
font-weight: 100;
border: 1px solid black;
// min-width: ${(props) => props.tamano};
// height: ${(props) => props.tamano};
`

export const RankGrey = styled(Rank)`
margin-right: auto;
width: 100%;
background-color: rgba(245, 245, 245, 1);
border: 1px solid black;
color: black;
font-weight: 400;
`