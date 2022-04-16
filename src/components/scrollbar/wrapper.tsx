import styled from "styled-components";

export const ScrollbarWrapper = styled.div((prop) => ({
    padding: 0,
    margin: 0,
    minWidth: "60vw",
    height: "100vh",
    // maxHeight: "900px",
    overflowX: "hidden",
    scrollbarColor: "white black",
    paddingRight: "1rem",
    "::-webkit-scrollbar": {
        width: "0.3rem",
    },
    "::-webkit-scrollbar-track": {
        boxShadow: "nset 0 0 0.3rem grey",
        borderRadius: "0px"
    },
    "::-webkit-scrollbar-thumb": {
        background: `${prop.color}`,
        borderRadius: "0px",
        height: "2.3rem"
    },
    "::-webkit-scrollbar-thumb:hover": {
        background: `${prop.color}`,
        maxHeight: "2.3rem"
    }
}))

export const Content = styled.div(() => ({}));

export default ScrollbarWrapper;
