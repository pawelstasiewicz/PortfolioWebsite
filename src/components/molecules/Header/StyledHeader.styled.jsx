import styled from "styled-components";

export const StyledHeader = styled.header`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 768px) {
        flex-direction: row-reverse;
        height: 80vh;
        justify-content: center;
        }
`