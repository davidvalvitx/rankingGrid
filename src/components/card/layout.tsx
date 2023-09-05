import styled from "styled-components";

interface Layout {
    size: number
}


export const Info = styled.div`
display: flex;
`
export const Datos = styled.div<Layout>`
position: absolute;
top: 0;
left: 0;
margin-top: -35px;
width: 100%;
display: flex;
align-items: flex-start;
flex-direction: row;
background-color: transparent;
height: ${(props) => props.size +35}px;
`

export const Image = styled.img<Layout>`
// min-height: 100%;
object-fit: cover;
height: ${(props => props.size)}px;
`