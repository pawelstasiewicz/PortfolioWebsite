import styled from "styled-components";
import { portfolioColor } from "../../../assets/PortfolioData";

export const StyledBurgerBtn = styled.button`
    margin: 20px;
    background-color: transparent;
    padding: 10px;
    border: none;

    i{
        font-size: 24px;
        color: ${portfolioColor.hexGray1}
    }

    display: block;

		@media (min-width: 768px) {
			display: none;
		}

`