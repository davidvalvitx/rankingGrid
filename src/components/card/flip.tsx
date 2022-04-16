import styled, { css } from "styled-components";

export const ProductoFlip = styled.div`
position: relative;
width: 100%;
height: 100%;
text-align: center;
transition: transform 0.6s;
transform-style: preserve-3d;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`
// ${(props) => props.turncards ? css`
// ${Producto}: hover & {
//     transform: rotateY(180deg);
// }`: void (0)
//     };


export const ProductoFrente = styled.div`
position: absolute;
width: 100 %;
height: 100 %;
backface - visibility: hidden;
background - color: #bbb;
`

export const ProductoAtras = styled.div`
position: absolute;
width: 100 %;
height: 100 %;
backface - visibility: hidden;
transform: rotateY(180deg);
background - color: white;
`