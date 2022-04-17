import Slider from '@mui/material/Slider';
import { styled as muistyle } from '@mui/material/styles';
import * as React from "react";
import Grid from '@mui/material/Grid';


export const SlideZara = muistyle(Slider)(({ theme }) => ({
    marginRight: "20px",
    marginBottom: "20px",
    marginTop: "25px",
    width: 100,
    color: "#000000",
    '& .MuiSlider-thumb': {
        border: '1px solid currentColor',
        '&:focus, &:hover, &.Mui-active': {
            boxShadow: '0 0 0 0px rgba(0, 0, 0, 0)'
        },
        '&.Mui-focusVisible': {
            boxShadow: '0 0 0 0px rgba(0, 0, 0, 0)'
        }
    }
}));

export const GridSlider = (props) => {
    return (
        <Grid container justifyContent="flex-end">
            {props.children}
        </Grid>

    )
}