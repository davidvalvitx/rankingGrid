import styled from "styled-components";

interface Rank {
    tamano?: string
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
// max-width: ${(props) => props.tamano};
min - width: ${(props) => props.tamano};
height: ${(props) => props.tamano};
`

export const RankGrey = styled(Rank)`
margin-right: auto;
background-color: grey;
`