import styled from "styled-components";
import { portfolioColor } from "../../../assets/PortfolioData";

export const StyledBurgerBtn = styled.button`
    margin: 20px;
    background-color: transparent;
    padding: 10px;
    border: none;

    i{
        font-size: 18px;
        color: ${portfolioColor.hexGray1}
    }
`