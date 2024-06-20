import styled from "styled-components";
import { portfolioColor } from "../../../assets/PortfolioData";

export const StyledNavigation = styled.nav`
    background-color: ${props => (props.backgroundcolor)};
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
    position: relative;
    top: -10px;

    @media (min-width: 768px) {
        padding: 0 150px;
    }
`