import styled from "styled-components";

interface IBackground {
    bg: string
}

export const ScrollbarWrapper = styled.div((bg) => ({
    width: "91vw",
    height: "100vh",
    // maxHeight: "900px",
    overflowX: "hidden",
    scrollbarColor: "white black",
    margin: 0,
    paddingRight: "1em",
    "::-webkit-scrollbar": {
        width: "5px",
    },
    "::-webkit-scrollbar-track": {
        boxShadow: "nset 0 0 6px grey",
        borderRadius: "0px"
    },
    "::-webkit-scrollbar-thumb": {
        background: "black",
        borderRadius: "0px",
        height: "40px"
    },
    "::-webkit-scrollbar-thumb:hover": {
        background: "grey",
        maxHeight: "40px"
    }
}))

export const Content = styled.div(() => ({}))

export default ScrollbarWrapper