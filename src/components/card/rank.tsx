import styled from "styled-components";

const Rank = styled.div`
position: inline-block;
align-self: flex-start;
align-content: center;
justify-content: center;
min-height: 15px;
min-width: 15px;
color: white;
padding: 0.5em;
font-weight: 100;
`
// max-width: ${sizeOk};
// min-width: ${tamanoRank};
// height: ${tamanoRank};

const RankGrey = styled(Rank)`
margin-right: auto;
background-color: grey;
`