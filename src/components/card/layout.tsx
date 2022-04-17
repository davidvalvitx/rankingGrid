import styled from "styled-components";

interface Layout {
    size: string
}


export const Info = styled.div`
display: flex;
`
export const Datos = styled.div<Layout>`
position: absolute;
top: 0;
left: 0;
display: flex;
align-items: flex-start;
flex-direction: row;
background-color: transparent;
margin-bottom: 6%;
height: ${(props) => props.size};
`

export const Image = styled.img<Layout>`
min-height: 100%;
object-fit: cover;
width: ${(props => props.size)};
`