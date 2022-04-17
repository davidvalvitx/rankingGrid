import styled from "styled-components";


interface SizeInt {
    size: string
}

const Grid = styled.div`
display: grid;
justify-content: start;
justify-items: center;
align-items: center;
gap: 10px;
`

const GridR = styled(Grid) <SizeInt>`
grid-template-columns: repeat(auto-fill, minmax(${(props) => props.size}, 1fr));
`

export default GridR;