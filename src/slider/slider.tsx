import * as React from "react";
import { useState, useEffect } from "react";
import "./styles.css";


export default function Slider(props: any) {
    const [value, onChange] = useState<any>(1);
    useEffect(() => {
        const ele = document.querySelector<HTMLElement>('.buble')

        if (ele) {
            ele.style.left = `${Number(value / 4)}px`;
        }
    })

    return (
        <div className="slider-parent">
            <input type="range" className="color" min="1" max="500" value={value}
                onChange={({ target: { value: radius } }) => {
                    onChange(radius);
                }}
            />
        </div>
    );
}
