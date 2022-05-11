import styled from "styled-components";

export const StyledActionContainer = styled.div`
    display: grid;
    /* grid-auto-flow: column; */
    grid-template-columns: auto;
    grid-template-rows: auto;
    grid-gap: 0.3em;
    border-radius: .5em;
    border: 1px solid hsl(10, 78%, 54%);
    padding: 0.5em;
    min-height: 50px;
    width: 100%;
`

export const StyledAction = styled.button`
    padding:0.2em;
    border-radius: 1em;
    border: 1px solid green;
    cursor: pointer;
    font-size: 1.1rem;
    font-family: "Roboto Black",monospace;
    background-color: hsl(360,78%,54%);
    color:white;
`