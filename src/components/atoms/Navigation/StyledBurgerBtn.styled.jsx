import styled from "styled-components";
import { portfolioColor } from "../../../assets/PortfolioData";

export const StyledBurgerBtn = styled.button`
    margin: 20px;
    background-color: transparent;
    padding: 10px;
    border: none;
    cursor: pointer;

    i{
        font-size: 24px;
        color: ${(props) => props.fontcolor};
    }

    display: block;

		@media (min-width: 768px) {
			display: none;
		}

`