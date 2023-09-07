import styled from "styled-components";

interface Layout {
    size?: number,
    color?: string
}


export const Info = styled.div`
display: flex;
flex-direction: column;
`
export const Datos = styled.div<Layout>`
width: 100%;
display: flex;
align-items: flex-start;
flex-direction: row;
background-color: transparent;
`

export const Image = styled.img<Layout>`
max-width: 100%;
object-fit: cover;
height: ${(props => props.size)}px;
`