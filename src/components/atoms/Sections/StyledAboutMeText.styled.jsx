import styled from "styled-components";
import { portfolioColor } from "../../../assets/PortfolioData";

export const StyledAboutMeText = styled.div`
    border: 1px solid ${portfolioColor.hexGray1};
    border-radius: 32px;
    width: 70%;
    margin: 60px auto;
    text-align: justify;

    @media (min-width: 1024px) {
        width: 40%; 
        padding: 0 30px;
    }
`