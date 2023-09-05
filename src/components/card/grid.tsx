import styled from "styled-components";


interface SizeInt {
    size: number
}

const Grid = styled.div`
display: grid;
justify-content: start;
justify-items: left;
align-items: left;
gap: 0px;
`

const GridR = styled(Grid) <SizeInt>`
grid-template-columns: repeat(auto-fill, minmax(${(props) => props.size}px, ${(props) => props.size}px));
`

export default GridR;