import styled from "styled-components";
import { portfolioColor } from "../../../assets/PortfolioData";

export const StyledNavigation = styled.div`
    background-color: red;
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1{
        font-size: 24px;
        margin: 0 20px;
        color: ${portfolioColor.hexGray1};
        font-family: 'Nanum Myeongjo';
    }
`