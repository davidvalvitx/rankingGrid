import * as React from "react";
import styled, { css } from "styled-components";


interface Flip {
    size?: number,
    alto?: number,
    turnCards?: boolean
}

const Producto = styled.div<Flip>`

// max-width: ${(props) => props.size};
background-color: transparent;
width:${(props) => props.size}px;
height:${(props) => props.alto}px;
`

const ProductoFlip = styled.div<Flip>`
position: relative;
width: 100%;
height: 100%;
border: 1px solid black;
text-align: center;
transition: transform 0.6s;
transform-style: preserve-3d;
${props => props.turnCards ? css`
${Producto}: hover & {
    transform: rotateY(180deg);
}`: void (0)
    };`

const ProductoFrente = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100 %;
height: 100 %;
backface-visibility: hidden;
background-color: #bbb;
`

const ProductoAtras = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
backface-visibility: hidden;
transform: rotateY(180deg);
background-color: white;
`

export default function Flip(props) {
    return (
        <Producto size={props.size} alto={props.alto} >
            <ProductoFlip turnCards={props.turnCards}>
                <ProductoFrente />
                {props.children}
                <ProductoAtras>
                    <p style={{
                        "position": "absolute", "top": "50%",
                        "left": "50%", "marginRight": "-50%",
                        "transform": "translate(-50%,-50%)", "width": "90%"
                    }}>
                        
                    </p>
                </ProductoAtras>
            </ProductoFlip>
        </Producto >

    )
}
